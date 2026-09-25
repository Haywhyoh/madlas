import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons/icon";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div
        className="absolute -top-32 right-0 h-[520px] w-[520px] rounded-full bg-gold/20 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-diagonal opacity-40"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" aria-hidden="true" />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              <Icon name="spark" className="h-3.5 w-3.5" />
              ISO 9001:2015 Certified Steel Manufacturer
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] text-cream sm:text-5xl md:text-6xl">
              The Material of{" "}
              <span className="gold-gradient-text">Choice for Toughness</span> &amp; Reliability
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/65 sm:text-lg">
              Madlas Global engineers and manufactures structural steel, pipes, and
              custom metal solutions trusted by builders, energy operators, and
              manufacturers in over 25 countries — built to perform where failure
              isn&apos;t an option.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/contact">Get a Free Quote</Button>
              <Button href="/services" variant="secondary">
                Explore Our Services
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-gold/10 pt-8">
              {[
                { label: "Years of Excellence", value: "30+" },
                { label: "Tons Produced Yearly", value: "120K+" },
                { label: "Countries Served", value: "25+" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-display text-2xl font-bold text-gold">{item.value}</p>
                  <p className="text-xs uppercase tracking-wide text-cream/50">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-charcoal via-ink-soft to-ink shadow-2xl">
              <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-10 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-ink/60 text-gold">
                  <Icon name="beam" className="h-9 w-9" />
                </div>
                <p className="font-display text-xl font-bold text-cream">
                  Precision Steel, <br /> Engineered to Last
                </p>
                <p className="max-w-xs text-sm text-cream/55">
                  From raw billet to certified finished product — every ton is
                  tested, tracked, and trusted.
                </p>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-gold/25 bg-ink/80 px-5 py-4 backdrop-blur">
                <div>
                  <p className="font-display text-lg font-bold text-gold">99.8%</p>
                  <p className="text-[0.65rem] uppercase tracking-wide text-cream/50">
                    On-Time Delivery
                  </p>
                </div>
                <div className="h-8 w-px bg-gold/20" />
                <div>
                  <p className="font-display text-lg font-bold text-gold">850+</p>
                  <p className="text-[0.65rem] uppercase tracking-wide text-cream/50">
                    Projects Delivered
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -left-6 -top-6 hidden h-24 w-24 items-center justify-center rounded-full border border-gold/30 bg-ink/90 text-center shadow-xl sm:flex">
              <Icon name="certificate" className="h-10 w-10 text-gold" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
