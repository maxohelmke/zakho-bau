import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Hammer,
  Layers,
  PaintBucket,
  Grid2x2,
  Droplets,
  Building2,
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
    icon: Hammer,
    slug: "renovierung",
    title: "Renovierung & Modernisierung",
    subtitle: "Komplettrenovierungen, Wohnungssanierungen und Modernisierungen",
    desc: "Komplettrenovierungen, Wohnungssanierungen und Modernisierungen — schnell, sauber und zum Festpreis. Wir übernehmen alle Arbeiten rund um Wände, Böden und Decken aus einer Hand.",
    details: [
      "Komplette Wohnungsrenovierung",
      "Wandgestaltung & Verputzarbeiten",
      "Deckenverkleidungen & Abhängungen",
      "Fenster- und Türeinbau",
      "Innenausbau nach Maß",
    ],
    image: imgRenovierung,
  },
  {
    icon: Layers,
    slug: "trockenbau",
    title: "Trockenbau & Innenausbau",
    subtitle: "Wände, Decken, Ständerwerk",
    desc: "Wände, Decken, Ständerwerk — professioneller Trockenbau für Privat- und Gewerbekunden. Präzise, sauber und termingerecht.",
    details: [
      "Gipskartonwände & Ständerwerk",
      "Deckenabhängungen mit Beleuchtungsplanung",
      "Dachgeschossausbau",
      "Schallschutz & Brandschutzwände",
      "Trockenestrich-Systeme",
    ],
    image: refTrockenbau,
  },
  {
    icon: PaintBucket,
    slug: "malerarbeiten",
    title: "Malerarbeiten & Tapezieren",
    subtitle: "Innen- und Außenanstriche, Tapezierarbeiten",
    desc: "Innen- und Außenanstriche, Tapezierarbeiten und dekorative Gestaltung. Wir sorgen für makellose Oberflächen mit hochwertigen Materialien.",
    details: [
      "Innenanstriche (Wand & Decke)",
      "Fassadenanstrich & Außenarbeiten",
      "Tapezierarbeiten",
      "Lackierungen (Türen, Fenster, Heizkörper)",
      "Spachtelarbeiten & dekorative Techniken",
    ],
    image: imgMaler,
  },
  {
    icon: Grid2x2,
    slug: "bodenbelag",
    title: "Bodenbeläge & Fliesen",
    subtitle: "Laminat, Parkett, Vinyl und Fliesen",
    desc: "Verlegen von Laminat, Parkett, Vinyl und Fliesen — sauber und fachgerecht. Der richtige Boden für jeden Raum, langlebig und optisch ansprechend.",
    details: [
      "Parkettverlegung (Massiv & Fertigparkett)",
      "Laminat & Designböden",
      "Vinylboden (Klick & Klebe)",
      "Estricharbeiten & Bodenausgleich",
      "Badezimmer- und Küchenfliesen",
    ],
    image: imgFliesen,
  },
  {
    icon: Droplets,
    slug: "sanierung",
    title: "Badsanierung",
    subtitle: "Komplettsanierung von Badezimmern",
    desc: "Komplettsanierung von Badezimmern — Fliesen, Sanitär, Trockenbau aus einer Hand. Wir bringen Ihr Bad auf den neuesten Stand — energetisch, optisch und funktional.",
    details: [
      "Komplettsanierung Bad & Dusche",
      "Fliesen & Abdichtung",
      "Sanitärinstallation & Anschlüsse",
      "Trockenbau & Vorwandinstallation",
      "Barrierefreier Umbau",
    ],
    image: refBad,
  },
  {
    icon: Building2,
    slug: "aussenarbeiten",
    title: "Außenarbeiten & Fassade",
    subtitle: "Fassadenarbeiten, Außenputz und Erdarbeiten",
    desc: "Fassadenarbeiten, Außenputz und kleinere Erdarbeiten rund ums Haus. Professionelle Außengestaltung für einen dauerhaften ersten Eindruck.",
    details: [
      "Fassadenanstrich & Außenputz",
      "Wärmedämmung & Fassadenrenovierung",
      "Terrassenplatten & Außenbereiche",
      "Kleinere Erdarbeiten",
      "Vorbereitung Neubau & Anbau",
    ],
    image: imgAbriss,
  },
];

const Leistungen = () => {
  usePageSeo({
    title: "Leistungen | Zakho Bau Gevelsberg",
    description:
      "Unsere Leistungen in Gevelsberg und im Ennepe-Ruhr-Kreis: Renovierung, Trockenbau, Malerarbeiten, Bodenbeläge, Badsanierung und Außenarbeiten aus einer Hand.",
    path: "/leistungen",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Bau- und Sanierungsleistungen",
        provider: {
          "@type": "HomeAndConstructionBusiness",
          name: "Zakho Bau",
          areaServed: ["Gevelsberg", "Ennepe-Ruhr-Kreis"],
          email: "info@zakho-bau.de",
        },
        areaServed: ["Gevelsberg", "Ennepe-Ruhr-Kreis"],
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Startseite",
            item: "https://zakho-bau.de/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Leistungen",
            item: "https://zakho-bau.de/leistungen",
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
          alt="Handwerker bei der Arbeit – Zakho Bau Leistungen"
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
              Zakho Bau bietet Ihnen alle Bauleistungen aus einer Hand in Gevelsberg.
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
                  <Link to="/anfragen">
                    <Button variant="accent" size="sm">
                      Jetzt anfragen
                    </Button>
                  </Link>
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <img
                    src={s.image}
                    alt={`${s.title} – Zakho Bau`}
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
              <Link to="/anfragen">
                <Button variant="hero">Jetzt Anfrage stellen</Button>
              </Link>
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

export default Leistungen;


