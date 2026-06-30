/** Kanonische Domain + statische Routen für Sitemap-Build (siehe scripts/generate-sitemap.ts). */
export const SITE_ORIGIN = "https://www.zakho-bau.de";

export type SitemapStaticEntry = {
  path: string;
  changefreq: string;
  priority: string;
};

/** Muss mit App.tsx-Routen übereinstimmen (ohne /standort/:slug). */
export const STATIC_SITEMAP_ENTRIES: SitemapStaticEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/leistungen", changefreq: "monthly", priority: "0.9" },
  { path: "/projekte", changefreq: "monthly", priority: "0.9" },
  { path: "/ueber-uns", changefreq: "monthly", priority: "0.8" },
  { path: "/kontakt", changefreq: "monthly", priority: "0.9" },
  { path: "/anfragen", changefreq: "monthly", priority: "0.9" },
  { path: "/faq", changefreq: "monthly", priority: "0.8" },
  { path: "/impressum", changefreq: "yearly", priority: "0.3" },
  { path: "/datenschutz", changefreq: "yearly", priority: "0.3" },
];
