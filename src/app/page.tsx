import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { faqJsonLd, jsonLdScriptProps } from "@/lib/json-ld";
import { faqs } from "@/lib/data";
import { Hero } from "@/components/sections/hero";
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
import { BlogPreview } from "@/components/sections/blog-preview";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = buildMetadata({
  title: "Madlas Global | Premium Steel Manufacturing & Fabrication Company",
  description:
    "Madlas Global manufactures structural steel, pipes, tubes, and custom metal solutions for construction, energy, marine, and industrial clients in 25+ countries. Get a certified quote today.",
  path: "/",
  keywords: ["steel manufacturing company", "structural steel supplier", "steel fabrication near me"],
});

export default function HomePage() {
  return (
    <>
      <script {...jsonLdScriptProps(faqJsonLd(faqs))} />
      <Hero />
      <TrustTicker />
      <IntroAbout />
      <StatsBar />
      <ServicesGrid />
      <WhyChooseUs />
      <Industries />
      <Process />
      <Team />
      <Testimonials />
      <ProjectsShowcase />
      <BlogPreview />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
