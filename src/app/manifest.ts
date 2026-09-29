import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.name,
    short_name: SITE_CONFIG.shortName,
    description: SITE_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FCF9FB",
    theme_color: "#1A0614",
    icons: [
      {
        src: "/images/dusonicon.png",
        sizes: "192x192 512x512",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}