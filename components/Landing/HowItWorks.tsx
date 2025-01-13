'use client';

import React from "react";
import { ArrowRight } from 'lucide-react';
import Link from "next/link";
import { routes } from "@/constants/routes";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Tell Us About Your Needs",
      description: "Answer a few questions about your insurance requirements",
      link: routes.survey
    },
    {
      number: "02",
      title: "Get Instant Quotes",
      description:
        "Our experts analyzes multiple providers to find your best matches",
      link: routes.survey

    },
    {
      number: "03",
      title: "Secure Your Coverage",
      description: "Complete your application and get insured in minutes",
      link: "#contact-me"

    },
  ];


  return (
    <section className="relative py-8 mt-5 overflow-hidden">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="flex flex-col items-center max-w-2xl mb-10 mx-auto">
          <span className="text-salmon-600 text-5xl font-medium tracking-wider uppercase mb-4">
            HOW IT WORKS
          </span>
          <h2 className="text-5xl font-bold mb-6 max-sm:text-3xl">
            Simple Steps to Get Insured
          </h2>
          <p className="text-lg">
            We have streamlined the insurance process to make it quick and easy
          </p>
        </div>

        <div className="relative">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center mb-4 last:mb-0 relative group">
                <div className="w-24 h-12 flex items-center justify-center mb-4">
                  <span className="text-4xl font-bold text-salmon-600 opacity-40 group-hover:opacity-100 transition-opacity">
                    {step.number}
                  </span>
                </div>
                <div className="max-w-md">
                  <Link href={step.link}> <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center group-hover:text-salmon-600">
                    {step.title}
                    <ArrowRight className="w-6 h-6 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3></Link>
                 
                  <p className="text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="w-1 h-16 bg-salmon-600 mx-auto mb-2 " />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

