import { motion } from "framer-motion";
import ownerImg from "@/assets/owner-portrait.jpg";

const About = () => {
  return (
    <section id="ueber-uns" className="bg-secondary py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
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
                alt="Hasan Tatli – Inhaber TATLI BAU Solingen"
                loading="lazy"
                className="h-80 w-80 rounded-2xl object-cover shadow-xl"
                width={512}
                height={512}
              />
              <div className="absolute -bottom-4 -right-4 rounded-lg bg-accent px-4 py-2 text-sm font-bold text-accent-foreground shadow-lg">
                Inhaber
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
              Hasan Tatli
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              TATLI BAU steht für handwerkliche Qualität, Verlässlichkeit und persönlichen
              Service. Als inhabergeführtes Unternehmen im Herzen von NRW betreuen wir
              Projekte jeder Größe – vom Badezimmer bis zur Komplettsanierung.
            </p>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              Unser Anspruch: <strong className="text-foreground">Sauber, pünktlich, perfekt.</strong>
            </p>
            <p className="text-sm text-muted-foreground">
              📍 Aktiv in Solingen, Wuppertal, Düsseldorf und dem gesamten Bergischen Land
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
