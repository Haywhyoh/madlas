import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/icons/icon";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Blog | Steel Industry Insights, Tips & Company News",
  description:
    "Read the latest insights from Madlas Global on steel grades, quality certification, sustainable manufacturing, and global logistics from our engineering team.",
  path: "/blog",
  keywords: ["steel industry blog", "steel manufacturing insights", "steel news"],
});

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ])
        )}
      />

      <PageHero
        eyebrow="Insights & News"
        title="Steel Industry Tips, Trends & Company News"
        description="Practical guidance and industry insight from the engineers and operators who run Madlas Global's plants every day."
        crumb="Blog"
      />

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition hover:border-gold/40 hover:shadow-lg"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative flex aspect-[16/10] items-center justify-center bg-ink"
                >
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
                  <h2 className="mt-3 font-display text-lg font-bold leading-snug text-ink">
                    <Link href={`/blog/${post.slug}`} className="hover:text-gold-dark">
                      {post.title}
                    </Link>
                  </h2>
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
        </Container>
      </section>
    </>
  );
}
