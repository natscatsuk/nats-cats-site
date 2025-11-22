"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/booking", label: "Booking" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export function PawNav() {
  const pathname = usePathname();

  return (
    <nav className="nats-nav-rail">
      <ul className="nats-nav-list">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={clsx(
                  "nats-nav-pill",
                  isActive && "nats-nav-pill--active"
                )}
              >
                <span className="nats-nav-pill-label">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
