'use server'

import { db } from "@/lib/db";
import { TSCreateLeadSchema, ReturnType, createLeadSchema } from "./schema";
import { createSafeAction } from "@/lib/create-safe-action";

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
          const emailResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/mailto`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newLead),
          });
          const emailData = await emailResponse.json(); // <- Añade esta línea

          console.log('Email response:', emailData); // <- Mejor logging
          
          if (!emailResponse.ok) {
            throw new Error('Error al enviar el correo de notificación');
          }

        return { data: newLead, message: "Gracias por contactarnos" }
    } catch (error) {
        if (error instanceof Error && error.name === "Error")
            return { error: error.message };
          return { error: "Error al enviar los datos" };
    }

}

export const createLead = createSafeAction(createLeadSchema, handler);