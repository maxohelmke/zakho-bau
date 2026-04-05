import { motion } from "framer-motion";
import { Phone, Award, Clock, Users, Shield, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import ownerImg from "@/assets/owner-portrait.jpg";
import firmenwagen from "@/assets/firmenwagen.png";

const stats = [
  { value: "10+", label: "Jahre Erfahrung" },
  { value: "500+", label: "Projekte abgeschlossen" },
  { value: "100%", label: "Kundenzufriedenheit" },
  { value: "NRW", label: "Servicegebiet" },
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
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-dark-section py-24 pt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Über uns
            </p>
            <h1 className="mb-6 text-primary-foreground">
              Wer wir sind
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/60">
              TATLI BAU ist Ihr persönlicher Partner für Bau und Sanierung in Solingen,
              Wuppertal, Düsseldorf und dem gesamten Bergischen Land.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 lg:px-8">
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
                  alt="Hasan Tatli – Inhaber TATLI BAU Solingen"
                  loading="lazy"
                  className="h-96 w-96 rounded-2xl object-cover shadow-xl"
                  width={512}
                  height={512}
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
              <h2 className="mb-6 text-foreground">Hasan Tatli</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Mit über 10 Jahren Erfahrung in der Baubranche hat Hasan Tatli TATLI BAU
                gegründet, um eines zu beweisen: Handwerk und Zuverlässigkeit gehören zusammen.
              </p>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Was als Ein-Mann-Betrieb begann, ist heute ein eingespieltes Team, das Projekte
                jeder Größe – vom Badezimmer bis zur Komplettsanierung ganzer Immobilien – 
                termingerecht und in höchster Qualität umsetzt.
              </p>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                <strong className="text-foreground">„Mein Anspruch ist einfach: Jedes Projekt wird so behandelt, 
                als wäre es mein eigenes Zuhause. Sauber, pünktlich, perfekt."</strong>
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                Solingen, Wuppertal, Düsseldorf und Umgebung
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-secondary py-20">
        <div className="container mx-auto px-4 lg:px-8">
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
                <p className="mb-1 text-4xl font-bold tracking-tight text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Firmenwagen */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-xl"
          >
            <img
              src={firmenwagen}
              alt="TATLI BAU Firmenwagen – täglich im Einsatz in Solingen, Wuppertal und Düsseldorf"
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
      <section className="py-32">
        <div className="container mx-auto px-4 lg:px-8">
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
      <section className="bg-dark-section py-24">
        <div className="container mx-auto px-4 lg:px-8">
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
            <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/60">
              Wir sind in ganz NRW für Sie da – mit Schwerpunkt auf Solingen, Wuppertal,
              Düsseldorf und das gesamte Bergische Land. Sprechen Sie uns an, auch für
              Projekte außerhalb unseres Kerngebiets.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="/#kontakt">
                <Button variant="hero">Jetzt Kontakt aufnehmen</Button>
              </a>
              <a href="tel:+4915254090013">
                <Button variant="heroOutline">
                  <Phone className="mr-2 h-4 w-4" />
                  01525 4090013
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
