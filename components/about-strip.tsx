import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutStrip() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Nat&apos;s Cats
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
            Nat&apos;s Cats – Elite Home Care was founded with a simple mission: to provide the highest quality 
            cat care services in Harpenden. As a qualified veterinary nurse, I bring professional expertise 
            and genuine passion to every visit, ensuring your beloved feline receives the best possible care 
            in the comfort of their own home.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Whether you need daily visits, medication administration, or extended care while you&apos;re away, 
            we&apos;re here to provide peace of mind and exceptional service.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary/5 rounded-lg px-8 py-6 text-base font-semibold"
          >
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

