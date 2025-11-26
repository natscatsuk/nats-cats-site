import type { Metadata } from "next";
import Link from "next/link";
import { SectionShell } from "@/components/SectionShell";

export const metadata: Metadata = {
  title: "Privacy Policy | Nat's Cats – Home Cat Care in Harpenden",
  description:
    "How Nat's Cats collects, uses and protects your personal information when you enquire or book home cat care services.",
};

export default function PrivacyPage() {
  return (
    <section className="w-full py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionShell
          id="privacy"
          eyebrow="Legal"
          title="Privacy Policy"
          subtitle="This Privacy Policy explains, in plain English, how Nat&apos;s Cats uses and protects your personal information when you enquire about or book home cat care. We aim to treat your data with the same care and respect that we show to your cats."
          align="left"
          animationDelay="0.1s"
        >
          <div className="mt-8 space-y-10 text-sm md:text-base leading-relaxed text-slate-700">
            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                1. Who we are and how to contact us
              </h2>
              <p className="mt-3">
                Nat&apos;s Cats is a home cat care service based in Harpenden,
                Hertfordshire, operated by a qualified veterinary nurse
                (&quot;Nat&quot;). In this policy, &quot;we&quot;, &quot;us&quot; and
                &quot;our&quot; mean Nat&apos;s Cats.
              </p>
              <p className="mt-3">
                If you have any questions about this policy or how we handle your
                information, please contact Nat using the details on the{" "}
                <Link
                  href="/contact"
                  className="text-sky-700 hover:text-sky-900 underline-offset-4 hover:underline"
                >
                  contact page
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                2. What information we collect
              </h2>
              <p className="mt-3">
                The information we collect depends on how you interact with us, but
                may include:
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1.5">
                <li>Your contact details, such as your name, email address and phone number.</li>
                <li>Your home address or general area (for example &quot;Harpenden&quot;).</li>
                <li>
                  Information about your cats, including their names, ages,
                  temperament, routines and any medical conditions or medication.
                </li>
                <li>
                  Details of your booking, including visit dates, times and any
                  specific instructions.
                </li>
                <li>
                  Messages, emails and notes relating to your enquiries and bookings.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                3. How we use your information
              </h2>
              <p className="mt-3">
                We use your personal information to provide and manage our services,
                including to:
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1.5">
                <li>Respond to your enquiries and manage your bookings.</li>
                <li>
                  Plan and carry out home visits, including caring for your cats and
                  following any agreed instructions.
                </li>
                <li>
                  Communicate with you before, during and after your booking, for
                  example to send updates or discuss your cat&apos;s wellbeing.
                </li>
                <li>
                  Keep basic records for accounting, tax and business administration.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                4. Our legal basis for using your information
              </h2>
              <p className="mt-3">
                Data protection law requires us to have a lawful basis for using your
                personal information. In most cases we rely on:
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1.5">
                <li>
                  <strong>Performing a contract</strong> – we need certain information
                  to set up and provide your cat sitting booking safely and
                  effectively.
                </li>
                <li>
                  <strong>Legitimate interests</strong> – for example, keeping basic
                  records, improving how we run the service and communicating with you
                  about your booking.
                </li>
                <li>
                  <strong>Consent</strong> – for example, where you agree to receive
                  occasional marketing updates or to allow us to use a photo of your
                  cat for promotional purposes. You can withdraw your consent at any
                  time.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                5. When we share your information
              </h2>
              <p className="mt3">
                We treat your information as confidential and do not sell it to third
                parties. We may share it only when necessary, for example:
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1.5">
                <li>
                  With your veterinary practice or an emergency vet if there is a
                  concern about your cat&apos;s health and we need to arrange
                  treatment or seek professional advice.
                </li>
                <li>
                  With professional advisers such as an accountant, where needed for
                  business or legal reasons.
                </li>
                <li>
                  Where we are required to do so by law or to respond to lawful
                  requests from authorities.
                </li>
              </ul>
              <p className="mt-3">
                We may also use trusted third-party services (for example, email,
                calendar or booking tools) to help us manage enquiries and bookings.
                These providers process data on our behalf under appropriate terms and
                safeguards.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                6. How long we keep your information
              </h2>
              <p className="mt-3">
                We keep your information only for as long as we reasonably need it.
                In general:
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1.5">
                <li>
                  Enquiry details that do not lead to a booking may be kept for up to
                  12 months in case you get in touch again.
                </li>
                <li>
                  Booking and invoice records may be kept for up to six years, to meet
                  accounting and tax requirements and to help with any future repeat
                  bookings.
                </li>
              </ul>
              <p className="mt-3">
                When information is no longer needed, we will delete it or anonymise it
                where practical.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                7. Where your data is stored
              </h2>
              <p className="mt-3">
                We use reputable email, calendar, cloud storage and website hosting
                providers to run the service. This means your information may be
                stored on secure servers located in the UK, the European Economic Area
                (EEA) or, in some cases, in other countries.
              </p>
              <p className="mt-3">
                Where data is transferred outside the UK or EEA, we aim to ensure that
                appropriate safeguards are in place (for example, the provider being
                located in a country with adequate data protection laws or using
                approved contractual safeguards).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                8. Your rights
              </h2>
              <p className="mt-3">
                Under UK data protection law you have a number of rights, including
                the right to:
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1.5">
                <li>Ask for a copy of the personal information we hold about you.</li>
                <li>Ask us to correct information that is inaccurate or incomplete.</li>
                <li>
                  Ask us to delete your information, or to restrict how we use it, in
                  certain circumstances.
                </li>
                <li>
                  Object to certain uses of your information, including some types of
                  direct marketing.
                </li>
                <li>
                  Withdraw your consent where we are relying on consent (for example
                  for marketing).
                </li>
              </ul>
              <p className="mt-3">
                If you would like to exercise any of these rights, please contact Nat
                using the details on the{" "}
                <Link
                  href="/contact"
                  className="text-sky-700 hover:text-sky-900 underline-offset-4 hover:underline"
                >
                  contact page
                </Link>
                .
              </p>
              <p className="mt-3">
                You also have the right to complain to the UK Information
                Commissioner&apos;s Office (ICO) if you are unhappy with how your data
                has been handled. Further information is available at{" "}
                <span className="font-medium">ico.org.uk</span>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                9. Cookies and analytics
              </h2>
              <p className="mt-3">
                At present, Nat&apos;s Cats may use simple, privacy-focused analytics
                tools to understand how the website is used (for example, which pages
                are most popular). This helps improve the site and plan services.
              </p>
              <p className="mt-3">
                We do not use invasive tracking to build detailed personal profiles,
                and we do not sell your data to advertisers. If more advanced
                analytics or cookies are introduced in future, this policy will be
                updated to explain what is used and why.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                10. Updates to this policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time, for example if
                our services or legal requirements change. The latest version will
                always be available on this page. We recommend checking back
                occasionally to stay up to date.
              </p>
              <p className="mt-3 text-sm text-slate-500">
                Last updated: February 2025
              </p>
            </section>

            <p className="mt-6 text-xs text-slate-500 border-t border-slate-200/70 pt-4">
              This policy is intended as a clear explanation of how we handle your
              information and is not legal advice. If you have any questions or would
              like to discuss how we use your data, please{" "}
              <Link
                href="/contact"
                className="text-sky-700 hover:text-sky-900 underline-offset-4 hover:underline"
              >
                contact Nat
              </Link>
              .
            </p>
          </div>
        </SectionShell>
      </div>
    </section>
  );
}


