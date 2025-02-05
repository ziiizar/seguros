"use client"

import Image from "next/image"
import Lifeguard from "@/public/Lifeguard Overlooking Beach.webp"
import { useTranslations } from "next-intl";
import StatItem from "@/components/Landing/StatsItem";




export default function Stats() {


  const t = useTranslations('Stats');  // Obtén las traducciones para la sección de estadísticas

  const stats = [
    { value: "3+", description: t("years") },
    { value: "98%", description: t("satisfaction") },
    { value: "5K+", description: t("families_protected") },
  ]
  

  return (
    <section className="min-h-screen w-screen relative overflow-hidden flex">
      <div className="relative w-full md:w-1/2 px-4 sm:px-6 lg:px-8 h-full flex items-center max-md:place-content-center max-md:items-center">
        <div className="max-w-2xl">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16 leading-tight max-sm:text-3xl max-md:text-center max-md:items-center value-prop-title">
              {t("title")}
              <span className="block text-xl sm:text-2xl md:text-3xl font-normal mt-4 text-muted-foreground max-md:text-center max-md:items-center value-prop-description">
                {t("subtitle")}
              </span>
            </h2>

            <div className="space-y-16 sm:space-y-24 md:space-y-32">
              {stats.map((stat, index) => (
                <StatItem key={index} {...stat} delay={0.2 * (index + 1)} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 relative hidden md:block">
        <div className="absolute inset-0 z-10">
          <Image
            src={Lifeguard || "/placeholder.svg"}
            alt="Trust and Security"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  )
}
