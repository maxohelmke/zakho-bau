import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ownerImg from "@/assets/rinas-mola.png";
import workImg from "@/assets/arbeit-innen.png";

const About = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={ref} id="ueber-uns" className="relative overflow-hidden bg-background">
      <div className="grid lg:grid-cols-2">

        {/* Linke Hälfte: Bild mit Parallax */}
        <div className="relative min-h-[300px] overflow-hidden sm:min-h-[380px] lg:min-h-[600px]">
          <motion.div style={{ y: imgY }} className="absolute inset-[-8%] will-change-transform">
            <img
              src={ownerImg}
              alt="Rinas Mola – Inhaber Zakho Bau"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top"
              width={800}
              height={1000}
            />
          </motion.div>
          {/* Gradient rechts für Übergang */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/60 hidden lg:block" />

          {/* Kleines Ladenbild – unten links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-6 left-6 w-36 overflow-hidden border border-white/20 shadow-2xl sm:bottom-8 sm:left-8 sm:w-44"
          >
            <img
              src={workImg}
              alt="Zakho Bau bei der Arbeit – Innenausbau"
              loading="lazy"
              decoding="async"
              className="h-24 w-full object-cover sm:h-28"
              width={352}
              height={224}
            />
            <p className="bg-black/80 px-3 py-1.5 text-[10px] font-medium tracking-wider text-white/70">
              Rinas Mola · Inhaber
            </p>
          </motion.div>
        </div>

        {/* Rechte Hälfte: Statement + Text */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center px-5 py-12 sm:px-10 sm:py-16 lg:px-16 xl:px-20"
        >
          {/* Roter Akzentbalken */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 h-px w-14 origin-left bg-accent"
          />

          <h2 className="mb-6">
            Wir bauen.<br />
            <em>Mit Anspruch.</em>
          </h2>

          <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Zakho Bau steht für handwerkliche Qualität, Verlässlichkeit und persönlichen
            Service. Als inhabergeführtes Unternehmen betreuen wir Projekte jeder Größe —
            vom Badezimmer bis zur Komplettsanierung.
          </p>

          <p className="mb-10 text-base leading-relaxed text-muted-foreground">
            Unser Ladenlokal in Gevelsberg ist der Beweis: Wir sind nicht irgendwo —
            wir sind <strong className="text-foreground font-semibold">vor Ort</strong>.
          </p>

          <div className="flex flex-row flex-wrap gap-6 border-t border-foreground/10 pt-8 sm:gap-12">
            <div>
              <p className="font-heading text-3xl font-black text-foreground sm:text-4xl">200+</p>
              <p className="mt-1 text-sm text-muted-foreground">abgeschlossene Projekte</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-black text-foreground sm:text-4xl">10+</p>
              <p className="mt-1 text-sm text-muted-foreground">Jahre Erfahrung</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-black text-foreground sm:text-4xl">6</p>
              <p className="mt-1 text-sm text-muted-foreground">Regionen in NRW</p>
            </div>
          </div>

          <Link
            to="/ueber-uns"
            className="mt-10 inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent transition-all hover:gap-3"
          >
            Mehr über uns <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
