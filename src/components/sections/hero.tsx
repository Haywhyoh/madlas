import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-ink">
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
        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink to-transparent"
        aria-hidden="true"
      />

      <Container className="relative flex min-h-[calc(100svh-4rem)] items-center pt-20 pb-3 sm:pt-16 sm:pb-6">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold sm:mb-4">
            Madlas Global Investment Company
          </p>
          <h1 className="text-3xl font-bold leading-[1.08] text-cream sm:text-5xl md:text-6xl">
            Steel Fabrication 
            <span className="mt-2 block gold-gradient-text">
            and Construction in Nigeria
            </span>
          </h1>

          <p className="mt-3 max-w-xl text-base leading-snug text-cream/75 sm:mt-4 sm:text-lg sm:leading-relaxed">
            Madlas Global is a steel fabrication and construction company in Lagos. We handle metal fabrication,
            steel and metal construction for companies across more than 20 states.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-center sm:gap-4">
            <Button href={whatsappUrl()}>Get a Free Quote</Button>
            <Button href="/services" variant="secondary">
              Explore Our Services
            </Button>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3 border-t border-gold/20 pt-4 sm:mt-6 sm:flex sm:gap-x-10 sm:pt-5">
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
