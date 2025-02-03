"use client"

import HandShake from "@/public/handshake.webp"
import { CheckCircle, Headset, Shield, Smile, User, Lock } from "lucide-react"
import Image from "next/image"

const ValuePropositionOption2 = () => {
  return (
    <div className="">
      <section className="container px-4 sm:px-6 py-8 sm:py-12 md:py-16 mb-8 mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 sm:space-y-6 text-center lg:text-left ">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Exceptional Value Through Personalized Solutions.
            </h1>
            <p className="text-lg sm:text-xl  max-w-2xl mx-auto lg:mx-0">
              Unwavering Commitment to Our Clients Financial Security
            </p>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute top-3 left-[20%] bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl p-2 sm:p-3 shadow-lg z-20 animate-bounce">
              <Shield className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="absolute top-[20%] -right-2 sm:-right-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl p-2 sm:p-3 shadow-lg z-20 animate-pulse">
              <Lock className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="absolute bottom-[20%] -left-2 sm:-left-4 md:-left-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl p-2 sm:p-3 shadow-lg z-20 animate-pulse">
              <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>

            <div className="absolute right-0 top-0 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full opacity-50" />
            <div className="absolute left-0 bottom-0 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full opacity-50" />

            <div className="relative">
              <Image
                src={HandShake || "/placeholder.svg"}
                alt="Done Deal"
                width={400}
                height={400}
                className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full mx-auto shadow-xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <FeatureCard
            icon={<User className="text-white" size={24} />}
            title="Personalized Recommendations"
            description="We use advanced algorithms to match you with the best insurance plans."
          />
          <FeatureCard
            icon={<Headset className="text-white" size={24} />}
            title="Expert Support 24/7"
            description="Our team is available around the clock to assist you."
          />
          <FeatureCard
            icon={<Smile className="text-white" size={24} />}
            title="Seamless Application Process"
            description="Apply for insurance easily in just a few minutes."
            className="sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none"
          />
        </div>
      </section>
    </div>
  )
}

const FeatureCard = ({ icon, title, description, className = "" }) => (
  <div className={`space-y-4 max-w-sm  lg:w-80  lg:px-4  ${className}`}>
    <div className="flex ">
      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-semibold feature-card-title">{title}</h3>
    <p className="text-sm sm:text-base feature-card-description ">{description}</p>
  </div>
)

export default ValuePropositionOption2

