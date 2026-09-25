import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons/icon";

const highlights = [
  "State-of-the-art rolling & fabrication plant",
  "In-house metallurgical testing laboratory",
  "Dedicated export & logistics division",
];

export function IntroAbout() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-ink">
              <div className="absolute inset-0 bg-grid opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="beam" className="h-24 w-24 text-gold/40" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-8 -right-6 flex w-56 items-center gap-4 rounded-2xl border border-gold/20 bg-ink p-5 shadow-2xl sm:-right-10">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gold text-ink">
                <Icon name="certificate" className="h-7 w-7" />
              </div>
              <div>
                <p className="font-display text-lg font-bold text-cream">30+ Years</p>
                <p className="text-xs uppercase tracking-wide text-cream/55">
                  Manufacturing Excellence
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
              <span className="h-px w-8 bg-gold-dark" />
              Who We Are
            </div>
            <h2 className="max-w-lg text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Forging Reliable Steel Solutions for Global Industry
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/65">
              Since {new Date().getFullYear() - 30}, Madlas Global has grown from
              a single rolling mill into an integrated steel manufacturing group
              serving construction, energy, marine, and manufacturing clients
              worldwide. Every product that leaves our plant is engineered,
              tested, and certified to perform under pressure.
            </p>

            <ul className="mt-7 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink/75">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                    <Icon name="check" className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Button href="/about" variant="ghost">
                More About Madlas
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
