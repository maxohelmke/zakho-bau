import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { STANDORTE } from "@/data/standorte";
import logo from "@/assets/zakho-bau-logo.svg";

const Footer = () => {
  return (
    <footer className="relative w-full max-w-full overflow-x-hidden border-t border-border bg-foreground py-12 sm:py-14 lg:py-16">
      <div className="absolute inset-x-0 top-0 h-[4px] bg-accent" />
      <div className="container mx-auto min-w-0 container-pad">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
          }}
          className="grid min-w-0 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8"
        >
          {/* Brand */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
            className="min-w-0 lg:col-span-4"
          >
            <div className="mb-5 inline-block rounded-lg bg-white px-3 py-2">
              <img
                src={logo}
                alt="Zakho Bau Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="mb-4 max-w-sm text-sm text-primary-foreground/60">
              Alles aus einer Hand – Ihr Spezialist für Bau & Sanierung in Gevelsberg
              und im Ennepe-Ruhr-Kreis.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Bau & Sanierung in Gevelsberg und im Ennepe-Ruhr-Kreis
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
            className="min-w-0 lg:col-span-2"
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Seiten
            </h4>
            <div className="flex min-w-0 flex-col gap-2">
              <Link to="/" className="break-safe text-sm text-primary-foreground/60 hover:text-accent">
                Startseite
              </Link>
              <Link to="/leistungen" className="break-safe text-sm text-primary-foreground/60 hover:text-accent">
                Leistungen
              </Link>
              <Link to="/projekte" className="break-safe text-sm text-primary-foreground/60 hover:text-accent">
                Projekte
              </Link>
              <Link to="/ueber-uns" className="break-safe text-sm text-primary-foreground/60 hover:text-accent">
                Über uns
              </Link>
              <Link to="/kontakt" className="break-safe text-sm text-primary-foreground/60 hover:text-accent">
                Kontakt
              </Link>
              <Link to="/anfragen" className="break-safe text-sm text-primary-foreground/60 hover:text-accent">
                Anfragen
              </Link>
              <Link to="/faq" className="break-safe text-sm text-primary-foreground/60 hover:text-accent">
                FAQ
              </Link>
            </div>
          </motion.div>

          {/* Standorte */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
            className="min-w-0 lg:col-span-4"
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Standorte
            </h4>
            <ul className="flex min-w-0 flex-col gap-2">
              {STANDORTE.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/standort/${s.slug}`}
                    className="break-safe text-sm text-primary-foreground/60 transition-colors hover:text-accent"
                  >
                    Bau & Sanierung {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Legal */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
            className="min-w-0 lg:col-span-2"
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Kontakt & Rechtliches
            </h4>
            <div className="flex min-w-0 flex-col gap-2">
              <a href="tel:+4915788888852" className="break-safe text-sm text-primary-foreground/60 hover:text-accent">
                +49 1578 8888852
              </a>
              <a href="mailto:info@zakho-bau.de" className="break-safe text-sm text-primary-foreground/60 hover:text-accent">
                info@zakho-bau.de
              </a>
              <span className="break-safe text-sm text-primary-foreground/60">
                Gevelsberg, NRW
              </span>
              <Link to="/impressum" className="break-safe text-sm text-primary-foreground/60 hover:text-accent">
                Impressum
              </Link>
              <Link to="/datenschutz" className="break-safe text-sm text-primary-foreground/60 hover:text-accent">
                Datenschutz
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
          © 2026 Zakho Bau · Helmke Digital
        </div>
      </div>
    </footer>
  );
};

export default Footer;


