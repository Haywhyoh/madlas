import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons/icon";
import { projects } from "@/lib/data";

export function ProjectsShowcase() {
  const featured = projects.slice(0, 4);

  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Our Work in Action"
            title="Recent Projects Delivered Worldwide"
            description="A look at some of the structural, piping, and custom fabrication projects our team has recently completed."
          />
          <Button href="/projects" variant="ghost" className="hidden sm:inline-flex">
            View All Projects
          </Button>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects#${project.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-ink"
            >
              <div className="relative flex aspect-[16/10] items-center justify-center">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <Icon
                  name="beam"
                  className="h-16 w-16 text-gold/25 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="inline-flex items-center rounded-full bg-gold px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-ink">
                  {project.category}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-cream">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-cream/60">
                  {project.location} · {project.year}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <Button href="/projects" variant="ghost">
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
