'use client'

import { motion } from 'framer-motion'
import Image from "next/image"
import FamilySection2 from "@/public/FamilySection2.png"
import { Personalized, Expert, Fast, Seamless } from "@/Icons/Section2"
import PowerPointCard from '@/components/PowerPointCard'

const Section2 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section className="min-h-screen w-full py-20 px-4 md:px-8 ">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <PowerPointCard
                logo={Personalized}
                name="Personalized Recommendations"
                description="We use advanced algorithms to match you with the best insurance plans."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <PowerPointCard
                logo={Seamless}
                name="Seamless Application Process"
                description="Apply for insurance easily in just a few minutes."
              />
            </motion.div>
          </div>

          {/* Center Column */}
          <motion.div 
            variants={itemVariants}
            className="relative aspect-square"
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-rajah-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-black shadow-2xl">
                <Image
                  className="object-cover"
                  alt="Happy family enjoying time together"
                  src={FamilySection2}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <PowerPointCard
                logo={Expert}
                name="Expert Support 24/7"
                description="Our team is available around the clock to assist you."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <PowerPointCard
                logo={Fast}
                name="Fast and Accurate Quotes"
                description="Get instant, accurate insurance quotes."
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Section2

