import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lvc-curso.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/o-curso`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/conteudo`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/professora`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/turmas`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
