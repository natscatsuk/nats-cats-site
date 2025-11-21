"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/booking", label: "Booking" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export function SideNav() {
  const path = usePathname();

  return (
    <aside className="side-nav">
      <nav className="side-nav-inner">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`
              side-nav-btn
              ${path === link.href ? "side-nav-active" : ""}
            `}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

