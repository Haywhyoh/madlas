import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div className="absolute inset-0 bg-diagonal opacity-30" aria-hidden="true" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Our Process"
          title="Experience the Pinnacle of Steel Manufacturing"
          description="A disciplined four-stage process ensures every product meets Madlas Global's exacting standards before it reaches you."
          align="center"
          dark
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative">
              <div className="relative rounded-2xl border border-gold/15 bg-ink-soft/70 p-7">
                <span className="font-display text-5xl font-bold text-gold/20">
                  {step.step}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-cream">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-cream/55">
                  {step.description}
                </p>
              </div>
              {index < processSteps.length - 1 && (
                <span
                  className="absolute right-[-1.6rem] top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gold/30 lg:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
