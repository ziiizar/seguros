'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: 'What types of insurance do you offer?',
      answer: 'We specialize in Health and Life Insurance. Our health insurance plans cover medical expenses, prescriptions, and preventive care, while our life insurance policies provide financial protection for your loved ones.',
    },
    {
      question: 'How do I know which insurance plan is right for me?',
      answer: 'Our expert advisors will help you evaluate your needs, budget, and circumstances to recommend the most suitable insurance plan. We consider factors like your health status, family situation, and financial goals to provide personalized recommendations.',
    },
    {
      question: 'How quickly can my insurance coverage begin?',
      answer: 'Once your application is approved, health insurance coverage typically begins on the first day of the following month. Life insurance coverage starts immediately after policy approval and first premium payment.',
    },
    {
      question: 'Can I modify my insurance plan after enrollment?',
      answer: 'Yes, you can modify your coverage during annual enrollment periods or if you experience qualifying life events (marriage, birth, job change, etc.). Contact us to discuss your options.',
    },
    {
      question: 'How do I file a claim?',
      answer: 'Filing a claim is simple. Contact our claims department directly at claims@gpfservices.com or call 1-800-XXX-XXXX. Our team will guide you through the process and required documentation.',
    },
    {
      question: 'What payment methods do you accept for premiums?',
      answer: 'We accept various payment methods including credit/debit cards, ACH bank transfers, and electronic funds transfer (EFT). You can set up automatic monthly payments for your convenience.',
    },
    {
      question: 'Are there any waiting periods for coverage?',
      answer: 'Waiting periods vary by plan type and condition. Most preventive services are covered immediately, while some specific treatments may have waiting periods. We\'ll clearly explain any waiting periods before you enroll.',
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