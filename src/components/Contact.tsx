import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ExternalMediaGate from "@/components/ExternalMediaGate";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Renovierung",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast({
        title: "Bitte füllen Sie alle Pflichtfelder aus.",
        variant: "destructive",
      });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({
        title: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        variant: "destructive",
      });
      return;
    }
    const subject = "Anfrage über tatlibau.de";
    const body = [
      "Neue Anfrage über das Kontaktformular:",
      "",
      `Name: ${form.name}`,
      `E-Mail: ${form.email}`,
      `Telefon: ${form.phone || "-"}`,
      `Art: ${form.type}`,
      "",
      "Nachricht:",
      form.message || "-",
    ].join("\n");
    window.location.href = `mailto:tatlican2@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setForm({ name: "", email: "", phone: "", type: "Renovierung", message: "" });
  };

  return (
    <section id="kontakt" className="bg-background section-pad">
      <div className="container mx-auto container-pad">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center sm:mb-12 lg:mb-16"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Kontakt
          </p>
          <h2 className="text-foreground">
            Kostenlose Beratung anfragen
          </h2>
          <p className="mt-4 text-muted-foreground">
            Wir melden uns innerhalb von 24 Stunden.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <a
              href="tel:+4915254090013"
              className="flex min-w-0 items-center gap-4 rounded-lg border border-border p-5 transition-colors hover:border-accent"
            >
              <div className="shrink-0 rounded-md bg-accent/10 p-3">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-muted-foreground">Telefon</p>
                <p className="break-safe text-lg font-semibold text-foreground">01525 4090013</p>
              </div>
            </a>

            <a
              href="mailto:tatlican2@icloud.com"
              className="flex min-w-0 items-center gap-4 rounded-lg border border-border p-5 transition-colors hover:border-accent"
            >
              <div className="shrink-0 rounded-md bg-accent/10 p-3">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-muted-foreground">E-Mail</p>
                <p className="break-safe text-lg font-semibold text-foreground">tatlican2@icloud.com</p>
              </div>
            </a>

            <div className="flex min-w-0 items-center gap-4 rounded-lg border border-border p-5">
              <div className="shrink-0 rounded-md bg-accent/10 p-3">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-muted-foreground">Adresse</p>
                <p className="break-safe text-lg font-semibold text-foreground">
                  Görlitzer Straße 37, 42277 Wuppertal
                </p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="max-w-full overflow-hidden rounded-lg">
              <ExternalMediaGate
                title="Google Maps"
                description="Zum Laden der Karte benötigen wir Ihre Einwilligung für externe Inhalte (Drittanbieter)."
              >
                <iframe
                  title="TATLI BAU Standort Wuppertal"
                  src="https://www.google.com/maps?q=G%C3%B6rlitzer%20Stra%C3%9Fe%2037%2C%2042277%20Wuppertal&output=embed"
                  className="h-[220px] w-full max-w-full"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </ExternalMediaGate>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-5 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
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
              <label className="mb-1 block text-sm font-medium text-foreground">
                Telefon
              </label>
              <Input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Ihre Telefonnummer"
                maxLength={30}
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">
                Art der Anfrage
              </label>
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option>Renovierung</option>
                <option>Sanierung</option>
                <option>Neubau</option>
                <option>Sonstiges</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">
                Beschreibung / Nachricht
              </label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Beschreiben Sie Ihr Projekt..."
                rows={4}
                maxLength={1000}
              />
            </div>
            <Button variant="accent" type="submit" className="w-full py-6 text-base">
              Anfrage absenden
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Ihre Daten werden vertraulich behandelt.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
