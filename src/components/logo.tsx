import Link from "next/link";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="Madlas Global home">
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-sm border ${
          dark ? "border-gold text-gold" : "border-gold text-gold"
        } font-display text-lg font-bold`}
      >
        M
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-bold tracking-wide ${
            dark ? "text-cream" : "text-ink"
          }`}
        >
          MADLAS
        </span>
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.35em] text-gold">
          Global
        </span>
      </span>
    </Link>
  );
}
