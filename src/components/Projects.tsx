import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import refRaum from "@/assets/ref-raumsanierung.png";
import refBad from "@/assets/ref-badsanierung.png";
import refFlur from "@/assets/ref-flur-beleuchtung.png";
import refTrockenbau from "@/assets/ref-raum-trockenbau.png";
import refBadModern from "@/assets/ref-bad-modern.png";
import firmenwagen from "@/assets/zakho-firmenwagen.jpg";

const projects = [
  { src: refBad, title: "Luxusbad mit Eckwanne", location: "Gevelsberg" },
  { src: refRaum, title: "Wohnraum-Sanierung mit Parkett", location: "Gevelsberg" },
  { src: refFlur, title: "Flur mit LED-Lichtkonzept", location: "Ennepe-Ruhr-Kreis" },
  { src: refBadModern, title: "Modernes Designerbad", location: "Gevelsberg" },
  { src: refTrockenbau, title: "Trockenbau-Decke mit Beleuchtung", location: "Ennepe-Ruhr-Kreis" },
  { src: firmenwagen, title: "Zakho Bau im Einsatz", location: "Gevelsberg & Ennepe-Ruhr-Kreis" },
];

const Projects = () => {
  return (
    <section id="projekte" className="relative overflow-hidden bg-background section-pad">
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
          <h2 className="text-foreground">Unsere Arbeiten</h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group relative cursor-pointer overflow-hidden rounded-xl"
            >
              <img
                src={p.src}
                alt={`${p.title} – Zakho Bau ${p.location}`}
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-64 lg:h-72 xl:h-80"
                width={800}
                height={608}
              />
              {/* Permanent gradient base */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-accent/0 transition-colors duration-500 group-hover:bg-accent/20" />
              {/* Red left border on hover */}
              <div className="absolute bottom-0 left-0 top-0 w-[3px] origin-bottom scale-y-0 bg-accent transition-transform duration-500 group-hover:scale-y-100" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <p className="translate-y-1 text-base font-bold text-white transition-transform duration-300 group-hover:translate-y-0 sm:text-lg">
                  {p.title}
                </p>
                <div className="flex items-center gap-1.5 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  <p className="text-sm text-white/80">{p.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="mb-5 text-base text-muted-foreground">
            Ihre Immobilie könnte das nächste sein.
          </p>
          <Link to="/projekte">
            <Button variant="accent" size="lg" className="gap-2">
              Alle Projekte ansehen <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
