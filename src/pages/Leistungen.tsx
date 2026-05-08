import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Paintbrush,
  Hammer,
  LayoutGrid,
  Home,
  Wrench,
  Layers,
  Trash2,
  ClipboardList,
  Phone,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { usePageSeo } from "@/hooks/use-page-seo";
import heroImg from "@/assets/hero-leistungen.jpg";
import imgRenovierung from "@/assets/leistung-renovierung.jpg";
import imgMaler from "@/assets/leistung-malerarbeiten.jpg";
import imgFliesen from "@/assets/leistung-fliesen.jpg";
import imgAbriss from "@/assets/leistung-abriss.jpg";
import refBad from "@/assets/ref-badsanierung.png";
import refFlur from "@/assets/ref-flur-beleuchtung.png";
import refTrockenbau from "@/assets/ref-raum-trockenbau.png";

const services = [
  {
    icon: Home, slug: "renovierung", title: "Renovierung",
    subtitle: "Wände, Böden, Decken & Innenausbau",
    desc: "Wir verwandeln Ihre Räume – ob einzelne Zimmer oder komplette Wohnungen. Von der Bestandsaufnahme über die Planung bis zur sauberen Umsetzung übernehmen wir alle Arbeiten rund um Wände, Böden und Decken.",
    details: ["Komplette Wohnungsrenovierung", "Wandgestaltung & Verputzarbeiten", "Deckenverkleidungen & Abhängungen", "Fenster- und Türeinbau", "Innenausbau nach Maß"],
    image: imgRenovierung,
  },
  {
    icon: Wrench, slug: "sanierung", title: "Sanierung",
    subtitle: "Kernsanierung, Fassade & Bad",
    desc: "Von der Badsanierung bis zur kompletten Kernsanierung – wir bringen Ihre Immobilie auf den neuesten Stand. Energetisch, optisch und funktional.",
    details: ["Kernsanierung von Bestandsimmobilien", "Fassadensanierung & Wärmedämmung", "Badsanierung inkl. Sanitärinstallation", "Feuchtigkeits- und Schimmelbeseitigung", "Altbausanierung mit Denkmalschutz"],
    image: refBad,
  },
  {
    icon: LayoutGrid, slug: "trockenbau", title: "Trockenbau",
    subtitle: "Gipskarton, Zwischenwände & Decken",
    desc: "Professioneller Trockenbau für flexible Raumgestaltung. Wir erstellen Zwischenwände, Deckenabhängungen und Dachgeschossausbauten – präzise und sauber.",
    details: ["Gipskartonwände & Ständerwerk", "Deckenabhängungen mit Beleuchtungsplanung", "Dachgeschossausbau", "Schallschutz & Brandschutzwände", "Trockenestrich-Systeme"],
    image: refTrockenbau,
  },
  {
    icon: Paintbrush, slug: "malerarbeiten", title: "Malerarbeiten",
    subtitle: "Innen & Außen – professionelle Oberflächen",
    desc: "Ob Innenanstrich, Fassadengestaltung oder Lackierarbeiten – wir sorgen für makellose Oberflächen mit hochwertigen Materialien und fachgerechter Ausführung.",
    details: ["Innenanstriche (Wand & Decke)", "Fassadenanstrich & Außenarbeiten", "Tapezierarbeiten", "Lackierungen (Türen, Fenster, Heizkörper)", "Spachtelarbeiten & dekorative Techniken"],
    image: imgMaler,
  },
  {
    icon: Layers, slug: "fliesenleger", title: "Fliesenleger",
    subtitle: "Bad, Küche, Terrasse & Außenbereiche",
    desc: "Exakte Fliesenverlegung für Innen- und Außenbereiche. Von Großformat-Fliesen im Badezimmer bis zu robusten Terrassenplatten – immer sauber und passgenau.",
    details: ["Badezimmer- und Küchenfliesen", "Großformat-Fliesen & Mosaik", "Terrassenplatten & Außenbereiche", "Naturstein & Feinsteinzeug", "Abdichtung & Untergrundvorbereitung"],
    image: imgFliesen,
  },
  {
    icon: Hammer, slug: "bodenverlegung", title: "Bodenverlegung",
    subtitle: "Parkett, Laminat, Vinyl & Estrich",
    desc: "Der richtige Boden für jeden Raum. Wir verlegen Parkett, Laminat, Vinyl und Estrich – fachgerecht, langlebig und optisch ansprechend.",
    details: ["Parkettverlegung (Massiv & Fertigparkett)", "Laminat & Designböden", "Vinylboden (Klick & Klebe)", "Estricharbeiten & Bodenausgleich", "Sockelleisten & Übergangsprofile"],
    image: refFlur,
  },
  {
    icon: Trash2, slug: "abrissarbeiten", title: "Abrissarbeiten",
    subtitle: "Rückbau & Entkernung",
    desc: "Professioneller Rückbau und Entkernung – schnell, sicher und fachgerecht. Wir entfernen alte Einbauten, Wände und Strukturen und entsorgen den Bauschutt ordnungsgemäß.",
    details: ["Entkernung von Wohn- und Gewerberäumen", "Wanddurchbrüche & Rückbau", "Demontage alter Einbauten", "Bauschutt-Entsorgung", "Vorbereitung für Neugestaltung"],
    image: imgAbriss,
  },
  {
    icon: ClipboardList, slug: "komplettloesungen", title: "Komplettlösungen",
    subtitle: "Bauleitung & Generalunternehmer",
    desc: "Alles aus einer Hand: Als Generalunternehmer koordinieren wir alle Gewerke, übernehmen die Bauleitung und liefern Ihr Projekt termingerecht und budgetsicher ab.",
    details: ["Projektplanung & Bauleitung", "Koordination aller Gewerke", "Termingerechte Fertigstellung", "Transparente Budgetplanung", "Schlüsselfertige Lösungen"],
    image: imgRenovierung,
  },
];

const Leistungen = () => {
  usePageSeo({
    title: "Leistungen | TATLI BAU Wuppertal",
    description:
      "Unsere Leistungen in Wuppertal und im Bergischen Land: Renovierung, Sanierung, Trockenbau, Malerarbeiten, Fliesen und Komplettlösungen aus einer Hand.",
    path: "/leistungen",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Bau- und Sanierungsleistungen",
        provider: {
          "@type": "HomeAndConstructionBusiness",
          name: "TATLI BAU",
          areaServed: ["Wuppertal", "Bergisches Land"],
          telephone: "+4915254090013",
          email: "tatlican2@icloud.com",
        },
        areaServed: ["Wuppertal", "Bergisches Land"],
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
            name: "Leistungen",
            item: "https://tatlibau.de/leistungen",
          },
        ],
      },
    ],
  });

  return (
    <div className="min-h-screen min-w-0 max-w-full overflow-x-hidden bg-background">
      {/* Hero with Image */}
      <section className="relative flex min-h-[min(50vh,440px)] flex-col justify-end overflow-hidden pt-28 pb-10 md:pb-14">
        <img
          src={heroImg}
          alt="Handwerker bei der Arbeit – TATLI BAU Leistungen"
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
              Unsere Leistungen
            </p>
            <h1 className="mb-4 text-primary-foreground">
              Was wir für Sie tun
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              Von der kleinen Renovierung bis zur schlüsselfertigen Komplettsanierung –
              TATLI BAU bietet Ihnen alle Bauleistungen aus einer Hand.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Kostenlos & unverbindlich", "Antwort < 24h", "Aus einer Hand"].map((t) => (
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
                  Angebot anfordern
                </Button>
              </Link>
              <a href="tel:+4915254090013" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Phone className="mr-2 h-4 w-4" />
                  01525 4090013
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-pad">
        <div className="container mx-auto container-pad">
          <div className="space-y-24">
            {services.map((s, i) => (
              <motion.div
                key={s.slug}
                id={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid items-start gap-12 lg:grid-cols-2"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="mb-5 inline-flex rounded-lg bg-accent/10 p-3">
                    <s.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="mb-2 text-foreground">{s.title}</h2>
                  <p className="mb-4 text-sm font-medium text-accent">{s.subtitle}</p>
                  <p className="mb-6 leading-relaxed text-muted-foreground">{s.desc}</p>
                  <ul className="mb-6 space-y-2">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span className="text-sm text-muted-foreground">{d}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="/anfragen">
                    <Button variant="accent" size="sm">
                      Jetzt anfragen
                    </Button>
                  </a>
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <img
                    src={s.image}
                    alt={`${s.title} – TATLI BAU`}
                    loading="lazy"
                    className="w-full rounded-xl object-cover shadow-lg"
                    style={{ aspectRatio: "4/3" }}
                    width={800}
                    height={600}
                  />
                </div>
              </motion.div>
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
              Ihr Projekt beginnt hier
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/80">
              Kostenlose Beratung – wir melden uns innerhalb von 24 Stunden.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="/anfragen">
                <Button variant="hero">Jetzt Anfrage stellen</Button>
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

export default Leistungen;
