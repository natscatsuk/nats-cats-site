import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { PawNav } from "@/components/PawNav";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteTitle = "Nat's Cats – Vet-Nurse Home Cat Care in Harpenden";
const siteDescription =
  "Premium home cat sitting in Harpenden, led by a qualified veterinary nurse. Calm, clinical-grade visits with medication support, photo updates, and one-to-one care tailored to your cat.";
const siteUrl = "https://natscats.example"; // TODO: Replace with real production domain
const ogImagePath = "/og/nats-cats-hero.png"; // TODO: Add this OG image asset at this path

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "Nat the veterinary nurse providing calm, home-based cat care in Harpenden",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImagePath],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png", // TODO: Provide a square Nat's Cats logo at this path
  },
};

const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <body className="min-h-screen text-gray-900 antialiased relative overflow-x-hidden">
        <PawNav />
        <MobileNav />
        <main className="min-h-screen bg-[radial-gradient(circle_at_top,#f8f2e9_0%,#f3e6d6_40%,#f5f0ea_75%,#f7f3ee_100%)]">
          <Link href="/" className="top-logo">
            <Image
              src="/logo.png"
              alt="Nat's Cats Logo"
              width={180}
              height={180}
              className="top-logo-img"
              priority
            />
          </Link>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>

        {/* Local business JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Nat's Cats – Elite Home Cat Care",
              description:
                "Vet-nurse-led home cat sitting in Harpenden, offering calm, clinical-grade visits, medication support, and one-to-one care.",
              url: siteUrl, // TODO: Replace with real domain
              areaServed: {
                "@type": "Place",
                name: "Harpenden",
              },
              serviceType:
                "Veterinary nurse-led home cat sitting and medication support",
              image: `${siteUrl}${ogImagePath}`,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Harpenden",
                addressRegion: "Hertfordshire",
                addressCountry: "GB",
              },
            }),
          }}
        />
        <footer className="border-t border-slate-200/70 bg-white/90">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8 md:py-10">
            <div className="flex flex-col items-center text-center md:flex-row md:items-start md:justify-between gap-8">
              <div className="space-y-2 max-w-sm">
                <p className="text-[1.1rem] font-semibold text-slate-900">
                  Nat&apos;s Cats – Home Cat Care in Harpenden
                </p>
                <p className="text-[0.9rem] text-slate-600 leading-relaxed">
                  Calm, clinical-grade care for your cat in the comfort of their own
                  home, led by a qualified veterinary nurse.
                </p>
              </div>
              <div className="mt-6 md:mt-0 flex flex-wrap justify-center md:justify-start gap-8 text-[0.9rem]">
                <div className="text-center md:text-left">
                  <p className="text-[0.8rem] font-semibold tracking-wide text-slate-500 uppercase mb-2">
                    Navigate
                  </p>
                  <ul className="space-y-1.5 text-slate-600">
                    <li><a href="#home" className="hover:text-slate-900">Home</a></li>
                    <li><a href="#services" className="hover:text-slate-900">Services</a></li>
                    <li><a href="#booking" className="hover:text-slate-900">Booking</a></li>
                    <li><a href="#faqs" className="hover:text-slate-900">FAQs</a></li>
                  </ul>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-[0.8rem] font-semibold tracking-wide text-slate-500 uppercase mb-2">
                    Contact
                  </p>
                  <ul className="space-y-1.5 text-slate-600">
                    <li>
                      Email:{" "}
                      <span className="font-medium">
                        <a href="mailto:[add email]" className="underline-offset-4 hover:underline">
                          [add email]
                        </a>
                      </span>
                    </li>
                    <li>
                      Phone:{" "}
                      <span className="font-medium">
                        <a href="tel:[add phone]" className="underline-offset-4 hover:underline">
                          [add phone]
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/70 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <p className="text-[0.8rem] text-slate-500">
                © {new Date().getFullYear()} Nat&apos;s Cats. All rights reserved.
              </p>
              <p className="text-[0.8rem] text-slate-400">
                Fully insured • DBS checked • RCVS-registered veterinary nurse
              </p>
            </div>
          </div>
        </footer>

        {/* Analytics scaffold (Plausible) - only loads when NEXT_PUBLIC_PLAUSIBLE_DOMAIN is set */}
        {PLAUSIBLE_DOMAIN && (
          <Script
            src={`https://plausible.io/js/script.js`}
            data-domain={PLAUSIBLE_DOMAIN}
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  );
}

