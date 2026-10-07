import Image from "next/image";
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
  building: "building",
  flame: "flame",
  truck: "truck",
};

export function ServicesGrid() {
  return (
    <section className="bg-cream py-20 sm:py-28" id="services">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="What We Offer"
            title="Fabrication and Site Construction"
            description="Tankers, storage tanks, structural frames, filling stations, truck bodies, and elevated towers — fabricated in our workshop and installed on site."
          />
          <Button href="/services" variant="ghost" className="hidden sm:inline-flex">
            All Services
          </Button>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                <Image
                  src={service.images[0].src}
                  alt={service.images[0].alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute right-4 top-4 rounded-full bg-ink/80 px-2.5 py-1 font-display text-sm font-bold text-cream">
                  0{index + 1}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-8">
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
              </div>
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
