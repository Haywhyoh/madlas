import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons/icon";
import { siteConfig } from "@/lib/site-config";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-gold-dark via-gold to-gold-light py-16">
      <div className="absolute inset-0 bg-diagonal opacity-20" aria-hidden="true" />
      <Container className="relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
        <div>
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Ready to Build with Steel You Can Trust?
          </h2>
          <p className="mt-2 max-w-xl text-sm text-ink/70 sm:text-base">
            Talk to our engineering team about your project specifications and
            get a certified quote within 24 hours.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" variant="primary" className="!bg-ink !text-cream hover:!bg-ink-soft">
            Request a Quote
          </Button>
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink hover:bg-ink/10"
          >
            <Icon name="phone" className="h-4 w-4" />
            {siteConfig.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
