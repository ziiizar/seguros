import HandShake from "@/public/handshake.webp"
import {CheckCircle, Headset, Shield, Smile, User, Lock } from "lucide-react";
import Image from 'next/image';



const ValuePropositionOption2 = () => {
  return (
    <div className="min-h-screen">
      <section className="container px-6 py-12 mb-8  mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-wrap">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Exceptional Value Through Personalized Solutions.
            </h3>
            <p className="text-gray-600 text-lg">
              Unwavering Commitment to Our Clients Financial Security
            </p>
          </div>
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute top-3 left-[20%] bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl p-3 shadow-lg z-20 animate-bounce">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="absolute top-[20%] -right-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl p-3 shadow-lg z-20 animate-pulse">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <div className="absolute bottom-[20%] -left-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl p-3 shadow-lg z-20 animate-pulse">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            {/* <div className="absolute -bottom-8 right-[15%] bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl p-3 shadow-lg z-20 animate-bounce">
              <Award className="w-6 h-6 text-white" />
            </div> */}
            
            {/* Background decorative circles */}
            <div className="absolute right-0 top-0 w-72 h-72 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full opacity-50" />
            <div className="absolute left-0 bottom-0 w-48 h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full opacity-50" />
            
            <div className="relative">
              <Image
                src={HandShake}
                alt="Done Deal"
                width={400}
                height={400}
                className="relative z-10 size-80 object-cover rounded-full mx-auto shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="flex justify-around mt-24 ">
          <div className="space-y-4 w-96 pe-8">
            <div className="flex space-x-2">
              <div className="size-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                <User className="text-white" size={24} />
              </div>
            </div>
            <h3 className="text-xl font-semibold">Personalized Recommendations</h3>
            <p className="">
              We use advanced algorithms to match you with the best insurance plans.
            </p>
          </div>

          <div className="space-y-4 w-96 px-8 border-l-[1.5px] border-salmon-600">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
              <Headset className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold">Expert Support 24/7</h3>
            <p className="">
              Our team is available around the clock to assist you.
            </p>
          </div>

          <div className="space-y-4 w-96 px-8 border-l-[1.5px] border-salmon-600">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
              <Smile className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold">Seamless Application Process</h3>
            <p className="">
              Apply for insurance easily in just a few minutes.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ValuePropositionOption2