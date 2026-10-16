import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons/icon";

const features = [
  {
    icon: "certificate" as const,
    title: "A Fabrication Company",
    description:
      "Madlas Global fabricates the steelwork and erects it on site.",
  },
  {
    icon: "gear" as const,
    title: "Workshop in Ogun State",
    description:
      "Tankers, tanks, frames, bodies, and towers are cut, welded, and painted in Ifo.",
  },
  {
    icon: "truck" as const,
    title: "20+ States in Nigeria",
    description:
      "We have worked with companies across more than 20 states, from fabrication to site erection.",
  },
  {
    icon: "shield" as const,
    title: "One Team, Site to Handover",
    description:
      "Design, workshop, and erection sit with Madlas Global Investment Company.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div
        className="absolute -bottom-40 left-1/3 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[140px]"
        aria-hidden="true"
      />
      <Container className="relative grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Why Choose Madlas
          </div>
          <h2 className="max-w-lg text-3xl font-bold leading-tight text-cream sm:text-4xl">
            Committed to Customized Steel Fabrication &amp; Unmatched Quality
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/65">
            Madlas Global Investment Company fabricates steel for companies
            that need the job built and erected. From our office and
            workshop in Ilepa, Ifo, that work has reached sites in more than 20
            states.
          </p>
          <div className="mt-9">
            <Button href="/about">Discover Our Story</Button>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gold/15 bg-ink-soft/80 p-6 transition hover:border-gold/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Icon name={feature.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-cream">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/55">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
