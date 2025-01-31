-- CreateTable
CREATE TABLE "surveyAnswers" (
    "id" TEXT NOT NULL,
    "leadId" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3),

    CONSTRAINT "surveyAnswers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "surveyAnswers" ADD CONSTRAINT "surveyAnswers_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "Lead"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
