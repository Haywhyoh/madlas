import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons/icon";
import { blogPosts } from "@/lib/data";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogPreview() {
  const featured = blogPosts.slice(0, 3);

  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Insights & News"
            title="Steel Industry Tips, Trends & Insights"
            description="Practical guidance from our engineers on materials, quality, and manufacturing best practices."
          />
          <Button href="/blog" variant="ghost" className="hidden sm:inline-flex">
            Visit The Blog
          </Button>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {featured.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition hover:border-gold/40 hover:shadow-lg"
            >
              <Link href={`/blog/${post.slug}`} className="relative flex aspect-[16/10] items-center justify-center bg-ink">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <Icon name="layers" className="h-12 w-12 text-gold/30" />
                <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-ink">
                  {post.category}
                </span>
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs text-ink/45">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink">
                  <Link href={`/blog/${post.slug}`} className="hover:text-gold-dark">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark"
                >
                  Read Article
                  <Icon
                    name="arrow-right"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <Button href="/blog" variant="ghost">
            Visit The Blog
          </Button>
        </div>
      </Container>
    </section>
  );
}
