import { Shield, Home, Heart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Vet-Nurse Expertise",
    description: "Perfect for elderly, anxious or medical-needs cats who need more than a basic sitter.",
  },
  {
    icon: Home,
    title: "Stress-Free Home Routine",
    description: "No travel, no cages — just familiar surroundings and calm, gentle handling.",
  },
  {
    icon: Heart,
    title: "Personal One-to-One Care",
    description: "Your cat is cared for by one dedicated professional, not a rotating team.",
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-xl bg-white border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
