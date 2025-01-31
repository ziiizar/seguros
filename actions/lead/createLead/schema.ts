import { ActionState } from "@/types";
import {  Lead, InsuranceRequested } from "@prisma/client";
import { z } from "zod";


export const createLeadSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email().optional(),
  insuranceRequested: z.nativeEnum(InsuranceRequested).default("GENERAL").optional(),
  surveyAnswers: z.array(
    z.object({
      question: z.string(),
      answer: z.string(),
      createdAt: z.date(),
    })
  ),
});

export type TSCreateLeadSchema = z.infer<typeof createLeadSchema>;
export type ReturnType = ActionState<TSCreateLeadSchema, Lead>;
