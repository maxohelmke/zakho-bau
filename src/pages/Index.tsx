import Hero from "@/components/Hero";
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
    title: "Zakho Bau | Bau & Sanierung in Gevelsberg",
    description:
      "Zakho Bau – Ihr Experte für Renovierung, Sanierung und Bauarbeiten in Gevelsberg und im Ennepe-Ruhr-Kreis. Qualität aus Erfahrung. Kostenlose Beratung.",
    path: "/",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Zakho Bau – Bau & Sanierung in Gevelsberg",
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
      {/* 2. Statistiken — roter Akzent-Streifen */}
      <StatsStrip />
      {/* 3. Leistungen — Flip-Karten, dunkler Hintergrund */}
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
