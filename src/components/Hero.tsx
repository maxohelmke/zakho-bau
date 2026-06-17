import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Link } from "react-router-dom";
import { useRef } from "react";

const trustItems = [
  "Gevelsberg & Umgebung",
  "Renovierung & Sanierung",
  "Kostenlose Beratung",
  "Qualität aus Erfahrung",
];

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[min(100svh,960px)] items-center overflow-hidden pt-24 sm:pt-28 lg:pt-32"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={heroBg}
          alt="Bau und Sanierung in Gevelsberg und im Ennepe-Ruhr-Kreis"
          className="h-[115%] w-full object-cover"
          width={1920}
          height={1080}
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-[#1a0505]/95" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/98 via-transparent to-black/50" />

      {/* Top red accent */}
      <div className="absolute left-0 top-0 h-[3px] w-full bg-accent" />

      {/* Subtle red tint on edge */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-accent/8 to-transparent" />

      <motion.div
        style={{ y: textY }}
        className="container relative z-10 mx-auto min-w-0 max-w-full container-pad py-16 sm:py-20 lg:py-24 xl:py-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-4xl min-w-0 text-center"
        >
          <h1 className="mb-6 font-heading text-primary-foreground sm:mb-7">
            Qualität aus{" "}
            <span className="text-gradient-red">Erfahrung.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl font-body text-base leading-relaxed text-white/60 sm:text-lg md:text-xl">
            Ihr Bau- und Sanierungsspezialist in Gevelsberg —<br className="hidden sm:block" />
            {" "}zuverlässig, sorgfältig und aus einer Hand.
          </p>

          <div className="flex w-full max-w-full flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
            <Link to="/anfragen" className="w-full min-w-0 sm:w-auto">
              <Button variant="hero" className="w-full sm:w-auto">
                Jetzt anfragen
              </Button>
            </Link>
            <a href="#leistungen" className="w-full min-w-0 sm:w-auto">
              <Button variant="heroOutline" className="w-full sm:w-auto">
                Unsere Leistungen
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:mt-14 sm:gap-6 md:gap-10"
        >
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-white/75">{item}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#leistungen"
            className="flex flex-col items-center gap-2 text-white/30 transition-colors hover:text-white/60"
          >
            <span className="text-xs uppercase tracking-widest">Mehr entdecken</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
