import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/json-ld";
import { serviceAreas } from "@/lib/service-areas";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { MapEmbed } from "@/components/map-embed";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Steel Fabrication Service Areas",
  description:
    "Madlas Global fabricates steel from a Lagos office in Agege and a workshop in Ifo, Ogun State, and erects it for companies across Nigeria.",
  path: "/service-areas",
  keywords: ["steel fabrication Lagos", "steel fabrication Ogun", "metal construction Nigeria"],
});

export default function ServiceAreasPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/service-areas" },
          ])
        )}
      />

      <PageHero
        eyebrow="Where we work"
        title="Service Areas for Steel Fabrication"
        description="Two places you can visit: the registered office in Alagbado, Lagos, and the workshop in Ilepa, Ifo, Ogun State. Site erection runs from those bases to companies in more than 20 states."
        crumb="Service Areas"
      />

      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <h2 className="max-w-2xl text-3xl font-bold text-ink">
            What is a Madlas service area?
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/70">
            A service area is a place we operate from, not a separate company.
            Steel fabrication is a workshop process in Ogun. Steel construction
            is the erection of that steel on your site. The Lagos office is
            where jobs are agreed.
          </p>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-ink/10 bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">
                Comparison of the Lagos office and the Ogun workshop
              </caption>
              <thead className="bg-ink text-cream">
                <tr>
                  <th scope="col" className="px-4 py-4 font-display text-xs uppercase tracking-wide">
                    &nbsp;
                  </th>
                  <th scope="col" className="px-4 py-4 font-display text-xs uppercase tracking-wide">
                    Lagos office
                  </th>
                  <th scope="col" className="px-4 py-4 font-display text-xs uppercase tracking-wide">
                    Ogun workshop
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Role", "Registered office and client meetings", "Cutting, welding, and painting"],
                  ["Area", "Alagbado, Agege", "Ilepa, Ifo"],
                  ["Address", `${siteConfig.address.street}`, `${siteConfig.factoryAddress.street}`],
                  ["Work", "Steel construction agreed for Lagos sites", "Steel fabrication and metal fabrication"],
                ].map((row) => (
                  <tr key={row[0]} className="border-t border-ink/10">
                    <th scope="row" className="px-4 py-4 font-semibold text-ink">
                      {row[0]}
                    </th>
                    <td className="px-4 py-4 text-ink/70">{row[1]}</td>
                    <td className="px-4 py-4 text-ink/70">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {serviceAreas.map((area) => (
              <article key={area.slug} className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
                <MapEmbed title={area.mapTitle} query={area.mapQuery} className="rounded-none border-0" />
                <div className="p-7">
                  <h2 className="text-2xl font-bold text-ink">
                    <Link href={`/service-areas/${area.slug}`} className="hover:text-gold-dark">
                      {area.h1}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{area.lede}</p>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="mt-5 inline-flex text-sm font-semibold text-gold-dark hover:text-ink"
                  >
                    {area.name} details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
