import Image from "next/image";
import { TRUST_BADGES } from "@/lib/trust-badges";

export function HeroTrustStrip() {
  return (
    <div className="relative mt-4 sm:mt-6">
      {/* Soft glow behind badges */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-white/60 via-white/30 to-transparent blur-2xl opacity-80" />

      {/* Scroll container */}
      <div className="flex gap-3 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:overflow-visible snap-x">
        {TRUST_BADGES.map((badge) => (
          <div
            key={badge.id}
            className="flex snap-start items-center gap-2 rounded-full border border-neutral-200/80 bg-white/85 backdrop-blur px-3 py-1.5 text-xs sm:text-sm text-neutral-800 shadow-[0_10px_25px_rgba(15,23,42,0.10)]"
          >
            <div className="relative h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center shrink-0">
              <Image
                src={badge.iconSrc}
                alt={badge.iconAlt}
                fill
                sizes="24px"
                className="object-contain"
              />
            </div>
            <span className="whitespace-nowrap">{badge.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}



