"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import { literata } from "@/styles/fonts"

const steps = [
  {
    number: 1,
    title: "Get started",
    description: "We like to keep it simple. Tell us your name, contact information, and a little bit about you and your needs. Just like that, you're all set.",
  },
  {
    number: 2,
    title: "Book a consultation",
    description: "Let us know when you need care and we'll match you with an agent based on your family's needs and their availability.",
  },
  {
    number: 3,
    title: "Get coverage and pay",
    description: "We've got it from here. Your agent will show up so you can head out. After your consultation wraps up you'll receive a payment request through our app.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Header Section */}
          <div className="max-w-2xl mb-16">
            <span className="text-5xl font-medium text-[#ED3E09] mb-2 block">
              HOW IT WORKS
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#003049] leading-tight">
              We help families find reliable, flexible insurance
            </h2>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-turquoise-blue-500 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-[#FFE5D9] flex items-center justify-center text-[#ED3E09] font-semibold text-xl mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#003049]">
                  {step.title}
                </h3>
                <p className={cn("text-gray-800 leading-relaxed", literata)}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-turquoise-blue-500 rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between "
            >
              <div className="max-w-2xl mb-8 md:mb-0 relative overflow-hidden ">
                <h3 className="text-3xl font-bold text-[#003049] mb-4">
                  We&apos;d love to have you join our Community
                </h3>
                <p className="text-gray-600 mb-6">
                  Get reliable insurance coverage from vetted agents in your community.
                </p>
                <Button 
                  className="bg-[#003049] hover:bg-[#002038] text-white px-8 py-6 rounded-full text-lg"
                >
                  Join Now
                </Button>
              </div>
              {/* <div className="absolute -right-8 -bottom-6 w-64 h-64 bg-[#FFE5D9] rounded-full opacity-20 transform translate-x-1/3 translate-y-1/3" /> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

