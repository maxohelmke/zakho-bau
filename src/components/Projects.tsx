import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import imgBoden from "@/assets/projekt-wohnraum-boden.jpg";
import imgFassade from "@/assets/projekt-fassade.jpg";
import imgAbriss from "@/assets/projekt-abriss-kran.jpg";
import imgBad from "@/assets/ref-badsanierung.jpg";
import imgTrockenbau from "@/assets/projekt-trockenbau.jpg";
import imgMaler from "@/assets/ref-malerarbeiten.jpg";

const projects = [
  {
    src: imgBoden,
    title: "Wohnraum-Renovierung mit neuem Boden",
    location: "Gevelsberg",
    detail: "Komplettumbau · Parkett & Fliesen · 3 Räume",
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
    src: imgMaler,
    title: "Malerarbeiten & Wandgestaltung",
    location: "Ennepetal",
    detail: "Innenanstrich · Tapezieren · dekorative Oberflächen",
  },
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

  // Autoplay
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
          title={<>Unsere <em>Arbeiten</em></>}
          description="Ein Auszug realisierter Projekte aus Gevelsberg und dem Ennepe-Ruhr-Kreis."
        />
      </div>

      {/* Fullwidth Slider */}
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

            {/* Projekt-Info */}
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

        {/* Navigation */}
        <div className="absolute bottom-3 right-4 z-10 flex gap-2 sm:bottom-8 sm:right-10 lg:right-16">
          <button
            onClick={prev}
            aria-label="Vorheriges Projekt"
            className="flex h-11 w-11 items-center justify-center border border-white/40 text-white transition-colors hover:bg-white/15"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Nächstes Projekt"
            className="flex h-11 w-11 items-center justify-center border border-white/40 text-white transition-colors hover:bg-white/15"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

      </div>

      {/* Alle Projekte CTA */}
      <div className="container mx-auto container-pad">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-between"
        >
          <p className="text-base text-muted-foreground">
            Ihre Immobilie könnte das nächste sein.
          </p>
          <Link
            to="/projekte"
            className="inline-flex w-full items-center justify-center gap-2 bg-accent px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-accent/90 sm:w-auto sm:justify-start"
          >
            Alle Projekte ansehen <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
