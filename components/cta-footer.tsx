import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function CtaFooter() {
  return (
    <section className="relative py-28 bg-royal-gradient text-white overflow-hidden">
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Ready for calm, reliable cat care?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Spaces are limited to keep care truly personal. Book early to secure your dates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#0052CC] hover:bg-gray-50 rounded-lg shadow-premium px-10 py-7 text-base font-semibold transition-all duration-300 hover:scale-105"
            >
              <Link href="/booking">Book a Visit</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 rounded-lg px-10 py-7 text-base font-semibold transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Nat
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
