import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import ownerImg from "@/assets/owner-zakho-bau.jpg";

const About = () => {
  return (
    <section id="ueber-uns" className="relative overflow-hidden bg-background section-pad">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-accent/3 to-transparent" />
      <div className="container mx-auto container-pad">
        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src={ownerImg}
                alt="Inhaber Zakho Bau Gevelsberg"
                loading="lazy"
                className="h-72 w-56 rounded-2xl object-cover shadow-xl sm:h-80 sm:w-64 lg:h-96 lg:w-72"
                width={512}
                height={768}
              />
              <div className="absolute -bottom-4 -right-4 rounded-lg bg-accent px-4 py-2 shadow-lg">
                <span className="font-heading text-sm font-bold tracking-wider text-accent-foreground">ZAKHO BAU</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Über uns
            </p>
              <h2 className="mb-6 text-foreground">
              Zakho Bau
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Zakho Bau steht für handwerkliche Qualität, Verlässlichkeit und persönlichen
              Service. Als inhabergeführtes Unternehmen mit Fokus auf Gevelsberg betreuen wir
              Projekte jeder Größe – vom Badezimmer bis zur Komplettsanierung.
            </p>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Unser Anspruch: <strong className="text-foreground">Qualität aus Erfahrung.</strong>
            </p>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0 text-accent" />
              Aktiv in Gevelsberg und im gesamten Ennepe-Ruhr-Kreis
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
