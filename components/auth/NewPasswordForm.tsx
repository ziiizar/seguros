"use client";
import { useForm } from "react-hook-form";
import { TSNewPasswordSchema } from "@/actions/auth/newPassword/schema";
import { newPassword } from "@/actions/auth/newPassword/action";
import { useAction } from "@/hooks/use-action";
import { toast } from "sonner";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { routes } from "@/constants/routes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Info } from "lucide-react";

const NewPasswordForm = ({ token }: { token: string }) => {
  const router = useRouter();

  const { execute, isLoading } = useAction(newPassword, {
    onSuccess(data, message) {
      toast.success(message);
      router.push(routes.login);
    },
    onError(error) {
      toast.error(error);
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitted },
  } = useForm<TSNewPasswordSchema>({
    defaultValues: {
      password: "",
      confirmPassword: "",
      token,
    },
  });

  setValue("token", token);

  const onSubmit = async (data: TSNewPasswordSchema) => {
    await execute(data);
  };

  return (
    <>
      <form
        className="flex flex-col  gap-4 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
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
          <div className="flex gap-2">
            <h4>Requirements</h4>
            <TooltipProvider>
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
            </TooltipProvider>
          </div>
        </div>

        <Button type="submit" disabled={isLoading}>
          Aceptar
        </Button>
      </form>
    </>
  );
};

export default NewPasswordForm;
