import { Counter } from "@/components/ui/counter";
import { Container } from "@/components/ui/container";
import { stats } from "@/lib/data";

export function StatsBar() {
  return (
    <section className="relative bg-ink py-14">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <Container className="relative">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-bold text-gold sm:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-cream/55 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
