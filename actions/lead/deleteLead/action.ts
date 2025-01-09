'use server'

import { db } from "@/lib/db";
import { TSDeleteLeadSchema, ReturnType, deleteLeadSchema } from "./schema";
import { createSafeAction } from "@/lib/create-safe-action";
import { revalidatePath } from "next/cache";

const handler = async (data: TSDeleteLeadSchema): Promise<ReturnType> => {
    try {
      // Solo se enviarán los campos proporcionados en "data"
      const updatedLead = await db.lead.update({
        where: { id: data.id },
        data,
      });
      revalidatePath('')
      return { data: updatedLead, message: "Lead Deleted " };
    } catch (error) {
      if (error instanceof Error && error.name === "Error")
        return { error: error.message };
      return { error: "An error ocurre while deleting lead" };
    }
  };
  

export const deleteLead = createSafeAction(deleteLeadSchema, handler);