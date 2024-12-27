import React from 'react'
import { Input } from '../ui/Input'
import { createLead } from '@/actions/lead/createLead/action';
import { TSCreateLeadSchema } from '@/actions/lead/createLead/schema';
import { useForm } from "react-hook-form";
import { useAction } from '@/hooks/use-action';
import { toast } from 'sonner';
import { Button } from '../ui/Button';

const CreateLeadForm = () => {

    const { execute, isLoading } = useAction(createLead, {
        onSuccess: (data, message) => {
          toast.success(message);
        },
        onError: (error) => {
          toast.error(error);
        },
      });

      const onSubmit = async (data: TSCreateLeadSchema) => {
        await execute(data);
      };
    

      const { register, handleSubmit, reset } = useForm<TSCreateLeadSchema>();

  return (
    <div className="space-y-6">
                        <h3 className="text-2xl font-medium text-turquoise-blue-700">
                          Great! You're a potential fit.
                        </h3>
                        <p className="text-lg text-granny-smith-600">
                          Please provide your contact information so we can get in touch with you.
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                          <Input
                            type="text"
                            placeholder="Your Name"
              {...register("name")}
                            className="text-lg py-6 border-turquoise-blue-200 focus:border-turquoise-blue-400 transition-colors"
                          />
                          <Input
                            type="email"
                            placeholder="Your Email"
              {...register("email")}
                           
                            className="text-lg py-6 border-turquoise-blue-200 focus:border-turquoise-blue-400 transition-colors"
                          />

                          <Button type='submit'>Finish</Button>
                        </form>
                      </div>
  )
}

export default CreateLeadForm