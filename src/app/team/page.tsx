import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { Team } from "@/components/sections/team";
import { CtaBanner } from "@/components/sections/cta-banner";
import { remainingTeam } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Our Team | Madlas Global Leadership & Operations",
  description:
    "Meet the Madlas Global team behind our steel fabrication, procurement, workshop, and project coordination — the people who keep every certified job on schedule.",
  path: "/team",
  keywords: ["Madlas Global team", "steel fabrication leadership", "workshop managers Nigeria"],
});

export default function TeamPage() {
  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Team", path: "/team" },
          ])
        )}
      />

      <PageHero
        eyebrow="Our Team"
        title="The People Behind Every Project"
        description="From procurement and workshop management to project coordination and administration — meet the wider Madlas Global team."
        crumb="Team"
      />

      <Team
        members={remainingTeam}
        eyebrow="Operations Team"
        title="Supporting Every Job From Bid to Delivery"
        description="The specialists who keep fabrication, procurement, and site coordination running day to day."
      />

      <CtaBanner />
    </>
  );
}
