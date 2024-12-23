"use server";

import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { RegisterSchema, TSRegisterSchema } from "./schema";
import { createSafeAction } from "@/lib/create-safe-action";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";


const handler = async (values: TSRegisterSchema) => {
 

  const { email, name, password } = values;

  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return { error: "Email already exist" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { message: "Confirmation email sent", data: newUser };
};

  export const signUp = createSafeAction(RegisterSchema, handler);
