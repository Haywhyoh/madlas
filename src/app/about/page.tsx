import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/icons/icon";
import { Button } from "@/components/ui/button";
import { StatsBar } from "@/components/sections/stats-bar";
import { Team } from "@/components/sections/team";
import { CtaBanner } from "@/components/sections/cta-banner";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "About Madlas Global | 30+ Years of Steel Manufacturing Excellence",
  description:
    "Learn how Madlas Global grew from a single rolling mill into a global steel manufacturing group serving 25+ countries with certified structural steel, pipes, and custom fabrication.",
  path: "/about",
  keywords: ["about Madlas Global", "steel company history", "steel manufacturer mission"],
});

const values = [
  {
    icon: "shield" as const,
    title: "Integrity in Every Ton",
    description: "We never compromise on certification, testing, or transparency with our clients.",
  },
  {
    icon: "gear" as const,
    title: "Engineering Excellence",
    description: "Continuous investment in technology, training, and process improvement.",
  },
  {
    icon: "truck" as const,
    title: "Reliability at Scale",
    description: "On-time, every time — from single orders to multi-thousand-ton contracts.",
  },
  {
    icon: "spark" as const,
    title: "Sustainable Growth",
    description: "Investing in energy-efficient production and responsible sourcing.",
  },
];

const timeline = [
  { year: "1994", title: "Founded in Houston, TX", description: "Madlas Global opens its first rolling mill with a team of 12." },
  { year: "2003", title: "First Export Contract", description: "Shipped our first international order of structural steel to Latin America." },
  { year: "2011", title: "ISO 9001 Certification", description: "Achieved ISO 9001 certification and opened our metallurgical testing lab." },
  { year: "2018", title: "Pipe & Tube Division Launch", description: "Expanded capacity with a dedicated seamless pipe manufacturing line." },
  { year: "2026", title: "25+ Countries Served", description: "Now exporting certified steel products to more than 25 countries worldwide." },
];

export default function AboutPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ])
        )}
      />

      <PageHero
        eyebrow="About Madlas Global"
        title="Engineering Steel Strength Since 1994"
        description="From a single rolling mill to a global manufacturing group — this is the story of how Madlas Global became a trusted name in steel."
        crumb="About"
      />

      <section className="bg-cream py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-ink">
            <div className="absolute inset-0 bg-grid opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon name="certificate" className="h-24 w-24 text-gold/40" />
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Our Mission & Vision"
              title="Building the Backbone of Global Industry"
            />
            <p className="mt-5 text-base leading-relaxed text-ink/65">
              Our mission is simple: manufacture steel products that engineers
              and builders can trust without question. We invest in
              certified processes, skilled people, and modern equipment so
              every beam, pipe, and panel that leaves our plant performs
              exactly as specified — in any climate, on any site, for
              decades.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/65">
              Our vision is to be the most reliable steel manufacturing
              partner for industries that cannot afford failure —
              construction, energy, marine, and heavy manufacturing —
              across every market we serve.
            </p>
            <div className="mt-8">
              <Button href="/services" variant="ghost">
                See Our Capabilities
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <StatsBar />

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What Drives Us"
            title="Our Core Values"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-ink/10 bg-white p-7 text-center transition hover:border-gold/40 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-ink text-gold">
                  <Icon name={value.icon} className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
        <div className="absolute inset-0 bg-diagonal opacity-30" aria-hidden="true" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Our Journey"
            title="Three Decades of Milestones"
            align="center"
            dark
          />
          <ol className="mx-auto mt-14 max-w-3xl space-y-8 border-l border-gold/20 pl-8">
            {timeline.map((item) => (
              <li key={item.year} className="relative">
                <span className="absolute -left-[2.55rem] flex h-6 w-6 items-center justify-center rounded-full border border-gold bg-ink text-[0.6rem] font-bold text-gold">
                  •
                </span>
                <p className="font-display text-lg font-bold text-gold">{item.year}</p>
                <p className="mt-1 font-display text-base font-semibold text-cream">
                  {item.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-cream/60">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Team />

      <section className="bg-cream py-16">
        <Container className="rounded-2xl border border-gold/20 bg-ink p-10 text-center sm:p-14">
          <p className="font-display text-2xl font-bold text-cream sm:text-3xl">
            Certified, Accountable, and Built on Trust
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm text-cream/60 sm:text-base">
            {siteConfig.name} is proud to hold ISO 9001:2015 certification
            across all manufacturing facilities, with full material
            traceability on every shipment.
          </p>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
