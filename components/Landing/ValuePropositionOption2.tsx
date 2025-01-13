'use client'

import { motion } from "framer-motion"
import Image from "next/image"

export default function ValuePropositionOption2() {
  return (
    <section className="w-full py-12 md:py-24 ">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-12  gap-4 max-w-7xl mx-auto h-full grid-rows-[repeat(12,minmax(100px,1fr))]">
          {/* Large Header Card */}
          <motion.div 
            className="col-span-12 row-span-4  relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500 to-pink-500"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white bg-black/20">
              <h2 className="text-4xl font-bold mb-2">Peace of mind starts here</h2>
              <p className="text-xl">Secure your future with us</p>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
              alt="Modern office building"
              fill
              className="object-cover z-[-1]"
            />
          </motion.div>

          {/* Family Protection Card */}
          <motion.div 
            className="relative overflow-hidden rounded-xl col-span-7 row-span-5  bg-gradient-to-br from-orange-300 to-rose-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white bg-black/20">
              <h3 className="text-2xl font-bold mb-2">Family Protection</h3>
              <p>Comprehensive coverage for your loved ones</p>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
              alt="Happy family"
              fill
              className="object-cover z-[-1]"
            />
          </motion.div>

          {/* Claims Process Card */}
          <motion.div 
            className="relative overflow-hidden rounded-xl col-span-5 row-span-5  bg-gradient-to-br from-cyan-500 to-blue-500"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white bg-black/20">
              <h3 className="text-2xl font-bold mb-2">Easy Claims</h3>
              <p>Simple and fast claims processing</p>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
              alt="Digital interface"
              fill
              className="object-cover z-[-1]"
            />
          </motion.div>

          {/* Support Card */}
          <motion.div 
            className="relative overflow-hidden rounded-xl col-span-6 row-span-4  bg-gradient-to-br from-violet-500 to-purple-500"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white bg-black/20">
              <h3 className="text-2xl font-bold mb-2">24/7 Support</h3>
              <p>Always here when you need us</p>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Customer service"
              fill
              className="object-cover z-[-1]"
            />
          </motion.div>

          {/* Digital Solutions Card */}
          <motion.div 
            className=" relative overflow-hidden rounded-xl col-span-6 row-span-4  bg-gradient-to-br from-emerald-500 to-teal-500"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white bg-black/20">
              <h3 className="text-2xl font-bold mb-2">Digital Solutions</h3>
              <p>Manage your insurance online, anytime</p>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Digital technology"
              fill
              className="object-cover z-[-1]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

