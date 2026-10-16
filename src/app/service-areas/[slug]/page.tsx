import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/json-ld";
import { getServiceArea, serviceAreas } from "@/lib/service-areas";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { MapEmbed } from "@/components/map-embed";
import { Button } from "@/components/ui/button";
import { mapsSearchUrl, whatsappUrl } from "@/lib/site-config";

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
    keywords: [
      `steel fabrication ${area.name}`,
      `metal fabrication ${area.name}`,
      `steel construction ${area.name}`,
    ],
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
            { name: area.name, path: `/service-areas/${area.slug}` },
          ])
        )}
      />

      <PageHero
        eyebrow={area.eyebrow}
        title={area.h1}
        description={area.lede}
        crumb={area.name}
        parents={[{ label: "Service Areas", href: "/service-areas" }]}
      />

      <section className="bg-cream py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-bold text-ink">What is the work in {area.name}?</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">{area.definition}</p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">{area.neighborhoods}</p>

            <h2 className="mt-10 text-3xl font-bold text-ink">How to start a job from {area.name}</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-ink/75">
              {area.steps.map((step) => (
                <li key={step} className="pl-2">
                  {step}
                </li>
              ))}
            </ol>

            <ul className="mt-8 space-y-3 text-sm text-ink/75">
              {area.points.map((point) => (
                <li key={point} className="rounded-xl border border-ink/10 bg-white px-4 py-3">
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={whatsappUrl()}>Request a quote</Button>
              <Button href="/services" variant="ghost">
                View fabrication services
              </Button>
            </div>
          </div>

          <div>
            <MapEmbed title={area.mapTitle} query={area.mapQuery} className="h-80" />
            <a
              href={mapsSearchUrl(area.mapQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-gold-dark hover:text-ink"
            >
              Open this location in Google Maps
            </a>
            {others.map((other) => (
              <p key={other.slug} className="mt-6 text-sm text-ink/70">
                Related:{" "}
                <Link
                  href={`/service-areas/${other.slug}`}
                  className="font-semibold text-gold-dark hover:text-ink"
                >
                  {other.h1}
                </Link>
              </p>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
