import FAQAccordion from "@/components/AboutUs/FAQAccordion";
import Footer from "@/components/global/Footer/Footer";
import Header from "@/components/global/Header/Header";
import { Mission, Vision } from "@/Icons/AboutUs";
import { cn } from "@/lib/utils";
import { literata } from "@/styles/fonts";
import AboooutUs from "@/public/AboooutUs.png";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-radial">
      <Header />
      <main className="px-4 sm:px-8 lg:px-16 pt-8 pb-16 flex flex-col gap-8">
        {/* Sección "About Us" */}
        <section className="flex flex-col items-center gap-8 px-4 sm:px-8 lg:px-24">
          <h3 className="max-md:text-3xl text-5xl font-semibold flex">
            AB{" "}
            <div className="w-40 relative overflow-hidden border-4 border-black rounded-3xl">
              <Image className=" rounded absolute -top-[40%]" src={AboooutUs} alt="" />
            </div>
            UT US.
          </h3>

          {/* Descripción */}
          <p
            className={cn(
              "text-center text-balance text-sm sm:text-base",
              literata.className
            )}
          >
            We founded GPF Services LLC in 2023 with the goal of transforming
            the insurance market through advanced technology and exceptional
            customer service. We specialize in health and life insurance, using
            our innovative web platform to simplify the acquisition process and
            offer personalized recommendations. We are committed to providing
            personalized and efficient attention, ensuring that each client
            receives the best possible support.
          </p>

          {/* Misión y Visión */}
          <div className="place-content-center flex flex-wrap max-md:flex-col">
            <div className="max-md:w-full w-1/2 flex place-content-end items-start px-10 py-10 md:h-72 md:border-e-[2px] md:border-black">
              <article className="bg-zinc-800 py-3 px-8 rounded-lg text-white/90  relative">
                <div className="bg-rajah-500 rounded-full size-12 flex place-content-center items-center absolute -top-4 -right-4 shadowOrange">
                  <Mission className={""}></Mission>
                </div>
                <h4 className="text-[clamp(0.75rem,2vw,1rem)] font-semibold">
                  Mission
                </h4>
                <p
                  className={cn(
                    "text-[clamp(0.75rem,2vw,1rem)]",
                    literata.className
                  )}
                >
                  Our mission is to revolutionize the insurance market by
                  providing personalized and accessible solutions through
                  advanced technology and simplified customer service.
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
                  Vision
                </h4>
                <p
                  className={cn(
                    "text-[clamp(0.75rem,2vw,1rem)]",
                    literata.className
                  )}
                >
                  Our vision is to become a leader in the market, recognized for
                  our innovation, commitment to customer satisfaction, and
                  ability to provide peace of mind and security to our clients.
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
              General FAQs
            </h4>
            <p className={cn("text-sm sm:text-base", literata.className)}>
              Find answers to the most common questions about our services,
              policies, and processes.
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
