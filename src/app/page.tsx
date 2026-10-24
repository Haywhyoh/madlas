import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd, jsonLdScriptProps, webPageJsonLd } from "@/lib/json-ld";
import { faqs } from "@/lib/data";
import { fabricationArticle, FabricationGuide } from "@/components/sections/fabrication-guide";
import { Hero } from "@/components/sections/hero";
import { siteConfig } from "@/lib/site-config";
import { TrustTicker } from "@/components/sections/trust-ticker";
import { IntroAbout } from "@/components/sections/intro-about";
import { StatsBar } from "@/components/sections/stats-bar";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Industries } from "@/components/sections/industries";
import { Process } from "@/components/sections/process";
import { Team } from "@/components/sections/team";
import { Testimonials } from "@/components/sections/testimonials";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";
import { LocationsStrip } from "@/components/sections/locations-strip";
import { BlogPreview } from "@/components/sections/blog-preview";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = buildMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
  absolute: true,
  keywords: [
    "steel fabrication",
    "metal fabrication",
    "steel construction",
    "metal construction",
    "steel fabrication Lagos",
    "metal fabrication Lagos",
  ],
});

export default function HomePage() {
  return (
    <>
      <script {...jsonLdScriptProps(faqJsonLd(faqs))} />
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([{ name: "Home", path: "/" }])
        )}
      />
      <script
        {...jsonLdScriptProps(
          webPageJsonLd({
            title: siteConfig.title,
            description: siteConfig.description,
            path: "/",
            dateModified: siteConfig.contentUpdated,
          })
        )}
      />
      <script
        {...jsonLdScriptProps(
          articleJsonLd({
            title: fabricationArticle.title,
            description: fabricationArticle.description,
            path: "/",
            image: siteConfig.ogImage,
            datePublished: siteConfig.contentUpdated,
            dateModified: siteConfig.contentUpdated,
            author: fabricationArticle.author,
            authorUrl: fabricationArticle.authorPath,
          })
        )}
      />
      <Hero />
      <TrustTicker />
      <IntroAbout />
      <StatsBar />
      <ServicesGrid />
      <WhyChooseUs />
      <Industries />
      <Process />
      <Team showViewAll />
      <Testimonials />
      <ProjectsShowcase />
      <LocationsStrip />
      <BlogPreview />
      <FaqSection />
      <CtaBanner />
      <FabricationGuide />
    </>
  );
}
