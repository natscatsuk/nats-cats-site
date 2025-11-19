export default function TrustBar() {
  const badges = [
    "Qualified Veterinary Nurse",
    "Fully Insured",
    "DBS Checked",
    "Medication Trained",
    "Local Harpenden Specialist",
  ];

  return (
    <section className="py-8 sm:py-12 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <span className="text-primary text-sm sm:text-base">✅</span>
              <span className="text-sm sm:text-base font-medium text-gray-700">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
