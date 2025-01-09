import { ActionState } from "@/types";
import {  Lead } from "@prisma/client";
import { z } from "zod";


export const deleteLeadSchema = z.object({
  id: z.string().uuid(), 
  active: z.boolean(),
});


export type TSDeleteLeadSchema = z.infer<typeof deleteLeadSchema>;
export type ReturnType = ActionState<TSDeleteLeadSchema, Lead>;
