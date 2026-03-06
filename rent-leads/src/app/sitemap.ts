import { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://torontorentalfinder.com";

const AREA_SLUGS = [
  "north-york",
  "richmond-hill",
  "downtown-toronto",
  "scarborough",
  "vaughan",
  "woodbridge",
  "etobicoke",
  "east-york",
  "aurora",
  "newmarket",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/areas`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/guide`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const areaPages: MetadataRoute.Sitemap = AREA_SLUGS.map((slug) => ({
    url: `${BASE}/areas/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const rentalPages: MetadataRoute.Sitemap = AREA_SLUGS.map((slug) => ({
    url: `${BASE}/rentals-${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...areaPages, ...rentalPages];
}
