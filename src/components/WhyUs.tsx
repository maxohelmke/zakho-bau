import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import schaufensterImg from "@/assets/zakho-schaufenster.jpg";
import ladenImg from "@/assets/zakho-laden.jpg";

const points = [
  { label: "Termintreue", detail: "Vereinbarte Termine werden eingehalten – ohne Ausreden." },
  { label: "Festpreise", detail: "Transparente Kalkulation. Keine versteckten Nachträge." },
  { label: "Alle Gewerke", detail: "Ein Ansprechpartner für den gesamten Auftrag." },
  { label: "Persönlich", detail: "Der Inhaber ist direkt erreichbar – kein Call-Center." },
  { label: "Materialqualität", detail: "Nur geprüfte Materialien aus dem Fachhandel." },
];

const WhyUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#0f0f0f] section-pad">
      <div className="container relative mx-auto container-pad">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Büro / Ladenlokal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-xl pb-12 pr-10 sm:pb-14 sm:pr-14">
              <img
                src={schaufensterImg}
                alt="Ladenlokal und Büro von Zakho Bau mit Leistungsübersicht im Schaufenster, Gevelsberg"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-none object-cover shadow-xl ring-1 ring-white/10"
                width={1280}
                height={960}
              />
              {/* Überlappendes Detailbild unten rechts */}
              <div className="absolute bottom-0 right-0 overflow-hidden rounded-none shadow-xl ring-1 ring-white/20">
                <img
                  src={ladenImg}
                  alt="Außenansicht des Ladenlokals von Zakho Bau in der Hagener Straße 44"
                  loading="lazy"
                  className="h-28 w-40 object-cover sm:h-36 sm:w-52"
                  width={416}
                  height={288}
                />
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="mb-4 text-white">Warum <em>Zakho Bau?</em></h2>
            <div className="accent-divider mb-6 w-20" />
            <p className="mb-8 leading-relaxed text-white/55">
              Als inhabergeführter Fachbetrieb mit eigenem Ladenlokal in Gevelsberg sind wir
              persönlich für Sie da – mit kurzen Wegen, klarer Kommunikation und Qualität,
              auf die Sie sich verlassen können.
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-0 lg:grid-cols-1 xl:grid-cols-2">
              {points.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="border-t border-white/10 py-5"
                >
                  {/* Roter Akzentbalken – zieht sich beim Einblenden ein */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 + 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-3 h-[2px] w-8 origin-left bg-accent"
                  />
                  <p className="font-heading text-base font-bold text-white">{p.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/50">{p.detail}</p>
                </motion.div>
              ))}
            </div>

            <a
              href="tel:+4923328439131"
              className="mt-10 inline-flex items-center gap-3 bg-accent px-6 py-4 text-base font-bold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent/90"
            >
              <Phone className="h-5 w-5" />
              02332 8439131
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
