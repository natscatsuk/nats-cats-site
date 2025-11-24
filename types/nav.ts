export type NavItemId =
  | "home"
  | "about"
  | "services"
  | "booking"
  | "faqs"
  | "contact";

export type NavItem = {
  id: NavItemId;
  href: string;
  targetId?: string;
  pillLabel: string;
  sectionLabel: string;
  title: string;
  description: string;
  bullets: string[];
  iconSrc?: string;
};

