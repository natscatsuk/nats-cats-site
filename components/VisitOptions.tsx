"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FadeInWhenVisible } from "./FadeInWhenVisible";
import { FadeInSection } from "./animations/FadeInSection";
import { ScrollRevealCard } from "./animations/ScrollRevealCard";

interface VisitOption {
  id: string;
  title: string;
  highlight: string;
  summary: string;
  description: string;
  bullets: string[];
  footer: string;
  icon: React.ReactNode;
}

const visitPlans: VisitOption[] = [
  {
    id: "standard",
    title: "Standard Home Visits",
    highlight: "Most popular",
    summary: "A calm daily check-in for cats who like their routine just so.",
    description:
      "Ideal for feeding, litter refresh, a little playtime and welfare checks while you're away.",
    bullets: [
      "Perfect for relaxed, easygoing cats",
      "Typically one visit per day",
      "Flexible scheduling",
    ],
    footer: "From £XX per visit",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: "weekend",
    title: "Weekend & Bank Holiday Visits",
    highlight: "Weekend & bank holidays",
    summary: "Dedicated cover for busy weekends and bank-holiday trips.",
    description:
      "Keeps feeding, litter and medication on track while you enjoy your break.",
    bullets: [
      "Extra reassurance when you're away short-term",
      "Ideal for 2–4 day breaks",
      "Subject to availability",
    ],
    footer: "From £XX per visit",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "premium",
    title: "Extended Visits",
    highlight: "Premium care",
    summary: "Longer, more detailed visits for cats who need extra time and attention.",
    description:
      "From playful kittens to seniors or those on medication and special diets.",
    bullets: [
      "Ideal for kittens, seniors or medical needs",
      "Extra time for medication, cleaning & play",
      "Limited slots for bespoke care",
    ],
    footer: "From £XX per visit",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
];

export default function VisitOptions() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleBookingClick = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCardClick = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  const springConfig = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
  };

  const reducedSpringConfig = {
    duration: 0.2,
    ease: "easeOut" as const,
  };

  const transition = shouldReduceMotion ? reducedSpringConfig : springConfig;

  return (
    <FadeInSection delay={0.1}>
      <section id="services" className="relative feature-section">
        <div className="mx-auto max-w-6xl px-6 lg:px-0 py-10 sm:py-12 lg:py-14">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500 mb-3">
                Visit options
              </p>
              <h2 className="text-3xl md:text-[2.2rem] lg:text-[2.5rem] font-semibold tracking-tight text-slate-900 mb-4">
                Choose the visit that fits your cat
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-slate-600 max-w-2xl mx-auto">
                Every cat is different. These visit types are designed to match their routine,
                energy levels and any medical needs – all with a vet nurse keeping watch.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {visitPlans.map((plan, index) => {
              const isActive = activeId === plan.id;
              const isExpanded = isActive;

              return (
                <ScrollRevealCard key={plan.id} delay={index * 0.05}>
                  <motion.article
                    className={`
                      relative flex h-full flex-col overflow-hidden
                      rounded-3xl border transition-all duration-300
                      bg-[#FBF3E8] shadow-[0_24px_80px_rgba(15,23,42,0.12)]
                      px-6 py-6 md:px-7 md:py-7 lg:px-8 lg:py-8
                      cursor-pointer
                      ${
                        isActive
                          ? "border-[var(--nc-blue-primary)]/50 shadow-[0_32px_100px_rgba(36,107,255,0.18)] bg-[#FBF3E8] ring-2 ring-[var(--nc-blue-primary)]/20"
                          : "border-white/60 hover:border-white/80"
                      }
                    `}
                    onClick={() => handleCardClick(plan.id)}
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: 1.03,
                            y: -6,
                            boxShadow: isActive
                              ? "0_32px_100px_rgba(36,107,255,0.2)"
                              : "0_28px_80px_rgba(15,23,42,0.15)",
                          }
                    }
                    whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
                    transition={transition}
                    layout
                  >
                    {/* Active glow effect */}
                    {isActive && (
                      <motion.div
                        className="absolute -inset-[2px] rounded-3xl pointer-events-none -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                          background: "linear-gradient(135deg, rgba(36, 107, 255, 0.15), rgba(59, 130, 246, 0.1))",
                          filter: "blur(8px)",
                        }}
                      />
                    )}

                    {/* Top row: badge + icon */}
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-700 shadow-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.25)]" />
                        <span>{plan.highlight}</span>
                      </div>

                      <div className="relative">
                        <div className="absolute inset-0 -z-10 rounded-full bg-sky-400/25 blur-xl transition-opacity duration-300" />
                      <motion.div
                        className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 text-white shadow-[0_14px_30px_rgba(15,23,42,0.35)] transition-transform duration-200 hover:scale-[1.03]"
                        animate={
                          isActive && !shouldReduceMotion
                            ? {
                                scale: [1, 1.08, 1],
                                boxShadow: [
                                  "0_14px_30px_rgba(15,23,42,0.35)",
                                  "0_0_0_8px_rgba(36,107,255,0.25)",
                                  "0_14px_30px_rgba(15,23,42,0.35)",
                                ],
                              }
                            : {}
                        }
                        transition={{
                          duration: 2,
                          repeat: isActive ? Infinity : 0,
                          ease: "easeInOut",
                        }}
                      >
                        {plan.icon}
                      </motion.div>
                      </div>
                    </div>

                    {/* Title + short summary (always visible) */}
                    <div className="flex-1 mb-4">
                      <h3 className="text-[1.1rem] md:text-[1.15rem] font-semibold text-slate-900 mb-2">
                        {plan.title}
                      </h3>
                      <p className="text-sm md:text-[0.95rem] text-slate-600 leading-relaxed">
                        {plan.summary}
                      </p>
                    </div>

                    {/* Expandable details with AnimatePresence */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={transition}
                          className="overflow-hidden"
                        >
                          <div className="space-y-3 pt-2">
                            <p className="text-sm text-slate-600 leading-relaxed">
                              {plan.description}
                            </p>

                            {plan.bullets && (
                              <ul className="space-y-2">
                                {plan.bullets.map((bullet, bulletIndex) => (
                                  <motion.li
                                    key={bullet}
                                    className="flex gap-2.5"
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      delay: bulletIndex * 0.05,
                                      ...transition,
                                    }}
                                  >
                                    <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#246BFF]" />
                                    <span className="text-sm text-slate-600">
                                      {bullet}
                                    </span>
                                  </motion.li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Footer CTA row */}
                    <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-white/70">
                      <p className="text-[0.8rem] text-slate-500 font-medium">
                        {plan.footer}
                      </p>
                      <motion.button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookingClick();
                        }}
                        className={`
                          inline-flex items-center justify-center gap-1.5 text-[0.85rem] font-semibold rounded-lg px-4 py-2 transition-all duration-200
                          ${
                            isActive
                              ? "bg-gradient-to-r from-sky-600 to-sky-700 text-white shadow-md hover:shadow-lg hover:from-sky-700 hover:to-sky-800"
                              : "text-sky-700 hover:text-sky-800 hover:bg-sky-50"
                          }
                          focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2
                          w-full sm:w-auto sm:ml-auto
                        `}
                        whileHover={
                          shouldReduceMotion
                            ? {}
                            : {
                                scale: 1.02,
                                x: isActive ? 2 : 0,
                              }
                        }
                        whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                        transition={transition}
                      >
                        <span>View booking form</span>
                        <motion.span
                          animate={isActive ? { x: 4 } : { x: 0 }}
                          transition={transition}
                          className="text-xs"
                        >
                          →
                        </motion.span>
                      </motion.button>
                    </div>
                  </motion.article>
                </ScrollRevealCard>
              );
            })}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

