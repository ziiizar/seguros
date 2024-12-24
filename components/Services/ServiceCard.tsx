"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
type Color = "blue" | "orange";

interface ServiceCardProps {
  image: string;
  color: Color;
  name: string;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  color,
  name,

  onClick,
}) => {
  const gradientClass = color === "blue" ? "healthGradient" : "lifeGradient";

  return (
      <motion.article
        className="w-full h-36 relative overflow-hidden rounded-xl group cursor-pointer"
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute inset-0">
          <Image
            alt={name}
            src={image}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <motion.div
          className={cn(
            "relative rounded-tr-full h-full max-w-md transition-all duration-500 ease-out",
            gradientClass
          )}
          whileHover={{ width: "100%", borderTopRightRadius: "0" }}
        >
          <strong className="absolute bottom-5 left-5 font-semibold z-10 text-black transition-all duration-300 group-hover:scale-110 group-hover:translate-x-2">
            {name}
          </strong>
        </motion.div>
      </motion.article>
    
  );
};

export default ServiceCard;
