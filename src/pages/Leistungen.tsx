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
import SeoRegionSection from "@/components/SeoRegionSection";
import { usePageSeo } from "@/hooks/use-page-seo";
import { SITE_ORIGIN } from "@/seo/sitemap-config";
import { BUSINESS_ID, breadcrumbList } from "@/seo/schema-helpers";
import heroImg from "@/assets/hero-leistungen.jpg";
import imgRenovierung from "@/assets/leistung-renovierung.jpg";
import imgMaler from "@/assets/arbeit-malerarbeiten.png";
import imgFliesen from "@/assets/leistung-fliesen.jpg";
import imgAbriss from "@/assets/leistung-abriss.jpg";
import imgFassadeReihenhaus from "@/assets/ref-fassade-reihenhaus.jpg";
import refBad from "@/assets/ref-badsanierung.jpg";
import refFlur from "@/assets/ref-flur-beleuchtung.jpg";
import refTrockenbau from "@/assets/ref-raum-trockenbau.jpg";

const services = [
  {
    icon: Hammer,
    slug: "renovierung",
    title: "Renovierung & Modernisierung",
    subtitle: "Komplettrenovierungen, Wohnungssanierungen und Modernisierungen",
    desc: "Komplettrenovierungen, Wohnungssanierungen und Modernisierungen – schnell, sauber und zum Festpreis. Wir übernehmen alle Arbeiten rund um Wände, Böden und Decken aus einer Hand.",
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
    desc: "Wände, Decken, Ständerwerk – professioneller Trockenbau für Privat- und Gewerbekunden. Präzise, sauber und termingerecht.",
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
    desc: "Verlegen von Laminat, Parkett, Vinyl und Fliesen – sauber und fachgerecht. Der richtige Boden für jeden Raum, langlebig und optisch ansprechend.",
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
    desc: "Komplettsanierung von Badezimmern – Fliesen, Sanitär, Trockenbau aus einer Hand. Wir bringen Ihr Bad auf den neuesten Stand – energetisch, optisch und funktional.",
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
    image: imgFassadeReihenhaus,
  },
];

const Leistungen = () => {
  usePageSeo({
    title: "Renovierung & Badsanierung Gevelsberg | Zakho Bau",
    description:
      "Renovierung, Trockenbau, Malerarbeiten, Bodenbeläge & Badsanierung in Gevelsberg und NRW. Alle Gewerke aus einer Hand – Festpreis, Termingarantie.",
    path: "/leistungen",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${SITE_ORIGIN}/leistungen#renovierung`,
        name: "Renovierung & Modernisierung",
        serviceType: "Renovierung",
        description: "Komplettrenovierungen und Wohnungssanierungen in Gevelsberg – termingerecht, sauber und zum Festpreis.",
        provider: { "@id": BUSINESS_ID },
        areaServed: [{ "@type": "City", name: "Gevelsberg" }, { "@type": "AdministrativeArea", name: "Ennepe-Ruhr-Kreis" }],
        url: `${SITE_ORIGIN}/leistungen#renovierung`,
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${SITE_ORIGIN}/leistungen#trockenbau`,
        name: "Trockenbau & Innenausbau",
        serviceType: "Trockenbau",
        description: "Professioneller Trockenbau für Privat- und Gewerbekunden in Gevelsberg. Wände, Decken, Ständerwerk.",
        provider: { "@id": BUSINESS_ID },
        areaServed: [{ "@type": "City", name: "Gevelsberg" }, { "@type": "AdministrativeArea", name: "Ennepe-Ruhr-Kreis" }],
        url: `${SITE_ORIGIN}/leistungen#trockenbau`,
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${SITE_ORIGIN}/leistungen#malerarbeiten`,
        name: "Malerarbeiten & Tapezieren",
        serviceType: "Malerarbeiten",
        description: "Innen- und Außenanstriche, Tapezierarbeiten und dekorative Wandgestaltung in Gevelsberg.",
        provider: { "@id": BUSINESS_ID },
        areaServed: [{ "@type": "City", name: "Gevelsberg" }, { "@type": "AdministrativeArea", name: "Ennepe-Ruhr-Kreis" }],
        url: `${SITE_ORIGIN}/leistungen#malerarbeiten`,
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${SITE_ORIGIN}/leistungen#bodenbelag`,
        name: "Bodenbeläge & Fliesen",
        serviceType: "Bodenbeläge",
        description: "Verlegen von Laminat, Parkett, Vinyl und Fliesen in Gevelsberg – sauber und fachgerecht.",
        provider: { "@id": BUSINESS_ID },
        areaServed: [{ "@type": "City", name: "Gevelsberg" }, { "@type": "AdministrativeArea", name: "Ennepe-Ruhr-Kreis" }],
        url: `${SITE_ORIGIN}/leistungen#bodenbelag`,
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${SITE_ORIGIN}/leistungen#sanierung`,
        name: "Badsanierung",
        serviceType: "Badsanierung",
        description: "Komplettsanierung von Badezimmern in Gevelsberg – Fliesen, Sanitär, Trockenbau und Abdichtung aus einer Hand.",
        provider: { "@id": BUSINESS_ID },
        areaServed: [{ "@type": "City", name: "Gevelsberg" }, { "@type": "AdministrativeArea", name: "Ennepe-Ruhr-Kreis" }],
        url: `${SITE_ORIGIN}/leistungen#sanierung`,
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${SITE_ORIGIN}/leistungen#aussenarbeiten`,
        name: "Außenarbeiten & Fassade",
        serviceType: "Fassadenarbeiten",
        description: "Fassadenarbeiten, Außenputz, Wärmedämmung und kleinere Erdarbeiten in Gevelsberg und dem Ennepe-Ruhr-Kreis.",
        provider: { "@id": BUSINESS_ID },
        areaServed: [{ "@type": "City", name: "Gevelsberg" }, { "@type": "AdministrativeArea", name: "Ennepe-Ruhr-Kreis" }],
        url: `${SITE_ORIGIN}/leistungen#aussenarbeiten`,
      },
      breadcrumbList([
        { name: "Startseite", path: "/" },
        { name: "Leistungen", path: "/leistungen" },
      ]),
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
              Was wir für Sie <em>leisten</em>
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

      <SeoRegionSection
        title="Bauleistungen für Gevelsberg, Hagen und den Ennepe-Ruhr-Kreis"
        paragraphs={[
          "Als Bauunternehmen in Gevelsberg bündeln wir alle Gewerke unter einem Dach. Das bedeutet für Sie: ein Ansprechpartner, ein Zeitplan und ein Festpreisangebot – ohne Subunternehmer-Ketten oder Koordinationsaufwand. Ob Renovierung im Altbau, Badrenovierung in Hagen, Innenausbau in Ennepetal oder Fassadenarbeiten in Schwelm: Wir kennen die typischen Anforderungen in der Region und planen realistisch.",
          "Unsere Leistungen reichen von der kleinen Ausbesserung bis zum Schlüsselfertigbau in NRW. Bei Komplettrenovierungen übernehmen wir Demontage, Trockenbau, Estricharbeiten, Malerarbeiten, Bodenverlegung und Sanitäranschlüsse in einem durchgängigen Prozess. Bei Badsanierungen kümmern wir uns um Abdichtung, Fliesen, Vorwandinstallation und finale Oberflächen – alles aus einer Hand.",
          "Viele Kunden kommen über Empfehlungen zu uns; andere suchen gezielt nach einem verlässlichen Partner für Renovierung im Ennepe-Ruhr-Kreis. In beiden Fällen gilt: Erst kommt die kostenlose Besichtigung, dann ein verständliches Angebot mit klaren Positionen. So wissen Sie vor Baubeginn genau, was gemacht wird und was es kostet.",
        ]}
      />

      {/* Services Detail */}
      <section className="section-pad">
        <div className="container mx-auto container-pad">
          <div className="space-y-14 sm:space-y-20 lg:space-y-24">
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


