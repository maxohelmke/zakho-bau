import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { usePageSeo } from "@/hooks/use-page-seo";
import heroImg from "@/assets/hero-projekte.jpg";
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
    description: "Komplette Badsanierung mit Naturstein-Optik, Eckbadewanne mit Mosaikverkleidung und modernem Design.",
  },
  {
    src: refRaum,
    title: "Raumsanierung mit LED-Beleuchtung",
    location: "Wuppertal",
    category: "Sanierung",
    description: "Komplettsanierung mit Eichenparkett, Trockenbau-Decke und integrierter LED-Beleuchtung.",
  },
  {
    src: refFlur,
    title: "Flursanierung mit Lichtkonzept",
    location: "Bergisches Land",
    category: "Trockenbau",
    description: "Moderne Flurgestaltung mit abgehängter Decke und integrierten LED-Lichtleisten.",
  },
  {
    src: refBadModern,
    title: "Modernes Badezimmer",
    location: "Wuppertal",
    category: "Sanierung",
    description: "Zeitgemäßes Bad mit bodengleicher Dusche, Großformat-Fliesen und LED-Deckenbeleuchtung.",
  },
  {
    src: refTrockenbau,
    title: "Wohnraum mit Deckendesign",
    location: "Wuppertal",
    category: "Trockenbau",
    description: "Aufwändiges Trockenbau-Deckendesign mit umlaufender LED-Beleuchtung.",
  },
  {
    src: firmenwagen,
    title: "TATLI BAU – Unterwegs für Sie",
    location: "Wuppertal & Bergisches Land",
    category: "Unternehmen",
    description: "Unser Firmenwagen – erkennbar und professionell im Einsatz für unsere Kunden.",
  },
];

const Projekte = () => {
  usePageSeo({
    title: "Projekte | TATLI BAU Wuppertal",
    description:
      "Referenzen und abgeschlossene Bauprojekte von TATLI BAU in Wuppertal und im Bergischen Land.",
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
          { "@type": "ListItem", position: 1, name: "Startseite", item: "https://tatlibau.de/" },
          { "@type": "ListItem", position: 2, name: "Projekte", item: "https://tatlibau.de/projekte" },
        ],
      },
    ],
  });

  return (
    <div className="min-h-screen min-w-0 max-w-full overflow-x-hidden bg-background">
      {/* Hero */}
      <section className="relative flex min-h-[min(45vh,400px)] flex-col justify-end overflow-hidden pt-28 pb-10">
        <img
          src={heroImg}
          alt="Modernes Badezimmer – TATLI BAU Projekte"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={800}
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/[0.95] via-foreground/65 to-foreground/40" aria-hidden />
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Referenzen
            </p>
            <h1 className="mb-4 text-primary-foreground">Unsere Projekte</h1>
            <p className="text-lg leading-relaxed text-primary-foreground/70">
              Einblicke in abgeschlossene Bau- und Sanierungsprojekte in Wuppertal
              und im Bergischen Land.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.src}
                    alt={`${p.title} – ${p.location}`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={800}
                    height={600}
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                    {p.category}
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="mb-1 text-lg font-semibold text-foreground">{p.title}</h2>
                  <p className="mb-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {p.location}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-section py-20">
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
