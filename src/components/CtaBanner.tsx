import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CtaBanner = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-red-dark" />
      {/* Diagonal light rays */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(255,255,255,0.08) 60px, rgba(255,255,255,0.08) 61px)",
        }}
      />
      {/* Glow orb */}
      <div className="absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-black/30 blur-3xl" />

      <div className="container relative mx-auto container-pad">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
            Kostenlose Beratung · Kein Risiko
          </p>
          <h2 className="mb-5 text-white">
            Ihr Projekt. Unser Handwerk.
          </h2>
          <p className="mb-8 text-base leading-relaxed text-white/70 sm:text-lg">
            Wir melden uns innerhalb von 24 Stunden mit einem unverbindlichen Angebot.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link to="/anfragen">
              <Button
                className="gap-2 bg-white px-8 py-3 text-base font-bold text-[#CC1515] shadow-lg hover:bg-white/95 hover:text-[#AA1010]"
                size="lg"
              >
                Jetzt anfragen <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a
              href="tel:+4915788888852"
              className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/5 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              +49 1578 8888852
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;


