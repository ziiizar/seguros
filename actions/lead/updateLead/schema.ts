import { ActionState } from "@/types";
import {  Lead, InsuranceRequested, ClientStatus } from "@prisma/client";
import { z } from "zod";


export const updateLeadSchema = z.object({
  id: z.string().uuid(), // Obligatorio
  name: z.string().optional(), // Opcional
  phone: z.string().optional(),
  email: z.string().email().optional(),
  age: z.number().optional(),
  zipCode: z.number().optional(),
  insuranceRequested: z.nativeEnum(InsuranceRequested).optional(),
  status: z.nativeEnum(ClientStatus).optional(),
  // active: z.boolean().optional(),
});


export type TSUpdateLeadSchema = z.infer<typeof updateLeadSchema>;
export type ReturnType = ActionState<TSUpdateLeadSchema, Lead>;
