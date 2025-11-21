import Hero from "@/components/hero";
import Features from "@/components/features";
import ServicesPreview from "@/components/services-preview";
import AboutStrip from "@/components/about-strip";
import CtaFooter from "@/components/cta-footer";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="credentials">
        <div className="trust-card">
          <div className="trust-card-header">
            <div className="trust-card-icon">
              <span>🩺</span>
            </div>
            <div>
              <p className="trust-card-eyebrow">CLINICAL-LEVEL CARE AT HOME</p>
              <h3 className="trust-card-title">Why cat owners trust Nat&apos;s Cats</h3>
              <p className="trust-card-subtitle">
                Every visit is led by a qualified veterinary nurse – not a hobby sitter.
              </p>
            </div>
          </div>

          <div className="trust-pill-row">
            {[
              { label: "RCVS-Registered Veterinary Nurse", icon: "🩺" },
              { label: "Qualified Veterinary Nurse", icon: "🩺" },
              { label: "Fully Insured", icon: "🛡️" },
              { label: "DBS Checked", icon: "✅" },
              { label: "Medication Trained", icon: "💊" },
              { label: "Pet First Aid Trained", icon: "🐾" },
              { label: "Local Harpenden Specialist", icon: "📍" },
            ].map((item) => (
              <button key={item.label} className="trust-pill">
                <span className="trust-pill-icon">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
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
