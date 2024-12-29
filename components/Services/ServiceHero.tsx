'use client'

import { cn } from "@/lib/utils";
import { literata } from "@/styles/fonts";
import {Button} from "@/components/ui/Button";
import Image from "next/image";
import { ServiceCardType } from "./Main";
import { routes } from "@/constants/routes";
import Link from "next/link";

const ServiceHero = ({ currentService }: {currentService: ServiceCardType}) => {
  const gradientColor = currentService.color === "blue" ? "bg-turquoise-blue-500" : "bg-rajah-300";

  return (
    <section className="w-full relative overflow-hidden rounded-br-3xl rounded-tl-3xl rounded-bl-lg rounded-tr-lg place-content-end h-full">
      <div className="absolute inset-0">
      <Image
          src={currentService.bgImage}
          alt=""
          layout="fill"
          objectFit="cover"
          priority
         
          
        />
        <div className={cn("absolute inset-0 opacity-90 transition-opacity duration-500", gradientColor)} />
      </div>
      <div className="relative z-10 flex h-full">
        <div className="w-1/2 flex flex-col justify-center p-8">
          <h2 className="text-4xl font-bold mb-4">{currentService.title}</h2>
          <p className={cn("mb-6", literata.className)}>{currentService.description}</p>
          <Button className="hover:scale-105  transition-transform duration-300 ease-in-out">
    <Link href={`${routes.services}/survey`}>Get Service</Link>

            
          </Button>
        </div>
        <div className="w-1/2 relative">
        <Image
              src={currentService.image}
              alt={currentService.title}
              width={300}
              height={500}
              className="object-cover absolute bottom-0 -right-[25%] "
            />
        </div>
      </div>
    </section>
  )
}

export default ServiceHero