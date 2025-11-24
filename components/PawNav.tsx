"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";

import { NAV_ITEMS } from "@/lib/nav-config";
import type { NavItem, NavItemId } from "@/types/nav";

import NavHoverCard from "./NavHoverCard";

const TARGET_ID_TO_NAV_ID: Record<string, NavItemId> = NAV_ITEMS.reduce(
  (acc, item) => {
    if (item.targetId) {
      acc[item.targetId] = item.id;
    }
    return acc;
  },
  {} as Record<string, NavItemId>
);

export function PawNav() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const routeActiveId: NavItemId =
    NAV_ITEMS.find((item) =>
      item.href === "/"
        ? pathname === "/"
        : pathname.startsWith(item.href)
    )?.id ?? "home";

  const [activeHover, setActiveHover] = useState<NavItemId | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isCardInteracting, setIsCardInteracting] = useState(false);
  const [visibleSection, setVisibleSection] = useState<NavItemId>(routeActiveId);

  const closeTimeoutRef = useRef<number | undefined>(undefined);
  const cardInteractionRef = useRef(false);

  const homeRef = useRef<HTMLAnchorElement | null>(null);
  const aboutRef = useRef<HTMLAnchorElement | null>(null);
  const servicesRef = useRef<HTMLAnchorElement | null>(null);
  const bookingRef = useRef<HTMLAnchorElement | null>(null);
  const faqsRef = useRef<HTMLAnchorElement | null>(null);
  const contactRef = useRef<HTMLAnchorElement | null>(null);
  const fallbackTriggerRef = useRef<HTMLAnchorElement | null>(null);

  const triggerRefs: Record<NavItemId, typeof homeRef> = {
    home: homeRef,
    about: aboutRef,
    services: servicesRef,
    booking: bookingRef,
    faqs: faqsRef,
    contact: contactRef,
  };

  const cancelClose = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = undefined;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimeoutRef.current = window.setTimeout(() => {
      if (!cardInteractionRef.current) {
        setActiveHover(null);
      }
    }, 160);
  };

  const updateCardInteraction = (value: boolean) => {
    cardInteractionRef.current = value;
    setIsCardInteracting(value);
    if (value) {
      cancelClose();
    } else {
      scheduleClose();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setVisibleSection(routeActiveId);
      return;
    }

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
          setVisibleSection((current) =>
            current === navId ? current : navId
          );
        }
      },
      {
        root: null,
        threshold: 0.4,
      }
    );

    const observedElements: HTMLElement[] = [];
    NAV_ITEMS.forEach((item) => {
      if (!item.targetId) return;
      const element = document.getElementById(item.targetId);
      if (element) {
        observer.observe(element);
        observedElements.push(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname, routeActiveId]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem
  ) => {
    const shouldScrollHomeHero =
      isHomePage && item.href === "/" && item.targetId;

    if (shouldScrollHomeHero && item.targetId) {
      event.preventDefault();
      const element = document.getElementById(item.targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const activeSection = activeHover
    ? NAV_ITEMS.find((section) => section.id === activeHover) ?? null
    : null;
  const activeTriggerRef = activeSection
    ? triggerRefs[activeSection.id]
    : null;
  const canPosition = Boolean(activeSection && activeTriggerRef?.current);
  const cardIsOpen = Boolean(
    canPosition && (isDesktop || isCardInteracting)
  );

  const activeNavId = pathname === "/" ? visibleSection : routeActiveId;

  return (
    <>
      <nav
        className="nats-nav-rail hidden lg:flex"
        aria-label="Main navigation"
      >
        <ul className="nats-nav-list">
          {NAV_ITEMS.map((item) => {
            const isActive = activeNavId === item.id;

            return (
              <li key={item.id}>
                <Link
                  ref={triggerRefs[item.id]}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  onMouseEnter={() => {
                    cancelClose();
                    setActiveHover(item.id);
                  }}
                  onMouseLeave={() => {
                    scheduleClose();
                  }}
                  onFocus={() => {
                    cancelClose();
                    setActiveHover(item.id);
                  }}
                  onBlur={(e) => {
                    if (
                      !e.relatedTarget ||
                      !e.relatedTarget.closest('[data-nav-hover-card="true"]')
                    ) {
                      scheduleClose();
                    }
                  }}
                  className={clsx(
                    "nats-nav-pill",
                    isActive && "nats-nav-pill--active"
                  )}
                  aria-describedby={
                    activeHover === item.id
                      ? `nav-card-title-${item.id}`
                      : undefined
                  }
                >
                  <span className="flex items-center justify-center gap-2">
                    <span
                      className={clsx(
                        "nats-nav-pill-label transition-colors duration-200",
                        isActive ? "text-slate-900" : "text-slate-900/80"
                      )}
                    >
                      {item.pillLabel}
                    </span>
                    <motion.div
                      whileHover={shouldReduceMotion ? {} : { rotate: 10, y: -1, scale: 1.03 }}
                      className={clsx("paw-icon transition-transform duration-200", isActive && "visible")}
                      animate={
                        isActive && !shouldReduceMotion
                          ? {
                              scale: [1, 1.05, 1],
                            }
                          : {}
                      }
                      transition={
                        isActive && !shouldReduceMotion
                          ? {
                              scale: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              },
                            }
                          : { duration: 0.2, ease: "easeOut" }
                      }
                    >
                      <Image
                        src="/images/pawprint.png"
                        alt=""
                        width={20}
                        height={20}
                        sizes="20px"
                        aria-hidden="true"
                        className="transition-transform duration-200"
                      />
                    </motion.div>
                  </span>
                  <span id={`nav-card-title-${item.id}`} className="sr-only">
                    {item.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {activeSection && (
        <NavHoverCard
          label={activeSection.sectionLabel}
          title={activeSection.title}
          description={activeSection.description}
          bullets={activeSection.bullets}
          triggerRef={activeTriggerRef ?? fallbackTriggerRef}
          open={cardIsOpen && Boolean(activeTriggerRef?.current)}
          icon={
            activeSection.iconSrc ? (
              <Image
                src={activeSection.iconSrc}
                alt={`${activeSection.pillLabel} badge`}
                width={26}
                height={26}
                sizes="26px"
                className="h-7 w-7 object-contain"
              />
            ) : undefined
          }
          onMouseEnter={() => updateCardInteraction(true)}
          onMouseLeave={() => updateCardInteraction(false)}
          onFocus={() => updateCardInteraction(true)}
          onBlur={() => updateCardInteraction(false)}
        />
      )}

      {/* Mobile: Close card on outside click */}
      {Boolean(activeHover) && (
        <div
          className="lg:hidden fixed inset-0 z-[44]"
          onClick={() => {
            setActiveHover(null);
          }}
          aria-hidden="true"
        />
      )}
    </>
  );
}
