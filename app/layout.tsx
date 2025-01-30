import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import {chillax} from '@/styles/fonts'
import { Toaster } from "sonner";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "GPF Services",
  description: "Personalized Insurance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          chillax.variable,
          "font-sans", 
          " text-black min-h-screen w-screen transition-colors duration-500 overflow-x-hidden"
        )}
      >
        {children}

        <Toaster />
        <Analytics></Analytics>
      </body>
    </html>
  );
}
