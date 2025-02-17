'use server'

import { Resend } from "resend";
import {RESEND_API_KEY} from "@/lib/env.config"
import { Lead } from "@prisma/client";
const resend = new Resend(RESEND_API_KEY);


export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/email-verification?token=${token}`;

  await resend.emails.send({
    from: "toyospablo@gpfservices.com",
    // to: email,
    to: email,
    subject: "Confirm your email",
    html: `<p>Click<a href="${confirmLink}"> here </a>to confirm your email </p>`,
  });
};




export const sendResetPasswordEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/new-password?token=${token}`;

  await resend.emails.send({
    from: "toyospablo@gpfservices.com",
    to: email,
    subject: "Reset your password",
    html: `<p>Click<a href="${resetLink}"> here </a>to reset your password </p>`,
  });
};


export const sendNewLeadEmail = async (lead: Lead) => {

  try {
    console.log("aquiiiiiiii arribaaaaa")
    
    const resp = await resend.emails.send({
      // from: "toyospablo@gpfservices.com",
      from: "onboarding@resend.dev",
      to: ['cesarfpna@gmail.com'],
      subject: "New Lead",
      html: `<ul>
      <li>Name: <h4>${lead.name} </h4> </li>
      <li>Email: <h4>${lead.email} </h4></li>
      <li>Phone: <h4>${lead.phone} </h4> </li>
      <li>Age: <h4>${lead.age} </h4> </li>
      <li>Insurance Rrequested <h4>${lead.insuranceRequested} </h4> </li>
      </ul>`,
  
      
    });
    console.log(resp)
  console.log("abajooooooo")
  } catch (error) {

    console.log("error", error)
    
  }
 
};
