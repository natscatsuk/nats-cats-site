import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

import { FadeInWhenVisible } from "./FadeInWhenVisible";

export default function CtaFooter() {
  return (
    <section id="booking" className="relative -mx-4 sm:-mx-6 lg:-mx-8 mt-10 rounded-t-[2.5rem] border-t border-white/10 bg-royal-gradient text-white overflow-hidden">
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Soft highlight at top */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/10 to-transparent" />
      
      <div className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible delay={0.45}>
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-[1.2] text-white">
              Ready for calm, reliable cat care?
            </h2>
            <p className="text-base sm:text-lg text-white/85 mb-10 leading-relaxed">
              Spaces are limited to keep care truly personal. Book early to secure your dates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#0052CC] hover:bg-gray-50 rounded-full shadow-[0_18px_45px_rgba(15,23,42,0.30)] px-10 py-6 text-base font-semibold transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_26px_70px_rgba(15,23,42,0.35)] active:translate-y-[0px] active:shadow-[0_14px_30px_rgba(15,23,42,0.35)]"
              >
                <Link href="/booking">Book a Visit</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/90 text-white hover:bg-white/15 rounded-full px-10 py-6 text-base font-semibold transition-all duration-250 hover:-translate-y-0.5 backdrop-blur-sm"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Check Dates &amp; Availability
                </Link>
              </Button>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
