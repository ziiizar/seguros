"use client";

import Link from "next/link";
import { routes } from "@/constants/routes";
import {Button} from "../ui/Button";
import { toast } from "sonner";
import { useAction } from "@/hooks/use-action";
import { signInWithCredentials } from "@/actions/auth/signInWithCredentials/action";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { TSLoginSchema } from "@/actions/auth/signInWithCredentials/schema";

const LoginForm = () => {
 
  const router = useRouter();

  const { execute, isLoading } = useAction(signInWithCredentials, {
    async onSuccess(data, message) {
      toast.success(message);
      router.push(routes.home);
  },
    onError(error) {
      console.log("Error capturado en onError:", error);
      toast.error(error);
    },
  });

  const { register, handleSubmit } = useForm<TSLoginSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: TSLoginSchema) => {
    await execute(data);
  };

  return (
    <>
      <form
        className="flex flex-col gap-6 w-full"
       
      >
      
        <input
        {...register("email")}
          placeholder="Email"
          className={
            "w-full bg-turquoise-blue-50 p-2 focus:outline-none focus:ring-0 border-2 rounded-3xl border-granny-smith-900/70 "
          }
        />

        <input
         {...register("password")}
          placeholder="Password"
          className={
            "w-full bg-turquoise-blue-50 p-2 focus:outline-none focus:ring-0 border-2 rounded-3xl border-granny-smith-900/70 "
          }
        />
     

        {/* <div className="text-red-500">
          {errors.email?.message
            ? errors.email?.message
            : errors.password?.message
            ? errors.password?.message
            : null}{" "}
        </div> */}
        <Link href={routes.reset}>Forgot password?</Link>

        <Button
        disabled={isLoading}
        type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Log in
        </Button>
        {/* <div className="flex gap-2">
          <h3 className="">Need help? </h3>
          <Link href={routes.register} className=" text-salmon-600">
          Contact Support
          </Link>
        </div> */}
      </form>

      {/* <div>{JSON.stringify(watch(), null, 2)}</div> */}
    </>
  );
};

export default LoginForm;
