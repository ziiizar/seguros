import { db } from "@/lib/db";
import { TSUpdateLeadSchema, ReturnType, updateLeadSchema } from "./schema";
import { createSafeAction } from "@/lib/create-safe-action";

const handler = async (data: TSUpdateLeadSchema): Promise<ReturnType> => {

    try {
        const updatedLead = await db.lead.update({where:{id: data.id},data})
        return { data: updatedLead, message: "Lead editado" }
    } catch (error) {
        if (error instanceof Error && error.name === "Error")
            return { error: error.message };
          return { error: "Error al editar el lead" };
    }

}

export const updateLead = createSafeAction(updateLeadSchema, handler);