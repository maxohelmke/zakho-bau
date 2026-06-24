/**
 * Pexels-Bilder herunterladen (freie Lizenz, keine API-Key nötig für direkte URLs)
 * Ersetzt KI/generische Bilder durch echte Baustellen-/Renovierungsfotos
 */
import { createWriteStream, mkdirSync } from "fs";
import { pipeline } from "stream/promises";
import path from "path";

const OUT = "src/assets";

// Pexels-Foto-IDs: jeweils manuell geprüfte, professionelle Bau-/Renovierungsfotos
const photos = [
  // Hero-Hintergründe
  { id: 1216589,  file: "hero-bg.jpg",           w: 1920, h: 1080, desc: "Hero Hintergrund – Baustelle/Renovierung" },
  { id: 2219024,  file: "hero-projekte.jpg",      w: 1920, h: 1080, desc: "Projekte-Header – modernes Gebäude" },
  { id: 3990359,  file: "hero-leistungen.jpg",    w: 1920, h: 1080, desc: "Leistungen-Header – Innenausbau" },
  { id: 1571460,  file: "hero-ueber-uns.jpg",     w: 1920, h: 1080, desc: "Über uns – modernes Interieur" },
  { id: 3965545,  file: "hero-faq.jpg",           w: 1920, h: 1080, desc: "FAQ – Baustelle" },

  // Projekt/Referenzfotos (Hero-Mosaik + Services)
  { id: 1396132,  file: "projekt-fassade.jpg",    w: 1280, h: 960, desc: "Modernes Haus Außenansicht" },
  { id: 7937398,  file: "projekt-trockenbau.jpg", w: 1280, h: 960, desc: "Trockenbau / Innenausbau" },
  { id: 2724749,  file: "ref-bad-modern.jpg",     w: 1280, h: 960, desc: "Modernes Badezimmer" },
  { id: 1080721,  file: "projekt-wohnraum-boden.jpg", w: 1280, h: 960, desc: "Wohnraum mit neuem Boden" },
  { id: 1643383,  file: "projekt-wandgestaltung.jpg", w: 1280, h: 960, desc: "Moderne Wandgestaltung / Wohnraum" },
  { id: 8961065,  file: "projekt-neubau-luftbild.jpg", w: 1280, h: 960, desc: "Neubau / Baustelle" },
  { id: 6207816,  file: "ref-fliesen.jpg",        w: 1280, h: 960, desc: "Fliesen verlegen" },
  { id: 1669799,  file: "ref-malerarbeiten.jpg",  w: 1280, h: 960, desc: "Malerarbeiten" },
  { id: 4450337,  file: "ref-badsanierung.jpg",   w: 1280, h: 960, desc: "Badsanierung" },
  { id: 3965565,  file: "ref-raumsanierung.jpg",  w: 1280, h: 960, desc: "Raumsanierung" },
  { id: 2062426,  file: "ref-raum-trockenbau.jpg",w: 1280, h: 960, desc: "Raum Trockenbau" },
  { id: 209296,   file: "projekt-abriss-kran.jpg",w: 1280, h: 960, desc: "Baukran / Baustelle" },
  { id: 1571459,  file: "projekt-akustikwand.jpg",w: 1280, h: 960, desc: "Innenausbau / Akustik" },
];

async function download(photo) {
  const url = `https://images.pexels.com/photos/${photo.id}/pexels-photo-${photo.id}.jpeg`
    + `?auto=compress&cs=tinysrgb&w=${photo.w}&h=${photo.h}&fit=crop&dpr=1`;

  const dest = path.join(OUT, photo.file);

  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await pipeline(res.body, createWriteStream(dest));

    const { size } = await import("fs").then(f => f.promises.stat(dest));
    console.log(`✓ ${photo.file.padEnd(36)} ${Math.round(size / 1024)} KB  — ${photo.desc}`);
  } catch (e) {
    console.error(`✗ ${photo.file.padEnd(36)} FEHLER: ${e.message}`);
  }
}

console.log(`Lade ${photos.length} Pexels-Fotos herunter ...\n`);
// Sequentiell, um Rate-Limits zu vermeiden
for (const p of photos) {
  await download(p);
}
console.log("\nFertig.");
