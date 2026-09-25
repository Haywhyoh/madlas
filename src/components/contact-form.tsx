"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@/components/icons/icon";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-gold/20 bg-white p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
          <Icon name="check" className="h-7 w-7" strokeWidth={2.5} />
        </span>
        <h3 className="mt-5 font-display text-xl font-bold text-ink">
          Thank You — Message Received
        </h3>
        <p className="mt-2 max-w-sm text-sm text-ink/60">
          A member of our sales engineering team will get back to you within
          one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-ink/10 bg-white p-7 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-ink">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
            className="mt-2 w-full rounded-lg border border-ink/15 bg-cream px-4 py-3 text-sm text-ink outline-none transition focus:border-gold"
          />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-semibold text-ink">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Company Name"
            className="mt-2 w-full rounded-lg border border-ink/15 bg-cream px-4 py-3 text-sm text-ink outline-none transition focus:border-gold"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-ink">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="mt-2 w-full rounded-lg border border-ink/15 bg-cream px-4 py-3 text-sm text-ink outline-none transition focus:border-gold"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-ink">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (800) 000-0000"
            className="mt-2 w-full rounded-lg border border-ink/15 bg-cream px-4 py-3 text-sm text-ink outline-none transition focus:border-gold"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="service" className="text-sm font-semibold text-ink">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            className="mt-2 w-full rounded-lg border border-ink/15 bg-cream px-4 py-3 text-sm text-ink outline-none transition focus:border-gold"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            <option>Structural Steel Fabrication</option>
            <option>Steel Pipes &amp; Tubes</option>
            <option>Custom Metal Manufacturing</option>
            <option>Sheet Metal Processing</option>
            <option>Surface Treatment &amp; Coating</option>
            <option>Other / General Inquiry</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-semibold text-ink">
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project, specifications, and timeline..."
            className="mt-2 w-full rounded-lg border border-ink/15 bg-cream px-4 py-3 text-sm text-ink outline-none transition focus:border-gold"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-ink transition hover:bg-gold-light sm:w-auto"
      >
        Send Message
        <Icon name="arrow-right" className="h-4 w-4" />
      </button>
      <p className="mt-3 text-xs text-ink/45">
        This is a demo form for design purposes and does not send data.
      </p>
    </form>
  );
}
