import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { CtaBanner } from "@/components/sections/cta-banner";
import { projects } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Our Projects | Tankers, Structures, Stations & Towers",
  description:
    "Recent Madlas Global jobs: fuel tanker trailers, the Northwest filling station, warehouse frames, storage tanks, box van bodies, and elevated tower platforms.",
  path: "/projects",
  keywords: ["steel fabrication projects", "filling station construction", "tanker trailer fabrication"],
});

export default function ProjectsPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ])
        )}
      />

      <PageHero
        eyebrow="Our Portfolio"
        title="Recent Fabrication and Site Work"
        description="Tankers, filling stations, roof trusses, storage tanks, truck bodies, and elevated towers from jobs we have fabricated and erected."
        crumb="Projects"
      />

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.slug}
                id={project.slug}
                className="group overflow-hidden rounded-2xl border border-ink/10 bg-ink transition hover:border-gold/40"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-ink">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-lg font-bold text-cream">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-xs uppercase tracking-wide text-gold/70">
                    {project.location} · {project.year}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-cream/60">
                    {project.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
