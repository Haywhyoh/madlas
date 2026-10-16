import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, jsonLdScriptProps } from "@/lib/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { Team } from "@/components/sections/team";
import { CtaBanner } from "@/components/sections/cta-banner";
import { team } from "@/lib/data";

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
        title="The Madlas Global Fabrication Team"
        description="Leadership, design, procurement, workshop, and administration at Madlas Global Investment Company."
        crumb="Team"
      />

      <Team
        members={team}
        eyebrow="Full Team"
        title="Leadership & Operations"
        description="The people who keep fabrication, procurement, and site coordination running from bid to delivery."
      />

      <CtaBanner />
    </>
  );
}
