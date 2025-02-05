import { cn } from "@/lib/utils";
import Image from "next/image";
import HeroBG from "@/public/HeroBG.webp";
import { getTranslations } from "next-intl/server";
import { routes } from "@/constants/routes";
import Link from "next/link";
import { Button } from "../ui/Button";

const Hero = async () => {
  const t = await getTranslations("Hero");

  return (
    <section className="w-full flex flex-col h-screen pb-4 sm:pb-6 md:pb-8 lg:pb-12 xl:pb-16 pt-2 sm:pt-3 md:pt-4 lg:pt-6 xl:pt-8 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 place-content-center items-center text-white relative">
      <div className={cn("absolute inset-0 opacity-20 transition-opacity duration-500 bg-black")}>
        <Image
          src={HeroBG || "/placeholder.svg"}
          alt={t("title")}
          layout="fill"
          objectFit="cover"
          priority
          sizes="100vw"
        />
        <div className={cn("absolute inset-0 opacity-10 transition-opacity duration-500 bg-black")} />
      </div>
      <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 place-content-center items-center z-10 px-4 sm:px-6 md:px-8">
      <h3 className="text-3xl sm:text-5xl md:text-7xl font-bold text-center leading-tight">
        {t('title')}
        <span className="relative">
        {t('span')}
        </span>
      </h3>
      <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-center mt-2 sm:mt-3 md:mt-4">
      {t('subtitle')}
        <span className="text-salmon-600">{t('sub_span')}</span>
      </h3>
      <Link href={routes.survey}>
      <Button className="w-40 sm:w-80 md:w-60 mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg py-2 sm:py-3">{t('button')}</Button></Link>
    </div>
    </section>
  );
};

export default Hero;
