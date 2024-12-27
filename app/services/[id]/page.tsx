import { fetchFormById } from "@/data/forms";
import { FormFields, Field } from "@/types/form";
import Image from "next/image";

import Lifeguard from "@/public/Lifeguard Overlooking Beach.jpeg"
import SurveyForm from "@/components/Survey/Survey";

const page = async ({params}: {params:{id:string}}) => {
  const form: FormFields = await fetchFormById(params.id);

  if(!form){
    return null
  }

  return (
    <main className="w-screen h-screen flex justify-center items-center ">
      
      <div className="w-[40%] h-full relative">
          <div className="absolute inset-0">
              <Image
                  src={Lifeguard}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  priority
                 
                  
                />
              </div>
      </div>
      <div className="w-[60%] flex place-content-center items-center p-16 h-screen">
      <SurveyForm form={form}  />
    
        </div>
      
    </main>
  );
};

export default page;
