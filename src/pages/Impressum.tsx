import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-dark-section py-4">
        <div className="container mx-auto flex items-center gap-2 px-4">
          <Link to="/" className="flex items-center gap-2">
            <Home className="h-5 w-5 text-accent" />
            <span className="text-lg font-bold text-primary-foreground">
              TATLI <span className="text-accent">BAU</span>
            </span>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="mb-8 text-3xl font-bold text-foreground">Impressum</h1>

        <div className="space-y-6 text-muted-foreground">
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">Angaben gemäß § 5 TMG</h2>
            <p>TATLI BAU</p>
            <p>Hasan Tatli</p>
            <p>Solingen, NRW, Deutschland</p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">Kontakt</h2>
            <p>Telefon: <a href="tel:+4915254090013" className="text-accent hover:underline">01525 4090013</a></p>
            <p>E-Mail: <a href="mailto:tatlican2@icloud.com" className="text-accent hover:underline">tatlican2@icloud.com</a></p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: [wird nachgetragen]</p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                https://ec.europa.eu/consumers/odr
              </a>.
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link to="/" className="text-accent hover:underline">← Zurück zur Startseite</Link>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
