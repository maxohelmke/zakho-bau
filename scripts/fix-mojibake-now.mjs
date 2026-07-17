import { writeFileSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const ae = "\u00E4";
const oe = "\u00F6";
const ue = "\u00FC";
const ss = "\u00DF";
const nd = "\u2013";
const md = "\u00B7";

const testimonials = `import { useState, useCallback, useEffect } from "react";
import rinasSw from "@/assets/rinas-mola-sw.png";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    text: "Zakho Bau hat unsere komplette Wohnung renoviert. Alles war termingerecht, sauber und in h${oe}chster Qualit${ae}t.",
    name: "Familie Schneider",
    location: "Gevelsberg",
  },
  {
    text: "Vom ersten Beratungsgespr${ae}ch bis zur Fertigstellung alles top. Die transparente Preisgestaltung hat uns besonders ${ue}berzeugt.",
    name: "Thomas M.",
    location: "Gevelsberg",
  },
  {
    text: "Der Inhaber war immer pers${oe}nlich erreichbar und hat sich um jedes Detail gek${ue}mmert. Unsere Badsanierung ist perfekt geworden.",
    name: "Aylin K.",
    location: "Ennepe-Ruhr-Kreis",
  },
  {
    text: "Saubere Arbeit, klare Kommunikation und eine ordentliche Baustelle. Das Ergebnis ist genau so geworden, wie wir es uns vorgestellt haben.",
    name: "S. Berger",
    location: "Schwelm",
  },
  {
    text: "Schnelle R${ue}ckmeldung, transparente Positionen im Angebot und termingerechte Umsetzung. Sehr zuverl${ae}ssig.",
    name: "N. Demir",
    location: "Gevelsberg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback((next: number) => {
    setDir(next > current ? 1 : -1);
    setCurrent(next);
  }, [current]);

  useEffect(() => {
    const id = setTimeout(() => go((current + 1) % reviews.length), 6000);
    return () => clearTimeout(id);
  }, [current, go]);

  const variants = {
    enter: (d: number) => ({ opacity: 0, y: d * 16 }),
    center: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
    exit: (d: number) => ({ opacity: 0, y: d * -12, transition: { duration: 0.35 } }),
  };

  return (
    <section className="bg-[#f7f7f7] section-pad">
      <div className="container mx-auto container-pad">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between"
          >
            <div>
              <div className="mb-8 h-px w-12 bg-accent" />
              <h2>Was unsere <em>Kunden</em> sagen</h2>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={rinasSw}
                  alt="Rinas Mola ${nd} Inhaber Zakho Bau"
                  className="h-16 w-16 rounded-full object-cover object-top grayscale"
                  width={64}
                  height={64}
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-bold text-foreground">Rinas Mola</p>
                  <p className="text-xs text-muted-foreground">Inhaber ${md} Zakho Bau</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-1 lg:mt-0">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={\`Bewertung \${i + 1}\`}
                  className="flex min-h-[44px] min-w-[44px] items-center justify-center"
                >
                  <span
                    className={\`block transition-all duration-300 \${
                      i === current
                        ? "h-1 w-8 bg-accent"
                        : "h-1 w-3 bg-foreground/20 hover:bg-foreground/40"
                    }\`}
                  />
                </button>
              ))}
            </div>
          </motion.div>

          <div className="relative min-h-[220px]">
            <AnimatePresence custom={dir} initial={false} mode="wait">
              <motion.div
                key={current}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <span
                  aria-hidden
                  className="mb-2 block font-sans text-6xl font-black leading-none text-accent/15 sm:mb-4 sm:text-8xl"
                >
                  "
                </span>

                <blockquote className="mb-6 font-heading text-lg font-semibold leading-snug text-foreground sm:text-xl lg:text-2xl">
                  {reviews[current].text}
                </blockquote>

                <div className="flex items-center gap-4 border-t border-foreground/10 pt-6">
                  <div className="h-px flex-1 bg-foreground/8" />
                  <div className="text-right">
                    <p className="font-heading text-sm font-bold text-foreground">
                      {reviews[current].name}
                    </p>
                    <p className="text-xs text-muted-foreground">{reviews[current].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
`;

writeFileSync(join(root, "src/components/Testimonials.tsx"), testimonials, "utf8");
console.log("OK Testimonials.tsx");

const standortPath = join(root, "src/pages/StandortLanding.tsx");
let s = readFileSync(standortPath, "utf8");

// Match UTF-8 replacement garbage: U+FFFD, and "ï¿½" (EF BF BD misread as Latin-1 then re-encoded)
for (const g of [
  /\uFFFD/g,
  /\u00EF\u00BF\u00BD/g,
  /\u00C3\u00AF\u00C2\u00BF\u00C2\u00BD/g,
]) {
  s = s.replace(g, "\u0001");
}

const wordFixes = [
  ["R\u0001ckmeldung", `R${ue}ckmeldung`],
  ["l\u0001uft", `l${ae}uft`],
  ["H\u0001ufige", `H${ae}ufige`],
  ["St\u0001dten", `St${ae}dten`],
  ["f\u0001r", `f${ue}r`],
  ["Hintergrund \u0001 dekorativ", `Hintergrund ${nd} dekorativ`],
  ["Ablauf \u0001 horizontale", `Ablauf ${nd} horizontale`],
  ["Fakten \u0001 Split", `Fakten ${nd} Split`],
  [".name} \u0001 was", `.name} ${nd} was`],
  ["Erstberatung \u0001 wir", `Erstberatung ${nd} wir`],
];

for (const [from, to] of wordFixes) s = s.split(from).join(to);

const left = (s.match(/\u0001/g) || []).length;
if (left) {
  console.warn("leftover markers:", left);
  s = s.replace(/\u0001/g, nd);
}

writeFileSync(standortPath, s, "utf8");
console.log("OK StandortLanding.tsx");

function walk(d, a = []) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) {
      if (!["node_modules", "dist", ".git"].includes(f)) walk(p, a);
    } else if (/\.(tsx?|html)$/.test(f)) a.push(p);
  }
  return a;
}

const bad = [];
for (const f of walk(join(root, "src")).concat([join(root, "index.html")])) {
  const t = readFileSync(f, "utf8");
  if (
    t.includes("\uFFFD") ||
    t.includes("\u00EF\u00BF\u00BD") ||
    /[\u0080-\u009F]/.test(t) ||
    /Ã.|Â./.test(t)
  ) {
    bad.push(f.replace(root + "\\", "").replace(root + "/", ""));
  }
}
console.log(bad.length ? "STILL BAD:\n" + bad.join("\n") : "All clean");
