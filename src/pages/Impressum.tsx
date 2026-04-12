import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { usePageSeo } from "@/hooks/use-page-seo";

const Impressum = () => {
  usePageSeo({
    title: "Impressum | TATLI BAU",
    description: "Impressum von TATLI BAU.",
    path: "/impressum",
    robots: "noindex,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Impressum",
      url: "https://tatlibau.de/impressum",
    },
  });

  return (
    <div className="min-h-screen min-w-0 max-w-full overflow-x-hidden bg-background pt-20">
      <div className="container mx-auto min-w-0 max-w-3xl px-4 py-16">
        <h1 className="mb-8 text-3xl font-bold text-foreground">Impressum</h1>

        <div className="break-safe space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">Angaben gemäß § 5 TMG</h2>
            <p>TATLI BAU</p>
            <p>Hasan Tatli</p>
            <p>Görlitzer Straße 37</p>
            <p>42277 Wuppertal</p>
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
            <h2 className="mb-2 text-lg font-semibold text-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>Hasan Tatli</p>
            <p>Görlitzer Straße 37</p>
            <p>42277 Wuppertal</p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-2">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
              konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p className="mt-2">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
              umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p className="mt-2">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
              beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
              von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>.
            </p>
            <p className="mt-2">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link to="/" className="text-accent hover:underline">← Zurück zur Startseite</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Impressum;
