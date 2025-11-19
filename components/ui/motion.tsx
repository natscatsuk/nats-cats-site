"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

interface FadeInUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
}

export function FadeInUp({ children, delay = 0, duration = 0.6, ...props }: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface FadeInStaggerProps extends HTMLMotionProps<"div"> {
  staggerDelay?: number;
  duration?: number;
}

export function FadeInStagger({ 
  children, 
  staggerDelay = 0.1, 
  duration = 0.5,
  className,
  ...props 
}: FadeInStaggerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeInView({ 
  children, 
  delay = 0, 
  duration = 0.6,
  ...props 
}: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

