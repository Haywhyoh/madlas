import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { featuredTeam, type TeamMember } from "@/lib/data";

export function Team({
  members = featuredTeam,
  eyebrow = "Our Leadership",
  title = "Meet the Team Behind Madlas Global",
  description = "Decades of combined engineering, metallurgy, and operations expertise guide every decision we make.",
  showViewAll = false,
}: {
  members?: TeamMember[];
  eyebrow?: string;
  title?: string;
  description?: string;
  showViewAll?: boolean;
}) {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-2xl border border-ink/10 bg-white text-center transition hover:border-gold/40 hover:shadow-lg"
            >
              <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-ink">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <span className="font-display text-3xl font-bold text-gold">
                      {member.initials}
                    </span>
                  </>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-bold text-ink">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-gold-dark">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {showViewAll && (
          <div className="mt-12 flex justify-center">
            <Button href="/team" variant="ghost">
              Meet the Full Team
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
