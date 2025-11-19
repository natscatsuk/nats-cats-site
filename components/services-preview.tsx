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
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="space-y-8 sm:space-y-10 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
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
            className="bg-primary hover:bg-primary/90 text-white rounded-lg shadow-md px-8 py-6 text-base font-semibold"
          >
            <Link href="/services">View Services & Pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
