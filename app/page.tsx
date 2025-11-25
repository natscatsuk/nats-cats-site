import Hero from "@/components/hero";
import { SectionShell } from "@/components/SectionShell";
import { NatCard } from "@/components/NatCard";
import { NatAccordion } from "@/components/NatAccordion";
import { FadeInWhenVisible } from "@/components/FadeInWhenVisible";
import { FadeInSection } from "@/components/animations/FadeInSection";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { ScrollRevealCard } from "@/components/animations/ScrollRevealCard";
import { AnimatedTestimonialCard } from "@/components/AnimatedTestimonialCard";
import { AnimatedNatIllustration } from "@/components/AnimatedNatIllustration";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/features";
import VisitOptions from "@/components/VisitOptions";
import AboutStrip from "@/components/about-strip";
import CtaFooter from "@/components/cta-footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const StepIcon = ({ step }: { step: number }) => (
  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--nc-blue-primary)] text-xs font-semibold text-white shadow-sm shadow-blue-500/40">
    {step}
      </div>
  );

export default function Home() {
  const BADGES = [
    {
      title: "RCVS-Registered Veterinary Nurse",
      src: "/images/badges/RCVS.png",
    },
    {
      title: "Qualified Veterinary Nurse",
      src: "/images/badges/Qualified.png",
    },
    {
      title: "Fully Insured",
      src: "/images/badges/insured.png",
    },
    {
      title: "DBS Checked",
      src: "/images/badges/dbs.png",
    },
    {
      title: "Medication Trained",
      src: "/images/badges/medication.png",
    },
    {
      title: "Local Harpenden Specialist",
      src: "/images/badges/local.png",
    },
  ];

  const benefits = [
    {
      title: "Clinical knowledge on every visit",
      body: "Nat monitors appetite, litter tray habits, breathing, mobility and demeanour – spotting subtle red flags long before they become emergencies.",
      imageSrc: "/images/clinical.png",
      imageAlt: "Nat using a stethoscope to check a cat – clinical knowledge on every visit",
    },
    {
      title: "Gentle handling for sensitive cats",
      body: "Nervous, senior, post-op or medically fragile cats are handled using low-stress, vet-level handling techniques to keep visits calm and safe.",
      imageSrc: "/images/nervous.png",
      imageAlt: "Nat calmly comforting a nervous cat – gentle handling for sensitive cats",
    },
    {
      title: "Confident with medication & injections",
      body: "From tablets and eye drops to insulin injections, medication is handled calmly, correctly and safely – without stressful wrestling or guesswork.",
      imageSrc: "/images/medication2.png",
      imageAlt: "Nat giving medication to a relaxed cat – confident with medication and injections",
    },
    {
      title: "Reassurance for worried humans",
      body: "Detailed updates, photos and honest feedback mean you always know how your cat is doing – with the confidence of a vet nurse keeping watch.",
      imageSrc: "/images/updates.png",
      imageAlt: "Nat sending a photo update of a happy cat – reassurance for worried humans",
    },
  ];

  const vetNurseBenefits = benefits.map((benefit, index) => ({
    id: String(index + 1).padStart(2, "0"),
    ...benefit,
  }));

  const steps = [
    {
      step: 1,
      title: "Tell Nat about your cat",
      body: "Share their routine, quirks, diet requirements and any medical needs so visits feel familiar and safe.",
    },
    {
      step: 2,
      title: "Nat builds your visit plan",
      body: "Together you agree visit length, frequency and any extras such as medication, updates or extended stays.",
    },
    {
      step: 3,
      title: "Daily updates & vet-level oversight",
      body: "While you're away, you'll receive updates, photos and honest feedback so you always know how your cat is doing.",
    },
  ];

  const faqItems = [
    {
      question: "What areas do you cover?",
      answer:
        "Nat is based in Harpenden and typically covers Harpenden and surrounding areas within approximately 3 miles. If you're just outside this, get in touch and Nat will let you know if she can help.",
    },
    {
      question: "Will the same person visit my cat each time?",
      answer:
        "Yes – all visits are carried out personally by Nat, a qualified veterinary nurse. Your cat will always see the same familiar face.",
    },
    {
      question: "How long is each visit?",
      answer:
        "Each visit is up to 30 minutes. This allows time for feeding, fresh water, litter care, play, wellbeing checks and your photo/video update.",
    },
    {
      question: "Can you give my cat medication?",
      answer:
        "Yes. As a veterinary nurse, Nat can safely administer oral, topical or injected medication. A Medication Consent Form is required and all details must be provided clearly in advance.",
    },
    {
      question: "Is there a minimum number of visits per day?",
      answer:
        "Yes. For welfare reasons, Nat requires a minimum of two visits per day (AM + PM) for all bookings, unless agreed in writing that a single visit is appropriate for your cat.",
    },
    {
      question: "Are you insured and DBS checked?",
      answer:
        "Yes. Nat is fully insured and DBS checked, and is also a qualified veterinary nurse with extensive feline experience.",
    },
  ];

  return (
    <>
      <Hero />
      
      {/* Subtle decorative paw prints under hero */}
      <div className="hidden lg:block relative max-w-5xl mx-auto px-6 -mt-8 mb-4" aria-hidden="true">
        <div className="flex items-center gap-8 opacity-[0.06]">
          {Array.from({ length: 4 }).map((_, i) => (
            <svg
              key={i}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform rotate-12"
            >
              <ellipse cx="12" cy="14" rx="4" ry="5" fill="currentColor" />
              <circle cx="8" cy="8" r="2.5" fill="currentColor" />
              <circle cx="12" cy="6" r="2.5" fill="currentColor" />
              <circle cx="16" cy="8" r="2.5" fill="currentColor" />
              <circle cx="10" cy="10" r="2" fill="currentColor" />
              <circle cx="14" cy="10" r="2" fill="currentColor" />
            </svg>
          ))}
              </div>
            </div>

      {/* Credentials Section - peeks under hero on desktop */}
      <FadeInSection>
        <div className="mt-10 sm:mt-12 lg:mt-20">
          <SectionShell
            id="trust"
            eyebrow="Clinical-level care at home"
            title="Why cat owners trust Nat's Cats"
            subtitle="Every visit is led by a qualified veterinary nurse – not a hobby sitter. Clinical-grade care delivered with warmth and expertise in the comfort of your cat's own home."
            animationDelay="0.15s"
          >
          <FadeInWhenVisible>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50/95 px-4 py-2 text-[14px] font-medium text-amber-800 shadow-[0_8px_24px_rgba(251,191,36,0.35)] border border-amber-100/80 mb-6">
              <span className="text-[14px] font-semibold">🐾</span>
              <span className="text-[13px] sm:text-[14px] font-semibold">5.0</span>
              <span className="text-[16px] leading-none">★★★★★</span>
              <span className="text-[13px] sm:text-[14px]">from local cat owners</span>
            </div>
          </FadeInWhenVisible>
          <div className="mx-auto max-w-6xl">
            <section
              id="trust-badges"
              className="mt-10 sm:mt-12 lg:mt-14"
            >
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {BADGES.map((badge, index) => (
                  <ScrollRevealCard key={badge.title} delay={index * 0.05}>
                    <AnimatedCard className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-[#fff7ec] border border-[#f1e2cf] text-center shadow-[0_18px_45px_rgba(0,0,0,0.06)] px-4 py-4 sm:px-5 sm:py-5 lg:px-7 lg:py-8 transition-colors duration-200 hover:bg-[#fff7ec]/100">
                      <div className="relative h-16 w-16 sm:h-20 sm:w-20 lg:h-20 lg:w-20 transition-transform duration-200 hover:scale-[1.03]">
                        <Image
                          src={badge.src}
                          alt={badge.title}
                          fill
                          sizes="(max-width: 640px) 64px, 80px"
                          className="object-contain drop-shadow-[0_6px_14px_rgba(0,0,0,0.18)]"
                        />
                      </div>
                      <p className="text-center text-sm sm:text-base leading-snug text-[#182235] font-medium">
                        {badge.title}
                      </p>
                    </AnimatedCard>
                  </ScrollRevealCard>
                ))}
              </div>
            </section>
          </div>
        </SectionShell>
        </div>
      </FadeInSection>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Benefits Section */}
      <FadeInSection>
        <section className="feature-section" id="about-nats-cats">
          <FadeInWhenVisible>
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Benefits of vet-nurse cat care
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 lg:text-[2.35rem]">
                Why cat owners choose Nat for clinical-level home care
              </h2>
              <p className="mt-4 max-w-3xl text-[0.97rem] leading-relaxed text-slate-600">
                You&apos;re not booking a casual cat sitter. Every visit is led by an experienced veterinary nurse who understands feline health, behaviour and subtle changes that standard sitters can miss.
              </p>

              <div className="mt-8">
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-700">Vet-nurse advantages at a glance</span> · 4 ways Nat&apos;s care goes beyond a hobby sitter.
                </p>
              </div>

            <div className="mt-8 md:mt-10">
              <div className="max-w-6xl mx-auto px-4 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
                  {vetNurseBenefits.map((item, index) => (
                    <ScrollRevealCard key={item.id} delay={index * 0.05}>
                      <article
                        aria-label={item.title}
                        className="relative flex h-full flex-col rounded-3xl border border-white/60 bg-gradient-to-b from-white/85 to-[#fff6ea] p-6 md:p-7 shadow-[0_18px_55px_rgba(0,0,0,0.09)] transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.16)]"
                      >
                        <div className="relative mx-auto md:mx-0 -mt-12 mb-4 h-28 w-28">
                          <Image
                            src={item.imageSrc}
                            alt={item.imageAlt}
                            fill
                            className="object-contain"
                            priority={index === 0}
                          />
                        </div>

                        <h3 className="mt-3 text-lg md:text-xl font-semibold tracking-tight text-[#0f172a]">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-[14px] leading-relaxed text-[#3c4451]">
                          {item.body}
                        </p>

                        <div className="mt-auto pt-4" />
                      </article>
                    </ScrollRevealCard>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </FadeInWhenVisible>
        </section>
      </FadeInSection>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Features Section */}
      <Features />

      {/* Section Divider */}
      <div className="section-divider" />

      {/* How It Works Section */}
      <FadeInSection delay={0.1}>
        <section className="feature-section">
          <SectionShell
            eyebrow="Simple, clinical-grade visit flow"
            title="How Nat's cat sitting works"
            animationDelay="0.25s"
          >
            <div className="feature-grid">
              {steps.map((step, index) => (
                <ScrollRevealCard key={index} delay={index * 0.05}>
                  <AnimatedCard className="feature-card rounded-3xl bg-[#fff7ec] border border-[#f1e2cf] p-6 md:p-7 shadow-[0_18px_50px_rgba(0,0,0,0.04)] transition-colors duration-200 hover:bg-[#fff7ec]/100">
                    <div className="feature-card-header">
                      <div className="transition-transform duration-200 hover:scale-[1.03]">
                        <StepIcon step={step.step} />
                      </div>
                    </div>
                    <h3 className="feature-card-title">{step.title}</h3>
                    <p className="feature-card-body">{step.body}</p>
                  </AnimatedCard>
                </ScrollRevealCard>
              ))}
            </div>
            <FadeInWhenVisible delay={0.1}>
              <p className="mt-6 text-center text-sm text-slate-500">
                Home visits from <strong>£XX per visit</strong> · Daily photo updates included · Medication support available on request
              </p>
            </FadeInWhenVisible>
          </SectionShell>
        </section>
      </FadeInSection>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Visit Options */}
      <VisitOptions />

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Testimonials Section */}
      <FadeInSection delay={0.1}>
        <SectionShell
          eyebrow="Real feedback from local cat owners"
          title="What local cat owners say"
          animationDelay="0.3s"
        >
          <div className="py-6 md:py-10">
            <Testimonials />
          </div>
        </SectionShell>
      </FadeInSection>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* FAQ Section */}
      <FadeInSection delay={0.1}>
        <SectionShell
          id="faqs"
          eyebrow="FAQs"
          title="Common questions from cat owners"
          subtitle="If you're not used to vet-nurse care, you're not alone. Here are the questions cat owners ask most often."
          animationDelay="0.35s"
        >
          <div className="rounded-3xl bg-[var(--nc-bg-cream-soft)]/60 border border-white/70 p-6 lg:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            <NatAccordion items={faqItems} />
          </div>
        </SectionShell>
      </FadeInSection>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* About Nat Section */}
      <FadeInSection delay={0.1}>
        <SectionShell
          id="about-nat"
          eyebrow="About Nat"
          title="Meet Nat – Your Vet-Nurse Cat Carer"
          subtitle="Nat is a qualified veterinary nurse with extensive experience supporting cats of all ages and temperaments."
          align="center"
          animationDelay="0.4s"
        >
          <FadeInWhenVisible>
            <div className="mx-auto grid max-w-5xl items-center gap-8 lg:gap-12 sm:grid-cols-2">
              {/* Left: Copy card */}
              <div className="order-2 sm:order-1">
                <div className="rounded-3xl border border-[#f1e2cf] bg-[#fff7ec] p-6 lg:p-8 shadow-[0_18px_50px_rgba(0,0,0,0.04)] text-left">
                  <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mb-4">
                    Your Vet-Nurse Cat Carer
                  </h3>
                  <div className="space-y-4 text-base sm:text-[16px] text-slate-600 leading-relaxed">
                    <p>
                      Nat is a qualified veterinary nurse with extensive experience supporting cats of all ages and temperaments. Nat&apos;s Cats was created to offer calm, welfare-focused home care for cats who deserve more than a standard pet sitter.
                    </p>
                    
                    {/* Bullet points */}
                    <ul className="space-y-3 mt-6">
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--nc-blue-primary)]" />
                        <span className="text-sm sm:text-base">RCVS-registered veterinary nurse</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--nc-blue-primary)]" />
                        <span className="text-sm sm:text-base">Fully insured & DBS checked</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--nc-blue-primary)]" />
                        <span className="text-sm sm:text-base">Experienced with senior and special-needs cats</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Right: Illustration card */}
              <div className="order-1 sm:order-2 flex justify-center">
                <AnimatedNatIllustration />
              </div>
            </div>
          </FadeInWhenVisible>
        </SectionShell>
      </FadeInSection>

      {/* Final CTA - outside container for full width */}
      <CtaFooter />
    </>
  );
}
