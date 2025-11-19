import Hero from "@/components/hero";
import TrustBar from "@/components/trust-bar";
import Features from "@/components/features";
import ServicesPreview from "@/components/services-preview";
import AboutStrip from "@/components/about-strip";
import CtaFooter from "@/components/cta-footer";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Features />
      <ServicesPreview />
      <AboutStrip />
      <CtaFooter />
    </>
  );
}
