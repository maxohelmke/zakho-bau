import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StatsStrip from "@/components/StatsStrip";
import Services from "@/components/Services";
import CtaBanner from "@/components/CtaBanner";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SeoRegionSection from "@/components/SeoRegionSection";
import { usePageSeo } from "@/hooks/use-page-seo";
import { SITE_ORIGIN } from "@/seo/sitemap-config";
import { BUSINESS_ID, breadcrumbList } from "@/seo/schema-helpers";

const Index = () => {
  usePageSeo({
    title: "Zakho Bau | Bauunternehmen Gevelsberg · Renovierung NRW",
    description:
      "Bauunternehmen Gevelsberg: Renovierung, Sanierung & Innenausbau im Ennepe-Ruhr-Kreis. Alle Gewerke aus einer Hand. Kostenlose Beratung ☎ 02332 8439131",
    path: "/",
    image: `${SITE_ORIGIN}/og-image.jpg`,
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Zakho Bau – Renovierung & Sanierung in Gevelsberg",
        description:
          "Renovierung, Sanierung und Innenausbau in Gevelsberg und im Ennepe-Ruhr-Kreis.",
        url: `${SITE_ORIGIN}/`,
      },
      breadcrumbList([{ name: "Startseite", path: "/" }]),
    ],
  });

  return (
    <div className="min-h-screen min-w-0 max-w-full overflow-x-hidden">
      {/* 1. Hero mit Parallax */}
      <Hero />
      {/* 2. Lauftext-Leiste mit Leistungen */}
      <Marquee />
      {/* 3. Statistiken — roter Akzent-Streifen */}
      <StatsStrip />
      {/* 4. Leistungen — editoriale Bildkacheln, dunkler Hintergrund */}
      <Services />
      {/* 4. CTA Banner — roter Gradient */}
      <CtaBanner />
      {/* 5. Referenz-Projekte */}
      <Projects />
      {/* 6. Warum Zakho Bau — dunkler Gradient */}
      <WhyUs />
      {/* 7. Kundenstimmen */}
      <Testimonials />
      {/* 8. Über uns */}
      <About />
      <SeoRegionSection
        variant="editorial"
        eyebrow="Bauunternehmen · Ennepe-Ruhr-Kreis"
        title="Ihr Bauunternehmen in Gevelsberg und dem Ennepe-Ruhr-Kreis"
        paragraphs={[
          "Zakho Bau ist seit 2014 Ihr inhabergeführtes Bauunternehmen in Gevelsberg. Wir planen und realisieren Renovierungen, Sanierungen und Innenausbauten für Privatkunden, Vermieter und Gewerbetreibende – vom einzelnen Raum bis zur schlüsselfertigen Komplettsanierung. Unser Team koordiniert alle Gewerke selbst: Trockenbau, Malerarbeiten, Bodenbeläge, Fliesenarbeiten, Badsanierung und Fassadenarbeiten laufen bei uns aus einer Hand.",
          "Als regional verwurzelter Betrieb kennen wir die Bausubstanz im Ennepe-Ruhr-Kreis genau – von Altbauten in Gevelsberg-Mitte über Nachkriegsbestand in Schwelm bis zu modernen Wohnquartieren in Ennepetal. Das spart Zeit bei der Planung und vermeidet böse Überraschungen auf der Baustelle. Ob Wohnungsrenovierung vor dem Einzug, Badrenovierung in Hagen oder Innenausbau in Ennepetal: Wir erstellen nach einer kostenlosen Besichtigung ein transparentes Festpreisangebot.",
          "Schlüsselfertigbau in NRW bedeutet für uns: Sie haben einen festen Ansprechpartner, klare Termine und saubere Baustellen. Rinas Mola und sein Team sind persönlich erreichbar – im Ladenlokal an der Hagener Straße 44, telefonisch oder per E-Mail. Viele Auftraggeber finden uns über Empfehlungen; wir investieren zunehmend in lokale Sichtbarkeit, damit Bauherren in Gevelsberg, Hagen, Wuppertal und Witten Zakho Bau auch online finden.",
          "Sie planen ein Projekt? Rufen Sie uns an unter 02332 8439131 oder stellen Sie eine unverbindliche Anfrage über unsere Website. In der Regel melden wir uns innerhalb von 24 Stunden und vereinbaren einen Vor-Ort-Termin – kostenlos und ohne Verpflichtung.",
        ]}
      />
      {/* 9. Kontakt */}
      <Contact />
      {/* 10. Footer */}
      <Footer />
    </div>
  );
};

export default Index;
