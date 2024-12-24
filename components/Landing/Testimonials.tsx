"use client";

import { motion } from "framer-motion";
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
    content: "Encontramos en GPF Services el socio perfecto para nuestras necesidades de seguro. Su plataforma es",
    highlightedText: "intuitiva y el proceso es increíblemente eficiente",
    author: {
      name: "María Rodriguez",
      role: "Directora Ejecutiva",
      company: "Tech Solutions Inc",
      image: "/testimonials/avatar1.jpg",
    },
  },
  {
    content: "El equipo de GPF Services ha demostrado ser",
    highlightedText: "el mejor aliado para proteger a nuestros empleados",
    author: {
      name: "Carlos Mendoza",
      role: "Gerente de RRHH",
      company: "Innovate Corp",
      image: "/testimonials/avatar2.jpg",
    },
  },
  {
    content: "La atención personalizada y el seguimiento constante hacen que GPF Services sea",
    highlightedText: "la mejor opción en seguros corporativos",
    author: {
      name: "Ana Martínez",
      role: "Directora Financiera",
      company: "Global Enterprises",
      image: "/testimonials/avatar3.jpg",
    },
  },
  {
    content: "Gracias a su asesoramiento experto, pudimos",
    highlightedText: "encontrar el plan perfecto para nuestra empresa",
    author: {
      name: "Roberto Sánchez",
      role: "Propietario",
      company: "RS Consulting",
      image: "/testimonials/avatar4.jpg",
    },
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-turquoise-blue-950 mb-4"
          >
            Lo que dicen nuestros clientes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-granny-smith-600 max-w-2xl mx-auto"
          >
            Descubre por qué las personas confían en nosotros para sus necesidades de seguros
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
