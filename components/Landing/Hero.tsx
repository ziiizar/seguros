import { cn } from "@/lib/utils";
import Image from "next/image";
import HeroBG from '@/public/HeroBG.avif'
import { HeroText } from "./HeroText";

const Hero = () => {
  return (
    <section className="w-full  flex flex-col h-screen pb-8 pt-4 gap-4 place-content-center items-center text-white relative">
       <div className={cn("absolute inset-0 opacity-20 transition-opacity duration-500 bg-black")} >
            <Image
                src={HeroBG}
                alt="Contrat"
                layout="fill"
                objectFit="cover"
                priority
               
                
              />
             <div className={cn("absolute inset-0 opacity-10 transition-opacity duration-500 bg-black", )} />
            </div>
      <HeroText></HeroText>
      {/* <div className=" grid grid-cols-6 grid-rows-6 w-full h-full flex-1 gap-2">
        <div className="col-span-1 row-span-5 bg-turquoise-blue-800 rounded-3xl col-start-1 place-content-end p-2">
          <Image alt="life" src={Life}></Image>
          <Button>Life Insurance</Button>
        </div>
        <div className="col-span-1 row-span-1 bg-turquoise-blue-950 rounded-3xl col-start-1 flex p-2 gap-2 place-content-center items-center">
          <House></House>
          <p className="text-white font-semibold">Protect what matters most</p>
        </div>
        <div className="col-span-4 row-span-5 col-start-2 row-start-2 bg-turquoise-blue-900 rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={Family}
              alt="Happy family smiling together"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[10%] w-full max-w-md px-4">
            <div className="flex items-center justify-between bg-granny-smith-500 text-white rounded-full py-3 px-6 w-full max-w-md transition-colors  shadow-lg">
              <span className="font-semibold text-black">
                Join our Community
              </span>

              <div className="size-9 rounded-full bg-rajah-500 flex place-content-center items-center">
                <UpRightArrow />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-5 bg-turquoise-blue-800 rounded-3xl col-start-6 row-start-1 place-content-end p-2">
          <Image alt="Health" src={Health}></Image>
        <Button>Health Insurance</Button>

        </div>
        <div className="col-span-1 row-span-1 bg-turquoise-blue-950 rounded-3xl col-start-6 flex p-2 gap-2 place-content-center items-center">
        <Insurance></Insurance>
        <p className="text-white font-semibold">Life is better with insurance</p>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
