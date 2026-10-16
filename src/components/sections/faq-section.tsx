import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

export function FaqSection() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="FAQs"
          title="Frequently Asked Questions"
          description="Who Madlas is, what we fabricate, and where in Nigeria we have worked."
        />
        <Accordion items={faqs} />
      </Container>
    </section>
  );
}
