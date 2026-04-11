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
    <section className="relative flex min-h-[min(100svh,940px)] items-center overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      <img
        src={heroBg}
        alt="Bau und Sanierung in Wuppertal und im Bergischen Land"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/78 to-black/62" />

      <div className="container relative z-10 mx-auto min-w-0 max-w-full container-pad py-16 sm:py-20 lg:py-24 xl:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-3xl min-w-0 text-center"
        >
          <h1 className="mb-5 font-heading text-primary-foreground sm:mb-6">
            Ihr zuverlässiger Partner für{" "}
            <span className="text-accent">Bau & Sanierung</span> in Wuppertal
          </h1>
          <p className="mx-auto mb-8 max-w-2xl font-body text-base leading-relaxed text-primary-foreground/75 sm:mb-10 sm:text-lg md:text-xl">
            Von der Renovierung bis zur Komplettsanierung – TATLI BAU liefert Qualität
            aus einer Hand. Für Privat- und Gewerbekunden in Wuppertal und im gesamten
            Bergischen Land.
          </p>
          <div className="flex w-full max-w-full flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
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
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:mt-12 sm:gap-6 md:gap-10"
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
