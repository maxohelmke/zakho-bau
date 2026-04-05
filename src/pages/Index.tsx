import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { usePageSeo } from "@/hooks/use-page-seo";

const Index = () => {
  usePageSeo({
    title: "TATLI BAU – Bau & Sanierung in Wuppertal | Bergisches Land",
    description:
      "TATLI BAU ist Ihr Partner für Renovierung, Sanierung und Innenausbau in Wuppertal und im Bergischen Land. Kostenlose Beratung und schnelle Rückmeldung.",
    path: "/",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "TATLI BAU – Bau & Sanierung in Wuppertal",
        description:
          "Renovierung, Sanierung und Innenausbau in Wuppertal und im Bergischen Land.",
        url: "https://tatlibau.de/",
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
        ],
      },
    ],
  });

  return (
    <div className="min-h-screen min-w-0 max-w-full overflow-x-hidden">
      <Hero />
      <Services />
      <WhyUs />
      <Projects />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
