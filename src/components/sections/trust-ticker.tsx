const items = [
  "Madlas Global Investment Company",
  "Steel Fabrication Company",
  "Workshop in Ogun State",
  "Office in Lagos",
  "20+ States Across Nigeria",
  "Fuel Tankers & Storage Tanks",
  "Filling Station Canopies",
  "Site Erection Crews",
];

export function TrustTicker() {
  const loop = [...items, ...items];

  return (
    <div className="border-b border-gold/10 bg-ink-soft py-4">
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {loop.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cream/50"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
