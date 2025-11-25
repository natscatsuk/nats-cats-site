"use client";

import Image from "next/image";
import { SectionShell } from "./SectionShell";
import { FadeInWhenVisible } from "./FadeInWhenVisible";
import { FadeInSection } from "./animations/FadeInSection";
import { AnimatedCard } from "./animations/AnimatedCard";
import { ScrollRevealCard } from "./animations/ScrollRevealCard";

const features = [
  {
    title: "Nurse-led expertise",
    description: "Led by a qualified veterinary nurse, not a hobby sitter.",
    image: {
      src: "/images/nurse-led.png",
      alt: "Illustration representing nurse-led cat care expertise",
    },
  },
  {
    title: "Stress-free home routine",
    description: "Your cat stays in their familiar surroundings with their own food, litter and safe spaces.",
    image: {
      src: "/images/home-routine.png",
      alt: "Illustration of a relaxed cat at home routine",
    },
    imageWrapperClassName: "translate-y-1.5",
    imageClassName: "scale-[1.85]",
  },
  {
    title: "Personalised one-to-one care",
    description: "Visits are tailored around your cat's age, health, personality and needs.",
    image: {
      src: "/images/personal-care.png",
      alt: "Illustration showing personalised one-to-one cat care",
    },
  },
];

export default function Features() {
  return (
    <FadeInSection delay={0.1}>
      <section className="feature-section">
        <SectionShell
          eyebrow="Premium care features"
          title="Why Nat's Cats is different"
          subtitle="Every visit combines clinical expertise with genuine care for your cat's comfort and wellbeing."
          animationDelay="0.22s"
        >
          <div className="feature-grid">
            {features.map((feature, index) => (
              <ScrollRevealCard key={index} delay={index * 0.05}>
                <AnimatedCard className="feature-card rounded-3xl bg-[#fff7ec] border border-[#f1e2cf] p-6 md:p-7 shadow-[0_18px_50px_rgba(0,0,0,0.04)] transition-colors duration-200 hover:bg-[#fff7ec]/100">
                  <div className="feature-card-header mb-4">
                    <div className={`relative mx-auto h-28 w-28 ${feature.imageWrapperClassName ?? ""}`}>
                      <Image
                        src={feature.image.src}
                        alt={feature.image.alt}
                        fill
                        className={`object-contain ${feature.imageClassName ?? ""}`}
                        priority={index === 0}
                      />
                    </div>
                  </div>
                  <h3 className="feature-card-title">{feature.title}</h3>
                  <p className="feature-card-body">{feature.description}</p>
                </AnimatedCard>
              </ScrollRevealCard>
            ))}
          </div>
        </SectionShell>
      </section>
    </FadeInSection>
  );
}
