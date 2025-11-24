import Hero from "@/components/hero";
import { SectionShell } from "@/components/SectionShell";
import { NatCard } from "@/components/NatCard";
import { NatAccordion } from "@/components/NatAccordion";
import { FadeInWhenVisible } from "@/components/FadeInWhenVisible";
import Features from "@/components/features";
import ServicesPreview from "@/components/services-preview";
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
      icon: "🩺",
      title: "Clinical knowledge on every visit",
      body: "Nat monitors appetite, litter tray habits, breathing, mobility and demeanour – spotting subtle red flags long before they become emergencies.",
    },
    {
      icon: "🐾",
      title: "Gentle handling for sensitive cats",
      body: "Nervous, senior, post-op or medically fragile cats are handled using low-stress vet-level handling techniques to keep visits calm and safe.",
    },
    {
      icon: "🏠",
      title: "Confident with medication & injections",
      body: "From tablets and eye drops to insulin injections, medication is handled calmly, correctly and safely – without stressful wrestling or guesswork.",
    },
    {
      icon: "📸",
      title: "Reassurance for worried humans",
      body: "Detailed updates, photos and honest feedback mean you know exactly how your cat is doing – with the confidence of a vet nurse keeping watch.",
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
      body: "Share a few details about your cat's routine, health and quirks. Nat will recommend the visit length and schedule that keeps everything feeling normal at home.",
    },
    {
      step: 2,
      title: "Nat visits while you're away",
      body: "Nat follows your cat's usual routine – feeding, medication, playtime and litter – with clinical-level attention to detail so you never have to worry.",
    },
    {
      step: 3,
      title: "Daily updates straight to your phone",
      body: "After each visit you'll get a short update with photos or videos, so you can see how relaxed your cat is and enjoy your time away.",
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
              {BADGES.map((badge) => (
                <article
                  key={badge.title}
                  className="flex flex-col items-center justify-center gap-4 rounded-3xl bg-[#fff7ec] border border-[#f1e2cf] text-center shadow-[0_18px_45px_rgba(0,0,0,0.06)] px-4 py-4 sm:px-5 sm:py-5 lg:px-7 lg:py-8"
                >
                  <div className="relative h-16 w-16 sm:h-20 sm:w-20 lg:h-20 lg:w-20">
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
                </article>
              ))}
                </div>
          </section>
                </div>
      </SectionShell>
                </div>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Benefits Section */}
      <section className="feature-section" id="about-nats-cats">
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

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-3 rounded-full border border-sky-100 bg-white/80 px-5 py-2 shadow-[0_12px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-white shadow-[0_0_0_3px_rgba(255,255,255,0.7)]">
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none">
                  <path
                    d="M10 4v12M4 10h12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-slate-700">
                Vet-nurse advantages at a glance
              </span>
            </div>
            <p className="text-xs text-slate-500">
              4 ways Nat&apos;s care goes beyond a hobby sitter.
            </p>
          </div>

          <div className="feature-grid mt-10">
            {vetNurseBenefits.map((item) => (
              <article key={item.id} className="feature-card">
                <div className="feature-card-header">
                  <div className="relative flex flex-shrink-0 items-center justify-center">
                    <div className="absolute inset-0 scale-[1.45] rounded-full bg-[rgba(72,115,255,0.2)] blur-2xl -z-10" />
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 text-lg text-white shadow-[0_14px_30px_rgba(15,23,42,0.35)] animate-benefit-float">
                      <span className="text-base drop-shadow-sm">{item.icon}</span>
                    </div>
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 px-2 py-[2px] text-[0.65rem] font-semibold text-white shadow-[0_6px_16px_rgba(15,23,42,0.4)]">
                      {item.id}
                    </span>
                  </div>
                </div>
                <h3 className="feature-card-title">{item.title}</h3>
                <p className="feature-card-body">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Features Section */}
      <Features />

      {/* Section Divider */}
      <div className="section-divider" />

      {/* How It Works Section */}
      <section className="feature-section">
        <SectionShell
          eyebrow="Simple, clinical-grade visit flow"
          title="How Nat's cat sitting works"
          animationDelay="0.25s"
        >
          <div className="feature-grid">
            {steps.map((step, index) => (
              <article key={index} className="feature-card">
                <div className="feature-card-header">
                  <StepIcon step={step.step} />
                </div>
                <h3 className="feature-card-title">{step.title}</h3>
                <p className="feature-card-body">{step.body}</p>
              </article>
            ))}
          </div>
          <FadeInWhenVisible delay={0.1}>
            <p className="mt-6 text-center text-sm text-slate-500">
              Home visits from <strong>£XX per visit</strong> · Daily photo updates included · Medication support available on request
            </p>
          </FadeInWhenVisible>
        </SectionShell>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Services Preview */}
      <ServicesPreview />

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Testimonials Section */}
      <SectionShell
        eyebrow="Real feedback from local cat owners"
        title="What local cat owners say"
        subtitle="Real feedback from Harpenden families who trust Nat's calm, clinical-grade home cat care."
        animationDelay="0.3s"
      >
        <div className="grid gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-start">
          {/* Hero testimonial card */}
          <FadeInWhenVisible delay={0}>
            <div className="relative rounded-2xl border-2 border-[#f5d9a5]/40 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.10)] text-white transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.18)]">
              {/* Stars */}
              <div className="mb-4 flex items-center gap-1 text-lg text-[#f5d9a5]">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
          </div>

              {/* Highlight line */}
              <p className="text-sm font-semibold text-[#f5d9a5] mb-3">
                The best decision we made for our anxious cat.
              </p>
              
              {/* Main quote */}
              <p className="text-base leading-relaxed text-slate-100 mb-4">
                Without a doubt the best cat sitter we&apos;ve ever used. The updates, photos, and clinical care were outstanding.
              </p>
              
              {/* Customer info */}
              <div className="pt-3 border-t border-slate-700/50">
                <p className="text-sm font-semibold text-white mb-1">Ben & Tara</p>
                <p className="text-xs text-slate-300">Harpenden cat owner</p>
                      </div>
                    </div>
          </FadeInWhenVisible>
          
          {/* Secondary testimonials */}
          <div className="grid gap-4 sm:grid-cols-2">
            <FadeInWhenVisible delay={0.05}>
              <div className="relative rounded-2xl border border-white/60 bg-gradient-to-br from-white via-[var(--nc-bg-cream-soft)] to-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.18)]">
                <p className="text-sm leading-relaxed text-slate-700 mb-3">
                  Nat was calm, gentle and incredibly professional. Our shy rescue cat actually came out for her — unheard of!
                </p>
                <p className="text-xs font-medium text-slate-900">– Sarah, Harpenden</p>
                      </div>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible delay={0.1}>
              <div className="relative rounded-2xl border border-white/60 bg-gradient-to-br from-white via-[var(--nc-bg-cream-soft)] to-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.18)]">
                <p className="text-sm leading-relaxed text-slate-700 mb-3">
                  We came home to such relaxed, happy cats. Nat&apos;s medical knowledge gave us real peace of mind.
                </p>
                <p className="text-xs font-medium text-slate-900">– Aimee & Luke, Harpenden</p>
            </div>
            </FadeInWhenVisible>
            
            <FadeInWhenVisible delay={0.15}>
              <div className="relative rounded-2xl border border-white/60 bg-gradient-to-br from-white via-[var(--nc-bg-cream-soft)] to-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.18)]">
                <p className="text-sm leading-relaxed text-slate-700 mb-3">
                  Our senior cat needs daily medication — Nat handled everything perfectly. So reassuring.
                </p>
                <p className="text-xs font-medium text-slate-900">– Harriet, Harpenden</p>
            </div>
            </FadeInWhenVisible>
                </div>
              </div>
      </SectionShell>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* FAQ Section */}
      <SectionShell
        id="faqs"
        eyebrow="FAQs"
        title="Common questions from cat owners"
        subtitle="If you're not sure yet, you're not alone. Here are the questions cat owners ask most often."
        animationDelay="0.35s"
      >
        <NatAccordion items={faqItems} />
      </SectionShell>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* About Nat Section */}
      <SectionShell
        id="about-nat"
        eyebrow="About Nat"
        title="Meet Nat – Your Vet-Nurse Cat Carer"
        subtitle="Nat is a qualified veterinary nurse with extensive experience supporting cats of all ages and temperaments."
        align="center"
        animationDelay="0.4s"
      >
        <FadeInWhenVisible>
          <div className="mx-auto grid max-w-4xl items-center gap-10 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/70 bg-[var(--nc-bg-card)] p-6 shadow-[0_24px_60px_rgba(15,23,42,0.10)] text-left transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.18)]">
              <div className="space-y-5 text-base sm:text-[16px] text-slate-600 leading-relaxed">
                <p>
                  Nat is a qualified veterinary nurse with extensive experience supporting cats of all ages and temperaments. Nat&apos;s Cats was created to offer calm, welfare-focused home care for cats who deserve more than a standard pet sitter.
                </p>
                <p className="italic text-slate-500 text-[15px] leading-relaxed">
                  Your cat is never just another booking.
            </p>
          </div>
              </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md rounded-2xl lg:rounded-[24px] shadow-[0_24px_60px_rgba(15,23,42,0.10)] ring-1 ring-slate-100/60 overflow-hidden bg-white/98 border border-white/70 flex items-center justify-center aspect-square max-h-[500px] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.18)]">
                <Image
                  src="/Cartoon Vet.png"
                  alt="Cartoon illustration of Nat, your vet-nurse cat carer"
                  width={500}
                  height={500}
                  className="object-contain w-full h-full p-6"
                  priority
                />
          </div>
          </div>
        </div>
        </FadeInWhenVisible>
      </SectionShell>

      {/* Final CTA - outside container for full width */}
      <CtaFooter />
    </>
  );
}
