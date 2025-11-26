"use client";

export default function BookingError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  console.error("Error rendering /booking page:", error);

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-4">
        <h1 className="text-2xl sm:text-3xl font-semibold text-red-700">
          Something went wrong loading the booking page
        </h1>
        <p className="text-sm sm:text-base text-neutral-700">
          The booking form hit an unexpected error. The team has been notified. Please try
          again in a moment, or use the contact page to get in touch with Nat directly.
        </p>
      </div>
    </main>
  );
}


