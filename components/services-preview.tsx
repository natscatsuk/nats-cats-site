import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Syringe, UtensilsCrossed, Home } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Daily Visits",
    description: "Regular check-ins to feed, play, and care for your cat while you&apos;re away.",
  },
  {
    icon: Syringe,
    title: "Medication Administration",
    description: "Expert administration of medications, injections, and medical treatments.",
  },
  {
    icon: UtensilsCrossed,
    title: "Feeding & Nutrition",
    description: "Proper feeding schedules and dietary management tailored to your cat&apos;s needs.",
  },
  {
    icon: Home,
    title: "Home Security",
    description: "Additional home security checks including lights, mail, and general property care.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive cat care services designed to meet all your feline companion&apos;s needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-lg shadow-md px-8 py-6 text-base font-semibold"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

