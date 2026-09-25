import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/icons/icon";
import { CtaBanner } from "@/components/sections/cta-banner";
import { projects } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Our Projects | Steel Fabrication & Supply Case Studies",
  description:
    "Explore recent Madlas Global projects across structural steel, pipelines, custom manufacturing, and sheet metal — delivered on time and to certified specification.",
  path: "/projects",
  keywords: ["steel projects", "steel fabrication case studies", "structural steel projects"],
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
        title="Projects Delivered Across the Globe"
        description="From harbor bridges to offshore pipelines, see how Madlas Global steel performs on some of the world's most demanding job sites."
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
                <div className="relative flex aspect-[4/3] items-center justify-center">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <Icon
                    name="beam"
                    className="h-14 w-14 text-gold/25 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
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
