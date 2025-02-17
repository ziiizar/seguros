import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import EmailTemplate from '@/components/Survey/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const lead = await request.json();
    console.log("lead")
    console.log(lead)
    
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ['cesarfpna@gmail.com'],
      subject: "New Lead",
      react: EmailTemplate({ lead }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}