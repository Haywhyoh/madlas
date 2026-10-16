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
  title: "Madlas Global | Steel Fabrication Company in Nigeria",
  description:
    "Madlas Global Investment Company is a steel fabrication company in Nigeria. We have worked with companies across 20+ states — tankers, tanks, structures, canopies, and site erection.",
  path: "/",
  absolute: true,
  keywords: [
    "steel fabrication company Nigeria",
    "steel fabricators in Nigeria",
    "fuel tanker fabrication Nigeria",
    "filling station construction Nigeria",
  ],
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
      <Team showViewAll />
      <Testimonials />
      <ProjectsShowcase />
      <BlogPreview />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
