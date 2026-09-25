import Link from "next/link";
import { Logo } from "@/components/logo";
import { Icon, type IconName } from "@/components/icons/icon";
import { Container } from "@/components/ui/container";
import { navLinks, siteConfig } from "@/lib/site-config";
import { services } from "@/lib/data";

const socialLinks: { name: string; href: string; icon: IconName }[] = [
  { name: "Facebook", href: siteConfig.social.facebook, icon: "facebook" },
  { name: "Twitter", href: siteConfig.social.twitter, icon: "twitter" },
  { name: "LinkedIn", href: siteConfig.social.linkedin, icon: "linkedin" },
  { name: "Instagram", href: siteConfig.social.instagram, icon: "instagram" },
  { name: "YouTube", href: siteConfig.social.youtube, icon: "youtube" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/10 bg-ink text-cream">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Logo dark />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
            {siteConfig.description}
          </p>
          <ul className="mt-6 flex items-center gap-3">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 text-gold transition hover:bg-gold hover:text-ink"
                >
                  <Icon name={social.icon} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-cream/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Our services">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold">
            Our Services
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-cream/70">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link href={`/services#${service.slug}`} className="transition hover:text-gold">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold">
            Get In Touch
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-cream/70">
            <li className="flex gap-3">
              <Icon name="map-pin" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
              <span>
                {siteConfig.address.street}, {siteConfig.address.city}{" "}
                {siteConfig.address.region}, {siteConfig.address.postalCode}
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="phone" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
              <span className="flex flex-col gap-1">
                <a href={`tel:${siteConfig.phoneHref}`} className="transition hover:text-gold">
                  {siteConfig.phone}
                </a>
                <a href={`tel:${siteConfig.phoneSecondaryHref}`} className="transition hover:text-gold">
                  {siteConfig.phoneSecondary}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
              <a href={`mailto:${siteConfig.email}`} className="transition hover:text-gold">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="clock" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
              <span>Mon - Sat: 8:00am - 6:00pm</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-gold/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/50 sm:flex-row">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-gold">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-gold">
              Sitemap
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
