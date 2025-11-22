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
        <footer className="bg-transparent backdrop-blur-xl border-t border-gray-200/50 py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-600">
              © {new Date().getFullYear()} Nat&apos;s Cats – Elite Home Care. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

