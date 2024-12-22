'use client'

import { useState } from "react";
import Doctor from "@/public/Doctor.png";
import Dad from "@/public/Dad.png";
import ServiceHero from "./ServiceHero";
import Hospital from '@/public/Hospital.png';
import House from '@/public/House.png';
import ServiceAside from "./ServiceAside";
import { AnimatePresence, motion } from "framer-motion";


export type ServiceCardType = {
  title: string;
  description: string;
  image: string;
  bgImage: string;
  color: string
};

const services: Record<'health' | 'life', ServiceCardType> = {
  health: {
    title: "Health Insurance",
    description: "Comprehensive coverage designed to protect your health and well-being, ensuring access to quality medical care when you need it most.",
    image: Doctor.src,
    bgImage: Hospital.src,
    color: "blue",
  },
  life: {
    title: "Life Insurance",
    description: "Secure your family's future with comprehensive life insurance, providing financial protection and peace of mind in times of uncertainty.",
    image: Dad.src,
    bgImage: House.src,
    color: "orange",
  },
};

const Main = () => {
  const [selectedService, setSelectedService] = useState<'health' | 'life'>('health');

  const currentService = services[selectedService];

  return (
    <main className="flex min-h-[90dvh] h-[90dvh] px-8 gap-16 pb-16 pt-4 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedService}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="w-[65%]"
        >
          <ServiceHero currentService={currentService} />
        </motion.div>
      </AnimatePresence>
      <ServiceAside setSelectedService={setSelectedService} />
    </main>
  );
};

export default Main;
