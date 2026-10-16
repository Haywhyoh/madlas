import type { Metadata } from "next";
import Image from "next/image";
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
  title: "About Madlas Global Investment Company",
  description:
    "Madlas Global Investment Company Limited is a Nigerian steel fabrication company. Since 1994 we have fabricated and erected steelwork for companies across more than 20 states.",
  path: "/about",
  keywords: [
    "about Madlas",
    "about Madlas Global",
    "Madlas Global Investment Company",
    "steel fabrication company Nigeria",
  ],
});

const storyHighlights = [
  "A steel fabrication company working across Nigeria",
  "Office and workshop in Ilepa, Ifo, Ogun State",
  "Work with companies across more than 20 states",
];

const missionVision = [
  {
    icon: "shield" as const,
    eyebrow: "Our Mission",
    title: "Fabricate the Steel and Put It Up",
    description:
      "Madlas Global Investment Company exists to build steelwork companies can use — tankers, tanks, frames, canopies, truck bodies, and towers — then erect it on their sites.",
  },
  {
    icon: "spark" as const,
    eyebrow: "Our Vision",
    title: "The Fabricator Companies Across Nigeria Call First",
    description:
      "To be the steel fabrication company known in every state we work: Madlas, Madlas Global, the team that builds the job and stands it up.",
  },
];

const values = [
  {
    icon: "shield" as const,
    title: "The Job We Quoted",
    description: "We fabricate what was agreed and erect it where it was agreed.",
  },
  {
    icon: "gear" as const,
    title: "Workshop Discipline",
    description: "Cutting, welding, fittings, and paint happen in our Ogun State workshop before steel goes to site.",
  },
  {
    icon: "truck" as const,
    title: "We Go to the Site",
    description: "Erection crews work with companies across more than 20 Nigerian states.",
  },
  {
    icon: "spark" as const,
    title: "Built for the Job",
    description: "Companies hire Madlas Global to fabricate steelwork and erect it on their sites.",
  },
];

const timeline = [
  { year: "1994", title: "Founded in Lagos", description: "Madlas Global Investment Company Limited is established in Lagos, Nigeria." },
  { year: "Ogun", title: "Workshop in Ifo", description: "Steel is fabricated at Km 30, Abeokuta/Lagos Expressway, Ilepa, Ifo." },
  { year: "20+", title: "States Across Nigeria", description: "Fabrication and site erection for companies across more than 20 states." },
];

const gallery: { icon: IconName; title: string; caption: string }[] = [
  { icon: "beam", title: "Structural Steel", caption: "Portal frames and roof trusses for warehouses and buildings." },
  { icon: "truck", title: "Tankers & Bodies", caption: "Fuel tanker trailers and enclosed truck bodies built in the workshop." },
  { icon: "gear", title: "Workshop", caption: "Cutting, welding, and painting in Ifo, Ogun State." },
  { icon: "building", title: "Site Erection", caption: "Canopies, frames, and towers erected for companies across Nigeria." },
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
        title="Madlas Global, Steel Fabricators in Nigeria"
        description="Madlas Global Investment Company Limited has fabricated and erected steel for companies across more than 20 states since 1994."
        crumb="About"
      />

      {/* Our Story */}
      <section className="bg-cream py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-ink">
              <Image
                src="/images/CEO_madlasglobal.jpeg"
                alt="Alhaji A.O. Shorunke, CEO of Madlas Global"
                fill
                className="object-cover object-[center_22%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
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
              title="A Fabrication Company Built for Nigerian Sites"
            />
            <p className="mt-5 text-base leading-relaxed text-ink/65">
              {siteConfig.legalName} — Madlas, or Madlas Global — is a steel
              fabrication company. We opened in {siteConfig.founded} in Lagos.
              The office and workshop are in Ilepa, Ifo, Ogun State. The work is
              tankers, storage
              tanks, steel structures, filling station canopies, truck bodies,
              and elevated water-tank towers.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/65">
              Companies across more than 20 states hire us to fabricate that
              steel and erect it on their sites.
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
      <section className="bg-cream py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Our Mission &amp; Vision"
            title="What Madlas Global Is Here to Do"
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
      <section className="bg-cream py-8 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="What Drives Us"
            title="Our Core Values"
            align="center"
          />
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
            description="The workshop, the steelwork, and the site crews behind Madlas Global Investment Company."
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

      <Team showViewAll />

      <section className="bg-cream py-16">
        <Container className="rounded-2xl border border-gold/20 bg-ink p-10 text-center sm:p-14">
          <h2 className="font-display text-2xl font-bold text-cream sm:text-3xl">
            Fabricated in Ogun. Erected Across Nigeria.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-cream/60 sm:text-base">
            {siteConfig.legalName} ({siteConfig.registrationNumber}) fabricates
            steel at {siteConfig.factoryAddress.street}, {siteConfig.factoryAddress.city},
            and erects it for companies in more than 20 states.
          </p>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
