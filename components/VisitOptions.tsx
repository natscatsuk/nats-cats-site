"use client";

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
  price: string;
  priceNote: string;
  icon: React.ReactNode;
}

const visitPlans: VisitOption[] = [
  {
    id: "standard",
    title: "Standard Home Visits",
    highlight: "Most popular",
    summary: "A calm daily check-in for cats who like their routine just so.",
    description: "Perfect for straightforward daily check-ins.",
    bullets: [
      "20–30 minute calm home visit",
      "Feeding, litter refresh, quick play & welfare check",
      "Ideal for relaxed, easygoing cats who like their routine",
    ],
    price: "£15",
    priceNote: "per visit",
    icon: (
      <span className="text-lg" aria-hidden="true">
        🕒
      </span>
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
    price: "£19",
    priceNote: "weekend rate",
    icon: (
      <span className="text-lg" aria-hidden="true">
        🌞
      </span>
    ),
  },
  {
    id: "premium",
    title: "Extended Visits",
    highlight: "Premium care",
    summary: "Longer, more detailed visits for cats who need extra time and attention.",
    description:
      "Same price as a standard visit, but more time and support when your cat needs it.",
    bullets: [
      "40–45 minute extended visit",
      "Extra time for medication, cleaning & play",
      "Best for kittens, senior cats or medical needs",
    ],
    price: "£15",
    priceNote: "per visit",
    icon: (
      <span className="text-lg" aria-hidden="true">
        ⭐
      </span>
    ),
  },
];

export default function VisitOptions() {
  return (
    <FadeInSection delay={0.1}>
      <section id="services" className="relative feature-section">
        <div className="mx-auto max-w-6xl px-6 lg:px-0 py-16 md:py-20 lg:py-24">
          <FadeInWhenVisible>
            <div className="mb-12 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 md:text-sm">
                Visit options
              </p>
              <h2 className="mb-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl">
                Choose the visit that fits your cat
              </h2>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-700/90 md:text-base">
                Every cat is different. These visit types are designed to match
                their routine, energy levels and any medical needs – all with a
                vet nurse keeping watch.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="mx-auto mt-8 max-w-5xl md:mt-10">
            <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-7 lg:gap-8">
              {visitPlans.map((plan, index) => (
                <ScrollRevealCard key={plan.id} delay={index * 0.05}>
                  <article
                    className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/60 bg-[#fff7ee] p-6 shadow-[0_18px_60px_rgba(15,23,42,0.16)] transition-all duration-200 ease-out hover:-translate-y-2 hover:bg-[#fffaf5] hover:shadow-[0_26px_80px_rgba(15,23,42,0.22)] md:p-7 lg:p-8"
                    aria-label={plan.title}
                  >
                    {/* Badge + icon row */}
                    <div className="mb-4 flex items-start justify-between gap-3 md:mb-5">
                      <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/90 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] uppercase text-slate-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#1c7ff2]" />
                        <span>{plan.highlight}</span>
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#1c7ff2] to-[#5bb6ff] text-white shadow-md transition-shadow duration-200 group-hover:shadow-[0_18px_60px_rgba(15,23,42,0.24)]">
                        {plan.icon}
                      </div>
                    </div>

                    {/* Title, summary, price, checklist */}
                    <div>
                      <h3 className="text-lg font-semibold leading-snug text-slate-900 md:text-xl">
                        {plan.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600 md:text-[15px]">
                        {plan.summary}
                      </p>

                      <div className="mt-3 flex items-baseline gap-2 md:mt-4">
                        <p className="text-2xl font-semibold text-slate-900 md:text-3xl">
                          {plan.price}
                        </p>
                        <p className="text-xs text-slate-600 md:text-sm">
                          {plan.priceNote}
                        </p>
                      </div>

                      {plan.id === "premium" && (
                        <p className="mt-1 text-xs text-slate-600 md:text-[13px]">
                          Longer visits for cats who need extra time – same price, limited slots.
                        </p>
                      )}

                      {plan.bullets && (
                        <ul className="mt-4 space-y-2 text-sm text-slate-700 md:text-[15px]">
                          {plan.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2">
                              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#1c7ff2]" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Subtle footer use-case line */}
                    <p className="mt-4 border-t border-white/60 pt-3 text-xs text-slate-600 md:text-[13px]">
                      {plan.description}
                    </p>
                  </article>
                </ScrollRevealCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

