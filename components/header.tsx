"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/booking", label: "Booking" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm border-b border-[var(--nc-softBorder)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo - Centered above nav */}
        <div className="flex justify-center py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Nat&apos;s Cats logo"
              width={140}
              height={140}
              className="h-auto w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Navigation Bar */}
        <div className="flex items-center justify-between pb-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-500 flex items-center gap-2 group overflow-hidden backdrop-blur-sm border border-white/20 shadow-[0_4px_18px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,82,204,0.15)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/30 before:to-white/0 before:opacity-0 before:transition-opacity before:duration-500 group-hover:before:opacity-100",
                  pathname === link.href
                    ? "text-[var(--nc-royalBlue)] bg-gradient-to-br from-[var(--nc-royalBlue)]/12 via-white/5 to-white/0 border-[var(--nc-royalBlue)]/40"
                    : "text-gray-700 hover:text-[var(--nc-royalBlue)] hover:bg-white/70"
                )}
              >
                <PawPrint 
                  className={cn(
                    "w-4 h-4 transition-all duration-500",
                    pathname === link.href
                      ? "text-[var(--nc-royalBlue)] scale-110"
                      : "text-[var(--nc-royalBlue)] group-hover:text-[var(--nc-royalBlueDark)] group-hover:scale-110"
                  )} 
                />
                <span className="transition-all duration-500 relative z-10">
                  {link.label}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--nc-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation - Stacked */}
          <nav className="flex md:hidden flex-col items-center space-y-2 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 w-full text-center flex items-center justify-center gap-2 group backdrop-blur-sm border border-white/20",
                  pathname === link.href
                    ? "text-[var(--nc-royalBlue)] bg-gradient-to-br from-[var(--nc-royalBlue)]/12 to-white/0 border-[var(--nc-royalBlue)]/30 shadow"
                    : "text-gray-700 hover:text-[var(--nc-royalBlue)] hover:bg-white/70"
                )}
              >
                <PawPrint 
                  className={cn(
                    "w-3.5 h-3.5 transition-all duration-300",
                    pathname === link.href
                      ? "text-[var(--nc-royalBlue)] scale-110"
                      : "text-[var(--nc-royalBlue)] group-hover:scale-110"
                  )} 
                />
                <span>{link.label}</span>
                <span className="w-1 h-1 rounded-full bg-[var(--nc-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </nav>

          {/* Book Button - Right Side */}
          <div className="ml-2 md:ml-4 flex-shrink-0">
            <Button asChild variant="primary" size="sm">
              <Link href="/booking">Book a Visit</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
