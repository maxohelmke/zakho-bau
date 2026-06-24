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
import { usePageSeo } from "@/hooks/use-page-seo";

const Index = () => {
  usePageSeo({
    title: "Zakho Bau | Renovierung & Sanierung Gevelsberg · Ennepe-Ruhr-Kreis",
    description:
      "Zakho Bau – Fachbetrieb für Renovierung, Sanierung, Trockenbau und Innenausbau in Gevelsberg. Alle Gewerke aus einer Hand. Kostenlose Beratung ☎ 02332 8439131",
    path: "/",
    image: "https://zakho-bau.de/og-image.jpg",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Zakho Bau – Renovierung & Sanierung in Gevelsberg",
        description:
          "Renovierung, Sanierung und Innenausbau in Gevelsberg und im Ennepe-Ruhr-Kreis.",
        url: "https://zakho-bau.de/",
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
        ],
      },
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
      {/* 9. Kontakt */}
      <Contact />
      {/* 10. Footer */}
      <Footer />
    </div>
  );
};

export default Index;
