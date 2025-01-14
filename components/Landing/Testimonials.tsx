"use client";

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

const testimonials: Testimonial[] = [
  {
    content: "With GPF Services, I finally found an insurance provider that truly cares. Their process is",
    highlightedText: "simple, fast, and stress-free",
    author: {
      name: "Maria Rodriguez",
      role: "Mother of Two",
      company: "",
      image: "",
    },
  },
  {
    content: "GPF Services gave me peace of mind knowing my family is",
    highlightedText: "protected no matter what happens",
    author: {
      name: "Carlos Mendoza",
      role: "Small Business Owner",
      company: "",
      image: "",
    },
  },
  {
    content: "Their friendly team made it so easy to understand my options. GPF Services is",
    highlightedText: "the best choice for personal insurance",
    author: {
      name: "Ana Martinez",
      role: "Freelancer",
      company: "",
      image: "",
    },
  },
  {
    content: "Thanks to GPF Services, I finally feel",
    highlightedText: "secure about my future and my loved ones",
    author: {
      name: "Roberto Sanchez",
      role: "New Homeowner",
      company: "",
      image: "",
    },
  },
];


export default function Testimonials() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2
            
            className="text-4xl font-bold text-white"
          >
            Our customers focus on life, no matter what
          </h2>
         
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
