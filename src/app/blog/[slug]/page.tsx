import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { articleJsonLd, breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/json-ld";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/icons/icon";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [post.category],
  });
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <script
        {...jsonLdScriptProps(
          articleJsonLd({
            title: post.title,
            description: post.excerpt,
            path: `/blog/${post.slug}`,
            image: "/images/og-cover.jpg",
            datePublished: post.date,
            author: post.author,
          })
        )}
      />
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ])
        )}
      />

      <article className="relative overflow-hidden bg-ink pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-cream/50">
            <Link href="/" className="hover:text-gold">Home</Link>
            <Icon name="arrow-right" className="h-3 w-3" />
            <Link href="/blog" className="hover:text-gold">Blog</Link>
            <Icon name="arrow-right" className="h-3 w-3" />
            <span className="text-gold">{post.category}</span>
          </nav>

          <span className="inline-flex rounded-full bg-gold px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-ink">
            {post.category}
          </span>

          <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-cream sm:text-4xl md:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-4 text-sm text-cream/60">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 font-display text-xs font-bold text-gold">
              {post.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
            <span>{post.author}</span>
            <span>·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </Container>
      </article>

      <section className="bg-cream py-16 sm:py-20">
        <Container className="grid gap-14 lg:grid-cols-[1fr_0.4fr]">
          <div className="prose-content max-w-none">
            <p className="text-lg leading-relaxed text-ink/75">{post.excerpt}</p>

            <p className="mt-6 leading-relaxed text-ink/70">
              At Madlas Global, every recommendation we make is grounded in
              decades of hands-on manufacturing experience. Our engineering
              and quality assurance teams work directly with clients to
              translate project requirements into certified, deliverable
              specifications — whether that means selecting the right steel
              grade, validating a mill test report, or planning logistics
              for a multi-country shipment.
            </p>

            <h2 className="mt-10 font-display text-2xl font-bold text-ink">
              Why This Matters for Your Project
            </h2>
            <p className="mt-4 leading-relaxed text-ink/70">
              Getting these decisions right upfront prevents costly delays,
              structural risk, and compliance issues later in a
              project&apos;s lifecycle. Our team is available to review your
              drawings and specifications at no cost — reach out and
              we&apos;ll respond within one business day.
            </p>

            <blockquote className="mt-8 border-l-4 border-gold bg-white p-6 text-base italic text-ink/70">
              &ldquo;Quality steel isn&apos;t just about the material —
              it&apos;s about the process, the testing, and the people
              behind it.&rdquo; — {post.author}, Madlas Global
            </blockquote>

            <h2 className="mt-10 font-display text-2xl font-bold text-ink">
              Talk to Our Engineering Team
            </h2>
            <p className="mt-4 leading-relaxed text-ink/70">
              Have a project you&apos;d like to discuss? Our team can help
              you select the right materials, grades, and finishing for your
              application.
            </p>

            <div className="mt-8">
              <Button href="/contact">Contact Our Team</Button>
            </div>
          </div>

          <aside>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold-dark">
              More Articles
            </h3>
            <ul className="mt-5 space-y-5">
              {related.map((item) => (
                <li key={item.slug} className="border-b border-ink/10 pb-5 last:border-0">
                  <Link href={`/blog/${item.slug}`} className="group">
                    <p className="font-display text-sm font-bold leading-snug text-ink group-hover:text-gold-dark">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-ink/50">
                      {formatDate(item.date)} · {item.readTime}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>
    </>
  );
}
