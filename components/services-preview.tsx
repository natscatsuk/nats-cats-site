export default function ServicesPreview() {
  return (
    <section
      id="services"
      className="page-section section-visit-options relative"
      aria-labelledby="visit-types-heading"
    >
      <div className="page-shell">
        <div className="max-w-xl mb-12">
          <p
            className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase mb-3"
          >
            Visit options
          </p>
          <h2
            id="visit-types-heading"
            className="text-3xl md:text-[2.3rem] leading-tight font-display text-slate-900 mb-4"
          >
            Choose the visit that fits your cat
          </h2>
          <p className="text-[0.96rem] text-slate-600 leading-relaxed">
            Every cat is different. Pick the visit length that matches their routine, energy level and medical needs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-7">
          {/* Standard visit */}
          <article className="group relative rounded-2xl md:rounded-[20px] lg:rounded-[24px] bg-white/98 border border-[#f1e3c6] shadow-[0_16px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/60 px-6 py-7 flex flex-col transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50/90 px-3 py-1 mb-4 w-fit">
              <span className="text-[0.75rem] font-medium tracking-wide text-amber-800 uppercase">
                Most popular
              </span>
            </div>
            <div className="flex items-start gap-4 mb-3">
              <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4c8eff] to-[#4c8eff] text-white shadow-[0_8px_20px_rgba(76,142,255,0.35)]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-semibold text-slate-900 mb-1 leading-tight">
                  Standard Home Visits
              </h3>
                <p className="text-xs text-slate-500 italic mb-2">
                  Perfect for relaxed, easygoing cats
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 mb-4">
              A calm daily check-in for cats who like their routine just so. Ideal for feeding, litter refresh, a little playtime and welfare checks while you&apos;re away.
            </p>
            <div className="mt-auto space-y-2">
              <p className="text-xs text-slate-500">
                Typically 1 visit per day • Flexible scheduling
              </p>
              <p className="text-xs text-slate-400 text-right">
                From £XX per visit
              </p>
            </div>
          </article>

          {/* Weekend */}
          <article className="group relative rounded-2xl md:rounded-[20px] lg:rounded-[24px] bg-white/98 border border-[#f1e3c6] shadow-[0_16px_40px_rgba(15,23,42,0.06)] ring-1 ring-slate-100/60 px-6 py-7 flex flex-col transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50/90 px-3 py-1 mb-4 w-fit">
              <span className="text-[0.75rem] font-medium tracking-wide text-sky-800 uppercase">
                Weekend &amp; bank holidays
              </span>
            </div>
            <div className="flex items-start gap-4 mb-3">
              <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4c8eff] to-[#4c8eff] text-white shadow-[0_8px_20px_rgba(76,142,255,0.35)]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-semibold text-slate-900 mb-1 leading-tight">
                  Weekend &amp; Bank Holiday Visits
                </h3>
                <p className="text-xs text-slate-500 italic mb-2">
                  Extra reassurance when you&apos;re away short-term
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 mb-4">
              Dedicated cover for busy weekends and bank holiday trips. Keeps feeding, litter and medication on track while you enjoy your break.
            </p>
            <div className="mt-auto space-y-2">
              <p className="text-xs text-slate-500">
                Ideal for 2–4 day breaks • Subject to availability
              </p>
              <p className="text-xs text-slate-400 text-right">
                From £XX per visit
              </p>
            </div>
          </article>

          {/* Extended / Featured */}
          <article className="group relative rounded-2xl md:rounded-[20px] lg:rounded-[24px] bg-gradient-to-br from-[#0E1727] via-[#111827] to-[#0A0F1A] border border-[#4c8eff]/30 shadow-[0_22px_60px_rgba(15,23,42,0.25),0_0_0_1px_rgba(76,142,255,0.15)] ring-1 ring-slate-700/80 px-6 py-7 flex flex-col text-slate-100 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_28px_70px_rgba(15,23,42,0.35),0_0_0_2px_rgba(76,142,255,0.2)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-3 py-1 mb-4 w-fit">
              <span className="text-[0.75rem] font-medium tracking-wide text-sky-100 uppercase">
                Premium care
              </span>
            </div>
            <div className="flex items-start gap-4 mb-3">
              <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4c8eff] to-[#4c8eff] text-white shadow-[0_8px_20px_rgba(76,142,255,0.5)]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-semibold mb-1 leading-tight">
                  Extended Visits
                </h3>
                <p className="text-xs text-slate-300 italic mb-2">
                  For kittens, seniors or medical needs
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-200/90 mb-4">
              Longer, more detailed visits for cats who need extra time and attention – from playful kittens to seniors or those on medication and special diets.
            </p>
            <div className="mt-auto space-y-2">
              <p className="text-xs text-slate-300/80">
                Extra time for medication, cleaning &amp; play • Limited slots
              </p>
              <p className="text-xs text-slate-400 text-right">
                From £XX per visit
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
