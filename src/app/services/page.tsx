import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, jsonLdScriptProps, serviceJsonLd } from "@/lib/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon, type IconName } from "@/components/icons/icon";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { services, products } from "@/lib/data";

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

const capabilityChecklist = [
  "Certified inputs & raw materials",
  "Innovative fabrication solutions",
  "Customer-first engineering support",
  "Rigorous quality assurance",
];

const rangeChecklist = [
  "Wide range of grades, gauges & alloys",
  "Export-ready with certified mill reports",
];

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

      {/* Services grid */}
      <section className="bg-cream py-20 sm:py-28" id="services">
        <Container>
          <SectionHeading
            eyebrow="Our Services"
            title="Offering Top-Tier Solutions to Every Industry"
            description="From raw material sourcing to finished, certified components — our integrated capabilities cover every stage of the steel value chain."
            align="center"
          />

          <div className="mx-auto mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.slug}
                id={service.slug}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-ink transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-soft">
                  <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon
                      name={iconMap[service.icon]}
                      className="h-16 w-16 text-gold/30 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-ink">
                    Service 0{index + 1}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" aria-hidden="true" />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-lg font-bold text-cream">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-cream/55">
                    {service.shortDescription}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold"
                  >
                    Request a Quote
                    <Icon
                      name="arrow-right"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Capabilities: pinnacle highlight + product range */}
      <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
        <div
          className="absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[140px]"
          aria-hidden="true"
        />

        <Container className="relative space-y-20">
          {/* Row A: pinnacle of steel manufacturing */}
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                <span className="h-px w-8 bg-gold" />
                Why Choose Madlas
              </div>
              <h2 className="max-w-lg text-3xl font-bold leading-tight text-cream sm:text-4xl">
                Experience the Pinnacle of Steel Manufacturing
              </h2>

              <ul className="mt-7 space-y-3">
                {capabilityChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-cream/75">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <Icon name="check" className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/65">
                We combine decades of metallurgical expertise with modern
                automation to deliver steel products that meet exact
                specifications — on schedule, every time. Our clients trust
                us because we treat every order like a load-bearing
                responsibility.
              </p>

              <div className="mt-9">
                <Button href="/contact">Request a Quote</Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gold/15 bg-ink-soft">
                <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="flame" className="h-24 w-24 text-gold/40" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" aria-hidden="true" />
              </div>

              <div className="absolute -bottom-6 -left-4 flex w-52 max-w-[calc(100%-1rem)] items-center gap-3 rounded-2xl border border-gold/20 bg-ink p-4 shadow-2xl sm:-bottom-8 sm:-left-6 sm:w-60 sm:gap-4 sm:p-5">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gold text-ink sm:h-14 sm:w-14">
                  <Icon name="certificate" className="h-5 w-5 sm:h-7 sm:w-7" />
                </div>
                <div>
                  <p className="font-display text-base font-bold text-cream sm:text-lg">
                    ISO 9001:2015
                  </p>
                  <p className="text-xs uppercase tracking-wide text-cream/55">
                    Certified Manufacturing
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gold/10" aria-hidden="true" />

          {/* Row B: product range */}
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="grid gap-5 sm:grid-cols-2">
              {products.map((product) => (
                <div
                  key={product.slug}
                  className="flex items-start gap-4 rounded-xl border border-gold/10 bg-ink-soft/60 p-5 transition hover:border-gold/30"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <Icon name={iconMap[product.icon]} className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-cream">
                      {product.name}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-cream/50 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                <span className="h-px w-8 bg-gold" />
                Our Range
              </div>
              <h2 className="text-3xl font-bold leading-tight text-cream sm:text-4xl">
                Innovative Steel Solutions for Every Industry
              </h2>
              <p className="mt-5 text-base leading-relaxed text-cream/65">
                Beams, pipes, plates, and coated coil manufactured to
                international standards — ready to move from our plant floor
                to your job site or port of call.
              </p>

              <ul className="mt-6 space-y-3">
                {rangeChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-cream/75">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <Icon name="check" className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button href="/products" variant="secondary">
                  View All Products
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner />

      <ProjectsShowcase />
    </>
  );
}
