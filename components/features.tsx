"use client";

import { Shield, Home, Heart } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="features-section bg-[#F7F8FC]">
      <div className="features-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="p-8 rounded-xl bg-white border border-gray-100 shadow-premium hover:shadow-float transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-[#0052CC]/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[#0052CC]" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
