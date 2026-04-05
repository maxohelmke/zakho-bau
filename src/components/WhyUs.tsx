import { motion } from "framer-motion";
import { Shield, Clock, Users, Phone, Gem } from "lucide-react";
import firmenwagen from "@/assets/firmenwagen.png";

const points = [
  { icon: Clock, text: "Zuverlässigkeit & Termintreue" },
  { icon: Shield, text: "Transparente Preisgestaltung – keine versteckten Kosten" },
  { icon: Users, text: "Erfahrenes Team für alle Gewerke" },
  { icon: Phone, text: "Direkter Ansprechpartner – Inhaber Hasan Tatli" },
  { icon: Gem, text: "Sorgfältige Ausführung mit hochwertigen Materialien" },
];

const WhyUs = () => {
  return (
    <section className="bg-dark-section py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Vertrauen
            </p>
            <h2 className="mb-8 text-primary-foreground">
              Warum TATLI BAU?
            </h2>
            <div className="space-y-5">
              {points.map((p) => (
                <div key={p.text} className="flex items-start gap-4">
                  <div className="mt-0.5 rounded-md bg-accent/10 p-2">
                    <p.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-base text-primary-foreground/70">{p.text}</span>
                </div>
              ))}
            </div>
            <a
              href="tel:+4915254090013"
              className="mt-10 inline-flex items-center gap-3 rounded-lg border border-accent/20 bg-accent/10 px-6 py-4 text-lg font-semibold text-accent transition-colors hover:bg-accent/20"
            >
              <Phone className="h-5 w-5" />
              01525 4090013
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col items-center justify-center"
          >
            <div className="relative h-80 w-full overflow-hidden rounded-xl border border-border/40 lg:h-96">
              <img
                src={firmenwagen}
                alt="TATLI BAU Firmenwagen – täglich im Einsatz in Wuppertal und im Bergischen Land"
                loading="lazy"
                className="h-full w-full object-cover contrast-110 saturate-110"
                width={800}
                height={600}
              />
            </div>
            <div className="mt-5 rounded-xl border border-accent/20 bg-accent/10 px-6 py-5 text-center">
              <span className="font-display text-5xl font-extrabold text-accent">10+</span>
              <p className="mt-1 text-lg font-semibold text-primary-foreground">Jahre Erfahrung</p>
              <p className="text-sm text-primary-foreground/60">
                in Bau & Sanierung in Wuppertal und im Bergischen Land
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
