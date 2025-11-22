"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeInUp } from "@/components/ui/motion";
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
    <section id="home" className="page-section section-hero hero">
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

      <div className="hero-inner page-shell">
        {/* Warm spotlight gradient behind house + Nat */}
        <div className="hero-spotlight-gradient" aria-hidden="true"></div>

        <div className="hero-text">
          <FadeInUp className="space-y-8 text-center lg:text-left">
            {/* Glass card wrapper for headline + tagline */}
            <div className="hero-glass-card">
              <div className="space-y-6 relative">
                <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight relative pr-4 lg:pr-32 xl:pr-40">
                  <span className="hero-premium-word">
                    <span className="no-dot premium-title hero-premium-title" aria-label="Premium">Premıum</span>
                    {/* Cat + blue ball animation positioned above Premium */}
                    {catAnimation && (
                      <span className="hero-premium-cat hero-cat-bounce" aria-hidden="true">
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
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Led by a qualified veterinary nurse — not a hobby sitter. Calm, clinical-grade care in the comfort of your cat&apos;s own home.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild variant="primary" size="lg" className="hero-cta-primary">
                <Link href="/booking">Book a Visit</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hero-cta-secondary">
                <Link href="/booking">Check Dates & Availability</Link>
              </Button>
            </div>

            {/* Reassurance line */}
            <p className="text-sm text-gray-500 italic">
              Serving Harpenden and surrounding areas within 3 miles.
            </p>
          </FadeInUp>
        </div>

        <div className="hero-visual">
          {/* Floor shadow under Nat + cats / front door */}
          <div
            className="hero-floor-shadow"
            aria-hidden="true"
          />
          <Image
            src="/images/single-house.png"
            alt="Single House"
            width={850}
            height={850}
            className="hero-house-image"
            priority
          />
          <Image
            src="/images/nat's-hero2.png"
            alt="Nat the vet nurse with cats"
            width={420}
            height={520}
            className="hero-nat"
            priority
          />
        </div>
      </div>
    </section>
  );
}
