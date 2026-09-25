import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { LegalContent } from "@/components/sections/legal-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: `Review the terms and conditions for using the ${siteConfig.name} website and services.`,
  path: "/terms-of-service",
  noIndex: true,
});

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        crumb="Terms of Service"
      />
      <LegalContent updated="September 2026">
        <p>
          This is placeholder legal content for design purposes. By accessing
          this website, you agree to be bound by the following terms and
          conditions.
        </p>
        <h2>Use of Website</h2>
        <p>
          Content on this site is provided for general informational
          purposes about {siteConfig.name} and its products and services. It
          should not be relied upon as a substitute for formal engineering
          specifications or contractual documentation.
        </p>
        <h2>Quotes &amp; Orders</h2>
        <p>
          All quotes provided through this website are estimates only and
          subject to confirmation via a formal sales order.
        </p>
        <h2>Contact Us</h2>
        <p>
          Questions about these terms can be directed to {siteConfig.email}.
        </p>
      </LegalContent>
    </>
  );
}
