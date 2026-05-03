import type { MetadataRoute } from "next";

const BASE = "https://pollmap.github.io/luxon-crypto-lab";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  };
}
