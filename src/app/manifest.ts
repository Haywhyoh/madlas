import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — Premium Steel Manufacturing`,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0B",
    theme_color: siteConfig.themeColor,
    icons: [
      {
        src: siteConfig.logoSquare,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
