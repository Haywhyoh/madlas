import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon, type IconName } from "@/components/icons/icon";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";

const iconMap: Record<string, IconName> = {
  beam: "beam",
  pipe: "pipe",
  gear: "gear",
  layers: "layers",
  shield: "shield",
  certificate: "certificate",
};

export function ServicesGrid() {
  return (
    <section className="bg-cream py-20 sm:py-28" id="services">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="What We Offer"
            title="Complete Steel Manufacturing Solutions"
            description="From raw material sourcing to finished, certified components — our integrated capabilities cover every stage of the steel value chain."
          />
          <Button href="/services" variant="ghost" className="hidden sm:inline-flex">
            All Services
          </Button>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              id={service.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-xl"
            >
              <span className="absolute right-6 top-6 font-display text-4xl font-bold text-ink/5 transition group-hover:text-gold/15">
                0{index + 1}
              </span>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-ink text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                <Icon name={iconMap[service.icon]} className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-ink">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">
                {service.shortDescription}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark">
                Learn More
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <Button href="/services" variant="ghost">
            All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
