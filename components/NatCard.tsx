import { ReactNode } from "react";
import { FadeInWhenVisible } from "./FadeInWhenVisible";

type Props = {
  icon?: ReactNode;
  title?: string;
  body?: ReactNode;
  delay?: number;
  variant?: "light" | "dark" | "pill";
};

export function NatCard({
  icon,
  title,
  body,
  delay = 0,
  variant = "light",
}: Props) {
  const base =
    "relative rounded-2xl border bg-[var(--nc-bg-card)] shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-200 ease-out";
  const light =
    "border-white/60 bg-gradient-to-br from-white via-[var(--nc-bg-cream-soft)] to-white hover:border-[var(--nc-gold-soft)] hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.18)]";
  const dark =
    "border-slate-900/40 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-slate-50 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.18)]";
  const pill =
    "border-white/60 bg-white/70 backdrop-blur-sm hover:border-[var(--nc-gold-soft)] hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.18)]";

  const variantClass =
    variant === "dark" ? dark : variant === "pill" ? pill : light;

  return (
    <FadeInWhenVisible delay={delay}>
      <div
        className={`${base} ${variantClass} group overflow-hidden`}
      >
        {/* glow on hover */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,_rgba(244,206,139,0.24),_transparent_60%)]" />

        <div className="relative flex gap-3 p-4 sm:p-5">
          {icon && (
            <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--nc-blue-primary)] via-[#5ea1ff] to-[#4d8dff] shadow-md shadow-blue-500/30 text-white group-hover:scale-105 group-hover:shadow-blue-500/50 transition-transform duration-300">
              {icon}
            </div>
          )}
          <div className="space-y-1.5">
            {title && (
              <h3 className={`text-sm font-semibold ${variant === "dark" ? "text-white" : "text-[var(--nc-navy)]"}`}>
                {title}
              </h3>
            )}
            {body && (
              <div className={`text-xs sm:text-sm leading-relaxed ${variant === "dark" ? "text-slate-200" : "text-slate-700"}`}>
                {body}
              </div>
            )}
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  );
}

