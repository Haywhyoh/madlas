import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/icons/icon";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | Request a Steel Manufacturing Quote",
  description:
    "Get in touch with Madlas Global's sales engineering team for structural steel, pipe, and custom manufacturing quotes. Call, email, or send us your project specifications.",
  path: "/contact",
  keywords: ["contact steel manufacturer", "request steel quote", "Madlas Global contact"],
});

const contactCards = [
  {
    icon: "phone" as const,
    title: "Call Us",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneHref}`,
  },
  {
    icon: "mail" as const,
    title: "Email Us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: "map-pin" as const,
    title: "Visit Us",
    value: `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.region}`,
    href: "#location",
  },
  {
    icon: "clock" as const,
    title: "Working Hours",
    value: "Mon - Sat: 8:00am - 6:00pm",
    href: "#location",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ])
        )}
      />

      <PageHero
        eyebrow="Contact Madlas Global"
        title="Let's Talk About Your Next Steel Project"
        description="Whether it's a structural steel order, custom fabrication, or bulk piping request, our sales engineering team is ready to help."
        crumb="Contact"
      />

      <section className="bg-cream py-14">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="rounded-2xl border border-ink/10 bg-white p-6 transition hover:border-gold/40 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-gold">
                  <Icon name={card.icon} className="h-5 w-5" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gold-dark">
                  {card.title}
                </p>
                <p className="mt-1 text-sm font-medium text-ink">{card.value}</p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream pb-20 sm:pb-28" id="location">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />

          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-ink">
            <div className="relative flex aspect-[4/3] items-center justify-center">
              <div className="absolute inset-0 bg-grid opacity-40" />
              <div className="relative flex flex-col items-center gap-3 px-8 text-center">
                <Icon name="map-pin" className="h-10 w-10 text-gold" />
                <p className="font-display text-lg font-bold text-cream">
                  Madlas Global Plant &amp; HQ
                </p>
                <p className="text-sm text-cream/60">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.region}{" "}
                  {siteConfig.address.postalCode}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
