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
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* BG Image */}
      <img
        src={heroBg}
        alt="Bau und Sanierung in Solingen NRW"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/80 to-foreground/60" />

      <div className="container relative z-10 mx-auto px-4 py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Ihr zuverlässiger Partner für{" "}
            <span className="text-gradient-gold">Bau & Sanierung</span> in NRW
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/70 md:text-xl">
            Von der Renovierung bis zur Komplettsanierung – TATLI BAU liefert Qualität
            aus einer Hand. Für Privat- und Gewerbekunden im Raum Solingen, Wuppertal &
            Düsseldorf.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="#kontakt">
              <Button variant="hero">Jetzt Anfrage stellen</Button>
            </a>
            <a href="#leistungen">
              <Button variant="heroOutline">Unsere Leistungen</Button>
            </a>
          </div>
        </motion.div>

        {/* Trust Bar */}
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
