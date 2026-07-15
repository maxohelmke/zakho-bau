/**
 * fix-seo-titles.mjs
 * Optimizes page titles (50-60 chars) and descriptions (145-160 chars)
 */
import { readFileSync, writeFileSync } from "fs";

const rAll = (str, from, to) => str.split(from).join(to);

// ── Leistungen.tsx ──────────────────────────────────────────────────────────
{
  const file = "src/pages/Leistungen.tsx";
  let c = readFileSync(file, "utf8");
  c = rAll(c,
    `title: "Renovierung, Trockenbau & Badsanierung Gevelsberg | Zakho Bau Leistungen"`,
    `title: "Renovierung, Badsanierung & Trockenbau Gevelsberg | Zakho Bau"`
  );
  c = rAll(c,
    `"Alle Bauleistungen aus einer Hand in Gevelsberg: Renovierung, Trockenbau, Malerarbeiten, Bodenbeläge, Badsanierung und Fassade. – Festpreis – Termingarantie – 02332 8439131"`,
    `"Renovierung, Trockenbau, Malerarbeiten, Bodenbeläge & Badsanierung in Gevelsberg. Alle Gewerke aus einer Hand – Festpreis, Termingarantie. ☎ 02332 8439131"`
  );
  writeFileSync(file, c, "utf8");
  console.log("✓ Leistungen.tsx");
}

// ── UeberUns.tsx ─────────────────────────────────────────────────────────────
{
  const file = "src/pages/UeberUns.tsx";
  let c = readFileSync(file, "utf8");
  c = rAll(c,
    `title: "über Zakho Bau | Inhabergeführter Fachbetrieb für Bau & Sanierung Gevelsberg"`,
    `title: "Über Zakho Bau | Fachbetrieb Bau & Sanierung Gevelsberg"`
  );
  c = rAll(c,
    `"Zakho Bau – seit 2014 Ihr persönlicher Ansprechpartner für Renovierung, Sanierung und Innenausbau in Gevelsberg. Inhabergeführt, pünktlich, alle Gewerke aus einer Hand."`,
    `"Zakho Bau – seit 2014 inhabergeführter Fachbetrieb für Renovierung & Sanierung in Gevelsberg. Persönlich, pünktlich und alle Gewerke aus einer Hand."`
  );
  writeFileSync(file, c, "utf8");
  console.log("✓ UeberUns.tsx");
}

// ── Anfragen.tsx ─────────────────────────────────────────────────────────────
// Current title is only 38 chars – improve with keyword
{
  const file = "src/pages/Anfragen.tsx";
  let c = readFileSync(file, "utf8");
  c = rAll(c,
    `title: "Anfrage stellen | Zakho Bau Gevelsberg"`,
    `title: "Kostenlose Anfrage – Renovierung & Bau Gevelsberg | Zakho Bau"`
  );
  writeFileSync(file, c, "utf8");
  console.log("✓ Anfragen.tsx");
}

// ── Kontakt.tsx ──────────────────────────────────────────────────────────────
// Add more keywords
{
  const file = "src/pages/Kontakt.tsx";
  let c = readFileSync(file, "utf8");
  c = rAll(c,
    `title: "Kontakt | Zakho Bau Gevelsberg"`,
    `title: "Kontakt & Beratung – Zakho Bau Gevelsberg | Bau & Sanierung"`
  );
  writeFileSync(file, c, "utf8");
  console.log("✓ Kontakt.tsx");
}

// ── Projekte.tsx ─────────────────────────────────────────────────────────────
// Check and improve
{
  const file = "src/pages/Projekte.tsx";
  const c = readFileSync(file, "utf8");
  const titleMatch = c.match(/title:\s*"([^"]+)"/);
  if (titleMatch) {
    console.log("Projekte title (" + titleMatch[1].length + "): " + titleMatch[1]);
  }
}

console.log("\nTitel-Fixes abgeschlossen.");
