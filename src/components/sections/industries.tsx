import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon, type IconName } from "@/components/icons/icon";
import { industries } from "@/lib/data";

const iconMap: Record<string, IconName> = {
  building: "building",
  flame: "flame",
  truck: "truck",
  bolt: "bolt",
  anchor: "anchor",
  gear: "gear",
};

export function Industries() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Innovative Steel Strength for Every Industry"
          description="Wherever performance and durability matter most, Madlas Global steel is engineered to hold the line."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-white p-6 transition hover:border-gold/40 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-ink text-gold">
                <Icon name={iconMap[industry.icon]} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-ink">
                  {industry.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
