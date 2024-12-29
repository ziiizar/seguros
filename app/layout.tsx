import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import {chillax} from '@/styles/fonts'
import { Toaster } from "sonner";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          "font-sans", // This assumes you want to use Chillax as your sans-serif font
          "bg-radial text-black min-h-screen w-full  transition-colors duration-500 "
        )}
      >
        {children}
        <Toaster />

      </body>
    </html>
  );
}
