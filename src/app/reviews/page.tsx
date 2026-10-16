import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/json-ld";
import { testimonials } from "@/lib/data";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { mapsSearchUrl, placeQuery, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Client Comments",
  description:
    "Comments from companies that hired Madlas Global for steel fabrication, metal fabrication, and steel construction in Nigeria.",
  path: "/reviews",
  keywords: ["Madlas Global reviews", "steel fabrication testimonials"],
});

export default function ReviewsPage() {
  const mapsUrl = mapsSearchUrl(placeQuery(siteConfig.address));

  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Client Comments", path: "/reviews" },
          ])
        )}
      />

      <PageHero
        eyebrow="Client comments"
        title="What Companies Say About the Fabrication"
        description="These comments were given to our project team by companies we have fabricated and erected steel for. They are not copied from another website."
        crumb="Client Comments"
      />

      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <h2 className="text-3xl font-bold text-ink">What did clients say about the work?</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="flex flex-col rounded-2xl border border-ink/10 bg-white p-7"
              >
                <blockquote className="flex-1 text-sm leading-relaxed text-ink/75">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-ink/10 pt-4">
                  <span className="block text-sm font-semibold text-ink">{testimonial.name}</span>
                  <span className="mt-1 block text-xs text-ink/55">{testimonial.role}</span>
                  <span className="mt-2 block text-xs font-semibold uppercase tracking-wide text-gold-dark">
                    Client comment
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-ink/10 bg-white p-7">
            <h2 className="text-2xl font-bold text-ink">Where can you find the Lagos office?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/70">
              Google has not given us a public star rating to display. Use Google
              Maps to cross-check the Agege office at {siteConfig.address.street},{" "}
              {siteConfig.address.city}, {siteConfig.address.region}.
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex text-sm font-semibold text-gold-dark hover:text-ink"
            >
              Open the Lagos office in Google Maps
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
