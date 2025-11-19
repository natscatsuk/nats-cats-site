import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Standard Home Visit",
    description: "20–30 minute visit including feeding, litter care, enrichment and a photo update.",
  },
  {
    title: "Holiday & Weekend Visits",
    description: "Reliable care while you&apos;re away, with premium weekend and peak options.",
  },
  {
    title: "Medication Support",
    description: "Safe administration of oral, topical or injected medication with full clinical understanding.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white border-y border-divider">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="space-y-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-gray-200 hover:border-[#0052CC]/50 hover:shadow-premium transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-royal-gradient hover:opacity-90 text-white rounded-lg shadow-royal-glow px-8 py-6 text-base font-semibold transition-all duration-300"
          >
            <Link href="/services">View Services & Pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
