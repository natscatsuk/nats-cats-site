import { ReactNode } from "react";
import { FadeInWhenVisible } from "./FadeInWhenVisible";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  align?: "left" | "center";
  animationDelay?: string;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  align = "left",
  animationDelay = "0.15s",
}: Props) {
  const textAlign = align === "center" ? "text-center" : "text-left";
  const alignItems = align === "center" ? "items-center" : "items-start";

  return (
    <section
      id={id}
      className="relative py-16 md:py-20 lg:py-24 fade-up-soft"
      style={{ animationDelay }}
    >
      {/* soft radial spotlight */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-40 max-w-3xl rounded-full bg-gradient-to-b from-white/70 via-[var(--nc-bg-cream-soft)] to-transparent blur-3xl opacity-80" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-10">
        {(eyebrow || title || subtitle) && (
          <FadeInWhenVisible>
            <div
              className={`flex flex-col gap-3 ${textAlign} ${alignItems} px-4 sm:px-0`}
            >
              {eyebrow && (
                <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2 className="text-2xl md:text-4xl font-semibold leading-tight text-[var(--nc-navy)]">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="mt-4 md:mt-5 max-w-2xl lg:max-w-3xl text-sm md:text-base leading-relaxed text-slate-700/90">
                  {subtitle}
                </p>
              )}
            </div>
          </FadeInWhenVisible>
        )}

        {children}
      </div>
    </section>
  );
}

