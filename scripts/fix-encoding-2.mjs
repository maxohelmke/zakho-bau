/**
 * Zweiter Durchlauf: verbleibende Encoding-Fehler beheben
 */
import { readFileSync, writeFileSync } from "fs";

function applyReplacements(content, list) {
  for (const [from, to] of list) {
    content = content.split(from).join(to);
  }
  return content;
}

// UeberUns.tsx
{
  const file = "src/pages/UeberUns.tsx";
  let c = readFileSync(file, "utf8");
  c = applyReplacements(c, [
    ["Pers?nliche",     "Persönliche"],
    ["pers?nliche",     "persönliche"],
    ["Mo?Fr",           "Mo–Fr"],
    ["08?17",           "08–17"],
    ["08?18",           "08–18"],
  ]);
  writeFileSync(file, c, "utf8");
  console.log("✓ UeberUns.tsx");
}

// Projekte.tsx
{
  const file = "src/pages/Projekte.tsx";
  let c = readFileSync(file, "utf8");
  c = applyReplacements(c, [
    ["Schl?sselfertiger",   "Schlüsselfertiger"],
    ["schl?sselfertiger",   "schlüsselfertiger"],
    ["W?rmepumpe",          "Wärmepumpe"],
    ["wei?en",              "weißen"],
    ["wei?e",               "weiße"],
    ["wei?",                "weiß"],
    ["R?ckwand",            "Rückwand"],
    ["abgeh?ngter",         "abgehängter"],
    ["abgeh?ngte",          "abgehängte"],
    ["Abgeh?ngte",          "Abgehängte"],
    ["Zeitgem??es",         "Zeitgemäßes"],
    ["zeitgem??",           "zeitgemäß"],
    ["D?sseldorf",          "Düsseldorf"],
    ["Aufw?ndiges",         "Aufwändiges"],
    ["aufw?ndig",           "aufwändig"],
    ["R?ckbau",             "Rückbau"],
    ["k?nnte",              "könnte"],
    ["k?nnten",             "könnten"],
    ["n?chste",             "nächste"],
    ["n?chsten",            "nächsten"],
    ["?bergabe",            "Übergabe"],
    ["Saubere ?bergabe",    "Saubere Übergabe"],
  ]);
  writeFileSync(file, c, "utf8");
  const remaining = (c.match(/[a-z?][?][a-z?]/gi) || []).length;
  console.log(`✓ Projekte.tsx  (restlich: ${remaining})`);
}

console.log("Fertig.");
