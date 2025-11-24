"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedIconProps = {
  children: ReactNode;
  className?: string;
};

export function AnimatedIcon({ children, className = "" }: AnimatedIconProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -2 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

