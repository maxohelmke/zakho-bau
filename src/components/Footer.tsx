import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img src={logo} alt="TATLI BAU Logo" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="mb-4 max-w-sm text-sm text-primary-foreground/60">
              Alles aus einer Hand – Ihr Spezialist für Bau & Sanierung in Solingen,
              Wuppertal, Düsseldorf und NRW.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Bau & Sanierung in Solingen, Wuppertal, Düsseldorf und NRW
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              <a href="#leistungen" className="text-sm text-primary-foreground/60 hover:text-accent">
                Leistungen
              </a>
              <a href="#projekte" className="text-sm text-primary-foreground/60 hover:text-accent">
                Projekte
              </a>
              <a href="#ueber-uns" className="text-sm text-primary-foreground/60 hover:text-accent">
                Über uns
              </a>
              <a href="#kontakt" className="text-sm text-primary-foreground/60 hover:text-accent">
                Kontakt
              </a>
            </div>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Kontakt & Rechtliches
            </h4>
            <div className="flex flex-col gap-2">
              <a href="tel:+4915254090013" className="text-sm text-primary-foreground/60 hover:text-accent">
                01525 4090013
              </a>
              <a href="mailto:tatlican2@icloud.com" className="text-sm text-primary-foreground/60 hover:text-accent">
                tatlican2@icloud.com
              </a>
              <Link to="/impressum" className="text-sm text-primary-foreground/60 hover:text-accent">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-sm text-primary-foreground/60 hover:text-accent">
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
