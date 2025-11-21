"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/booking", label: "Booking" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export function PawNav() {
  return (
    <header className="paw-nav" aria-label="Primary">
      <div className="paw-nav-inner">
        {/* central pad = logo / home link */}
        <Link href="/" className="paw-logo-pad" aria-label="Nat&apos;s Cats home">
          <Image
            src="/logo.png"
            alt="Nat's Cats logo"
            fill
            sizes="160px"
            priority
          />
        </Link>

        {/* toe links */}
        <nav className="paw-nav-toes">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`paw-toe paw-toe-${index + 1}`}
            >
              <span className="paw-toe-label">{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

