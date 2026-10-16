import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/icons/icon";
import { ContactForm } from "@/components/contact-form";
import { MapEmbed } from "@/components/map-embed";
import { placeQuery, siteConfig, whatsappUrl } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Request a Quote",
  description:
    "Request a steel fabrication or metal construction quote. Office in Agege, Lagos. Workshop in Ifo, Ogun State.",
  path: "/contact",
  keywords: [
    "contact Madlas",
    "contact Madlas Global",
    "Madlas Global Investment Company contact",
    "steel fabrication quote Nigeria",
  ],
});

const contactCards = [
  {
    icon: "phone" as const,
    title: "Call Us",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneHref}`,
  },
  {
    icon: "phone" as const,
    title: "WhatsApp",
    value: siteConfig.whatsapp,
    href: whatsappUrl(""),
    external: true,
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
    icon: "beam" as const,
    title: "Our Factory",
    value: `${siteConfig.factoryAddress.street}, ${siteConfig.factoryAddress.city}, ${siteConfig.factoryAddress.region}`,
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
        title="Talk to Madlas Global About Fabrication"
        description="Send the drawings for a tanker, tank, structure, canopy, truck body, or tower. We fabricate in Ogun State and erect across Nigeria."
        crumb="Contact"
      />

      <section className="bg-cream py-14">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contactCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                {...("external" in card
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
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

          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-display text-lg font-bold text-ink">Lagos office</h2>
              <p className="mt-1 text-sm text-ink/60">
                {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.region}
              </p>
              <MapEmbed
                title="Map of the Madlas Global office in Alagbado, Agege, Lagos"
                query={placeQuery(siteConfig.address)}
                className="mt-3"
              />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-ink">Ogun workshop</h2>
              <p className="mt-1 text-sm text-ink/60">
                {siteConfig.factoryAddress.street}, {siteConfig.factoryAddress.city}, {siteConfig.factoryAddress.region}
              </p>
              <MapEmbed
                title="Map of the Madlas Global workshop in Ilepa, Ifo, Ogun State"
                query={placeQuery(siteConfig.factoryAddress)}
                className="mt-3"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
