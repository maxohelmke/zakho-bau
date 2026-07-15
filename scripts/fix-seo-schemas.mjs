/**
 * fix-seo-schemas.mjs
 * 1. StandortLanding.tsx – Service schema: use @id reference for provider, add serviceUrl + serviceArea
 * 2. Projekte.tsx – shorten description to ≤160 chars
 */
import { readFileSync, writeFileSync } from "fs";

const rAll = (str, from, to) => str.split(from).join(to);

// ── StandortLanding.tsx ──────────────────────────────────────────────────────
{
  const file = "src/pages/StandortLanding.tsx";
  let c = readFileSync(file, "utf8");

  // Replace the Service schema provider with @id reference
  const oldProvider = `        provider: {
          "@type": "HomeAndConstructionBusiness",
          name: "Zakho Bau",
          email: "info@zakho-bau.de",
        },`;
  const newProvider = `        provider: { "@id": "https://www.zakho-bau.de/#business" },
        url: \`\${SITE_ORIGIN}/standort/\${standort.slug}\`,`;

  c = rAll(c, oldProvider, newProvider);
  
  // Also improve the areaServed to use full schema with additional info
  const oldArea = `        areaServed: { "@type": "City", name: standort.name },`;
  const newArea = `        areaServed: {
          "@type": "City",
          name: standort.name,
          containedInPlace: { "@type": "AdministrativeArea", name: "Nordrhein-Westfalen" },
        },`;
  c = rAll(c, oldArea, newArea);

  writeFileSync(file, c, "utf8");
  console.log("✓ StandortLanding.tsx");
}

// ── Projekte.tsx ─────────────────────────────────────────────────────────────
{
  const file = "src/pages/Projekte.tsx";
  let c = readFileSync(file, "utf8");

  c = rAll(c,
    `"Referenzen und abgeschlossene Bauprojekte von Zakho Bau in Gevelsberg: Renovierungen, Badsanierungen, Trockenbau und Malerarbeiten im Ennepe-Ruhr-Kreis. Überzeugen Sie sich selbst."`,
    `"Abgeschlossene Bauprojekte von Zakho Bau in Gevelsberg: Renovierung, Badsanierung, Trockenbau & Malerarbeiten im Ennepe-Ruhr-Kreis. Bilder und Referenzen."`
  );
  c = rAll(c,
    `title: "Referenzen & Projekte – Bau und Sanierung Gevelsberg | Zakho Bau"`,
    `title: "Projekte & Referenzen – Renovierung Gevelsberg | Zakho Bau"`
  );
  writeFileSync(file, c, "utf8");
  console.log("✓ Projekte.tsx");
}

console.log("\nSchema-Fixes abgeschlossen.");
