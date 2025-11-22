import Hero from "@/components/hero";
import Features from "@/components/features";
import ServicesPreview from "@/components/services-preview";
import AboutStrip from "@/components/about-strip";
import CtaFooter from "@/components/cta-footer";

type FeatureCardProps = {
  icon: string;
  iconColor: string;
  title: string;
  description: string;
};

function FeatureCard({ icon, iconColor, title, description }: FeatureCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white/90 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.12)] ring-1 ring-white/40 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.22)]">
      {/* subtle inner highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 via-transparent to-white/10 opacity-70" />

      <div className="relative flex items-start gap-4">
        {/* 3D icon bubble */}
        <div className="relative">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${iconColor} shadow-[0_15px_35px_rgba(15,23,42,0.35)]`}
          >
            <span className="text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)]">
              {icon}
            </span>
          </div>

          {/* small highlight to make it feel 3D */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/55 to-transparent opacity-80 mix-blend-screen" />
        </div>

        <div className="space-y-1.5">
          <h3 className="text-[15px] font-semibold text-slate-900">
            {title}
          </h3>
          <p className="text-xs leading-relaxed text-slate-600 md:text-[13px]">
            {description}
          </p>
        </div>
      </div>

      {/* glow on hover */}
      <div className="pointer-events-none absolute -bottom-10 left-6 right-6 h-16 rounded-full bg-gradient-to-r from-[#fbbf77]/40 via-[#4b7dff]/25 to-[#f59e0b]/40 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
    </article>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <section className="page-section section-credentials">
        <div className="page-shell">
          <div className="mx-auto max-w-6xl rounded-[32px] bg-gradient-to-br from-[#f8f3ea] via-[#fdfbf8] to-[#f1e4d3] p-[1.5px] shadow-[0_30px_80px_rgba(15,23,42,0.20),0_0_0_1.5px_rgba(217,194,142,0.5)]" style={{ filter: 'drop-shadow(0 0 1px rgba(217, 194, 142, 0.3))' }}>
            <div className="relative flex flex-col gap-10 rounded-[30px] bg-white/92 px-8 py-8 md:px-12 md:py-10 lg:flex-row lg:items-center shadow-[inset_0_2px_8px_rgba(0,0,0,0.04)]">
            {/* Left: copy */}
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-semibold leading-tight text-slate-900">
                Why cat owners trust Nat&apos;s Cats
              </h2>

              <p className="max-w-xl text-[15px] leading-relaxed text-slate-600">
                Every visit is led by a qualified veterinary nurse – not a hobby sitter.
                Clinical-grade care delivered with warmth and expertise in the comfort of your cat&apos;s own home.
              </p>

              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50/90 px-4 py-1.5 text-[14px] font-medium text-amber-800 shadow-[0_10px_25px_rgba(251,191,36,0.45)] border border-amber-100">
                <span className="text-[13px] sm:text-[14px] font-semibold">
                  5★
                </span>
                <span className="text-[16px] leading-none">★★★★★</span>
                <span className="text-[13px] sm:text-[14px]">
                  feedback from local cat owners
                </span>
              </div>
            </div>

            {/* Right: premium pill list */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Pill */}
                <div className="flex items-center gap-3 rounded-full bg-white/95 px-4 py-2.5 shadow-[0_8px_20px_rgba(15,23,42,0.08)] border border-slate-100/60">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#5b8fd8] via-[#4a7bc8] to-[#6ba3e0] text-white shadow-[0_6px_16px_rgba(37,99,235,0.35)] text-[18px]">
                    🛡️
                  </span>
                  <span className="text-[14px] font-medium text-slate-800">
                    RCVS-Registered Veterinary Nurse
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-full bg-white/95 px-4 py-2.5 shadow-[0_8px_20px_rgba(15,23,42,0.08)] border border-slate-100/60">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#d9773f] via-[#c8652f] to-[#e68a4f] text-white shadow-[0_6px_16px_rgba(249,115,22,0.35)] text-[18px]">
                    🎓
                  </span>
                  <span className="text-[14px] font-medium text-slate-800">
                    Qualified Veterinary Nurse
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-full bg-white/95 px-4 py-2.5 shadow-[0_8px_20px_rgba(15,23,42,0.08)] border border-slate-100/60">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#4fb87a] via-[#3ea569] to-[#5fc98b] text-white shadow-[0_6px_16px_rgba(34,197,94,0.35)] text-[18px]">
                    ✅
                  </span>
                  <span className="text-[14px] font-medium text-slate-800">
                    Fully Insured
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-full bg-white/95 px-4 py-2.5 shadow-[0_8px_20px_rgba(15,23,42,0.08)] border border-slate-100/60">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#6ba3d0] via-[#7b8fd8] to-[#9b7bc8] text-white shadow-[0_6px_16px_rgba(99,102,241,0.35)] text-[18px]">
                    🔎
                  </span>
                  <span className="text-[14px] font-medium text-slate-800">
                    DBS Checked
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-full bg-white/95 px-4 py-2.5 shadow-[0_8px_20px_rgba(15,23,42,0.08)] border border-slate-100/60">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#d9778f] via-[#c8657f] to-[#e68a9f] text-white shadow-[0_6px_16px_rgba(236,72,153,0.35)] text-[18px]">
                    💊
                  </span>
                  <span className="text-[14px] font-medium text-slate-800">
                    Medication Trained
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-full bg-white/95 px-4 py-2.5 shadow-[0_8px_20px_rgba(15,23,42,0.08)] border border-slate-100/60">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#d9773f] via-[#e6a84f] to-[#4fb87a] text-white shadow-[0_6px_16px_rgba(248,181,0,0.35)] text-[18px]">
                    📍
                  </span>
                  <span className="text-[14px] font-medium text-slate-800">
                    Local Harpenden Specialist
                  </span>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="why-nat"
        className="relative mx-auto mt-14 md:mt-20 max-w-5xl rounded-3xl bg-[#fdf8f0] px-4 py-10 shadow-[0_30px_80px_rgba(15,23,42,0.18)] ring-1 ring-[#f1d8a8] md:px-10"
      >
        {/* soft glow behind the card */}
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2.25rem] bg-gradient-to-br from-white/40 via-[#ffe9c8]/40 to-[#f5d6a8]/50 blur-2xl opacity-70" />

        {/* badge + heading */}
        <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-slate-500 shadow-[0_10px_30px_rgba(15,23,42,0.12)] uppercase">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#4d8dff] via-[#3f6fff] to-[#2446d6] text-[13px] shadow-[0_10px_25px_rgba(37,99,235,0.55)]">
            🐾
          </span>
          Clinical-level home care · Why cat owners choose Nat
        </div>

        <h2 className="text-2xl font-semibold leading-snug text-slate-900 md:text-3xl">
          Why cat owners choose Nat for clinical-level home care
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-[15px]">
          You&apos;re not booking a casual cat sitter. Every visit is led by an experienced
          veterinary nurse who understands feline health, behaviour and subtle changes
          that standard sitters can miss.
        </p>

        {/* feature grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <FeatureCard
            icon="🩺"
            iconColor="from-[#ffb85c] via-[#ff9c3b] to-[#f7792a]"
            title="Clinical knowledge on every visit"
            description="Nat monitors appetite, litter tray habits, breathing, mobility and demeanour – spotting subtle red flags long before they become emergencies."
          />
          <FeatureCard
            icon="🐾"
            iconColor="from-[#4d8dff] via-[#3b82f6] to-[#1d4ed8]"
            title="Gentle handling for sensitive cats"
            description="Nervous, senior, post-op or medically fragile cats are handled using low-stress vet-level handling techniques to keep visits calm and safe."
          />
          <FeatureCard
            icon="🏠"
            iconColor="from-[#facc6b] via-[#fbbf24] to-[#f59e0b]"
            title="Confident with medication &amp; injections"
            description="From tablets and eye drops to insulin injections, medication is handled calmly, correctly and safely – without stressful wrestling or guesswork."
          />
          <FeatureCard
            icon="📸"
            iconColor="from-[#a855f7] via-[#8b5cf6] to-[#6366f1]"
            title="Reassurance for worried humans"
            description="Detailed updates, photos and honest feedback mean you know exactly how your cat is doing – with the confidence of a vet nurse keeping watch."
          />
        </div>
      </section>
      <Features />
      <section
        className="page-section section-process relative"
        aria-labelledby="how-it-works-heading"
      >
        <div className="page-shell">
          <div className="mx-auto max-w-6xl rounded-[32px] bg-gradient-to-br from-[#f8f3ea] via-[#fdfbf8] to-[#f1e4d3] p-[1.5px] shadow-[0_30px_80px_rgba(15,23,42,0.20),0_0_0_1.5px_rgba(217,194,142,0.5)]" style={{ filter: 'drop-shadow(0 0 1px rgba(217, 194, 142, 0.3))' }}>
            <div className="relative rounded-[30px] bg-white/92 px-8 py-10 md:px-12 md:py-12 lg:px-16 lg:py-16 shadow-[inset_0_2px_8px_rgba(0,0,0,0.04)]">
              <div className="max-w-3xl mb-12">
                <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase mb-3">
                  Step-by-step cat care
                </p>
                <h2
                  id="how-it-works-heading"
                  className="text-3xl md:text-[2.3rem] leading-tight font-display text-slate-900 mb-4"
                >
                  How Nat&apos;s cat sitting works
                </h2>
              </div>

              <div className="grid gap-6 md:gap-8 md:grid-cols-3">
                {/* Step 1 */}
                <article className="group relative rounded-2xl md:rounded-[20px] lg:rounded-[24px] bg-white/98 border border-[#f1e3c6] shadow-[0_16px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/60 px-6 py-7 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4c8eff] to-[#4c8eff] text-white shadow-[0_8px_20px_rgba(76,142,255,0.35)]">
                      <span className="text-base font-semibold">1</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[15px] font-semibold text-slate-900 mb-2 leading-tight">
                        Tell Nat about your cat
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600">
                        Share a few details about your cat&apos;s routine, health and quirks. Nat will recommend the visit length and schedule that keeps everything feeling normal at home.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Step 2 */}
                <article className="group relative rounded-2xl md:rounded-[20px] lg:rounded-[24px] bg-white/98 border border-[#f1e3c6] shadow-[0_16px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/60 px-6 py-7 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4c8eff] to-[#4c8eff] text-white shadow-[0_8px_20px_rgba(76,142,255,0.35)]">
                      <span className="text-base font-semibold">2</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[15px] font-semibold text-slate-900 mb-2 leading-tight">
                        Nat visits while you&apos;re away
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600">
                        Nat follows your cat&apos;s usual routine – feeding, medication, playtime and litter – with clinical-level attention to detail so you never have to worry.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Step 3 */}
                <article className="group relative rounded-2xl md:rounded-[20px] lg:rounded-[24px] bg-white/98 border border-[#f1e3c6] shadow-[0_16px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/60 px-6 py-7 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4c8eff] to-[#4c8eff] text-white shadow-[0_8px_20px_rgba(76,142,255,0.35)]">
                      <span className="text-base font-semibold">3</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[15px] font-semibold text-slate-900 mb-2 leading-tight">
                        Daily updates straight to your phone
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600">
                        After each visit you&apos;ll get a short update with photos or videos, so you can see how relaxed your cat is and enjoy your time away.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section section-pricing pricing-strip">
        <div className="page-shell">
          <div className="pricing-strip-inner">
            <p className="pricing-strip-text">
              Home visits from <strong>£XX per visit</strong> &nbsp;·&nbsp; Daily photo updates included &nbsp;·&nbsp; Medication support available on request
            </p>
          </div>
        </div>
      </section>
      <ServicesPreview />
      <section className="page-section section-testimonials testimonials">
        <div className="page-shell">
          <div className="max-w-xl mb-12">
            <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase mb-3">
              Reviews from cat owners
            </p>
            <h2 className="text-3xl md:text-[2.3rem] leading-tight font-display text-slate-900 mb-4">
              What local cat owners say
            </h2>
            <p className="text-[0.96rem] text-slate-600 leading-relaxed">
              Real feedback from Harpenden cat families who trust Nat&apos;s calm, clinical-grade home care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {/* Card 1 */}
            <article className="group relative rounded-2xl md:rounded-[20px] lg:rounded-[24px] bg-gradient-to-br from-[#fffaf2] via-[#fffdf8] to-[#f6efe4] border border-[#f1e3c6] shadow-[0_16px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/60 px-6 py-7 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)] overflow-hidden">
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 20c-2-2-4-2-6 0s-2 4 0 6 4 2 6 0 2-4 0-6z\' fill=\'%23000000\'/%3E%3C/svg%3E")' }} />
              <div className="relative">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4c8eff] to-[#E6D0A3] text-white shadow-[0_4px_12px_rgba(76,142,255,0.25)]">
                    <span className="text-lg">🐱</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900">Sarah P</p>
                    <p className="text-xs text-slate-500">Maple</p>
                  </div>
                </div>
                <p className="text-[15px] leading-relaxed text-slate-700 mb-4">
                  &quot;Nat was calm, gentle and incredibly professional. Our shy rescue cat actually came out for her — unheard of!&quot;
                </p>
              </div>
            </article>

            {/* Card 2 */}
            <article className="group relative rounded-2xl md:rounded-[20px] lg:rounded-[24px] bg-gradient-to-br from-[#fffaf2] via-[#fffdf8] to-[#f6efe4] border border-[#f1e3c6] shadow-[0_16px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/60 px-6 py-7 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)] overflow-hidden lg:mt-8">
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 20c-2-2-4-2-6 0s-2 4 0 6 4 2 6 0 2-4 0-6z\' fill=\'%23000000\'/%3E%3C/svg%3E")' }} />
              <div className="relative">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4c8eff] to-[#E6D0A3] text-white shadow-[0_4px_12px_rgba(76,142,255,0.25)]">
                    <span className="text-lg">🐱</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900">Aimee &amp; Luke</p>
                    <p className="text-xs text-slate-500">Tilly &amp; Jasper</p>
                  </div>
                </div>
                <p className="text-[15px] leading-relaxed text-slate-700 mb-4">
                  &quot;We came home to such relaxed, happy cats. Nat&apos;s medical knowledge gave us real peace of mind.&quot;
                </p>
              </div>
            </article>

            {/* Card 3 - Featured */}
            <article className="group relative rounded-2xl md:rounded-[20px] lg:rounded-[24px] bg-gradient-to-br from-[#0E1727] via-[#111827] to-[#0A0F1A] border border-[#E6D0A3]/30 shadow-[0_22px_60px_rgba(15,23,42,0.25),0_0_0_1px_rgba(230,208,163,0.2)] ring-1 ring-slate-700/80 px-6 py-7 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_28px_70px_rgba(15,23,42,0.35),0_0_0_2px_rgba(230,208,163,0.3)] overflow-hidden text-slate-100">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 20c-2-2-4-2-6 0s-2 4 0 6 4 2 6 0 2-4 0-6z\' fill=\'%23ffffff\'/%3E%3C/svg%3E")' }} />
              <div className="relative">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4c8eff] to-[#E6D0A3] text-white shadow-[0_4px_12px_rgba(76,142,255,0.35)]">
                    <span className="text-lg">🐱</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium mb-1">Ben &amp; Tara</p>
                    <p className="text-xs text-slate-300">Miso</p>
                  </div>
                </div>
                <div className="mb-3 text-[#E6D0A3]">
                  <span className="text-base">⭐️⭐️⭐️⭐️⭐️</span>
                </div>
                <p className="text-[15px] leading-relaxed text-slate-200 mb-4">
                  &quot;Without a doubt the best cat sitter we&apos;ve ever used. The updates, photos, and clinical care were outstanding.&quot;
                </p>
              </div>
            </article>

            {/* Card 4 */}
            <article className="group relative rounded-2xl md:rounded-[20px] lg:rounded-[24px] bg-gradient-to-br from-[#fffaf2] via-[#fffdf8] to-[#f6efe4] border border-[#f1e3c6] shadow-[0_16px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/60 px-6 py-7 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)] overflow-hidden lg:mt-8">
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 20c-2-2-4-2-6 0s-2 4 0 6 4 2 6 0 2-4 0-6z\' fill=\'%23000000\'/%3E%3C/svg%3E")' }} />
              <div className="relative">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4c8eff] to-[#E6D0A3] text-white shadow-[0_4px_12px_rgba(76,142,255,0.25)]">
                    <span className="text-lg">🐱</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900">Harriet</p>
                    <p className="text-xs text-slate-500">Pebbles</p>
                  </div>
                </div>
                <p className="text-[15px] leading-relaxed text-slate-700 mb-4">
                  &quot;Our senior cat needs daily medication — Nat handled everything perfectly. So reassuring.&quot;
                </p>
              </div>
            </article>

            {/* Card 5 */}
            <article className="group relative rounded-2xl md:rounded-[20px] lg:rounded-[24px] bg-gradient-to-br from-[#fffaf2] via-[#fffdf8] to-[#f6efe4] border border-[#f1e3c6] shadow-[0_16px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/60 px-6 py-7 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)] overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 20c-2-2-4-2-6 0s-2 4 0 6 4 2 6 0 2-4 0-6z\' fill=\'%23000000\'/%3E%3C/svg%3E")' }} />
              <div className="relative">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4c8eff] to-[#E6D0A3] text-white shadow-[0_4px_12px_rgba(76,142,255,0.25)]">
                    <span className="text-lg">🐱</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900">Jess</p>
                    <p className="text-xs text-slate-500">Pumpkin</p>
                  </div>
                </div>
                <p className="text-[15px] leading-relaxed text-slate-700 mb-4">
                  &quot;Nat treated our home and our cat with so much respect. You can tell she genuinely adores animals.&quot;
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section
        id="faqs"
        className="page-section section-faq relative"
        aria-labelledby="faqs-heading"
      >
        <div className="page-shell">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-2xl mb-10">
            <h2
              id="faqs-heading"
              className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase mb-3"
            >
              FAQs
            </h2>
            <p className="text-3xl md:text-[2.1rem] leading-tight font-display text-slate-900 mb-3">
              Common questions from cat owners
            </p>
            <p className="text-[0.96rem] text-slate-600 leading-relaxed">
              If you can&apos;t see your question below, just get in touch – Nat is always
              happy to talk through your cat&apos;s needs.
            </p>
          </div>

          <div className="space-y-3">
            {/* FAQ item 1 */}
            <details className="group rounded-2xl bg-white/95 border border-slate-100/80 px-5 py-4 shadow-sm open:shadow-md transition-all">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left list-none">
                <span className="text-[0.98rem] font-medium text-slate-900">
                  What areas do you cover?
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-700 text-xs font-semibold group-open:rotate-90 transition-transform">
                  +
                </span>
              </summary>
              <div className="pt-3 text-[0.94rem] leading-relaxed text-slate-600">
                Nat is based in Harpenden and typically covers Harpenden and
                surrounding areas within approximately 3 miles. If you&apos;re just
                outside this, get in touch and Nat will let you know if she can help.
              </div>
            </details>

            {/* FAQ item 2 */}
            <details className="group rounded-2xl bg-white/95 border border-slate-100/80 px-5 py-4 shadow-sm open:shadow-md transition-all">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left list-none">
                <span className="text-[0.98rem] font-medium text-slate-900">
                  Will the same person visit my cat each time?
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-700 text-xs font-semibold group-open:rotate-90 transition-transform">
                  +
                </span>
              </summary>
              <div className="pt-3 text-[0.94rem] leading-relaxed text-slate-600">
                Yes – all visits are carried out personally by Nat, a qualified
                veterinary nurse. Your cat will always see the same familiar face.
              </div>
            </details>

            {/* FAQ item 3 */}
            <details className="group rounded-2xl bg-white/95 border border-slate-100/80 px-5 py-4 shadow-sm open:shadow-md transition-all">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left list-none">
                <span className="text-[0.98rem] font-medium text-slate-900">
                  How long is each visit?
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-700 text-xs font-semibold group-open:rotate-90 transition-transform">
                  +
                </span>
              </summary>
              <div className="pt-3 text-[0.94rem] leading-relaxed text-slate-600">
                Each visit is up to 30 minutes. This allows time for feeding, fresh water, litter care, play, wellbeing checks and your photo/video update.
              </div>
            </details>

            {/* FAQ item 4 */}
            <details className="group rounded-2xl bg-white/95 border border-slate-100/80 px-5 py-4 shadow-sm open:shadow-md transition-all">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left list-none">
                <span className="text-[0.98rem] font-medium text-slate-900">
                  Can you give my cat medication?
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-700 text-xs font-semibold group-open:rotate-90 transition-transform">
                  +
                </span>
              </summary>
              <div className="pt-3 text-[0.94rem] leading-relaxed text-slate-600">
                Yes. As a veterinary nurse, Nat can safely administer oral, topical or injected medication. A Medication Consent Form is required and all details must be provided clearly in advance.
              </div>
            </details>

            {/* FAQ item 5 */}
            <details className="group rounded-2xl bg-white/95 border border-slate-100/80 px-5 py-4 shadow-sm open:shadow-md transition-all">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left list-none">
                <span className="text-[0.98rem] font-medium text-slate-900">
                  Is there a minimum number of visits per day?
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-700 text-xs font-semibold group-open:rotate-90 transition-transform">
                  +
                </span>
              </summary>
              <div className="pt-3 text-[0.94rem] leading-relaxed text-slate-600">
                Yes. For welfare reasons, Nat requires a minimum of two visits per day (AM + PM) for all bookings, unless agreed in writing that a single visit is appropriate for your cat.
              </div>
            </details>

            {/* FAQ item 6 */}
            <details className="group rounded-2xl bg-white/95 border border-slate-100/80 px-5 py-4 shadow-sm open:shadow-md transition-all">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left list-none">
                <span className="text-[0.98rem] font-medium text-slate-900">
                  Are you insured and DBS checked?
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-700 text-xs font-semibold group-open:rotate-90 transition-transform">
                  +
                </span>
              </summary>
              <div className="pt-3 text-[0.94rem] leading-relaxed text-slate-600">
                Yes. Nat is fully insured and DBS checked, and is also a qualified veterinary nurse with extensive feline experience.
              </div>
            </details>
          </div>
          </div>
        </div>
      </section>
      <AboutStrip />
      <CtaFooter />
    </>
  );
}
