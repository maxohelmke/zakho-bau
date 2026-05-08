import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";
import { usePageSeo } from "@/hooks/use-page-seo";
import { Sparkles } from "lucide-react";

const serviceTypes = [
  "Renovierung",
  "Sanierung",
  "Trockenbau",
  "Malerarbeiten",
  "Fliesenleger",
  "Bodenverlegung",
  "Abrissarbeiten",
  "Komplettlösung",
  "Sonstiges",
];

const Anfragen = () => {
  usePageSeo({
    title: "Anfrage stellen | TATLI BAU Wuppertal",
    description:
      "Jetzt kostenlos und unverbindlich anfragen: TATLI BAU erstellt Ihnen ein Angebot für Bau- und Sanierungsprojekte in Wuppertal und im Bergischen Land.",
    path: "/anfragen",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Kostenlose Anfrage bei TATLI BAU",
        description:
          "Unverbindliche Projektanfrage für Bau- und Sanierungsarbeiten in Wuppertal und im Bergischen Land.",
        url: "https://tatlibau.de/anfragen",
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
            name: "Anfragen",
            item: "https://tatlibau.de/anfragen",
          },
        ],
      },
    ],
  });

  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Renovierung",
    address: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Bitte füllen Sie alle Pflichtfelder aus.", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: "Bitte geben Sie eine gültige E-Mail-Adresse ein.", variant: "destructive" });
      return;
    }
    toast({ title: "Anfrage erfolgreich gesendet!", description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen." });
    setForm({ name: "", email: "", phone: "", type: "Renovierung", address: "", budget: "", timeline: "", message: "" });
  };

  return (
    <div className="min-h-screen min-w-0 max-w-full overflow-x-hidden bg-background">
      {/* Header */}
      <section className="bg-dark-section section-pad-sm pt-32">
        <div className="container mx-auto container-pad">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">Kostenlose Beratung</p>
            <h1 className="mb-6 text-primary-foreground">Kostenlos anfragen</h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              Beschreiben Sie Ihr Projekt – wir erstellen Ihnen ein unverbindliches Angebot.
              Kostenlos und innerhalb von 24 Stunden.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Kostenlos", "Unverbindlich", "Antwort < 24h"].map((t) => (
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
              <a href="tel:+4915254090013" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Phone className="mr-2 h-4 w-4" />
                  01525 4090013
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-border py-12">
        <div className="container mx-auto container-pad">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {["100% kostenlos & unverbindlich", "Antwort innerhalb 24h", "Persönliche Beratung vom Chef"].map((b) => (
              <div key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-accent" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-pad-sm">
        <div className="container mx-auto max-w-2xl container-pad">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-6 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:p-10"
          >
            <h2 className="text-lg font-semibold text-foreground">Ihre Projektdaten</h2>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">
                  Name <span className="text-destructive">*</span>
                </label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Ihr Name" maxLength={100} />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">
                  E-Mail <span className="text-destructive">*</span>
                </label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Ihre E-Mail" maxLength={255} />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Telefon</label>
                <Input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Für Rückfragen (optional)" maxLength={30} />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Art der Leistung</label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {serviceTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Adresse / Ort des Projekts</label>
                <Input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="z. B. Wuppertal, Musterstraße" maxLength={200} />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Gewünschter Zeitrahmen</label>
                <Input value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })} placeholder="z. B. ab Juni 2025" maxLength={100} />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">Budgetrahmen (optional)</label>
              <Input value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} placeholder="z. B. 10.000–15.000 €" maxLength={50} />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">
                Projektbeschreibung <span className="text-destructive">*</span>
              </label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Beschreiben Sie Ihr Vorhaben so genau wie möglich: Was soll gemacht werden? Wie groß ist die Fläche? Gibt es besondere Anforderungen?"
                rows={6}
                maxLength={2000}
              />
            </div>

            <Button variant="accent" type="submit" className="w-full py-6 text-base">
              Kostenlose Anfrage absenden
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              Ihre Daten werden vertraulich behandelt. Mehr dazu in unserer{" "}
              <Link to="/datenschutz" className="text-accent hover:underline">Datenschutzerklärung</Link>.
            </p>
          </motion.form>

          {/* Alternative */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <p className="mb-4 text-muted-foreground">Lieber telefonisch? Kein Problem.</p>
            <a href="tel:+4915254090013">
              <Button variant="outline">
                <Phone className="mr-2 h-4 w-4" />
                01525 4090013 anrufen
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Anfragen;
