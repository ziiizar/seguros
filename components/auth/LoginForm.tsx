"use client";

import Link from "next/link";
import { routes } from "@/constants/routes";
import Button from "../ui/Button";

const LoginForm = () => {
 

  return (
    <>
      <form
        className="flex flex-col gap-6 w-full"
       
      >
      
        <input
          placeholder="Email"
          className={
            "w-full bg-turquoise-blue-50 p-2 focus:outline-none focus:ring-0 border-2 rounded-3xl border-granny-smith-900/70 "
          }
        />

        <input
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
        type="submit"
          
        >
          Log in
        </Button>
        <div className="flex gap-2">
          <h3 className="">Don´t you have an Account? </h3>
          <Link href={routes.register} className=" text-salmon-600">
            Sign up
          </Link>
        </div>
      </form>

      {/* <div>{JSON.stringify(watch(), null, 2)}</div> */}
    </>
  );
};

export default LoginForm;
