import type { Metadata } from "next";
import Link from "next/link";
import { SectionShell } from "@/components/SectionShell";

export const metadata: Metadata = {
  title: "Terms & Conditions | Nat's Cats – Home Cat Care in Harpenden",
  description:
    "Terms and conditions for using Nat's Cats home cat care services in Harpenden, including bookings, payments, cancellations and responsibilities.",
};

export default function TermsPage() {
  return (
    <section className="w-full py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px  -4 sm:px-6 lg:px-8">
        <SectionShell
          id="terms"
          eyebrow="Legal"
          title="Terms &amp; Conditions"
          subtitle="These terms set out how Nat&apos;s Cats provides home cat care services in and around Harpenden. They are written in clear, plain English and are intended to help you understand how we work. They are not a substitute for your own independent legal advice."
          align="left"
          animationDelay="0.1s"
        >
          <div className="mt-8 space-y-10 text-sm md:text-base leading-relaxed text-slate-700">
            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                1. Who we are
              </h2>
              <p className="mt-3">
                Nat&apos;s Cats is a small, owner-operated home cat care service based
                in Harpenden, Hertfordshire. The service is run by a qualified
                veterinary nurse (&quot;Nat&quot;). When we say &quot;Nat&apos;s
                Cats&quot;, &quot;we&quot; or &quot;us&quot; in these terms, we are
                referring to this business. When we say &quot;you&quot; or
                &quot;your&quot;, we mean the person who makes the booking and any
                other adults living in the same household.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                2. What we do
              </h2>
              <p className="mt-3">
                Nat&apos;s Cats provides home visits to look after your cats in their
                own environment. A typical visit may include:
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1.5">
                <li>Feeding and providing fresh water.</li>
                <li>Litter tray cleaning and basic tidy of feeding areas.</li>
                <li>Calm interaction, play and reassurance tailored to your cat.</li>
                <li>Basic welfare observations such as appetite, demeanour and toileting.</li>
              </ul>
              <p className="mt-3">
                Where agreed in advance, Nat may also provide basic medication
                administration or post-operative monitoring, following written
                instructions from you and your veterinary practice.
              </p>
              <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50/80 px-4 py-3 text-sm text-amber-900">
                <strong>Important:</strong> Nat&apos;s Cats is not a veterinary
                practice and does not replace the care, diagnosis or treatment
                provided by your own vet. All medical decisions remain the
                responsibility of you and your veterinary surgeon.
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                3. Bookings and availability
              </h2>
              <p className="mt-3">
                An enquiry, message or quote does not in itself create a confirmed
                booking. A booking is only confirmed once:
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1.5">
                <li>Nat has confirmed your requested dates in writing (for example by email or message).</li>
                <li>You and Nat have agreed a care plan, including visit frequency and any medication needs.</li>
                <li>Any required deposit or advance payment has been received and acknowledged.</li>
              </ul>
              <p className="mt-3">
                As a one-to-one service, availability is limited. Bookings are
                generally accepted on a first-come, first-served basis. If Nat is
                unable to accept a booking, she will let you know as soon as possible.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                4. Prices and payment
              </h2>
              <p className="mt-3">
                Current guide prices are shown on the website (for example, home
                visits from £15 per visit, second same-day visits at £12 and weekend
                visits at £19). Prices may be updated from time to time. The price
                confirmed with you at the time of booking will apply to that booking.
              </p>
              <p className="mt-3">
                Unless we agree otherwise in writing, payment is due in full before
                the first visit, typically a set number of days prior to the start of
                your booking or on confirmation of your booking. Payment details (for
                example bank transfer details or other accepted payment methods) will
                be provided in your booking confirmation. {/* TODO: Confirm accepted payment methods. */}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                5. Cancellations and changes
              </h2>
              <p className="mt-3">
                We understand that plans sometimes change. Please let Nat know as
                early as possible if you need to amend or cancel your booking.
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1.5">
                <li>
                  Cancellations made more than 7 days before the first scheduled visit
                  will normally be refunded in full.
                </li>
                <li>
                  Cancellations made within 7 days of the first scheduled visit may be
                  subject to a reasonable cancellation charge to cover time reserved
                  for your booking (for example, up to 50% of the total booking
                  value).
                </li>
                <li>
                  If Nat needs to cancel due to illness, emergency or other
                  unforeseen circumstances, she will notify you as soon as reasonably
                  possible and will either refund any payments for unused visits or, if
                  you agree, help you to arrange an alternative solution where
                  available.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                6. Keys, access and security
              </h2>
              <p className="mt-3">
                If you provide a key or access details, Nat will take reasonable
                steps to keep them secure. Keys are labelled in a way that does not
                include your full name or full address.
              </p>
              <p className="mt-3">
                You are responsible for ensuring that locks, alarms and access
                arrangements work correctly and that Nat has any necessary codes or
                instructions. If Nat is unable to gain safe access to your property,
                she will attempt to contact you or your nominated emergency contact.
                If access cannot be gained, no refund will normally be due for that
                missed visit.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                7. Pets&apos; health, emergencies and vet care
              </h2>
              <p className="mt-3">
                You must let Nat know in advance about any medical conditions,
                previous or current injuries, allergies, behaviour concerns or other
                issues that may affect your cat&apos;s care or safety.
              </p>
              <p className="mt-3">
                If Nat has concerns that your cat appears unwell, injured or in
                distress, she will, where possible:
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1.5">
                <li>Contact you using the details you have provided.</li>
                <li>Contact your nominated emergency contact if you cannot be reached.</li>
                <li>
                  If necessary, contact your usual veterinary practice or, if they are
                  unavailable, an appropriate local veterinary service, acting in your
                  cat&apos;s best interests.
                </li>
              </ul>
              <p className="mt-3">
                You agree to reimburse any veterinary fees, medication costs, and
                reasonable travel or time charges incurred while arranging care for
                your cat in an emergency or urgent situation.
              </p>
              <div className="mt-4 rounded-2xl border border-red-200 bg-red-50/80 px-4 py-3 text-sm text-red-900">
                <strong>Emergency care:</strong> Nat&apos;s Cats does not provide
                emergency veterinary services or 24/7 monitoring. In a life-threatening
                emergency you should contact a veterinary practice or emergency vet
                directly.
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                8. Your responsibilities as the owner
              </h2>
              <p className="mt-3">
                To help Nat care for your cats safely and effectively, you agree to:
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1.5">
                <li>Provide accurate and up-to-date information about your cats, home and routines.</li>
                <li>Ensure there is enough food, litter and other supplies for the duration of the booking.</li>
                <li>
                  Provide clear written instructions for any medication, including
                  doses, timings and how it should be given.
                </li>
                <li>
                  Keep your cats&apos; vaccinations and flea/worm treatments up to
                  date in line with veterinary advice (this is strongly recommended
                  for their health and welfare).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                9. Our responsibilities and limits of liability
              </h2>
              <p className="mt-3">
                Nat will provide services with reasonable care and skill, drawing on
                her training and experience as a veterinary nurse. However, animals
                can be unpredictable and some risks cannot be completely removed.
              </p>
              <p className="mt-3">
                Nat&apos;s Cats will not be liable for any loss, damage or expense
                that:
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1.5">
                <li>results from inaccurate or incomplete information provided by you;</li>
                <li>
                  arises from pre-existing illness, injury or behaviour issues, or
                  from events outside Nat&apos;s reasonable control (for example,
                  severe weather, power cuts, failures of alarms, locks or equipment);
                </li>
                <li>
                  is indirect or consequential loss (such as loss of earnings or
                  additional accommodation or travel costs).
                </li>
              </ul>
              <p className="mt-3">
                Nothing in these terms limits or excludes any liability that cannot
                legally be limited or excluded, including liability for death or
                personal injury caused by negligence or for fraudulent
                misrepresentation.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                10. Photos, updates and privacy
              </h2>
              <p className="mt-3">
                As part of the service, Nat may send you messages, photos or short
                video clips of your cats during visits. These are provided for your
                reassurance and are normally shared privately with you.
              </p>
              <p className="mt-3">
                With your explicit consent, Nat may occasionally use anonymised photos
                of your cats (never including your address or identifying details) in
                marketing materials such as the website or social media. You can
                withdraw your consent for this at any time by contacting Nat.
              </p>
              <p className="mt-3">
                For more information about how we handle your personal data, please
                see our{" "}
                <Link
                  href="/privacy"
                  className="text-sky-700 hover:text-sky-900 underline-offset-4 hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                11. Complaints
              </h2>
              <p className="mt-3">
                If you are unhappy with any aspect of the service, please contact Nat
                as soon as possible so that any concerns can be discussed and, where
                appropriate, resolved. You can get in touch via the{" "}
                <Link
                  href="/contact"
                  className="text-sky-700 hover:text-sky-900 underline-offset-4 hover:underline"
                >
                  contact page
                </Link>{" "}
                or by email.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                12. Changes to these terms
              </h2>
              <p className="mt-3">
                These Terms &amp; Conditions may be updated from time to time. The
                version published on this page at the time you confirm your booking
                will apply to that booking. If significant changes are made that may
                affect your existing future booking, we will let you know.
              </p>
              <p className="mt-3 text-sm text-slate-500">
                Last updated: February 2025
              </p>
            </section>

            <p className="mt-6 text-xs text-slate-500 border-t border-slate-200/70 pt-4">
              This page is intended as a helpful summary of how Nat&apos;s Cats works
              and is not formal legal advice. If anything is unclear or you have
              questions about these terms, please{" "}
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


