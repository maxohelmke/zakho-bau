import { useMemo } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import {
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Hammer,
  Headphones,
  Home,
  MapPin,
  MessageSquare,
  Paintbrush,
  Phone,
  Ruler,
  Shield,
  Sparkles,
  Timer,
  TrendingUp,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import { usePageSeo } from "@/hooks/use-page-seo";
import { STANDORTE, getStandortBySlug, type StandortData } from "@/data/standorte";
import NotFound from "@/pages/NotFound";
import { SITE_ORIGIN } from "@/seo/sitemap-config";

const DEFAULT_STATS: { value: string; label: string }[] = [
  { value: "10+", label: "Jahre Erfahrung" },
  { value: "< 24h", label: "Rückmeldung auf Anfragen" },
  { value: "1", label: "fester Ansprechpartner" },
];

const HERO_TRUST_CHIPS = [
  "Kostenlose Erstberatung",
  "Alle Gewerke koordinierbar",
  "Transparente Angebote",
];

const PROCESS_STEPS: { icon: LucideIcon; title: string; sub: string }[] = [
  { icon: MessageSquare, title: "Anfrage", sub: "Kurz beschreiben" },
  { icon: ClipboardList, title: "Besichtigung", sub: "Vor-Ort-Termin" },
  { icon: Ruler, title: "Angebot", sub: "Klare Positionen" },
  { icon: Hammer, title: "Umsetzung", sub: "Aus einer Hand" },
];

const HIGHLIGHT_ICONS: LucideIcon[] = [Shield, Timer, Users, CheckCircle2];
const FACT_ICONS: LucideIcon[] = [MapPin, Building2, TrendingUp];
const SERVICE_ICONS: LucideIcon[] = [Wrench, Home, Paintbrush, Hammer, Sparkles, Ruler];
const SECTION_ICONS: LucideIcon[] = [Shield, Users, Timer, TrendingUp];

const StandortContent = ({ standort }: { standort: StandortData }) => {
  const ogImageUrl = `${SITE_ORIGIN}${standort.heroImage}`;
  const stats = standort.stats ?? DEFAULT_STATS;

  const structuredData = useMemo(() => {
    const faqPage =
      standort.faqs.length > 0
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: standort.faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.answer,
              },
            })),
          }
        : null;

    return [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: standort.seoTitle,
        description: standort.seoDescription,
        url: `${SITE_ORIGIN}/standort/${standort.slug}`,
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: ogImageUrl,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `Bau und Sanierung ${standort.name}`,
        description: `${standort.intro} ${standort.introHighlight}`,
        image: ogImageUrl,
        areaServed: {
          "@type": "City",
          name: standort.name,
        },
        provider: {
          "@type": "HomeAndConstructionBusiness",
          name: "TATLI BAU",
          telephone: "+4915254090013",
          email: "tatlican2@icloud.com",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Startseite",
            item: `${SITE_ORIGIN}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: standort.name,
            item: `${SITE_ORIGIN}/standort/${standort.slug}`,
          },
        ],
      },
      ...(faqPage ? [faqPage] : []),
    ];
  }, [standort, ogImageUrl]);

  usePageSeo({
    title: standort.seoTitle,
    description: standort.seoDescription,
    path: `/standort/${standort.slug}`,
    image: ogImageUrl,
    structuredData,
  });

  const andereStandorte = STANDORTE.filter((s) => s.slug !== standort.slug);

  return (
    <div className="min-h-screen min-w-0 max-w-full overflow-x-hidden bg-background">
      {/* Hero – kompakt, above the fold ohne Langtext */}
      <section className="relative flex min-h-[min(58vh,520px)] flex-col justify-end overflow-hidden pt-28 pb-10 md:min-h-[min(52vh,560px)] md:pb-14">
        <img
          src={standort.heroImage}
          alt={standort.heroImageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
          decoding="async"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-foreground/[0.97] via-foreground/70 to-foreground/45"
          aria-hidden
        />
        <div className="container relative z-10 mx-auto min-w-0 max-w-full px-4 lg:px-8">
          <nav className="mb-5 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-xs text-primary-foreground/70 md:text-sm">
            <Link to="/" className="transition-colors hover:text-accent">
              Startseite
            </Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-60" aria-hidden />
            <span className="text-primary-foreground/90">{standort.name}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-2xl"
          >
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Standort {standort.name}
            </p>
            <h1 className="mb-3 font-heading text-3xl leading-tight text-primary-foreground md:text-4xl">
              {standort.headline}
            </h1>
            <p className="text-base font-medium leading-snug text-accent md:text-lg">{standort.subline}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {HERO_TRUST_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium text-primary-foreground/90 backdrop-blur-sm"
                >
                  <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden />
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link to="/anfragen">
                <Button variant="accent" size="lg" className="w-full sm:w-auto">
                  Unverbindlich anfragen
                </Button>
              </Link>
              <a href="tel:+4915254090013" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/20 sm:w-auto"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  01525 4090013
                </Button>
              </a>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-primary-foreground/65">
              <MapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden />
              <span>{standort.regionTag}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro + Kennzahlen – voller Kontext unterhalb des Hero */}
      <section className="border-b border-border bg-secondary py-12 lg:py-16">
        <div className="container mx-auto min-w-0 max-w-full px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                <Headphones className="h-4 w-4" aria-hidden />
                Beratung in {standort.name}
              </div>
              <p className="text-lg leading-relaxed text-foreground">{standort.intro}</p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Vertrauen auf einen Blick
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl bg-muted/60 px-2 py-4 text-center"
                    >
                      <p className="font-heading text-2xl font-bold text-accent md:text-3xl">{s.value}</p>
                      <p className="mt-1 text-[0.65rem] leading-tight text-muted-foreground md:text-xs">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3 rounded-lg border border-accent/20 bg-accent/5 p-3 text-sm text-foreground">
                  <Phone className="h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <span>
                    Direkt durch den Inhaber – <strong className="font-semibold">01525 4090013</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Highlight-Zitat: volle Viewport-Breite, ohne Container-Max-Breite */}
        <div className="mt-10 w-full border-y border-border/70 bg-muted/40">
          <div className="mx-auto w-full max-w-none px-4 py-6 sm:px-6 md:px-8 lg:px-12 lg:py-8 xl:px-16">
            <p className="border-l-4 border-accent pl-4 text-base leading-relaxed text-muted-foreground sm:pl-5 md:text-lg md:leading-relaxed">
              {standort.introHighlight}
            </p>
          </div>
        </div>
      </section>

      {/* Ablauf – visuell */}
      <section className="border-b border-border py-10 lg:py-12">
        <div className="container mx-auto min-w-0 max-w-full px-4 lg:px-8">
          <h2 className="text-center text-lg font-semibold text-foreground md:text-xl">
            So läuft Ihr Projekt ab
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.title}
                className="relative flex flex-col items-center rounded-xl border border-border bg-card p-4 text-center shadow-sm"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <step.icon className="h-6 w-6" aria-hidden />
                </div>
                <span className="text-xs font-medium text-muted-foreground">Schritt {i + 1}</span>
                <p className="mt-1 font-semibold text-foreground">{step.title}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{step.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights – mit Icons */}
      <section className="border-b border-border bg-secondary py-12 lg:py-16">
        <div className="container mx-auto min-w-0 max-w-full px-4 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              {standort.highlightsSectionTitle}
            </h2>
            <p className="mt-2 text-muted-foreground">{standort.highlightsSectionLead}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {standort.highlights.map((h, i) => {
              const Hi = HIGHLIGHT_ICONS[i % HIGHLIGHT_ICONS.length];
              return (
                <div
                  key={h}
                  className="flex gap-4 rounded-xl border border-border bg-background p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Hi className="h-5 w-5 text-accent" aria-hidden />
                  </div>
                  <span className="text-sm font-medium leading-snug text-foreground">{h}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kurzinfos – Icons */}
      <section className="border-b border-border py-12 lg:py-14">
        <div className="container mx-auto min-w-0 max-w-full px-4 lg:px-8">
          <h2 className="mb-2 text-xl font-semibold text-foreground md:text-2xl">
            Kurz & relevant für {standort.name}
          </h2>
          <p className="mb-8 max-w-2xl text-sm text-muted-foreground">
            Orientierung auf einen Blick – Details finden Sie weiter unten oder in einem persönlichen Gespräch.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {standort.localFacts.map((f, i) => {
              const Fi = FACT_ICONS[i % FACT_ICONS.length];
              return (
                <div
                  key={f.label}
                  className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                    <Fi className="h-6 w-6 text-accent" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-foreground">{f.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leistungsschwerpunkte – Grid mit Icons */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto min-w-0 max-w-full px-4 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">{standort.serviceFocus.title}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{standort.serviceFocus.intro}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {standort.serviceFocus.items.map((item, i) => {
              const Si = SERVICE_ICONS[i % SERVICE_ICONS.length];
              return (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl border border-border bg-muted/30 p-4 lg:p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background shadow-sm">
                    <Si className="h-5 w-5 text-accent" aria-hidden />
                  </div>
                  <p className="text-sm leading-relaxed text-foreground">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inhalt – Karten mit Icon-Header */}
      <section className="border-t border-border bg-secondary/50 py-12 lg:py-20">
        <div className="container mx-auto min-w-0 max-w-full px-4 lg:px-8">
          <div className="mx-auto grid max-w-4xl gap-6 lg:gap-8">
            {standort.sections.map((sec, i) => {
              const Si = SECTION_ICONS[i % SECTION_ICONS.length];
              return (
                <motion.article
                  key={sec.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.2) }}
                  className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm"
                >
                  <div className="flex items-start gap-4 border-b border-border bg-muted/40 px-5 py-4 md:px-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/15">
                      <Si className="h-5 w-5 text-accent" aria-hidden />
                    </div>
                    <h2 className="pt-1.5 text-lg font-semibold leading-snug text-foreground md:text-xl">
                      {sec.title}
                    </h2>
                  </div>
                  <p className="px-5 py-5 text-sm leading-relaxed text-muted-foreground md:px-6 md:text-base md:leading-relaxed">
                    {sec.body}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border py-12 lg:py-16">
        <div className="container mx-auto min-w-0 max-w-full px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                <MessageSquare className="h-5 w-5 text-accent" aria-hidden />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground md:text-2xl">
                  Häufige Fragen – {standort.name}
                </h2>
                <p className="text-sm text-muted-foreground">
                  Antworten auf typische Fragen vor Ort.
                </p>
              </div>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {standort.faqs.map((faq, idx) => (
                <AccordionItem
                  key={`${standort.slug}-faq-${idx}`}
                  value={`faq-${idx}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Weitere Standorte */}
      <section className="border-t border-border bg-secondary py-12 lg:py-16">
        <div className="container mx-auto min-w-0 max-w-full px-4 lg:px-8">
          <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-foreground md:text-2xl">Weitere Einsatzgebiete</h2>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                Auch in anderen Städten der Region für Sie unterwegs.
              </p>
            </div>
            <Link to="/kontakt" className="text-sm font-medium text-accent hover:underline md:mt-0">
              Kontakt →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {andereStandorte.map((s) => (
              <Link
                key={s.slug}
                to={`/standort/${s.slug}`}
                className="group overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-all hover:border-accent/40 hover:shadow-md"
              >
                <div className="relative aspect-[21/9] overflow-hidden">
                  <img
                    src={s.heroImage}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                  <span className="absolute bottom-3 left-3 right-3 text-sm font-semibold text-primary-foreground">
                    {s.name}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-foreground group-hover:text-accent">
                    Bau & Sanierung {s.name}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{s.subline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto min-w-0 max-w-full px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card to-secondary/80 p-8 shadow-lg md:p-10"
          >
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
              <Building2 className="h-3.5 w-3.5" aria-hidden />
              Projekt in {standort.name}
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">Jetzt unverbindlich anfragen</h2>
            <p className="mt-2 text-muted-foreground">
              Kostenlose Erstberatung – wir melden uns zeitnah mit den nächsten Schritten.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/anfragen">
                <Button variant="accent" className="w-full sm:w-auto">
                  Zur Anfrage
                </Button>
              </Link>
              <a href="tel:+4915254090013">
                <Button variant="outline" className="w-full sm:w-auto">
                  <Phone className="mr-2 h-4 w-4" />
                  01525 4090013
                </Button>
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-6 text-sm text-muted-foreground">
              <Link to="/faq" className="text-accent hover:underline">
                FAQ
              </Link>
              <span className="hidden sm:inline">·</span>
              <Link to="/leistungen" className="text-accent hover:underline">
                Leistungen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const StandortLanding = () => {
  const { slug } = useParams<{ slug: string }>();
  const standort = slug ? getStandortBySlug(slug) : undefined;

  if (!standort) {
    return <NotFound />;
  }

  return <StandortContent standort={standort} />;
};

export default StandortLanding;
