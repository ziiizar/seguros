import { cn } from "@/lib/utils"
import Image from "next/image"
import HeroBG from "@/public/HeroBG.webp"
import { HeroText } from "./HeroText"

const Hero = () => {
  return (
    <section className="w-full flex flex-col h-screen pb-4 sm:pb-6 md:pb-8 lg:pb-12 xl:pb-16 pt-2 sm:pt-3 md:pt-4 lg:pt-6 xl:pt-8 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 place-content-center items-center text-white relative">
      <div className={cn("absolute inset-0 opacity-20 transition-opacity duration-500 bg-black")}>
        <Image
          src={HeroBG || "/placeholder.svg"}
          alt="Contract"
          layout="fill"
          objectFit="cover"
          priority
          sizes="100vw"
        />
        <div className={cn("absolute inset-0 opacity-10 transition-opacity duration-500 bg-black")} />
      </div>
      <HeroText />
    </section>
  )
}

export default Hero

