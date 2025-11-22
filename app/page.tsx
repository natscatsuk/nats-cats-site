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
  const credentials = [
    { icon: "🛡️", title: "RCVS-Registered Veterinary Nurse" },
    { icon: "🎓", title: "Qualified Veterinary Nurse" },
    { icon: "✅", title: "Fully Insured" },
    { icon: "🔎", title: "DBS Checked" },
    { icon: "💊", title: "Medication Trained" },
    { icon: "📍", title: "Local Harpenden Specialist" },
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
      
      {/* Credentials Section */}
      <SectionShell
        eyebrow="Clinical-level care at home"
        title="Why cat owners trust Nat's Cats"
        subtitle="Every visit is led by a qualified veterinary nurse – not a hobby sitter. Clinical-grade care delivered with warmth and expertise in the comfort of your cat's own home."
      >
        <FadeInWhenVisible>
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-50/95 px-4 py-1.5 text-[14px] font-medium text-amber-800 shadow-[0_6px_20px_rgba(251,191,36,0.3)] border border-amber-100/80 mb-6">
            <span className="text-[14px] font-semibold">🐾</span>
            <span className="text-[13px] sm:text-[14px] font-semibold">5.0</span>
            <span className="text-[16px] leading-none">★★★★★</span>
            <span className="text-[13px] sm:text-[14px]">from local cat owners</span>
          </div>
        </FadeInWhenVisible>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((cred, index) => (
            <NatCard
              key={index}
              variant="pill"
              icon={<span className="text-xs">{cred.icon}</span>}
              title={cred.title}
              delay={index * 0.05}
            />
          ))}
        </div>
      </SectionShell>

      {/* Benefits Section */}
      <SectionShell
        eyebrow="Benefits of vet-nurse cat care"
        title="Why cat owners choose Nat for clinical-level home care"
        subtitle="You're not booking a casual cat sitter. Every visit is led by an experienced veterinary nurse who understands feline health, behaviour and subtle changes that standard sitters can miss."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <NatCard
              key={index}
              icon={<span className="text-xs">{benefit.icon}</span>}
              title={benefit.title}
              body={benefit.body}
              delay={index * 0.05}
            />
          ))}
        </div>
      </SectionShell>

      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <SectionShell
        eyebrow="Simple, clinical-grade visit flow"
        title="How Nat's cat sitting works"
      >
        <div className="grid gap-4 sm:grid-cols-3">
          {steps.map((step, index) => (
            <NatCard
              key={index}
              icon={<StepIcon step={step.step} />}
              title={step.title}
              body={step.body}
              delay={index * 0.02}
            />
          ))}
        </div>
        <FadeInWhenVisible delay={0.1}>
          <p className="mt-6 text-center text-sm text-slate-500">
            Home visits from <strong>£XX per visit</strong> · Daily photo updates included · Medication support available on request
          </p>
        </FadeInWhenVisible>
      </SectionShell>

      {/* Services Preview */}
      <ServicesPreview />

      {/* Testimonials Section */}
      <SectionShell
        eyebrow="Real feedback from local cat owners"
        title="What local cat owners say"
        subtitle="Real feedback from Harpenden cat families who trust Nat's calm, clinical-grade home care."
      >
        <div className="grid gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-start">
          <NatCard
            variant="dark"
            icon={<span className="text-xs">🐱</span>}
            title="Without a doubt the best cat sitter we've ever used. The updates, photos, and clinical care were outstanding."
            body={
              <>
                <p className="text-sm font-semibold mb-1 text-white">Ben & Tara</p>
                <p className="text-xs text-slate-300 mb-3">Miso</p>
                <div className="mt-3 flex items-center gap-2 text-xs text-amber-300">
                  <span>★★★★★</span>
                  <span className="opacity-80">5/5 from local owners</span>
                </div>
              </>
            }
            delay={0}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <NatCard
              icon={<span className="text-xs">🐱</span>}
              title="Nat was calm, gentle and incredibly professional. Our shy rescue cat actually came out for her — unheard of!"
              body={
                <>
                  <p className="text-xs font-medium mb-1">Sarah P</p>
                  <p className="text-xs text-slate-500">Maple</p>
                </>
              }
              delay={0.05}
            />
            <NatCard
              icon={<span className="text-xs">🐱</span>}
              title="We came home to such relaxed, happy cats. Nat's medical knowledge gave us real peace of mind."
              body={
                <>
                  <p className="text-xs font-medium mb-1">Aimee & Luke</p>
                  <p className="text-xs text-slate-500">Tilly & Jasper</p>
                </>
              }
              delay={0.1}
            />
            <NatCard
              icon={<span className="text-xs">🐱</span>}
              title="Our senior cat needs daily medication — Nat handled everything perfectly. So reassuring."
              body={
                <>
                  <p className="text-xs font-medium mb-1">Harriet</p>
                  <p className="text-xs text-slate-500">Pebbles</p>
                </>
              }
              delay={0.15}
            />
            <NatCard
              icon={<span className="text-xs">🐱</span>}
              title="Nat treated our home and our cat with so much respect. You can tell she genuinely adores animals."
              body={
                <>
                  <p className="text-xs font-medium mb-1">Jess</p>
                  <p className="text-xs text-slate-500">Pumpkin</p>
                </>
              }
              delay={0.2}
            />
          </div>
        </div>
      </SectionShell>

      {/* FAQ Section */}
      <SectionShell
        id="faqs"
        eyebrow="FAQs"
        title="Common questions from cat owners"
        subtitle="If you can't see your question below, just get in touch – Nat is always happy to talk through your cat's needs."
      >
        <NatAccordion items={faqItems} />
      </SectionShell>

      {/* About Nat Section */}
      <SectionShell
        id="about-nat"
        eyebrow="About Nat"
        title="Meet Nat – Your Vet-Nurse Cat Carer"
        subtitle="Nat is a qualified veterinary nurse with extensive experience supporting cats of all ages and temperaments."
        align="center"
      >
        <FadeInWhenVisible>
          <div className="mx-auto grid max-w-4xl items-center gap-10 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/70 bg-[var(--nc-bg-card)] p-6 shadow-[var(--nc-shadow-soft)] text-left">
              <div className="space-y-5 text-base sm:text-[16px] text-slate-600 leading-relaxed">
                <p>
                  Nat is a qualified veterinary nurse with extensive experience supporting cats of all ages and temperaments. Nat's Cats was created to offer calm, welfare-focused home care for cats who deserve more than a standard pet sitter.
                </p>
                <p className="italic text-slate-500 text-[15px] leading-relaxed">
                  Your cat is never just another booking.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md rounded-2xl lg:rounded-[24px] shadow-[var(--nc-shadow-soft)] ring-1 ring-slate-100/60 overflow-hidden bg-white/98 border border-white/70 flex items-center justify-center aspect-square max-h-[500px]">
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

      {/* Final CTA */}
      <CtaFooter />
    </>
  );
}
