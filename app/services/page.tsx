import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/SectionShell";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { ScrollRevealCard } from "@/components/animations/ScrollRevealCard";

export const metadata: Metadata = {
  title: "Services | Nat's Cats – Home Cat Care in Harpenden",
  description:
    "Clinical-level home cat care with standard visits, extended visits for medical needs, and weekend / bank holiday options for Harpenden cat owners.",
};

const visitPackages = [
  {
    id: "standard",
    label: "Most popular",
    title: "Standard Home Visits",
    bestFor: "Best for straightforward daily care while you're away.",
    price: "£15",
    priceNote: "per visit",
    bullets: [
      "20–30 minute calm home visit",
      "Feeding, fresh water and litter care",
      "Gentle playtime and welfare check",
      "Daily photo or video update",
    ],
  },
  {
    id: "weekend",
    label: "Weekend & bank holidays",
    title: "Weekend & Bank Holiday Visits",
    bestFor: "Designed for busy weekends, bank holidays and short breaks.",
    price: "£19",
    priceNote: "weekend rate",
    bullets: [
      "Same calm routine as standard visits",
      "Priority booking for peak dates",
      "Extra reassurance while you enjoy your time away",
    ],
  },
  {
    id: "extended",
    label: "Extra time, same price",
    title: "Extended Visits",
    bestFor: "Ideal for kittens, senior cats or those with medical needs.",
    price: "£15",
    priceNote: "per visit",
    bullets: [
      "40–45 minute extended visit",
      "More time for medication, cleaning and play",
      "Extra observation for cats needing closer monitoring",
    ],
  },
];

const specialistCare = [
  {
    title: "Medication administration",
    body: "Oral, topical or injected medication given calmly and correctly, following your vet's instructions.",
  },
  {
    title: "Post-op recovery monitoring",
    body: "Gentle checks on wounds, appetite, toileting and demeanour to spot concerns early.",
  },
  {
    title: "Support for chronic conditions",
    body: "Extra care for conditions such as kidney disease or diabetes, always aligned with your vet's plan.",
  },
  {
    title: "Liaising with your vet",
    body: "Sharing updates and observations with your vet (non-emergency) when needed for continuity of care.",
  },
];

const visitSteps = [
  {
    step: "01",
    title: "Before you go away",
    body: "Nat arranges a meet & greet, learns your cats' routines, agrees a care plan and collects keys securely.",
  },
  {
    step: "02",
    title: "During each visit",
    body: "Feeding, fresh water, litter care, play, wellbeing checks and your update – all at your cat's own pace.",
  },
  {
    step: "03",
    title: "When you get home",
    body: "Keys are returned, any important notes are shared, and you receive a clear summary of how your cats have been.",
  },
];

export default function Services() {
  return (
    <>
      {/* Hero / intro */}
      <FadeInSection>
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 mb-3">
              Services
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-slate-900 mb-4">
              Clinical-level home cat care, tailored to your cats
            </h1>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-700/90 max-w-3xl mx-auto">
              Nat visits your cats in their own home – not a cattery – combining calm,
              welfare-focused care with vet-nurse observation, so you can relax while
              you&apos;re away.
            </p>
            <div className="mt-6 flex justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8"
              >
                <Link href="#visits">View visit packages</Link>
              </Button>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* What we do overview */}
      <SectionShell
        eyebrow="What Nat does on a visit"
        title="Calm, in-home visits that feel familiar to your cat"
        subtitle="Every visit is built around your cat's routine, from confident explorers to nervous indoor-only cats."
        animationDelay="0.1s"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-8 lg:gap-12 items-center">
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-700">
            <p>
              Nat visits your home once or twice a day to keep food, water, litter and
              routines exactly as your cat prefers them – with a clinical eye on their
              wellbeing.
            </p>
            <p>
              Instead of a busy cattery, your cats stay in their own safe space while a
              qualified veterinary nurse quietly takes care of the details.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--nc-blue-primary)]" />
                <span>Daily home visits for feeding, litter and welfare checks.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--nc-blue-primary)]" />
                <span>
                  Tailored routines for nervous, elderly or indoor-only cats.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--nc-blue-primary)]" />
                <span>
                  Medication administration and post-op monitoring agreed with your vet.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--nc-blue-primary)]" />
                <span>
                  Daily photo / video updates and written notes so you always know how
                  your cats are.
                </span>
              </li>
            </ul>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-3xl shadow-[0_24px_80px_rgba(15,23,42,0.12)] ring-1 ring-slate-100/70 overflow-hidden bg-white/95 border border-[#f1e2cf]/70 flex items-center justify-center aspect-square">
              <Image
                src="/images/vet-nurse.png"
                alt="Nat, a veterinary nurse cat sitter, sitting with two cats"
                width={500}
                height={500}
                className="object-contain w-full h-full p-6"
              />
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Visit packages */}
      <FadeInSection delay={0.1}>
        <section id="visits" className="py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 mb-3">
                Visit packages
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-slate-900">
                Choose the visit pattern that fits your cats
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                Every visit includes a calm welfare check, feeding, fresh water and
                litter care as needed. Extended visits are designed for kittens,
                seniors or cats with medical needs.
              </p>
            </div>

            <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 lg:gap-8">
              {visitPackages.map((pkg, index) => (
                <ScrollRevealCard key={pkg.id} delay={index * 0.06}>
                  <article
                    className={`group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/60 bg-[#fff7ee] p-6 shadow-[0_18px_60px_rgba(15,23,42,0.12)] transition-all duration-200 ease-out hover:-translate-y-2 hover:bg-[#fffaf5] hover:shadow-[0_26px_80px_rgba(15,23,42,0.22)] md:p-7 lg:p-8 ${
                      pkg.id === "standard"
                        ? "ring-1 ring-[var(--nc-blue-primary)]/30"
                        : ""
                    }`}
                  >
                    <div className="mb-4 flex items-start justify-between gap-3 md:mb-5">
                      <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/90 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] uppercase text-slate-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#1c7ff2]" />
                        <span>{pkg.label}</span>
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-semibold leading-snug text-slate-900">
                        {pkg.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">{pkg.bestFor}</p>

                      <div className="mt-3 flex items-baseline gap-2 md:mt-4">
                        <p className="text-2xl md:text-3xl font-semibold text-slate-900">
                          {pkg.price}
                        </p>
                        <p className="text-xs md:text-sm text-slate-600">
                          {pkg.priceNote}
                        </p>
                      </div>

                      <ul className="mt-4 space-y-2 text-sm md:text-[15px] text-slate-700">
                        {pkg.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2">
                            <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#1c7ff2]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </ScrollRevealCard>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Specialist care */}
      <SectionShell
        eyebrow="Specialist support"
        title="Clinical-level care when your cat needs extra support"
        subtitle="Nat can provide additional monitoring and medication support at home, always following your vet&apos;s guidance."
        animationDelay="0.15s"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {specialistCare.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/70 bg-white/80 shadow-[0_14px_40px_rgba(15,23,42,0.06)] p-5 sm:p-6"
            >
              <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                {item.body}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-xs sm:text-sm text-slate-500">
          This service does not replace your veterinary practice or emergency care. Nat
          will always work alongside your vet and refer you back to them if anything
          needs clinical assessment.
        </p>
      </SectionShell>

      {/* How a typical visit works */}
      <SectionShell
        eyebrow="Visit flow"
        title="How a typical visit works"
        subtitle="From first chat to keys returned, the process is calm, clear and straightforward."
        align="center"
        animationDelay="0.18s"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {visitSteps.map((step) => (
            <article
              key={step.step}
              className="rounded-3xl border border-white/70 bg-gradient-to-b from-white/90 to-[#fff6ea] p-6 shadow-[0_18px_55px_rgba(0,0,0,0.06)] flex flex-col h-full"
            >
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--nc-blue-primary)] text-xs font-semibold text-white shadow-[0_8px_24px_rgba(15,23,42,0.35)]">
                {step.step}
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">{step.body}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      {/* Service area & availability */}
      <SectionShell
        eyebrow="Service area"
        title="Serving Harpenden and nearby areas"
        subtitle="Nat is based in Harpenden and typically covers homes within around three miles, depending on schedule and road links."
        animationDelay="0.2s"
      >
        <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p>
            To keep visits calm and punctual, Nat limits the number of cats she cares
            for at any one time. This means your booking gets the attention it
            deserves, without rushed visits.
          </p>
          <div className="rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-xs sm:text-sm text-slate-700 shadow-[0_10px_28px_rgba(15,23,42,0.04)]">
            Travel outside Harpenden may be possible depending on Nat&apos;s schedule.
            Mention your area when you enquire and Nat will let you know if she can help.
          </div>
        </div>
      </SectionShell>

      {/* CTA through to booking page */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/70 bg-white/90 shadow-[0_18px_55px_rgba(15,23,42,0.08)] px-6 py-8 sm:px-8 sm:py-9 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-3">
              Ready to plan your cat&apos;s home care?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mb-6 max-w-2xl mx-auto">
              Share your cats&apos; details and preferred dates using the booking form
              on the booking page, and Nat will be in touch to confirm availability.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full px-8"
            >
              <Link href="/booking">Book a visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
