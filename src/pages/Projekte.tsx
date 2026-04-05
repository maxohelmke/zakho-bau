import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { usePageSeo } from "@/hooks/use-page-seo";
import refRaum from "@/assets/ref-raumsanierung.png";
import refBad from "@/assets/ref-badsanierung.png";
import refFlur from "@/assets/ref-flur-beleuchtung.png";
import refTrockenbau from "@/assets/ref-raum-trockenbau.png";
import refBadModern from "@/assets/ref-bad-modern.png";
import firmenwagen from "@/assets/firmenwagen.png";

const projects = [
  {
    src: refBad,
    title: "Badsanierung mit Eckbadewanne",
    location: "Wuppertal",
    category: "Sanierung",
    description: "Komplette Badsanierung mit Naturstein-Optik, Eckbadewanne mit Mosaikverkleidung, Dusche mit Holzregalen und modernem Heizkörper-Design.",
  },
  {
    src: refRaum,
    title: "Raumsanierung mit LED-Beleuchtung",
    location: "Wuppertal",
    category: "Sanierung",
    description: "Komplettsanierung eines Wohnraums mit hochwertigem Eichenparkett, Trockenbau-Decke mit integrierter LED-Beleuchtung und sauberer Wandgestaltung.",
  },
  {
    src: refFlur,
    title: "Flursanierung mit Lichtkonzept",
    location: "Bergisches Land",
    category: "Trockenbau",
    description: "Moderne Flurgestaltung mit abgehängter Decke, integrierten LED-Lichtleisten an den Deckenkanten und Einbauspots für eine elegante Atmosphäre.",
  },
  {
    src: refBadModern,
    title: "Modernes Badezimmer",
    location: "Wuppertal",
    category: "Sanierung",
    description: "Zeitgemäßes Badezimmer mit bodengleicher Dusche, grauen Großformat-Fliesen, LED-Deckenbeleuchtung und schwebender Waschtischkonsole.",
  },
  {
    src: refTrockenbau,
    title: "Wohnraum mit Deckendesign",
    location: "Wuppertal",
    category: "Trockenbau",
    description: "Großzügiger Wohnbereich mit aufwändigem Trockenbau-Deckendesign, umlaufender LED-Beleuchtung und Zugang zur Terrasse.",
  },
  {
    src: firmenwagen,
    title: "TATLI BAU – Unterwegs für Sie",
    location: "Wuppertal & Bergisches Land",
    category: "Unternehmen",
    description: "Unser Firmenwagen – erkennbar und professionell. Wir sind täglich in Wuppertal und im Bergischen Land für unsere Kunden im Einsatz.",
  },
];

const Projekte = () => {
  usePageSeo({
    title: "Projekte | TATLI BAU Wuppertal",
    description:
      "Referenzen und abgeschlossene Bauprojekte von TATLI BAU in Wuppertal und im Bergischen Land. Jetzt unverbindlich Projekt anfragen.",
    path: "/projekte",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Projekte von TATLI BAU",
        description:
          "Referenzen und abgeschlossene Bau- und Sanierungsprojekte in Wuppertal und im Bergischen Land.",
        url: "https://tatlibau.de/projekte",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Startseite",
            item: "https://tatlibau.de/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projekte",
            item: "https://tatlibau.de/projekte",
          },
        ],
      },
    ],
  });

  return (
    <div className="min-h-screen min-w-0 max-w-full overflow-x-hidden bg-background">
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
              Einblicke in abgeschlossene Bau- und Sanierungsprojekte in Wuppertal
              und im Bergischen Land.
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
                className="grid items-center gap-12 lg:grid-cols-2"
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
                  <a href="/anfragen">
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
              <a href="/anfragen">
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
