import { motion } from "framer-motion";
import { MapPin, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { usePageSeo } from "@/hooks/use-page-seo";
import heroImg from "@/assets/hero-projekte.jpg";
import { Link } from "react-router-dom";
import refRaum from "@/assets/ref-raumsanierung.jpg";
import refBad from "@/assets/ref-badsanierung.jpg";
import refFlur from "@/assets/ref-flur-beleuchtung.jpg";
import refTrockenbau from "@/assets/ref-raum-trockenbau.jpg";
import refBadModern from "@/assets/ref-bad-modern.jpg";
import refMaler from "@/assets/ref-malerarbeiten.jpg";
import refFliesen from "@/assets/ref-fliesen.jpg";
import refKueche from "@/assets/ref-kueche.jpg";
import refAbriss from "@/assets/ref-abriss.jpg";
import refBoden from "@/assets/ref-boden.jpg";
import refDecke from "@/assets/ref-decke.jpg";
import projektBoden from "@/assets/projekt-wohnraum-boden.jpg";
import projektTrockenbau from "@/assets/projekt-trockenbau.jpg";
import projektFassade from "@/assets/projekt-fassade.jpg";
import projektAkustik from "@/assets/projekt-akustikwand.jpg";
import projektNeubau from "@/assets/projekt-neubau-luftbild.jpg";
import projektAbriss from "@/assets/projekt-abriss-kran.jpg";
import projektWand from "@/assets/projekt-wandgestaltung.jpg";
import firmenwagen from "@/assets/zakho-firmenwagen-neu.jpg";
import arbeitMaler from "@/assets/arbeit-malerarbeiten.png";
import arbeitInnen from "@/assets/arbeit-innen.png";
import refFlurFertig from "@/assets/ref-flur-fertig.jpg";
import refFlurBaustelle from "@/assets/ref-flur-baustelle.jpg";
import refAkustikpaneele from "@/assets/ref-akustikpaneele.jpg";
import refWandGeo from "@/assets/ref-wandgestaltung-geo.jpg";
import refWandMarmor from "@/assets/ref-wandgestaltung-marmor.jpg";
import refFassadeReihenhaus from "@/assets/ref-fassade-reihenhaus.jpg";
import refFassadeModern from "@/assets/ref-fassade-modern.jpg";
import refWohnungFertig from "@/assets/ref-wohnung-fertig.jpg";
import refBadLuxury from "@/assets/ref-bad-luxury.jpg";
import refWohnzimmerParkett from "@/assets/ref-wohnzimmer-parkett.jpg";
import refKuecheModern from "@/assets/ref-kueche-modern.jpg";
import refFassadeGeruest from "@/assets/ref-fassade-geruest.jpg";
import refTrockenbauDecke from "@/assets/ref-trockenbau-decke.jpg";
import refGewerbeInnen from "@/assets/ref-gewerbe-innenausbau.jpg";

const projects = [
  {
    src: projektBoden,
    title: "Wohnraum-Renovierung mit neuem Boden",
    location: "Gevelsberg",
    category: "Renovierung",
    description: "Komplett renovierter Wohnraum mit neu verlegtem Boden, frischen W?nden und gro?z?gigem Lichtkonzept.",
  },
  {
    src: projektTrockenbau,
    title: "Trockenbau & Innenausbau",
    location: "Ennepe-Ruhr-Kreis",
    category: "Trockenbau",
    description: "Neue W?nde und Decken in Trockenbauweise inkl. Verspachtelung ? bereit f?r den finalen Innenausbau.",
  },
  {
    src: projektFassade,
    title: "Moderne Fassade in Holzoptik",
    location: "Gevelsberg",
    category: "Au?enarbeiten",
    description: "Hochwertige Fassadengestaltung mit Holz- und Klinkerelementen f?r ein modernes Erscheinungsbild.",
  },
  {
    src: projektAkustik,
    title: "Akustik-Wandverkleidung",
    location: "Ennepe-Ruhr-Kreis",
    category: "Innenausbau",
    description: "Elegante Akustikpaneele aus Holz als dekoratives und schallschluckendes Wand-Highlight.",
  },
  {
    src: projektNeubau,
    title: "Neubau mit moderner Haustechnik",
    location: "Gevelsberg",
    category: "Neubau",
    description: "Schl?sselfertiger Neubau mit Photovoltaik und W?rmepumpe ? nachhaltig und zukunftssicher gebaut.",
  },
  {
    src: projektWand,
    title: "Dekorative Wandgestaltung",
    location: "Gevelsberg",
    category: "Malerarbeiten",
    description: "Gro?fl?chige dekorative Wandgestaltung als stilvolles Gestaltungselement im Wohnbereich.",
  },
  {
    src: projektAbriss,
    title: "Abbruch & Entkernung",
    location: "Ennepe-Ruhr-Kreis",
    category: "Abrissarbeiten",
    description: "Fachgerechter Abbruch und Entkernung als Vorbereitung f?r Neubau und Kernsanierung.",
  },
  {
    src: firmenwagen,
    title: "Zakho Bau im Einsatz",
    location: "Gevelsberg & Ennepe-Ruhr-Kreis",
    category: "Unser Team",
    description: "Mit unserem Firmenwagen sind wir t?glich in Gevelsberg und der gesamten Region f?r Sie unterwegs.",
  },
  {
    src: refBad,
    title: "Badsanierung mit Eckbadewanne",
    location: "Gevelsberg",
    category: "Sanierung",
    description: "Komplette Badsanierung mit Naturstein-Optik, Eckbadewanne mit Mosaikverkleidung und modernem Design.",
  },
  {
    src: refKueche,
    title: "K?chenrenovierung mit Einbauten",
    location: "Ennepetal",
    category: "Renovierung",
    description: "Moderne K?che mit wei?en Fronten, Subway-Fliesen-R?ckwand und integrierter LED-Beleuchtung.",
  },
  {
    src: refFlur,
    title: "Flursanierung mit Lichtkonzept",
    location: "Ennepe-Ruhr-Kreis",
    category: "Trockenbau",
    description: "Moderne Flurgestaltung mit abgeh?ngter Decke und integrierten LED-Lichtleisten.",
  },
  {
    src: refBadModern,
    title: "Modernes Badezimmer",
    location: "Gevelsberg",
    category: "Sanierung",
    description: "Zeitgem??es Bad mit bodengleicher Dusche, Gro?format-Fliesen und LED-Deckenbeleuchtung.",
  },
  {
    src: refDecke,
    title: "Deckendesign mit LED-Beleuchtung",
    location: "Remscheid",
    category: "Trockenbau",
    description: "Abgeh?ngte Trockenbau-Decke mit umlaufender indirekter LED-Beleuchtung im Wohnbereich.",
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
    title: "Gro?format-Fliesen im Bad",
    location: "D?sseldorf",
    category: "Fliesenarbeiten",
    description: "Professionelle Verlegung von gro?formatigen Betonoptik-Fliesen mit exakten Fugen.",
  },
  {
    src: refMaler,
    title: "Malerarbeiten & Wandgestaltung",
    location: "Gevelsberg",
    category: "Malerarbeiten",
    description: "Sauberer Innenanstrich mit Spachtelarbeiten und Abklebe-Technik f?r makellose Ergebnisse.",
  },
  {
    src: refTrockenbau,
    title: "Wohnraum mit Deckendesign",
    location: "Gevelsberg",
    category: "Trockenbau",
    description: "Aufw?ndiges Trockenbau-Deckendesign mit umlaufender LED-Beleuchtung.",
  },
  {
    src: refAbriss,
    title: "Entkernung & R?ckbau",
    location: "Ennepe-Ruhr-Kreis",
    category: "Abrissarbeiten",
    description: "Fachgerechter R?ckbau und Entkernung als Vorbereitung f?r die Kernsanierung.",
  },
  {
    src: refBoden,
    title: "Bodenverlegung & Spotbeleuchtung",
    location: "Ennepetal",
    category: "Renovierung",
    description: "Dunkles Laminat mit weißen Sockelleisten und Einbauspots für ein modernes Raumgefühl.",
  },
  {
    src: arbeitMaler,
    title: "Malerarbeiten ? Zakho Bau bei der Arbeit",
    location: "Gevelsberg",
    category: "Malerarbeiten",
    description: "Professioneller Decken- und Wandanstrich durch Zakho Bau ? sauber abgeklebt, präzise ausgeführt.",
  },
  {
    src: arbeitInnen,
    title: "Innenputz & Untergrundvorbereitung",
    location: "Gevelsberg",
    category: "Renovierung",
    description: "Vorarbeiten für Innenanstrich: Putz aufbereitet, Wände grundiert und egalisiert.",
  },
  {
    src: refFlurFertig,
    title: "Flursanierung ? Fertiggestellt",
    location: "Ennepe-Ruhr-Kreis",
    category: "Sanierung",
    description: "Komplettsanierung eines gewerblichen Flurs: Wände, Decke und Beleuchtung erneuert.",
  },
  {
    src: refFlurBaustelle,
    title: "Großprojekt ? Gewerbliche Sanierung",
    location: "Ennepe-Ruhr-Kreis",
    category: "Gewerbe",
    description: "Laufende Sanierung eines Bürogebäudes: Trockenbau, Malerarbeiten und neue Deckensysteme.",
  },
  {
    src: refWohnungFertig,
    title: "Wohnungssanierung abgeschlossen",
    location: "Gevelsberg",
    category: "Renovierung",
    description: "Fertiggestellte Wohnungssanierung mit neuem Parkett, frischen Wänden und erneuerten Türrahmen.",
  },
  {
    src: refAkustikpaneele,
    title: "Akustikpaneele Holzlamellen",
    location: "Ennepetal",
    category: "Innenausbau",
    description: "Moderne Akustikpaneele aus Holzlamellen als stilvolles Wand-Highlight im Wohnbereich.",
  },
  {
    src: refWandGeo,
    title: "Dekorative Tapete ? Geometrik",
    location: "Gevelsberg",
    category: "Malerarbeiten",
    description: "Hochwertige Tapezierarbeit mit geometrischer Designtapete ? präzise ausgeführt.",
  },
  {
    src: refWandMarmor,
    title: "Wandgestaltung Marmoroptik",
    location: "Ennepe-Ruhr-Kreis",
    category: "Malerarbeiten",
    description: "Wohnzimmer mit aufwendiger Tapete in Marmoroptik ? luxuriöses Erscheinungsbild.",
  },
  {
    src: refFassadeReihenhaus,
    title: "Fassadensanierung Reihenhaus",
    location: "Ennepe-Ruhr-Kreis",
    category: "Außenarbeiten",
    description: "Komplettsanierung der Fassade eines Reihenhauses mit neuem Putz und Anstrich.",
  },
  {
    src: refFassadeModern,
    title: "Moderne Fassade ? Flachdachhaus",
    location: "Ennepe-Ruhr-Kreis",
    category: "Außenarbeiten",
    description: "Außengestaltung eines Einfamilienhauses mit Flachdach ? Putz, Anstrich und Terrassenbereich.",
  },
  {
    src: refBadLuxury,
    title: "Luxus-Badsanierung mit Beleuchtung",
    location: "Gevelsberg",
    category: "Sanierung",
    description: "Hochwertiges Bad mit freistehender Badewanne, bodengleicher Dusche und indirekter LED-Beleuchtung.",
  },
  {
    src: refWohnzimmerParkett,
    title: "Wohnzimmer-Modernisierung",
    location: "Gevelsberg",
    category: "Renovierung",
    description: "Helles, modernes Wohnzimmer mit Eichenparkett, weißen Wänden und großzügiger Verglasung.",
  },
  {
    src: refKuecheModern,
    title: "Küche ? Innenausbau Modern",
    location: "Ennepetal",
    category: "Renovierung",
    description: "Moderne Küche mit schwarzen Fronten, Marmorabdeckung und hochwertiger Beleuchtung.",
  },
  {
    src: refFassadeGeruest,
    title: "Fassadenarbeiten Mehrfamilienhaus",
    location: "Ennepe-Ruhr-Kreis",
    category: "Außenarbeiten",
    description: "Großflächige Fassadensanierung eines Mehrfamilienhauses mit Gerüstbau und neuem Außenputz.",
  },
  {
    src: refTrockenbauDecke,
    title: "Trockenbau-Decke mit indirekter Beleuchtung",
    location: "Gevelsberg",
    category: "Trockenbau",
    description: "Abgehängte Trockenbaudecke mit umlaufendem LED-Lichtkanal für warme, indirekte Beleuchtung.",
  },
  {
    src: refGewerbeInnen,
    title: "Gewerblicher Innenausbau",
    location: "Ennepe-Ruhr-Kreis",
    category: "Gewerbe",
    description: "Kompletter Innenausbau eines Bürogebäudes mit Glastrennwänden, Betonboden und modernem Design.",
  },
];

const Projekte = () => {
  usePageSeo({
    title: "Referenzen & Projekte ? Bau und Sanierung Gevelsberg | Zakho Bau",
    description:
      "Referenzen und abgeschlossene Bauprojekte von Zakho Bau in Gevelsberg: Renovierungen, Badsanierungen, Trockenbau und Malerarbeiten im Ennepe-Ruhr-Kreis. ?berzeugen Sie sich selbst.",
    path: "/projekte",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Referenzen & Projekte von Zakho Bau Gevelsberg",
        description:
          "Abgeschlossene Bau- und Sanierungsprojekte in Gevelsberg und im Ennepe-Ruhr-Kreis: Renovierungen, Badsanierungen, Trockenbau, Malerarbeiten.",
        url: "https://www.zakho-bau.de/projekte",
        about: { "@id": "https://www.zakho-bau.de/#business" },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.zakho-bau.de/" },
          { "@type": "ListItem", position: 2, name: "Projekte", item: "https://www.zakho-bau.de/projekte" },
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
          alt="Modernes Badezimmer ? Zakho Bau Projekte"
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
            <h1 className="mb-4 text-primary-foreground">Unsere <em>Projekte</em></h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              Einblicke in abgeschlossene Bau- und Sanierungsprojekte in Gevelsberg
              und im Bergischen Land.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Echte Referenzen", "Saubere ?bergabe", "Termintreue"].map((t) => (
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
              <a href="tel:+4915788888852" className="w-full sm:w-auto">
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
                    alt={`${p.title} ? ${p.location}`}
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
              Ihr Projekt k?nnte das n?chste sein
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/80">
              Lassen Sie uns gemeinsam Ihr Vorhaben besprechen ? kostenlos und unverbindlich.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="/anfragen">
                <Button variant="hero">Jetzt Projekt besprechen</Button>
              </a>
              <a href="tel:+4915788888852">
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


