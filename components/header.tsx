"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
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
          <nav className="hidden md:flex items-center space-x-1 mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === link.href
                    ? "text-[var(--nc-royalBlue)] bg-[var(--nc-royalBlue)]/5"
                    : "text-gray-700 hover:text-[var(--nc-royalBlue)] hover:bg-gray-50"
                )}
              >
                {link.label}
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
                  "px-3 py-1.5 text-xs font-medium rounded-md transition-colors w-full text-center",
                  pathname === link.href
                    ? "text-[var(--nc-royalBlue)] bg-[var(--nc-royalBlue)]/5"
                    : "text-gray-700 hover:text-[var(--nc-royalBlue)] hover:bg-gray-50"
                )}
              >
                {link.label}
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
