import { motion } from "framer-motion";
import { MapPin, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { usePageSeo } from "@/hooks/use-page-seo";
import heroImg from "@/assets/hero-projekte.jpg";
import { Link } from "react-router-dom";
import refRaum from "@/assets/ref-raumsanierung.png";
import refBad from "@/assets/ref-badsanierung.png";
import refFlur from "@/assets/ref-flur-beleuchtung.png";
import refTrockenbau from "@/assets/ref-raum-trockenbau.png";
import refBadModern from "@/assets/ref-bad-modern.png";
import firmenwagen from "@/assets/zakho-firmenwagen.jpg";
import refMaler from "@/assets/ref-malerarbeiten.jpg";
import refFliesen from "@/assets/ref-fliesen.jpg";
import refKueche from "@/assets/ref-kueche.jpg";
import refAbriss from "@/assets/ref-abriss.jpg";
import refBoden from "@/assets/ref-boden.jpg";
import refDecke from "@/assets/ref-decke.jpg";

const projects = [
  {
    src: refBad,
    title: "Badsanierung mit Eckbadewanne",
    location: "Gevelsberg",
    category: "Sanierung",
    description: "Komplette Badsanierung mit Naturstein-Optik, Eckbadewanne mit Mosaikverkleidung und modernem Design.",
  },
  {
    src: refKueche,
    title: "KÃ¼chenrenovierung mit Einbauten",
    location: "Ennepetal",
    category: "Renovierung",
    description: "Moderne KÃ¼che mit weiÃŸen Fronten, Subway-Fliesen-RÃ¼ckwand und integrierter LED-Beleuchtung.",
  },
  {
    src: refFlur,
    title: "Flursanierung mit Lichtkonzept",
    location: "Ennepe-Ruhr-Kreis",
    category: "Trockenbau",
    description: "Moderne Flurgestaltung mit abgehÃ¤ngter Decke und integrierten LED-Lichtleisten.",
  },
  {
    src: refBadModern,
    title: "Modernes Badezimmer",
    location: "Gevelsberg",
    category: "Sanierung",
    description: "ZeitgemÃ¤ÃŸes Bad mit bodengleicher Dusche, GroÃŸformat-Fliesen und LED-Deckenbeleuchtung.",
  },
  {
    src: refDecke,
    title: "Deckendesign mit LED-Beleuchtung",
    location: "Remscheid",
    category: "Trockenbau",
    description: "AbgehÃ¤ngte Trockenbau-Decke mit umlaufender indirekter LED-Beleuchtung im Wohnbereich.",
  },
  {
    src: refRaum,
    title: "Raumsanierung mit Parkett",
    location: "Gevelsberg",
    category: "Sanierung",
    description: "Komplettsanierung mit Eichenparkett, Trockenbau-Decke und integrierter LED-Beleuchtung.",
  },
  {
    src: refFliesen,
    title: "GroÃŸformat-Fliesen im Bad",
    location: "DÃ¼sseldorf",
    category: "Fliesenarbeiten",
    description: "Professionelle Verlegung von groÃŸformatigen Betonoptik-Fliesen mit exakten Fugen.",
  },
  {
    src: refMaler,
    title: "Malerarbeiten & Wandgestaltung",
    location: "Gevelsberg",
    category: "Malerarbeiten",
    description: "Sauberer Innenanstrich mit Spachtelarbeiten und Abklebe-Technik fÃ¼r makellose Ergebnisse.",
  },
  {
    src: refTrockenbau,
    title: "Wohnraum mit Deckendesign",
    location: "Gevelsberg",
    category: "Trockenbau",
    description: "AufwÃ¤ndiges Trockenbau-Deckendesign mit umlaufender LED-Beleuchtung.",
  },
  {
    src: refAbriss,
    title: "Entkernung & RÃ¼ckbau",
    location: "Ennepe-Ruhr-Kreis",
    category: "Abrissarbeiten",
    description: "Fachgerechter RÃ¼ckbau und Entkernung als Vorbereitung fÃ¼r die Kernsanierung.",
  },
  {
    src: refBoden,
    title: "Bodenverlegung & Spotbeleuchtung",
    location: "Ennepetal",
    category: "Renovierung",
    description: "Dunkles Laminat mit weiÃŸen Sockelleisten und Einbauspots fÃ¼r ein modernes RaumgefÃ¼hl.",
  },
];

const Projekte = () => {
  usePageSeo({
    title: "Projekte | Zakho Bau Gevelsberg",
    description:
      "Referenzen und abgeschlossene Bauprojekte von Zakho Bau in Gevelsberg und im Bergischen Land.",
    path: "/projekte",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Projekte von Zakho Bau",
        description:
          "Referenzen und abgeschlossene Bau- und Sanierungsprojekte in Gevelsberg und im Bergischen Land.",
        url: "https://zakho-bau.de/projekte",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Startseite", item: "https://zakho-bau.de/" },
          { "@type": "ListItem", position: 2, name: "Projekte", item: "https://zakho-bau.de/projekte" },
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
          alt="Modernes Badezimmer â€“ Zakho Bau Projekte"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={800}
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/70" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/78 to-black/62" aria-hidden />
        <div className="container relative z-10 mx-auto container-pad">
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
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              Einblicke in abgeschlossene Bau- und Sanierungsprojekte in Gevelsberg
              und im Bergischen Land.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Echte Referenzen", "Saubere Ãœbergabe", "Termintreue"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90"
                >
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link to="/anfragen">
                <Button variant="accent" size="lg" className="w-full sm:w-auto">
                  Projekt anfragen
                </Button>
              </Link>
              <a href="tel:+4915254090013" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Phone className="mr-2 h-4 w-4" />
                  +49 1578 8888852
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-pad-sm sm:py-20 lg:py-28">
        <div className="container mx-auto container-pad">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.src}
                    alt={`${p.title} â€“ ${p.location}`}
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
      <section className="bg-dark-section section-pad-sm">
        <div className="container mx-auto container-pad text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-primary-foreground">
              Ihr Projekt kÃ¶nnte das nÃ¤chste sein
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/80">
              Lassen Sie uns gemeinsam Ihr Vorhaben besprechen â€“ kostenlos und unverbindlich.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="/anfragen">
                <Button variant="hero">Jetzt Projekt besprechen</Button>
              </a>
              <a href="tel:+4915254090013">
                <Button variant="heroOutline">
                  <Phone className="mr-2 h-4 w-4" />
                  +49 1578 8888852
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


