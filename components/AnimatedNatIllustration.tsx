"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function AnimatedNatIllustration() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div 
      className="relative w-full max-w-md rounded-3xl shadow-[0_24px_80px_rgba(15,23,42,0.12)] overflow-hidden border border-white/70 flex items-center justify-center aspect-square max-h-[500px]"
      style={{
        background: "radial-gradient(circle at center, rgba(255,255,255,0.95) 0%, rgba(255,247,236,0.8) 50%, rgba(255,247,236,0.6) 100%)",
      }}
      animate={
        shouldReduceMotion
          ? {}
          : {
              y: [0, -8, 0],
            }
      }
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={shouldReduceMotion ? {} : { y: -4 }}
    >
      <Image
        src="/images/vet-nurse.png"
        alt="Cartoon illustration of Nat, your vet-nurse cat carer"
        width={500}
        height={500}
        className="object-contain w-full h-full p-6 relative z-10"
        priority
      />
    </motion.div>
  );
}

