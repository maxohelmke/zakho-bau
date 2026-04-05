import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  {
    src: project1,
    title: "Badsanierung",
    location: "Solingen",
    category: "Sanierung",
    description: "Komplette Badsanierung inkl. neuer Fliesen, Sanitäranlagen und moderner Beleuchtung. Aus einem veralteten Badezimmer wurde ein zeitgemäßer Wohlfühlraum.",
  },
  {
    src: project2,
    title: "Wohnungsrenovierung",
    location: "Düsseldorf",
    category: "Renovierung",
    description: "Umfassende Renovierung einer 3-Zimmer-Wohnung: neue Böden, Wandgestaltung, Deckenarbeiten und kompletter Innenausbau in nur 4 Wochen.",
  },
  {
    src: project3,
    title: "Küchenumbau",
    location: "Wuppertal",
    category: "Renovierung",
    description: "Modernisierung einer Küche mit neuem Fliesenspiegel, Bodenbelag und Wandanpassungen für eine offene Raumgestaltung.",
  },
  {
    src: project4,
    title: "Fassadensanierung",
    location: "Solingen",
    category: "Sanierung",
    description: "Energetische Fassadensanierung eines Mehrfamilienhauses mit Wärmedämmverbundsystem und neuem Außenanstrich.",
  },
  {
    src: project5,
    title: "Trockenbau & Decken",
    location: "Düsseldorf",
    category: "Trockenbau",
    description: "Dachgeschossausbau mit Trockenbau-Ständerwerk, abgehängten Decken mit integrierter LED-Beleuchtung und Schallschutzwänden.",
  },
  {
    src: project6,
    title: "Gewerberenovierung",
    location: "Wuppertal",
    category: "Komplett",
    description: "Schlüsselfertige Renovierung einer Gewerbefläche: Entkernung, Trockenbau, Bodenverlegung, Malerarbeiten und finale Reinigung.",
  },
];

const Projekte = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-dark-section py-24 pt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Referenzen
            </p>
            <h1 className="mb-6 text-primary-foreground">
              Unsere Projekte
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/60">
              Einblicke in abgeschlossene Bau- und Sanierungsprojekte in Solingen,
              Wuppertal und Düsseldorf.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  i % 2 === 1 ? "" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={p.src}
                    alt={`${p.title} – ${p.location}`}
                    loading="lazy"
                    className="w-full rounded-lg object-cover shadow-lg"
                    style={{ aspectRatio: "4/3" }}
                    width={800}
                    height={600}
                  />
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
                    {p.category}
                  </span>
                  <h2 className="mb-2 text-foreground">{p.title}</h2>
                  <p className="mb-4 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {p.location}
                  </p>
                  <p className="mb-8 leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <a href="/#kontakt">
                    <Button variant="accent" size="sm">
                      Ähnliches Projekt anfragen
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-section py-24">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-primary-foreground">
              Ihr Projekt könnte das nächste sein
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/60">
              Lassen Sie uns gemeinsam Ihr Vorhaben besprechen – kostenlos und unverbindlich.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="/#kontakt">
                <Button variant="hero">Jetzt Projekt besprechen</Button>
              </a>
              <a href="tel:+4915254090013">
                <Button variant="heroOutline">
                  <Phone className="mr-2 h-4 w-4" />
                  01525 4090013
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projekte;
