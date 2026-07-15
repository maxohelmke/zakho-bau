import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import SeoRegionSection from "@/components/SeoRegionSection";
import { usePageSeo } from "@/hooks/use-page-seo";
import { SITE_ORIGIN } from "@/seo/sitemap-config";
import { BUSINESS_ID, breadcrumbList } from "@/seo/schema-helpers";
import { Link } from "react-router-dom";
import teamImg      from "@/assets/zakho-team-work.jpg";
import ladenImg     from "@/assets/zakho-laden.jpg";
import schaufenster from "@/assets/zakho-schaufenster.jpg";
import firmenwagenImg from "@/assets/zakho-firmenwagen-neu.jpg";
import oeffnungen   from "@/assets/zakho-oeffnungszeiten.jpg";
import rinasMola    from "@/assets/rinas-mola.png";
import rinasSw      from "@/assets/rinas-mola-sw.png";
import rinasMolaRuecken from "@/assets/rinas-mola-ruecken.png";
import arbeitMaler  from "@/assets/arbeit-malerarbeiten.png";

const stats = [
  { value: "10+",  label: "Jahre Erfahrung" },
  { value: "500+", label: "Projekte" },
  { value: "100%", label: "Inhabergeführt" },
  { value: "1",    label: "Ansprechpartner" },
];

const values = [
  {
    num: "01",
    title: "Qualität",
    desc: "Wir arbeiten ausschließlich mit hochwertigen Materialien und setzen auf saubere, präzise Ausführung – bei jedem Projekt, egal ob klein oder groß.",
  },
  {
    num: "02",
    title: "Pünktlichkeit",
    desc: "Termine werden eingehalten. Wir planen realistisch und kommunizieren transparent, wenn sich etwas ändert. Kein Vertrösten, kein Verschieben.",
  },
  {
    num: "03",
    title: "Verlässlichkeit",
    desc: "Ihr Ansprechpartner ist immer der Chef persönlich. Keine Subunternehmer-Ketten, keine bösen Überraschungen bei Rechnung oder Ausführung.",
  },
  {
    num: "04",
    title: "Persönlicher Service",
    desc: "Als inhabergeführtes Unternehmen kennen wir jeden Kunden beim Namen. Individuelle Beratung statt Massenabfertigung.",
  },
];

const UeberUns = () => {
  usePageSeo({
    title: "Über Zakho Bau | Fachbetrieb Bau & Sanierung Gevelsberg",
    description:
      "Zakho Bau – seit 2014 inhabergeführter Fachbetrieb für Renovierung & Sanierung in Gevelsberg. Persönlich, pünktlich und alle Gewerke aus einer Hand.",
    path: "/ueber-uns",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "Über Zakho Bau – Fachbetrieb für Bau & Sanierung Gevelsberg",
        description:
          "Inhabergeführter Fachbetrieb für Renovierung, Sanierung und Innenausbau in Gevelsberg und im Ennepe-Ruhr-Kreis. Persönliche Betreuung seit 2014.",
        url: `${SITE_ORIGIN}/ueber-uns`,
        about: { "@id": BUSINESS_ID },
      },
      breadcrumbList([
        { name: "Startseite", path: "/" },
        { name: "Über uns", path: "/ueber-uns" },
      ]),
    ],
  });

  return (
    <div className="min-h-screen min-w-0 max-w-full overflow-x-hidden bg-background">

      {/* -- Hero ----------------------------------------------------------- */}
      <section className="relative flex min-h-[min(88vh,760px)] flex-col justify-end overflow-hidden pb-0 pt-20">
        <img
          src={teamImg}
          alt="Zakho Bau Team bei der Arbeit"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: 0.5 }}
          width={1920} height={1080}
          loading="eager" decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        <div className="absolute left-0 top-0 h-[3px] w-full bg-accent" />

        {/* Dekoratives Watermark */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden">
          <p
            className="translate-y-[35%] font-heading font-black uppercase leading-none text-white/[0.035]"
            style={{ fontSize: "clamp(5rem, 20vw, 18rem)" }}
          >
            Zakho
          </p>
        </div>

        <div className="container relative z-10 mx-auto container-pad pb-14 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">
              Über uns
            </p>
            <h1 className="mb-5 font-heading text-white" style={{ textShadow: "0 2px 40px rgba(0,0,0,0.5)" }}>
              Wer wir <em>sind.</em>
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/75">
              Zakho Bau ist Ihr persönlicher Fachbetrieb für Renovierung und Sanierung
              in Gevelsberg – inhabergeführt, transparent und mit echtem Handwerk.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/anfragen">
                <Button variant="accent" size="lg" className="w-full sm:w-auto">
                  Projekt anfragen <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* -- Stats ---------------------------------------------------------- */}
      <section className="bg-[#0E0E0E]">
        <div className="container mx-auto container-pad">
          <div className="grid grid-cols-2 divide-x divide-white/8 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="px-5 py-10 text-center sm:px-8 sm:py-12"
              >
                <p className="font-heading text-4xl font-black text-accent sm:text-5xl">{s.value}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-white/40">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Unsere Geschichte ---------------------------------------------- */}
      <section className="section-pad bg-background">
        <div className="container mx-auto container-pad">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Bild-Stack */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <img
                src={rinasMola}
                alt="Rinas Mola – Inhaber Zakho Bau Gevelsberg"
                loading="lazy"
                className="w-full rounded-2xl object-cover object-top shadow-2xl"
                style={{ aspectRatio: "4/5" }}
                width={800} height={1000}
              />
              {/* Kleines Overlay-Bild */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -right-4 w-40 overflow-hidden rounded-xl border-4 border-background shadow-xl sm:-right-8 sm:w-52"
              >
                <img
                  src={arbeitMaler}
                  alt="Zakho Bau bei der Arbeit – Malerarbeiten"
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                  width={400} height={300}
                />
              </motion.div>
              {/* Adress-Badge */}
              <div className="absolute left-4 top-4 rounded-lg bg-black/80 px-3 py-2 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-xs font-medium text-white/80">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  Hagener Str. 44 – Gevelsberg
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-8 h-1 w-14 rounded-full bg-accent" />
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-accent">Unsere Geschichte</p>
              <h2 className="mb-6 text-foreground">Handwerk &amp; Verlässlichkeit – seit Tag&nbsp;eins.</h2>

              <p className="mb-5 leading-relaxed text-muted-foreground">
                Mit langjähriger Erfahrung in der Baubranche wurde Zakho Bau in Gevelsberg
                gegründet, um eines zu beweisen: Handwerk und Zuverlässigkeit gehören zusammen.
              </p>
              <p className="mb-5 leading-relaxed text-muted-foreground">
                Was als inhabergeführter Fachbetrieb begann, ist heute ein eingespieltes Team,
                das Projekte jeder Größe – vom Badezimmer bis zur Komplettsanierung ganzer
                Immobilien – termingerecht und in höchster Qualität umsetzt.
              </p>
              <p className="mb-8 leading-relaxed text-muted-foreground">
                Unser Ladenlokal an der Hagener Straße 44 ist mehr als eine Adresse –
                es ist der Beweis, dass wir nicht irgendwo sind, sondern{" "}
                <strong className="font-semibold text-foreground">wirklich vor Ort</strong>.
              </p>

              <Link
                to="/projekte"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all hover:gap-3"
              >
                Unsere Projekte ansehen <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* -- Zitat ---------------------------------------------------------- */}
      <section className="bg-[#0E0E0E] py-16 sm:py-20">
        <div className="container mx-auto container-pad">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Quote className="mx-auto mb-6 h-10 w-10 text-accent/40" aria-hidden />
            <blockquote className="font-heading text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-4xl">
              „Jedes Projekt wird so behandelt, als wäre es mein eigenes Zuhause.
              Sauber, pünktlich, perfekt."
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-accent" />
              <div className="flex items-center gap-3">
                <img
                  src={rinasSw}
                  alt="Rinas Mola – Inhaber Zakho Bau"
                  className="h-10 w-10 rounded-full object-cover object-top"
                  width={40} height={40}
                  loading="lazy"
                />
                <p className="text-sm font-medium text-white/60">Rinas Mola – Inhaber, Zakho Bau</p>
              </div>
              <div className="h-px w-12 bg-accent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* -- Werte ---------------------------------------------------------- */}
      <section className="section-pad bg-background">
        <div className="container mx-auto container-pad">
          <div className="mb-14">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-accent">Unsere Werte</p>
            <h2 className="text-foreground">Wofür wir stehen</h2>
          </div>

          <div className="grid gap-0 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 sm:gap-px sm:bg-border">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group bg-background p-8 transition-colors hover:bg-secondary lg:p-10"
              >
                <p className="mb-4 font-heading text-5xl font-black text-foreground/8 transition-colors group-hover:text-accent/15">
                  {v.num}
                </p>
                <h3 className="mb-3 text-xl font-bold text-foreground">{v.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Vor Ort – Bild-Grid -------------------------------------------- */}
      <section className="bg-[#0E0E0E] section-pad-sm">
        <div className="container mx-auto container-pad">
          <div className="mb-10">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-accent">Vor Ort in Gevelsberg</p>
            <h2 className="text-white">Unser Ladenlokal &amp; Team im Einsatz</h2>
          </div>

          {/* Asymmetrisches Grid – Reihe 1 */}
          <div className="grid gap-4 sm:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl sm:col-span-2"
            >
              <img
                src={schaufenster}
                alt="Schaufenster von Zakho Bau in Gevelsberg"
                loading="lazy"
                className="h-64 w-full object-cover sm:h-80 lg:h-96"
                width={1280} height={720}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-0 left-0 right-0 p-5 font-heading text-base font-bold uppercase tracking-wide text-white lg:text-lg">
                Ladenlokal – Hagener Straße 44
              </span>
            </motion.div>

            <div className="grid gap-4">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative overflow-hidden rounded-2xl"
              >
                <img
                  src={firmenwagenImg}
                  alt="Zakho Bau Firmenwagen täglich im Einsatz"
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{ minHeight: "160px" }}
                  width={640} height={480}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-0 left-0 right-0 p-4 font-heading text-sm font-bold uppercase tracking-wide text-white">
                  Täglich unterwegs
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative overflow-hidden rounded-2xl"
              >
                <img
                  src={oeffnungen}
                  alt="Öffnungszeiten Zakho Bau"
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{ minHeight: "160px" }}
                  width={640} height={480}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-0 left-0 right-0 p-4 font-heading text-sm font-bold uppercase tracking-wide text-white">
                  Mo–Fr · 08–17 Uhr
                </span>
              </motion.div>
            </div>
          </div>

          {/* Reihe 2 – Inhaber & Arbeitsfoto */}
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <img
                src={rinasMolaRuecken}
                alt="Rinas Mola – Inhaber Zakho Bau von hinten"
                loading="lazy"
                className="h-56 w-full object-cover"
                width={640} height={480}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-0 left-0 right-0 p-4 font-heading text-sm font-bold uppercase tracking-wide text-white">
                Rinas Mola · Inhaber
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl sm:col-span-2"
            >
              <img
                src={arbeitMaler}
                alt="Zakho Bau bei den Malerarbeiten – professionell und sauber"
                loading="lazy"
                className="h-56 w-full object-cover"
                width={1280} height={480}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-0 left-0 right-0 p-4 font-heading text-sm font-bold uppercase tracking-wide text-white">
                Bei der Arbeit · Malerarbeiten
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      <SeoRegionSection
        title="Rinas Mola und das Team von Zakho Bau"
        paragraphs={[
          "Zakho Bau ist seit 2014 inhabergeführt – Inhaber Rinas Mola ist bei jedem Projekt persönlich involviert. Keine anonyme Baufirma, keine Subunternehmer-Ketten: Sie haben von der ersten Besichtigung bis zur Übergabe einen festen Ansprechpartner, der Ihr Vorhaben kennt und Verantwortung übernimmt.",
          "Unser Ladenlokal an der Hagener Straße 44 in Gevelsberg ist mehr als eine Adresse – es ist der Ort, an dem Kunden uns persönlich treffen, Fragen stellen und Projekte besprechen können. Das spiegelt unsere Arbeitsweise: nah am Kunden, transparent in der Kommunikation und verlässlich in der Umsetzung.",
          "Ob Renovierung im Ennepe-Ruhr-Kreis, Badrenovierung in Hagen oder Innenausbau in Ennepetal: Wir setzen auf handwerkliche Qualität, realistische Terminplanung und faire Festpreise. Über 500 abgeschlossene Projekte und zahlreiche Stammkunden sprechen für unsere Arbeit.",
        ]}
      />

      {/* -- CTA ------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-background section-pad-sm">
        <div className="container mx-auto container-pad">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="grid items-center gap-8 lg:grid-cols-[1fr_auto]"
          >
            <div>
              <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
              <h2 className="mb-4 text-foreground">Einsatzgebiet: Gevelsberg &amp; Ennepe-Ruhr-Kreis</h2>
              <p className="max-w-2xl text-lg text-muted-foreground">
                Unser Schwerpunkt liegt auf Gevelsberg – wir sind aber im gesamten
                Ennepe-Ruhr-Kreis sowie in Hagen, Wuppertal und Witten aktiv.
                Sprechen Sie uns einfach an.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link to="/anfragen">
                <Button variant="accent" size="lg" className="w-full sm:w-auto">
                  Jetzt anfragen
                </Button>
              </Link>
              <a href="tel:+4915788888852">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
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

export default UeberUns;
