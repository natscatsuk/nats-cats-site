"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/nav-config";
import type { NavItemId } from "@/types/nav";

// Filter nav items for home page - show items with targetId (anchor links) plus key sections
const getHomePageNavItems = () => {
  return NAV_ITEMS.filter(
    (item) =>
      item.targetId !== undefined ||
      item.id === "services" ||
      item.id === "booking" ||
      item.id === "faqs"
  );
};

const TARGET_ID_TO_NAV_ID: Record<string, NavItemId> = NAV_ITEMS.reduce(
  (acc, item) => {
    if (item.targetId) acc[item.targetId] = item.id;
    return acc;
  },
  {} as Record<string, NavItemId>
);

export default function MobileNav() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<NavItemId | null>("home");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              (a.target as HTMLElement).offsetTop -
              (b.target as HTMLElement).offsetTop
          );

        const topEntry = visibleEntries[0];
        if (!topEntry) return;

        const navId = TARGET_ID_TO_NAV_ID[topEntry.target.id];
        if (navId) {
          setActiveId((current) => (current === navId ? current : navId));
        }
      },
      {
        root: null,
        threshold: 0.35,
      }
    );

    NAV_ITEMS.forEach((item) => {
      if (!item.targetId) return;
      const element = document.getElementById(item.targetId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    targetId?: string
  ) => {
    // Handle anchor link scrolling
    if (href.startsWith("/#") && targetId) {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      const navId = TARGET_ID_TO_NAV_ID[targetId];
      if (navId) setActiveId(navId);
    }
  };

  // Only render on home page (hooks above still run consistently)
  if (pathname !== "/") return null;

  return (
    <nav
      className="lg:hidden sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200"
      aria-label="Mobile section navigation"
    >
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex items-center justify-start gap-2 px-4 py-3 min-w-max snap-x snap-mandatory">
          {getHomePageNavItems().map((item) => {
            const href = item.targetId ? `/#${item.targetId}` : item.href;
            const isActive = activeId === item.id;

            return (
              <Link
                key={item.id}
                href={href}
                onClick={(e) => handleClick(e, href, item.targetId)}
                className={`flex-shrink-0 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap snap-start transition-all duration-200 ${
                  isActive
                    ? "bg-slate-900 text-white shadow-[0_10px_30px_rgba(15,23,42,0.35)]"
                    : "bg-white text-slate-700 border border-slate-200 shadow-[0_6px_16px_rgba(15,23,42,0.08)]"
                }`}
              >
                <span>{item.pillLabel}</span>
                {isActive && (
                  <span className="inline-flex h-4 w-4 items-center justify-center">
                    <Image
                      src="/images/pawprint.png"
                      alt="Current section"
                      width={16}
                      height={16}
                      className="h-4 w-4 object-contain"
                    />
                  </span>
                )}
              </Link>
            );
          })}

          {/* Contact link to separate page */}
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap snap-start bg-white text-slate-700 border border-slate-200 shadow-[0_6px_16px_rgba(15,23,42,0.08)]"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

