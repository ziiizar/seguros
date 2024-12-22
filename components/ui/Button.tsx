"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "w-full py-2 flex place-content-center items-center text-white font-semibold bg-salmon-600 rounded-3xl",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
