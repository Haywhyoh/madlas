import type { SVGProps } from "react";

export type IconName =
  | "beam"
  | "pipe"
  | "gear"
  | "layers"
  | "shield"
  | "certificate"
  | "building"
  | "flame"
  | "truck"
  | "bolt"
  | "anchor"
  | "check"
  | "arrow-right"
  | "phone"
  | "mail"
  | "map-pin"
  | "clock"
  | "quote"
  | "menu"
  | "close"
  | "chevron-down"
  | "star"
  | "play"
  | "facebook"
  | "twitter"
  | "linkedin"
  | "instagram"
  | "youtube"
  | "spark";

const paths: Record<IconName, React.ReactNode> = {
  beam: (
    <>
      <path d="M3 7h18M3 17h18" />
      <path d="M7 7v10M12 7v10M17 7v10" />
    </>
  ),
  pipe: (
    <>
      <ellipse cx="6" cy="12" rx="3" ry="8" />
      <path d="M9 6.5C13 5 17 5 21 6.5M9 17.5c4 1.5 8 1.5 12 0" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v3M12 18.5v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2.5 12h3M18.5 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="M3 13l9 5 9-5M3 8v5M21 8v5" />
    </>
  ),
  shield: (
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
  ),
  certificate: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M9 13.8 8 21l4-2 4 2-1-7.2" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5l8-2 8 2v16" />
      <path d="M4 21h16M9 9h1M14 9h1M9 13h1M14 13h1M9 17h1M14 17h1" />
    </>
  ),
  flame: (
    <path d="M12 3c1 3-3 4-3 8a3 3 0 1 0 6 0c0-1-.5-1.8-1-2.5 1.5.5 3 2.2 3 4.5a5 5 0 1 1-10 0c0-4 2-6 5-10Z" />
  ),
  truck: (
    <>
      <path d="M3 7h11v9H3z" />
      <path d="M14 11h4l3 3v2h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </>
  ),
  bolt: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
  anchor: (
    <>
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v14M6 13a6 6 0 0 0 12 0M4 13h4M16 13h4" />
    </>
  ),
  check: <path d="M4 12.5 9.5 18 20 6" />,
  "arrow-right": <path d="M4 12h15M13 5l7 7-7 7" />,
  phone: (
    <path d="M5 4h3.5l1.5 4.5-2 1.5a12 12 0 0 0 6 6l1.5-2 4.5 1.5V19a2 2 0 0 1-2 2C10 21 3 14 3 6a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m4 6.5 8 6.5 8-6.5" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.2" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  quote: (
    <path d="M9 7c-3 1.2-4.5 3.4-4.5 6.5A3.5 3.5 0 0 0 8 17a3 3 0 0 0 3-3.2c0-1.6-1.1-2.6-2.6-2.8.3-1.4 1.4-2.5 2.9-3.2L9 7Zm9 0c-3 1.2-4.5 3.4-4.5 6.5A3.5 3.5 0 0 0 17 17a3 3 0 0 0 3-3.2c0-1.6-1.1-2.6-2.6-2.8.3-1.4 1.4-2.5 2.9-3.2L18 7Z" />
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M5 5l14 14M19 5 5 19" />,
  "chevron-down": <path d="M6 9l6 6 6-6" />,
  star: <path d="M12 3.5 14.6 9l6.1.6-4.6 4 1.4 6-5.5-3.2L6.5 19.6l1.4-6-4.6-4L9.4 9 12 3.5Z" />,
  play: <path d="M8 5.5v13l11-6.5-11-6.5Z" />,
  facebook: (
    <path d="M14 8.5h2.5V5.2H14c-2.2 0-3.7 1.5-3.7 3.9V11H8v3h2.3v7h3.2v-7h2.4l.4-3h-2.8V9.3c0-.6.3-.8.8-.8Z" />
  ),
  twitter: (
    <path d="M21 6.4c-.7.3-1.4.6-2.2.7a3.7 3.7 0 0 0 1.6-2 7.3 7.3 0 0 1-2.4.9 3.7 3.7 0 0 0-6.3 3.4A10.4 10.4 0 0 1 4.4 5a3.7 3.7 0 0 0 1.1 5 3.6 3.6 0 0 1-1.7-.5 3.7 3.7 0 0 0 3 3.6 3.7 3.7 0 0 1-1.7.1 3.7 3.7 0 0 0 3.5 2.6A7.4 7.4 0 0 1 3 17.1a10.4 10.4 0 0 0 5.6 1.7c6.8 0 10.5-5.7 10.5-10.6v-.5A7.6 7.6 0 0 0 21 6.4Z" />
  ),
  linkedin: (
    <>
      <rect x="3.5" y="9" width="3" height="10.5" />
      <circle cx="5" cy="5.2" r="1.8" />
      <path d="M10.5 9h3v1.6c.6-1 1.6-1.8 3.2-1.8 2.4 0 3.8 1.6 3.8 4.5v6.2h-3v-5.6c0-1.4-.5-2.4-1.9-2.4-1 0-1.7.7-2 1.4-.1.3-.1.6-.1 1v5.6h-3V9Z" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="16.8" cy="7.2" r="1" />
    </>
  ),
  youtube: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="3" />
      <path d="M11 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" stroke="none" />
    </>
  ),
  spark: <path d="M12 2v6M12 16v6M4.5 6.5 9 9M15 15l4.5 2.5M2 12h6M16 12h6M4.5 17.5 9 15M15 9l4.5-2.5" />,
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

export function Icon({ name, className, strokeWidth = 1.7, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
