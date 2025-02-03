"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Lifeguard from "@/public/Lifeguard Overlooking Beach.webp"

const stats = [
  {
    value: "3+",
    description: "Years serving our community with trusted insurance solutions",
  },
  {
    value: "98%",
    description: "Client satisfaction rate with our personalized coverage solutions",
  },
  {
    value: "5K+",
    description: "Families protected with comprehensive insurance coverage",
  },
]

function StatItem({ value, description, delay }: { value: string; description: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="space-y-2 border-b-[#ED3E09] border-b"
    >
      <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#ED3E09] max-md:text-center max-md:items-center stats-value">
        {value}
      </div>
      <div className="text-xl sm:text-2xl md:text-3xl text-muted-foreground leading-tight pb-6 max-md:text-center max-md:items-center stats-description">
        {description}
      </div>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <section className="min-h-screen w-screen relative overflow-hidden flex">
      <div className="relative w-full md:w-1/2 px-4 sm:px-6 lg:px-8 h-full flex items-center max-md:place-content-center max-md:items-center">
        <div className="max-w-2xl">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16 leading-tight max-sm:text-3xl max-md:text-center max-md:items-center value-prop-title">
              Trust Indicators
              <span className="block text-xl sm:text-2xl md:text-3xl font-normal mt-4 text-muted-foreground max-md:text-center max-md:items-center value-prop-description">
                Building confidence through proven results
              </span>
            </h2>

            <div className="space-y-16 sm:space-y-24 md:space-y-32">
              {stats.map((stat, index) => (
                <StatItem key={index} {...stat} delay={0.2 * (index + 1)} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 relative hidden md:block">
        <div className="absolute inset-0 z-10">
          <Image
            src={Lifeguard || "/placeholder.svg"}
            alt="Trust and Security"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  )
}

