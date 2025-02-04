"use client";

import { cn } from "@/lib/utils";
import { literata } from "@/styles/fonts";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { ServiceCardType } from "./Main";
import { routes } from "@/constants/routes";
import Link from "next/link";

const ServiceHero = ({ currentService }: { currentService: ServiceCardType }) => {
  const gradientColor =
    currentService.color === "blue" ? "bg-turquoise-blue-500" : "bg-rajah-300";

  return (
    <section className="w-full relative overflow-hidden rounded-br-3xl rounded-tl-3xl rounded-bl-lg rounded-tr-lg place-content-end h-full">
      <div className="absolute inset-0">
        <Image
          src={currentService.bgImage}
          alt=""
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
          priority
        />
        <div
          className={cn(
            "absolute inset-0 opacity-90 transition-opacity duration-500",
            gradientColor
          )}
        />
      </div>
      <div className="relative z-10 flex flex-col sm:flex-row h-full justify-between">
        <div className="w-full sm:w-1/2 flex flex-col justify-center p-4 sm:p-8">
          <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">{currentService.title}</h2>
          <p className={cn("mb-4 sm:mb-6 text-sm sm:text-base", literata.className)}>
            {currentService.description}
          </p>
          <Link className="w-full sm:w-40 flex" href={`${routes.survey}`}>
            <Button className="hover:scale-105 w-full transition-transform duration-300 ease-in-out">
              Get Service
            </Button>
          </Link>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center sm:items-end ">
          <Image
            src={currentService.image}
            alt={currentService.title}
            width={250}
            height={400}
            className="object-contain  sm:max-h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
