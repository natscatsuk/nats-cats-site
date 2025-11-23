"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { href: "/", label: "Home", targetId: "home-hero" },
  { href: "/about", label: "About", targetId: "about-nats-cats" },
  { href: "/services", label: "Services", targetId: "services" },
  { href: "/booking", label: "Booking", targetId: "booking" },
  { href: "/faqs", label: "FAQs", targetId: "faqs" },
  { href: "/contact", label: "Contact", targetId: null },
];

export function PawNav() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    targetId?: string
  ) => {
    // Only intercept clicks on home page for smooth scrolling
    if (isHomePage && targetId) {
      event.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    // Otherwise, let Next.js Link handle navigation normally
  };

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
                onClick={(e) => handleNavClick(e, item.href, item.targetId ?? undefined)}
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
