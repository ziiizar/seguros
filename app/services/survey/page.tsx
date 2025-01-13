import { notFound } from 'next/navigation';
import { fetchFormById } from '@/data/forms';
import { FormFields } from '@/types/form';
import SurveyForm from '@/components/Survey/Survey';
import { forms } from '@/constants/forms';


export default async function Page() {
  const form: FormFields | null = await fetchFormById(forms.HEALTH);

  if (!form) {
    notFound();
  }

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-gradient-to-tr from-salmon-50 to-salmon-100">
      {/* <div className="w-[40%] h-full relative">
        <Image
          src={Lifeguard}
          alt="Lifeguard overlooking beach"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div> */}
      <div className="w-screen flex place-content-center items-center p-16 h-screen">
        <SurveyForm form={form} />
      </div>
    </main>
  );
}
