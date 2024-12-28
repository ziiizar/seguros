"use client";

import { useEffect, useRef, useState } from "react";

interface BackgroundControllerProps {
  children: React.ReactNode;
}

export default function BackgroundController({ children }: BackgroundControllerProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = sectionRefs.findIndex(
              (ref) => ref.current === entry.target
            );
            setCurrentSection(sectionIndex);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Calculate background color based on current section
  const isDarkSection = Math.floor(currentSection / 2) % 2 === 0;
  const backgroundColor = isDarkSection ? "bg-zinc-800" : "bg-radial";
  const textColorClass = isDarkSection ? "text-white" : "text-section-dark";

  return (
    <div className={`w-full min-h-screen transition-colors bg-  duration-300 ${backgroundColor} ${textColorClass}`}>
      <div className="relative">
        {children}
      </div>
      {/* Invisible divs for section tracking */}
      <div className="absolute inset-0 pointer-events-none">
        {sectionRefs.map((ref, index) => (
          <div
            key={index}
            ref={ref}
            className="h-screen"
            style={{ top: `${index * 100}vh` }}
          />
        ))}
      </div>
    </div>
  );
}