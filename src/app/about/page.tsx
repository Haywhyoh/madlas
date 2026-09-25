import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon, type IconName } from "@/components/icons/icon";
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

const storyHighlights = [
  "Family-founded, engineering-led leadership team",
  "Vertically integrated rolling, fabrication & testing",
  "Full material traceability on every shipment",
];

const missionVision = [
  {
    icon: "shield" as const,
    eyebrow: "Our Mission",
    title: "Steel Engineers & Builders Can Trust Without Question",
    description:
      "We manufacture certified steel products by investing in disciplined processes, skilled people, and modern equipment — so every beam, pipe, and panel performs exactly as specified, in any climate, on any site, for decades.",
  },
  {
    icon: "spark" as const,
    eyebrow: "Our Vision",
    title: "The Most Reliable Steel Partner for Industries That Can't Fail",
    description:
      "To be the go-to steel manufacturing partner for construction, energy, marine, and heavy manufacturing clients across every market we serve — where performance is never negotiable.",
  },
];

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
  { year: "1994", title: "Founded in Lagos, Nigeria", description: "Madlas Global opens its first rolling mill with a team of 12." },
  { year: "2003", title: "First Export Contract", description: "Shipped our first international order of structural steel to Latin America." },
  { year: "2011", title: "ISO 9001 Certification", description: "Achieved ISO 9001 certification and opened our metallurgical testing lab." },
  { year: "2018", title: "Pipe & Tube Division Launch", description: "Expanded capacity with a dedicated seamless pipe manufacturing line." },
  { year: "2026", title: "25+ Countries Served", description: "Now exporting certified steel products to more than 25 countries worldwide." },
];

const gallery: { icon: IconName; title: string; caption: string }[] = [
  { icon: "beam", title: "Rolling Mill Floor", caption: "Structural sections rolled to exact tolerance." },
  { icon: "certificate", title: "Metallurgical Lab", caption: "Every batch tested before it leaves the plant." },
  { icon: "gear", title: "Fabrication Bay", caption: "CNC cutting and robotic welding in motion." },
  { icon: "truck", title: "Export Yard", caption: "Certified shipments loading for 25+ countries." },
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

      {/* Our Story */}
      <section className="bg-cream py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-ink">
              <div className="absolute inset-0 bg-grid opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="beam" className="h-24 w-24 text-gold/40" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-4 flex w-48 max-w-[calc(100%-1rem)] items-center gap-3 rounded-2xl border border-gold/20 bg-ink p-4 shadow-2xl sm:-bottom-8 sm:-right-6 sm:w-56 sm:gap-4 sm:p-5 lg:-right-8">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gold text-ink sm:h-14 sm:w-14">
                <Icon name="certificate" className="h-5 w-5 sm:h-7 sm:w-7" />
              </div>
              <div>
                <p className="font-display text-base font-bold text-cream sm:text-lg">Est. {siteConfig.founded}</p>
                <p className="text-xs uppercase tracking-wide text-cream/55">
                  {siteConfig.address.city}, {siteConfig.address.region}
                </p>
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="Forged From a Single Rolling Mill Into a Global Steel Group"
            />
            <p className="mt-5 text-base leading-relaxed text-ink/65">
              Madlas Global began in {siteConfig.founded} with a single rolling
              mill and a team of twelve people who believed steel should
              never be a weak link. Three decades later, we&apos;re an
              integrated manufacturing group producing structural steel,
              pipes, and custom fabrication for clients who can&apos;t afford
              to guess about quality.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/65">
              Every product that leaves our plant is engineered, tested, and
              certified — backed by full material traceability and a team
              that treats every order like a load-bearing responsibility.
            </p>

            <ul className="mt-7 space-y-3">
              {storyHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink/75">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                    <Icon name="check" className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Button href="/services" variant="ghost">
                See Our Capabilities
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <StatsBar />

      {/* Mission & Vision */}
      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our Mission &amp; Vision"
            title="Building the Backbone of Global Industry"
            align="center"
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {missionVision.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-ink/10 bg-white p-8 transition hover:border-gold/40 hover:shadow-lg sm:p-10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-ink text-gold">
                  <Icon name={item.icon} className="h-7 w-7" />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
                  {item.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold leading-snug text-ink sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/60 sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Values */}
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

      {/* Journey / Timeline */}
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

      {/* Plant Gallery */}
      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Behind the Scenes"
            title="Inside Our Operations"
            description="A glimpse at the plant floor, testing lab, and logistics teams that keep every certified shipment on schedule."
            align="center"
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item) => (
              <div
                key={item.title}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-ink/10 bg-ink"
              >
                <div className="absolute inset-0 bg-grid opacity-30 transition group-hover:opacity-50" aria-hidden="true" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name={item.icon} className="h-14 w-14 text-gold/40 transition group-hover:text-gold/60" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-sm font-bold text-cream">{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-cream/55">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Team />

      <section className="bg-cream py-16">
        <Container className="rounded-2xl border border-gold/20 bg-ink p-10 text-center sm:p-14">
          <h2 className="font-display text-2xl font-bold text-cream sm:text-3xl">
            Certified, Accountable, and Built on Trust
          </h2>
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
