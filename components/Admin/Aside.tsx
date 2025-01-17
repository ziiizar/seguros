import React from 'react'
import NavLinks from '@/components/global/NavLinks'
import  {AdminLinks} from "@/constants/asideLinkList"
import Logo from '../global/Logo'
import Link from 'next/link'
import { routes } from '@/constants/routes'
import LogOutDialog from './LogOutDialog' 

const Aside = () => {
  return (
    <div className='bg-zinc-800 rounded-2xl p-6   gap-8 flex flex-col flex-1 justify-between h-full'  >
        
        <Link href={routes.home}><Logo></Logo></Link>
        <NavLinks links={AdminLinks}></NavLinks>
        <LogOutDialog></LogOutDialog>
       
    </div>
  )
}

export default Aside