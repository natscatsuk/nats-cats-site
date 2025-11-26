"use client";

import { useState } from "react";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
};

type ContactErrors = Partial<Record<keyof ContactFormData, string>> & {
  general?: string;
};

const initialData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  reason: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialData);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined, general: undefined }));
  };

  const validate = () => {
    const next: ContactErrors = {};
    if (!formData.name.trim()) next.name = "Please enter your full name.";
    if (!formData.email.trim()) next.email = "Please enter your email address.";
    if (!formData.message.trim()) next.message = "Please add a short message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(false);
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      console.log("Contact form:", formData);
      await new Promise((resolve) => setTimeout(resolve, 600));
      setSubmitted(true);
      setFormData(initialData);
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        general: "Something went wrong. Please try again in a moment.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    "block w-full rounded-xl border border-neutral-200 bg-white/80 px-4 py-2.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 placeholder:text-neutral-400";
  const label = "text-sm font-medium text-slate-700";
  const error = "mt-1 text-xs text-red-600";

  return (
    <div className="rounded-3xl bg-white/85 backdrop-blur border border-white/70 shadow-[0_18px_45px_rgba(15,23,42,0.08)] p-6 sm:p-8">
      {submitted && (
        <div className="mb-4 rounded-2xl border border-emerald-200 bg-emerald-50/80 px-4 py-3 text-xs sm:text-sm text-emerald-800">
          Thank you – your message has been sent. Nat will reply as soon as she can.
        </div>
      )}
      {errors.general && (
        <div className="mb-4 rounded-2xl border border-red-200 bg-red-50/80 px-4 py-3 text-xs sm:text-sm text-red-700">
          {errors.general}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className={label}>
              Full name<span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              className={inputBase}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className={error}>{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className={label}>
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={inputBase}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className={error}>{errors.email}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="phone" className={label}>
            Phone number{" "}
            <span className="text-slate-400">(optional but helpful)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputBase}
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="reason" className={label}>
            What would you like to talk about?{" "}
            <span className="text-slate-400">(optional)</span>
          </label>
          <select
            id="reason"
            name="reason"
            className={inputBase}
            value={formData.reason}
            onChange={handleChange}
          >
            <option value="">Please choose an option</option>
            <option value="booking">New booking / dates</option>
            <option value="medication">Medication / clinical care questions</option>
            <option value="general">General question</option>
            <option value="other">Something else</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className={label}>
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={inputBase}
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className={error}>{errors.message}</p>}
        </div>

        <div className="pt-1">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full md:w-auto items-center justify-center rounded-full bg-[#0b63ff] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(11,99,255,0.35)] transition hover:bg-[#0a57e6] focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {isSubmitting ? "Sending message..." : "Send message"}
          </button>
        </div>
      </form>
    </div>
  );
}


