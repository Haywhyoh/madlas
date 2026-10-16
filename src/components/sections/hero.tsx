import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-ink">
      <video
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/heroVid.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-ink/45" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent"
        aria-hidden="true"
      />

      <Container className="relative flex min-h-[100svh] items-center pt-32 pb-24 sm:pt-36">
        <div className="max-w-2xl animate-fade-up">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            Madlas Global Investment Company
          </p>
          <h1 className="text-4xl font-bold leading-[1.08] text-cream sm:text-5xl md:text-6xl">
            Steel Fabrication in Lagos
            <span className="mt-2 block gold-gradient-text">
              Metal Fabrication &amp; Steel Construction
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
            Madlas Global is a steel fabrication company in Lagos. From the
            Agege office and the Ifo workshop we handle metal fabrication,
            steel construction, and metal construction — tankers, tanks,
            frames, canopies, truck bodies, and towers — for companies across
            more than 20 states.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href={whatsappUrl()}>Get a Free Quote</Button>
            <Button href="/services" variant="secondary">
              Explore Our Services
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-gold/20 pt-8">
            {[
              { label: "Years Fabricating", value: "30+" },
              { label: "States in Nigeria", value: "20+" },
              { label: "Founded in Lagos", value: "1994" },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-display text-2xl font-bold text-gold">{item.value}</p>
                <p className="text-xs uppercase tracking-wide text-cream/60">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
