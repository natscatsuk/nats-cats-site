"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function TrustBar() {
  const badges = [
    "Qualified Veterinary Nurse",
    "Fully Insured",
    "DBS Checked",
    "Medication Trained",
    "Local Harpenden Specialist",
  ];

  return (
    <section className="py-12 bg-white border-y border-divider">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-wrap justify-center gap-4">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-white border border-transparent shadow-sm hover:shadow-md transition-all duration-300"
                style={{
                  background: "linear-gradient(white, white) padding-box, linear-gradient(135deg, #0052CC, #003A99) border-box",
                  border: "1px solid transparent",
                }}
              >
                <CheckCircle2 className="w-4 h-4 text-[#0052CC] flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  {badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
