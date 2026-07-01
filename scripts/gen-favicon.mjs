import sharp from "sharp";
import { writeFileSync } from "fs";

const src = "src/assets/zakho-bau-logo.png";

const sizes = [
  { size: 16,  out: "public/favicon-16.png" },
  { size: 32,  out: "public/favicon-32.png" },
  { size: 180, out: "public/apple-touch-icon.png" },
  { size: 192, out: "public/icon-192.png" },
  { size: 512, out: "public/icon-512.png" },
];

for (const { size, out } of sizes) {
  await sharp(src)
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(out);
  console.log("OK", out);
}

// favicon.svg mit eingebettetem 64px-PNG
const buf = await sharp(src)
  .resize(64, 64, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

const b64 = buf.toString("base64");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><image href="data:image/png;base64,${b64}" width="64" height="64"/></svg>`;
writeFileSync("public/favicon.svg", svg);
console.log("OK public/favicon.svg");
