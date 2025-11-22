import Image from "next/image";

export default function AboutStrip() {
  return (
    <section className="page-section section-meet-nat bg-white">
      <div className="page-shell">
        <div className="max-w-xl mb-12 text-center lg:text-left">
          <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase mb-3">
            About Nat
          </p>
          <h2 className="text-3xl md:text-[2.3rem] leading-[1.2] font-display text-slate-900 mb-4">
            Meet Nat – Your Vet-Nurse Cat Carer
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-5 text-base sm:text-[16px] text-slate-600 leading-relaxed lg:pr-6">
            <p>
              Nat is a qualified veterinary nurse with extensive experience supporting cats of all ages and temperaments. Nat&apos;s Cats was created to offer calm, welfare-focused home care for cats who deserve more than a standard pet sitter.
            </p>
            <p className="italic text-slate-500 text-[15px] leading-relaxed">
              Your cat is never just another booking.
            </p>
          </div>

          {/* Right Column - Cartoon Natalie Image */}
          <div className="relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-2xl lg:rounded-[24px] shadow-[0_20px_50px_rgba(15,23,42,0.12)] ring-1 ring-slate-100/60 overflow-hidden bg-white/98 border border-[#f1e3c6]/60 flex items-center justify-center aspect-square max-h-[500px]">
              <Image
                src="/Cartoon Vet.png"
                alt="Cartoon illustration of Nat, your vet-nurse cat carer"
                width={500}
                height={500}
                className="object-contain w-full h-full p-6"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
