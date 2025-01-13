"use server";

import { signIn } from "@/auth";
import { getUserByEmail } from "@/data/user";
import { createSafeAction } from "@/lib/create-safe-action";
import { AuthError } from "next-auth";
import { LoginSchema, ReturnType, TSLoginSchema } from "./schema";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const handler = async (values: TSLoginSchema): Promise<ReturnType> => {
  const { email, password } = values;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Not user found" };
  }

  // * AGREGAR ESTO CUANDO SE PONGA EMAIL VARIFICATION
  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );
    await sendVerificationEmail(verificationToken.email, verificationToken.token);

    return {  message: "Confirmation email sent" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return { data: existingUser, message: "Welcome" };
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin")
        return { error: "Incorrect credentials" };

      if (error.type === "AccessDenied") return { error: "Access denied" };
    }
    return { error: "Error during login" };
  }
};

export const signInWithCredentials = createSafeAction(LoginSchema, handler);
