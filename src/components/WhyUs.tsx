import { motion } from "framer-motion";
import { Shield, Clock, Users, Phone, Gem } from "lucide-react";
import firmenwagen from "@/assets/zakho-firmenwagen.jpg";

const points = [
  { icon: Clock, text: "Zuverlässigkeit & Termintreue" },
  { icon: Shield, text: "Transparente Preisgestaltung – keine versteckten Kosten" },
  { icon: Users, text: "Erfahrenes Team für alle Gewerke" },
  { icon: Phone, text: "Direkter Ansprechpartner – Inhaber persönlich erreichbar" },
  { icon: Gem, text: "Sorgfältige Ausführung mit hochwertigen Materialien" },
];

const WhyUs = () => {
  return (
    <section className="bg-secondary section-pad">
      <div className="container mx-auto container-pad">
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
            <h2 className="mb-8 text-foreground">Warum Zakho Bau?</h2>
            <div className="space-y-4">
              {points.map((p) => (
                <div key={p.text} className="flex items-start gap-4">
                  <div className="mt-0.5 rounded-md bg-accent/10 p-2 shrink-0">
                    <p.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-base text-foreground/75">{p.text}</span>
                </div>
              ))}
            </div>
            <a
              href="tel:+4915788888852"
              className="mt-10 inline-flex items-center gap-3 rounded-lg border border-accent bg-accent px-6 py-4 text-base font-bold text-white transition-colors hover:bg-accent/90"
            >
              <Phone className="h-5 w-5" />
              +49 1578 8888852
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col items-center justify-center"
          >
            <div className="relative w-full overflow-hidden rounded-xl shadow-md">
              <img
                src={firmenwagen}
                alt="Zakho Bau Firmenwagen – täglich im Einsatz in Gevelsberg und im Ennepe-Ruhr-Kreis"
                loading="lazy"
                className="h-64 w-full object-cover sm:h-72 lg:h-80"
                width={800}
                height={600}
              />
              {/* Badge */}
              <div className="absolute bottom-4 left-4 rounded-lg bg-white px-4 py-3 shadow-lg">
                <span className="font-heading text-3xl font-bold text-accent">10+</span>
                <p className="text-xs font-medium text-foreground/70">Jahre Erfahrung</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
