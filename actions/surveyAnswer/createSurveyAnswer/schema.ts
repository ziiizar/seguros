import { ActionState } from "@/types";
import { surveyAnswers } from "@prisma/client";
import { z } from "zod";


export const createSurveyAnswerSchema = z.object({
  leadId: z.string(),
  question: z.string(),
  answer: z.string(),
  createdAt: z.string().datetime()
 

})


export type TSCreateSurveyAnswerSchema = z.infer<typeof createSurveyAnswerSchema>;
export type ReturnType = ActionState<TSCreateSurveyAnswerSchema, surveyAnswers>;
