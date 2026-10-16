import Link from "next/link";
import { Container } from "@/components/ui/container";
import { MapEmbed } from "@/components/map-embed";
import { mapsSearchUrl, siteConfig } from "@/lib/site-config";

export const fabricationArticle = {
  title: "What is steel fabrication?",
  description:
    "Steel fabrication is a workshop process of cutting, fitting, welding, and finishing steel into finished units such as tankers, tanks, frames, and truck bodies.",
  author: "Alhaji A.O. Shorunke",
  authorPath: "/team",
};

const definitions = [
  {
    question: "What is steel fabrication?",
    answer:
      "Steel fabrication is a workshop process of cutting, fitting, welding, and finishing steel into a finished unit such as a tanker, storage tank, frame, or truck body.",
  },
  {
    question: "What is metal fabrication?",
    answer:
      "Metal fabrication is a workshop process that shapes metal, including steel, into parts and assemblies such as canopy members, tower sections, and vehicle bodies.",
  },
  {
    question: "What is steel construction?",
    answer:
      "Steel construction is a site process of erecting fabricated steel — portal frames, roof trusses, canopies, and towers — on a project.",
  },
  {
    question: "What is metal construction?",
    answer:
      "Metal construction is a site process of assembling metal structures, including steel canopies, platforms, filling stations, and frames.",
  },
];

const steps = [
  "Send the drawings, the site, and what you need built: a tanker, tank, frame, canopy, truck body, or tower.",
  "The Lagos office confirms span, load, access, and the finish the job needs.",
  "The workshop in Ilepa, Ifo cuts, welds, and paints the steel.",
  "Crews erect the steel on your site.",
  "You take handover of the finished fabrication, not a load of mill products.",
];

const comparison = [
  {
    label: "Where it happens",
    values: ["Ogun workshop", "Ogun workshop", "Your site", "Your site"],
  },
  {
    label: "Material",
    values: [
      "Steel plate, sections, and sheet",
      "Steel and other metals formed for the job",
      "Fabricated steel",
      "Fabricated metal, usually steel",
    ],
  },
  {
    label: "Typical Madlas job",
    values: [
      "Tankers, storage tanks, truck bodies",
      "Canopy steel, tower members, frames",
      "Portal frames, roof trusses, canopies",
      "Filling stations, platforms, towers",
    ],
  },
];

const columns = [
  "Steel fabrication",
  "Metal fabrication",
  "Steel construction",
  "Metal construction",
];

export function FabricationGuide() {
  const mapQuery = siteConfig.workshopMapQuery;
  const [year, month, day] = siteConfig.contentUpdated.split("-").map(Number);
  const published = new Date(year, month - 1, day).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="relative bg-cream py-20 sm:py-28" id="fabrication-guide">
      <div className="crawl-only" inert={true}>
        <article>
          <div className="rounded-2xl border border-gold/30 bg-ink p-7 text-cream sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              TL;DR
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
              Key takeaways
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-cream/75">
              Madlas Global is a steel fabrication company in Lagos. Steel
              fabrication and metal fabrication happen in the Ifo workshop in
              Ogun State. Steel construction and metal construction are the
              site erection of that steel for companies across Nigeria.
            </p>
            <p className="mt-5 text-sm text-cream/60">
              By{" "}
              <Link href={fabricationArticle.authorPath} className="text-gold hover:text-gold-light">
                {fabricationArticle.author}
              </Link>
              , CEO
              <span aria-hidden="true"> · </span>
              <time dateTime={siteConfig.contentUpdated}>Updated {published}</time>
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {definitions.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-ink/10 bg-white p-7"
              >
                <h2 className="text-2xl font-bold leading-tight text-ink">{item.question}</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-ink">
                How to start a fabrication job
              </h2>
              <ol className="mt-6 list-decimal space-y-4 pl-5 text-sm leading-relaxed text-ink/75">
                {steps.map((step) => (
                  <li key={step} className="pl-2">
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="text-3xl font-bold leading-tight text-ink">
                How does fabrication compare with construction?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                Steel fabrication is a workshop trade. Steel construction is
                the same steel put up on site. Madlas Global does both, from
                the Agege office and the Ifo workshop.
              </p>
              <p className="mt-4 text-sm text-ink/70">
                <Link href="/service-areas" className="font-semibold text-gold-dark hover:text-ink">
                  Service areas in Lagos and Ogun
                </Link>
                <span aria-hidden="true"> · </span>
                <Link href="/reviews" className="font-semibold text-gold-dark hover:text-ink">
                  Client comments
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-ink/10 bg-white">
            <table className="w-full min-w-[720px] text-left text-sm">
              <caption className="sr-only">
                Comparison of steel fabrication, metal fabrication, steel construction, and metal construction
              </caption>
              <thead className="bg-ink text-cream">
                <tr>
                  <th scope="col" className="px-4 py-4 font-display text-xs uppercase tracking-wide">
                    &nbsp;
                  </th>
                  {columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="px-4 py-4 font-display text-xs uppercase tracking-wide"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label} className="border-t border-ink/10">
                    <th scope="row" className="px-4 py-4 font-semibold text-ink">
                      {row.label}
                    </th>
                    {row.values.map((value, index) => (
                      <td key={`${row.label}-${index}`} className="px-4 py-4 text-ink/70">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </article>
      </div>

      <Container>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-ink">Workshop in Ilepa</h2>
          <p className="mt-3 text-sm text-ink/65">{mapQuery}</p>
          <MapEmbed
            title="Map of the Madlas Global workshop at Ilepa, Ogun State"
            query={mapQuery}
            className="mt-6 h-96"
          />
          <a
            href={mapsSearchUrl(mapQuery)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-semibold text-gold-dark hover:text-ink"
          >
            Open the workshop in Google Maps
          </a>
        </div>
      </Container>
    </section>
  );
}
