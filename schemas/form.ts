import { z } from 'zod';

export const questionSchema = z.object({
  question_text: z.string(),
  question_type: z.enum(['single_choice', 'multiple_choice', 'text']),
  choices: z.array(z.string()).optional(),
});

export const surveySchema = z.object({
  title: z.string(),
  description: z.string(),
  questions: z.array(questionSchema),
});

export type TSQuestionSchema = z.infer<typeof questionSchema>
export type TSSurveySchema = z.infer<typeof surveySchema>