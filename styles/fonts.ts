import localFont from "next/font/local";
// import {Inter} from "next/font/google"


// export  const inter = Inter({
//   subsets: ['latin'],
  
// })

export const literata = localFont({
  // subsets: ['latin'],
  // display: 'swap',

  src: [{
    path: "../public/font/Literata-VariableFont_opsz,wght.ttf",
    style: 'normal'
  }],
 
variable: '--font-literata'
})

export const chillax = localFont({
    src: [{
      path: "../public/font/Chillax-Variable.woff2",
      style: 'normal'
    }],
   
  variable: '--font-chillax'
  });
  