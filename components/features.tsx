import { Heart, Home, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Your cat receives personalized attention and care from a qualified veterinary nurse who understands their unique needs.",
  },
  {
    icon: Home,
    title: "Home Environment",
    description: "Cats stay in their familiar surroundings, reducing stress and maintaining their daily routines and comfort.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "We work around your schedule to provide care when you need it, whether for a day or extended periods.",
  },
  {
    icon: Users,
    title: "Expert Knowledge",
    description: "Vet-nurse training means we can handle medical needs, administer medications, and recognize health concerns.",
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Nat&apos;s Cats?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional cat care that combines veterinary expertise with genuine love for felines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
                <p className="text-gray-600">
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

