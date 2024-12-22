import React from 'react'
import NavLinks from '@/components/global/NavLinks'
import  {AdminLinks} from "@/constants/asideLinkList"
const Aside = () => {
  return (
    <div className='bg-turquoise-blue-950 rounded-2xl p-2 [grid-area:aside] mx-4 '>
        <NavLinks links={AdminLinks}></NavLinks>
    </div>
  )
}

export default Aside