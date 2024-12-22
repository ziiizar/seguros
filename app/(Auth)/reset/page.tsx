import { ReactNode } from "react";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";




export default function ResetPasswordPage(): ReactNode {

  return (
    <main className="w-screen h-screen flex place-content-center items-center">
      <section className=" w-[550px]">
          <ResetPasswordForm></ResetPasswordForm>
      </section>
      
    </main>
  );
}
