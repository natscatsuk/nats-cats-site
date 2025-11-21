import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SideNav } from "@/components/SideNav";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nat's Cats – Elite Home Care",
  description: "Vet-Nurse-Led Cat Sitting in Harpenden",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen text-gray-900 antialiased">
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
        <SideNav />
        <main className="flex-1">{children}</main>
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

