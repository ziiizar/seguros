"use client";

import { routes } from "@/constants/routes";
import { Button } from "../ui/Button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { TSRegisterSchema } from "@/actions/auth/signUp/schema";
import { signUp } from "@/actions/auth/signUp/action";
import { useAction } from "@/hooks/use-action";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
// import { useState } from "react";

const RegisterForm = () => {
  const router = useRouter();
  // const [showError, setShowError] = useState(false);

  const { execute, isLoading } = useAction(signUp, {
    async onSuccess(data, message) {
      toast.success(message);
      router.push(routes.confirmEmail);
    },
    onError(error) {
      toast.error(error);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<TSRegisterSchema>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    },
  });

  const onSubmit = async (data: TSRegisterSchema) => {
    // setShowError(false);
    await execute(data);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("name", { required: "Name is required" })}
        placeholder="Name"
        className="w-full bg-turquoise-blue-50 p-2 focus:outline-none focus:ring-0 border-2 rounded-3xl border-granny-smith-900/70"
      />
      <input
        {...register("email", {
          required: "E-mail is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email format",
          },
        })}
        placeholder="E-mail"
        className="w-full bg-turquoise-blue-50 p-2 focus:outline-none focus:ring-0 border-2 rounded-3xl border-granny-smith-900/70"
      />
      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 10,
            message: "Password must be at least 10 characters",
          },
        })}
        placeholder="Password"
        className="w-full bg-turquoise-blue-50 p-2 focus:outline-none focus:ring-0 border-2 rounded-3xl border-granny-smith-900/70"
      />
      <input
        {...register("confirmPassword", {
          required: "Confirm Password is required",
          validate: (value, context) =>
            value === context.password || "Passwords do not match",
        })}
        placeholder="Confirm Password"
        className="w-full bg-turquoise-blue-50 p-2 focus:outline-none focus:ring-0 border-2 rounded-3xl border-granny-smith-900/70"
      />


      <div className="flex  gap-2 flex-col">
      <div className="text-red-600 text-sm mt-1 h-5">
        {isSubmitted && errors && Object.values(errors).length > 0 && (
          <h4>{Object.values(errors)[0]?.message}</h4>
        )}
      </div>
      <div className="flex gap-2"><h4>Requirements</h4><TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="cursor-pointer">
                <Info />
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>At least 10 Characters</li>
                <li>At least 1 Uppercase letter</li>
                <li>At least 1 Lowercase letter</li>
                <li>At least 1 Special character</li>
                <li>At least 1 Number</li>
              </ul>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider></div>
        
        
      </div>

      <Button
        disabled={isLoading}
        type="submit"
        className="m-auto px-4 py-1 rounded-3xl bg-salmon-600 w-full text-white text-[24px] disabled:bg-gray"
      >
        Sign Up
      </Button>
      <div className="flex gap-2">
        <h3>Already have an account?</h3>
        <Link href={routes.login} className="text-salmon-600">
          Log in
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
