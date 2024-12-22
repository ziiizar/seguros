"use client";
import { routes } from "@/constants/routes";
import Button from "../ui/Button";
import Link from "next/link";

const RegisterForm = () => {





  return (
    <>
      <form  className="flex flex-col gap-6">
        {" "}
        <input
          placeholder="name"
          className={
            "w-full bg-turquoise-blue-50 p-2 focus:outline-none focus:ring-0 border-2 rounded-3xl border-granny-smith-900/70 "
          }
        />
        {/* Email */}
        <input
          placeholder="E-mail"
          className={
            "w-full bg-turquoise-blue-50 p-2 focus:outline-none focus:ring-0 border-2 rounded-3xl border-granny-smith-900/70 "
          }
        />
        {/* Password */}
        <input
          placeholder="Password"
          className={
            "w-full bg-turquoise-blue-50 p-2 focus:outline-none focus:ring-0 border-2 rounded-3xl border-granny-smith-900/70 "
          }
        />
        <input
          placeholder="Confirm Password"
          className={
            "w-full bg-turquoise-blue-50 p-2 focus:outline-none focus:ring-0 border-2 rounded-3xl border-granny-smith-900/70 "
          }
        />
        <Button
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
