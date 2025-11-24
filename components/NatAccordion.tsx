"use client";

import { useState, ReactNode } from "react";
import { FadeInWhenVisible } from "./FadeInWhenVisible";
import { motion, useReducedMotion } from "framer-motion";

type AccordionItem = {
  question: string;
  answer: string;
};

type Props = {
  items: AccordionItem[];
};

export function NatAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const itemId = `faq-item-${index}`;
        const answerId = `faq-answer-${index}`;
        
        return (
          <FadeInWhenVisible key={index} delay={index * 0.05}>
            <div
              className={`rounded-2xl border border-white/70 px-6 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-all duration-200 ease-out ${
                isOpen
                  ? "bg-[var(--nc-bg-cream-soft)] border-[var(--nc-gold-soft)]/30"
                  : "bg-white/80"
              }`}
            >
              <motion.button
                type="button"
                className="flex w-full cursor-pointer items-center justify-between gap-4 text-left focus:outline-none focus:ring-2 focus:ring-[var(--nc-blue-primary)] focus:ring-offset-2 rounded-lg"
                onClick={() => toggle(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle(index);
                  }
                }}
                aria-expanded={isOpen}
                aria-controls={answerId}
                id={itemId}
                whileHover={shouldReduceMotion ? {} : { backgroundColor: "rgba(15,23,42,0.02)" }}
                transition={{ duration: 0.15 }}
              >
                <span className={`text-[15px] pr-4 transition-all duration-200 ${
                  isOpen 
                    ? "font-bold text-slate-900" 
                    : "font-semibold text-slate-900"
                }`}>
                  {item.question}
                </span>
                <motion.span
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-white text-sm font-semibold ${
                    isOpen
                      ? "bg-[var(--nc-blue-primary)] shadow-[0_4px_12px_rgba(77,141,255,0.4)]"
                      : "bg-slate-400"
                  }`}
                >
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-base leading-none"
                  >
                    {isOpen ? "−" : "+"}
                  </motion.span>
                </motion.span>
              </motion.button>
              {isOpen && (
                <motion.div
                  id={answerId}
                  role="region"
                  aria-labelledby={itemId}
                  className="pt-4 mt-2 border-t border-slate-200/50 text-[14px] leading-relaxed text-slate-600 overflow-hidden"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: "easeOut" }}
                >
                  {item.answer}
                </motion.div>
              )}
            </div>
          </FadeInWhenVisible>
        );
      })}
    </div>
  );
}

