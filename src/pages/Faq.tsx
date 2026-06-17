import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import { usePageSeo } from "@/hooks/use-page-seo";
import heroImg from "@/assets/hero-faq.jpg";
import { Sparkles } from "lucide-react";

const faqItems: { q: string; a: string }[] = [
  {
    q: "In welchen Regionen ist Zakho Bau tÃ¤tig?",
    a: "Unser Schwerpunkt liegt auf Gevelsberg und dem Ennepe-Ruhr-Kreis â€“ unter anderem Ennepetal, Schwelm, Hagen, Wuppertal und Witten. Sprechen Sie uns auch fÃ¼r angrenzende Gebiete an; je nach Projekt sind wir flexibel.",
  },
  {
    q: "Wie lÃ¤uft eine typische Anfrage ab?",
    a: "Sie schildern Ihr Vorhaben per Formular, E-Mail oder Telefon. Wir melden uns in der Regel innerhalb von 24 Stunden, klÃ¤ren offene Punkte und vereinbaren bei Bedarf einen Besichtigungstermin. AnschlieÃŸend erhalten Sie ein verstÃ¤ndliches Angebot.",
  },
  {
    q: "Bieten Sie eine kostenlose Erstberatung an?",
    a: "Ja. Die Erstberatung ist unverbindlich. Wir besprechen Umfang, Zeitrahmen und Budgetrahmen â€“ damit Sie eine realistische Entscheidungsgrundlage haben.",
  },
  {
    q: "Ãœbernehmen Sie alle Gewerke aus einer Hand?",
    a: "Wo es sinnvoll ist, koordinieren wir alle Leistungen zentral â€“ von Trockenbau und Malerarbeiten Ã¼ber Fliesen bis zu Abriss und Vorbereitung. So vermeiden Sie Schnittstellenprobleme und haben einen festen Ansprechpartner.",
  },
  {
    q: "Wie lange dauert eine Badsanierung?",
    a: "Das hÃ¤ngt von Umfang, MaterialverfÃ¼gbarkeit und baulichen Gegebenheiten ab. Eine typische Komplettsanierung ohne unvorhersehbare Altbauprobleme plant man oft in mehreren Wochen ein. Nach Besichtigung geben wir Ihnen einen realistischen Zeitplan.",
  },
  {
    q: "Arbeiten Sie mit festen Subunternehmern?",
    a: "Wir setzen auf ein eingespieltes Team und zuverlÃ¤ssige Partner. Entscheidend ist: QualitÃ¤t, Termintreue und klare Absprachen â€“ der Inhaber bleibt Ihr direkter Ansprechpartner.",
  },
  {
    q: "Kann ich wÃ¤hrend der Arbeiten in der Wohnung bleiben?",
    a: "Bei kleineren Arbeiten oft ja; bei grÃ¶ÃŸeren Sanierungen oder Staub-/Feuchtephasen empfehlen wir manchmal temporÃ¤re AusweichmÃ¶glichkeiten. Das besprechen wir vor Projektstart individuell.",
  },
  {
    q: "Wie werden Kosten und Zusatzleistungen abgerechnet?",
    a: "Das Angebot listet die vereinbarten Leistungen auf. Ã„nderungen oder ZusatzwÃ¼nsche werden vor Umsetzung besprochen und dokumentiert â€“ Sie behalten die Kontrolle Ã¼ber das Budget.",
  },
  {
    q: "Sind Sie fÃ¼r Gewerbekunden geeignet?",
    a: "Ja. Wir betreuen auch gewerbliche Objekte, etwa LadenflÃ¤chen, BÃ¼ros oder vermietete Einheiten â€“ mit Fokus auf termingerechte Fertigstellung und saubere Ãœbergabe.",
  },
  {
    q: "Wie erreiche ich Zakho Bau am schnellsten?",
    a: "Am telefonisch unter +49 1578 8888852 oder per E-Mail an info@zakho-bau.de. Alternativ nutzen Sie das Kontaktformular oder die Seite â€žKostenlos anfragenâ€œ.",
  },
];

const faqStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
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
        name: "FAQ",
        item: "https://zakho-bau.de/faq",
      },
    ],
  },
];

const Faq = () => {
  usePageSeo({
    title: "FAQ â€“ HÃ¤ufige Fragen | Zakho Bau Wuppertal",
    description:
      "Antworten zu Einsatzgebiet, Ablauf, Badsanierung, Gewerken und Kosten bei Zakho Bau in Gevelsberg und im Ennepe-Ruhr-Kreis.",
    path: "/faq",
    structuredData: faqStructuredData,
  });

  return (
    <div className="min-h-screen min-w-0 max-w-full overflow-x-hidden bg-background">
      <section className="relative flex min-h-[min(50vh,440px)] flex-col justify-end overflow-hidden pt-28 pb-10 md:pb-14">
        <img
          src={heroImg}
          alt="BeratungsgesprÃ¤ch â€“ Zakho Bau FAQ"
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
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Hilfe & Orientierung
            </p>
            <h1 className="mb-4 text-primary-foreground">HÃ¤ufig gestellte Fragen</h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              Hier finden Sie Antworten zum Ablauf, zu Leistungen und zu unserem Service in
              Gevelsberg und im Ennepe-Ruhr-Kreis. Fehlt etwas? Wir helfen Ihnen gerne persÃ¶nlich.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {["Schnelle RÃ¼ckmeldung", "Transparente Angebote", "Fester Ansprechpartner"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90"
                >
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              <Link to="/anfragen">
                <Button variant="accent" size="lg" className="w-full sm:w-auto">
                  Kostenlos anfragen
                </Button>
              </Link>
              <a href="tel:+4915254090013" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  +49 1578 8888852
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-pad-sm lg:py-24">
        <div className="container mx-auto max-w-3xl container-pad">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-foreground">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-xl border border-border bg-secondary p-8 text-center"
          >
            <h2 className="mb-2 text-xl font-semibold text-foreground">
              Noch Fragen?
            </h2>
            <p className="mb-6 text-muted-foreground">
              Rufen Sie uns an oder senden Sie eine Nachricht â€“ wir melden uns zeitnah bei Ihnen.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/kontakt">
                <Button variant="accent">Zum Kontakt</Button>
              </Link>
              <Link to="/anfragen">
                <Button variant="outline">Projekt anfragen</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Faq;


