import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { PawNav } from "@/components/PawNav";
import Link from "next/link";
import Image from "next/image";

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

export const metadata: Metadata = {
  title: "Nat's Cats – Premium Cat Sitting in Harpenden",
  description:
    "Calm, clinical-grade home care for your cat – delivered by a qualified veterinary nurse.",
};

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
      <body className="min-h-screen text-gray-900 antialiased relative">
        <PawNav />
        <main className="flex-1 relative">
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
          {children}
        </main>
        <footer className="border-t border-slate-200/70 bg-white/90">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8 md:py-10">
            <div className="md:flex md:items-start md:justify-between gap-8">
              <div className="space-y-2 max-w-sm">
                <p className="text-[1.1rem] font-semibold text-slate-900">
                  Nat&apos;s Cats – Home Cat Care in Harpenden
                </p>
                <p className="text-[0.9rem] text-slate-600 leading-relaxed">
                  Calm, clinical-grade care for your cat in the comfort of their own
                  home, led by a qualified veterinary nurse.
                </p>
              </div>
              <div className="mt-6 md:mt-0 flex flex-wrap gap-8 text-[0.9rem]">
                <div>
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
                <div>
                  <p className="text-[0.8rem] font-semibold tracking-wide text-slate-500 uppercase mb-2">
                    Contact
                  </p>
                  <ul className="space-y-1.5 text-slate-600">
                    <li>Email: <span className="font-medium">[add email]</span></li>
                    <li>Phone: <span className="font-medium">[add phone]</span></li>
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
      </body>
    </html>
  );
}

