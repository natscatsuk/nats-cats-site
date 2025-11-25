"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingCards = [
  {
    label: "Most Popular",
    title: "Standard Home Visit",
    price: "£15",
    priceNote: "per visit",
    subtitle: "Calm, everyday care",
    bullets: [
      "20–30 minute visit",
      "Feeding and fresh water",
      "Litter tray clean & area tidy",
      "Playtime and enrichment",
      "Behaviour & welfare check",
      "Photo or video update every visit",
    ],
    footerNote: "Ideal for daily care and shorter trips.",
    isPopular: true,
  },
  {
    title: "Holiday & Weekend Visits",
    price: "£19",
    priceNote: "weekend rate",
    subtitle: "Extra support while you're away",
    bullets: [
      "Priority weekend and peak-time booking",
      "Extra attention during longer absences",
      "Increased update detail",
      "Home checks (lights, blinds, post, bins if requested)",
    ],
    footerNote: "Perfect for holidays and longer breaks.",
    isPopular: false,
  },
  {
    title: "Medication Support Add-On",
    price: "£4–£8",
    priceNote: "per visit",
    subtitle: "Safe, clinical administration",
    bullets: [
      "Oral, topical or injected medication",
      "Vet-nurse-led understanding of conditions",
      "Monitoring of appetite, hydration and behaviour",
      "Medication Consent Form required",
    ],
    footerNote: "Ideal for elderly or medical-needs cats.",
    isPopular: false,
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#F7F8FC] overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-sm font-semibold text-[#0052CC] uppercase tracking-wider mb-4">
              Our Services
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Services & Pricing
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Simple, transparent pricing for premium, vet-nurse-led home care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative p-8 rounded-xl bg-white border border-gray-100 shadow-premium hover:shadow-float transition-all duration-300 ${
                  card.isPopular ? "border-[#0052CC]/30 ring-2 ring-[#0052CC]/10" : ""
                }`}
              >
                {card.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-royal-gradient text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">
                      {card.label}
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-[#0052CC] text-3xl font-bold mb-1">
                      {card.price}
                    </p>
                    <p className="text-sm text-gray-500 mb-3">
                      {card.priceNote}
                    </p>
                    <p className="text-gray-600 font-medium">
                      {card.subtitle}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {card.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#0052CC] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs text-gray-500 italic pt-4 border-t border-gray-100">
                    {card.footerNote}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimum Visits Notice */}
      <section className="py-12 bg-[#F7F8FC]">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-8 border-l-4 border-[#0052CC] shadow-sm"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Minimum 2 Visits Per Day
            </h3>
            <p className="text-gray-600 leading-relaxed">
              For welfare reasons, Nat&apos;s Cats requires a minimum of two visits per day (AM + PM) for all bookings, unless otherwise agreed in writing. This keeps your cat&apos;s routine safe and consistent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ready to book your visits?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Spaces are limited to keep care truly personal. Book early to secure your dates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-royal-gradient hover:opacity-90 text-white rounded-lg shadow-royal-glow px-8 py-6 text-base font-semibold transition-all duration-300"
              >
                <Link href="/booking">Book a Visit</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-[#0052CC] text-[#0052CC] hover:bg-[#0052CC]/5 rounded-lg px-8 py-6 text-base font-semibold transition-all duration-300"
              >
                <Link href="/booking">Check Availability</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
