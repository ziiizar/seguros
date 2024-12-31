import { ActionState } from "@/types";
import {  Lead, InsuranceRequested } from "@prisma/client";
import { z } from "zod";


export const createLeadSchema = z.object({
  name: z.string(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  age: z.number().optional(),
  zipCode: z.number().optional(),
  insuranceRequested: z.nativeEnum(InsuranceRequested).default("GENERAL").optional()
})


export type TSCreateLeadSchema = z.infer<typeof createLeadSchema>;
export type ReturnType = ActionState<TSCreateLeadSchema, Lead>;
