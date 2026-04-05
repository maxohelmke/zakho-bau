import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const Datenschutz = () => {
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
        <h1 className="mb-8 text-3xl font-bold text-foreground">Datenschutzerklärung</h1>

        <div className="space-y-6 text-muted-foreground">
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">1. Datenschutz auf einen Blick</h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
              wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">2. Verantwortliche Stelle</h2>
            <p>TATLI BAU – Hasan Tatli</p>
            <p>Solingen, NRW, Deutschland</p>
            <p>Telefon: 01525 4090013</p>
            <p>E-Mail: tatlican2@icloud.com</p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">3. Datenerfassung auf dieser Website</h2>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, z.B. über das Kontaktformular.
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst (z.B. Browsertyp, Betriebssystem, Uhrzeit des Seitenaufrufs).
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">4. Kontaktformular</h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">5. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem das Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
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

export default Datenschutz;
