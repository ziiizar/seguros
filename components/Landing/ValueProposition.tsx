'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { Headset, Smile, User, Zap } from "lucide-react";
import { type LucideIcon } from 'lucide-react'
import SectionImage from "@/public/Deal.avif";
const features = [
    {
      Icon: User,
      title: "Personalized Recommendations",
      description: "We use advanced algorithms to match you with the best insurance plans.",
    },
    {
      Icon: Headset,
      title: "Expert Support 24/7",
      description: "Our team is available around the clock to assist you.",
    },
    {
      Icon: Smile,
      title: "Seamless Application Process",
      description: "Apply for insurance easily in just a few minutes.",
    },
    {
      Icon: Zap,
      title: "Fast and Accurate Quotes",
      description: "Get instant, accurate insurance quotes.",
    },
  ]

  function FeatureItem({ Icon, title, description, index }:{Icon: LucideIcon, title: string, description: string, index: number}) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
        className="flex items-start space-x-4"
      >
        <div className="flex-shrink-0">
          <div className="py-3 rounded-full text-[#ED3E09]">
            <Icon className="w-12 h-12" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </motion.div>
    )
  }
  
  

export default function ValueProposition() {
  return (
    <section className="py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
           
            className="relative drop-shadow-md"
          >
            <div className="aspect-square rounded-full overflow-hidden">
              <Image
                src={SectionImage}
                alt="Happy family"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ED3E09]/20 to-transparent rounded-full" />
          </div>

          <div className="space-y-12">
      {features.map((feature, index) => (
        <FeatureItem key={index} {...feature} index={index} />
      ))}
    </div>
        </div>
      </div>
    </section>
  );
}
