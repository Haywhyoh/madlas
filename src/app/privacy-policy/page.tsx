import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { LegalContent } from "@/components/sections/legal-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Read the ${siteConfig.name} privacy policy to understand how we collect, use, and protect your information.`,
  path: "/privacy-policy",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        crumb="Privacy Policy"
      />
      <LegalContent updated="September 2026">
        <p>
          This is placeholder legal content for design purposes. {siteConfig.name}{" "}
          respects your privacy and is committed to protecting any personal
          information submitted through this website.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We may collect contact details such as your name, email address,
          phone number, and company name when you submit an inquiry or quote
          request form.
        </p>
        <h2>How We Use Your Information</h2>
        <ul>
          <li>To respond to quote requests and general inquiries</li>
          <li>To provide updates about products and services</li>
          <li>To improve our website and customer experience</li>
        </ul>
        <h2>Contact Us</h2>
        <p>
          For any privacy-related questions, please contact us at{" "}
          {siteConfig.email}.
        </p>
      </LegalContent>
    </>
  );
}
