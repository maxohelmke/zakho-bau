import { motion } from "framer-motion";
import {
  Paintbrush,
  Hammer,
  LayoutGrid,
  Home,
  Wrench,
  Layers,
  Trash2,
  ClipboardList,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Renovierung",
    desc: "Wände, Böden, Decken und kompletter Innenausbau – wir verwandeln Ihre Räume.",
  },
  {
    icon: Wrench,
    title: "Sanierung",
    desc: "Kernsanierung, Fassadensanierung und Badsanierung nach höchsten Standards.",
  },
  {
    icon: LayoutGrid,
    title: "Trockenbau",
    desc: "Gipskarton, Zwischenwände und Deckenabhängungen – präzise und sauber.",
  },
  {
    icon: Paintbrush,
    title: "Malerarbeiten",
    desc: "Professionelle Oberflächen für Innen und Außen – fachgerecht und langlebig.",
  },
  {
    icon: Layers,
    title: "Fliesenleger",
    desc: "Bad, Küche, Terrasse und Außenbereiche – exakte Verlegung für perfekte Ergebnisse.",
  },
  {
    icon: Hammer,
    title: "Bodenverlegung",
    desc: "Parkett, Laminat, Vinyl und Estrich – für jeden Raum der richtige Boden.",
  },
  {
    icon: Trash2,
    title: "Abrissarbeiten",
    desc: "Rückbau und Entkernung – schnell, sicher und fachgerecht durchgeführt.",
  },
  {
    icon: ClipboardList,
    title: "Komplettlösungen",
    desc: "Bauleitung und Generalunternehmer – alles aus einer Hand für Ihr Projekt.",
  },
];

const Services = () => {
  return (
    <section id="leistungen" className="bg-secondary py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Unsere Leistungen
          </p>
          <h2 className="text-foreground">
            Was wir für Sie tun
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-lg border border-border bg-background p-6 transition-all hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-4 inline-flex rounded-md bg-accent/10 p-3">
                <s.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-4 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
