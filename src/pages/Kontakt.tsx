import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";
import { usePageSeo } from "@/hooks/use-page-seo";
import ExternalMediaGate from "@/components/ExternalMediaGate";
import { Sparkles } from "lucide-react";
import { postToWebhook } from "@/lib/webhook";
import ladenImg from "@/assets/zakho-laden.jpg";
import oeffnungszeitenImg from "@/assets/zakho-oeffnungszeiten.jpg";

const Kontakt = () => {
  usePageSeo({
    title: "Kontakt | Zakho Bau Gevelsberg",
    description:
      "Kontaktieren Sie Zakho Bau in Gevelsberg: Telefon, E-Mail oder Kontaktformular. Wir beraten Sie schnell und unverbindlich im Ennepe-Ruhr-Kreis.",
    path: "/kontakt",
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Kontakt Zakho Bau",
        description:
          "Kontaktmöglichkeiten für Bau- und Sanierungsanfragen in Gevelsberg und im Ennepe-Ruhr-Kreis.",
        url: "https://zakho-bau.de/kontakt",
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
            name: "Kontakt",
            item: "https://zakho-bau.de/kontakt",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "In welcher Region ist Zakho Bau tätig?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Unser Schwerpunkt liegt auf Gevelsberg und dem Ennepe-Ruhr-Kreis.",
            },
          },
          {
            "@type": "Question",
            name: "Wie schnell erhalte ich eine Rückmeldung?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "In der Regel melden wir uns innerhalb von 24 Stunden zurück.",
            },
          },
        ],
      },
    ],
  });

  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast({ title: "Bitte füllen Sie alle Pflichtfelder aus.", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: "Bitte geben Sie eine gültige E-Mail-Adresse ein.", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    try {
      await postToWebhook({
        name: form.name,
        email: form.email,
        telefon: form.phone || null,
        ort: "Gevelsberg",
        art_der_anfrage: "Kontaktanfrage",
        nachricht: form.message || "-",
        formular: "kontakt-seite",
      });

      toast({
        title: "Nachricht erfolgreich gesendet!",
        description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
      });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Fehler beim Senden";
      toast({
        title: msg,
        description: msg.startsWith("Zu viele") ? undefined : "Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
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
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">Kontakt</p>
            <h1 className="mb-6 text-primary-foreground">Sprechen Sie <em>mit uns</em></h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              Haben Sie Fragen oder möchten ein Projekt besprechen? Wir sind für Sie da –
              telefonisch, per E-Mail oder über unser Kontaktformular.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Antwort < 24h", "Direkt erreichbar", "Kostenlos & unverbindlich"].map((t) => (
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
                  Angebot anfordern
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

      {/* Contact Cards */}
      <section className="section-pad-sm">
        <div className="container mx-auto container-pad">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {[
              { icon: Phone, label: "Telefon (Festnetz)", value: "02332 8439131", href: "tel:+4923328439131" },
              { icon: Phone, label: "Mobil", value: "0157 888 888 52", href: "tel:+4915788888852" },
              { icon: Mail, label: "E-Mail", value: "info@zakho-bau.de", href: "mailto:info@zakho-bau.de" },
              { icon: MapPin, label: "Adresse", value: "Hagener Straße 44, 58285 Gevelsberg", href: undefined },
              { icon: Clock, label: "Öffnungszeiten", value: "Mo–Fr 08:00–17:00 Uhr", href: undefined },
            ].map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {c.href ? (
                  <a
                    href={c.href}
                    className="flex flex-col items-center rounded-xl border border-border p-6 text-center transition-colors hover:border-accent"
                  >
                    <div className="mb-3 rounded-lg bg-accent/10 p-3">
                      <c.icon className="h-6 w-6 text-accent" />
                    </div>
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    <p className="mt-1 break-safe font-semibold text-foreground">{c.value}</p>
                  </a>
                ) : (
                  <div className="flex flex-col items-center rounded-xl border border-border p-6 text-center">
                    <div className="mb-3 rounded-lg bg-accent/10 p-3">
                      <c.icon className="h-6 w-6 text-accent" />
                    </div>
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    <p className="mt-1 break-safe font-semibold text-foreground">{c.value}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="border-t border-border bg-secondary section-pad-sm">
        <div className="container mx-auto container-pad">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.form
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-5 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
            >
              <div className="mb-2 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-accent" />
                <h2 className="text-lg font-semibold text-foreground">Nachricht senden</h2>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">
                  Name <span className="text-destructive">*</span>
                </label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ihr Name"
                  maxLength={100}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">
                  E-Mail <span className="text-destructive">*</span>
                </label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Ihre E-Mail-Adresse"
                  maxLength={255}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Telefon</label>
                <Input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Ihre Telefonnummer (optional)"
                  maxLength={30}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Nachricht</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Wie können wir Ihnen helfen?"
                  rows={5}
                  maxLength={1000}
                />
              </div>
              <Button
                variant="accent"
                type="submit"
                className="w-full py-6 text-base"
                disabled={submitting}
              >
                {submitting ? "Wird gesendet…" : "Nachricht absenden"}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Ihre Daten werden vertraulich behandelt. Mehr dazu in unserer{" "}
                <Link to="/datenschutz" className="text-accent hover:underline">Datenschutzerklärung</Link>.
              </p>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              {/* Echtes Ladenlokal */}
              <div className="relative max-w-full overflow-hidden rounded-xl shadow-sm ring-1 ring-silver/50">
                <img
                  src={ladenImg}
                  alt="Ladenlokal von Zakho Bau in der Hagener Straße 44 in Gevelsberg"
                  loading="lazy"
                  className="h-56 w-full object-cover sm:h-64"
                  width={1280}
                  height={720}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="font-heading text-lg font-bold uppercase tracking-wide text-white">
                    Besuchen Sie uns
                  </p>
                  <p className="text-sm text-white/80">Hagener Straße 44 · 58285 Gevelsberg</p>
                </div>
              </div>

              {/* Öffnungszeiten */}
              <div className="flex items-stretch gap-4 rounded-xl border border-border bg-card p-4 shadow-sm">
                <img
                  src={oeffnungszeitenImg}
                  alt="Öffnungszeiten von Zakho Bau an der Eingangstür"
                  loading="lazy"
                  className="h-28 w-24 shrink-0 rounded-lg object-cover ring-1 ring-silver/50"
                  width={240}
                  height={320}
                />
                <div className="min-w-0">
                  <div className="mb-2 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-accent" />
                    <h3 className="font-semibold text-foreground">Öffnungszeiten</h3>
                  </div>
                  <dl className="space-y-1 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted-foreground">Mo – Fr</dt>
                      <dd className="font-medium text-foreground">08:00 – 17:00 Uhr</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted-foreground">Samstag</dt>
                      <dd className="font-medium text-foreground">Geschlossen</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted-foreground">Sonntag</dt>
                      <dd className="font-medium text-foreground">Geschlossen</dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="max-w-full overflow-hidden rounded-xl border border-border shadow-sm">
                <ExternalMediaGate
                  title="Google Maps"
                  description="Zum Laden der Karte benötigen wir Ihre Einwilligung für externe Inhalte (Drittanbieter)."
                >
                  <iframe
                    title="Zakho Bau Standort Gevelsberg"
                    src="https://www.google.com/maps?q=Hagener+Stra%C3%9Fe+44%2C+58285+Gevelsberg&output=embed"
                    className="h-[400px] w-full max-w-full"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </ExternalMediaGate>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-3 font-semibold text-foreground">Lieber direkt anrufen?</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Rufen Sie uns an – wir beraten Sie gerne persönlich und unverbindlich.
                </p>
                <a href="tel:+4915788888852">
                  <Button variant="accent" size="sm" className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    +49 1578 8888852 anrufen
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontakt;


