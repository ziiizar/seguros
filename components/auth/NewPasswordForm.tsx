"use client";
import {Button} from "../ui/Button";
import Link from "next/link";
import { routes } from "@/constants/routes";

const NewPasswordForm = ({token}: {token: string}) => {

console.log(token)

 
  return (
    <>
      <p>We´re waiting for a new password.</p>
      <form
        className="flex flex-col gap-6 w-full"
      >
        <input
          className={
            "w-full bg-transparent p-2 focus:outline-none focus:ring-0 border-0 "
          }
        />

        <Button type="submit">
          Aceptar
        </Button>

        <Button className=" bg-granny-smith-400 ">
          <Link href={routes.login}>Cancel</Link>
        </Button>
      </form>

    </>
  );
};

export default NewPasswordForm;
