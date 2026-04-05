import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const trustItems = [
  "Über 10 Jahre Erfahrung",
  "Alle Gewerke aus einer Hand",
  "Kostenlose Beratung",
];

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24 md:pt-28">
      <img
        src={heroBg}
        alt="Bau und Sanierung in Wuppertal und im Bergischen Land"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/65 to-foreground/40" />

      <div className="container relative z-10 mx-auto min-w-0 max-w-full px-4 py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl min-w-0"
        >
          <h1 className="mb-6 font-heading text-primary-foreground">
            Ihr zuverlässiger Partner für{" "}
            <span className="text-accent">Bau & Sanierung</span> in Wuppertal
          </h1>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-primary-foreground/70 font-body md:text-xl">
            Von der Renovierung bis zur Komplettsanierung – TATLI BAU liefert Qualität
            aus einer Hand. Für Privat- und Gewerbekunden in Wuppertal und im gesamten
            Bergischen Land.
          </p>
          <div className="flex w-full max-w-full flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a href="#kontakt" className="w-full min-w-0 sm:w-auto">
              <Button variant="hero" className="w-full sm:w-auto">
                Jetzt Anfrage stellen
              </Button>
            </a>
            <a href="#leistungen" className="w-full min-w-0 sm:w-auto">
              <Button variant="heroOutline" className="w-full sm:w-auto">
                Unsere Leistungen
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 flex flex-wrap gap-6 md:gap-10"
        >
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-primary-foreground/80">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
