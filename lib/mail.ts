'use server'

import { Resend } from "resend";
import {RESEND_API_KEY} from "@/lib/env.config"

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

