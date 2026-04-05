import { motion } from "framer-motion";
import { Star } from "lucide-react";

// TODO: Replace with real customer reviews
const reviews = [
  {
    name: "Familie Schneider",
    location: "Wuppertal",
    text: "TATLI BAU hat unsere komplette Wohnung renoviert. Alles war termingerecht, sauber und in höchster Qualität. Absolut empfehlenswert!",
  },
  {
    name: "Thomas M.",
    location: "Wuppertal",
    text: "Vom ersten Beratungsgespräch bis zur Fertigstellung alles top. Besonders die transparente Preisgestaltung hat uns überzeugt.",
  },
  {
    name: "Aylin K.",
    location: "Bergisches Land",
    text: "Herr Tatli war immer persönlich erreichbar und hat sich um jedes Detail gekümmert. Unsere Badsanierung ist perfekt geworden.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-dark-section py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Kundenstimmen
          </p>
          <h2 className="text-primary-foreground">
            Was unsere Kunden sagen
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-lg border border-primary-foreground/10 bg-dark-lighter p-6"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-primary-foreground/60">
                „{r.text}"
              </p>
              <div>
                <p className="font-semibold text-primary-foreground">{r.name}</p>
                <p className="text-xs text-primary-foreground/40">{r.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
