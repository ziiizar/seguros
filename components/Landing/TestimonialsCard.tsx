import { motion } from "framer-motion";
import { Testimonial } from "./Testimonials";

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <p className="text-granny-smith-600 text-lg mb-4">
        {testimonial.content}{" "}
        <span className="bg-turquoise-blue-100 text-turquoise-blue-950 px-1 rounded">
          {testimonial.highlightedText}
        </span>
        .
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-turquoise-blue-200 overflow-hidden">
          <img 
            src={testimonial.author.image} 
            alt={testimonial.author.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-turquoise-blue-950">{testimonial.author.name}</h4>
          <p className="text-sm text-granny-smith-500">
            {testimonial.author.role}, {testimonial.author.company}
          </p>
        </div>
      </div>
    </motion.div>
  );

  export default TestimonialCard