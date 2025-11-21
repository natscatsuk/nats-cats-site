"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeInUp } from "@/components/ui/motion";
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
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
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
        </div>

        <div className="hero-visual">
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
