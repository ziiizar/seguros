'use client'

import React from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { routes } from "@/constants/routes";

export const HeroText = () => {
  return (
    <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 place-content-center items-center z-10 px-4 sm:px-6 md:px-8">
      <h3 className="text-3xl sm:text-5xl md:text-7xl font-bold text-center leading-tight">
        Peace of mind starts{" "}
        <span className="relative">
          here
          {/* SVG animation code remains unchanged */}
        </span>
      </h3>
      <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-center mt-2 sm:mt-3 md:mt-4">
        Secure your future{" "}
        <span className="text-salmon-600">with us</span>
      </h3>
      {/* Uncomment and adjust if needed */}
      {/* <h5 className={cn("text-sm sm:text-base md:text-lg mt-2 sm:mt-3 md:mt-4", literata.className)}>
        Explore our comprehensive insurance solutions and secure your future.
      </h5> */}
      <Link href={routes.survey}>
      <Button className="w-40 sm:w-80 md:w-60 mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg py-2 sm:py-3">Start today</Button></Link>
    </div>
  );
};

