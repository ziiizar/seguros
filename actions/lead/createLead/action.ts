import { db } from "@/lib/db";
import { TSCreateLeadSchema, ReturnType, createLeadSchema } from "./schema";
import { createSafeAction } from "@/lib/create-safe-action";

const handler = async (data: TSCreateLeadSchema): Promise<ReturnType> => {

    try {
        const newLead = await db.lead.create({data})
        return { data: newLead, message: "Lead creado" }
    } catch (error) {
        if (error instanceof Error && error.name === "Error")
            return { error: error.message };
          return { error: "Error al crear el lead" };
    }

}

export const createLead = createSafeAction(createLeadSchema, handler);