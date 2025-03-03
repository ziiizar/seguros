'use server'

import { db } from "@/lib/db";
import { TSUpdateLeadSchema, ReturnType, updateLeadSchema } from "./schema";
import { createSafeAction } from "@/lib/create-safe-action";
import { revalidatePath } from "next/cache";

const handler = async (data: TSUpdateLeadSchema): Promise<ReturnType> => {
    try {
      // Solo se enviarán los campos proporcionados en "data"
      const updatedLead = await db.lead.update({
        where: { id: data.id },
        data,
      });
      revalidatePath('')
      return { data: updatedLead, message: "Lead editado" };
    } catch (error) {
      if (error instanceof Error && error.name === "Error")
        return { error: error.message };
      return { error: "Error al editar el lead" };
    }
  };
  

export const updateLead = createSafeAction(updateLeadSchema, handler);