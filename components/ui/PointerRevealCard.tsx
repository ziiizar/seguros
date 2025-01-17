"use client"; // @NOTE: add in case you are using Next.js

import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import { ReactNode } from "react";

export function PointerRevealCard({className, title,description, data, children}:{className?: string, title?: string, description?: string, data?: number, children?: ReactNode}) {

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const background = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(237, 62, 9, 0.3), transparent 80%)`;

  return (
    <div
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
      className={cn("group relative w-full  overflow-hidden rounded-xl bg-zinc-800", className)}
    >
      <div className="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent" />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: background,
        }}
      />
      <div className="h-full w-full relative flex flex-col gap-3 rounded-xl border border-white/10 px-4 py-5">
        {children ? children : (<div className="space-y-2 text-[clamp(0.25rem,1.2vw,1rem)]">
        <h3 className="bg-salmon-500/10 text-salmon-500 px-3 py-1 rounded-full  font-medium inline-block text-[clamp(0.5rem,1.2vw,1rem)]">
              {title}
            </h3>
            <p className="text-zinc-400   max-lg:line-clamp-2">
              {description}
            </p>
            <h3 className="text-white font-semibold ">
              {data} 
            </h3>
        </div>)}
      </div>
    </div>
  );
}
