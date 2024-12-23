import { confirmPasswodRequirements } from '@/constants/registerRequirements';
import { passwordSchema } from '@/schemas/password'
import {z} from 'zod'


export const NewPasswordSchema = z.object({
    password: passwordSchema,
    confirmPassword: z.string(),
    token: z.string(),
}) .refine((data) => data.password === data.confirmPassword, {
    message: confirmPasswodRequirements[0].message,
    path: ["confirmPassword"],
  });

export type TSNewPasswordSchema = z.infer<typeof NewPasswordSchema>