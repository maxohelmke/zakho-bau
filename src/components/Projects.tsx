import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import refRaum from "@/assets/ref-raumsanierung.png";
import refBad from "@/assets/ref-badsanierung.png";
import refFlur from "@/assets/ref-flur-beleuchtung.png";
import refTrockenbau from "@/assets/ref-raum-trockenbau.png";
import refBadModern from "@/assets/ref-bad-modern.png";
import firmenwagen from "@/assets/firmenwagen.png";

const projects = [
  { src: refBad, title: "Luxusbad mit Eckwanne", location: "Wuppertal" },
  { src: refRaum, title: "Wohnraum-Sanierung mit Parkett", location: "Wuppertal" },
  { src: refFlur, title: "Flur mit LED-Lichtkonzept", location: "Bergisches Land" },
  { src: refBadModern, title: "Modernes Designerbad", location: "Wuppertal" },
  { src: refTrockenbau, title: "Trockenbau-Decke mit Beleuchtung", location: "Bergisches Land" },
  { src: firmenwagen, title: "TATLI BAU im Einsatz", location: "Wuppertal & Bergisches Land" },
];

const Projects = () => {
  return (
    <section id="projekte" className="bg-background section-pad">
      <div className="container mx-auto container-pad">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center sm:mb-12 lg:mb-16"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Referenzen
          </p>
          <h2 className="text-foreground">
            Unsere Arbeiten
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card"
            >
              <img
                src={p.src}
                alt={`${p.title} – TATLI BAU ${p.location}`}
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-64 lg:h-72 xl:h-80"
                width={800}
                height={608}
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent">
                <div className="p-5">
                  <p className="text-base font-semibold text-primary-foreground sm:text-lg">{p.title}</p>
                  <p className="text-sm text-accent">{p.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-lg text-muted-foreground">
            Ihre Immobilie könnte das nächste sein.
          </p>
          <Link to="/projekte">
            <Button variant="accent">Alle Projekte ansehen</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
