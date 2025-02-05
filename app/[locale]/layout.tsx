import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { chillax } from "@/styles/fonts";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "GPF Services",
  description: "Personalized Insurance",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {

  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={cn(
          chillax.variable,
          "font-sans",
          " text-black min-h-screen w-screen transition-colors duration-500 overflow-x-hidden"
        )}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>

        <Toaster />
        <Analytics></Analytics>
      </body>
    </html>
  );
}
