import localFont from "next/font/local";
import {Literata } from 'next/font/google'

export const literata = Literata({
  subsets: ['latin'],
  display: 'swap',
})

export const chillax = localFont({
    src: [{
      path: "../public/font/Chillax-Variable.woff2",
      style: 'normal'
    }],
   
  variable: '--font-chillax'
  });
  