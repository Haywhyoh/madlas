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
          description="Answers to the questions we hear most from builders, engineers, and procurement teams."
        />
        <Accordion items={faqs} />
      </Container>
    </section>
  );
}
