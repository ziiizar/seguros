import { Metadata } from 'next'
import Image from "next/image";
import { notFound } from 'next/navigation'
import { fetchFormById } from "@/data/forms";
import { FormFields } from "@/types/form";
import SurveyForm from "@/components/Survey/Survey";
import Lifeguard from "@/public/Lifeguard Overlooking Beach.jpeg"

interface PageProps {
  params: { id: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const form = await fetchFormById(params.id);
  return {
    title: form ? `Survey: ${form.title}` : 'Survey Not Found',
  }
}

export default async function Page({ params }: PageProps) {
  const form: FormFields | null = await fetchFormById(params.id);

  if (!form) {
    notFound();
  }

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="w-[40%] h-full relative">
        <Image
          src={Lifeguard}
          alt="Lifeguard overlooking beach"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="w-[60%] flex place-content-center items-center p-16 h-screen">
        <SurveyForm form={form} />
      </div>
    </main>
  );
}

