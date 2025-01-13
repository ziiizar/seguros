"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/Button"
import { routes } from "@/constants/routes"
import Link from "next/link"
import Confetti, { ConfettiRef } from "@/components/ui/confetti"

const ThankYouCard = () => {
  const confettiRef = useRef<ConfettiRef>(null)

  useEffect(() => {
    const duration = 3000
    const colors = ["#FF4405", "#FF7F57", "#FFB8A1", "#FFE7DE"]
    const end = Date.now() + duration

    const frame = () => {
      if (Date.now() > end) return

      confettiRef.current?.fire({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors,
      })
      confettiRef.current?.fire({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors,
      })

      requestAnimationFrame(frame)
    }

    frame()
  }, [])

  return (
    <div className="min-h-screen bg-orange-50/50 flex items-center justify-center p-4">
      <Card className="relative border-none shadow-xl w-full max-w-lg mx-auto overflow-visible">
        <Confetti
          ref={confettiRef}
          className="absolute inset-0 pointer-events-none w-full h-full"
        />

        <motion.div
          initial={{ scale: 0, y: -20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto -mt-10 shadow-lg"
        >
          <CheckCircle className="w-10 h-10 text-orange-500" />
        </motion.div>

        <CardHeader className="text-center pt-8 pb-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <CardTitle className="text-3xl font-bold text-orange-600 mb-2">
              Thank you!
            </CardTitle>
            <CardDescription className="text-gray-600 text-lg">
              Your form has been submitted successfully.
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent className="text-center px-6 py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-xl text-orange-700 font-medium">
              We will get back to you shortly.
            </p>
            <p className="text-gray-500">
              If you have any questions, feel free to reach out to our support team.
            </p>
            
            <div className="bg-orange-50 rounded-lg p-4 mt-6">
              <p className="text-sm font-medium text-orange-800 mb-3">
                Need more info?
              </p>
              <div className="flex flex-col gap-2">
                <Link 
                  href={routes.home}
                  className="text-orange-600 hover:text-orange-700 transition-colors inline-flex items-center justify-center font-medium"
                >
                  Visit our Help Center
                </Link>
                <Link 
                  href="/faq"
                  className="text-orange-600 hover:text-orange-700 transition-colors inline-flex items-center justify-center font-medium"
                >
                  Read our FAQ
                </Link>
              </div>
            </div>
          </motion.div>
        </CardContent>

        <CardFooter className="flex justify-center pb-6 pt-2">
          <Link href={routes.home}>
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-lg text-lg font-medium transition-colors"
            >
              Aceptar
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ThankYouCard

