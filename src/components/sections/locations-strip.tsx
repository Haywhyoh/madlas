import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceAreas } from "@/lib/service-areas";

export function LocationsStrip() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Where we work"
          title="Steel Fabrication Company for Ifo, Lagos, and Ogun"
          description="The workshop is in Ilepa, Ifo. Steel construction runs from that yard to Lagos, Sango, Agege, the rest of Ogun State, and sites across Nigeria."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((area) => (
            <li key={area.slug}>
              <Link
                href={`/service-areas/${area.slug}`}
                className="flex h-full flex-col rounded-2xl border border-ink/10 bg-cream p-6 transition hover:border-gold/50 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold leading-snug text-ink">{area.h1}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">{area.summary}</p>
                <span className="mt-4 text-sm font-semibold text-gold-dark">Steel fabrication in {area.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
