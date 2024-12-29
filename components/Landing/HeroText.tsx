'use client'

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button"; // Ajusta la importación según tu estructura

export const HeroText = () => {
  return (
    <div className="flex flex-col gap-1 place-content-center items-center z-10">
      <h3 className="text-7xl font-bold text-center">
        Peace of mind starts{" "}
        <span className="relative">
          here
          <svg
            viewBox="0 0 286 173"
            fill="none"
            className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              d="M142.293 10C106.854 30 6.08202 25 1.23654 73C-2.10604 118 29.5633 123 122.688 121C215.814 120 316.298 120 275.761 63C230.14 10 97.0503 50 52.9384 10"
              stroke="#ed3e09"
              strokeWidth="3"
            />
          </svg>
        </span>
      </h3>
      <h3 className="text-4xl font-bold text-center">
        Secure your future{" "}
        <span className="text-salmon-600">with us</span>
      </h3>
      {/* Comenta o descomenta esta sección si es necesario */}
      {/* <h5 className={cn("", literata.className)}>
        Explore our comprehensive insurance solutions and secure your future.
      </h5> */}
      <Button className="w-40">Start today</Button>
    </div>
  );
};
