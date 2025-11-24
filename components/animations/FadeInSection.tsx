// components/animations/FadeInSection.tsx
"use client";

import { ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

type FadeInSectionProps = {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
};

export function FadeInSection({
  children,
  delay = 0,
  yOffset = 16,
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: shouldReduceMotion ? 0 : 0.6, 
        ease: "easeOut", 
        delay: shouldReduceMotion ? 0 : delay 
      }}
    >
      {children}
    </motion.div>
  );
}

