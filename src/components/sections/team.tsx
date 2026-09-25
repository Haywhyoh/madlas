import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/icons/icon";
import { team } from "@/lib/data";

export function Team() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Leadership"
          title="Meet the Team Behind Madlas Global"
          description="Decades of combined engineering, metallurgy, and operations expertise guide every decision we make."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-2xl border border-ink/10 bg-white text-center transition hover:border-gold/40 hover:shadow-lg"
            >
              <div className="relative flex aspect-square items-center justify-center bg-ink">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <span className="font-display text-3xl font-bold text-gold">
                  {member.initials}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-bold text-ink">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-gold-dark">
                  {member.role}
                </p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  {(["linkedin", "twitter", "mail"] as const).map((icon) => (
                    <span
                      key={icon}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 text-ink/50 transition group-hover:border-gold/40 group-hover:text-gold-dark"
                    >
                      <Icon name={icon} className="h-3.5 w-3.5" />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
