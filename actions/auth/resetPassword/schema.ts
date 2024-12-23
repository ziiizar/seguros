import {z} from 'zod'

export const ResetPasswordSchema = z.object({
    email: z.string().email({
        message: "Introduce un email valido"
    }),
})


export type TSResetPasswordSchema = z.infer<typeof ResetPasswordSchema>
