import { motion } from 'framer-motion';
import React from 'react'

export default function StatItem({ value, description, delay }: { value: string; description: string; delay: number }) {
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
