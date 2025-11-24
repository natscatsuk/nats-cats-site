// components/animations/AnimatedCard.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedCardProps = {
  children: ReactNode;
  className?: string;
};

export function AnimatedCard({ children, className = "" }: AnimatedCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={shouldReduceMotion ? {} : {
        y: -4,
        scale: 1.02,
        boxShadow: "0 22px 60px rgba(0,0,0,0.08)",
      }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

