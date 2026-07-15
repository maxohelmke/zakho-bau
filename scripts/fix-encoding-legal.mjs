/**
 * fix-encoding-legal.mjs
 * Fixes \uFFFD replacement characters and corrupted ? chars in
 * Datenschutz.tsx and Impressum.tsx.
 */
import { readFileSync, writeFileSync } from "fs";

const R  = "\uFFFD";
const rAll = (str, from, to) => str.split(from).join(to);

// Comprehensive German legal-text word replacements
// Each entry: [corrupted, correct]
const commonFixes = [
  // ü → ü
  [`f${R}r`,              "für"],
  [`F${R}r`,              "Für"],
  [`${R}ber`,             "über"],
  [`${R}bertragung`,      "Übertragung"],
  [`${R}bertragbarkeit`,  "Übertragbarkeit"],
  [`${R}bermittelt`,      "übermittelt"],
  [`${R}berblick`,        "Überblick"],
  [`dar${R}ber`,          "darüber"],
  [`dar${R}ber hinaus`,   "darüber hinaus"],
  [`wof${R}r`,            "wofür"],
  [`Wof${R}r`,            "Wofür"],
  [`k${R}nftige`,         "künftige"],
  [`ausdr${R}cklich`,     "ausdrücklich"],
  [`ausdr${R}ckliche`,    "ausdrückliche"],
  [`ausdr${R}cklichen`,   "ausdrücklichen"],
  [`ausdr${R}cklicher`,   "ausdrücklicher"],
  [`natürlich`,           "natürlich"],   // already correct – skip
  [`nat${R}rlich`,        "natürlich"],
  [`nat${R}rliche`,       "natürliche"],
  [`Vertragserf${R}llung`,"Vertragserfüllung"],
  [`erf${R}llung`,        "erfüllung"],
  [`Erf${R}llung`,        "Erfüllung"],
  [`Aush${R}ndigen`,      "Aushändigen"],
  [`aush${R}ndigen`,      "aushändigen"],
  [`Zusammenf${R}hrung`,  "Zusammenführung"],
  [`Verf${R}gung`,        "Verfügung"],
  [`m${R}ssen`,           "müssen"],
  [`Sicherheitsl${R}cken`,"Sicherheitslücken"],
  [`l${R}ckenloser`,      "lückenloser"],
  [`Daten${R}bertragung`, "Datenübertragung"],
  [`Daten${R}bertragbarkeit`, "Datenübertragbarkeit"],
  [`zur${R}ck`,           "zurück"],
  [`Zur${R}ck`,           "Zurück"],
  [`unber${R}hrt`,        "unberührt"],
  [`gegen${R}ber`,        "gegenüber"],
  [`Datenschutzerkl${R}rung`, "Datenschutzerklärung"],
  // ö → ö
  [`k${R}nnen`,           "können"],
  [`K${R}nnen`,           "Können"],
  [`k${R}nnte`,           "könnte"],
  [`m${R}chten`,          "möchten"],
  [`m${R}glich`,          "möglich"],
  [`m${R}glichen`,        "möglichen"],
  [`m${R}glicherweise`,   "möglicherweise"],
  [`pers${R}nlich`,       "persönlich"],
  [`pers${R}nlichen`,     "persönlichen"],
  [`pers${R}nliche`,      "persönliche"],
  [`Pers${R}nliche`,      "Persönliche"],
  [`L${R}schung`,         "Löschung"],
  [`l${R}schen`,          "löschen"],
  [`gel${R}scht`,         "gelöscht"],
  [`L${R}schersuchen`,    "Löschersuchen"],
  [`Aufsichtsbeh${R}rde`, "Aufsichtsbehörde"],
  [`gew${R}hnlichen`,     "gewöhnlichen"],
  [`gew${R}hnlich`,       "gewöhnlich"],
  [`ben${R}tigen`,        "benötigen"],
  [`ben${R}tigt`,         "benötigt"],
  // ä → ä
  [`bez${R}glich`,        "bezüglich"],
  [`Ausf${R}hrliche`,     "Ausführliche"],
  [`ausf${R}hrliche`,     "ausführliche"],
  [`gew${R}hrleisten`,    "gewährleisten"],
  [`Einschr${R}nkung`,    "Einschränkung"],
  [`Umst${R}nden`,        "Umständen"],
  [`zust${R}ndigen`,      "zuständigen"],
  [`zust${R}ndig`,        "zuständig"],
  [`zust${R}ndige`,       "zuständige"],
  [`Datenschutzerkl${R}rungen`, "Datenschutzerklärungen"],
  [`erl${R}utert`,        "erläutert"],
  [`entf${R}llt`,         "entfällt"],
  [`Fortfall`,            "Fortfall"],  // already correct
  [`Datenverarbeitungsvorg${R}nge`, "Datenverarbeitungsvorgänge"],
  // ß → ß
  [`au${R}erdem`,         "außerdem"],
  [`Au${R}erdem`,         "Außerdem"],
  [`au${R}erhalb`,        "außerhalb"],
  [`Au${R}erhalb`,        "Außerhalb"],
  [`Rechtsverst${R}${R}e`, "Rechtsverstöße"],
  [`Rechtsverst${R}${R}en`, "Rechtsverstößen"],
  [`mutma${R}lichen`,     "mutmaßlichen"],
  [`Versto${R}es`,        "Verstoßes"],
  [`Verst${R}${R}en`,     "Verstößen"],
  [`Verst${R}${R}e`,      "Verstöße"],
  [`Stra${R}e`,           "Straße"],
  [`Stra?e`,              "Straße"],   // ? as ß
  [`gem${R}${R}`,         "gemäß"],
  [`gem${R}${R} `,        "gemäß "],
  [`Vervielf${R}ltigung`, "Vervielfältigung"],
  [`Rechtm${R}${R}igkeit`, "Rechtmäßigkeit"],
  // Ö → Ö
  [`${R}ffnungszeiten`,   "Öffnungszeiten"],
  // Ü → Ü
  [`${R}bermittelt`,      "übermittelt"],
  // Ä → Ä (o. Ä.)
  [`o. ${R}.`,            "o. Ä."],
  // Special: quotation marks „" 
  // German-opening " → „ (U+201E), German-closing " → " (U+201C)
  // These appear as FFFD on both sides
  // Context: (FFFD + Google + FFFD) → ("Google")
  // For simplicity use standard double quotes
  [`(${R}Google${R})`,    `("Google")`],
  // Arrow: ? Zurück → ← Zurück (navigation back links)
  [`>? Zur`,              `>← Zur`],
  [`">? `,                `">← `],
  // Also handle Datenübertragung style
  [`Daten${R}bertragung`, "Datenübertragung"],
  // Vertragserfüllung
  [`Vertragserf${R}llung`, "Vertragserfüllung"],
  // Erfüllung
  [`Erf${R}llung eines`,  "Erfüllung eines"],
  [`erf${R}llung`,        "erfüllung"],
  // Bereitstellung
  [`Bereitstellung`,      "Bereitstellung"],   // already correct
  // Haftung für
  [`Haftung f${R}r`,      "Haftung für"],
  [`nach ${R}${R} `,      "nach §§ "],
  [`gem${R}${R} ${R} `,   "gemäß § "],
  [`gem${R}${R} §`,       "gemäß §"],
  // t-tigkeit
  [`T${R}tigkeit`,        "Tätigkeit"],
  [`t${R}tig`,            "tätig"],
  // Vorgänge
  [`vorg${R}nge`,         "vorgänge"],
  // Rechtmäßigkeit
  [`rechtm${R}${R}ig`,    "rechtmäßig"],
  // Überwachen
  [`${R}berwachen`,       "überwachen"],
  // Überprüft
  [`${R}berpr${R}ft`,     "überprüft"],
  // Übermittlung
  [`${R}bermittlung`,     "Übermittlung"],
  // Verbreitung
  [`Verbreitung`,         "Verbreitung"],   // already correct
  // Urheberrecht
  [`Urheberrechtes`,      "Urheberrechtes"], // already correct
  [`bed${R}rfen`,         "bedürfen"],
  // Europäische
  [`Europ${R}ische`,      "Europäische"],
  [`europ${R}ische`,      "europäische"],
  // Streitbeilegung - already correct
  // Gemäß
  [`Gem${R}${R}`,         "Gemäß"],
];

// ── Datenschutz.tsx ──────────────────────────────────────────────────────────
{
  const file = "src/pages/Datenschutz.tsx";
  let c = readFileSync(file, "utf8");
  for (const [from, to] of commonFixes) {
    c = rAll(c, from, to);
  }
  // Additional specific fixes
  c = rAll(c, `Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht`, 
                `Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht`);
  // Fix § symbol: `§ 5` may be corrupted
  c = rAll(c, `Angaben gem${R}${R} ${R} 5 TMG`, "Angaben gemäß § 5 TMG");
  c = rAll(c, `${R} 5 TMG`, "§ 5 TMG");
  c = rAll(c, `${R} 7 Abs. 1 TMG`, "§ 7 Abs. 1 TMG");
  c = rAll(c, `${R}${R} 8 bis 10 TMG`, "§§ 8 bis 10 TMG");
  c = rAll(c, `${R} 27 a Umsatzsteuergesetz`, "§ 27 a Umsatzsteuergesetz");
  c = rAll(c, `${R} 55 Abs. 2 RStV`, "§ 55 Abs. 2 RStV");
  c = rAll(c, `nach ${R} der`, "nach § der");
  // Handle remaining §
  c = rAll(c, `gem${R}${R} ${R}`, "gemäß §");
  writeFileSync(file, c, "utf8");
  console.log("✓ Datenschutz.tsx");
}

// ── Impressum.tsx ─────────────────────────────────────────────────────────────
{
  const file = "src/pages/Impressum.tsx";
  let c = readFileSync(file, "utf8");
  for (const [from, to] of commonFixes) {
    c = rAll(c, from, to);
  }
  // Specific Impressum fixes
  c = rAll(c, `Angaben gem${R}${R} ${R} 5 TMG`, "Angaben gemäß § 5 TMG");
  c = rAll(c, `gem${R}${R} ${R} 5 TMG`, "gemäß § 5 TMG");
  c = rAll(c, `gem${R}${R} ${R} 27 a`, "gemäß § 27 a");
  c = rAll(c, `gem${R}${R} ${R} 55 Abs. 2 RStV`, "gemäß § 55 Abs. 2 RStV");
  c = rAll(c, `${R} 5 TMG`, "§ 5 TMG");
  c = rAll(c, `${R} 7 Abs`, "§ 7 Abs");
  c = rAll(c, `${R}${R} 8 bis 10 TMG`, "§§ 8 bis 10 TMG");
  c = rAll(c, `${R} 27 a Umsatzsteuergesetz`, "§ 27 a Umsatzsteuergesetz");
  c = rAll(c, `${R} 55 Abs. 2 RStV`, "§ 55 Abs. 2 RStV");
  c = rAll(c, `Vervielf${R}ltigung`, "Vervielfältigung");
  c = rAll(c, `bed${R}rfen`, "bedürfen");
  c = rAll(c, `Europ${R}ische Kommission`, "Europäische Kommission");
  c = rAll(c, `${R}berwachen`, "überwachen");
  c = rAll(c, `${R}berpr${R}ft`, "überprüft");
  c = rAll(c, `T${R}tigkeit`, "Tätigkeit");
  c = rAll(c, `T${R}tigkeiten`, "Tätigkeiten");
  c = rAll(c, `m${R}gliche`, "mögliche");
  c = rAll(c, `m${R}glichen`, "möglichen");
  c = rAll(c, `Gew${R}hr`, "Gewähr");
  c = rAll(c, `${R}bernehmen`, "übernehmen");
  writeFileSync(file, c, "utf8");
  console.log("✓ Impressum.tsx");
}

console.log("\nLegal-Encoding-Fixes abgeschlossen.");
