import { useMemo } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Hammer,
  MapPin,
  MessageSquare,
  Phone,
  Ruler,
  Shield,
  Sparkles,
  Timer,
  TrendingUp,
  Users,
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
import { STANDORTE, getStandortBySlug, type StandortData, type StandortTheme } from "@/data/standorte";
import NotFound from "@/pages/NotFound";
import { SITE_ORIGIN } from "@/seo/sitemap-config";

/* ── Theme-Tokens ─────────────────────────────────────────────────────── */
const THEMES: Record<StandortTheme, {
  heroOverlay: string;
  heroBg: string;
  accentBar: string;
  statsBg: string;
  statsValue: string;
  sectionAlt: string;
  ctaBg: string;
  ctaText: string;
  highlightBorder: string;
  processIconBg: string;
  tagBg: string;
  tagText: string;
}> = {
  dark: {
    heroOverlay:  "bg-gradient-to-r from-black/95 via-black/80 to-black/40",
    heroBg:       "bg-[#0E0E0E]",
    accentBar:    "bg-accent",
    statsBg:      "bg-[#0E0E0E]",
    statsValue:   "text-accent",
    sectionAlt:   "bg-[#0f0f0f] text-white",
    ctaBg:        "bg-[#0E0E0E]",
    ctaText:      "text-white",
    highlightBorder: "border-accent/30",
    processIconBg:   "bg-accent/15",
    tagBg:  "bg-accent/15 border-accent/30",
    tagText: "text-accent",
  },
  slate: {
    heroOverlay:  "bg-gradient-to-r from-slate-900/95 via-slate-800/80 to-slate-700/30",
    heroBg:       "bg-slate-900",
    accentBar:    "bg-slate-400",
    statsBg:      "bg-slate-900",
    statsValue:   "text-slate-200",
    sectionAlt:   "bg-slate-900 text-white",
    ctaBg:        "bg-slate-900",
    ctaText:      "text-white",
    highlightBorder: "border-slate-600/50",
    processIconBg:   "bg-slate-700/60",
    tagBg:  "bg-slate-700/50 border-slate-500/40",
    tagText: "text-slate-200",
  },
  warm: {
    heroOverlay:  "bg-gradient-to-r from-stone-900/95 via-stone-800/75 to-stone-700/25",
    heroBg:       "bg-stone-900",
    accentBar:    "bg-amber-500",
    statsBg:      "bg-stone-900",
    statsValue:   "text-amber-400",
    sectionAlt:   "bg-stone-900 text-white",
    ctaBg:        "bg-stone-900",
    ctaText:      "text-white",
    highlightBorder: "border-amber-500/30",
    processIconBg:   "bg-amber-500/15",
    tagBg:  "bg-amber-500/15 border-amber-500/30",
    tagText: "text-amber-400",
  },
};

const DEFAULT_STATS = [
  { value: "10+",  label: "Jahre Erfahrung" },
  { value: "< 24h", label: "Rückmeldung" },
  { value: "1",    label: "Ansprechpartner" },
];

const PROCESS_STEPS = [
  { icon: MessageSquare, title: "Anfrage", sub: "Kurz beschreiben" },
  { icon: ClipboardList,  title: "Besichtigung", sub: "Vor-Ort-Termin" },
  { icon: Ruler,          title: "Angebot",      sub: "Klare Positionen" },
  { icon: Hammer,         title: "Umsetzung",    sub: "Aus einer Hand" },
];

const HIGHLIGHT_ICONS = [Shield, Timer, Users, CheckCircle2];

/* ── StandortContent ──────────────────────────────────────────────────── */
const StandortContent = ({ standort }: { standort: StandortData }) => {
  const t   = THEMES[standort.theme];
  const stats = standort.stats ?? DEFAULT_STATS;
  const ogImageUrl = `${SITE_ORIGIN}${standort.heroImage}`;
  const andereStandorte = STANDORTE.filter((s) => s.slug !== standort.slug);

  const structuredData = useMemo(() => {
    const faqPage = standort.faqs.length > 0 ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: standort.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    } : null;

    return [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: standort.seoTitle,
        description: standort.seoDescription,
        url: `${SITE_ORIGIN}/standort/${standort.slug}`,
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `Bau und Sanierung ${standort.name}`,
        description: `${standort.intro} ${standort.introHighlight}`,
        areaServed: { "@type": "City", name: standort.name },
        provider: {
          "@type": "HomeAndConstructionBusiness",
          name: "Zakho Bau",
          email: "info@zakho-bau.de",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Startseite", item: `${SITE_ORIGIN}/` },
          { "@type": "ListItem", position: 2, name: standort.name, item: `${SITE_ORIGIN}/standort/${standort.slug}` },
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

  return (
    <div className="min-h-screen min-w-0 max-w-full overflow-x-hidden bg-background">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[min(90vh,780px)] flex-col justify-end overflow-hidden pb-0 pt-20">
        {/* Hintergrundbild */}
        <img
          src={standort.heroImage}
          alt={standort.heroImageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
          decoding="async"
          style={{ opacity: 0.55 }}
        />
        {/* Overlays */}
        <div className={`absolute inset-0 ${t.heroOverlay}`} aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" aria-hidden />
        {/* Akzentlinie oben */}
        <div className={`absolute left-0 top-0 z-10 h-[3px] w-full ${t.accentBar}`} />

        {/* Riesiger Stadtname im Hintergrund – dekorativ */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden"
        >
          <p className="translate-y-[30%] font-heading font-black uppercase leading-none text-white/[0.04]"
            style={{ fontSize: "clamp(5rem, 22vw, 20rem)" }}>
            {standort.name.split(" ")[0]}
          </p>
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto min-w-0 max-w-full container-pad pb-14 md:pb-20">
          {/* Breadcrumb */}
          <nav className="mb-8 flex min-w-0 flex-wrap items-center gap-x-2 text-xs text-white/50">
            <Link to="/" className="transition-colors hover:text-white/80">Startseite</Link>
            <ChevronRight className="h-3 w-3 shrink-0 opacity-50" aria-hidden />
            <Link to="/leistungen" className="transition-colors hover:text-white/80">Leistungen</Link>
            <ChevronRight className="h-3 w-3 shrink-0 opacity-50" aria-hidden />
            <span className="text-white/80">{standort.name}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            {/* Location tag */}
            <div className={`mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${t.tagBg} ${t.tagText}`}>
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              {standort.regionTag}
            </div>

            {/* Headline */}
            <h1 className="mb-4 font-heading leading-[1.05] text-white"
              style={{ textShadow: "0 2px 40px rgba(0,0,0,0.6)" }}>
              {standort.headline}
            </h1>

            {/* Subline */}
            <p className={`mb-6 text-lg font-medium md:text-xl ${t.tagText}`}>
              {standort.subline}
            </p>

            {/* Trust-Chips */}
            <div className="mb-8 flex flex-wrap gap-2">
              {["Kostenlose Erstberatung", "Alle Gewerke koordinierbar", "Transparente Angebote"].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm"
                >
                  <Sparkles className="h-3.5 w-3.5 text-white/60" aria-hidden />
                  {chip}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link to="/anfragen">
                <Button variant="accent" size="lg" className="w-full sm:w-auto">
                  Unverbindlich anfragen
                </Button>
              </Link>
              <a href="tel:+4915788888852" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  +49 1578 8888852
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats-Streifen ───────────────────────────────────────────────── */}
      <section className={t.statsBg}>
        <div className="container mx-auto container-pad">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="px-4 py-8 text-center sm:px-8 sm:py-10"
              >
                <p className={`font-heading text-3xl font-black sm:text-4xl ${t.statsValue}`}>{s.value}</p>
                <p className="mt-1.5 text-xs text-white/45 sm:text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro + Highlight-Quote ──────────────────────────────────────── */}
      <section className="section-pad-sm bg-background">
        <div className="container mx-auto container-pad">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-20">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <div className={`mb-6 h-1 w-14 rounded-full ${t.accentBar}`} />
              <h2 className="mb-5 text-foreground">{standort.highlightsSectionTitle}</h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{standort.intro}</p>
              <blockquote className={`border-l-4 pl-5 text-base italic leading-relaxed text-muted-foreground ${t.highlightBorder}`}>
                {standort.introHighlight}
              </blockquote>
            </motion.div>

            {/* Highlight-Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="grid gap-3 sm:grid-cols-2"
            >
              {standort.highlights.map((h, i) => {
                const Hi = HIGHLIGHT_ICONS[i % HIGHLIGHT_ICONS.length];
                return (
                  <div
                    key={h}
                    className={`flex gap-3 rounded-2xl border bg-background p-4 shadow-sm transition-shadow hover:shadow-md ${t.highlightBorder}`}
                  >
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${t.processIconBg}`}>
                      <Hi className={`h-5 w-5 ${t.tagText}`} aria-hidden />
                    </div>
                    <p className="text-sm font-medium leading-snug text-foreground">{h}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Ablauf – horizontale Timeline ───────────────────────────────── */}
      <section className={`section-pad-sm ${t.sectionAlt}`}>
        <div className="container mx-auto container-pad">
          <div className="mb-10 text-center">
            <p className={`mb-2 text-xs font-bold uppercase tracking-[0.25em] ${t.tagText}`}>Ihr Weg zu uns</p>
            <h2 className="text-white">So läuft Ihr Projekt ab</h2>
          </div>

          <div className="relative grid grid-cols-2 gap-6 md:grid-cols-4">
            {/* Verbindungslinie */}
            <div className="absolute left-[12.5%] right-[12.5%] top-9 hidden h-px bg-white/10 md:block" />

            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className={`relative z-10 mb-4 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border border-white/10 ${t.processIconBg}`}>
                  <step.icon className={`h-7 w-7 ${t.tagText}`} aria-hidden />
                  <span className="absolute -top-2.5 -right-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <p className="font-heading text-base font-bold text-white">{step.title}</p>
                <p className="mt-1 text-xs text-white/50">{step.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leistungsschwerpunkte ────────────────────────────────────────── */}
      <section className="section-pad-sm bg-background">
        <div className="container mx-auto container-pad">
          <div className="mb-10 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className={`mb-2 text-xs font-bold uppercase tracking-[0.25em] ${t.tagText}`}>Leistungen vor Ort</p>
              <h2 className="text-foreground">{standort.serviceFocus.title}</h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">{standort.serviceFocus.intro}</p>
            </div>
            <Link to="/leistungen">
              <Button variant="outline" className="w-full md:w-auto">
                Alle Leistungen <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {standort.serviceFocus.items.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className={`group flex items-start gap-3 rounded-xl border p-4 transition-all hover:shadow-md ${t.highlightBorder} bg-background`}
              >
                <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${t.tagText}`} aria-hidden />
                <p className="text-sm leading-snug text-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lokale Fakten – Split Image + Text ──────────────────────────── */}
      <section className={`section-pad-sm ${t.sectionAlt}`}>
        <div className="container mx-auto container-pad">
          <p className={`mb-2 text-xs font-bold uppercase tracking-[0.25em] ${t.tagText}`}>
            Kurz & relevant
          </p>
          <h2 className="mb-10 text-white">Das sollten Sie wissen</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {standort.localFacts.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className={`mb-4 h-1 w-10 rounded-full ${t.accentBar}`} />
                <h3 className="mb-3 text-lg font-bold text-white">{f.label}</h3>
                <p className="text-sm leading-relaxed text-white/60">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tiefere Inhaltsabschnitte ────────────────────────────────────── */}
      {standort.sections.length > 0 && (
        <section className="section-pad-sm bg-background">
          <div className="container mx-auto container-pad">
            <div className="mx-auto grid max-w-4xl gap-0 divide-y divide-border">
              {standort.sections.map((sec, i) => (
                <motion.div
                  key={sec.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="py-8 first:pt-0 last:pb-0 md:grid md:grid-cols-[220px_1fr] md:gap-10"
                >
                  <h3 className="mb-3 font-heading text-base font-bold text-foreground md:mb-0 md:pt-0.5">
                    {sec.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">{sec.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className={`section-pad-sm ${t.sectionAlt}`}>
        <div className="container mx-auto container-pad">
          <div className="mx-auto max-w-3xl">
            <p className={`mb-2 text-xs font-bold uppercase tracking-[0.25em] ${t.tagText}`}>
              Häufige Fragen
            </p>
            <h2 className="mb-8 text-white">{standort.name} – was Kunden fragen</h2>
            <Accordion type="single" collapsible className="w-full">
              {standort.faqs.map((faq, idx) => (
                <AccordionItem
                  key={`${standort.slug}-faq-${idx}`}
                  value={`faq-${idx}`}
                  className="border-white/10"
                >
                  <AccordionTrigger className="text-left text-base font-medium text-white/90 hover:text-white hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-white/55">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── CTA mit Hintergrundbild ──────────────────────────────────────── */}
      <section className="relative flex min-h-[min(50vh,460px)] items-center justify-center overflow-hidden">
        <img
          src={standort.heroImage}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover [transform:scaleX(-1)]"
          style={{ opacity: 0.4 }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
        <div className={`absolute left-0 top-0 h-1 w-full ${t.accentBar}`} />

        <div className="container relative z-10 mx-auto container-pad py-16 text-center sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-2xl"
          >
            <p className={`mb-3 text-xs font-bold uppercase tracking-[0.25em] ${t.tagText}`}>
              Projekt in {standort.name}
            </p>
            <h2 className="mb-4 text-white">Jetzt unverbindlich anfragen</h2>
            <p className="mb-8 text-base text-white/65">
              Kostenlose Erstberatung – wir melden uns innerhalb von 24 Stunden.
            </p>
            <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
              <Link to="/anfragen" className="w-full sm:w-auto">
                <Button variant="accent" size="lg" className="w-full sm:w-auto">
                  Zur Anfrage <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="tel:+4915788888852" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-white/30 bg-white/10 text-white hover:bg-white/20 sm:w-auto"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  +49 1578 8888852
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Andere Standorte ─────────────────────────────────────────────── */}
      <section className="section-pad-sm bg-background">
        <div className="container mx-auto container-pad">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-foreground">Weitere Einsatzgebiete</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Auch in anderen Städten der Region für Sie unterwegs.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {andereStandorte.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
              >
                <Link
                  to={`/standort/${s.slug}`}
                  className="group relative block overflow-hidden rounded-2xl"
                >
                  <div className="aspect-[16/7] overflow-hidden">
                    <img
                      src={s.heroImage}
                      alt=""
                      aria-hidden
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="mb-0.5 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                      Einsatzgebiet
                    </p>
                    <p className="font-heading text-lg font-bold text-white">{s.name}</p>
                    <p className="mt-1 text-xs text-white/60 line-clamp-1">{s.subline}</p>
                  </div>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

/* ── Route-Wrapper ────────────────────────────────────────────────────── */
const StandortLanding = () => {
  const { slug } = useParams<{ slug: string }>();
  const standort = slug ? getStandortBySlug(slug) : undefined;
  if (!standort) return <NotFound />;
  return <StandortContent standort={standort} />;
};

export default StandortLanding;
