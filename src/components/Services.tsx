import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import imgRenovierung from "@/assets/projekt-wohnraum-boden.jpg";
import imgTrockenbau  from "@/assets/projekt-trockenbau.jpg";
import imgMaler       from "@/assets/projekt-wandgestaltung.jpg";
import imgBoden       from "@/assets/ref-fliesen.jpg";
import imgBad         from "@/assets/ref-bad-modern.jpg";
import imgAussen      from "@/assets/projekt-fassade.jpg";

const services = [
  {
    num: "01",
    title: "Renovierung",
    short: "& Modernisierung",
    desc: "Komplettrenovierungen und Wohnungssanierungen – termingerecht, sauber und zum Festpreis. Alle Gewerke koordiniert aus einer Hand.",
    href: "/leistungen#renovierung",
    image: imgRenovierung,
  },
  {
    num: "02",
    title: "Trockenbau",
    short: "& Innenausbau",
    desc: "Wände, Decken, Ständerwerk – professioneller Trockenbau für Privat- und Gewerbekunden. Präzise, sauber, termingerecht.",
    href: "/leistungen#trockenbau",
    image: imgTrockenbau,
  },
  {
    num: "03",
    title: "Malerarbeiten",
    short: "& Tapezieren",
    desc: "Innen- und Außenanstriche, Tapezierarbeiten und dekorative Wandgestaltung mit hochwertigen Materialien.",
    href: "/leistungen#malerarbeiten",
    image: imgMaler,
  },
  {
    num: "04",
    title: "Bodenbeläge",
    short: "& Fliesen",
    desc: "Verlegen von Laminat, Parkett, Vinyl und Fliesen – sauber und fachgerecht für jeden Raum.",
    href: "/leistungen#bodenbelag",
    image: imgBoden,
  },
  {
    num: "05",
    title: "Badsanierung",
    short: "Komplettsanierung",
    desc: "Komplettsanierung von Badezimmern – Fliesen, Sanitär, Trockenbau und Abdichtung aus einer Hand.",
    href: "/leistungen#sanierung",
    image: imgBad,
  },
  {
    num: "06",
    title: "Außenarbeiten",
    short: "& Fassade",
    desc: "Fassadenarbeiten, Außenputz, Wärmedämmung und kleinere Erdarbeiten rund ums Haus.",
    href: "/leistungen#aussenarbeiten",
    image: imgAussen,
  },
];

/* ── Desktop: Split-Interaktion ─────────────────────────────────────── */
const ServicesDesktop = () => {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <div className="grid grid-cols-[1fr_1fr] gap-0 lg:grid-cols-[5fr_7fr]">

      {/* Linke Spalte – Auswahlliste */}
      <div className="flex flex-col border-r border-white/10">
        {services.map((item, i) => (
          <button
            key={item.title}
            type="button"
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`group relative flex items-center gap-5 border-b border-white/8 px-6 py-6 text-left transition-all duration-200 lg:px-8 lg:py-7 ${
              active === i
                ? "bg-white/5"
                : "hover:bg-white/[0.03]"
            }`}
          >
            {/* Aktiv-Indikator */}
            <span
              className={`absolute left-0 top-0 h-full w-[3px] bg-accent transition-all duration-300 ${
                active === i ? "opacity-100" : "opacity-0"
              }`}
            />

            <span
              className={`shrink-0 font-heading text-xs font-bold tabular-nums transition-colors duration-200 ${
                active === i ? "text-accent" : "text-white/20 group-hover:text-white/40"
              }`}
            >
              {item.num}
            </span>

            <div className="min-w-0">
              <p className={`text-[10px] font-bold uppercase tracking-[0.22em] transition-colors duration-200 ${
                active === i ? "text-accent/80" : "text-white/30"
              }`}>
                {item.short}
              </p>
              <p className={`font-heading text-lg font-bold transition-colors duration-200 lg:text-xl ${
                active === i ? "text-white" : "text-white/55 group-hover:text-white/80"
              }`}>
                {item.title}
              </p>
            </div>

            <ArrowRight
              className={`ml-auto h-4 w-4 shrink-0 transition-all duration-300 ${
                active === i
                  ? "translate-x-0 text-accent opacity-100"
                  : "-translate-x-2 text-white/20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Rechte Spalte – Bild + Beschreibung */}
      <div className="relative min-h-[480px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img
              src={s.image}
              alt={`${s.title} – Zakho Bau`}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
              width={900}
              height={700}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/40 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Text-Overlay */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${active}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="absolute inset-x-0 bottom-0 p-8 lg:p-10"
          >
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
              {s.short}
            </p>
            <h3 className="mb-3 font-heading text-2xl font-bold text-white lg:text-3xl">{s.title}</h3>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/65">{s.desc}</p>
            <Link
              to={s.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all hover:gap-3"
            >
              Mehr erfahren <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

/* ── Mobile: 2-Spalten-Grid ─────────────────────────────────────────── */
const ServicesMobile = () => (
  <div className="grid grid-cols-2 gap-3">
    {services.map((s, i) => (
      <motion.div
        key={s.title}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: i * 0.07 }}
      >
        <Link
          to={s.href}
          className="group relative block overflow-hidden"
          style={{ aspectRatio: "3/4" }}
        >
          <img
            src={s.image}
            alt={`${s.title} – Zakho Bau`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            width={400}
            height={530}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/30 to-transparent" />
          <span className="absolute left-3 top-3 font-heading text-[10px] font-bold text-white/30">
            {s.num}
          </span>
          <div className="absolute inset-x-0 bottom-0 p-3">
            <p className="mb-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-accent/80">
              {s.short}
            </p>
            <p className="font-heading text-sm font-bold leading-tight text-white">{s.title}</p>
          </div>
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
        </Link>
      </motion.div>
    ))}
  </div>
);

/* ── Section ────────────────────────────────────────────────────────── */
const Services = () => (
  <section id="leistungen" className="bg-[#0E0E0E] section-pad">
    <div className="hairline-silver absolute inset-x-0 top-0 h-px" />

    <div className="container mx-auto container-pad">
      {/* Heading */}
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between md:mb-14">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Unsere Leistungen
          </p>
          <h2 className="text-white">
            Was wir für Sie <em>leisten</em>
          </h2>
        </div>
        <Link
          to="/leistungen"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white/50 transition-all hover:gap-3 hover:text-white"
        >
          Alle Leistungen <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Mobile Grid */}
      <div className="md:hidden">
        <ServicesMobile />
      </div>

      {/* Desktop Split */}
      <div className="hidden overflow-hidden border border-white/10 md:block">
        <ServicesDesktop />
      </div>
    </div>
  </section>
);

export default Services;
