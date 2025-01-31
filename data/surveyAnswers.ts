'use server'

import { db } from "@/lib/db";

export const getSurveyAnswerByLeadId = async (leadId:string) => {
 

    try {
        const surveyAnswers = await db.surveyAnswers.findMany({where:{leadId}})
    return surveyAnswers
}
     catch (error) {
        return null
    }
    
}