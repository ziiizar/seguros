'use server'

import { getUserByEmail } from '@/data/user';
import { ResetPasswordSchema,TSResetPasswordSchema} from './schema'
import { createSafeAction } from "@/lib/create-safe-action";
import { generateResetPasswordToken } from '@/lib/tokens';
import { sendResetPasswordEmail } from '@/lib/mail';


const handler = async (values: TSResetPasswordSchema) => {

  const { email } = values;
  
  const existingUser = await getUserByEmail(email);
  if (!existingUser) {
    return { error: "Email not found" };
  }
  
  const resetPasswordToken = await generateResetPasswordToken(email);
  
  await sendResetPasswordEmail(
    resetPasswordToken.email,
    resetPasswordToken.token
  );
  
  return { data: existingUser, message: "Revise su correo" };

  };

  export const resetPassword = createSafeAction(ResetPasswordSchema, handler);
  


