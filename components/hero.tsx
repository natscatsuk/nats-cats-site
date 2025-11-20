"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { FadeInUp } from "@/components/ui/motion";
import { motion } from "framer-motion";
import { CatYarn } from "@/components/decor/CatYarn";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [catAnimation, setCatAnimation] = useState<any>(null);

  useEffect(() => {
    fetch("/animations/cat-animate.json")
      .then((res) => res.json())
      .then((data) => setCatAnimation(data))
      .catch((err) => console.error("Error loading animation:", err));
  }, []);
  return (
    <Section 
      as="section" 
      background="transparent" 
      padding="xl"
      className="relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230052CC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <FadeInUp className="space-y-8 text-center lg:text-left">
            <div className="space-y-6 relative">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight relative pr-4 lg:pr-32 xl:pr-40">
                <span className="hero-premium-word relative inline-block">
                  Prem
                  <span className="hero-premium-i">ı</span>
                  um
                  {/* Cat + blue ball animation anchored to the word */}
                  {catAnimation && (
                    <span className="hero-premium-cat" aria-hidden="true">
                      <Lottie
                        animationData={catAnimation}
                        loop={true}
                        autoplay={true}
                        className="hero-premium-cat-player"
                      />
                    </span>
                  )}
                </span> Vet-Nurse-Led Cat Sitting in Harpenden
              </h1>
              {/* Cat illustration - shown on mobile below heading */}
              <div className="lg:hidden flex justify-center pt-4">
                <div className="w-24 h-24 sm:w-28 sm:h-28 opacity-90">
                  <CatYarn />
                </div>
              </div>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Calm, safe and stress-free home care for your cat — delivered by a qualified veterinary nurse.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild variant="primary" size="lg">
                <Link href="/booking">Book a Visit</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/booking">Check Availability</Link>
              </Button>
            </div>

            {/* Reassurance line */}
            <p className="text-sm text-gray-500 italic">
              Serving Harpenden and surrounding areas within 3 miles.
            </p>
          </FadeInUp>

          {/* Right: Image Card */}
          <FadeInUp delay={0.2} className="relative w-full z-10">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <Card 
                variant="solid" 
                className="relative z-10 w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden flex items-center justify-center p-8"
              >
                <div className="text-center space-y-2">
                  <div className="w-32 h-32 mx-auto bg-[var(--nc-royalBlue)]/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-[var(--nc-royalBlue)]/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">Cat image / illustration here</p>
                </div>
              </Card>
            </motion.div>
          </FadeInUp>
        </div>
      </div>
    </Section>
  );
}
