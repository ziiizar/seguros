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
import { useTranslations } from "next-intl"

const ThankYouCard = () => {
  const confettiRef = useRef<ConfettiRef>(null)
  const t = useTranslations("ThankYouSection")

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
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12">
      <Card className="relative border-none shadow-xl w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto overflow-visible">
        <Confetti
          ref={confettiRef}
          className="absolute inset-0 pointer-events-none w-full h-full"
        />

        <motion.div
          initial={{ scale: 0, y: -20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto -mt-10 shadow-lg"
        >
          <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-orange-500" />
        </motion.div>

        <CardHeader className="text-center pt-6 md:pt-8 pb-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <CardTitle className="text-lg md:text-2xl lg:text-3xl font-bold text-orange-600 mb-2">
              {t("title")}
            </CardTitle>
            <CardDescription className="text-gray-600 text-sm md:text-base lg:text-xl">
              {t("description")}
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent className="text-center px-4 md:px-6 py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4 md:space-y-6"
          >
            <p className="text-base md:text-xl text-orange-700 font-medium">
              {t("message")}
            </p>
            <p className="text-gray-500 text-sm md:text-base">
              {t("supportMessage")}
            </p>

            <div className="bg-orange-50 rounded-lg p-3 md:p-4 mt-4">
              <p className="text-sm md:text-base font-medium text-orange-800 mb-2">
                {t("faqTitle")}
              </p>
              <div className="flex flex-col gap-2">
                <Link 
                  href={`${routes.aboutUs}#FAQ`}
                  className="text-orange-600 hover:text-orange-700 transition-colors inline-flex items-center justify-center font-medium text-sm md:text-base"
                >
                  {t("faqLink")}
                </Link>
              </div>
            </div>
          </motion.div>
        </CardContent>

        <CardFooter className="flex justify-center pb-4 pt-2">
          <Link href={routes.home}>
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg text-base md:text-lg font-medium transition-colors"
            >
              {t("acceptButton")}
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ThankYouCard
