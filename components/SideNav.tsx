"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/booking", label: "Booking" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

const navContainer = {
  hidden: { opacity: 0, x: 12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.7,
      ease: [0.43, 0.13, 0.23, 0.96] as const,
    },
  },
};

const navItem = {
  hidden: { opacity: 0, x: 10 },
  visible: { opacity: 1, x: 0 },
};

export function SideNav() {
  const path = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = shouldReduceMotion 
    ? { hidden: {}, visible: {} }
    : navContainer;
  
  const itemVariants = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : navItem;

  return (
    <aside className="side-nav">
      <motion.nav 
        className="side-nav-inner"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {navLinks.map((link) => (
          <motion.div key={link.href} variants={itemVariants}>
            <Link
              href={link.href}
              className={`
                side-nav-btn
                ${path === link.href ? "side-nav-active" : ""}
              `}
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </motion.nav>
    </aside>
  );
}

