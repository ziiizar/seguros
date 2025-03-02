'use client'

import { createLead } from '@/actions/lead/createLead/action';
import { TSCreateLeadSchema } from '@/actions/lead/createLead/schema';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useAction } from '@/hooks/use-action';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const ContactForm = () => {
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

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitted },
    } = useForm<TSCreateLeadSchema>();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                {/* Name Field */}
                <div>
                    <Input
                        {...register('name', { required: 'Name is required' })}
                        placeholder="Name"
                        className={`bg-white/10 border-0 text-white placeholder:text-gray-400 ${
                            errors.name ? 'border-red-500' : ''
                        }`}
                    />
                    {isSubmitted && errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                </div>

                {/* Phone Field */}
                <div>
                    <Input
                        {...register('phone', {
                            required: 'Phone number is required',
                            pattern: {
                                value: /^(?:[+().\-\s]*[0-9][+().\-\s]*){6,20}$/,
                                message: "Invalid phone number, must contain 6-20 digits with optional special characters"
                              }
                        })}
                        type="text"
                        placeholder="Phone"
                        className={`bg-white/10 border-0 text-white placeholder:text-gray-400 ${
                            errors.phone ? 'border-red-500' : ''
                        }`}
                    />
                    {isSubmitted && errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                </div>
            </div>

            <Button
                disabled={isLoading}
                className="w-full bg-salmon-600 hover:bg-salmon-600/90 rounded-sm"
            >
                Send Message
            </Button>
        </form>
    );
};

export default ContactForm;
