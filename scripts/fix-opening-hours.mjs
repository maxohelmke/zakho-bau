import { readFileSync, writeFileSync } from "fs";

const file = "src/pages/Faq.tsx";
let content = readFileSync(file, "utf8");

// Das Trennzeichen zwischen 08 und 18 ist U+FFFD (Replacement Character)
// Ersetzen durch sauberes "08–17 Uhr" mit echtem En-Dash U+2013
content = content.replace(/08\uFFFD18 Uhr/g, "08\u201317 Uhr");

// UI-Block: 08:00 <zeichen> 18:00 → 08:00 – 17:00
content = content.replace(/08:00\s*[\uFFFD\u2013\u2014\-]\s*18:00/g, "08:00\u201317:00");

writeFileSync(file, content, "utf8");
console.log("Done – Faq.tsx updated");
