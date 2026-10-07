import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  jsonLdScriptProps,
  serviceJsonLd,
} from "@/lib/json-ld";
import { Container } from "@/components/ui/container";
import { Icon, type IconName } from "@/components/icons/icon";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import { services } from "@/lib/data";

type Params = { slug: string };

const iconMap: Record<string, IconName> = {
  beam: "beam",
  pipe: "pipe",
  gear: "gear",
  layers: "layers",
  shield: "shield",
  certificate: "certificate",
  building: "building",
  flame: "flame",
  truck: "truck",
};

function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function generateStaticParams(): Params[] {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: [service.primaryKeyword, ...service.secondaryKeywords],
    image: service.images[0]?.src,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const galleryImages = service.images.slice(1);

  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ])
        )}
      />
      <script
        {...jsonLdScriptProps(
          serviceJsonLd({
            name: service.title,
            description: service.description,
            path: `/services/${service.slug}`,
          })
        )}
      />
      <script {...jsonLdScriptProps(faqJsonLd(service.faqs))} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0">
          <Image
            src={service.images[0].src}
            alt={service.images[0].alt}
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/70" />
          <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
        </div>

        <Container className="relative">
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-cream/50"
          >
            <Link href="/" className="hover:text-gold">
              Home
            </Link>
            <Icon name="arrow-right" className="h-3 w-3" />
            <Link href="/services" className="hover:text-gold">
              Services
            </Link>
            <Icon name="arrow-right" className="h-3 w-3" />
            <span className="text-gold">{service.title}</span>
          </nav>

          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            <span className="h-px w-8 bg-gold" />
            {service.primaryKeyword}
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-cream sm:text-5xl">
            {service.title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/70 sm:text-lg">
            {service.shortDescription}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/contact">Request a Quote</Button>
            <Button href="/services" variant="secondary">
              View All Services
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {service.points.map((point) => (
              <span
                key={point}
                className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-ink-soft/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cream/80"
              >
                <Icon name="check" className="h-3.5 w-3.5 text-gold" strokeWidth={2.5} />
                {point}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="bg-cream py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
              <span className="h-px w-8 bg-gold-dark" />
              Overview
            </div>
            <h2 className="max-w-xl text-3xl font-bold leading-tight text-ink sm:text-4xl">
              {service.title}
            </h2>
            {service.overview.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="mt-5 max-w-xl text-base leading-relaxed text-ink/65"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-9">
              <Button href="/contact" variant="ghost">
                Discuss Your Project
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-ink/10 bg-ink-soft">
            <Image
              src={service.images[Math.min(1, service.images.length - 1)].src}
              alt={service.images[Math.min(1, service.images.length - 1)].alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            <div className="absolute -bottom-6 -left-4 flex w-52 max-w-[calc(100%-1rem)] items-center gap-3 rounded-2xl border border-gold/20 bg-ink p-4 shadow-2xl sm:-bottom-8 sm:-left-6 sm:w-60 sm:gap-4 sm:p-5">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gold text-ink sm:h-14 sm:w-14">
                <Icon name={iconMap[service.icon]} className="h-5 w-5 sm:h-7 sm:w-7" />
              </div>
              <div>
                <p className="font-display text-base font-bold text-cream sm:text-lg">
                  ISO 9001:2015
                </p>
                <p className="text-xs uppercase tracking-wide text-cream/55">
                  Certified Workshop
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
        <div className="absolute inset-0 bg-diagonal opacity-30" aria-hidden="true" />
        <Container className="relative">
          <div className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            <span className="h-px w-8 bg-gold" />
            What&apos;s Included
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold leading-tight text-cream sm:text-4xl">
            Everything Covered in This Service
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gold/15 bg-ink-soft/70 p-6 transition hover:border-gold/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Icon name="check" className="h-5 w-5" strokeWidth={2.5} />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-cream">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/55">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Specifications + Applications */}
      <section className="bg-cream py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-2">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
              <span className="h-px w-8 bg-gold-dark" />
              Specification Sheet
            </div>
            <h2 className="text-2xl font-bold leading-tight text-ink sm:text-3xl">
              Built to Your Requirements
            </h2>
            <dl className="mt-7 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white">
              {service.specifications.map((spec) => (
                <div
                  key={spec.label}
                  className="grid grid-cols-[0.9fr_1.1fr] gap-4 px-6 py-4"
                >
                  <dt className="text-sm font-semibold text-ink/80">{spec.label}</dt>
                  <dd className="text-sm leading-relaxed text-ink/60">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
              <span className="h-px w-8 bg-gold-dark" />
              Applications
            </div>
            <h2 className="text-2xl font-bold leading-tight text-ink sm:text-3xl">
              Where This Service Is Used
            </h2>
            <ul className="mt-7 space-y-3">
              {service.applications.map((application) => (
                <li
                  key={application}
                  className="flex items-start gap-3 rounded-xl border border-ink/10 bg-white px-5 py-4 text-sm text-ink/75"
                >
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                    <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  {application}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
        <Container className="relative">
          <div className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Our Process
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold leading-tight text-cream sm:text-4xl">
            From Workshop to Site
          </h2>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="relative rounded-2xl border border-gold/15 bg-ink-soft/70 p-7">
                  <span className="font-display text-5xl font-bold text-gold/20">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-cream">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-cream/55">
                    {step.description}
                  </p>
                </div>
                {index < service.process.length - 1 && (
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

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <section className="bg-cream py-20 sm:py-28">
          <Container>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
              <span className="h-px w-8 bg-gold-dark" />
              From the Workshop & Site
            </div>
            <h2 className="max-w-xl text-3xl font-bold leading-tight text-ink sm:text-4xl">
              {service.title} in Progress
            </h2>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink/10 bg-ink"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQs */}
      <section className="bg-cream py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
              <span className="h-px w-8 bg-gold-dark" />
              FAQs
            </div>
            <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Common Questions
            </h2>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-ink/65">
              Answers specific to our {service.title.toLowerCase()} work. Still
              have a question? Get in touch.
            </p>
            <div className="mt-7">
              <Button href="/contact" variant="ghost">
                Ask Our Team
              </Button>
            </div>
          </div>
          <Accordion items={service.faqs} />
        </Container>
      </section>

      {/* Related services */}
      <section className="border-t border-ink/10 bg-white py-20 sm:py-28">
        <Container>
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold-dark">
            <span className="h-px w-8 bg-gold-dark" />
            Related Services
          </div>
          <h2 className="max-w-xl text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Explore More of Our Work
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group overflow-hidden rounded-2xl border border-ink/10 bg-ink transition hover:border-gold/40"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.images[0].src}
                    alt={item.images[0].alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="flex items-start gap-3 p-5">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <Icon name={iconMap[item.icon]} className="h-4 w-4" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-cream">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
