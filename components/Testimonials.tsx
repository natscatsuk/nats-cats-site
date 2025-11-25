export default function Testimonials() {
  return (
    <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] items-stretch">
      {/* Primary testimonial card - Large dark navy card - stacks first on mobile */}
      <div className="relative rounded-3xl bg-[#071226] p-6 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(7,18,38,0.4)] text-slate-50 overflow-hidden">
        {/* Content */}
        <div className="relative z-10">
          {/* 5.0 rating row */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-amber-400 text-base">★</span>
              ))}
            </div>
            <span className="text-sm font-semibold text-slate-300">5.0 rating</span>
            <span className="text-xs text-slate-400">from local cat owners</span>
          </div>

          {/* Main quote - larger text with subtle opening quote */}
          <p className="text-xl lg:text-2xl leading-relaxed text-slate-50 mb-8 font-light">
            <span className="text-[#f5d9a5]/25 text-3xl lg:text-4xl font-serif leading-none mr-1">&ldquo;</span>
            Without a doubt the best cat carer we&apos;ve ever used. The clinical reassurance, calm handling of anxious cats, and reliable communication were outstanding.
          </p>

          {/* Name and label */}
          <div className="pt-6 border-t border-white/10">
            <p className="text-base font-semibold text-white mb-1">
              Harpenden cat owners
            </p>
            <p className="text-sm text-slate-300">Long-term clients</p>
          </div>
        </div>
      </div>

      {/* Secondary testimonials - Two stacked light cards */}
      <div className="grid gap-6">
        {/* Card 1: Senior cat on medication */}
        <div className="relative rounded-3xl border border-[#f1e2cf] bg-gradient-to-b from-white/85 to-[#fff6ea] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.06)] transition-all duration-200 hover:bg-gradient-to-b hover:from-white/95 hover:to-[#fff7ec] hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
          <p className="text-sm lg:text-[0.95rem] leading-relaxed text-slate-700 mb-4">
            Our senior cat needed daily medication and Nat handled it so calmly. The detailed updates gave us complete peace of mind while we were away.
          </p>
          <div>
            <p className="text-xs font-semibold text-slate-900 mb-1">
              Harpenden owner
            </p>
            <p className="text-xs text-slate-600">Senior cat on medication</p>
          </div>
        </div>

        {/* Card 2: Family with two cats */}
        <div className="relative rounded-3xl border border-[#f1e2cf] bg-gradient-to-b from-white/85 to-[#fff6ea] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.06)] transition-all duration-200 hover:bg-gradient-to-b hover:from-white/95 hover:to-[#fff7ec] hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
          <p className="text-sm lg:text-[0.95rem] leading-relaxed text-slate-700 mb-4">
            Nat&apos;s communication was excellent during our school-holiday break. Both cats were relaxed and well-cared for – we wouldn&apos;t use anyone else.
          </p>
          <div>
            <p className="text-xs font-semibold text-slate-900 mb-1">
              Family with two cats
            </p>
            <p className="text-xs text-slate-600">School-holiday visits</p>
          </div>
        </div>
      </div>
    </div>
  );
}

