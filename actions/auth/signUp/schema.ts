import { confirmPasswodRequirements } from "@/constants/registerRequirements";
import { passwordSchema } from "@/schemas/password";
import { ActionState } from "@/types";
import {  User  } from "@prisma/client";
import { z } from "zod";


export const RegisterSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: passwordSchema,
  confirmPassword: z.string(),
})  .refine((data) => data.password === data.confirmPassword, {
  message: confirmPasswodRequirements[0].message,
  path: ["confirmPassword"],
});


export type TSRegisterSchema = z.infer<typeof RegisterSchema>;
export type ReturnType = ActionState<TSRegisterSchema, User>;
