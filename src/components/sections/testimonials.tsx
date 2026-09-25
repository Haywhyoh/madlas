import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/icons/icon";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Client Feedback"
          title="See What Our Clients Have to Say"
          align="center"
          dark
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-gold/15 bg-ink-soft/70 p-7"
            >
              <Icon name="quote" className="h-8 w-8 text-gold/50" />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-cream/75">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="h-4 w-4" fill="currentColor" />
                ))}
              </div>
              <figcaption className="mt-4 flex items-center gap-3 border-t border-gold/10 pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 font-display text-sm font-bold text-gold">
                  {testimonial.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-cream">
                    {testimonial.name}
                  </span>
                  <span className="block text-xs text-cream/50">{testimonial.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
