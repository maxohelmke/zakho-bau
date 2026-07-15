/**
 * fix-encoding-legal-2.mjs
 * Second pass for remaining \uFFFD chars in legal pages.
 */
import { readFileSync, writeFileSync } from "fs";

const R  = "\uFFFD";
const rAll = (str, from, to) => str.split(from).join(to);

// ── Datenschutz.tsx ──────────────────────────────────────────────────────────
{
  const file = "src/pages/Datenschutz.tsx";
  let c = readFileSync(file, "utf8");

  // Remaining specific patterns
  const fixes = [
    [`aufgef${R}hrten`,       "aufgeführten"],
    [`${R}Hinweis`,           `"Hinweis`],       // opening quote before "Hinweis"
    [`Empf${R}nger`,          "Empfänger"],
    [`zul${R}ssigen`,         "zulässigen"],
    [`Gr${R}nde`,             "Gründe"],
    [`g${R}ngigen`,           "gängigen"],
    [`zusammenh${R}ngt`,      "zusammenhängt"],
    [`Durchf${R}hrung`,       "Durchführung"],
    [`Ma${R}nahmen`,          "Maßnahmen"],
    [`${R}brigen`,            "übrigen"],
    [`${R} insbesondere`,     "– insbesondere"],  // en-dash before "insbesondere"
    [`${R} hierzu`,           "– hierzu"],         // en-dash before "hierzu"
    [`(${R}Google"`,          `("Google"`],        // opening quote before Google
    [`${R}Datenschutzerkl`,   `"Datenschutzerkl`], // opening quote
  ];

  for (const [from, to] of fixes) c = rAll(c, from, to);
  writeFileSync(file, c, "utf8");
  console.log("✓ Datenschutz.tsx pass 2");
}

// ── Impressum.tsx ─────────────────────────────────────────────────────────────
{
  const file = "src/pages/Impressum.tsx";
  let c = readFileSync(file, "utf8");

  const fixes = [
    [`enth${R}lt`,            "enthält"],
    [`pr${R}ft`,              "prüft"],
    [`${R}ft`,                "üft"],        // catch any remaining üft endings
    [`UG ${R} `,              "UG – "],      // separator after "UG"
    [`Gew${R}hr`,             "Gewähr"],
    [`${R}bernehmen`,         "übernehmen"],
    [`${R}berpr`,             "überpr"],     // prefix before üft etc.
  ];

  for (const [from, to] of fixes) c = rAll(c, from, to);
  writeFileSync(file, c, "utf8");
  console.log("✓ Impressum.tsx pass 2");
}

console.log("\nPass-2-Fixes abgeschlossen.");
