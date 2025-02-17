import { Lead } from '@prisma/client'
import React from 'react'

const EmailTemplate = ({lead}:{lead: Lead}) => {
  return (
 <ul>
    <li>Name: <h4>${lead.name} </h4> </li>
    <li>Email: <h4>${lead.email} </h4></li>
    <li>Phone: <h4>${lead.phone} </h4> </li>
    <li>Age: <h4>${lead.age} </h4> </li>
    <li>Insurance Rrequested <h4>${lead.insuranceRequested} </h4> </li>
    </ul>

  )
}

export default EmailTemplate
