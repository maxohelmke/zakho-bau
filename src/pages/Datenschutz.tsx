import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { usePageSeo } from "@/hooks/use-page-seo";

const Datenschutz = () => {
  usePageSeo({
    title: "Datenschutz | Zakho Bau",
    description: "DatenschutzerklÃ¤rung von Zakho Bau.",
    path: "/datenschutz",
    robots: "index,follow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "DatenschutzerklÃ¤rung",
      url: "https://zakho-bau.de/datenschutz",
    },
  });

  return (
    <div className="min-h-screen min-w-0 max-w-full overflow-x-hidden bg-background pt-20">
      <div className="container mx-auto min-w-0 max-w-3xl px-4 py-16">
        <h1 className="mb-8 text-3xl font-bold text-foreground">DatenschutzerklÃ¤rung</h1>

        <div className="break-safe space-y-8 text-muted-foreground leading-relaxed">
          <div className="rounded-xl border border-border bg-secondary p-5">
            <h2 className="mb-2 text-lg font-semibold text-foreground">Cookie-Einwilligung</h2>
            <p>
              Wir verwenden notwendige Cookies, um die Website bereitzustellen. Externe Inhalte (z. B. Google Maps)
              laden wir erst, wenn Sie ausdrÃ¼cklich einwilligen. Ihre Auswahl kÃ¶nnen Sie jederzeit Ã¼ber das Cookie-Banner
              am Seitenende anpassen.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">1. Datenschutz auf einen Blick</h2>
            <h3 className="mb-1 font-medium text-foreground">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Ãœberblick darÃ¼ber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persÃ¶nlich identifiziert werden kÃ¶nnen. AusfÃ¼hrliche Informationen zum Thema Datenschutz entnehmen
              Sie unserer unter diesem Text aufgefÃ¼hrten DatenschutzerklÃ¤rung.
            </p>
            <h3 className="mb-1 mt-4 font-medium text-foreground">Datenerfassung auf dieser Website</h3>
            <p>
              <strong className="text-foreground">Wer ist verantwortlich fÃ¼r die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
              kÃ¶nnen Sie dem Abschnitt â€žHinweis zur verantwortlichen Stelle" in dieser DatenschutzerklÃ¤rung entnehmen.
            </p>
            <p className="mt-2">
              <strong className="text-foreground">Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B.
              um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach
              Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
              technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>
            <p className="mt-2">
              <strong className="text-foreground">WofÃ¼r nutzen wir Ihre Daten?</strong><br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewÃ¤hrleisten.
              Andere Daten kÃ¶nnen zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
            <p className="mt-2">
              <strong className="text-foreground">Welche Rechte haben Sie bezÃ¼glich Ihrer Daten?</strong><br />
              Sie haben jederzeit das Recht, unentgeltlich Auskunft Ã¼ber Herkunft, EmpfÃ¤nger und Zweck Ihrer
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben auÃŸerdem ein Recht, die Berichtigung
              oder LÃ¶schung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt
              haben, kÃ¶nnen Sie diese Einwilligung jederzeit fÃ¼r die Zukunft widerrufen. AuÃŸerdem haben Sie das
              Recht, unter bestimmten UmstÃ¤nden die EinschrÃ¤nkung der Verarbeitung Ihrer personenbezogenen Daten
              zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zustÃ¤ndigen AufsichtsbehÃ¶rde zu.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">2. Hosting</h2>
            <p>
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <p className="mt-2">
              <strong className="text-foreground">Externes Hosting</strong><br />
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst
              werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
              Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe
              und sonstige Daten, die Ã¼ber eine Website generiert werden, handeln.
            </p>
            <p className="mt-2">
              Das externe Hosting erfolgt zum Zwecke der VertragserfÃ¼llung gegenÃ¼ber unseren potenziellen und
              bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und
              effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter
              (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="mb-1 font-medium text-foreground">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persÃ¶nlichen Daten sehr ernst. Wir behandeln
              Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften
              sowie dieser DatenschutzerklÃ¤rung.
            </p>
            <p className="mt-2">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
              Personenbezogene Daten sind Daten, mit denen Sie persÃ¶nlich identifiziert werden kÃ¶nnen. Die
              vorliegende DatenschutzerklÃ¤rung erlÃ¤utert, welche Daten wir erheben und wofÃ¼r wir sie nutzen.
              Sie erlÃ¤utert auch, wie und zu welchem Zweck das geschieht.
            </p>
            <p className="mt-2">
              Wir weisen darauf hin, dass die DatenÃ¼bertragung im Internet (z. B. bei der Kommunikation per
              E-Mail) SicherheitslÃ¼cken aufweisen kann. Ein lÃ¼ckenloser Schutz der Daten vor dem Zugriff durch
              Dritte ist nicht mÃ¶glich.
            </p>

            <h3 className="mb-1 mt-4 font-medium text-foreground">Hinweis zur verantwortlichen Stelle</h3>
            <p>Die verantwortliche Stelle fÃ¼r die Datenverarbeitung auf dieser Website ist:</p>
            <p className="mt-2">
              Zakho Bau<br />
              [STRASSE UND HAUSNUMMER]<br />
              [PLZ] Gevelsberg<br />
              Telefon: +49 1578 8888852<br />
              E-Mail: info@zakho-bau.de
            </p>
            <p className="mt-2">
              Verantwortliche Stelle ist die natÃ¼rliche oder juristische Person, die allein oder gemeinsam mit
              anderen Ã¼ber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen,
              E-Mail-Adressen o. Ã„.) entscheidet.
            </p>

            <h3 className="mb-1 mt-4 font-medium text-foreground">Speicherdauer</h3>
            <p>
              Soweit innerhalb dieser DatenschutzerklÃ¤rung keine speziellere Speicherdauer genannt wurde,
              verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck fÃ¼r die Datenverarbeitung entfÃ¤llt.
              Wenn Sie ein berechtigtes LÃ¶schersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung
              widerrufen, werden Ihre Daten gelÃ¶scht, sofern wir keine anderen rechtlich zulÃ¤ssigen GrÃ¼nde fÃ¼r
              die Speicherung Ihrer personenbezogenen Daten haben; in letzterem Fall erfolgt die LÃ¶schung nach
              Fortfall dieser GrÃ¼nde.
            </p>

            <h3 className="mb-1 mt-4 font-medium text-foreground">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p>
              Viele DatenverarbeitungsvorgÃ¤nge sind nur mit Ihrer ausdrÃ¼cklichen Einwilligung mÃ¶glich. Sie kÃ¶nnen
              eine bereits erteilte Einwilligung jederzeit widerrufen. Die RechtmÃ¤ÃŸigkeit der bis zum Widerruf
              erfolgten Datenverarbeitung bleibt vom Widerruf unberÃ¼hrt.
            </p>

            <h3 className="mb-1 mt-4 font-medium text-foreground">Beschwerderecht bei der zustÃ¤ndigen AufsichtsbehÃ¶rde</h3>
            <p>
              Im Falle von VerstÃ¶ÃŸen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
              AufsichtsbehÃ¶rde zu, insbesondere in dem Mitgliedstaat ihres gewÃ¶hnlichen Aufenthalts, ihres
              Arbeitsplatzes oder des Orts des mutmaÃŸlichen VerstoÃŸes. Das Beschwerderecht besteht unbeschadet
              anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
            </p>

            <h3 className="mb-1 mt-4 font-medium text-foreground">Recht auf DatenÃ¼bertragbarkeit</h3>
            <p>
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in ErfÃ¼llung eines
              Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gÃ¤ngigen,
              maschinenlesbaren Format aushÃ¤ndigen zu lassen. Sofern Sie die direkte Ãœbertragung der Daten an
              einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>

            <h3 className="mb-1 mt-4 font-medium text-foreground">Auskunft, LÃ¶schung und Berichtigung</h3>
            <p>
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
              Auskunft Ã¼ber Ihre gespeicherten personenbezogenen Daten, deren Herkunft und EmpfÃ¤nger und den Zweck
              der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder LÃ¶schung dieser Daten. Hierzu sowie
              zu weiteren Fragen zum Thema personenbezogene Daten kÃ¶nnen Sie sich jederzeit an uns wenden.
            </p>

            <h3 className="mb-1 mt-4 font-medium text-foreground">Recht auf EinschrÃ¤nkung der Verarbeitung</h3>
            <p>
              Sie haben das Recht, die EinschrÃ¤nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              Hierzu kÃ¶nnen Sie sich jederzeit an uns wenden.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">4. Datenerfassung auf dieser Website</h2>
            <h3 className="mb-1 font-medium text-foreground">Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
              Anfrage und fÃ¼r den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht
              ohne Ihre Einwilligung weiter.
            </p>
            <p className="mt-2">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
              Anfrage mit der ErfÃ¼llung eines Vertrags zusammenhÃ¤ngt oder zur DurchfÃ¼hrung vorvertraglicher
              MaÃŸnahmen erforderlich ist. In allen Ã¼brigen FÃ¤llen beruht die Verarbeitung auf unserem berechtigten
              Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO)
              oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
            </p>
            <p className="mt-2">
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur LÃ¶schung
              auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck fÃ¼r die Datenspeicherung
              entfÃ¤llt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen
              â€“ insbesondere Aufbewahrungsfristen â€“ bleiben unberÃ¼hrt.
            </p>

            <h3 className="mb-1 mt-4 font-medium text-foreground">Anfrage per E-Mail, Telefon oder Telefax</h3>
            <p>
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus
              hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
              bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>

            <h3 className="mb-1 mt-4 font-medium text-foreground">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
              Server-Log-Dateien, die Ihr Browser automatisch an uns Ã¼bermittelt. Dies sind:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mt-2">
              Eine ZusammenfÃ¼hrung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung
              dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
              berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website
              â€“ hierzu mÃ¼ssen die Server-Log-Dateien erfasst werden.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-foreground">5. Plugins und Tools</h2>
            <h3 className="mb-1 font-medium text-foreground">Google Maps</h3>
            <p>
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited
              (â€žGoogle"), Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="mt-2">
              Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese
              Informationen werden in der Regel an einen Server von Google in den USA Ã¼bertragen und dort
              gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese DatenÃ¼bertragung. Die Nutzung
              von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an
              einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein
              berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
            </p>
            <p className="mt-2">
              Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der DatenschutzerklÃ¤rung von Google:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://policies.google.com/privacy
              </a>.
            </p>
          </div>

          <div>
            <p className="text-sm">
              Quelle: Angelehnt an{" "}
              <a
                href="https://www.e-recht24.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                e-recht24.de
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link to="/" className="text-accent hover:underline">â† ZurÃ¼ck zur Startseite</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Datenschutz;



