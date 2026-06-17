import { motion } from "framer-motion";
import { Phone, Award, Clock, Users, Shield, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import ownerImg from "@/assets/owner-zakho-bau.jpg";
import firmenwagen from "@/assets/zakho-firmenwagen.jpg";
import heroImg from "@/assets/zakho-team-work.jpg";
import { usePageSeo } from "@/hooks/use-page-seo";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const stats = [
  { value: "10+", label: "Jahre Erfahrung" },
  { value: "500+", label: "Projekte abgeschlossen" },
  { value: "100%", label: "Kundenzufriedenheit" },
  { value: "Gevelsberg + Ennepe-Ruhr-Kreis", label: "Servicegebiet" },
];

const values = [
  {
    icon: Award,
    title: "Qualität",
    desc: "Wir arbeiten ausschließlich mit hochwertigen Materialien und setzen auf saubere, präzise Ausführung – bei jedem Projekt.",
  },
  {
    icon: Clock,
    title: "Pünktlichkeit",
    desc: "Termine werden eingehalten. Wir planen realistisch und kommunizieren transparent, wenn sich etwas ändert.",
  },
  {
    icon: Shield,
    title: "Verlässlichkeit",
    desc: "Ihr Ansprechpartner ist immer der Chef persönlich. Keine Subunternehmer-Ketten, keine bösen Überraschungen.",
  },
  {
    icon: Users,
    title: "Persönlicher Service",
    desc: "Als inhabergeführtes Unternehmen kennen wir jeden Kunden beim Namen. Individuelle Beratung statt Massenabfertigung.",
  },
];

const UeberUns = () => {
  usePageSeo({
    title: "Über Uns | Zakho Bau Gevelsberg",
    description:
      "Lernen Sie Zakho Bau kennen: Ihr inhabergeführter Fachbetrieb für Bau und Sanierung in Gevelsberg und im Ennepe-Ruhr-Kreis. Qualität aus Erfahrung.",
    path: "/ueber-uns",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "Über Zakho Bau",
        description:
          "Inhabergeführter Fachbetrieb für Bau und Sanierung in Gevelsberg und im Ennepe-Ruhr-Kreis.",
        url: "https://zakho-bau.de/ueber-uns",
      },
    ],
  });

  return (
    <div className="min-h-screen min-w-0 max-w-full overflow-x-hidden bg-background">
      {/* Hero with Image */}
      <section className="relative flex min-h-[min(50vh,440px)] flex-col justify-end overflow-hidden pt-28 pb-10 md:pb-14">
        <img
          src={heroImg}
          alt="Zakho Bau Team bei der Arbeit – Trockenbau in Gevelsberg"
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
            className="max-w-2xl"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Über uns
            </p>
            <h1 className="mb-4 text-primary-foreground">
              Wer wir sind
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              Zakho Bau ist Ihr persönlicher Partner für Bau und Sanierung in Gevelsberg
              und im gesamten Ennepe-Ruhr-Kreis. Qualität aus Erfahrung.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Inhabergeführt", "Transparente Angebote", "Qualität & Sauberkeit"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90"
                >
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link to="/anfragen">
                <Button variant="accent" size="lg" className="w-full sm:w-auto">
                  Kostenlos anfragen
                </Button>
              </Link>
              <a href="tel:+4915788888852" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Phone className="mr-2 h-4 w-4" />
                  +49 1578 8888852
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="section-pad">
        <div className="container mx-auto container-pad">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative">
                <img
                  src={ownerImg}
                  alt="Zakho Bau – Inhaber und Geschäftsführer in Gevelsberg"
                  loading="lazy"
                  className="h-80 w-60 rounded-2xl object-cover shadow-xl sm:h-[26rem] sm:w-72 lg:h-[30rem] lg:w-80"
                  width={640}
                  height={960}
                />
                <div className="absolute -bottom-4 -right-4 rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-lg">
                  Inhaber & Geschäftsführer
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-foreground">Zakho Bau</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Mit langjähriger Erfahrung in der Baubranche wurde Zakho Bau in Gevelsberg
                gegründet, um eines zu beweisen: Handwerk und Zuverlässigkeit gehören zusammen.
              </p>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Was als inhabergeführter Fachbetrieb begann, ist heute ein eingespieltes Team,
                das Projekte jeder Größe – vom Badezimmer bis zur Komplettsanierung ganzer
                Immobilien – termingerecht und in höchster Qualität umsetzt.
              </p>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                <strong className="text-foreground">„Mein Anspruch ist einfach: Jedes Projekt wird so behandelt,
                als wäre es mein eigenes Zuhause. Sauber, pünktlich, perfekt."</strong>
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                Gevelsberg und der gesamte Ennepe-Ruhr-Kreis
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-secondary section-pad-sm">
        <div className="container mx-auto container-pad">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="mb-1 text-4xl font-bold tracking-normal text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Firmenwagen */}
      <section className="section-pad-sm">
        <div className="container mx-auto container-pad">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              src={firmenwagen}
              alt="Zakho Bau Firmenwagen – täglich im Einsatz in Gevelsberg und im Ennepe-Ruhr-Kreis"
              loading="lazy"
              className="w-full object-cover"
              style={{ maxHeight: "400px" }}
              width={1200}
              height={400}
            />
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad">
        <div className="container mx-auto container-pad">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Unsere Werte
            </p>
            <h2 className="text-foreground">Wofür wir stehen</h2>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl border border-border bg-secondary p-8"
              >
                <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                  <v.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-dark-section section-pad-sm">
        <div className="container mx-auto container-pad">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="mb-6 inline-flex rounded-lg bg-accent/10 p-3">
              <Briefcase className="h-6 w-6 text-accent" />
            </div>
            <h2 className="mb-4 text-primary-foreground">Unser Einsatzgebiet</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">
              Unser Schwerpunkt liegt auf Gevelsberg und dem gesamten Ennepe-Ruhr-Kreis.
              Sprechen Sie uns gerne auch für angrenzende Regionen an.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/anfragen">
                <Button variant="hero">Jetzt Kontakt aufnehmen</Button>
              </Link>
              <a href="tel:+4915788888852">
                <Button variant="heroOutline">
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


