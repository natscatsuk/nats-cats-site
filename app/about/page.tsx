"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, Heart, CheckCircle2, Star } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <section className="relative py-28 bg-[#F7F8FC] overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-sm font-semibold text-[#0052CC] uppercase tracking-wider mb-4">
              About Nat
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Meet Nat – Your Vet-Nurse-Led Cat Carer
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Professional, calm and welfare-focused home care from a qualified veterinary nurse.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two-Column Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-gray-600 leading-relaxed"
            >
              <p className="text-lg">
                Nat is a qualified veterinary nurse with years of experience supporting cats of all ages and temperaments, including anxious, elderly and medical-needs cats.
              </p>
              <p className="text-lg">
                Nat created Nat&apos;s Cats to offer calm, welfare-first home care for cats who deserve more than a standard sitter. With professional clinical understanding and a genuinely gentle approach, each visit is delivered with patience, respect and attention to detail.
              </p>
              <p className="text-lg italic text-gray-500">
                Your cat is never just another booking.
              </p>
            </motion.div>

            {/* Right Column - Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-[400px] sm:h-[500px] rounded-xl shadow-lg bg-[#F7F8FC] flex items-center justify-center">
                <div className="text-center space-y-2 p-8">
                  <div className="w-32 h-32 mx-auto bg-[#0052CC]/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-[#0052CC]/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">Nat portrait here</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Nat Section */}
      <section className="py-24 bg-[#F7F8FC]">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Nat?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Vet-Nurse Qualified",
                text: "Clinical handling, medication knowledge and welfare understanding you won't find with basic sitters.",
              },
              {
                icon: Heart,
                title: "Calm, Gentle Approach",
                text: "Perfect for nervous rescue cats, elderly pets or those with anxiety.",
              },
              {
                icon: CheckCircle2,
                title: "Professional & Reliable",
                text: "Fully insured, DBS checked and committed to premium care.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="p-8 rounded-xl bg-white border border-gray-100 shadow-premium hover:shadow-float transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-[#0052CC]/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#0052CC]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credentials Strip */}
      <section className="py-16 bg-[#F0F4FF]">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Professional Credentials
            </h3>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {[
                "Qualified Veterinary Nurse (VN)",
                "DBS Checked",
                "Fully Insured",
                "Medication Trained",
                "Feline Welfare Knowledge",
              ].map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#0052CC]/20 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#0052CC] flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                    {credential}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Strip */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                text: "Nat is the only sitter our nervous cat trusts.",
                stars: 5,
              },
              {
                text: "Professional, gentle and truly caring.",
                stars: 5,
              },
              {
                text: "Daily updates gave us complete peace of mind.",
                stars: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-[#F7F8FC] border border-gray-100"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="relative py-28 bg-royal-gradient text-white overflow-hidden">
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Ready for calm, reliable cat care?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
              Spaces are limited to keep care truly personal. Book early to secure your dates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#0052CC] hover:bg-gray-50 rounded-lg shadow-premium px-10 py-7 text-base font-semibold transition-all duration-300 hover:scale-105"
              >
                <Link href="/booking">Book a Visit</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10 rounded-lg px-10 py-7 text-base font-semibold transition-all duration-300 hover:scale-105"
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
