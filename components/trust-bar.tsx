import { Shield, CheckCircle, Lock, Pill, MapPin } from "lucide-react";

const trustBadges = [
  {
    icon: Shield,
    title: "Vet-Nurse Led",
    description: "Professional veterinary expertise",
  },
  {
    icon: CheckCircle,
    title: "Fully Insured",
    description: "Comprehensive coverage",
  },
  {
    icon: Lock,
    title: "DBS Checked",
    description: "Background verified",
  },
  {
    icon: Pill,
    title: "Medication Trained",
    description: "Qualified to administer",
  },
  {
    icon: MapPin,
    title: "Local Harpenden Specialist",
    description: "Serving Harpenden + 3 Miles",
  },
];

export default function TrustBar() {
  return (
    <section className="py-8 sm:py-12 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 sm:p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                  {badge.title}
                </h3>
                <p className="text-xs text-gray-600 hidden sm:block">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

