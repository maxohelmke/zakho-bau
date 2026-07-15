/**
 * Repariert verbleibende Encoding-Fehler:
 * 1) Windows-1252-Bytes als Unicode C1-Steuerzeichen (U+0080–U+009F)
 * 2) UTF-8-Mojibake (z. B. Ã¤, Â–, â€")
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const ROOT = join(import.meta.dirname, "..");

const WIN1252 = {
  0x80: "\u20AC", 0x82: "\u201A", 0x83: "\u0192", 0x84: "\u201E",
  0x85: "\u2026", 0x86: "\u2020", 0x87: "\u2021", 0x88: "\u02C6",
  0x89: "\u2030", 0x8A: "\u0160", 0x8B: "\u2039", 0x8C: "\u0152",
  0x8E: "\u017D", 0x91: "\u2018", 0x92: "\u2019", 0x93: "\u201C",
  0x94: "\u201D", 0x95: "\u2022", 0x96: "\u2013", 0x97: "\u2014",
  0x98: "\u02DC", 0x99: "\u2122", 0x9A: "\u0161", 0x9B: "\u203A",
  0x9C: "\u0153", 0x9E: "\u017E", 0x9F: "\u0178",
};

function collectFiles(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      if (name === "node_modules" || name === "dist") continue;
      out.push(...collectFiles(full));
    } else if ([".ts", ".tsx", ".html"].includes(extname(name))) {
      out.push(full);
    }
  }
  return out;
}

function fixWin1252Controls(text) {
  return text.replace(/[\u0080-\u009F]/g, (ch) => WIN1252[ch.charCodeAt(0)] ?? ch);
}

function fixMojibake(text) {
  if (!/[ÃÂâ€]/.test(text)) return text;
  const fixed = Buffer.from(text, "latin1").toString("utf8");
  if (fixed.includes("\uFFFD")) return text;
  return fixed;
}

function hasIssues(text) {
  return (
    /[\u0080-\u009F]/.test(text) ||
    /[ÃÂ]/.test(text) ||
    /â€[œžŸ"]/.test(text)
  );
}

const files = [...collectFiles(join(ROOT, "src")), join(ROOT, "index.html")];
let fixedCount = 0;

for (const file of files) {
  const original = readFileSync(file, "utf8");
  if (!hasIssues(original)) continue;

  let text = fixWin1252Controls(original);
  text = fixMojibake(text);
  text = fixWin1252Controls(text);

  if (text !== original) {
    writeFileSync(file, text, "utf8");
    fixedCount++;
    const rel = file.replace(ROOT + "\\", "").replace(ROOT + "/", "");
    console.log("FIX:", rel);
  }
}

console.log(`\n${fixedCount} Datei(en) repariert.`);

// Verifikation
const remaining = [];
for (const file of files) {
  const text = readFileSync(file, "utf8");
  if (hasIssues(text) || text.includes("\uFFFD")) {
    remaining.push(file.replace(ROOT + "\\", "").replace(ROOT + "/", ""));
  }
}
console.log(remaining.length ? `Noch problematisch:\n${remaining.join("\n")}` : "All clean");
