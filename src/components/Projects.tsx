import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, ChevronLeft, ChevronRight, Hammer, Building2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { STANDORTE } from "@/data/standorte";
import imgBoden from "@/assets/projekt-wohnraum-boden.jpg";
import imgFassade from "@/assets/projekt-fassade.jpg";
import imgAbriss from "@/assets/projekt-abriss-kran.jpg";
import imgBad from "@/assets/ref-badsanierung.jpg";
import imgTrockenbau from "@/assets/projekt-trockenbau.jpg";
import imgMaler from "@/assets/arbeit-malerarbeiten.png";
import imgFlurFertig from "@/assets/ref-flur-fertig.jpg";
import imgWohnungFertig from "@/assets/ref-wohnung-fertig.jpg";
import imgFassadeReihenhaus from "@/assets/ref-fassade-reihenhaus.jpg";

const projects = [
  {
    src: imgMaler,
    title: "Malerarbeiten – Zakho Bau bei der Arbeit",
    location: "Gevelsberg",
    detail: "Innenanstrich · Deckenmaler · professionell",
  },
  {
    src: imgFlurFertig,
    title: "Flursanierung – Fertiggestellt",
    location: "Ennepe-Ruhr-Kreis",
    detail: "Komplettsanierung · Wände & Decke · saubere Ausführung",
  },
  {
    src: imgWohnungFertig,
    title: "Wohnungssanierung abgeschlossen",
    location: "Gevelsberg",
    detail: "Neuer Boden · frische Wände · Türrahmen erneuert",
  },
  {
    src: imgBoden,
    title: "Wohnraum-Renovierung mit neuem Boden",
    location: "Gevelsberg",
    detail: "Komplettumbau · Parkett & Fliesen · 3 Räume",
  },
  {
    src: imgBad,
    title: "Badsanierung Komplett",
    location: "Schwelm",
    detail: "Fliesen · Sanitär · Trockenbau · aus einer Hand",
  },
  {
    src: imgTrockenbau,
    title: "Trockenbau & Innenausbau",
    location: "Gevelsberg",
    detail: "Ständerwerk · Decken · Schallschutz",
  },
  {
    src: imgFassadeReihenhaus,
    title: "Fassade & Außenarbeiten",
    location: "Ennepe-Ruhr-Kreis",
    detail: "Fassadenputz · Anstrich · moderne Optik",
  },
  {
    src: imgFassade,
    title: "Außenputz & Fassadensanierung",
    location: "Ennepe-Ruhr-Kreis",
    detail: "Außendämmung · Putzfassade · Anstrich",
  },
  {
    src: imgAbriss,
    title: "Abbruch & Entkernung",
    location: "Gevelsberg",
    detail: "Komplettentkernung · Schutzmaßnahmen · Entsorgung",
  },
];

const serviceLinks = [
  { label: "Renovierung & Modernisierung", to: "/leistungen#renovierung" },
  { label: "Trockenbau & Innenausbau", to: "/leistungen#trockenbau" },
  { label: "Malerarbeiten", to: "/leistungen#malerarbeiten" },
  { label: "Bodenbeläge & Fliesen", to: "/leistungen#bodenbelag" },
  { label: "Badsanierung", to: "/leistungen#sanierung" },
  { label: "Fassade & Außenarbeiten", to: "/leistungen#aussenarbeiten" },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback(
    (next: number) => {
      setDir(next > current ? 1 : -1);
      setCurrent(next);
    },
    [current],
  );

  const prev = () => go((current - 1 + projects.length) % projects.length);
  const next = () => go((current + 1) % projects.length);

  useEffect(() => {
    const id = setInterval(() => go((current + 1) % projects.length), 5000);
    return () => clearInterval(id);
  }, [current, go]);

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.32, 0, 0.67, 0] as const } },
    exit: (d: number) => ({ opacity: 0, x: d * -60, transition: { duration: 0.35 } }),
  };

  return (
    <section id="projekte" className="relative overflow-hidden bg-background section-pad">
      <div className="container mx-auto container-pad">
        <SectionHeading
          title={
            <>
              Unsere <em>Arbeiten</em>
            </>
          }
          description="Ein Auszug realisierter Projekte aus Gevelsberg und dem Ennepe-Ruhr-Kreis."
        />
      </div>

      <div className="relative h-[52vh] min-h-[340px] max-h-[640px] overflow-hidden sm:h-[60vh]">
        <AnimatePresence custom={dir} initial={false}>
          <motion.div
            key={current}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <img
              src={projects[current].src}
              alt={projects[current].title}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="absolute bottom-0 left-0 right-0 px-4 pb-16 sm:px-10 sm:pb-12 lg:px-16"
            >
              <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                <MapPin className="h-3.5 w-3.5" />
                {projects[current].location}
              </p>
              <h3 className="mb-1 text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                {projects[current].title}
              </h3>
              <p className="text-sm text-white/65">{projects[current].detail}</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-3 right-4 z-10 flex gap-2 sm:bottom-8 sm:right-10 lg:right-16">
          <button
            type="button"
            onClick={prev}
            aria-label="Vorheriges Projekt"
            className="flex h-11 w-11 items-center justify-center border border-white/40 text-white transition-colors hover:bg-white/15"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Nächstes Projekt"
            className="flex h-11 w-11 items-center justify-center border border-white/40 text-white transition-colors hover:bg-white/15"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative mt-14 overflow-hidden border-t border-foreground/8 bg-[#0f0f0f] sm:mt-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${imgFassade})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/92 to-[#0f0f0f]/75" />
        <div className="absolute left-0 top-0 h-1 w-full bg-accent" />

        <div className="container relative z-10 mx-auto container-pad py-14 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="mb-10 max-w-2xl lg:mb-12"
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-accent">
              Referenzen · Leistungen · Standorte
            </p>
            <h2 className="mb-4 text-white">
              Renovierung & Sanierung mit nachweisbaren Ergebnissen
            </h2>
            <p className="text-base leading-relaxed text-white/55 sm:text-[1.05rem] sm:leading-8">
              Ob Badsanierung in Schwelm, Wohnungsrenovierung in Gevelsberg oder Fassadenarbeiten im
              Ennepe-Ruhr-Kreis: Zakho Bau dokumentiert fertige Projekte und begleitet Bauherren von
              der kostenlosen Besichtigung bis zur Übergabe. Entdecken Sie unsere Referenzen,
              Leistungen und lokalen Seiten – so finden Sie schneller den passenden Einstieg für Ihr
              Vorhaben.
            </p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14 xl:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white/35">
                <Hammer className="h-3.5 w-3.5 text-accent" />
                Leistungen
              </p>
              <ul className="divide-y divide-white/10 border-t border-white/10">
                {serviceLinks.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="group flex min-h-[48px] items-center justify-between gap-4 py-3.5 text-sm text-white/70 transition-colors hover:text-white"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-accent opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/leistungen"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
              >
                Alle Leistungen <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white/35">
                <Building2 className="h-3.5 w-3.5 text-accent" />
                Einsatzgebiete
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 border-t border-white/10 pt-1 sm:grid-cols-3">
                {STANDORTE.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/standort/${s.slug}`}
                    className="flex min-h-[44px] items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
                  >
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-accent/80" />
                    {s.name}
                  </Link>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-white/40">
                Weitere Informationen zu Abläufen, Festpreisen und typischen Projekten finden Sie auf
                den jeweiligen Standortseiten sowie unter{" "}
                <Link to="/faq" className="text-white/65 underline-offset-2 hover:text-white hover:underline">
                  FAQ
                </Link>
                {" "}und{" "}
                <Link to="/ueber-uns" className="text-white/65 underline-offset-2 hover:text-white hover:underline">
                  Über uns
                </Link>
                .
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:mt-14 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-heading text-lg font-bold text-white sm:text-xl">
                Ihr Projekt könnte das nächste sein.
              </p>
              <p className="mt-1 text-sm text-white/45">
                Kostenlose Besichtigung · transparentes Festpreisangebot
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/projekte"
                className="inline-flex w-full items-center justify-center gap-2 bg-accent px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-accent/90 sm:w-auto"
              >
                Alle Projekte ansehen <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/anfragen"
                className="inline-flex w-full items-center justify-center gap-2 border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5 sm:w-auto"
              >
                Projekt anfragen
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
