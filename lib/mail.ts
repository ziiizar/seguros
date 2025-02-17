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
  const MAX_RETRIES = 3;
  let retries = 0;

  while (retries < MAX_RETRIES) {
    try {
      const resp = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: "onboarding@resend.dev",
          to: ["cesarfpna@gmail.com"],
          subject: "New Lead",
          html: `<ul>
          <li>Name: <h4>${lead.name} </h4> </li>
          <li>Email: <h4>${lead.email} </h4></li>
          <li>Phone: <h4>${lead.phone} </h4> </li>
          <li>Age: <h4>${lead.age} </h4> </li>
          <li>Insurance Rrequested <h4>${lead.insuranceRequested} </h4> </li>
          </ul>`,
        }),
        signal: AbortSignal.timeout(5000) // Timeout de 5 segundos
      });

      if (!resp.ok) throw new Error(`HTTP error: ${resp.status}`);
      return await resp.json();

    } catch (error) {
      retries++;
      if (retries === MAX_RETRIES) {
        console.error("Fallo definitivo:", error);
        throw error;
      }
      await new Promise(resolve => setTimeout(resolve, 2000)); // Espera 2 segundos
    }
  }
};
