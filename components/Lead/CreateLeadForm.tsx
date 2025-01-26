'use client'

import { Input } from "@/components/ui/Input";
import { createLead } from "@/actions/lead/createLead/action";
import { TSCreateLeadSchema } from "@/actions/lead/createLead/schema";
import { useForm } from "react-hook-form";
import { useAction } from "@/hooks/use-action";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";
import { Shield } from "lucide-react";

interface CreateLeadFormProps {
  callback: () => void;
}

const CreateLeadForm: React.FC<CreateLeadFormProps> = ({ callback }) => {

  const { execute, isLoading } = useAction(createLead, {
    onSuccess: (data, message) => {
      toast.success(message);
      callback();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onSubmit = async (data: TSCreateLeadSchema) => {
    await execute(data);
  };

  const { register, handleSubmit, setValue } = useForm<TSCreateLeadSchema>();

  setValue("insuranceRequested", "HEALTH");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-4">
        {" "}
        <Input
          type="text"
          placeholder="Your Name"
          {...register("name")}
          className="text-lg py-6 border border-gray-300 transition-colors"
        />
        <Input
          type="text"
          placeholder="Your Phone Number"
          {...register("phone")}
          className="text-lg py-6 border border-gray-300 transition-colors"
        />
      </div>

      <Button
        className="text-lg px-4 py-4 bg-salmon-600 hover:bg-salmon-700 transition-colors ml-auto rounded-md h-10 w-28 flex justify-between"
        disabled={isLoading}
        type="submit"
      >
        Finish
        <Shield className=""></Shield>
      </Button>
    </form>
  );
};

export default CreateLeadForm;
