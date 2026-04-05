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

const faqItems: { q: string; a: string }[] = [
  {
    q: "In welchen Regionen ist TATLI BAU tätig?",
    a: "Unser Schwerpunkt liegt auf Wuppertal und dem gesamten Bergischen Land – unter anderem Solingen, Remscheid, Velbert, Hückeswagen, Radevormwald und Schwelm. Sprechen Sie uns auch für angrenzende Gebiete an; je nach Projekt sind wir flexibel.",
  },
  {
    q: "Wie läuft eine typische Anfrage ab?",
    a: "Sie schildern Ihr Vorhaben per Formular, E-Mail oder Telefon. Wir melden uns in der Regel innerhalb von 24 Stunden, klären offene Punkte und vereinbaren bei Bedarf einen Besichtigungstermin. Anschließend erhalten Sie ein verständliches Angebot.",
  },
  {
    q: "Bieten Sie eine kostenlose Erstberatung an?",
    a: "Ja. Die Erstberatung ist unverbindlich. Wir besprechen Umfang, Zeitrahmen und Budgetrahmen – damit Sie eine realistische Entscheidungsgrundlage haben.",
  },
  {
    q: "Übernehmen Sie alle Gewerke aus einer Hand?",
    a: "Wo es sinnvoll ist, koordinieren wir alle Leistungen zentral – von Trockenbau und Malerarbeiten über Fliesen bis zu Abriss und Vorbereitung. So vermeiden Sie Schnittstellenprobleme und haben einen festen Ansprechpartner.",
  },
  {
    q: "Wie lange dauert eine Badsanierung?",
    a: "Das hängt von Umfang, Materialverfügbarkeit und baulichen Gegebenheiten ab. Eine typische Komplettsanierung ohne unvorhersehbare Altbauprobleme plant man oft in mehreren Wochen ein. Nach Besichtigung geben wir Ihnen einen realistischen Zeitplan.",
  },
  {
    q: "Arbeiten Sie mit festen Subunternehmern?",
    a: "Wir setzen auf ein eingespieltes Team und zuverlässige Partner. Entscheidend ist: Qualität, Termintreue und klare Absprachen – der Inhaber bleibt Ihr direkter Ansprechpartner.",
  },
  {
    q: "Kann ich während der Arbeiten in der Wohnung bleiben?",
    a: "Bei kleineren Arbeiten oft ja; bei größeren Sanierungen oder Staub-/Feuchtephasen empfehlen wir manchmal temporäre Ausweichmöglichkeiten. Das besprechen wir vor Projektstart individuell.",
  },
  {
    q: "Wie werden Kosten und Zusatzleistungen abgerechnet?",
    a: "Das Angebot listet die vereinbarten Leistungen auf. Änderungen oder Zusatzwünsche werden vor Umsetzung besprochen und dokumentiert – Sie behalten die Kontrolle über das Budget.",
  },
  {
    q: "Sind Sie für Gewerbekunden geeignet?",
    a: "Ja. Wir betreuen auch gewerbliche Objekte, etwa Ladenflächen, Büros oder vermietete Einheiten – mit Fokus auf termingerechte Fertigstellung und saubere Übergabe.",
  },
  {
    q: "Wie erreiche ich TATLI BAU am schnellsten?",
    a: "Am telefonisch unter 01525 4090013 oder per E-Mail an tatlican2@icloud.com. Alternativ nutzen Sie das Kontaktformular oder die Seite „Kostenlos anfragen“.",
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
        item: "https://tatlibau.de/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQ",
        item: "https://tatlibau.de/faq",
      },
    ],
  },
];

const Faq = () => {
  usePageSeo({
    title: "FAQ – Häufige Fragen | TATLI BAU Wuppertal",
    description:
      "Antworten zu Einsatzgebiet, Ablauf, Badsanierung, Gewerken und Kosten bei TATLI BAU in Wuppertal und im Bergischen Land.",
    path: "/faq",
    structuredData: faqStructuredData,
  });

  return (
    <div className="min-h-screen min-w-0 max-w-full overflow-x-hidden bg-background">
      <section className="bg-dark-section py-24 pt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Hilfe & Orientierung
            </p>
            <h1 className="mb-6 text-primary-foreground">Häufig gestellte Fragen</h1>
            <p className="text-lg leading-relaxed text-primary-foreground/60">
              Hier finden Sie Antworten zum Ablauf, zu Leistungen und zu unserem Service in
              Wuppertal und im Bergischen Land. Fehlt etwas? Wir helfen Ihnen gerne persönlich.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto max-w-3xl px-4 lg:px-8">
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
              Rufen Sie uns an oder senden Sie eine Nachricht – wir melden uns zeitnah bei Ihnen.
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
