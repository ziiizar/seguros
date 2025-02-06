import FAQAccordion from "@/components/AboutUs/FAQAccordion";
import Footer from "@/components/global/Footer/Footer";
import Header from "@/components/global/Header/Header";
import { Mission, Vision } from "@/Icons/AboutUs";
import { cn } from "@/lib/utils";
import { literata } from "@/styles/fonts";
import AboooutUs from "@/public/AboooutUs.png";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

const page = async () => {
  const t = await getTranslations("AboutUs"); // Obtén las traducciones según el idioma
  const f = await getTranslations("FAQs"); // Obtén las traducciones según el idioma

  return (
    <div className="bg-radial">
      <Header />
      <main className="px-4 sm:px-8 lg:px-16 pt-8 pb-16 flex flex-col gap-8">
        {/* Sección "About Us" */}
        <section className="flex flex-col items-center gap-8 px-4 sm:px-8 lg:px-24">
          <h3 className="max-md:text-xl text-5xl font-semibold flex">
          {t('title').split(" ")[0]}
            <div className="sm:w-40 w-24 relative overflow-hidden border-4 border-black rounded-3xl">
              <Image className=" rounded absolute -top-[40%] " src={AboooutUs} alt="" />
            </div>
            {t('title').split(" ")[1]}
          </h3>

          {/* Descripción */}
          <p
            className={cn(
              "text-center text-balance text-sm sm:text-base",
              literata.className
            )}
          >
           {t('description')}
          </p>

          {/* Misión y Visión */}
          <div className="place-content-center flex flex-wrap max-md:flex-col">
            <div className="max-md:w-full w-1/2 flex place-content-end items-start px-10 py-10 md:h-72 md:border-e-[2px] md:border-black">
              <article className="bg-zinc-800 py-3 px-8 rounded-lg text-white/90  relative">
                <div className="bg-rajah-500 rounded-full size-12 flex place-content-center items-center absolute -top-4 -right-4 shadowOrange">
                  <Mission className={""}></Mission>
                </div>
                <h4 className="text-[clamp(0.75rem,2vw,1rem)] font-semibold">
                {t('Mission.title')}
                </h4>
                <p
                  className={cn(
                    "text-[clamp(0.75rem,2vw,1rem)]",
                    literata.className
                  )}
                >
                  {t('Mission.description')}
                </p>
              </article>
            </div>

            <div className="max-md:hidden w-1/2 h-72 "></div>
            <div className="w-1/2 h-72 md:border-e-[2px] md:border-black max-md:hidden"></div>

            <div className="max-md:w-full w-1/2 flex place-content-start items-start md:h-72 px-10 py-10">
              <article className="bg-zinc-800 py-3 px-8 rounded-lg  text-white/90 relative ">
                <div className="bg-rajah-500 rounded-full size-12 flex place-content-center items-center absolute -top-4 -left-4 shadowOrange">
                  <Vision></Vision>
                </div>
                <h4 className="text-[clamp(0.75rem,2vw,1rem)] font-semibold">
                {t('Vision.title')}
                </h4>
                <p
                  className={cn(
                    "text-[clamp(0.75rem,2vw,1rem)]",
                    literata.className
                  )}
                >
                  {t('Vision.description')}
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Sección FAQ */}
        <section className="flex flex-col lg:flex-row gap-8 px-4 sm:px-8 lg:px-24">
          {/* Texto de introducción a las FAQs */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 order-2 max-lg:order-1">
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            {f('title')}
            </h4>
            <p className={cn("text-sm sm:text-base", literata.className)}>
            {f('description')}
            </p>
          </div>

          {/* Acordeón de preguntas frecuentes */}
          <div className="w-full lg:w-1/2 order-1 max-lg:order-2">
            <FAQAccordion />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default page;