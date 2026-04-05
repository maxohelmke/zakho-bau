import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";

const Kontakt = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast({ title: "Bitte füllen Sie alle Pflichtfelder aus.", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: "Bitte geben Sie eine gültige E-Mail-Adresse ein.", variant: "destructive" });
      return;
    }
    toast({ title: "Nachricht gesendet!", description: "Wir melden uns schnellstmöglich bei Ihnen." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-dark-section py-24 pt-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">Kontakt</p>
            <h1 className="mb-6 text-primary-foreground">Sprechen Sie mit uns</h1>
            <p className="text-lg leading-relaxed text-primary-foreground/60">
              Haben Sie Fragen oder möchten ein Projekt besprechen? Wir sind für Sie da –
              telefonisch, per E-Mail oder über unser Kontaktformular.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Phone, label: "Telefon", value: "01525 4090013", href: "tel:+4915254090013" },
              { icon: Mail, label: "E-Mail", value: "tatlican2@icloud.com", href: "mailto:tatlican2@icloud.com" },
              { icon: MapPin, label: "Servicegebiet", value: "Solingen, Wuppertal, Düsseldorf & NRW", href: undefined },
              { icon: Clock, label: "Erreichbarkeit", value: "Mo–Sa, 07:00–19:00 Uhr", href: undefined },
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
                    <p className="mt-1 font-semibold text-foreground">{c.value}</p>
                  </a>
                ) : (
                  <div className="flex flex-col items-center rounded-xl border border-border p-6 text-center">
                    <div className="mb-3 rounded-lg bg-accent/10 p-3">
                      <c.icon className="h-6 w-6 text-accent" />
                    </div>
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    <p className="mt-1 font-semibold text-foreground">{c.value}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="border-t border-border bg-secondary py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.form
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-5 rounded-xl border border-border bg-card p-8 shadow-sm"
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
              <Button variant="accent" type="submit" className="w-full py-6 text-base">
                Nachricht absenden
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
              <div className="overflow-hidden rounded-xl border border-border shadow-sm">
                <iframe
                  title="TATLI BAU Standort Solingen"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80384.08896498386!2d6.9696!3d51.1652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8d4e3e2b6e5b3%3A0x4249fc98b2b12af0!2sSolingen!5e0!3m2!1sde!2sde!4v1680000000000"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-3 font-semibold text-foreground">Lieber direkt anrufen?</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Rufen Sie uns an – wir beraten Sie gerne persönlich und unverbindlich.
                </p>
                <a href="tel:+4915254090013">
                  <Button variant="accent" size="sm" className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    01525 4090013 anrufen
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
