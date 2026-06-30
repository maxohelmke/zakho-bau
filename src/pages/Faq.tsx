import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { ArrowRight, Phone } from "lucide-react";

/* -- Kategorien ------------------------------------------------------- */
type Category = "alle" | "ablauf" | "kosten" | "leistungen" | "termine" | "sonstiges";

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "alle",       label: "Alle Fragen" },
  { id: "ablauf",     label: "Ablauf & Anfrage" },
  { id: "kosten",     label: "Kosten & Preise" },
  { id: "leistungen", label: "Leistungen" },
  { id: "termine",    label: "Termine & Planung" },
  { id: "sonstiges",  label: "Sonstiges" },
];

/* -- FAQ-Einträge ----------------------------------------------------- */
const faqItems: { q: string; a: string; cat: Category }[] = [
  // Ablauf & Anfrage
  {
    cat: "ablauf",
    q: "Wie läuft eine typische Anfrage bei Zakho Bau ab?",
    a: "Sie schildern Ihr Vorhaben per Formular, E-Mail oder Telefon. Wir melden uns in der Regel innerhalb von 24 Stunden, klären offene Punkte und vereinbaren einen Besichtigungstermin. Anschließend erhalten Sie ein verständliches, detailliertes Angebot.",
  },
  {
    cat: "ablauf",
    q: "Bieten Sie eine kostenlose Erstberatung an?",
    a: "Ja. Die Erstberatung ist vollständig kostenlos und unverbindlich. Wir besprechen Umfang, Zeitrahmen und Budgetrahmen – damit Sie eine realistische Entscheidungsgrundlage haben, bevor Sie sich festlegen.",
  },
  {
    cat: "ablauf",
    q: "Muss ich für ein Angebot vor Ort sein?",
    a: "Bei kleineren, klar definierten Arbeiten reichen manchmal Fotos und eine genaue Beschreibung. Für größere Projekte empfehlen wir immer einen Besichtigungstermin – das schützt beide Seiten vor Überraschungen.",
  },
  {
    cat: "ablauf",
    q: "Wie schnell bekomme ich eine Rückmeldung nach meiner Anfrage?",
    a: "Wir melden uns in der Regel innerhalb eines Werktags – oft noch am selben Tag. Bei dringenden Schadensfällen bitten wir, das in der Nachricht zu vermerken, damit wir priorisieren können.",
  },
  {
    cat: "ablauf",
    q: "Wie läuft der Besichtigungstermin ab?",
    a: "Wir kommen zum vereinbarten Termin zu Ihnen, schauen uns das Objekt an und besprechen Ihre Wünsche direkt vor Ort. Danach erstellen wir ein schriftliches Angebot mit klaren Positionen. Der Termin dauert in der Regel 30–60 Minuten.",
  },

  // Kosten & Preise
  {
    cat: "kosten",
    q: "Wie werden Kosten und Zusatzleistungen abgerechnet?",
    a: "Das Angebot listet die vereinbarten Leistungen transparent auf. Änderungen oder Zusatzwünsche werden vor Umsetzung besprochen und schriftlich dokumentiert – Sie behalten die volle Kontrolle über das Budget.",
  },
  {
    cat: "kosten",
    q: "Gibt es Festpreise?",
    a: "Wo der Leistungsumfang klar definierbar ist, bieten wir gerne Festpreise an. Bei Altbau-Projekten, wo sich der Befund erst beim Öffnen zeigt, arbeiten wir mit transparenten Einheitspreisen und informieren Sie sofort, wenn sich etwas ändert.",
  },
  {
    cat: "kosten",
    q: "Was passiert, wenn während der Arbeit unerwartete Probleme auftauchen?",
    a: "Wir stoppen die Arbeiten, zeigen Ihnen den Befund mit Fotos und erklären die Situation. Dann besprechen wir gemeinsam die Optionen mit klaren Kostenfolgen – keine Überraschungen auf der Rechnung.",
  },
  {
    cat: "kosten",
    q: "Muss ich eine Anzahlung leisten?",
    a: "Bei größeren Projekten vereinbaren wir in der Regel eine Zahlung nach Teilleistungen. Die genauen Bedingungen stehen im Angebot. Keine Vorauszahlung ohne schriftliche Vereinbarung.",
  },
  {
    cat: "kosten",
    q: "Stellen Sie eine detaillierte Rechnung aus?",
    a: "Selbstverständlich. Sie erhalten eine nachvollziehbare Rechnung mit allen Positionen – für Ihre Unterlagen, Steuer oder etwaige Versicherungsanfragen.",
  },

  // Leistungen
  {
    cat: "leistungen",
    q: "Übernehmen Sie alle Gewerke aus einer Hand?",
    a: "Wo es sinnvoll ist, koordinieren wir alle Leistungen zentral – von Trockenbau und Malerarbeiten über Fliesen bis zu Abriss und Vorbereitung. So vermeiden Sie Schnittstellenprobleme und haben einen festen Ansprechpartner.",
  },
  {
    cat: "leistungen",
    q: "Wie lange dauert eine Badsanierung?",
    a: "Das hängt von Umfang, Materialverfügbarkeit und baulichen Gegebenheiten ab. Eine typische Komplettsanierung ohne unvorhersehbare Altbauprobleme liegt oft bei zwei bis vier Wochen. Nach der Besichtigung geben wir Ihnen einen realistischen Zeitplan.",
  },
  {
    cat: "leistungen",
    q: "Machen Sie auch nur einzelne Gewerke, z. B. nur Malerarbeiten?",
    a: "Ja, je nach Kapazität führen wir auch Einzelgewerke aus – Maler, Boden, Fliesen oder Trockenbau. Sprechen Sie uns konkret an; wir sagen ehrlich, ob und wann wir den Auftrag übernehmen können.",
  },
  {
    cat: "leistungen",
    q: "Führen Sie auch Außenarbeiten und Fassadensanierungen durch?",
    a: "Ja. Wir übernehmen Fassadenanstrich, Außenputz, Wärmedämmung und kleinere Erdarbeiten rund ums Haus.",
  },
  {
    cat: "leistungen",
    q: "Können Sie Modernisierungen für Vermieter oder Eigentümergemeinschaften abwickeln?",
    a: "Ja. Wir arbeiten auch für Vermieter und Verwaltungen – mit nachvollziehbarer Dokumentation und Kommunikation, die auch für Dritte (Mieter, Versicherung, Finanzamt) geeignet ist.",
  },
  {
    cat: "leistungen",
    q: "Sind Sie für Gewerbekunden geeignet?",
    a: "Ja. Wir betreuen auch gewerbliche Objekte wie Ladenflächen, Büros oder vermietete Einheiten – mit Fokus auf termingerechte Fertigstellung und saubere Übergabe.",
  },
  {
    cat: "leistungen",
    q: "Übernehmen Sie auch Schadensbeseitigungen, z. B. nach Wasserschäden?",
    a: "Ja – Befund, Austausch der betroffenen Bereiche und Wiederherstellung der Oberflächen. Bei Bedarf erstellen wir auch Dokumentation für die Versicherung.",
  },

  // Termine & Planung
  {
    cat: "termine",
    q: "Kann ich während der Arbeiten in der Wohnung bleiben?",
    a: "Bei kleineren Arbeiten oft ja. Bei größeren Sanierungen oder Staub- und Feuchtephasen empfehlen wir manchmal temporäre Ausweichmöglichkeiten. Das besprechen wir individuell vor Projektstart.",
  },
  {
    cat: "termine",
    q: "Wie weit im Voraus sollte ich anfragen?",
    a: "Je früher, desto besser – gerade für Saisonspitzen (Frühjahr/Herbst) sind beliebte Zeitfenster schnell vergeben. Kurzfristige Anfragen nehmen wir aber gerne entgegen; manchmal haben wir freie Kapazitäten früher als erwartet.",
  },
  {
    cat: "termine",
    q: "Was passiert, wenn sich mein Zeitplan ändert?",
    a: "Sprechen Sie uns so früh wie möglich an. Wir versuchen, flexibel zu reagieren und die Planung anzupassen. Kurzfristige Absagen kurz vor Baubeginn können je nach Aufwand Kosten verursachen – das regeln wir fair und transparent.",
  },

  // Sonstiges
  {
    cat: "sonstiges",
    q: "In welchen Regionen ist Zakho Bau tätig?",
    a: "Unser Schwerpunkt liegt auf Gevelsberg und dem Ennepe-Ruhr-Kreis – darunter Ennepetal, Schwelm, Hagen, Wuppertal und Witten. Für angrenzende Gebiete sprechen Sie uns einfach an.",
  },
  {
    cat: "sonstiges",
    q: "Arbeiten Sie mit festen Subunternehmern?",
    a: "Wir setzen auf ein eingespieltes Team und zuverlässige Partner. Entscheidend ist: Qualität, Termintreue und klare Absprachen. Der Inhaber bleibt in jedem Fall Ihr direkter Ansprechpartner.",
  },
  {
    cat: "sonstiges",
    q: "Wie erreiche ich Zakho Bau am schnellsten?",
    a: "Telefonisch unter 02332 8439131 (Festnetz) oder 0157 888 888 52 (Mobil) sowie per E-Mail an info@zakho-bau.de. Alternativ nutzen Sie unser Kontaktformular – wir melden uns innerhalb von 24 Stunden.",
  },
  {
    cat: "sonstiges",
    q: "Haben Sie ein Ladenlokal, das ich besuchen kann?",
    a: "Ja. Sie finden uns an der Hagener Straße 44 in 58285 Gevelsberg. Öffnungszeiten: Montag bis Freitag, 08–18 Uhr. Ein kurzer Anruf vorab ist sinnvoll, damit wir uns Zeit für Sie nehmen können.",
  },
];

/* -- Structured Data ------------------------------------------------- */
const faqStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.zakho-bau.de/" },
      { "@type": "ListItem", position: 2, name: "FAQ",        item: "https://www.zakho-bau.de/faq" },
    ],
  },
];

/* -- Komponente ------------------------------------------------------- */
const Faq = () => {
  const [active, setActive] = useState<Category>("alle");

  usePageSeo({
    title: "FAQ – Häufige Fragen | Zakho Bau Gevelsberg",
    description:
      "Häufige Fragen zu Renovierung, Badsanierung, Kosten und Ablauf bei Zakho Bau in Gevelsberg. Schnelle Antworten rund um Ihr Bauprojekt im Ennepe-Ruhr-Kreis.",
    path: "/faq",
    structuredData: faqStructuredData,
  });

  const visible = active === "alle" ? faqItems : faqItems.filter((f) => f.cat === active);

  return (
    <div className="min-h-screen min-w-0 max-w-full overflow-x-hidden bg-background">

      {/* -- Hero ------------------------------------------------------- */}
      <section className="relative flex min-h-[min(72vh,640px)] flex-col justify-end overflow-hidden pb-0 pt-20">
        <img
          src={heroImg}
          alt="Beratungsgespräch – Zakho Bau FAQ"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: 0.5 }}
          width={1920} height={800}
          loading="eager" decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        <div className="absolute left-0 top-0 h-[3px] w-full bg-accent" />

        {/* Dekoratives Watermark */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden">
          <p
            className="translate-y-[35%] font-heading font-black uppercase leading-none text-white/[0.035]"
            style={{ fontSize: "clamp(4rem, 18vw, 16rem)" }}
          >
            FAQ
          </p>
        </div>

        <div className="container relative z-10 mx-auto container-pad pb-14 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">
              Hilfe & Orientierung
            </p>
            <h1 className="mb-5 font-heading text-white" style={{ textShadow: "0 2px 40px rgba(0,0,0,0.5)" }}>
              Häufig gestellte <em>Fragen</em>
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/75">
              Hier finden Sie Antworten zu Ablauf, Kosten, Leistungen und mehr.
              Nicht dabei? Wir helfen Ihnen persönlich weiter.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/anfragen">
                <Button variant="accent" size="lg" className="w-full sm:w-auto">
                  Kostenlos anfragen <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="tel:+4915788888852" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto">
                  <Phone className="mr-2 h-4 w-4" />
                  +49 1578 8888852
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -- Kategorie-Filter ------------------------------------------- */}
      <div className="sticky top-[60px] z-30 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="container mx-auto container-pad">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  active === c.id
                    ? "bg-accent text-white shadow-sm"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                {c.label}
                {c.id !== "alle" && (
                  <span className={`ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                    active === c.id ? "bg-white/20 text-white" : "bg-border text-muted-foreground"
                  }`}>
                    {faqItems.filter((f) => f.cat === c.id).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* -- FAQ-Inhalt -------------------------------------------------- */}
      <section className="section-pad-sm">
        <div className="container mx-auto container-pad">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start lg:gap-16">

            {/* Akkordeon */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Kategorie-Überschrift */}
                  {active !== "alle" && (
                    <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                      {CATEGORIES.find((c) => c.id === active)?.label}
                    </p>
                  )}
                  {active === "alle" && (
                    <p className="mb-6 text-sm text-muted-foreground">
                      {faqItems.length} Fragen in allen Kategorien
                    </p>
                  )}

                  <Accordion type="single" collapsible className="w-full">
                    {visible.map((item, i) => (
                      <motion.div
                        key={item.q}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: i * 0.04 }}
                      >
                        <AccordionItem value={`${active}-${i}`} className="border-border">
                          <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-accent hover:no-underline">
                            {item.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                            {item.a}
                          </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    ))}
                  </Accordion>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-[120px] space-y-5">

                {/* Kontakt-Box */}
                <div className="rounded-2xl bg-[#0E0E0E] p-6">
                  <div className="mb-4 h-1 w-10 rounded-full bg-accent" />
                  <h3 className="mb-2 text-base font-bold text-white">Noch Fragen?</h3>
                  <p className="mb-5 text-sm text-white/55">
                    Rufen Sie uns an oder senden Sie eine Nachricht – wir helfen gerne persönlich weiter.
                  </p>
                  <div className="space-y-2">
                    <a href="tel:+4923328439131" className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white">
                      <Phone className="h-4 w-4 text-accent" />
                      02332 8439131
                    </a>
                    <a href="tel:+4915788888852" className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white">
                      <Phone className="h-4 w-4 text-accent" />
                      0157 888 888 52
                    </a>
                    <Link to="/anfragen">
                      <Button variant="accent" className="mt-2 w-full">
                        Projekt anfragen
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Öffnungszeiten */}
                <div className="rounded-2xl border border-border bg-secondary p-6">
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-foreground">Öffnungszeiten</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-foreground">
                      <span>Mo – Fr</span>
                      <span className="font-semibold">08:00 – 18:00</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Samstag</span>
                      <span>Nach Absprache</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Sonntag</span>
                      <span>Geschlossen</span>
                    </div>
                  </div>
                  <div className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
                    Hagener Str. 44 · 58285 Gevelsberg
                  </div>
                </div>

                {/* Kategorien */}
                <div className="rounded-2xl border border-border bg-background p-6">
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-foreground">Kategorien</h3>
                  <div className="space-y-1">
                    {CATEGORIES.filter((c) => c.id !== "alle").map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setActive(c.id)}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                          active === c.id
                            ? "bg-accent/10 font-semibold text-accent"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                        }`}
                      >
                        {c.label}
                        <span className="text-xs font-bold text-muted-foreground/60">
                          {faqItems.filter((f) => f.cat === c.id).length}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- CTA -------------------------------------------------------- */}
      <section className="bg-[#0E0E0E] section-pad-sm">
        <div className="container mx-auto container-pad">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid items-center gap-8 lg:grid-cols-[1fr_auto]"
          >
            <div>
              <div className="mb-5 h-1 w-12 rounded-full bg-accent" />
              <h2 className="mb-3 text-white">Ihr Projekt. Unsere Antwort.</h2>
              <p className="max-w-xl text-lg text-white/60">
                Kostenlose Erstberatung — wir melden uns innerhalb von 24 Stunden
                mit einem unverbindlichen Angebot.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link to="/anfragen">
                <Button variant="accent" size="lg" className="w-full sm:w-auto">
                  Kostenlos anfragen
                </Button>
              </Link>
              <Link to="/kontakt">
                <Button variant="outline" size="lg" className="w-full border-white/25 bg-white/8 text-white hover:bg-white/15 sm:w-auto">
                  Zum Kontakt
                </Button>
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
