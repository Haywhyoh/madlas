import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons/icon";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-ink py-24">
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
      <Container className="relative text-center">
        <p className="font-display text-8xl font-bold text-gold/20 sm:text-9xl">404</p>
        <div className="mx-auto -mt-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-ink text-gold">
          <Icon name="beam" className="h-6 w-6" />
        </div>
        <h1 className="mt-6 font-display text-2xl font-bold text-cream sm:text-3xl">
          This Page Has Been Decommissioned
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-cream/60 sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back on solid ground.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/">Back to Homepage</Button>
          <Button href="/contact" variant="secondary">
            Contact Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
