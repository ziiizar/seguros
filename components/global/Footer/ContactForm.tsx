'use client'

import { createLead } from '@/actions/lead/createLead/action';
import { TSCreateLeadSchema } from '@/actions/lead/createLead/schema';
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useAction } from '@/hooks/use-action';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const ContactForm = () => {

    
    const { execute, isLoading  } = useAction(createLead, {
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
    

      const { register, handleSubmit } = useForm<TSCreateLeadSchema>();


  return (
    <form onSubmit={handleSubmit(onSubmit)}  className="space-y-4 ">
    <div className="grid grid-cols-2 gap-4 ">
      <Input
       {...register("name")}
        placeholder="Name"
        className="bg-white/10 border-0 text-white placeholder:text-gray-400"
      />
      <Input
       {...register("email")}
        type="email"
        placeholder="Email"
        className="bg-white/10 border-0 text-white placeholder:text-gray-400"
      />
    </div>
    {/* <Textarea
      placeholder="Message"
      className="bg-white/10 border-0 text-white placeholder:text-gray-400 min-h-[120px]"
    /> */}
    <Button disabled={isLoading}  className="w-full bg-salmon-600 hover:bg-salmon-600/90 rounded-sm">
      Send Message
    </Button>
  </form>
  )
}

export default ContactForm