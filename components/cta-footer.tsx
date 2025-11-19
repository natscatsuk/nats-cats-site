import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export default function CtaFooter() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Book Your Cat&apos;s Care?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
            Get in touch today to discuss your cat&apos;s needs and schedule a consultation. 
            We&apos;re here to provide the professional, compassionate care your feline friend deserves.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span className="text-sm sm:text-base">Contact us for availability</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span className="text-sm sm:text-base">Email for inquiries</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

