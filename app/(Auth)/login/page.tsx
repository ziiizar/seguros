"use client";

import { ReactNode } from "react";
// import SignInWithSocials from "@/components/auth/SignInWithSocials";
import LoginForm from "@/components/auth/LoginForm";
// import { signInWithSocials } from "@/actions/signInWithSocials/action";
import Google from "@/Icons/Google";
import FamilyLogin from "@/public/login.png";
import Image from "next/image";


export default function Login(): ReactNode {


  return (
    <main className="flex gap-4 p-4 h-screen">
      <section className="w-2/5 flex flex-col place-content-center items-center gap-4 p-10">
        <h3 className="text-[36px] font-semibold">Welcome back!</h3>

        <button
          // onClick={async () => {
          //   await signInWithSocials({ provider: "google" });
          // }}
          className="w-full bg-turquoise-blue-50 p-2 focus:outline-none focus:ring-0 border-2 rounded-3xl border-granny-smith-900/70 flex place-content-center items-center gap-4"
        >
          <Google></Google> Log in with Google
        </button>

        <div className="flex items-center">
          <hr className="flex-grow border-t-2 border-white/70" />
          <span className="px-3">Or </span>
          <hr className="flex-grow border-t-2 border-white/70" />
        </div>

        <LoginForm></LoginForm>
      </section>
      <section className="flex flex-col w-3/5 items-center place-content-center rounded-2xl relative  ">
        <div className="absolute inset-0 rounded-2xl">
          {" "}
          <Image
            className="rounded-2xl"
            alt="Family"
            src={FamilyLogin}
            objectFit="cover"
            layout="fill"
            priority
          ></Image>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl" />
        </div>
        <div className="absolute bottom-[5%] w-full  px-4 text-white">
          {/* <div className="flex items-center justify-between bg-granny-smith-500 text-white rounded-full py-3 px-6 w-full max-w-md transition-colors  shadow-lg">
              <span className="font-semibold text-black">
                Join our Community
              </span>

              <div className="size-9 rounded-full bg-rajah-500 flex place-content-center items-center">
              </div>
            </div> */}
          <h3 className="text-[30px] font-semibold text-white">
            Secure your future by accessing your personalized insurance
            dashboard.
          </h3>
          <div className="flex gap-2">
            <button className="border-white border rounded-full px-3 py-2 backdrop-blur-md bg-white/20">Support</button>
            <button className="border-white border rounded-full px-3 py-2 backdrop-blur-md bg-white/20">Security</button>
          </div>
        </div>

        {/* <div className="absolute w-full h-full bottom-0 right-0 bg-gradient-to-t from-salmon-600 to-transparent"></div> */}
      </section>
    </main>
  );
}
