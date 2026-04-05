import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { STANDORTE } from "../src/data/standorte";
import { SITE_ORIGIN, STATIC_SITEMAP_ENTRIES } from "../src/seo/sitemap-config";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function urlEntry(loc: string, changefreq: string, priority: string, lastmod: string): string {
  return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function main(): void {
  const lastmod = new Date().toISOString().slice(0, 10);

  const staticUrls = STATIC_SITEMAP_ENTRIES.map((e) =>
    urlEntry(`${SITE_ORIGIN}${e.path}`, e.changefreq, e.priority, lastmod)
  );

  const standortUrls = STANDORTE.map((s) =>
    urlEntry(`${SITE_ORIGIN}/standort/${s.slug}`, "monthly", "0.85", lastmod)
  );

  const body = [...staticUrls, ...standortUrls].join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

  const outPath = resolve("public", "sitemap.xml");
  writeFileSync(outPath, xml, "utf8");
  console.log(`Sitemap geschrieben: ${outPath} (${STATIC_SITEMAP_ENTRIES.length} statisch + ${STANDORTE.length} Standorte)`);
}

main();
