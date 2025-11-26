import type { Metadata } from "next";
import { BookingSection } from "@/components/BookingSection";

export const metadata: Metadata = {
  title: "Book a visit | Nat’s Cats – Home Cat Care in Harpenden",
  description:
    "Book a home visit with Nat’s Cats in Harpenden. Share your dates and your cats’ routines so Nat can plan calm, clinical-level care at home.",
};

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 space-y-10">
        <section className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Booking
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-900">
            Book a home visit for your cats
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-neutral-700">
            Tell Nat about your cats, their routine and when you’ll be away. As a qualified
            veterinary nurse, she’ll create a calm, clinical-level care plan for them at home
            in Harpenden.
          </p>
          <p className="text-xs sm:text-sm text-neutral-500">
            Serving Harpenden and nearby areas · Fully insured &amp; DBS checked ·
            RCVS-registered veterinary nurse
          </p>
        </section>

        <section aria-labelledby="booking-form-heading">
          <h2 id="booking-form-heading" className="sr-only">
            Booking form
          </h2>
          <BookingSection id="booking-page-form" />
        </section>
      </div>
    </main>
  );
}

