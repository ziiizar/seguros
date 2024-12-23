import { passwordSchema } from "@/schemas/password";
import { ActionState } from "@/types";
import { User } from "@prisma/client";
import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Enter a valid email",
  }),
  password: passwordSchema,
  // rememberMe: z.boolean(),
});

export type TSLoginSchema = z.infer<typeof LoginSchema>;
export type ReturnType = ActionState<TSLoginSchema, User>;
