import type { MetadataRoute } from "next";

const SITE_URL = "https://example.com"; // Replace on deploy

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

