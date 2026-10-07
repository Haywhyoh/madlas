"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { Icon, type IconName } from "@/components/icons/icon";
import { Container } from "@/components/ui/container";
import { navLinks, siteConfig } from "@/lib/site-config";
import { services } from "@/lib/data";

const iconMap: Record<string, IconName> = {
  beam: "beam",
  pipe: "pipe",
  gear: "gear",
  layers: "layers",
  shield: "shield",
  certificate: "certificate",
  building: "building",
  flame: "flame",
  truck: "truck",
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openServicesMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const scheduleCloseServicesMenu = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

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
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);

            if (link.href === "/services") {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={openServicesMenu}
                  onMouseLeave={scheduleCloseServicesMenu}
                >
                  <button
                    type="button"
                    onClick={() => setServicesOpen((v) => !v)}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    className={`relative flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide transition-colors ${
                      active || servicesOpen ? "text-gold" : "text-cream/85 hover:text-gold"
                    }`}
                  >
                    {link.label}
                    <Icon
                      name="chevron-down"
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                    {active && (
                      <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-gold" />
                    )}
                  </button>

                  <div
                    className={`absolute left-1/2 top-full z-50 w-[640px] max-w-[90vw] -translate-x-1/2 pt-4 transition-all duration-200 ${
                      servicesOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden rounded-2xl border border-gold/15 bg-ink shadow-2xl">
                      <div className="grid grid-cols-2 gap-1 p-4">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => setServicesOpen(false)}
                            className="group flex items-start gap-3 rounded-xl p-3 transition hover:bg-gold/10"
                          >
                            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-ink">
                              <Icon name={iconMap[service.icon]} className="h-5 w-5" />
                            </span>
                            <span>
                              <span className="block font-display text-sm font-bold text-cream group-hover:text-gold">
                                {service.title}
                              </span>
                              <span className="mt-1 block text-xs leading-relaxed text-cream/50">
                                {service.shortDescription}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                      <Link
                        href="/services"
                        className="flex items-center justify-between border-t border-gold/10 bg-ink-soft/60 px-5 py-3.5 text-sm font-semibold uppercase tracking-wide text-gold hover:bg-gold/10"
                      >
                        View All Services
                        <Icon name="arrow-right" className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

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
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-gold/10 bg-ink lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);

              if (link.href === "/services") {
                return (
                  <div key={link.href}>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      aria-expanded={mobileServicesOpen}
                      className={`flex w-full items-center justify-between rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-wide ${
                        active
                          ? "bg-gold/10 text-gold"
                          : "text-cream/85 hover:bg-gold/5 hover:text-gold"
                      }`}
                    >
                      {link.label}
                      <Icon
                        name="chevron-down"
                        className={`h-4 w-4 transition-transform duration-300 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileServicesOpen ? "max-h-[32rem]" : "max-h-0"
                      }`}
                    >
                      <div className="flex flex-col gap-1 py-1 pl-3">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 rounded-md px-3 py-2.5 text-xs font-semibold uppercase tracking-wide text-cream/70 hover:bg-gold/5 hover:text-gold"
                          >
                            <Icon name={iconMap[service.icon]} className="h-4 w-4 text-gold" />
                            {service.title}
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          onClick={() => setOpen(false)}
                          className="rounded-md px-3 py-2.5 text-xs font-bold uppercase tracking-wide text-gold hover:bg-gold/5"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-wide ${
                    active
                      ? "bg-gold/10 text-gold"
                      : "text-cream/85 hover:bg-gold/5 hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
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
