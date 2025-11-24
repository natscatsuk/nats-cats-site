"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedTestimonialCardProps = {
  children: ReactNode;
  className?: string;
};

export function AnimatedTestimonialCard({ children, className = "" }: AnimatedTestimonialCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div 
      className={className}
      whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

