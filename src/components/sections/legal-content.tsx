import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

export function LegalContent({
  updated,
  children,
}: {
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">
          Last Updated: {updated}
        </p>
        <div className="prose-content mt-6 space-y-6 text-sm leading-relaxed text-ink/70 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_h2]:mt-8 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
          {children}
        </div>
      </Container>
    </section>
  );
}
