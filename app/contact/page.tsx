import type { Metadata } from "next";
import Link from "next/link";
import { SectionShell } from "@/components/SectionShell";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Nat's Cats – Home Cat Care in Harpenden",
  description:
    "Contact Nat's Cats to ask a question or request home cat care in Harpenden. Send a message, email, or call.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <SectionShell
        id="contact-hero"
        eyebrow="Contact"
        title="Get in touch with Nat"
        subtitle="Have a question about home visits, medication support or availability? Send a message and Nat will get back to you as soon as she’s away from the cats."
        align="center"
        animationDelay="0.1s"
      >
        <div className="mt-3 text-xs sm:text-sm text-slate-500">
          Serving Harpenden and nearby areas within ~3 miles.
        </div>
      </SectionShell>

      {/* Form + info panel */}
      <section className="py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] gap-8 lg:gap-10 items-start">
            {/* Contact form */}
            <ContactForm />

            {/* Info panel */}
            <aside className="rounded-3xl bg-white/70 backdrop-blur border border-white/80 shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-5 sm:p-6 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#fff7ec] border border-[#f1e2cf] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                <span>Prefer to email or call?</span>
              </div>
              <h2 className="text-base sm:text-lg font-semibold text-slate-900">
                Reach Nat directly
              </h2>
              <div className="space-y-2 text-sm text-slate-700">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:[add email]"
                    className="font-semibold text-slate-900 underline-offset-4 hover:underline"
                  >
                    [add email]
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href="tel:[add phone]"
                    className="font-semibold text-slate-900 underline-offset-4 hover:underline"
                  >
                    [add phone]
                  </a>
                </p>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--nc-blue-primary)]" />
                  <span>Based in Harpenden.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--nc-blue-primary)]" />
                  <span>Fully insured &amp; DBS checked.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--nc-blue-primary)]" />
                  <span>Limited spaces so care stays personal.</span>
                </li>
              </ul>
              <div className="pt-2 border-t border-slate-200/70 mt-3 text-xs text-slate-500">
                For emergencies or urgent clinical concerns, please contact your
                veterinary practice directly.
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Quick answers strip */}
      <section className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="rounded-2xl bg-white/80 border border-white/80 shadow-[0_10px_28px_rgba(15,23,42,0.04)] px-4 py-3 text-center text-xs sm:text-sm text-slate-700">
              Home visits from <span className="font-semibold">£15</span> per visit.
            </div>
            <div className="rounded-2xl bg-white/80 border border-white/80 shadow-[0_10px_28px_rgba(15,23,42,0.04)] px-4 py-3 text-center text-xs sm:text-sm text-slate-700">
              Fully insured &amp; DBS checked nurse-led care.
            </div>
            <div className="rounded-2xl bg-white/80 border border-white/80 shadow-[0_10px_28px_rgba(15,23,42,0.04)] px-4 py-3 text-center text-xs sm:text-sm text-slate-700">
              Medication support available from <span className="font-semibold">£4–£8</span> extra per visit.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
