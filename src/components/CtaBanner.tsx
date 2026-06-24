import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import bgImg from "@/assets/hero-ueber-uns.jpg";

const CtaBanner = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[60vh] items-center justify-center overflow-hidden"
    >
      {/* Parallax-Hintergrundbild */}
      <motion.div style={{ y: bgY }} className="absolute inset-[-15%] will-change-transform">
        <img
          src={bgImg}
          alt=""
          aria-hidden
          className="h-full w-full object-cover object-center"
          loading="lazy"
          decoding="async"
          width={1920}
          height={1080}
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/82" />
      {/* Roter Akzentstreifen oben */}
      <div className="absolute left-0 top-0 h-1 w-full bg-accent" />

      <div className="container relative z-10 mx-auto container-pad py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-8 text-white">
            Ihr Projekt. <em>Unser Einsatz.</em>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            Wir melden uns innerhalb von 24 Stunden mit einem unverbindlichen Angebot.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <Link to="/anfragen" className="w-full sm:w-auto">
              <button className="inline-flex w-full items-center justify-center gap-2 bg-accent px-9 py-4 text-base font-bold text-white shadow-lg shadow-accent/30 transition-colors hover:bg-accent/90 sm:w-auto">
                Jetzt anfragen <ArrowRight className="h-5 w-5" />
              </button>
            </Link>
            <a
              href="tel:+4923328439131"
              className="inline-flex w-full items-center justify-center gap-2 border border-white/30 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              02332 8439131
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
