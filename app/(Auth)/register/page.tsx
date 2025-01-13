// import SignInWithSocials from "@/components/auth/SignInWithSocials";
import RegisterForm from "@/components/auth/RegisterForm";
import Image from "next/image";
// import { signInWithSocials } from "@/actions/signInWithSocials/action";
import FamilyRegister from '@/public/register.png'
// import Google from "@/Icons/Google";


export default function RegisterPage ()  {

  return (
    <main className="flex p-4 bg-radial h-screen">
       <section className="flex flex-col w-3/5 items-center place-content-center rounded-2xl relative  ">
        <div className="absolute inset-0 rounded-2xl">
          {" "}
          <Image
            className="rounded-2xl"
            alt="Family"
            src={FamilyRegister}
            objectFit="cover"
            layout="fill"
            priority
          ></Image>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl" />
        </div>
        <div className="absolute bottom-[5%] w-full  px-4 text-white flex flex-col gap-2 place-content-end items-end ">
          {/* <div className="flex items-center justify-between bg-granny-smith-500 text-white rounded-full py-3 px-6 w-full max-w-md transition-colors  shadow-lg">
              <span className="font-semibold text-black">
                Join our Community
              </span>

              <div className="size-9 rounded-full bg-rajah-500 flex place-content-center items-center">
              </div>
            </div> */}
          <h3 className="text-[30px] font-semibold text-white text-right text-pretty">
          Join us today.
          </h3>
          <div className="flex gap-2">
            <button className="border-white border rounded-full px-3 py-2 backdrop-blur-md bg-white/20">Easy</button>
            <button className="border-white border rounded-full px-3 py-2 backdrop-blur-md bg-white/20">Family</button>
          </div>
        </div>

        {/* <div className="absolute w-full h-full bottom-0 right-0 bg-gradient-to-t from-salmon-600 to-transparent"></div> */}
      </section>
      <section
        className="flex flex-col max-h-[650px] h-full w-1/2 card-border-gradient rounded-2xl backdrop-blur-2xl px-16 py-10 m-auto gap-8 bg-gradient-to-tr from-[#FFFFFF1A] to-[#FFFFFF05] overflow-y-auto scrollbar-hide"
      >
        <div className="flex flex-col relative  gap-6 -mx-14 px-14">
          <div className="flex flex-col justify-between items-center gap-8">
            <h3 className="text-[36px] font-semibold">Welcome to our family.</h3>
            {/* <button type="button" onClick={() => router.back()}>
            </button> */}
            {/* <button 
        //     onClick={async () => {
        //   await signInWithSocials({ provider: "google" });
        // }} 
        className="w-full bg-turquoise-blue-50 p-2 focus:outline-none focus:ring-0 border-2 rounded-3xl border-granny-smith-900/70 flex place-content-center items-center gap-4">
          <Google></Google> Sign up with Google </button>
          
          <div className="flex items-center w-full">
            <hr className="flex-grow border-t-2 border-black/50" />
            <span className="px-3">Or </span>
            <hr className="flex-grow border-t-2 border-black/50" />
          </div> */}

          </div>

        </div>
          <RegisterForm></RegisterForm>
      </section>
    </main>
  );
}
