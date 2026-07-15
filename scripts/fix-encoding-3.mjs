/**
 * fix-encoding-3.mjs
 * Fixes remaining \uFFFD replacement characters in tsx files.
 * Applies exact word-level replacements per file.
 */
import { readFileSync, writeFileSync } from "fs";

const R = "\uFFFD"; // replacement character

// Helper: replace all occurrences of `from` → `to` in `str`
const rAll = (str, from, to) => str.split(from).join(to);

// ── Projekte.tsx ────────────────────────────────────────────────────────────
{
  const file = "src/pages/Projekte.tsx";
  let c = readFileSync(file, "utf8");

  const fixes = [
    [`wei${R}en`,              "weißen"],
    [`f${R}r`,                 "für"],
    [`Raumgef${R}hl`,          "Raumgefühl"],
    [`pr${R}zise`,             "präzise"],
    [`ausgef${R}hrt`,          "ausgeführt"],
    [`W${R}nde`,               "Wände"],
    [`W${R}nden`,              "Wänden"],
    [`W${R}nden,`,             "Wänden,"],
    [`Gro${R}projekt`,         "Großprojekt"],
    [`B${R}rogeb${R}udes`,     "Bürogebäudes"],
    [`B${R}rogeb${R}ude`,      "Bürogebäude"],
    [`T${R}rrahmen`,           "Türrahmen"],
    [`luxuri${R}ses`,          "luxuriöses"],
    [`Au${R}enarbeiten`,       "Außenarbeiten"],
    [`Au${R}engestaltung`,     "Außengestaltung"],
    [`Au${R}enputz`,           "Außenputz"],
    [`gro${R}z${R}giger`,      "großzügiger"],
    [`K${R}che`,               "Küche"],
    [`Gro${R}fl${R}chige`,     "Großflächige"],
    [`Ger${R}stbau`,           "Gerüstbau"],
    [`Abgeh${R}ngte`,          "Abgehängte"],
    [`Glastrennw${R}nden`,     "Glastrennwänden"],
    [`B${R}rogeb`,             "Bürogeb"],   // catch remaining B+FFFD+rogeb fragments
    [`Fl${R}gel`,              "Flügel"],
  ];

  for (const [from, to] of fixes) c = rAll(c, from, to);
  writeFileSync(file, c, "utf8");
  console.log("✓ Projekte.tsx");
}

// ── Anfragen.tsx ─────────────────────────────────────────────────────────────
{
  const file = "src/pages/Anfragen.tsx";
  let c = readFileSync(file, "utf8");

  const fixes = [
    [`Bodenbel${R}ge`,                 "Bodenbeläge"],
    [`Au${R}enarbeiten`,               "Außenarbeiten"],
    [`f${R}r`,                         "für"],
    [`F${R}r`,                         "Für"],
    [`f${R}llen`,                      "füllen"],
    [`g${R}ltige`,                     "gültige"],
    [`Datenschutzerkl${R}rung`,        "Datenschutzerklärung"],
    [`Pers${R}nliche`,                 "Persönliche"],
    [`R${R}ckfragen`,                  "Rückfragen"],
    [`Musterstra${R}e`,                "Musterstraße"],
    [`Gew${R}nschter`,                 "Gewünschter"],
    [`10.000${R}15.000`,               "10.000–15.000"],
    [` ${R}"`,                         ` €"`],       // " €" at end of price
    [`m${R}glich`,                     "möglich"],
    [`m${R}glichst`,                   "möglichst"],
    [`gro${R}`,                        "groß"],
    [`Fl${R}che`,                      "Fläche"],
    [`Projekt ${R} wir`,               "Projekt – wir"],
    [`gesendet${R}`,                   "gesendet…"],
  ];

  for (const [from, to] of fixes) c = rAll(c, from, to);
  writeFileSync(file, c, "utf8");
  console.log("✓ Anfragen.tsx");
}

// ── Kontakt.tsx ──────────────────────────────────────────────────────────────
{
  const file = "src/pages/Kontakt.tsx";
  let c = readFileSync(file, "utf8");

  const fixes = [
    [`Kontaktm${R}glichkeiten`,        "Kontaktmöglichkeiten"],
    [`f${R}r`,                         "für"],
    [`t${R}tig`,                       "tätig"],
    [`R${R}ckmeldung`,                 "Rückmeldung"],
    [`zur${R}ck`,                      "zurück"],
    [`f${R}llen`,                      "füllen"],
    [`g${R}ltige`,                     "gültige"],
    [`m${R}chten`,                     "möchten"],
    [`${R}ber`,                        "über"],          // lower-case ü at word start
    [`Stra${R}e`,                      "Straße"],
    [`${R}ffnungszeiten`,              "Öffnungszeiten"],
    [`Mo${R}Fr`,                       "Mo–Fr"],
    [`08:00${R}17:00`,                 "08:00–17:00"],
    [`k${R}nnen`,                      "können"],
    [`K${R}nnen`,                      "Können"],
    [`gesendet${R}`,                   "gesendet…"],
    [`Datenschutzerkl${R}rung`,        "Datenschutzerklärung"],
    [`Eingangst${R}r`,                 "Eingangstür"],
    [`ben${R}tigen`,                   "benötigen"],
    [`pers${R}nlich`,                  "persönlich"],
    [`da ${R}`,                        "da –"],
    [`Hagener Stra${R}e`,              "Hagener Straße"],
    [` ${R} `,                         " · "],           // standalone middle dot separator
  ];

  for (const [from, to] of fixes) c = rAll(c, from, to);
  writeFileSync(file, c, "utf8");
  console.log("✓ Kontakt.tsx");
}

// ── UeberUns.tsx ─────────────────────────────────────────────────────────────
{
  const file = "src/pages/UeberUns.tsx";
  let c = readFileSync(file, "utf8");

  const fixes = [
    // The 3 replacement chars are middle-dot separators (·)
    [`Fr ${R} 08`,                     "Fr · 08"],
    [`Mola ${R} Inhaber`,              "Mola · Inhaber"],
    [`Arbeit ${R} Malerarbeiten`,      "Arbeit · Malerarbeiten"],
  ];

  for (const [from, to] of fixes) c = rAll(c, from, to);
  writeFileSync(file, c, "utf8");
  console.log("✓ UeberUns.tsx");
}

console.log("\nAlle Encoding-Fixes abgeschlossen.");
