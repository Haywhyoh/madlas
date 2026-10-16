import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons/icon";
import { siteConfig } from "@/lib/site-config";

const highlights = [
  "Workshop fabrication in Ifo, Ogun State",
  "Site erection for companies across Nigeria",
  "Steelwork delivered in more than 20 states",
];

export function IntroAbout() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
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
                <p className="font-display text-base font-bold text-cream sm:text-lg">30+ Years</p>
                <p className="text-xs uppercase tracking-wide text-cream/55">
                  Steel Fabrication
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
              What is Madlas Global?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/65">
              Madlas Global is a steel fabrication company in Lagos. Since{" "}
              {siteConfig.founded}, Madlas Global Investment Company Limited
              has built tanker, tank, structure, canopy, and tower jobs from
              the Agege office and the Ogun State workshop, and erected them
              for companies in more than 20 states.
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
