'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useTranslations } from 'next-intl';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);


  const t =  useTranslations("FAQs")

  const faqItems = [
    {
      question:t('questions.question_1.question'),
      answer: t('questions.question_1.answer'),
    },
    {
      question: t('questions.question_2.question'),
      answer: t('questions.question_2.answer'),
    },
    {
      question: t('questions.question_3.question'),
      answer: t('questions.question_3.answer'),
    },
    {
      question: t('questions.question_4.question'),
      answer: t('questions.question_4.answer'),
    },
    {
      question: t('questions.question_5.question'),
      answer: t('questions.question_5.answer'),
    },
    {
      question: t('questions.question_6.question'),
      answer:t('questions.question_6.answer'),
    },
    {
      question: t('questions.question_7.question'),
      answer: t('questions.question_7.answer'),
    },
  ];

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="FAQ" className="w-full">
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleAnswer(index)}
            >
              <span className="text-base sm:text-lg font-semibold">
                {item.question}
              </span>
              <ChevronDownIcon
                className={`w-5 h-5 text-salmon-600 transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out max-h-0 ${
                openIndex === index ? 'max-h-96' : ''
              }`}
            >
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}