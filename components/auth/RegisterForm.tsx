"use client";
import { routes } from "@/constants/routes";
import {Button} from "../ui/Button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { TSRegisterSchema } from "@/actions/auth/signUp/schema";
import { signUp } from "@/actions/auth/signUp/action";
import { useAction } from "@/hooks/use-action";
import { toast } from "sonner";

const RegisterForm = () => {


  const router = useRouter();

  const { execute, isLoading } = useAction(signUp, {
    async onSuccess(data, message) {
      toast.success(message);
      router.push(routes.home);
  },
    onError(error) {
      toast.error(error);
    },
  });

  const { register, handleSubmit } = useForm<TSRegisterSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: TSRegisterSchema) => {
    await execute(data);
  };



  return (
    <>
      <form  className="flex flex-col gap-6">
        {" "}
        <input
        {...register("name")}
          placeholder="name"
          className={
            "w-full bg-turquoise-blue-50 p-2 focus:outline-none focus:ring-0 border-2 rounded-3xl border-granny-smith-900/70 "
          }
        />
        {/* Email */}
        <input
        {...register("email")}

          placeholder="E-mail"
          className={
            "w-full bg-turquoise-blue-50 p-2 focus:outline-none focus:ring-0 border-2 rounded-3xl border-granny-smith-900/70 "
          }
        />
        {/* Password */}
        <input
        {...register("password")}

          placeholder="Password"
          className={
            "w-full bg-turquoise-blue-50 p-2 focus:outline-none focus:ring-0 border-2 rounded-3xl border-granny-smith-900/70 "
          }
        />
        <input
        {...register("confirmPassword")}

          placeholder="Confirm Password"
          className={
            "w-full bg-turquoise-blue-50 p-2 focus:outline-none focus:ring-0 border-2 rounded-3xl border-granny-smith-900/70 "
          }
        />
        <Button disabled={isLoading}
        onClick={handleSubmit(onSubmit)}
          className="m-auto px-4 py-1 rounded-3xl bg-salmon-600 w-full text-white text-[24px] disabled:bg-gray"
        >
          Sign Up
        </Button>
        <div className="flex gap-2">
          <h3 className="">Already have an account? </h3>
          <Link href={routes.login} className=" text-salmon-600">
            Log in
          </Link>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
