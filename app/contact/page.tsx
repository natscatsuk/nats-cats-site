"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { FadeInUp, FadeInView } from "@/components/ui/motion";
import { Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <Section 
        as="section" 
        background="offWhite" 
        padding="lg"
        className="text-center"
      >
        <FadeInUp className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-[var(--nc-royalBlue)] uppercase tracking-wider mb-4">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Contact & Booking Enquiries
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Tell me a little about your cat and your dates, and I&apos;ll get back to you with availability and next steps.
          </p>
        </FadeInUp>
      </Section>

      {/* Two-Column Layout */}
      <Section 
        as="section" 
        background="white" 
        padding="lg"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact/Booking Form */}
          <FadeInView delay={0.1}>
            <Card variant="solid" className="p-6 lg:p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Booking Enquiry
                </CardTitle>
              </CardHeader>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--nc-softBorder)] focus:outline-none focus:ring-2 focus:ring-[var(--nc-royalBlue)] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--nc-softBorder)] focus:outline-none focus:ring-2 focus:ring-[var(--nc-royalBlue)] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--nc-softBorder)] focus:outline-none focus:ring-2 focus:ring-[var(--nc-royalBlue)] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-2">
                    Area / Postcode *
                  </label>
                  <input
                    type="text"
                    id="area"
                    name="area"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--nc-softBorder)] focus:outline-none focus:ring-2 focus:ring-[var(--nc-royalBlue)] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="dates" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Dates *
                  </label>
                  <input
                    type="text"
                    id="dates"
                    name="dates"
                    placeholder="e.g. 12–18 March 2026"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--nc-softBorder)] focus:outline-none focus:ring-2 focus:ring-[var(--nc-royalBlue)] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="numCats" className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Cats *
                  </label>
                  <select
                    id="numCats"
                    name="numCats"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--nc-softBorder)] focus:outline-none focus:ring-2 focus:ring-[var(--nc-royalBlue)] focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="catDetails" className="block text-sm font-medium text-gray-700 mb-2">
                    Cat Details *
                  </label>
                  <textarea
                    id="catDetails"
                    name="catDetails"
                    rows={4}
                    placeholder="Names, ages, personalities, any medical conditions"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--nc-softBorder)] focus:outline-none focus:ring-2 focus:ring-[var(--nc-royalBlue)] focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div>
                  <label htmlFor="medication" className="block text-sm font-medium text-gray-700 mb-2">
                    Medication Required? *
                  </label>
                  <select
                    id="medication"
                    name="medication"
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--nc-softBorder)] focus:outline-none focus:ring-2 focus:ring-[var(--nc-royalBlue)] focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select...</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="referral" className="block text-sm font-medium text-gray-700 mb-2">
                    How Did You Hear About Nat&apos;s Cats?
                  </label>
                  <select
                    id="referral"
                    name="referral"
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--nc-softBorder)] focus:outline-none focus:ring-2 focus:ring-[var(--nc-royalBlue)] focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select...</option>
                    <option value="google">Google</option>
                    <option value="facebook">Facebook</option>
                    <option value="nextdoor">Nextdoor</option>
                    <option value="vet">Vet referral</option>
                    <option value="friend">Friend/Family</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="additional" className="block text-sm font-medium text-gray-700 mb-2">
                    Anything else I should know?
                  </label>
                  <textarea
                    id="additional"
                    name="additional"
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--nc-softBorder)] focus:outline-none focus:ring-2 focus:ring-[var(--nc-royalBlue)] focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="pt-4">
                  <Button type="button" variant="primary" size="lg" className="w-full">
                    Send Enquiry
                  </Button>
                </div>
              </form>
            </Card>
          </FadeInView>

          {/* Right: Contact Details & Info */}
          <FadeInView delay={0.2}>
            <div className="space-y-6">
              {/* Contact Details Card */}
              <Card variant="solid" className="p-6 lg:p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Contact Details
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-0 space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
                    <a 
                      href="mailto:natscatsuk@gmail.com"
                      className="text-[var(--nc-royalBlue)] hover:underline font-medium"
                    >
                      natscatsuk@gmail.com
                    </a>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Phone</p>
                    <p className="text-gray-700">Phone: [your number here]</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Service Area</p>
                    <p className="text-gray-700">Harpenden and surrounding areas within 3 miles</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Hours</p>
                    <p className="text-gray-700">Enquiry responses Mon–Fri (with weekend care available)</p>
                  </div>
                </CardContent>
              </Card>

              {/* What Happens Next Card */}
              <Card variant="solid" className="p-6 lg:p-8 bg-[var(--nc-offWhite)]">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    What Happens Next?
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-0 space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--nc-royalBlue)]/10 flex items-center justify-center">
                      <span className="text-[var(--nc-royalBlue)] font-bold text-sm">1</span>
                    </div>
                    <p className="text-gray-700 pt-1">
                      I&apos;ll review your enquiry and confirm availability.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--nc-royalBlue)]/10 flex items-center justify-center">
                      <span className="text-[var(--nc-royalBlue)] font-bold text-sm">2</span>
                    </div>
                    <p className="text-gray-700 pt-1">
                      We&apos;ll arrange a free meet & greet where needed.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--nc-royalBlue)]/10 flex items-center justify-center">
                      <span className="text-[var(--nc-royalBlue)] font-bold text-sm">3</span>
                    </div>
                    <p className="text-gray-700 pt-1">
                      If you&apos;re happy, we&apos;ll confirm your booking and care plan.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeInView>
        </div>
      </Section>

      {/* Mini CTA Strip */}
      <Section 
        as="section" 
        background="offWhite" 
        padding="lg"
        className="text-center"
      >
        <FadeInView>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Prefer to chat first?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            You&apos;re always welcome to message me if you&apos;d like to talk things through.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="primary" size="lg">
              <a href="mailto:natscatsuk@gmail.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Nat
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              {/* TODO: Replace with actual WhatsApp number */}
              <a 
                href="https://wa.me/447000000000" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Nat
              </a>
            </Button>
          </div>
        </FadeInView>
      </Section>
    </div>
  );
}
