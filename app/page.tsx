"use client";

import Link from "next/link";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* TOP HEADER SECTION */}
      <header className="sticky top-0 z-40 w-full bg-white border-b border-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Left: Phone */}
            <div className="flex items-center space-x-2 text-sm text-gray-700 hidden sm:flex">
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-medium">Phone placeholder</span>
            </div>

            {/* Right: Location */}
            <div className="flex items-center space-x-2 text-sm text-gray-700 hidden sm:flex ml-auto">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="font-medium">Harpenden + 3 Miles</span>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-[#F4F7FB] py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Premium Cat Care
                  <span className="block text-primary">You Can Trust</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                  Vet-nurse-led home care for your beloved cats. Professional, compassionate, and fully qualified.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-lg shadow-md px-8 py-6 text-base font-semibold"
                >
                  <Link href="/booking">Book a Visit</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary/5 rounded-lg px-8 py-6 text-base font-semibold"
                >
                  <Link href="/booking">Check Availability</Link>
                </Button>
              </div>

              {/* WhatsApp Button */}
              <div className="pt-2">
                <Button
                  asChild
                  variant="ghost"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  <Link href="#" className="flex items-center space-x-2">
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp Nat</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: Image Placeholder */}
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
              <div className="text-center space-y-2 p-8">
                <div className="w-32 h-32 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-primary/40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-500 font-medium">Cat Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR SECTION */}
      <section className="bg-white py-8 sm:py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {/* Trust Badge 1 */}
            <div className="flex flex-col items-center text-center p-4 sm:p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                Vet-Nurse Qualified
              </h3>
            </div>

            {/* Trust Badge 2 */}
            <div className="flex flex-col items-center text-center p-4 sm:p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                Fully Insured
              </h3>
            </div>

            {/* Trust Badge 3 */}
            <div className="flex flex-col items-center text-center p-4 sm:p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                DBS Checked
              </h3>
            </div>

            {/* Trust Badge 4 */}
            <div className="flex flex-col items-center text-center p-4 sm:p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                Medication Trained
              </h3>
            </div>

            {/* Trust Badge 5 */}
            <div className="flex flex-col items-center text-center p-4 sm:p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100 col-span-2 sm:col-span-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                Local Specialist
              </h3>
              <p className="text-xs text-gray-600">(3 Miles)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
