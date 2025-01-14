import { Testimonial } from "./Testimonials";
import Image from "next/image";
import { User } from "lucide-react";

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div 
     
      className="bg-zinc-700/40 rounded-2xl p-8 shadow-sm "
    >
      <p className="text-white text-lg mb-4">
        {testimonial.content}{" "}
        <span className="bg-salmon-600 text-black px-1 rounded">
          {testimonial.highlightedText}
        </span>
        .
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-salmon-600/90 overflow-hidden flex place-content-center items-center"> {testimonial.author.image ? (<Image 
            layout="fill"
            src={testimonial.author.image} 
            alt={testimonial.author.name}
            className="w-full h-full object-cover"
          />) : (<User></User>)}
          
        </div>
        <div>
          <h4 className="font-semibold text-white">{testimonial.author.name}</h4>
          <p className="text-sm text-white">
            {testimonial.author.role}, {testimonial.author.company}
          </p>
        </div>
      </div>
    </div>
  );

  export default TestimonialCard