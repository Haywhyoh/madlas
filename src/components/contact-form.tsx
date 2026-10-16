"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@/components/icons/icon";
import { services } from "@/lib/data";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const [chatUrl, setChatUrl] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const company = String(data.get("company") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = [
      "Hello Madlas Global, I would like to request a quote.",
      "",
      `Name: ${data.get("name")}`,
      ...(company ? [`Company: ${company}`] : []),
      `Email: ${data.get("email")}`,
      ...(phone ? [`Phone: ${phone}`] : []),
      `Service: ${data.get("service") || "General inquiry"}`,
      "",
      "Project details:",
      String(data.get("message") || ""),
    ].join("\n");

    const url = whatsappUrl(message);
    setChatUrl(url);
    setStatus("submitted");
    window.open(url, "_blank", "noopener,noreferrer");
  }

  if (status === "submitted") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-gold/20 bg-white p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
          <Icon name="check" className="h-7 w-7" strokeWidth={2.5} />
        </span>
        <h3 className="mt-5 font-display text-xl font-bold text-ink">
          Your Quote Is Ready in WhatsApp
        </h3>
        <p className="mt-2 max-w-sm text-sm text-ink/60">
          WhatsApp should have opened with your details for {siteConfig.whatsapp}.
          Send the message to finish the request.
        </p>
        <a
          href={chatUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-ink transition hover:bg-gold-light"
        >
          Open WhatsApp
          <Icon name="arrow-right" className="h-4 w-4" />
        </a>
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
            placeholder="+234 802 000 0000"
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
              Select a fabrication service
            </option>
            {services.map((service) => (
              <option key={service.slug}>{service.title}</option>
            ))}
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
            placeholder="Tell us the steelwork, the site, and when you need it erected..."
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
        Sending opens WhatsApp ({siteConfig.whatsapp}) with your details so you
        can message us directly.
      </p>
    </form>
  );
}
