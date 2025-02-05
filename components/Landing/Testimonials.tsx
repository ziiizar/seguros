import { getTranslations } from "next-intl/server";
import TestimonialCard from "./TestimonialsCard";

export interface Testimonial {
  content: string;
  highlightedText: string;
  author: {
    name: string;
    role: string;
    company: string;
    image: string;
  };
}

export default async function Testimonials() {
  const t = await getTranslations("Testimonials");

  const testimonials: Testimonial[] = [
    {
      content: t("client_1.content"),
      highlightedText: t("client_1.highlightedText"),
      author: {
        name: t("client_1.name"),
        role: t("client_1.role"),
        company: "",
        image: "",
      },
    },
    {
      content: t("client_2.content"),
      highlightedText: t("client_2.highlightedText"),
      author: {
        name: t("client_2.name"),
        role: t("client_2.role"),
        company: "",
        image: "",
      },
    },
    {
      content: t("client_3.content"),
      highlightedText: t("client_3.highlightedText"),
      author: {
        name: t("client_3.name"),
        role: t("client_3.role"),
        company: "",
        image: "",
      },
    },
    {
      content: t("client_4.content"),
      highlightedText: t("client_4.highlightedText"),
      author: {
        name: t("client_4.name"),
        role: t("client_4.role"),
        company: "",
        image: "",
      },
    },
  ];

  return (
    <section className="py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36 2xl:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 2xl:mb-32">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold">
            {t("title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 2xl:gap-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
