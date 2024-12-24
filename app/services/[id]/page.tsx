import { fetchFormById } from "@/data/forms"
import { FormFields } from "@/types/form"
import DynamicSurveyForm from "@/components/Survey/Survey"
import Lifeguard from "@/public/Lifeguard Overlooking Beach.jpeg"

const Page = async ({ params }: { params: { id: string } }) => {
  const form: FormFields = await fetchFormById(params?.id)

  if (!form) {
    return <h4>Form not found</h4>
  }

  return <DynamicSurveyForm form={form} backgroundImage={Lifeguard.src} />
}

export default Page

