"use client";

import { useState, ReactNode } from "react";
import { FadeInWhenVisible } from "./FadeInWhenVisible";

type AccordionItem = {
  question: string;
  answer: string;
};

type Props = {
  items: AccordionItem[];
};

export function NatAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <FadeInWhenVisible key={index} delay={index * 0.05}>
          <details
            className="group rounded-2xl border border-white/70 bg-white/80 backdrop-blur-sm px-6 py-4 shadow-[var(--nc-shadow-soft)] transition-all hover:bg-[var(--nc-bg-cream-soft)] open:border-[var(--nc-gold-soft)] open:bg-[var(--nc-bg-cream-soft)]"
            open={openIndex === index}
            onToggle={() => toggle(index)}
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-left list-none">
              <span className="text-[15px] font-semibold text-slate-900">
                {item.question}
              </span>
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 text-sm font-semibold group-open:rotate-180 transition-transform duration-200">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </summary>
            <div className="pt-4 mt-2 border-t border-slate-100 text-[14px] leading-relaxed text-slate-600">
              {item.answer}
            </div>
          </details>
        </FadeInWhenVisible>
      ))}
    </div>
  );
}

