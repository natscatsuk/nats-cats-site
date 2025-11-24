"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { FadeInSection } from "./animations/FadeInSection";

export default function CtaFooter() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <FadeInSection yOffset={32}>
      <motion.section 
        id="booking" 
        className="relative -mx-4 sm:-mx-6 lg:-mx-8 mt-12 rounded-t-[2.5rem] bg-royal-gradient text-white overflow-hidden"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: "easeOut" }}
      >
        {/* Faint dotted pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '24px 24px',
          }}
        />
        
        {/* Soft highlight at top */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/12 to-transparent" />
        
        <div className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-[1.2] text-white"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.1, ease: "easeOut" }}
            >
              Ready for calm, reliable cat care?
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Spaces are limited to keep care truly personal. Book early to secure your dates.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#0052CC] hover:bg-gray-50 rounded-full shadow-[0_18px_45px_rgba(15,23,42,0.30)] px-10 py-6 text-base font-semibold transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_28px_80px_rgba(255,255,255,0.4)] hover:ring-4 hover:ring-white/30 active:translate-y-[0px] active:shadow-[0_14px_30px_rgba(15,23,42,0.35)]"
                >
                  <Link href="/booking">Book a visit</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/90 text-white hover:bg-white/20 hover:border-white rounded-full px-10 py-6 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)] backdrop-blur-sm"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Check dates &amp; availability
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </FadeInSection>
  );
}
