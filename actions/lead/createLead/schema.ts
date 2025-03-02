import { ActionState } from "@/types";
import {  Lead, InsuranceRequested } from "@prisma/client";
import { z } from "zod";


export const createLeadSchema = z.object({
  name: z.string().min(1),
  phone: z
    .string()
    .min(6, "Phone number must be at least 6 digits")
    .max(15, "Phone number must be at most 18 digits")
    .regex(/^[^a-zA-Z]*$/, "Invalid phone number, must not contain letters"),
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
