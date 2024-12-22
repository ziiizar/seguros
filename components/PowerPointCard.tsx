'use client'

import { motion } from 'framer-motion'
// import { Card, CardContent } from '@/components/ui/card'
import { literata } from '@/styles/fonts'
import { cn } from '@/lib/utils'

interface PowerPointCardProps {
  logo: React.ComponentType
  name: string
  description: string
}

const PowerPointCard = ({ logo: Logo, name, description }: PowerPointCardProps) => {
  return (
    <motion.div
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
       <article className="flex flex-col place-content-center items-center gap-2">
      <div className="rounded-full size-20 bg-rajah-500 flex items-center justify-center">
        <Logo  /> 
      </div>
      <strong>{name}</strong>
      <p className={cn("", literata.className)}>{description}</p>
    </article>
    </motion.div>
  )
}

export default PowerPointCard

