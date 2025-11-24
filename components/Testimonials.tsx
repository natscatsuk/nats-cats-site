"use client";

import { motion, useReducedMotion } from "framer-motion";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  label?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "main",
    quote: "Without a doubt the best cat carer we've ever used. The updates, photos and clinical care were outstanding.",
    name: "Alex & Tom",
    label: "Harpenden cat owners",
  },
  {
    id: "sophie",
    quote: "Nat was calm, gentle and incredibly patient with our nervous rescue. For the first time we came home to a relaxed cat.",
    name: "Sophie",
    label: "Nervous rescue cat owner",
  },
  {
    id: "james",
    quote: "We never worry about our elderly boy now – Nat manages his medication and keeps us updated every step of the way.",
    name: "James",
    label: "Owner of senior cat",
  },
];

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  const mainTestimonial = testimonials[0];
  const secondaryTestimonials = testimonials.slice(1);

  return (
    <div className="grid gap-6 md:gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] items-stretch">
      {/* Primary testimonial card - Large dark card */}
      <motion.div
        className="relative rounded-3xl bg-[#071226] p-8 lg:p-10 shadow-[0_24px_80px_rgba(7,18,38,0.4)] text-slate-50 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" }}
        whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
        style={{
          transition: "box-shadow 0.3s ease-out",
        }}
      >
        {/* Subtle pulsing glow effect */}
        {!shouldReduceMotion && (
          <motion.div
            className="absolute -inset-[2px] rounded-3xl pointer-events-none -z-10"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background: "radial-gradient(circle, rgba(76, 142, 255, 0.15) 0%, transparent 70%)",
            }}
          />
        )}

        {/* Quote icon */}
        <div className="absolute top-6 left-6 text-[#f5d9a5]/25 text-6xl lg:text-7xl font-serif leading-none select-none z-0">
          &ldquo;
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Eyebrow */}
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-6">
            Featured review
          </p>

          {/* Main quote */}
          <p className="text-lg lg:text-xl leading-relaxed text-slate-50 mb-8 font-light">
            {mainTestimonial.quote}
          </p>

          {/* Name and label */}
          <div className="pt-6 border-t border-white/10">
            <p className="text-base font-semibold text-white mb-1">
              {mainTestimonial.name}
            </p>
            <p className="text-sm text-slate-300">{mainTestimonial.label}</p>
          </div>
        </div>
      </motion.div>

      {/* Secondary testimonials - Light cards */}
      <div className="grid gap-6">
        {secondaryTestimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="relative rounded-3xl border border-[#f1e2cf] bg-[#FBF3E8] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.04)] transition-colors duration-200 hover:bg-[#FBF3E8]/100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.4,
              ease: "easeOut",
              delay: 0.05 + index * 0.05,
            }}
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
          >
            <p className="text-sm lg:text-[0.95rem] leading-relaxed text-slate-700 mb-4">
              {testimonial.quote}
            </p>
            <div>
              <p className="text-xs font-semibold text-slate-900 mb-1">
                {testimonial.name}
              </p>
              {testimonial.label && (
                <p className="text-xs text-slate-600">{testimonial.label}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

