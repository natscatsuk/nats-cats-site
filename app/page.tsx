import Hero from "@/components/hero";
import Features from "@/components/features";
import ServicesPreview from "@/components/services-preview";
import AboutStrip from "@/components/about-strip";
import CtaFooter from "@/components/cta-footer";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="mt-20 mb-20">
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
      </section>
      <section className="vet-nurse-benefits">
        <div className="vet-nurse-inner">
          <div className="vet-nurse-header">
            <h2 className="vet-nurse-title">Why choose a vet-nurse cat sitter?</h2>
            <p className="vet-nurse-subtitle">
              Nat combines the reassurance of professional veterinary training with the calm, one-to-one care of a dedicated cat sitter – ideal for nervous, senior or medical-needs cats.
                </p>
              </div>

          <div className="vet-nurse-grid">
            <article className="vet-nurse-card">
              <h3 className="vet-nurse-card-title">Medical knowledge &amp; monitoring</h3>
              <p className="vet-nurse-card-text">
                Spotting early signs of illness, monitoring appetite, litter tray use and behaviour – and knowing when something isn’t quite right.
              </p>
            </article>

            <article className="vet-nurse-card">
              <h3 className="vet-nurse-card-title">Confident with medication</h3>
              <p className="vet-nurse-card-text">
                Experience giving tablets, liquids and topical treatments, plus insulin injections and post-op care, always following your vet’s instructions.
              </p>
            </article>

            <article className="vet-nurse-card">
              <h3 className="vet-nurse-card-title">Gentle handling of anxious cats</h3>
              <p className="vet-nurse-card-text">
                Low-stress handling techniques to keep nervous, shy and rescue cats calm – no unnecessary travel or noisy catteries.
              </p>
            </article>

            <article className="vet-nurse-card">
              <h3 className="vet-nurse-card-title">Senior &amp; special-needs support</h3>
              <p className="vet-nurse-card-text">
                Extra care for older cats, cats with chronic conditions, or those recovering from surgery, with tailored visit plans.
              </p>
            </article>
          </div>
        </div>
      </section>
      <Features />
      <section className="howitworks">
        <div className="howitworks-inner">
          <div className="howitworks-header">
            <h2 className="howitworks-title">How Nat&apos;s cat sitting works</h2>
            <p className="howitworks-subtitle">
              Simple, stress-free vet-nurse-led care for your cat while you&apos;re away – in just three steps.
            </p>
          </div>

          <div className="howitworks-grid">
            <article className="howitworks-card">
              <div className="howitworks-step">1</div>
              <h3 className="howitworks-card-title">Check availability &amp; share details</h3>
              <p className="howitworks-card-text">
                Tell Nat your dates, your cat&apos;s routine, medical needs and any special quirks. You&apos;ll receive confirmation and pricing before anything is booked.
              </p>
            </article>

            <article className="howitworks-card">
              <div className="howitworks-step">2</div>
              <h3 className="howitworks-card-title">Meet &amp; greet home visit</h3>
              <p className="howitworks-card-text">
                Nat visits your home to meet you and your cat, run through feeding, litter and medication, and answer any questions so you feel completely comfortable.
              </p>
            </article>

            <article className="howitworks-card">
              <div className="howitworks-step">3</div>
              <h3 className="howitworks-card-title">Relax while Nat takes care of the rest</h3>
              <p className="howitworks-card-text">
                While you&apos;re away, Nat visits as agreed, sends photo updates and keeps an expert eye on your cat&apos;s wellbeing – so you come home to a happy, relaxed cat.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="pricing-strip">
        <div className="pricing-strip-inner">
          <p className="pricing-strip-text">
            Home visits from <strong>£XX per visit</strong> &nbsp;·&nbsp; Daily photo updates included &nbsp;·&nbsp; Medication support available on request
          </p>
        </div>
      </section>
      <ServicesPreview />
      <section className="testimonials">
        <div className="testimonials-inner">
          <h2 className="testimonials-title">What local cat owners say</h2>
          <p className="testimonials-subtitle">
            Real feedback from Harpenden families who trust Nat to care for their cats at home.
          </p>
          <div className="testimonials-grid">
            <article className="testimonial-card">
              <p className="testimonial-quote">
                “Nat sent us daily updates and photos – our anxious rescue cat actually looked relaxed.”
              </p>
              <p className="testimonial-name">Emma &amp; Milo</p>
            </article>
            <article className="testimonial-card">
              <p className="testimonial-quote">
                “As a vet nurse, Nat spotted a skin issue early and advised us to see our vet – so grateful.”
              </p>
              <p className="testimonial-name">James &amp; Luna</p>
            </article>
            <article className="testimonial-card">
              <p className="testimonial-quote">
                “So much better than a cattery. We came home to a happy, chilled cat and a tidy house.”
              </p>
              <p className="testimonial-name">Sarah &amp; Tigger</p>
            </article>
          </div>
        </div>
      </section>
      <AboutStrip />
      <CtaFooter />
    </>
  );
}
