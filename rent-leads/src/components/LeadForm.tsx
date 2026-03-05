"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { trackFormSubmission } from "@/lib/gtag";

const BUDGET_OPTIONS = [
  { value: "", label: "Select budget" },
  { value: "under-1500", label: "Under $1,500" },
  { value: "1500-2000", label: "$1,500 – $2,000" },
  { value: "2000-2500", label: "$2,000 – $2,500" },
  { value: "2500-3000", label: "$2,500 – $3,000" },
  { value: "3000-3500", label: "$3,000 – $3,500" },
  { value: "3500-plus", label: "$3,500+" },
];

const BEDROOM_OPTIONS = [
  { value: "", label: "Select bedrooms" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4+", label: "4+" },
];

const AREA_OPTIONS = [
  { value: "north-york", label: "North York" },
  { value: "richmond-hill", label: "Richmond Hill" },
  { value: "downtown-toronto", label: "Downtown Toronto" },
];

// E.164-ish: optional +, digits, spaces, dashes, parentheses
const PHONE_REGEX = /^[\d\s\-\(\)\+]{10,20}$/;

type FieldErrors = Record<string, string>;

export default function LeadForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  function validate(formData: FormData): FieldErrors {
    const next: FieldErrors = {};
    const name = (formData.get("name") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim().replace(/\s/g, "");
    const email = (formData.get("email") as string)?.trim();
    const budget = formData.get("budget") as string;
    const bedrooms = formData.get("bedrooms") as string;
    const moveIn = formData.get("moveIn") as string;
    const areas = formData.getAll("areas") as string[];

    if (!name || name.length < 2) next.name = "Enter your full name.";
    if (!phone) next.phone = "Phone is required.";
    else if (!PHONE_REGEX.test(phone) || phone.replace(/\D/g, "").length < 10) {
      next.phone = "Enter a valid phone number (at least 10 digits).";
    }
    if (!email) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email.";
    if (!budget) next.budget = "Select a budget range.";
    if (!bedrooms) next.bedrooms = "Select number of bedrooms.";
    if (!moveIn) next.moveIn = "Select a move-in date.";
    if (!areas.length) next.areas = "Select at least one area.";

    return next;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const fieldErrors = validate(formData);

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const payload = {
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        budget: formData.get("budget"),
        bedrooms: formData.get("bedrooms"),
        moveIn: formData.get("moveIn"),
        areas: formData.getAll("areas"),
      };

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let result: { success?: boolean; errors?: FieldErrors; message?: string };
      try {
        result = await res.json();
      } catch {
        setStatus("idle");
        setErrors({ form: "Something went wrong. Please try again." });
        return;
      }

      if (!res.ok) {
        if (result.errors && typeof result.errors === "object") {
          setErrors(result.errors);
        } else {
          setErrors({ form: "Something went wrong. Please try again." });
        }
        setStatus("idle");
        return;
      }

      trackFormSubmission();

      setStatus("success");
      setTimeout(() => router.push("/thank-you"), 1500);
    } catch {
      setStatus("idle");
      setErrors({ form: "Something went wrong. Please try again." });
    }
  }

  const inputClass =
    "w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 placeholder-zinc-500 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 disabled:opacity-70 min-h-[44px]";
  const inputErrorClass = "border-red-500 focus:border-red-500 focus:ring-red-500";

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-lg sm:p-8">
      <h2 className="text-xl font-semibold text-zinc-900 sm:text-2xl">
        Get rental alerts
      </h2>
      <p className="mt-2 text-sm text-zinc-600">
        We&apos;ll email you when new listings match your criteria.
      </p>
      <p className="mt-1 text-xs text-zinc-500">
        We don&apos;t share your info with third parties. Unsubscribe anytime.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        {/* Full Name */}
        <div>
          <label htmlFor="lead-name" className="mb-1 block text-sm font-medium text-zinc-700">
            Full Name
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Full name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "lead-name-error" : undefined}
            className={`${inputClass} ${errors.name ? inputErrorClass : ""}`}
          />
          {errors.name && (
            <p id="lead-name-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="lead-phone" className="mb-1 block text-sm font-medium text-zinc-700">
            Phone
          </label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(416) 555-0123"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "lead-phone-error" : undefined}
            className={`${inputClass} ${errors.phone ? inputErrorClass : ""}`}
          />
          {errors.phone && (
            <p id="lead-phone-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="lead-email" className="mb-1 block text-sm font-medium text-zinc-700">
            Email
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "lead-email-error" : undefined}
            className={`${inputClass} ${errors.email ? inputErrorClass : ""}`}
          />
          {errors.email && (
            <p id="lead-email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Budget Range */}
        <div>
          <label htmlFor="lead-budget" className="mb-1 block text-sm font-medium text-zinc-700">
            Budget Range
          </label>
          <select
            id="lead-budget"
            name="budget"
            required
            aria-invalid={!!errors.budget}
            aria-describedby={errors.budget ? "lead-budget-error" : undefined}
            className={`${inputClass} ${errors.budget ? inputErrorClass : ""}`}
          >
            {BUDGET_OPTIONS.map(({ value, label }) => (
              <option key={value || "empty"} value={value}>
                {label}
              </option>
            ))}
          </select>
          {errors.budget && (
            <p id="lead-budget-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.budget}
            </p>
          )}
        </div>

        {/* Bedrooms */}
        <div>
          <label htmlFor="lead-bedrooms" className="mb-1 block text-sm font-medium text-zinc-700">
            Bedrooms
          </label>
          <select
            id="lead-bedrooms"
            name="bedrooms"
            required
            aria-invalid={!!errors.bedrooms}
            aria-describedby={errors.bedrooms ? "lead-bedrooms-error" : undefined}
            className={`${inputClass} ${errors.bedrooms ? inputErrorClass : ""}`}
          >
            {BEDROOM_OPTIONS.map(({ value, label }) => (
              <option key={value || "empty"} value={value}>
                {label}
              </option>
            ))}
          </select>
          {errors.bedrooms && (
            <p id="lead-bedrooms-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.bedrooms}
            </p>
          )}
        </div>

        {/* Move-in Date */}
        <div>
          <label htmlFor="lead-moveIn" className="mb-1 block text-sm font-medium text-zinc-700">
            Move-in Date
          </label>
          <input
            id="lead-moveIn"
            name="moveIn"
            type="date"
            required
            min={new Date().toISOString().slice(0, 10)}
            aria-invalid={!!errors.moveIn}
            aria-describedby={errors.moveIn ? "lead-moveIn-error" : undefined}
            className={`${inputClass} ${errors.moveIn ? inputErrorClass : ""}`}
          />
          {errors.moveIn && (
            <p id="lead-moveIn-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.moveIn}
            </p>
          )}
        </div>

        {/* Preferred Areas */}
        <div>
          <span className="mb-2 block text-sm font-medium text-zinc-700">
            Preferred Areas
          </span>
          <p className="mb-2 text-xs text-zinc-500">Select at least one</p>
          <div className="space-y-2" role="group" aria-labelledby="areas-label">
            <span id="areas-label" className="sr-only">
              Preferred areas
            </span>
            {AREA_OPTIONS.map(({ value, label }) => (
              <label
                key={value}
                className="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-lg border border-zinc-200 bg-zinc-50/50 px-4 py-3 has-[:checked]:border-zinc-900 has-[:checked]:bg-zinc-100"
              >
                <input
                  type="checkbox"
                  name="areas"
                  value={value}
                  className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
                />
                <span className="text-sm font-medium text-zinc-900">{label}</span>
              </label>
            ))}
          </div>
          {errors.areas && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.areas}
            </p>
          )}
        </div>

        {errors.form && (
          <p className="text-sm text-red-600" role="alert">
            {errors.form}
          </p>
        )}

        {status === "success" && (
          <div
            className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-800"
            role="status"
            aria-live="polite"
          >
            Lead saved! Redirecting to thank you page…
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          aria-busy={status === "loading"}
          aria-disabled={status === "loading" || status === "success"}
          className="w-full rounded-lg bg-zinc-900 px-4 py-3 font-semibold text-white transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 disabled:opacity-70 min-h-[48px] disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Submitting…" : status === "success" ? "Saved" : "Get Listings"}
        </button>
      </form>
    </div>
  );
}
