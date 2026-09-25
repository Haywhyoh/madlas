"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { Icon } from "@/components/icons/icon";
import { Container } from "@/components/ui/container";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/95 backdrop-blur-md shadow-[0_4px_30px_-10px_rgba(0,0,0,0.5)]"
          : "bg-ink"
      } border-b border-gold/10`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo dark />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-semibold uppercase tracking-wide transition-colors ${
                  active ? "text-gold" : "text-cream/85 hover:text-gold"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-gold" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="flex items-center gap-2 text-sm font-semibold text-cream/85 hover:text-gold"
          >
            <Icon name="phone" className="h-4 w-4 text-gold" />
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-ink transition hover:bg-gold-light"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-gold/40 text-gold lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </Container>

      {open && (
        <div className="border-t border-gold/10 bg-ink lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-wide ${
                  pathname === link.href
                    ? "bg-gold/10 text-gold"
                    : "text-cream/85 hover:bg-gold/5 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-gold px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-ink"
            >
              Get a Quote
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
