import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/icons/icon";

export function PageHero({
  eyebrow,
  title,
  description,
  crumb,
  parents = [],
}: {
  eyebrow: string;
  title: string;
  description?: string;
  crumb: string;
  parents?: { label: string; href: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
      <div
        className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-gold/15 blur-[130px]"
        aria-hidden="true"
      />
      <Container className="relative">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-cream/50">
          <Link href="/" className="hover:text-gold">
            Home
          </Link>
          {parents.map((parent) => (
            <span key={parent.href} className="flex items-center gap-2">
              <Icon name="arrow-right" className="h-3 w-3" />
              <Link href={parent.href} className="hover:text-gold">
                {parent.label}
              </Link>
            </span>
          ))}
          <Icon name="arrow-right" className="h-3 w-3" />
          <span className="text-gold">{crumb}</span>
        </nav>

        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          <span className="h-px w-8 bg-gold" />
          {eyebrow}
        </div>

        <h1 className="max-w-2xl text-4xl font-bold leading-tight text-cream sm:text-5xl">
          {title}
        </h1>

        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/65 sm:text-lg">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
