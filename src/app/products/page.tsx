import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Icon, type IconName } from "@/components/icons/icon";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";
import { products } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Steel Products | Beams, Pipes, Plates & Coated Coil",
  description:
    "Browse Madlas Global's steel product range: structural beams, seamless pipes, hot-rolled plate, rebar, galvanized coil, and custom fabricated assemblies — all certified and export-ready.",
  path: "/products",
  keywords: ["steel products", "steel beams supplier", "steel pipe products", "rebar supplier"],
});

const iconMap: Record<string, IconName> = {
  beam: "beam",
  pipe: "pipe",
  gear: "gear",
  layers: "layers",
  shield: "shield",
  certificate: "certificate",
};

export default function ProductsPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
          ])
        )}
      />

      <PageHero
        eyebrow="Our Products"
        title="Certified Steel Products, Ready to Ship"
        description="A comprehensive catalog of structural, piping, and coated steel products manufactured to international standards and ready for export."
        crumb="Products"
      />

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.slug}
                id={product.slug}
                className="flex flex-col rounded-2xl border border-ink/10 bg-white p-7 transition hover:border-gold/40 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-gold">
                    <Icon name={iconMap[product.icon]} className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-gold/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-gold-dark">
                    {product.category}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-lg font-bold text-ink">
                  {product.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {product.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-ink/10 pt-4">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2 text-xs text-ink/60">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gold" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button href="/contact" variant="ghost" className="w-full justify-center">
                    Request Pricing
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
