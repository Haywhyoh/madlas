import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import {
  areaServiceJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  jsonLdScriptProps,
} from "@/lib/json-ld";
import { services } from "@/lib/data";
import { getServiceArea, serviceAreas } from "@/lib/service-areas";
import { Container } from "@/components/ui/container";
import { MapEmbed } from "@/components/map-embed";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { Icon } from "@/components/icons/icon";
import { CtaBanner } from "@/components/sections/cta-banner";
import { mapsSearchUrl, siteConfig, whatsappUrl } from "@/lib/site-config";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) return {};

  return buildMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/service-areas/${area.slug}`,
    keywords: area.keywords,
    image: area.heroImage.src,
  });
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) notFound();

  const others = serviceAreas.filter((item) => item.slug !== area.slug);

  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/service-areas" },
            { name: area.h1, path: `/service-areas/${area.slug}` },
          ])
        )}
      />
      <script
        {...jsonLdScriptProps(
          areaServiceJsonLd({
            name: area.name,
            description: area.metaDescription,
            path: `/service-areas/${area.slug}`,
            placeType: area.placeType,
            placeName: area.placeName,
          })
        )}
      />
      <script {...jsonLdScriptProps(faqJsonLd(area.faqs))} />

      <section className="relative overflow-hidden bg-ink pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0">
          <Image
            src={area.heroImage.src}
            alt={area.heroImage.alt}
            fill
            priority
            className="object-cover opacity-30"
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
            <Link href="/service-areas" className="hover:text-gold">
              Service Areas
            </Link>
            <Icon name="arrow-right" className="h-3 w-3" />
            <span className="text-gold">{area.name}</span>
          </nav>

          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            <span className="h-px w-8 bg-gold" />
            {area.eyebrow}
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-cream sm:text-5xl">
            {area.h1}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/70 sm:text-lg">
            {area.lede}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href={whatsappUrl()}>Request a Quote</Button>
            <Button href="/contact" variant="secondary">
              Contact the Workshop
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            {area.overview.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-base leading-relaxed text-ink/75 first:mt-0">
                {paragraph}
              </p>
            ))}
            <p className="mt-4 text-base leading-relaxed text-ink/75">{area.localContext}</p>
          </div>

          <aside className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8">
            <h2 className="text-lg font-bold text-ink">Workshop for {area.name}</h2>
            <ul className="mt-5 space-y-4 text-sm text-ink/75">
              <li className="flex gap-3">
                <Icon name="map-pin" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-dark" />
                <span>
                  {siteConfig.legalName}
                  <br />
                  {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.region},{" "}
                  {siteConfig.address.country}
                </span>
              </li>
              <li className="flex gap-3">
                <Icon name="phone" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-dark" />
                <span className="flex flex-col gap-1">
                  <a href={`tel:${siteConfig.phoneHref}`} className="font-semibold text-ink hover:text-gold-dark">
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`tel:${siteConfig.phoneSecondaryHref}`}
                    className="font-semibold text-ink hover:text-gold-dark"
                  >
                    {siteConfig.phoneSecondary}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Icon name="clock" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-dark" />
                <span>Monday to Saturday, 8:00am – 6:00pm</span>
              </li>
            </ul>
            <ul className="mt-6 space-y-3">
              {area.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-ink/75">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                    <Icon name="check" className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-ink/10 bg-cream p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-dark">Fabrication</p>
            <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">{area.fabricationTitle}</h2>
            {area.fabrication.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-sm leading-relaxed text-ink/75 sm:text-base">
                {paragraph}
              </p>
            ))}
          </article>
          <article className="rounded-2xl border border-ink/10 bg-ink p-7 text-cream sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Construction</p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{area.constructionTitle}</h2>
            {area.construction.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-sm leading-relaxed text-cream/70 sm:text-base">
                {paragraph}
              </p>
            ))}
          </article>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <h2 className="max-w-2xl text-3xl font-bold text-ink">
            Steelwork we fabricate for {area.name}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/70">
            Every service below is built at the Ilepa workshop and can be erected on a {area.name} site.
            Open a service to see the process, specifications, and workshop photos.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 transition hover:border-gold/50 hover:shadow-lg"
                >
                  <h3 className="text-lg font-bold text-ink">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{service.shortDescription}</p>
                  <span className="mt-4 text-sm font-semibold text-gold-dark">View this service</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <h2 className="text-3xl font-bold text-ink">Work from the Ifo workshop</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/70">
            These are Madlas jobs: tankers and tanks from the yard, and frames, canopies, and towers
            erected on site. {area.name} jobs are built the same way.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {area.gallery.map((image) => (
              <li key={image.src} className="overflow-hidden rounded-2xl border border-ink/10 bg-ink">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-ink">How a {area.name} job starts</h2>
            <ol className="mt-8 space-y-6">
              {area.steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={whatsappUrl()}>Request a quote</Button>
              <Button href="/projects" variant="ghost">
                See fabricated work
              </Button>
            </div>
          </div>
          <div>
            <MapEmbed title={area.mapTitle} src={area.mapEmbed} query={area.mapQuery} className="h-80" />
            <p className="mt-4 text-sm leading-relaxed text-ink/70">
              This pin is the office and workshop in Ilepa, Ifo. Steel for {area.name} is fabricated here.
            </p>
            <a
              href={area.mapEmbed ? siteConfig.googleListing : mapsSearchUrl(area.mapQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex text-sm font-semibold text-gold-dark hover:text-ink"
            >
              Open the workshop in Google Maps
            </a>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-bold text-ink">Questions about steel fabrication in {area.name}</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/65">
              Fabrication, steel construction, and how to reach the Ilepa workshop.
            </p>
          </div>
          <Accordion items={area.faqs} />
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-cream py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-bold text-ink">Other places we fabricate and erect steel</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/service-areas/${other.slug}`}
                  className="block rounded-xl border border-ink/10 bg-white px-5 py-4 transition hover:border-gold/50"
                >
                  <span className="font-semibold text-ink">{other.h1}</span>
                  <span className="mt-1 block text-sm text-ink/60">{other.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
