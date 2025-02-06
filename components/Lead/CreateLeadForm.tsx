'use client'

import { Input } from "@/components/ui/Input";
import { createLead } from "@/actions/lead/createLead/action";
import { TSCreateLeadSchema } from "@/actions/lead/createLead/schema";
import { useForm } from "react-hook-form";
import { useAction } from "@/hooks/use-action";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";
import { Shield } from "lucide-react";
import { FormFields } from "@/types/form";

interface CreateLeadFormProps {
  callback: () => void;
  answers: Record<string, string>;
  surveyCompletedAt: Date;
  formFields: FormFields['fields'];
}

const CreateLeadForm: React.FC<CreateLeadFormProps> = ({ callback, answers, surveyCompletedAt, formFields }) => {
  const { execute, isLoading } = useAction(createLead, {
    onSuccess: () => {
      callback();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitted }
  } = useForm<TSCreateLeadSchema>();

  setValue("insuranceRequested", "HEALTH");

  const onSubmit = async (data: TSCreateLeadSchema) => {
    const surveyAnswersData = Object.entries(answers).map(([ref, answer]) => {
      const field = formFields.find(f => f.ref === ref);
      return {
        question: field?.title || '',
        answer: answer,
        createdAt: surveyCompletedAt,
      };
    });

    await execute({
      ...data,
      surveyAnswers: surveyAnswersData,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-4">
        <Input
          type="text"
          placeholder="Your Name"
          {...register("name", { required: "Name is required" })}
          className="text-lg py-6 border border-gray-300 transition-colors"
        />

        <div>
          <Input
            type="text"
            placeholder="Your Phone Number"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^\+?[0-9]{6,18}$/, 
                message: "Invalid phone number"
              }
            })}
            className={`text-lg py-6 border transition-colors ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {isSubmitted && errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <Button
        className="text-lg px-4 py-4 bg-salmon-600 hover:bg-salmon-700 transition-colors ml-auto rounded-md h-10 w-28 flex justify-between"
        disabled={isLoading}
        type="submit"
      >
        Finish
        <Shield />
      </Button>
    </form>
  );
};

export default CreateLeadForm;
