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
  title: "Steel Fabrication Company Locations",
  description:
    "Steel fabrication company pages for Ifo, Lagos, Ogun State, Sango, Agege, and Nigeria. Workshop in Ilepa. Steel construction on your site.",
  path: "/service-areas",
  keywords: [
    "steel fabrication company in Ifo",
    "steel fabrication company in Lagos",
    "steel fabrication company in Nigeria",
    "steel fabrication company in Ogun State",
    "steel fabrication company in Sango",
    "steel fabrication company in Agege",
    "steel construction company in Nigeria",
  ],
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
        title="Steel Fabrication and Steel Construction Locations"
        description="The office and workshop are in Ilepa, Ifo, Ogun State. These pages explain steel fabrication and steel construction for Ifo, Lagos, Sango, Agege, Ogun State, and Nigeria."
        crumb="Service Areas"
      />

      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <h2 className="max-w-2xl text-3xl font-bold text-ink">
            One workshop. Steel construction on your site.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/70">
            Madlas Global is a steel fabrication company. Cutting, welding, and
            painting happen at Km 30, Abeokuta / Lagos Expressway, Ilepa, Ifo.
            Steel construction is the erection of that steel on the site you
            name, in Ifo, across Lagos and Ogun, and for companies in more than
            20 states.
          </p>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-ink/10 bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">
                The office and workshop in Ilepa, and erection on the client site
              </caption>
              <thead className="bg-ink text-cream">
                <tr>
                  <th scope="col" className="px-4 py-4 font-display text-xs uppercase tracking-wide">
                    &nbsp;
                  </th>
                  <th scope="col" className="px-4 py-4 font-display text-xs uppercase tracking-wide">
                    Office and workshop
                  </th>
                  <th scope="col" className="px-4 py-4 font-display text-xs uppercase tracking-wide">
                    Your site
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Role", "Meetings, cutting, welding, and painting", "Erection and handover"],
                  ["Area", "Ilepa, Ifo, Ogun State", "Ifo, Lagos, Sango, Agege, and other states"],
                  ["Address", siteConfig.address.street, "The project address"],
                  ["Work", "Steel fabrication and metal fabrication", "Steel construction and metal construction"],
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

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <MapEmbed
              title="Map of the Madlas Global office and workshop in Ilepa, Ifo"
              src={siteConfig.workshopMapEmbed}
              className="h-80"
            />
            <div>
              <h2 className="text-2xl font-bold text-ink">Choose the place the site is in</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Each page is written for that place: how far the workshop is, what
                companies there usually order, and how steel construction is erected
                after fabrication in Ifo.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {serviceAreas.map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={`/service-areas/${area.slug}`}
                      className="block h-full rounded-2xl border border-ink/10 bg-white p-5 transition hover:border-gold/50"
                    >
                      <h3 className="text-lg font-bold leading-snug text-ink">{area.h1}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/65">{area.summary}</p>
                      <span className="mt-3 inline-flex text-sm font-semibold text-gold-dark">
                        {area.name} details
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
