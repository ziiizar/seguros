'use server'

import { db } from "@/lib/db";
import { TSCreateLeadSchema, ReturnType, createLeadSchema } from "./schema";
import { createSafeAction } from "@/lib/create-safe-action";
import { sendNewLeadEmail } from "@/lib/mail";
import { sendNewLeadNotification } from "@/lib/notification";

const handler = async (data: TSCreateLeadSchema): Promise<ReturnType> => {

    try {
        const newLead = await db.lead.create({
            data: {
              name: data.name,
              phone: data.phone,
              email: data.email,
              insuranceRequested: data.insuranceRequested,
              surveyAnswers: {
                create: data.surveyAnswers.map(sa => ({
                  question: sa.question,
                  answer: sa.answer,
                  createdAt: sa.createdAt,
                })),
              },
            },
          });
        await sendNewLeadEmail(newLead)
        await sendNewLeadNotification(newLead)

        return { data: newLead, message: "Gracias por contactarnos" }
    } catch (error) {
        if (error instanceof Error && error.name === "Error")
            return { error: error.message };
          return { error: "Error al enviar los datos" };
    }

}

export const createLead = createSafeAction(createLeadSchema, handler);