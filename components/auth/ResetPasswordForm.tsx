"use client";

import Link from "next/link";
import { routes } from "@/constants/routes";
import Button from "../ui/Button";

const ResetPasswordForm = () => {


  return (
    <>
    <p className="text-3xl">Let´s find your account.</p>
      <form className="flex flex-col gap-6 w-full" >
       
            <input
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
          <Button type="submit"
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
