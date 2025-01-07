import { ActionState } from "@/types";
import {  Lead, ClientStatus } from "@prisma/client";
import { z } from "zod";


export const updateLeadStatusSchema = z.object({
  id: z.string().uuid(),
  status: z.nativeEnum(ClientStatus),
})


export type TSUpdateLeadStatusSchema = z.infer<typeof updateLeadStatusSchema>;
export type ReturnType = ActionState<TSUpdateLeadStatusSchema, Lead>;
