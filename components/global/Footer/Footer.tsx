import { Mail, Phone, Facebook, Twitter, Linkedin } from 'lucide-react'
import Link from "next/link"
import ContactForm from "./ContactForm"
import { routes } from '@/constants/routes'
import { getTranslations } from 'next-intl/server'

export default async function Footer() {
  const t = await getTranslations('Footer')

  return (
    <footer className="bg-zinc-800 text-white py-24 relative w-screen">
      {/* Get Insurance Button - Positioned above footer */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-8 z-[100]">
        <Link 
          href={routes.survey} 
          className="bg-salmon-600 hover:bg-salmon-700 transition-colors text-white px-8 py-4 rounded-full text-xl font-semibold flex items-center shadow-lg hover:shadow-xl max-sm:w-72 max-sm:h-16"
        >
          {t("button")}
          <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
      
      {/* Border Top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-salmon-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12 place-content-end items-end">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-salmon-600" />
                  <span>{t("phone")}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-salmon-600" />
                  <span>{t("email")}</span>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: "#facebook", label: t("facebook") },
                { Icon: Twitter, href: "#twitter", label: t("twitter") },
                { Icon: Linkedin, href: "#linkedin", label: t("linkedin") }
              ].map(({ Icon, href, label }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="p-3 rounded-full bg-white/10 hover:bg-salmon-600 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact-me" className="space-y-8">
            <ContactForm />
            <h3 className="text-[clamp(2rem,2vw,1rem)]">{t("contactUs")}</h3>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-400 flex place-content-center items-center text-[clamp(0.75rem,2vw,1rem)]">
        <h2 className="uppercase text-[clamp(3rem,2vw,1rem)] xl:text-[170px] font-bold leading-none bg-gradient-to-r from-salmon-600 to-white bg-clip-text text-transparent flex ">
            GPF
            {/* <Logo className='bg-gradient-to-r from-salmon-600 to-white bg-clip-text text-transparent flex size-44'></Logo> */}
            <span className="uppercase xl:text-[180px] text-white text-[clamp(3rem,2vw,1rem)]">SERVICES</span>
          </h2>
        </div>
      </div>
    </footer>
  )
}
