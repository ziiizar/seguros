import React from 'react'
import NavLinks from '@/components/global/NavLinks'
import  {AdminLinks} from "@/constants/asideLinkList"
import Logo from '../global/Logo'
import Link from 'next/link'
import { routes } from '@/constants/routes'
const Aside = () => {
  return (
    <div className='bg-turquoise-blue-950 rounded-2xl p-6 [grid-area:aside] shadow-turquoise-blue-950 shadow-md gap-8 flex flex-col' >
        
        <Link href={routes.home}><Logo></Logo></Link>
        <NavLinks links={AdminLinks}></NavLinks>
    </div>
  )
}

export default Aside