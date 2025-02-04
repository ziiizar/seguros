"use client";

import { useState } from "react";
import Doctor from "@/public/Doctor.webp";
import Dad from "@/public/Dad.webp";
import Hospital from "@/public/Hospital.webp";
import House from "@/public/House.webp";
import ServiceHero from "./ServiceHero";
import ServiceAside from "./ServiceAside";
import { AnimatePresence, motion } from "framer-motion";
import { forms } from "../../constants/forms";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/Button";
import MobileCarousel from "./MobileCarousel";

export type ServiceCardType = {
  title: string;
  description: string;
  image: string;
  bgImage: string;
  color: "blue" | "orange";
  id: string;
};

type ServiceKey = "health" | "life";

const services: Record<ServiceKey, ServiceCardType> = {
  health: {
    title: "Health Insurance",
    description:
      "Comprehensive coverage designed to protect your health and well-being, ensuring access to quality medical care when you need it most.",
    image: Doctor.src,
    bgImage: Hospital.src,
    color: "blue",
    id: forms.HEALTH,
  },
  life: {
    title: "Life Insurance",
    description:
      "Secure your family's future with comprehensive life insurance, providing financial protection and peace of mind in times of uncertainty.",
    image: Dad.src,
    bgImage: House.src,
    color: "orange",
    id: forms.LIFE,
  },
};

const serviceList: ServiceCardType[] = Object.values(services);

const Main = () => {
  const [selectedService, setSelectedService] = useState<ServiceKey>("health");
  const [carouselIndex, setCarouselIndex] = useState(0);
  
  const handlePrevious = () => {
    setCarouselIndex((prev) => (prev === 0 ? serviceList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCarouselIndex((prev) => (prev === serviceList.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="flex min-h-[90dvh] h-[90dvh] px-8 gap-16 pb-16 pt-4 overflow-hidden">
      <div className="max-md:hidden flex gap-16 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedService}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="w-[65%]"
          >
            <ServiceHero currentService={services[selectedService]} />
          </motion.div>
        </AnimatePresence>
        <ServiceAside setSelectedService={setSelectedService} />
      </div>

      <div className="md:hidden h-full flex items-center">
        <Button variant="ghost" size="icon" className="absolute left-4 z-10" onClick={handlePrevious}>
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <MobileCarousel services={serviceList} currentIndex={carouselIndex} />
        <Button variant="ghost" size="icon" className="absolute right-4 z-10" onClick={handleNext}>
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </main>
  );
};

export default Main;
