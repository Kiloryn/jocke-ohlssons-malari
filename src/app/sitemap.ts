import type { MetadataRoute } from "next";

const SITE_URL = "https://example.com"; // Replace on deploy

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
    },
  ];
}

