import type { Metadata } from "next";
import Image from "next/image";
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
import { services } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Our Services | Tankers, Tanks, Structures & Filling Stations",
  description:
    "Madlas Global fabricates fuel tankers, storage tanks, steel structures and roof trusses, filling station canopies, truck bodies, and elevated water-tank towers.",
  path: "/services",
  keywords: services.flatMap((service) => [
    service.primaryKeyword,
    ...service.secondaryKeywords,
  ]),
});

const iconMap: Record<string, IconName> = {
  beam: "beam",
  pipe: "pipe",
  gear: "gear",
  layers: "layers",
  shield: "shield",
  certificate: "certificate",
  building: "building",
  flame: "flame",
  truck: "truck",
};

const capabilityChecklist = [
  "Certified inputs & raw materials",
  "Innovative fabrication solutions",
  "Customer-first engineering support",
  "Rigorous quality assurance",
];

const rangeChecklist = [
  "New tanker trailers, ladders, chassis, and painting",
  "Vertical and horizontal steel storage tanks",
  "Warehouse frames, roof trusses, and building roofs",
  "Filling station canopies, new build and renovation",
  "Enclosed truck bodies and box vans",
  "Elevated steel towers with cage ladders",
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
              path: `/services/${service.slug}`,
            })
          )}
        />
      ))}

      <PageHero
        eyebrow="Our Services"
        title="Fabrication and Construction Services"
        description="Fuel tankers, storage tanks, steel structures, filling stations, truck bodies, and elevated water-tank towers — built in our workshop and erected on site."
        crumb="Services"
      />

      {/* Services grid */}
      <section className="bg-cream py-20 sm:py-28" id="services">
        <Container>
          <SectionHeading
            eyebrow="Our Services"
            title="Six Lines of Fabrication and Site Work"
            description="Each service is work we fabricate and erect: tankers and tanks in the workshop, structures and stations on site."
            align="center"
          />

          <div className="mx-auto mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.slug}
                id={service.slug}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-ink transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-soft">
                  <Image
                    src={service.images[0].src}
                    alt={service.images[0].alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-ink">
                    {service.primaryKeyword}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" aria-hidden="true" />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-lg font-bold text-cream">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-cream/55">
                    {service.shortDescription}
                  </p>
                  {service.images.length > 1 && (
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {service.images.slice(1, 4).map((image) => (
                        <div
                          key={image.src}
                          className="relative aspect-[4/3] overflow-hidden rounded-lg"
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            sizes="120px"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="mt-5 flex items-center gap-5">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gold"
                    >
                      View Details
                      <Icon
                        name="arrow-right"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                    <Link
                      href="/contact"
                      className="text-sm font-semibold text-cream/60 hover:text-cream"
                    >
                      Request a Quote
                    </Link>
                  </div>
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
                Tankers, tanks, frames, canopies, and truck bodies are
                fabricated in our workshop, then erected on site. The photos
                on this page are jobs from that work.
              </p>

              <div className="mt-9">
                <Button href="/contact">Request a Quote</Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gold/15 bg-ink-soft">
                <Image
                  src="/images/northwest-filling-station-completed-1.jpg"
                  alt="Completed Northwest filling station canopy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
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
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group overflow-hidden rounded-xl border border-gold/10 bg-ink-soft/60 transition hover:border-gold/30"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={service.images[0].src}
                      alt={service.images[0].alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                  </div>
                  <div className="flex items-start gap-3 p-4">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                      <Icon name={iconMap[service.icon]} className="h-4 w-4" />
                    </div>
                    <h4 className="font-display text-sm font-bold text-cream">
                      {service.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>

            <div>
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                <span className="h-px w-8 bg-gold" />
                Our Range
              </div>
              <h2 className="text-3xl font-bold leading-tight text-cream sm:text-4xl">
                Workshop Fabrication and Site Erection
              </h2>
              <p className="mt-5 text-base leading-relaxed text-cream/65">
                From a tanker still on landing legs to a finished filling
                station canopy, the range is the work we build and install.
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
                <Button href="/contact" variant="secondary">
                  Request a Quote
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
