import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, jsonLdScriptProps, serviceJsonLd } from "@/lib/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Icon, type IconName } from "@/components/icons/icon";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FaqSection } from "@/components/sections/faq-section";
import { services } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Our Services | Steel Fabrication, Piping & Custom Manufacturing",
  description:
    "Explore Madlas Global's full range of steel manufacturing services: structural fabrication, pipes & tubes, custom metal manufacturing, sheet metal processing, coating, and quality testing.",
  path: "/services",
  keywords: ["steel fabrication services", "steel manufacturing services", "custom steel solutions"],
});

const iconMap: Record<string, IconName> = {
  beam: "beam",
  pipe: "pipe",
  gear: "gear",
  layers: "layers",
  shield: "shield",
  certificate: "certificate",
};

export default function ServicesPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ])
        )}
      />
      {services.map((service) => (
        <script
          key={service.slug}
          {...jsonLdScriptProps(
            serviceJsonLd({
              name: service.title,
              description: service.description,
              path: `/services#${service.slug}`,
            })
          )}
        />
      ))}

      <PageHero
        eyebrow="Our Services"
        title="Complete Steel Manufacturing Capabilities"
        description="From structural fabrication to finished, certified components — explore the full range of services that make Madlas Global a complete manufacturing partner."
        crumb="Services"
      />

      <section className="bg-cream py-20 sm:py-28">
        <Container className="space-y-16">
          {services.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="grid gap-10 border-b border-ink/10 pb-16 last:border-0 last:pb-0 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-ink">
                  <div className="absolute inset-0 bg-grid opacity-40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name={iconMap[service.icon]} className="h-20 w-20 text-gold/40" />
                  </div>
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span className="font-display text-5xl font-bold text-gold/20">
                  0{index + 1}
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink/65">
                  {service.description}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-ink/75">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                        <Icon name="check" className="h-3 w-3" strokeWidth={2.5} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <Button href="/contact" variant="ghost">
                    Request a Quote for {service.title}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <FaqSection />
      <CtaBanner />
    </>
  );
}
