"use client";

import { useState } from "react";

type BookingFormData = {
  name: string;
  email: string;
  phone: string;
  area: string;
  cats: string;
  visitType: string;
  dates: string;
  details: string;
};

type BookingErrors = Partial<Record<keyof BookingFormData, string>> & {
  general?: string;
};

const initialFormData: BookingFormData = {
  name: "",
  email: "",
  phone: "",
  area: "",
  cats: "",
  visitType: "",
  dates: "",
  details: "",
};

export function BookingFormSection() {
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [errors, setErrors] = useState<BookingErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined, general: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: BookingErrors = {};

    if (!formData.name.trim()) newErrors.name = "Please enter your full name.";
    if (!formData.email.trim()) newErrors.email = "Please enter your email address.";
    if (!formData.cats.trim()) newErrors.cats = "Please tell Nat how many cats you have.";
    if (!formData.visitType.trim()) newErrors.visitType = "Please choose a visit type.";
    if (!formData.dates.trim()) newErrors.dates = "Please share your preferred dates.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(false);

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      // Placeholder for future integration
      console.log("Booking enquiry:", formData);
      await new Promise((resolve) => setTimeout(resolve, 600));
      setSubmitted(true);
      setFormData(initialFormData);
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        general: "Something went wrong. Please try again in a moment.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBaseClasses =
    "block w-full rounded-xl border border-neutral-200 bg-white/80 px-4 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 placeholder:text-neutral-400";

  const labelClasses = "text-sm font-medium text-slate-700";
  const errorClasses = "mt-1 text-xs text-red-600";

  return (
    <section
      id="booking"
      className="w-full py-16 sm:py-20 lg:py-24 bg-transparent"
      aria-labelledby="booking-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 mb-3">
            Book a visit
          </p>
          <h2
            id="booking-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-slate-900"
          >
            Tell Nat about your cats and preferred dates
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Share a few details about your cats and when you&apos;re away, and Nat will
            be in touch to confirm availability and next steps.
          </p>
        </div>

        <div className="rounded-3xl bg-white/80 backdrop-blur border border-white/70 shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-6 sm:p-8">
          {submitted && (
            <div className="mb-4 rounded-2xl border border-emerald-200 bg-emerald-50/80 px-4 py-3 text-xs sm:text-sm text-emerald-800">
              Thank you – your enquiry has been recorded. Nat will be in touch soon to
              confirm your visit details.
            </div>
          )}
          {errors.general && (
            <div className="mb-4 rounded-2xl border border-red-200 bg-red-50/80 px-4 py-3 text-xs sm:text-sm text-red-700">
              {errors.general}
            </div>
          )}

          <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Full name<span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className={inputBaseClasses}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className={errorClasses}>{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email address<span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={inputBaseClasses}
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className={errorClasses}>{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone number <span className="text-slate-400">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className={inputBaseClasses}
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="area" className={labelClasses}>
                  Address / area{" "}
                  <span className="text-slate-400">(optional)</span>
                </label>
                <input
                  id="area"
                  name="area"
                  type="text"
                  placeholder="Harpenden / local area"
                  className={inputBaseClasses}
                  value={formData.area}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="cats" className={labelClasses}>
                  Number of cats<span className="text-red-500">*</span>
                </label>
                <input
                  id="cats"
                  name="cats"
                  type="number"
                  min={1}
                  className={inputBaseClasses}
                  value={formData.cats}
                  onChange={handleChange}
                />
                {errors.cats && <p className={errorClasses}>{errors.cats}</p>}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="visitType" className={labelClasses}>
                  Visit type<span className="text-red-500">*</span>
                </label>
                <select
                  id="visitType"
                  name="visitType"
                  className={inputBaseClasses}
                  value={formData.visitType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Please choose an option</option>
                  <option value="standard">
                    Standard Home Visits (once per day)
                  </option>
                  <option value="weekend">
                    Weekend or Bank Holiday Visits
                  </option>
                  <option value="extended">
                    Extended Visits / extra time
                  </option>
                </select>
                {errors.visitType && (
                  <p className={errorClasses}>{errors.visitType}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="dates" className={labelClasses}>
                Preferred dates<span className="text-red-500">*</span>
              </label>
              <input
                id="dates"
                name="dates"
                type="text"
                placeholder="e.g. 12–16 March"
                className={inputBaseClasses}
                value={formData.dates}
                onChange={handleChange}
              />
              {errors.dates && <p className={errorClasses}>{errors.dates}</p>}
            </div>

            <div>
              <label htmlFor="details" className={labelClasses}>
                Additional details{" "}
                <span className="text-slate-400">
                  (medication, nervous cats, routines, etc.)
                </span>
              </label>
              <textarea
                id="details"
                name="details"
                rows={4}
                className={inputBaseClasses}
                value={formData.details}
                onChange={handleChange}
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex w-full md:w-auto items-center justify-center rounded-full bg-[#0b63ff] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(11,99,255,0.35)] transition hover:bg-[#0a57e6] focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-400"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending enquiry..." : "Request your visit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}


