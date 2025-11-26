"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeInUp } from "@/components/ui/motion";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HeroTrustStrip } from "@/components/HeroTrustStrip";

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
      className="hero pt-8 pb-6 sm:pt-10 sm:pb-8 lg:pt-14 lg:pb-10"
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

      {/* Mobile: text first, then illustration. Desktop: side-by-side. */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-6 sm:gap-8 lg:items-start lg:gap-16 lg:mr-[260px] xl:mr-[320px]">
        <div className="hero-text w-full max-w-[90%] mx-auto lg:w-auto order-2 lg:order-1 lg:mt-8 xl:mt-10">
          <FadeInUp className="space-y-5 text-center lg:text-left sm:space-y-6">
            {/* Headline + tagline (hero box removed, keep typography/layout) */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: shouldReduceMotion ? 0 : 0.8, 
                ease: "easeOut",
                delay: shouldReduceMotion ? 0 : 0.1
              }}
            >
              <div className="space-y-5 sm:space-y-6 relative z-10 max-w-xl mx-auto lg:mx-0">
                <h1 className="hero-title font-serif text-3xl sm:text-4xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold text-[#111827] leading-tight tracking-tight relative pr-2 lg:pr-32 xl:pr-40">
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
                <p className="text-sm md:text-base text-slate-700/90 max-w-md sm:max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Led by a qualified veterinary nurse — not a hobby sitter. Calm, clinical-grade care in the comfort of your cat&apos;s own home.
                </p>
              </div>
            </motion.div>

            {/* Buttons - stack vertically on mobile, horizontal from md upwards */}
            <div className="flex flex-col md:flex-row w-full max-w-md mx-auto gap-3 md:gap-4 justify-center lg:justify-start mt-4">
              <Button
                asChild
                type="button"
                variant="primary"
                size="lg"
                className="hero-cta-primary w-full md:w-auto"
              >
                <Link href="/booking">Book a Visit</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hero-cta-secondary w-full md:w-auto"
              >
                <Link href="/booking">Check Dates & Availability</Link>
              </Button>
            </div>

            {/* 5-star review strip */}
            <div className="flex items-center justify-center lg:justify-start mt-4">
              <div className="relative inline-flex items-center gap-1.5">
                <span 
                  className="text-xl tracking-wide relative"
                  style={{ 
                    color: '#FFD86B',
                    textShadow: '0 0 18px rgba(255, 216, 107, 0.5)'
                  }}
                >
                  ★★★★★
                </span>
                <span className="text-sm font-semibold text-slate-700">5.0</span>
                <span className="text-xs text-slate-600">from local cat owners</span>
              </div>
            </div>

            {/* Reassurance line */}
            <p className="mt-3 text-xs md:text-sm text-slate-600/80 italic">
              Serving Harpenden and surrounding areas within 3 miles.
            </p>

            <HeroTrustStrip />
          </FadeInUp>
        </div>

        <motion.div
          className="relative flex w-full items-center justify-center overflow-visible mt-6 md:mt-0 lg:justify-end"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: shouldReduceMotion ? 0 : 0.8, 
            ease: "easeOut",
            delay: shouldReduceMotion ? 0 : 0.3
          }}
        >
          <div className="relative w-[85%] mx-auto max-w-[260px] sm:max-w-[340px] md:max-w-[420px] md:w-full md:mx-0 lg:max-w-none lg:w-[520px] xl:w-[560px] overflow-visible lg:-translate-y-[10%] lg:-translate-x-[5%]">
            {/* Subtle glow behind house + Nat */}
            <div className="pointer-events-none absolute inset-0 flex items-end justify-center">
              <div className="w-[70%] max-w-[420px] h-[70%] max-h-[420px] rounded-full bg-[radial-gradient(circle_at_center,#f8d9a6_0%,#f2c47a_35%,transparent_70%)] opacity-40 blur-2xl" />
            </div>

            {/* House */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: shouldReduceMotion ? 0 : 0.4, 
                duration: shouldReduceMotion ? 0 : 0.6, 
                ease: "easeOut" 
              }}
              className="relative z-10"
            >
              <Image
                src="/images/single-house.png"
                alt="Harpenden townhouse"
                width={560}
                height={640}
                className="w-full h-auto object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
                priority
              />
            </motion.div>

            {/* Nat on the doorstep - with idle float animation */}
            <motion.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98, y: shouldReduceMotion ? 0 : 8 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: shouldReduceMotion ? 0 : 0
              }}
              transition={{ 
                delay: shouldReduceMotion ? 0 : 0.55, 
                duration: shouldReduceMotion ? 0 : 0.55, 
                ease: "easeOut"
              }}
              className="absolute bottom-[32px] left-1/2 -translate-x-[55%] h-auto w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] z-10 hero-nat-float"
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
        </motion.div>
      </div>
    </motion.section>
  );
}
