import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const lines = [
  { text: "Renoviert.", em: true },
  { text: "Pünktlich.", em: false },
  { text: "Aus einer Hand.", em: false },
];

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[560px] items-end overflow-hidden pb-12 pt-20 sm:items-center sm:min-h-[640px] sm:pb-0 sm:pt-24"
      style={{ height: "100svh", maxHeight: "1000px" }}
    >
      {/* Parallax-Hintergrundbild */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 will-change-transform">
        <img
          src={heroBg}
          alt="Zakho Bau – Baustelle mit Fachleuten"
          className="h-full w-full object-cover object-center [transform:scaleX(-1)]"
          style={{ opacity: 0.85 }}
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </motion.div>

      {/* Overlays – links dunkel für Text, rechts offen für Bild */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      {/* Roter Akzentstreifen */}
      <div className="absolute left-0 top-0 z-10 h-[3px] w-full bg-accent" />

      {/* Vertikale Jahresangabe */}
      <div className="pointer-events-none absolute right-7 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
        <span className="block rotate-90 whitespace-nowrap font-heading text-[10px] font-bold uppercase tracking-[0.55em] text-white/25">
          Gevelsberg · NRW · Est. 2014
        </span>
      </div>

      <motion.div
        style={{ y: contentY }}
        className="container relative z-10 mx-auto min-w-0 max-w-full container-pad"
      >
        {/* Cinematischer Zeilen-Reveal */}
        <h1
          className="mb-6 max-w-3xl font-heading sm:mb-10"
          style={{ textShadow: "0 2px 32px rgba(0,0,0,0.55)" }}
        >
          {lines.map((line, i) => (
            <div key={i} className="overflow-hidden leading-[1.06]">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, delay: 0.25 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                {line.em ? (
                  <em className="not-italic font-bold text-accent">{line.text}</em>
                ) : (
                  <span className="text-white">{line.text}</span>
                )}
              </motion.span>
            </div>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: "easeOut" }}
          className="max-w-lg"
        >
          <p className="mb-6 text-base leading-relaxed text-white/80 sm:mb-8 sm:text-lg">
            Wir renovieren, sanieren und bauen aus — termingerecht, transparent
            und mit einem persönlichen Ansprechpartner von Anfang bis Ende.
          </p>

          <div className="flex w-full max-w-full flex-col gap-3 sm:flex-row">
            <Link to="/anfragen" className="w-full min-w-0 sm:w-auto">
              <Button variant="hero" className="w-full gap-2.5 sm:w-auto">
                Kostenlos anfragen <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/projekte" className="w-full min-w-0 sm:w-auto">
              <Button variant="heroOutline" className="w-full sm:w-auto">
                Unsere Projekte
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
