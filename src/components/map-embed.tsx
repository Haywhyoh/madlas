import { mapsEmbedUrl } from "@/lib/site-config";

export function MapEmbed({
  title,
  query,
  className = "",
}: {
  title: string;
  query: string;
  className?: string;
}) {
  return (
    <iframe
      title={title}
      src={mapsEmbedUrl(query)}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={`h-72 w-full rounded-2xl border border-ink/10 bg-ink ${className}`}
    />
  );
}
