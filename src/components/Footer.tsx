import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { STANDORTE } from "@/data/standorte";

const Footer = () => {
  return (
    <footer className="w-full max-w-full overflow-x-hidden border-t border-border bg-foreground py-12 sm:py-14 lg:py-16">
      <div className="container mx-auto min-w-0 container-pad">
        <div className="grid min-w-0 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="min-w-0 lg:col-span-4">
            <div className="mb-5 inline-flex max-w-full rounded-lg bg-white p-3 shadow-sm">
              <img src={logo} alt="TATLI BAU Logo" className="h-12 max-w-full w-auto object-contain" />
            </div>
            <p className="mb-4 max-w-sm text-sm text-primary-foreground/60">
              Alles aus einer Hand – Ihr Spezialist für Bau & Sanierung in Wuppertal
              und im Bergischen Land.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Bau & Sanierung in Wuppertal und im Bergischen Land
            </p>
          </div>

          {/* Navigation */}
          <div className="min-w-0 lg:col-span-2">
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
          </div>

          {/* Standorte */}
          <div className="min-w-0 lg:col-span-4">
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
          </div>

          {/* Contact & Legal */}
          <div className="min-w-0 lg:col-span-2">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Kontakt & Rechtliches
            </h4>
            <div className="flex min-w-0 flex-col gap-2">
              <a href="tel:+4915254090013" className="break-safe text-sm text-primary-foreground/60 hover:text-accent">
                01525 4090013
              </a>
              <a href="mailto:tatlican2@icloud.com" className="break-safe text-sm text-primary-foreground/60 hover:text-accent">
                tatlican2@icloud.com
              </a>
              <span className="break-safe text-sm text-primary-foreground/60">
                Görlitzer Straße 37, 42277 Wuppertal
              </span>
              <Link to="/impressum" className="break-safe text-sm text-primary-foreground/60 hover:text-accent">
                Impressum
              </Link>
              <Link to="/datenschutz" className="break-safe text-sm text-primary-foreground/60 hover:text-accent">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
          © 2025 TATLI BAU – Hasan Tatli. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
