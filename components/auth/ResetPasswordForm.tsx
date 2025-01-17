"use client";

import Link from "next/link";
import { routes } from "@/constants/routes";
import {Button} from "../ui/Button";
import { TSResetPasswordSchema } from "@/actions/auth/resetPassword/schema";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAction } from "@/hooks/use-action";
import { resetPassword } from "@/actions/auth/resetPassword/action";

const ResetPasswordForm = () => {

  const { execute, isLoading } = useAction(resetPassword, {
    onSuccess(data, message) {
      toast.success(message);
    },
    onError(error) {
      toast.error(error);
    },
  });

  const { register, handleSubmit } = useForm<TSResetPasswordSchema>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: TSResetPasswordSchema) => {
    await execute(data);
  };

  return (
    <>
    <p className="text-3xl">Let´s find your account.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full" >
       
            <input
            {...register("email")}
              className={
                "w-full bg-transparent p-2 focus:outline-none focus:ring-0 border-0 "
              }
            />
      




        {/* <div className="text-red-500">
          {errors.email?.message
            ? errors.email?.message
            : null}{" "}
        </div> */}

        <div className="flex gap-4">
          <Button disabled={isLoading} type="submit"
          >
            Send reset email
          </Button>
          <Button
            className=" bg-granny-smith-400 "
          >
            <Link href={routes.login}>Back to login</Link>
            
          </Button>
        </div>
      </form>

      {/* <div>{JSON.stringify(watch(), null, 2)}</div> */}
    </>
  );
};

export default ResetPasswordForm;
