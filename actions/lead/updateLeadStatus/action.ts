"use server";

import { db } from "@/lib/db";
import {
  TSUpdateLeadStatusSchema,
  ReturnType,
  updateLeadStatusSchema,
} from "./schema";
import { createSafeAction } from "@/lib/create-safe-action";
import { revalidatePath } from "next/cache";

const handler = async (data: TSUpdateLeadStatusSchema): Promise<ReturnType> => {
  const { id, status } = data;

  try {
    const updatedLead = await db.lead.update({
      where: { id },
      data: {
        status,
      },
    });
    revalidatePath("");
    return { data: updatedLead, message: "Lead editado" };
  } catch (error) {
    if (error instanceof Error && error.name === "Error")
      return { error: error.message };
    return { error: "Error al editar el lead" };
  }
};

export const updateLeadStatus = createSafeAction(
  updateLeadStatusSchema,
  handler
);
