/**
 * Encoding-Reparatur für alle TSX-Dateien mit korrupten deutschen Sonderzeichen.
 *
 * Zwei Typen von Korruption:
 *  A) "?" (ASCII 0x3F) als Platzhalter für Umlaute → Leistungen, UeberUns, Projekte
 *  B) U+FFFD (Replacement Character) → Faq.tsx
 */

import { readFileSync, writeFileSync } from "fs";

/* ── Hilfsfunktion: mehrere Ersetzungen sequenziell anwenden ───────────────── */
function applyReplacements(content, list) {
  for (const [from, to] of list) {
    content = content.split(from).join(to);
  }
  return content;
}

/* ══════════════════════════════════════════════════════════════════════════════
   TEIL A: "?" als Umlaut-Platzhalter
   Dateien: Leistungen.tsx, UeberUns.tsx, Projekte.tsx
   Reihenfolge: längere Muster vor kürzeren!
══════════════════════════════════════════════════════════════════════════════ */
const QUESTION_REPLACEMENTS = [
  // ── Komposita und längere Wörter (zuerst!) ──────────────────────────────
  ["W?rmed?mmung",          "Wärmedämmung"],
  ["Deckenabh?ngungen",     "Deckenabhängungen"],
  ["Gipskartonw?nde",       "Gipskartonwände"],
  ["Brandschutzw?nde",      "Brandschutzwände"],
  ["Schallschutzw?nde",     "Schallschutzwände"],
  ["Bodenbel?ge",           "Bodenbeläge"],
  ["Bodenbel?g",            "Bodenbeläg"],
  ["Designb?den",           "Designböden"],
  ["K?chenfliesen",         "Küchenfliesen"],
  ["K?chenrenovierung",     "Küchenrenovierung"],
  ["K?chen",                "Küchen"],
  ["K?che",                 "Küche"],
  ["Heizk?rper",            "Heizkörper"],
  ["schl?sselfertigen",     "schlüsselfertigen"],
  ["schl?sselfertig",       "schlüsselfertig"],
  ["Zuverl?ssigkeit",       "Zuverlässigkeit"],
  ["Verl?sslichkeit",       "Verlässlichkeit"],
  ["verl?sslich",           "verlässlich"],
  ["P?nktlichkeit",         "Pünktlichkeit"],
  ["p?nktlich",             "pünktlich"],
  ["Pers?nlicher",          "Persönlicher"],
  ["pers?nlicher",          "persönlicher"],
  ["pers?nlich",            "persönlich"],
  ["pers?nlichem",          "persönlichem"],
  ["Inhabergef?hrter",      "Inhabergeführter"],
  ["inhabergef?hrter",      "inhabergeführter"],
  ["inhabergef?hrtes",      "inhabergeführtes"],
  ["Inhabergef?hrt",        "Inhabergeführt"],
  ["inhabergef?hrt",        "inhabergeführt"],
  ["Inhabergef?hrten",      "Inhabergeführten"],
  ["langj?hriger",          "langjähriger"],
  ["langj?hrigen",          "langjährigen"],
  ["langj?hrige",           "langjährige"],
  ["langj?hrig",            "langjährig"],
  ["gegr?ndet",             "gegründet"],
  ["Anschl?sse",            "Anschlüsse"],
  ["Anschluss",             "Anschluss"], // kein ?, aber zur Sicherheit
  ["Sanit?rinstallation",   "Sanitärinstallation"],
  ["Sanit?r",               "Sanitär"],
  ["St?nderwerk",           "Ständerwerk"],
  ["Abh?ngungen",           "Abhängungen"],
  ["Pr?zise",               "Präzise"],
  ["pr?zise",               "präzise"],
  ["Oberfl?chen",           "Oberflächen"],
  ["Qualit?t",              "Qualität"],
  ["Qualit?ts",             "Qualitäts"],
  ["Ausf?hrung",            "Ausführung"],
  ["ausf?hrung",            "ausführung"],
  ["Ausf?hrlich",           "Ausführlich"],
  ["Gro?format",            "Großformat"],
  ["gro?format",            "großformat"],
  ["gro?fl?chige",          "großflächige"],
  ["Gro?fl?chige",          "Großflächige"],
  ["gro?fl?chig",           "großflächig"],
  ["gro?z?gig",             "großzügig"],
  ["gro?z?giger",           "großzügiger"],
  ["gro?z?gigem",           "großzügigem"],
  ["Gr??e",                 "Größe"],
  ["gr??e",                 "größe"],
  ["gr??er",                "größer"],
  ["gr??eren",              "größeren"],
  ["gr??ten",               "größten"],
  ["gro?",                  "groß"],
  ["Ma?",                   "Maß"],
  ["ausschlie?lich",        "ausschließlich"],
  ["Au?engestaltung",       "Außengestaltung"],
  ["Au?enanstriche",        "Außenanstriche"],
  ["Au?enarbeiten",         "Außenarbeiten"],
  ["Au?enbereiche",         "Außenbereiche"],
  ["Au?enputz",             "Außenputz"],
  ["Au?enanstrich",         "Außenanstrich"],
  ["Au?en",                 "Außen"],
  ["au?en",                 "außen"],
  ["Stra?e",                "Straße"],
  ["stra?e",                "straße"],
  ["W?nde",                 "Wände"],
  ["B?den",                 "Böden"],
  ["Boden",                 "Boden"], // kein ?, zur Sicherheit
  ["T?reinbau",             "Türeinbau"],
  ["T?ren",                 "Türen"],
  ["T?glich",               "Täglich"],
  ["t?glich",               "täglich"],
  ["T?r",                   "Tür"],
  ["h?chster",              "höchster"],
  ["h?chsten",              "höchsten"],
  ["h?chste",               "höchste"],
  ["h?chst",                "höchst"],
  ["b?sen",                 "bösen"],
  ["geh?ren",               "gehören"],
  ["Vertr?sten",            "Vertrösten"],
  ["w?re",                  "wäre"],
  ["?ndert",                "ändert"],
  ["?nder",                 "änder"],
  ["?bernehmen",            "übernehmen"],
  ["?bernehm",              "übernehm"],
  ["?berzeugen",            "Überzeugen"],
  ["?berraschungen",        "Überraschungen"],
  ["?ber",                  "über"],   // muss nach längeren Mustern kommen
  ["?ber uns",              "Über uns"],
  ["?ber Zakho",            "Über Zakho"],
  ["?ffnungszeiten",        "Öffnungszeiten"],
  ["Wof?r",                 "Wofür"],
  ["wof?r",                 "wofür"],
  ["f?r",                   "für"],
  // Zitat-Anführungszeichen
  ["?Jedes",                "„Jedes"],
  // Separator en-dash (letzter Schritt: einzelnes ? umgeben von Leerzeichen)
  [" ? ",                   " – "],
  [" ?",                    " –"],   // am Zeilenende
  ["? ",                    "– "],   // am Zeilenanfang (nach Leerzeichen)
];

/* ══════════════════════════════════════════════════════════════════════════════
   TEIL B: U+FFFD als Umlaut-Platzhalter
   Datei: Faq.tsx
   Gleiche Logik, aber mit \uFFFD statt "?"
══════════════════════════════════════════════════════════════════════════════ */
const FD = "\uFFFD"; // Replacement Character
const FFFD_REPLACEMENTS = [
  // Komposita und längere Wörter
  [`W${FD}rmed${FD}mmung`,     "Wärmedämmung"],
  [`gr${FD}${FD}eren`,         "größeren"],
  [`gr${FD}${FD}ere`,          "größere"],
  [`gr${FD}${FD}er`,           "größer"],
  [`Gr${FD}${FD}e`,            "Größe"],
  [`gr${FD}${FD}e`,            "größe"],
  [`gr${FD}${FD}`,             "größ"],
  [`gro${FD}`,                 "groß"],
  [`Gro${FD}`,                 "Groß"],
  [`Schl${FD}ssel`,            "Schlüssel"],
  [`schl${FD}ssel`,            "schlüssel"],
  [`Ausf${FD}hrung`,           "Ausführung"],
  [`ausf${FD}hrung`,           "ausführung"],
  [`Qualit${FD}t`,             "Qualität"],
  [`Verl${FD}sslich`,          "Verlässlich"],
  [`verl${FD}sslich`,          "verlässlich"],
  [`P${FD}nktlich`,            "Pünktlich"],
  [`p${FD}nktlich`,            "pünktlich"],
  [`Pers${FD}nlich`,           "Persönlich"],
  [`pers${FD}nlich`,           "persönlich"],
  [`inhabergef${FD}hrt`,       "inhabergeführt"],
  [`Inhabergef${FD}hrt`,       "Inhabergeführt"],
  [`langj${FD}hrig`,           "langjährig"],
  [`gegr${FD}ndet`,            "gegründet"],
  [`Anschl${FD}sse`,           "Anschlüsse"],
  [`Sanit${FD}r`,              "Sanitär"],
  [`St${FD}nderwerk`,          "Ständerwerk"],
  [`Anh${FD}ngungen`,          "Anhängungen"],
  [`Pr${FD}zise`,              "Präzise"],
  [`pr${FD}zise`,              "präzise"],
  [`Oberfl${FD}chen`,          "Oberflächen"],
  [`oberfl${FD}chen`,          "oberflächen"],
  [`Au${FD}enarbeiten`,        "Außenarbeiten"],
  [`Au${FD}enputz`,            "Außenputz"],
  [`Au${FD}en`,                "Außen"],
  [`au${FD}en`,                "außen"],
  [`Stra${FD}e`,               "Straße"],
  [`stra${FD}e`,               "straße"],
  [`W${FD}nde`,                "Wände"],
  [`w${FD}nde`,                "wände"],
  [`B${FD}den`,                "Böden"],
  [`b${FD}den`,                "böden"],
  [`T${FD}ren`,                "Türen"],
  [`T${FD}r`,                  "Tür"],
  [`t${FD}glich`,              "täglich"],
  [`T${FD}glich`,              "Täglich"],
  [`h${FD}chst`,               "höchst"],
  [`Heizk${FD}rper`,           "Heizkörper"],
  [`K${FD}che`,                "Küche"],
  [`Bodenbel${FD}ge`,          "Bodenbeläge"],
  [`k${FD}nnen`,               "können"],
  [`k${FD}nne`,                "könne"],
  [`k${FD}nnt`,                "könnt"],
  [`K${FD}nnen`,               "Können"],
  [`m${FD}chten`,              "möchten"],
  [`m${FD}glich`,              "möglich"],
  [`M${FD}glich`,              "Möglich"],
  [`m${FD}ssen`,               "müssen"],
  [`W${FD}nsche`,              "Wünsche"],
  [`w${FD}nsche`,              "wünsche"],
  [`w${FD}nscht`,              "wünscht"],
  [`b${FD}ros`,                "büros"],
  [`B${FD}ros`,                "Büros"],
  [`B${FD}ro`,                 "Büro"],
  [`b${FD}ro`,                 "büro"],
  [`Fl${FD}chen`,              "Flächen"],
  [`fl${FD}chen`,              "flächen"],
  [`Ladenfl${FD}chen`,         "Ladenflächen"],
  [`r${FD}ckmeldung`,          "rückmeldung"],
  [`R${FD}ckmeldung`,          "Rückmeldung"],
  [`r${FD}ck`,                 "rück"],
  [`R${FD}ck`,                 "Rück"],
  [`zuvverl${FD}ssig`,         "zuverlässig"],
  [`zuvverl${FD}ssigen`,       "zuverlässigen"],
  [`zuvverl${FD}ssige`,        "zuverlässige"],
  [`zuverl${FD}ssige`,         "zuverlässige"],
  [`zuverl${FD}ssig`,          "zuverlässig"],
  [`verst${FD}ndlich`,         "verständlich"],
  [`verst${FD}ndnis`,          "verständnis"],
  [`Verst${FD}ndlich`,         "Verständlich"],
  [`vollst${FD}ndig`,          "vollständig"],
  [`Vollst${FD}ndig`,          "Vollständig"],
  [`sp${FD}ter`,               "später"],
  [`fr${FD}her`,               "früher"],
  [`Fr${FD}hjahr`,             "Frühjahr"],
  [`fr${FD}hjahr`,             "frühjahr"],
  [`fr${FD}h`,                 "früh"],
  [`Fr${FD}h`,                 "Früh"],
  [`w${FD}hrend`,              "während"],
  [`W${FD}hrend`,              "Während"],
  [`Erkl${FD}r`,               "Erklär"],
  [`erkl${FD}r`,               "erklär"],
  [`kl${FD}ren`,               "klären"],
  [`kl${FD}rt`,                "klärt"],
  [`tempor${FD}r`,             "temporär"],
  [`Tempor${FD}r`,             "Temporär"],
  [`ausweicham${FD}glich`,     "ausweichmöglich"],
  [`Ausweichm${FD}glich`,      "Ausweichmöglich"],
  [`Ausweichm${FD}glichkeit`,  "Ausweichmöglichkeit"],
  // Anfang/Präfix
  [`${FD}bernehmen`,           "übernehmen"],
  [`${FD}bernehm`,             "übernehm"],
  [`${FD}bernahm`,             "übernahm"],
  [`${FD}berzeugen`,           "Überzeugen"],
  [`${FD}berzeugen`,           "überzeugen"],
  [`${FD}berraschungen`,       "Überraschungen"],
  [`${FD}ber`,                 "über"],
  [`${FD}ffnungszeiten`,       "Öffnungszeiten"],
  [`${FD}nder`,                "ändert"],
  [`f${FD}r`,                  "für"],
  [`F${FD}r`,                  "Für"],
  // Separator
  [` ${FD} `,                  " – "],
  [` ${FD}`,                   " –"],
  [`${FD} `,                   "– "],
  // Häufig am Anfang der Zeile: FAQ-Anführungszeichen
  [`${FD}H${FD}ufig`,          "Häufig"],
  [`H${FD}ufig`,               "Häufig"],
  [`h${FD}ufig`,               "häufig"],
  // Beratungsgesprä...
  [`Beratungsgespr${FD}ch`,    "Beratungsgespräch"],
  // Restliche einzelne FFFD
  [FD,                         "–"],  // Fallback: unbekannte FFFD → en-dash
];

/* ══════════════════════════════════════════════════════════════════════════════
   Dateien verarbeiten
══════════════════════════════════════════════════════════════════════════════ */

const questionFiles = [
  "src/pages/Leistungen.tsx",
  "src/pages/UeberUns.tsx",
  "src/pages/Projekte.tsx",
];

for (const file of questionFiles) {
  let content = readFileSync(file, "utf8");
  const before = content;
  content = applyReplacements(content, QUESTION_REPLACEMENTS);
  writeFileSync(file, content, "utf8");
  const remaining = (content.match(/[a-z?][?][a-z?]/gi) || []).length;
  console.log(`✓ ${file}  (restliche '?' in Wörtern: ${remaining})`);
}

// Faq.tsx
{
  const file = "src/pages/Faq.tsx";
  let content = readFileSync(file, "utf8");
  content = applyReplacements(content, FFFD_REPLACEMENTS);
  writeFileSync(file, content, "utf8");
  const remaining = (content.match(/\uFFFD/g) || []).length;
  console.log(`✓ ${file}  (restliche FFFD: ${remaining})`);
}

console.log("\nAlle Dateien repariert.");
