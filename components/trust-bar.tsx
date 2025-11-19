"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";

export default function TrustBar() {
  const badges = [
    "Qualified Veterinary Nurse",
    "Fully Insured",
    "DBS Checked",
    "Medication Trained",
    "Local Harpenden Specialist",
  ];

  return (
    <Section 
      as="section" 
      background="white" 
      padding="md"
      className="border-y border-[var(--nc-softBorder)]"
    >
      <Card variant="solid" className="p-6">
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
                  background: "linear-gradient(white, white) padding-box, linear-gradient(135deg, var(--nc-royalBlue), var(--nc-royalBlueDark)) border-box",
                  border: "1px solid transparent",
                }}
              >
                <CheckCircle2 className="w-4 h-4 text-[var(--nc-royalBlue)] flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  {badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </Section>
  );
}
