import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import ExternalMediaGate from "@/components/ExternalMediaGate";
import { postToWebhook } from "@/lib/webhook";
import { ArrowRight } from "lucide-react";

const serviceTypes = [
  "Renovierung & Modernisierung",
  "Trockenbau & Innenausbau",
  "Malerarbeiten & Tapezieren",
  "Bodenbeläge & Fliesen",
  "Badsanierung",
  "Außenarbeiten & Fassade",
  "Sonstiges",
];

const fieldClass =
  "w-full border-0 border-b border-foreground/20 bg-transparent pb-3 pt-1 text-base text-foreground placeholder:text-foreground/30 focus:border-accent focus:outline-none transition-colors";

const labelClass = "block text-xs font-bold uppercase tracking-[0.18em] text-foreground/40 mb-2";

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: serviceTypes[0],
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast({ title: "Bitte Name und E-Mail ausfüllen.", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: "Ungültige E-Mail-Adresse.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      await postToWebhook({
        name: form.name,
        email: form.email,
        telefon: form.phone || null,
        ort: "Gevelsberg",
        art_der_anfrage: form.type,
        nachricht: form.message || "-",
        formular: "kontakt",
      });
      setDone(true);
      setForm({ name: "", email: "", phone: "", type: serviceTypes[0], message: "" });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Fehler beim Senden – bitte erneut versuchen.";
      toast({ title: msg, variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="bg-background section-pad">
      <div className="container mx-auto container-pad">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14 lg:mb-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-8 h-px w-12 origin-left bg-accent"
          />
          <h2>Kostenlose <em>Beratung</em> anfragen</h2>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">

          {/* Linke Spalte: Kontaktdaten typografisch */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p className="mb-10 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Rufen Sie uns an oder schreiben Sie uns — wir melden uns
              innerhalb von 24 Stunden mit einem unverbindlichen Angebot.
            </p>

            <div className="space-y-7 border-t border-foreground/8 pt-10">
              {[
                { label: "Festnetz", value: "02332 8439131", href: "tel:+4923328439131" },
                { label: "Mobil", value: "0157 888 888 52", href: "tel:+4915788888852" },
                { label: "E-Mail", value: "info@zakho-bau.de", href: "mailto:info@zakho-bau.de" },
              ].map((c) => (
                <div key={c.label}>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/35">
                    {c.label}
                  </p>
                  <a
                    href={c.href}
                    className="text-xl font-semibold text-foreground transition-colors hover:text-accent sm:text-2xl"
                  >
                    {c.value}
                  </a>
                </div>
              ))}

              <div>
                <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/35">
                  Adresse
                </p>
                <p className="text-base text-foreground/70">
                  Hagener Straße 44<br />58285 Gevelsberg
                </p>
              </div>
            </div>

            {/* Karte */}
            <div className="mt-10 overflow-hidden border border-foreground/10">
              <ExternalMediaGate
                title="Google Maps"
                description="Zum Laden der Karte benötigen wir Ihre Einwilligung für externe Inhalte."
              >
                <iframe
                  title="Zakho Bau Standort Gevelsberg"
                  src="https://www.google.com/maps?q=Hagener+Stra%C3%9Fe+44%2C+58285+Gevelsberg&output=embed"
                  className="h-40 w-full sm:h-48"
                  width="100%"
                  height="192"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </ExternalMediaGate>
            </div>
          </motion.div>

          {/* Rechte Spalte: Formular mit Underline-Inputs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            {done ? (
              <div className="flex h-full flex-col items-start justify-center py-16">
                <div className="mb-6 h-px w-12 bg-accent" />
                <h3 className="mb-3 text-2xl font-bold">Anfrage erhalten.</h3>
                <p className="text-base text-muted-foreground">
                  Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid gap-10 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>Name *</label>
                    <input
                      className={fieldClass}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Ihr Name"
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>E-Mail *</label>
                    <input
                      type="email"
                      className={fieldClass}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="ihre@email.de"
                      maxLength={255}
                    />
                  </div>
                </div>

                <div className="grid gap-10 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>Telefon</label>
                    <input
                      type="tel"
                      className={fieldClass}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="Optional"
                      maxLength={30}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Art der Anfrage</label>
                    <select
                      className={fieldClass + " cursor-pointer appearance-none pr-4"}
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                    >
                      {serviceTypes.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Nachricht / Projektbeschreibung</label>
                  <textarea
                    className={fieldClass + " resize-none"}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Was planen Sie?"
                    rows={4}
                    maxLength={1000}
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-foreground/10 pt-8">
                  <p className="text-xs text-foreground/35">
                    * Pflichtfelder · Daten vertraulich
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center gap-2.5 bg-accent px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-accent/90 disabled:opacity-60 sm:w-auto"
                  >
                    {submitting ? "Wird gesendet…" : "Absenden"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
