"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { FadeInUp, FadeInView } from "@/components/ui/motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqsByCategory: Record<string, FAQ[]> = {
  "Bookings & Visits": [
    {
      question: "Do you stay overnight or offer live-in care?",
      answer: "No. Nat's Cats is a home-visit service only. I provide 20–30 minute visits, with a minimum of two visits per day (AM + PM), but do not offer overnight or live-in care.",
    },
    {
      question: "Which areas do you cover?",
      answer: "I cover Harpenden and surrounding areas within approximately 3 miles. If you're slightly outside this radius, feel free to enquire and I'll let you know if it's possible.",
    },
    {
      question: "How long is each visit?",
      answer: "Each visit is up to 30 minutes. This allows time for feeding, fresh water, litter care, play, wellbeing checks and your photo/video update.",
    },
    {
      question: "How far in advance should I book?",
      answer: "As spaces are limited to keep care personal, I recommend booking as early as possible for school holidays and peak times. For normal weeks, please enquire as soon as you have your dates.",
    },
    {
      question: "Will my cat always see you, or different sitters?",
      answer: "It's always me. Nat's Cats is a one-to-one, vet-nurse-led service. Your cat builds a relationship with a single, familiar carer.",
    },
  ],
  "Care & Welfare": [
    {
      question: "Is there a minimum number of visits per day?",
      answer: "Yes. For welfare reasons, I require a minimum of two visits per day (AM + PM) for all bookings, unless we've agreed in writing that a single visit is appropriate for your cat.",
    },
    {
      question: "Do you look after other pets, such as dogs?",
      answer: "My service is dedicated to cats. In some cases I may be able to help with small additional pets (e.g. small furries) as part of a cat visit, but I do not offer separate dog-walking or dog-only services.",
    },
    {
      question: "Can you give my cat medication?",
      answer: "Yes. As a veterinary nurse, I can safely administer oral, topical or injected medication. A Medication Consent Form is required and all details must be provided clearly in advance.",
    },
    {
      question: "What happens in an emergency?",
      answer: "If I have any concerns about your cat's wellbeing, I will contact you (and your emergency contact) immediately. If urgent veterinary attention is needed, I will act in your cat's best interests and arrange care without delay. All veterinary fees remain the owner's responsibility.",
    },
  ],
  "Payments & Policies": [
    {
      question: "Are you insured and DBS checked?",
      answer: "Yes. I am fully insured and DBS checked. I am also a qualified veterinary nurse with extensive feline experience.",
    },
    {
      question: "How do payments and deposits work?",
      answer: "Payment is required before the first visit. Holiday or peak bookings require a 50% non-refundable deposit to secure your dates. Full details are explained in the Terms & Conditions.",
    },
    {
      question: "How do key handovers work?",
      answer: "We'll agree the most convenient method for you – either an in-person handover or a secure key safe. All keys are stored and labelled securely without identifiable personal information.",
    },
  ],
};

function FAQItem({ question, answer }: FAQ) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[var(--nc-softBorder)] py-6 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-start justify-between gap-4 text-left group"
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-8 group-hover:text-[var(--nc-royalBlue)] transition-colors">
          {question}
        </h3>
        <ChevronDown
          className={`h-5 w-5 text-[var(--nc-royalBlue)] flex-shrink-0 mt-0.5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="mt-4 pr-12">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQs() {
  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <Section 
        as="section" 
        background="offWhite" 
        padding="lg"
        className="text-center"
      >
        <FadeInUp className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-[var(--nc-royalBlue)] uppercase tracking-wider mb-4">
            FAQs
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            If there&apos;s anything else you&apos;d like to know, just ask.
          </p>
        </FadeInUp>
      </Section>

      {/* FAQ List */}
      <Section 
        as="section" 
        background="white" 
        padding="lg"
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {Object.entries(faqsByCategory).map(([category, faqs], categoryIndex) => (
              <FadeInView key={category} delay={categoryIndex * 0.1}>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    {category}
                  </h2>
                  <div className="bg-white rounded-xl border border-[var(--nc-softBorder)] shadow-premium overflow-hidden">
                    <div className="p-6 lg:p-8">
                      {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Strip */}
      <Section 
        as="section" 
        background="offWhite" 
        padding="lg"
        className="text-center"
      >
        <FadeInView>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Still have a question?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            I&apos;m always happy to help. If you&apos;re unsure about anything, just get in touch.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="primary" size="lg">
              <Link href="/contact">Contact Nat</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Send an Enquiry</Link>
            </Button>
          </div>
        </FadeInView>
      </Section>
    </div>
  );
}
