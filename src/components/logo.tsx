import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

type LogoProps = {
  /** Dark surfaces (header/footer on ink). */
  dark?: boolean;
  /** Larger lockup for footer brand block. */
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { mark: 40, markW: 58, text: "text-base" },
  md: { mark: 48, markW: 70, text: "text-lg" },
  lg: { mark: 64, markW: 94, text: "text-xl" },
} as const;

export function Logo({ dark = false, size = "md" }: LogoProps) {
  const s = sizes[size];

  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3"
      aria-label={`${siteConfig.name} home`}
    >
      <span
        className={`relative overflow-hidden rounded-sm border border-gold/35 bg-ink shadow-[0_0_0_1px_rgba(212,175,55,0.08)] transition group-hover:border-gold/70 group-hover:shadow-[0_0_24px_-8px_rgba(212,175,55,0.55)]`}
        style={{ width: s.markW, height: s.mark }}
      >
        <Image
          src={siteConfig.logo}
          alt=""
          fill
          priority
          sizes={`${s.markW}px`}
          className="object-cover object-center"
        />
      </span>

      <span
        className="hidden h-8 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent sm:block"
        aria-hidden="true"
      />

      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-bold tracking-[0.08em] ${s.text} ${
            dark ? "text-cream" : "text-ink"
          }`}
        >
          MADLAS
        </span>
      </span>
    </Link>
  );
}
