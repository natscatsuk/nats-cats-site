"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeInUp } from "@/components/ui/motion";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const [catAnimation, setCatAnimation] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    fetch("/animations/cat-animate.json")
      .then((res) => res.json())
      .then((data) => setCatAnimation(data))
      .catch((err) => console.error("Error loading animation:", err));
    
    // Check if mobile to disable animations
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.section
      id="home-hero"
      className="hero pt-12 pb-8 sm:pt-14 sm:pb-10 lg:pt-20 lg:pb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }}
    >
      {/* Paw particle effects - background only */}
      <div className="hero-paw-particles" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => {
          const positions = [
            { left: '15%', top: '20%' },
            { left: '25%', top: '35%' },
            { left: '40%', top: '15%' },
            { left: '55%', top: '30%' },
            { left: '70%', top: '20%' },
            { left: '80%', top: '40%' },
            { left: '20%', top: '60%' },
            { left: '35%', top: '70%' },
            { left: '50%', top: '65%' },
            { left: '65%', top: '75%' },
            { left: '75%', top: '60%' },
            { left: '30%', top: '50%' },
          ];
          const pos = positions[i] || { left: `${Math.random() * 80 + 10}%`, top: `${Math.random() * 70 + 15}%` };
          return (
            <svg
              key={i}
              className="hero-paw-particle"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: 'absolute',
                left: pos.left,
                top: pos.top,
                opacity: Math.random() * 0.05 + 0.07,
              }}
            >
              {/* Paw pad (main) */}
              <ellipse cx="12" cy="14" rx="4" ry="5" fill="currentColor" />
              {/* Toe pads */}
              <circle cx="8" cy="8" r="2.5" fill="currentColor" />
              <circle cx="12" cy="6" r="2.5" fill="currentColor" />
              <circle cx="16" cy="8" r="2.5" fill="currentColor" />
              <circle cx="10" cy="10" r="2" fill="currentColor" />
              <circle cx="14" cy="10" r="2" fill="currentColor" />
            </svg>
          );
        })}
      </div>

      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-16">
        <div className="hero-text w-full lg:w-auto">
          <FadeInUp className="space-y-6 text-center lg:text-left sm:space-y-8">
            {/* Glass card wrapper for headline + tagline */}
            <div
              className="hero-glass-card fade-up-soft rounded-[32px] px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10"
              style={{ animationDelay: "0.05s" }}
            >
              <div className="space-y-6 relative">
                <h1 className="hero-title font-serif text-3xl sm:text-4xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold text-gray-900 leading-[1.05] relative pr-2 lg:pr-32 xl:pr-40">
                  <span className="hero-premium-word">
                    <span
                      className="no-dot premium-title hero-premium-title"
                      aria-label="Premium"
                    >
                      Premıum
                    </span>
                    {/* Cat + blue ball animation positioned above Premium */}
                    {catAnimation && (
                      <span
                        className={`hero-premium-cat ${!isMobile ? "hero-cat-float" : ""}`}
                        aria-hidden="true"
                      >
                        <Lottie
                          animationData={catAnimation}
                          loop={true}
                          autoplay={true}
                          className="hero-premium-cat-player"
                        />
                      </span>
                    )}
                  </span>{" "}
                  Home Cat Care in Harpenden
                </h1>
                <p className="text-sm sm:text-base text-gray-600 max-w-md sm:max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Led by a qualified veterinary nurse — not a hobby sitter. Calm, clinical-grade care in the comfort of your cat&apos;s own home.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex w-full max-w-md mx-auto max-sm:flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                asChild
                variant="primary"
                size="lg"
                className="hero-cta-primary w-full sm:w-auto"
              >
                <Link href="/booking">Book a Visit</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hero-cta-secondary w-full sm:w-auto"
              >
                <Link href="/booking">Check Dates & Availability</Link>
              </Button>
            </div>

            {/* Reassurance line */}
            <p className="text-sm text-gray-500 italic">
              Serving Harpenden and surrounding areas within 3 miles.
            </p>
          </FadeInUp>
        </div>

        <div
          className="relative w-full flex items-center justify-center lg:justify-end overflow-visible mt-6 lg:mt-0"
        >
          <div className="relative w-full max-w-[260px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-none lg:w-[520px] xl:w-[560px] overflow-visible lg:-translate-y-[10%] lg:-translate-x-[5%]">
            {/* House */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: shouldReduceMotion ? 0 : 0.4, 
                duration: shouldReduceMotion ? 0 : 0.6, 
                ease: "easeOut" 
              }}
            >
              <Image
                src="/images/single-house.png"
                alt="Harpenden townhouse"
                width={560}
                height={640}
                className="w-full h-auto object-contain drop-shadow-[0_22px_45px_rgba(0,0,0,0.25)]"
                priority
              />
            </motion.div>

            {/* Nat on the doorstep */}
            <motion.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98, y: shouldReduceMotion ? 0 : 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: shouldReduceMotion ? 0 : 0.55, 
                duration: shouldReduceMotion ? 0 : 0.55, 
                ease: "easeOut" 
              }}
              className="absolute bottom-[32px] left-1/2 -translate-x-1/2 h-auto w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] z-10"
            >
              <Image
                src="/images/nat's-hero2.png"
                alt="Nat the vet nurse with two cats"
                width={180}
                height={220}
                className="w-full h-auto object-contain"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
