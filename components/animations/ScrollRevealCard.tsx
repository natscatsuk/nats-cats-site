"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

type ScrollRevealCardProps = {
  children: ReactNode;
  delay?: number;
};

export function ScrollRevealCard({ children, delay = 0 }: ScrollRevealCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

