import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function CtaFooter() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready for calm, reliable cat care?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Spaces are limited to keep care truly personal. Book early to secure your dates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 rounded-lg shadow-md px-8 py-6 text-base font-semibold"
            >
              <Link href="/booking">Book a Visit</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 rounded-lg px-8 py-6 text-base font-semibold"
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
