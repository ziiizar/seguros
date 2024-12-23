'use server'

import { getUserByEmail } from '@/data/user';
import {NewPasswordSchema,TSNewPasswordSchema} from './schema'
import { createSafeAction } from "@/lib/create-safe-action";
import { getResetPasswordTokenByToken } from '@/data/resetPasswordToken';
import { db } from '@/lib/db';
import bcrypt from 'bcryptjs';


const handler = async (
    values: TSNewPasswordSchema,
  ) => {
  
    
    const { password,token } = values;

    if(!token) {
        return {error: "Missing token"}
    }

    const existingToken = await getResetPasswordTokenByToken(token)
  
    if(!existingToken){
      return{error: "Invalid token"}
    }
  
    const hasExpired = new Date(existingToken.expires) < new Date();
    if (hasExpired) {
      return { error: "Token has expired" };
    }
  
    const existingUser = await getUserByEmail(existingToken.email);
    if (!existingUser) {
      return { error: "Email does not exist" };
    }
  
    const hashedPassword = await bcrypt.hash(password,10)
    await db.user.update({where:{id: existingUser.id}, data: {password:hashedPassword}})
    await db.resetPasswordToken.delete({where: {id: existingToken.id}})
  
    return { data: existingUser, message: "Contraseña actualizada" };
  };
  
  export const newPassword = createSafeAction(NewPasswordSchema, handler);
