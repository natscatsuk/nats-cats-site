"use client";

import { SectionShell } from "./SectionShell";
import { FadeInWhenVisible } from "./FadeInWhenVisible";

const features = [
  {
    title: "Vet-Nurse Expertise",
    description: "Perfect for elderly, anxious or medical-needs cats who need more than a basic sitter.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Stress-Free Home Routine",
    description: "No travel, no cages — just familiar surroundings and calm, gentle handling.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Personal One-to-One Care",
    description: "Your cat is cared for by one dedicated professional, not a rotating team.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <SectionShell
      eyebrow="Premium care features"
      title="Why Nat's Cats is different"
      subtitle="Every visit combines clinical expertise with genuine care for your cat's comfort and wellbeing."
      animationDelay="0.22s"
    >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.05}>
              <article
                className="group relative rounded-[24px] bg-white/90 border border-white/60 bg-gradient-to-br from-white via-[var(--nc-bg-cream-soft)] to-white px-6 py-7 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.18)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4c8eff] to-[#E6D0A3] text-white shadow-[0_8px_20px_rgba(76,142,255,0.35)]">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[15px] font-semibold text-slate-900 mb-2 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </article>
              </FadeInWhenVisible>
            ))}
          </div>
    </SectionShell>
  );
}
