"use client";

import { fetchFormById } from "@/data/forms";
import { FormFields } from "@/types/form";
import SurveyForm from "@/components/Survey/Survey";
import { forms } from "@/constants/forms";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export default function Page() {
  const locale = useLocale();
  const formId = locale === "es" ? forms.ES : forms.EN;
  const [form, setForm] = useState<FormFields | null>(null);

  useEffect(() => {
    const fetchForm = async () => {
      const form = await fetchFormById(formId);
      setForm(form);
    };

    fetchForm();
  }, [formId]);


  return (
    <main className="w-screen h-screen flex justify-center items-center bg-gradient-to-tr from-salmon-50 to-salmon-100">

      <div className="w-screen flex place-content-center items-center p-16 h-screen">
        {form ?  <SurveyForm form={form} /> : (<div className="w-full h-full flex justify-center items-center">Loading...</div>)}
      </div>
    </main>
  );
}
