import Image from "next/image";

export default function AboutStrip() {
  return (
    <section className="py-24 bg-[#F7F8FC]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Meet Nat – Your Vet-Nurse Cat Carer
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-4 text-lg sm:text-xl text-gray-600 leading-relaxed text-center lg:text-left">
            <p>
              Nat is a qualified veterinary nurse with extensive experience supporting cats of all ages and temperaments. Nat&apos;s Cats was created to offer calm, welfare-focused home care for cats who deserve more than a standard pet sitter.
            </p>
            <p className="italic text-gray-500 text-base sm:text-lg">
              Your cat is never just another booking.
            </p>
          </div>

          {/* Right Column - Cartoon Natalie Image */}
          <div className="relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-[400px] sm:h-[500px] rounded-xl shadow-lg overflow-hidden bg-white flex items-center justify-center">
              <Image
                src="/Cartoon Vet.png"
                alt="Cartoon illustration of Nat, your vet-nurse cat carer"
                width={500}
                height={500}
                className="object-contain w-full h-full p-4"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
