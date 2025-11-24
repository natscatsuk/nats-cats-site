import clsx from "clsx";
import React, {
  useCallback,
  useEffect,
  useRef,
  type FocusEventHandler,
  type MouseEventHandler,
} from "react";

type TriggerElement = HTMLButtonElement | HTMLAnchorElement;

export type NavHoverCardProps = {
  label: string;
  icon?: React.ReactNode;
  title: string;
  description?: string;
  bullets?: string[];
  triggerRef: React.RefObject<TriggerElement>;
  open: boolean;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
  onFocus?: FocusEventHandler<HTMLDivElement>;
  onBlur?: FocusEventHandler<HTMLDivElement>;
};

export const NavHoverCard: React.FC<NavHoverCardProps> = ({
  label,
  icon,
  title,
  description,
  bullets = [],
  triggerRef,
  open,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const updateCardPosition = useCallback(() => {
    if (!open || !triggerRef.current || !cardRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const cardRect = cardRef.current.getBoundingClientRect();

    const rawTop = triggerRect.top + triggerRect.height / 2 - cardRect.height / 2;
    const clampedTop = Math.max(
      24,
      Math.min(window.innerHeight - cardRect.height - 24, rawTop)
    );

    const gap = 16;
    const rawLeft = triggerRect.left - cardRect.width - gap;
    const clampedLeft = Math.max(24, rawLeft);

    cardRef.current.style.top = `${clampedTop}px`;
    cardRef.current.style.left = `${clampedLeft}px`;
  }, [open, triggerRef]);

  useEffect(() => {
    if (!open) return;

    updateCardPosition();

    const handleScroll = () => updateCardPosition();
    const handleResize = () => updateCardPosition();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [open, updateCardPosition]);

  return (
    <div
      ref={cardRef}
      data-nav-hover-card="true"
      role="tooltip"
      aria-hidden={!open}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      className={clsx(
        "nav-hover-card",
        "fixed z-40 max-w-lg rounded-3xl bg-[#FFF6EA] shadow-[0_22px_60px_rgba(15,23,42,0.22)]",
        "px-8 py-7 text-slate-900",
        "transition-all duration-250 ease-out origin-left",
        open
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-1 scale-[0.985] pointer-events-none"
      )}
    >
      <div className="flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-b from-[#FFDFA8] to-[#F3B04B] text-base text-slate-900 shadow-inner">
          {icon ?? <span className="text-lg leading-none">•</span>}
        </span>
        <span>{label}</span>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        <h3 className="text-2xl font-semibold leading-snug text-slate-900">
          {title}
        </h3>
        {description ? (
          <p className="text-sm leading-relaxed text-slate-600">{description}</p>
        ) : null}
        {bullets.length > 0 ? (
          <ul className="mt-1 flex list-none flex-col gap-2 text-sm text-slate-900">
            {bullets.map((item, index) => (
              <li key={`${item}-${index}`} className="flex items-start gap-3">
                <span className="mt-[6px] inline-block h-2 w-2 rounded-full bg-[#2563EB] shadow-[0_0_0_2px_rgba(37,99,235,0.15)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="nav-hover-card-arrow absolute right-[-16px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 rotate-45 rounded-[4px] bg-[#FFF6EA] shadow-[0_12px_30px_rgba(15,23,42,0.18)]" />
    </div>
  );
};

export default NavHoverCard;
