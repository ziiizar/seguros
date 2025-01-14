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
      <Header></Header>
      <main className="px-8 pt-16 pb-16 flex flex-col gap-8 ">
        <section className="flex flex-col place-content-center items-center gap-8 px-48">
          <h3 className="text-5xl font-semibold flex">
            AB{" "}
            <div className="w-40 relative overflow-hidden border-4 border-black rounded-3xl">
              <Image className=" rounded absolute -top-[40%]" src={AboooutUs} alt="" />
            </div>
            UT US.
          </h3>
          <p className={cn("text-center text-balance", literata.className)}>
            We founded GPF Services LLC in 2023 with the goal of transforming
            the insurance market through advanced technology and exceptional
            customer service. We specialize in health and life insurance, using
            our innovative web platform to simplify the acquisition process and
            offer personalized recommendations. We are committed to providing
            personalized and efficient attention, ensuring that each client
            receives the best possible support.
          </p>

          <div className="place-content-center flex flex-wrap">
            <div className="w-1/2 flex place-content-end items-start px-10 py-10 h-72 border-e-[2px] border-black">
              <article className="bg-zinc-800 py-3 px-8 rounded-lg text-white/90 h-52 relative">
                <div className="bg-rajah-500 rounded-full size-12 flex place-content-center items-center absolute -top-4 -right-4 shadowOrange">
                  <Mission className={""}></Mission>
                </div>
                <h4 className="text-xl font-semibold">Mission</h4>
                <p className={cn("", literata.className)}>
                  Our mission is to revolutionize the insurance market by
                  providing personalized and accessible solutions through
                  advanced technology and simplified customer service.
                </p>
              </article>
            </div>

            <div className="w-1/2 h-72 "></div>
            <div className="w-1/2 h-72 border-e-[2px] border-black"></div>

            <div className="w-1/2 flex place-content-start items-start h-72 px-10 py-10">
              <article className="bg-zinc-800 py-3 px-8 rounded-lg h-52 text-white/90 relative">
                <div className="bg-rajah-500 rounded-full size-12 flex place-content-center items-center absolute -top-4 -left-4 shadowOrange">
                  <Vision></Vision>
                </div>
                <h4 className="text-xl font-semibold">Vision</h4>
                <p className={cn("", literata.className)}>
                  Our vision is to become a leader in the market, recognized for
                  our innovation, commitment to customer satisfaction, and
                  ability to provide peace of mind and security to our clients.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="flex gap-8">
          <div className="w-1/2">
            <FAQAccordion></FAQAccordion>
          </div>
          <div className="w-1/2 flex flex-col gap-4 ">
            <h4 className="text-4xl font-semibold">General FAQs</h4>
            <p className={cn("", literata.className)}>
              Find answers to the most common questions about our services,
              policies, and processes.
            </p>
          </div>
        </section>

        {/* <section className="flex flex-col gap-4">
          <div className="flex flex-col place-content-center items-end">
            <h4 className="text-3xl font-semibold">Contact Us</h4>
            <p className={cn("", literata.className)}>
              Stay connected with us anytime you need.
            </p>
          </div>
          <div className="flex gap-8 ">
            <div className="flex place-content-center items-center w-1/2">
              <article className="bg-zinc-800 rounded-lg p-8 gap-2 flex flex-col text-white/90">
                <h4 className="text-2xl font-semibold">Info</h4>
                <ul className="flex flex-col gap-4">
                  <li>support@gpfservices.com</li>
                  <li>+1 786 543 210</li>
                  <li>24 hrs</li>
                </ul>
              </article>
            </div>
            <div className="w-1/2">
              <form action=""></form>
            </div>
          </div>
        </section> */}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default page;
