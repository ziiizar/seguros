import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"], // Agrega el dominio permitido
  },
  // i18n: {
  //   locales: ['en', 'es'], // Add your supported locales
  //   defaultLocale: 'en', // Set the default locale
  // },
};

export default nextConfig;
