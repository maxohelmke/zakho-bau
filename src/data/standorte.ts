export type StandortData = {
  slug: string;
  name: string;
  headline: string;
  subline: string;
  intro: string;
  introHighlight: string;
  /** Überschrift über den Highlight-Karten – einzigartig pro Seite */
  highlightsSectionTitle: string;
  /** Kurzer Einleitungstext unter der Überschrift – einzigartig */
  highlightsSectionLead: string;
  highlights: string[];
  /** Regionale Kurzinfos (keine Behauptungen zu festen Zahlen – nur Orientierung) */
  localFacts: { label: string; text: string }[];
  /** Schwerpunkt-Leistungen mit eigener Struktur */
  serviceFocus: {
    title: string;
    intro: string;
    items: string[];
  };
  sections: { title: string; body: string }[];
  /** Lokale FAQ – Fragen und Antworten nur auf dieser URL, für SEO und Nutzer */
  faqs: { question: string; answer: string }[];
  seoTitle: string;
  seoDescription: string;
  heroImage: string;
  heroImageAlt: string;
  regionTag: string;
  /** Kennzahlen für Trust-Box (optional, sonst Defaults in der UI) */
  stats?: { value: string; label: string }[];
};

export const STANDORTE: StandortData[] = [
  {
    slug: "wuppertal",
    name: "Wuppertal",
    headline: "Bau & Sanierung in Wuppertal – vom Tal bis auf die Höhen",
    subline: "Renovierung in Elberfeld, Barmen, Vohwinkel, Cronenberg & Co.",
    intro:
      "Wuppertal ist für uns Heimatbasis: Die Stadt erstreckt sich entlang der Wupper und zieht sich in zahlreiche Hanglagen. Genau dort unterscheiden sich die baulichen Situationen: mal enge Talgrundstücke, mal exponierte Lagen mit längeren Leitungswegen. Wir kennen typische Altbauten aus der Gründerzeit ebenso wie Nachkriegsbestand und modernisierte Wohnblöcke. Ob Sie eine Etagenwohnung in Barmen sanieren, in Elberfeld einen Altbau aufwerten oder in Cronenberg ein Haus fit machen – wir planen mit Blick auf Zufahrten, Treppenhauslogistik und die Besonderheiten des Bergischen.",
    introHighlight:
      "Besonders häufig begleiten wir Modernisierungen vor Neuvermietung oder Verkauf, barrierearme Umbaute für ältere Bewohner und komplette Badsanierungen, bei denen Elektrik, Wasser und Oberflächen aus einem Guss gedacht sind.",
    highlightsSectionTitle: "Warum Auftraggeber in Wuppertal uns wählen",
    highlightsSectionLead:
      "Kurze Wege innerhalb der Stadt, klare Absprachen und die Erfahrung, dass viele Wuppertaler Immobilien besondere Detailfragen stellen – etwa feuchte Kellerräume, schmale Treppenhäuser oder ungewöhnliche Grundrisse.",
    highlights: [
      "Besichtigung und Beratung direkt vor Ort – ohne lange Wartezeit auf externe Dienstleister",
      "Koordination von Elektro, Wasser und Ausbau, damit nichts doppelt geöffnet wird",
      "Erfahrung mit Hanglagen, Talverlauf und typischen Altbau-Schwachstellen",
      "Transparente Angebote mit nachvollziehbaren Positionen statt Pauschalversprechen",
    ],
    localFacts: [
      {
        label: "Einsatzgebiet",
        text: "Gesamtes Stadtgebiet inklusive der großen Stadtteile und angrenzender Wohnlagen – Anfahrt aus der Region ist für uns Routine.",
      },
      {
        label: "Besonderheit Wuppertal",
        text: "Stark variierende Höhenlagen und oft beengte Zugänge: Wir planen Materialtransport und Arbeitsschritte so, dass Stress auf der Baustelle selten wird.",
      },
      {
        label: "Projektarten",
        text: "Von der Einzelmaßnahme (z. B. nur Bad) bis zur umfassenden Wohnungskernsanierung mit mehreren Gewerken.",
      },
    ],
    serviceFocus: {
      title: "Schwerpunkte für Projekte in Wuppertal",
      intro:
        "Je nach Objekt empfehlen wir unterschiedliche Schwerpunkte. In älterem Bestand stehen oft Elektrik, Leitungen und Feuchteschutz im Mittelpunkt; in bereits teilmodernisierten Wohnungen geht es häufig um Oberflächen, Bad und Raumwirkung.",
      items: [
        "Badsanierung inklusive Abdichtung, Fliesen, Anschlüssen und optional barrierearme Gestaltung",
        "Trockenbau für neue Raumaufteilungen, wenn tragende Wände nicht berührt werden dürfen",
        "Malerarbeiten und Bodenverlegung als Abschlussgewerke mit sauber vorbereiteten Untergründen",
        "Koordination von Elektro- und Installationsarbeiten mit zeitlich abgestimmten „offenen“ Wänden",
        "Vorbereitung von Übergaben an Mieter oder Käufer mit dokumentiertem Stand der Arbeiten",
      ],
    },
    sections: [
      {
        title: "Altbau in Wuppertal: Was wir vor der ersten Hammerschlag prüfen",
        body:
          "Bei Bestandsgebäuden klären wir früh, welche Wände tragend sind, wo Leitungen vermutlich liegen und ob Feuchte oder Salzausblühungen auf eine Ursache hindeuten. Das verhindert teure Korrekturen mitten in der Sanierung. Wo nötig, empfehlen wir spezialisierte Fachplaner – wir bleiben Ihre Schnittstelle und übersetzen Fachbegriffe in verständliche Entscheidungen.",
      },
      {
        title: "Treppenhäuser, Lieferfenster und Nachbarschaft",
        body:
          "In dicht besiedelten Straßen zählen kurze Lärmphasen und saubere Fluchtwege. Wir stimmen mit Ihnen Lieferfenster und Staubschutz ab und achten darauf, dass gemeinschaftliche Bereiche nach der Arbeit wieder nutzbar sind. Das ist vor allem in Mehrfamilienhäusern mit hoher Frequenz wichtig.",
      },
      {
        title: "Zeitplan und Meilensteine",
        body:
          "Nach Besichtigung erhalten Sie einen Ablauf mit groben Zeitfenstern – etwa wann Rohinstallationen fertig sein sollten, wann Fliesen folgen, wann Maler und Boden dran sind. Kurzfristige Änderungen sind möglich, werden aber vorher besprochen, damit Budget und Termine nicht aus dem Ruder laufen.",
      },
      {
        title: "Kosten und Prioritäten",
        body:
          "Nicht jedes Budget erlaubt die Komplettlösung sofort. Wir helfen, Maßnahmen zu staffeln: etwa zuerst sicherheitstechnisch und wasserseitig relevante Punkte, später ästhetische Feinarbeiten. So bleibt Ihr Projekt steuerbar, ohne dass später alles wieder aufgerissen werden muss.",
      },
    ],
    faqs: [
      {
        question: "Sind Sie in allen Wuppertaler Stadtteilen unterwegs?",
        answer:
          "Ja, wir betreuen Projekte im gesamten Stadtgebiet – von den dicht bebauten Lagen entlang der Wupper bis zu ruhigeren Wohnlagen in den Höhen. Entscheidend für uns ist die bauliche Situation vor Ort, nicht die Postleitzahl.",
      },
      {
        question: "Wie gehen Sie mit Hanglagen und schwierigen Zufahrten um?",
        answer:
          "Wir planen Materialmengen, Wege und ggf. Zwischenlagerung, damit nichts blockiert und die Baustelle erreichbar bleibt. Bei sehr beengten Verhältnissen stimmen wir Lieferungen zeitlich enger ab oder teilen Arbeitsschritte sinnvoll auf.",
      },
      {
        question: "Können Sie Modernisierungen für Vermieter abwickeln?",
        answer:
          "Ja. Wir kennen typische Anforderungen bei Mieterwechseln und Modernisierungsumlagen und dokumentieren den Fortschritt so, dass Abstimmung mit Verwaltung oder Eigentümern nachvollziehbar bleibt – ohne dass Sie jeden Handgriff selbst mitverfolgen müssen.",
      },
      {
        question: "Was passiert bei unerwarteten Schäden im Altbau?",
        answer:
          "Wenn sich hinter alten Fliesen oder Putz mehr zeigt als erwartet, stoppen wir den betroffenen Arbeitsschritt, zeigen Ihnen den Befund und besprechen Optionen mit klaren Kostenfolgen. Nichts wird „still“ hinterher repariert, was Ihr Budget unerwartet belastet.",
      },
    ],
    seoTitle: "Bau & Sanierung Wuppertal | TATLI BAU – Altbau, Bad, Trockenbau",
    seoDescription:
      "Renovierung und Sanierung in Wuppertal: Badsanierung, Trockenbau, Malerarbeiten und Gewerkekoordination. Persönliche Beratung, feste Ansprechpartner. Jetzt Erstgespräch vereinbaren.",
    heroImage: "/standorte/wuppertal.jpg",
    heroImageAlt:
      "Panorama und urbane Architektur in Wuppertal – TATLI BAU Sanierung und Renovierung",
    regionTag: "Wuppertal & Bergisches Land",
  },
  {
    slug: "solingen",
    name: "Solingen",
    headline: "Sanierung in Solingen – Qualität zwischen Gräfrath und Industriekultur",
    subline: "Ohligs, Höhscheid, Burg, Wald & historisches Gräfrath im Blick",
    intro:
      "Solingen verbindet dichte Wohnquartiere mit dem denkmalgeschützten Altstadtbereich Gräfrath und moderner Nachverdichtung. In Gräfrath gelten oft besondere Vorgaben zu Oberflächen und Fenstern; in anderen Stadtteilen stehen funktionale Modernisierung und kurze Bauzeiten im Vordergrund. Wir stimmen jedes Vorhaben auf die Situation ab: vermietete Wohnungen, Einfamilienhäuser mit Garten oder sanierte Etagenwohnungen mit Balkon. Dabei achten wir auf saubere Baustellen, weil in Solingen Nachbarschaft und Ruhezeiten oft eine größere Rolle spielen als auf freistehenden Grundstücken.",
    introHighlight:
      "Wenn Sie in einem Mehrfamilienhaus wohnen, koordinieren wir Staub, Lärm und Lieferungen so, dass Treppenhaus und Hof nicht unnötig blockiert werden – und halten Hausmeister oder Verwaltung bei Bedarf auf dem Laufenden.",
    highlightsSectionTitle: "Was Solingen-Kunden von uns erwarten dürfen",
    highlightsSectionLead:
      "Handwerk, das zu Solingen passt: präzise Ausführung, klare Kommunikation und Respekt vor dem Bestand – ob sichtbare Fachwerkelemente oder schlichte Wohnungswände aus den 1970er-Jahren.",
    highlights: [
      "Erfahrung mit unterschiedlichen Baualtersklassen – von Fachwerk bis Plattenbau der späteren Jahrzehnte",
      "Abstimmung bei denkmalrelevanten Details mit Ihnen und ggf. Fachleuten, bevor etwas fest verbaut wird",
      "Feste Terminabsprachen, damit Mieterwechsel oder Einzug planbar bleiben",
      "Dokumentation der Arbeitsschritte für Vermieter und Eigentümergemeinschaften",
    ],
    localFacts: [
      {
        label: "Stadtbild",
        text: "Mischung aus historischem Gräfrath, urbanen Lagen und grünen Randlagen – jedes Viertel stellt andere Anforderungen an Material und Logistik.",
      },
      {
        label: "Typische Aufträge",
        text: "Badsanierung, Küchenumbau, komplette Wohnungsfrischzüge sowie punktuelle Instandsetzung nach Wasserschäden.",
      },
      {
        label: "Anfahrt",
        text: "Kurze Verbindung zu unserem Schwerpunkt Wuppertal – dadurch sind Nachterminen und Zwischenbesuchen realistisch machbar.",
      },
    ],
    serviceFocus: {
      title: "Leistungen, die in Solingen besonders oft angefragt werden",
      intro:
        "Die Schwerpunkte verschieben sich je nach Objekt. In älterem Bestand sind oft Elektrik und Feuchtraum die treibenden Themen; in neuerem Bestand geht es häufig um Design, Böden und Licht.",
      items: [
        "Komplettsanierung von Bädern inklusive Entsorgung alter Installationen und normgerechter Abdichtung",
        "Trockenbau für neue Grundrisse, wenn Statik und Brandschutz eingehalten werden",
        "Maler- und Spachtelarbeiten als Basis für langlebige Wandbeläge",
        "Bodenverlegung mit Untergrundprüfung – wichtig bei unebenen Estrichen",
        "Abstimmung mit Küchenlieferanten, wenn Anschlüsse und Maße exakt passen müssen",
      ],
    },
    sections: [
      {
        title: "Gräfrath und Denkmalschutz: Worauf wir achten",
        body:
          "Wo Vorgaben für Fassaden, Fenster oder sichtbare Holzkonstruktionen gelten, planen wir Innenarbeiten so, dass äußere Vorgaben nicht verletzt werden. Innen können oft moderne Bäder und Technik umgesetzt werden – wir klären mit Ihnen, welche Freiheiten realistisch sind, bevor gekauft und verbaut wird.",
      },
      {
        title: "Nachbarschaft und bewohnte Häuser",
        body:
          "Staub und Erschütterungen begrenzen wir durch Abschnitte, Staubschutztüren und sinnvolle Reihenfolgen. Kurze, konzentrierte Arbeitsphasen sind oft besser als lang hingezogene Halbfertigzustände – das besprechen wir transparent.",
      },
      {
        title: "Budget staffeln statt verzichten",
        body:
          "Wenn nicht alles auf einmal finanzierbar ist, definieren wir Pakete: zuerst alles, was Feuchte, Sicherheit und Nutzbarkeit betrifft, später Oberflächen und Design. So investieren Sie dort, wo es zuerst wirkt.",
      },
    ],
    faqs: [
      {
        question: "Übernehmen Sie auch kleinere Arbeiten in Solingen?",
        answer:
          "Ja, je nach Kapazität auch punktuelle Leistungen – etwa Malerarbeiten nach Wasserschaden oder die Renovierung einzelner Räume. Größere Vorhaben koordinieren wir weiterhin zentral, damit Schnittstellen nicht verloren gehen.",
      },
      {
        question: "Wie läuft die Abstimmung bei vermieteten Wohnungen?",
        answer:
          "Wir legen mit Ihnen fest, wann Zugang zur Wohnung möglich ist, welche Arbeiten Lärm verursachen und wie lange Kernphasen dauern. Bei Bedarf informieren wir Mieter in verständlicher Form über die nächsten Schritte – Sie geben den Ton vor.",
      },
      {
        question: "Beraten Sie zu Förderungen oder steuerlichen Aspekten?",
        answer:
          "Wir kennen typische Programme und Modernisierungspfade und können grob einordnen, was infrage kommt. Verbindliche Auskünfte erteilen Steuerberater oder Förderstellen – wir liefern die technische Grundlage für deren Entscheid.",
      },
      {
        question: "Kann ich Materialien selbst beistellen?",
        answer:
          "Grundsätzlich ja, wenn Qualität und Liefertermine passen. Wir prüfen vorab Verarbeitbarkeit und Garantiefragen, damit es auf der Baustelle nicht zu Reibung kommt.",
      },
    ],
    seoTitle: "Bau & Sanierung Solingen | TATLI BAU – Gräfrath, Bad, Renovierung",
    seoDescription:
      "Renovierung in Solingen: Badsanierung, Trockenbau, Malerarbeiten. Rücksicht auf Altbau und Nachbarn. Jetzt Beratung für Ihr Projekt anfragen.",
    heroImage: "/standorte/solingen.jpg",
    heroImageAlt:
      "Historische Gassen und Fachwerk in Solingen – Handwerk und Sanierung TATLI BAU",
    regionTag: "Solingen & Bergisches Land",
  },
  {
    slug: "duesseldorf",
    name: "Düsseldorf",
    headline: "Innensanierung & Umbau in Düsseldorf – professionell organisiert",
    subline: "Von der Rheinlage bis zu ruhigen Wohnstraßen in Oberbilk & Lohausen",
    intro:
      "Düsseldorf ist wirtschaftlich und architektonisch vielfältig: teils hohe Mieten und Erwartungen an Ausstattung, teils solider Wohnungsbestand mit Modernisierungsstau. Wir führen Sanierungen durch, die zu Ihrem Objekt passen – ob repräsentative Altbauwohnung, sanierte Etagenwohnung mit Aufzug oder sachliche Wohnung für die Vermietung. Wichtig in der Landeshauptstadt sind oft Logistik (Parken, Lieferzonen), Abstimmung mit Hausverwaltungen und die Einhaltung von Hausordnungen. Genau dort setzen wir mit strukturierten Abläufen und verlässlicher Kommunikation an.",
    introHighlight:
      "Für Eigentümer in Wohnanlagen klären wir früh, welche Arbeiten der Gemeinschaft gemeldet werden müssen und welche Unterlagen sinnvoll sind – damit keine Überraschungen in der Nachbarschaft entstehen.",
    highlightsSectionTitle: "Darauf kommt es in Düsseldorfer Bestandsimmobilien an",
    highlightsSectionLead:
      "Präzise Terminplanung, saubere Baustellenführung und die Bereitschaft, mit Verwaltung, Nachbarn und ggf. Architekten konstruktiv zusammenzuarbeiten – ohne dass Sie im Tagesgeschäft untergehen.",
    highlights: [
      "Erfahrung mit innerstädtischen Logistikfragen – von Lieferfenstern bis zur Treppenhausnutzung",
      "Klare Ansprechpartner statt endloser E-Mail-Ketten mit Subunternehmern",
      "Abstimmung von Roh- und Feinarbeiten, damit teure Nachbesserungen selten werden",
      "Realistische Zeitpläne, die Puffer für Altbaurückfragen einrechnen",
    ],
    localFacts: [
      {
        label: "Stadtprofil",
        text: "Mischung aus dichter Innenstadtbebauung, Rheinnähe und ruhigeren Wohngebieten – jedes Quartier hat eigene Herausforderungen bei Zufahrt und Lärm.",
      },
      {
        label: "Häufige Ziele",
        text: "Wertsteigerung durch Bad und Küche, Vermietbarkeit verbessern, energetische Teilmaßnahmen kombiniert mit optischer Modernisierung.",
      },
      {
        label: "Unser Rollenverständnis",
        text: "Wir bleiben Ihr Partner für die Ausführung und Koordination auf der Baustelle – Sonderfälle mit Statik oder Genehmigungen klären wir mit Ihnen und Fachplanern.",
      },
    ],
    serviceFocus: {
      title: "Leistungen für Sanierungsprojekte in Düsseldorf",
      intro:
        "Je nach Ziel unterscheiden sich die Pakete. Investoren und Vermieter priorisieren oft robuste Materialien und schnelle Übergaben; Eigennutzer setzen häufig auf Komfort, Design und Langlebigkeit.",
      items: [
        "Komplette Badsanierung mit Planung von Ablauf, Beleuchtung und Stauraum",
        "Trockenbau für neue Raumkonzepte, etwa offene Küchen oder zusätzliche Abstellflächen",
        "Malerarbeiten inklusive Untergrundvorbereitung für hochwertige Anstriche",
        "Koordination von Elektrik und Sanitär mit dokumentierten Übergaben",
        "Vorbereitung auf Verkauf oder Neuvermietung mit fokussierten Maßnahmen",
      ],
    },
    sections: [
      {
        title: "Urbanes Arbeiten: Treppenhäuser, Aufzüge und Zeitfenster",
        body:
          "In vielen Häusern bestimmen kurze Zeitfenster für Materialaufzug oder Hofzufahrt den Tagesablauf. Wir stimmen Lieferungen und arbeitsintensive Phasen so, dass weder Nachbarn dauerhaft gestört noch die Baustelle blockiert wird. Wo nötig, organisieren wir Zwischenlager – immer mit Blick auf Diebstahlschutz und Brandschutz.",
      },
      {
        title: "Repräsentation und Werterhalt",
        body:
          "In begehrten Lagen zählt neben der Technik auch die Wirkung von Oberflächen, Licht und Raumaufteilung. Wir beraten, welche Maßnahmen sich für eine spätere Vermietung oder einen Verkauf eignen – ohne unnötige Überinvestition in Details, die kaum jemand wahrnimmt.",
      },
      {
        title: "Gewerke statt Wildwuchs",
        body:
          "Mehrere getrennte Handwerker ohne Abstimmung führen oft zu Verzögerungen. Wir bündeln, wo es sinnvoll ist, und definieren Schnittstellen klar: wer liefert wann Vorbereitung, wer übernimmt Endmontage, wer dokumentiert Übergaben.",
      },
      {
        title: "Kommunikation mit Verwaltung und Eigentümern",
        body:
          "Bei Maßnahmen, die Gemeinschaftseigentum berühren können, unterstützen wir Sie mit technischen Beschreibungen für Anfragen. Entscheidungen treffen Sie weiterhin – wir liefern die fachliche Grundlage in verständlicher Sprache.",
      },
    ],
    faqs: [
      {
        question: "Arbeiten Sie in allen Düsseldorfer Stadtteilen?",
        answer:
          "Ja, wir betreuen Projekte in der gesamten Stadt und im näheren Umfeld. Entscheidend sind Zufahrt, Hauszugang und die baulichen Gegebenheiten – nicht das Viertel allein.",
      },
      {
        question: "Wie gehen Sie mit Park- und Ladezonen um?",
        answer:
          "Wir planen Lieferungen möglichst gebündelt und vermeiden unnötige Großfahrzeuge. Wo nur kurze Standzeiten erlaubt sind, stimmen wir Abläufe so, dass entladen und weitergearbeitet werden kann, ohne den Fluss zu blockieren.",
      },
      {
        question: "Kann ich während einer größeren Sanierung in der Wohnung bleiben?",
        answer:
          "Das ist von Umfang und Hygienevorgaben abhängig. Bei Bad- und Feuchtraumarbeiten ist temporäres Ausweichen oft angenehmer; bei reinen Malerarbeiten in einzelnen Räumen bleiben manche Kunden vor Ort. Wir beraten ehrlich nach Ihrer Situation.",
      },
      {
        question: "Bieten Sie Festpreise an?",
        answer:
          "Wo der Leistungsumfang klar umrissen ist, sind Festpreise möglich. Unvorhersehbare Altbaubefunde können zusätzliche Positionen erfordern – die besprechen wir vor Umsetzung und dokumentieren sie.",
      },
    ],
    seoTitle: "Renovierung Düsseldorf | TATLI BAU – Bad, Altbau, Gewerkekoordination",
    seoDescription:
      "Sanierung und Innenausbau in Düsseldorf: Badsanierung, Trockenbau, Malerarbeiten. Strukturierte Abläufe, ein Ansprechpartner. Jetzt Projekt schildern.",
    heroImage: "/standorte/duesseldorf.jpg",
    heroImageAlt:
      "Rheinufer und Skyline Düsseldorf – Renovierung und Sanierung mit TATLI BAU",
    regionTag: "Düsseldorf & Rheinschiene",
  },
  {
    slug: "mettmann",
    name: "Mettmann",
    headline: "Modernisierung in Mettmann – Kreisstadt mit Hang- und Tal-Lagen",
    subline: "Vom Tal bis zu den höher gelegenen Wohngebieten",
    intro:
      "Mettmann liegt zentral im Kreis Mettmann und ist von Wuppertal und Düsseldorf aus schnell erreichbar – für uns ebenfalls. Die Stadt zeigt eine Mischung aus älterem Wohnungsbestand, Nachkriegsbebauung und neueren Wohnanlagen. Hanglagen prägen viele Straßen: Das betrifft Zufahrten, Schacht- und Leitungswege sowie manchmal die Statik von Außenanlagen. Wir berücksichtigen das in der Planung, statt Probleme erst auf der Baustelle zu entdecken. Eigentümer und Familien schätzen oft die ruhige Lage – wir achten entsprechend auf unaufdringliche Bauabläufe und verlässliche Termine.",
    introHighlight:
      "Wenn Sie eine Immobilie im Kreis verkaufen oder vermieten möchten, helfen wir, sichtbare Mängel und veraltete Bäder so zu adressieren, dass der erste Eindruck stimmt – ohne dass Sie in jedes Detail investieren müssen.",
    highlightsSectionTitle: "Was Mettmann-Projekte von anderen unterscheidet",
    highlightsSectionLead:
      "Hanglagen, unterschiedliche Baujahre und die Nähe zu beiden Ballungsräumen erfordern flexibles Planen – mit klarem Kopf für Statik, Leitungsführung und Alltag der Bewohner.",
    highlights: [
      "Sinnvolle Priorisierung, wenn Budget und Wunschliste nicht sofort zusammenpassen",
      "Koordination der Gewerke mit Blick auf Leitungswege in älteren Gebäuden",
      "Persönliche Betreuung – kein anonymer Callcenter-Service",
      "Erfahrung mit typischen Reihen- und Doppelhaussituationen im Kreisgebiet",
    ],
    localFacts: [
      {
        label: "Lagevorteil",
        text: "Gute Erreichbarkeit aus Richtung Wuppertal und Düsseldorf – kurze Wege für Zwischenbesuche und Abnahmen.",
      },
      {
        label: "Bauliche Vielfalt",
        text: "Tal- und Hanglagen, unterschiedliche Entwässerungssituationen und gemischte Baualtersklassen – wir gehen differenziert vor.",
      },
      {
        label: "Typische Aufgaben",
        text: "Badmodernisierung, Wärme- und Feuchteraum, Malerarbeiten und Umbauten mit Trockenbau.",
      },
    ],
    serviceFocus: {
      title: "Schwerpunkte für Hausbesitzer und Kapitalanleger in Mettmann",
      intro:
        "Je nach Zielsetzung variieren die Maßnahmen. Eigennutzer investieren oft in Komfort und Design; Kapitalanleger in robuste, pflegeleichte Lösungen und schnelle Fertigstellung.",
      items: [
        "Komplette Badsanierung mit Entsorgung Altbestand und normgerechter Installation",
        "Trockenbau für Grundrissanpassungen unter Beachtung statischer Vorgaben",
        "Maler- und Spachtelarbeiten als Grundlage für strapazierfähige Oberflächen",
        "Beratung zu Reihenfolge und Kosten, wenn mehrere Räume betroffen sind",
        "Abstimmung mit Dienstleistern für Küche, Elektrik oder Sonderwünsche nach Absprache",
      ],
    },
    sections: [
      {
        title: "Hanglagen: Was wir vorab klären",
        body:
          "Bei Hanggrundstücken prüfen wir mit Blick auf Ihr Projekt, ob Entwässerung, Terrassen oder Kellerräume von Arbeiten betroffen sein könnten. Nicht jedes Thema ist sofort sichtbar – wir empfehlen, kritische Punkte früh mit einzubeziehen, statt sie als nachträgliche Baustelle zu erleben.",
      },
      {
        title: "Nachbarschaft in dichter Bebauung",
        body:
          "In vielen Straßen stehen Häuser dicht beieinander. Wir reduzieren Staub und Lärm durch Abschnitte und klare Arbeitsphasen. Kurze, intensive Arbeitsschritte sind oft besser als wochenlange Halbzustände.",
      },
      {
        title: "Wirtschaftlichkeit und Werthaltigkeit",
        body:
          "Wir sagen Ihnen offen, welche Investition sich für Ihre Nutzungsdauer und Ihr Ziel lohnt. Manchmal reicht eine fokussierte Badmodernisierung; manchmal lohnt sich die Kombination mit Elektrik oder Böden, weil später doppelt geöffnet würde.",
      },
    ],
    faqs: [
      {
        question: "Wie schnell können Sie in Mettmann einen Termin zur Besichtigung anbieten?",
        answer:
          "Das hängt von der aktuellen Auslastung ab. In der Regel melden wir uns zeitnah auf Ihre Anfrage und schlagen konkrete Termine vor. Dringende Fälle nach Wasserschaden besprechen wir priorisiert.",
      },
      {
        question: "Übernehmen Sie auch Teilbereiche statt Komplettsanierung?",
        answer:
          "Ja. Viele Kunden starten mit Bad oder einem Geschoss und stocken später nach. Wir planen so, dass spätere Erweiterungen technisch sinnvoll bleiben.",
      },
      {
        question: "Arbeiten Sie mit Architekten oder Ingenieuren zusammen?",
        answer:
          "Wo statische oder genehmigungspflichtige Themen anstehen, arbeiten wir mit Ihren Fachplanern zusammen oder empfehlen die Einbindung – wir bleiben Ihr Ansprechpartner für die Ausführung.",
      },
      {
        question: "Wie werden Mängel oder Nacharbeiten gehandhabt?",
        answer:
          "Übergabe und Abnahme erfolgen strukturiert. Sollte etwas nicht den Vereinbarungen entsprechen, beheben wir das nach – ohne Diskussion um Verantwortlichkeiten im Kleingedruckten.",
      },
    ],
    seoTitle: "Sanierung Mettmann | TATLI BAU – Bad, Umbau, Hanglage & Bestand",
    seoDescription:
      "Renovierung in Mettmann: Innensanierung, Badsanierung, Trockenbau. Beratung für Eigentümer im Kreis Mettmann. Jetzt Kontakt aufnehmen.",
    heroImage: "/standorte/mettmann.jpg",
    heroImageAlt:
      "Wohngebiet und Architektur in Mettmann – Modernisierung mit TATLI BAU",
    regionTag: "Mettmann & Kreis Mettmann",
  },
  {
    slug: "schwelm",
    name: "Schwelm",
    headline: "Renovierung in Schwelm – zwischen Ruhrgebiet und Bergischem Land",
    subline: "Ennepe-Ruhr-Kreis: schnelle Anbindung, persönliche Betreuung",
    intro:
      "Schwelm profitiert von verkehrsgünstiger Lage und einer überschaubaren Stadtstruktur. Für uns ist die Stadt fest im Tourenplan verankert: überschaubare Anfahrten, klare Kommunikation und die Möglichkeit, auch kurzfristig vorbeizuschauen, wenn auf der Baustelle Entscheidungen anstehen. Viele Aufträge betreffen Modernisierung vor Verkauf oder Neuvermietung, Familien, die ihr Zuhause langfristig fit machen, oder Eigentümer, die nach Jahren punktuell nachziehen. Wir übersetzen Ihre Ziele in einen umsetzbaren Plan – mit realistischem Zeitbudget und ehrlicher Einschätzung der Kosten.",
    introHighlight:
      "Wenn Sie unter Zeitdruck stehen (z. B. Übergabetermin oder Einzug), legen wir Prioritäten fest und markieren optional, was später nachgezogen werden kann – damit Sie nicht alles auf einmal finanzieren müssen.",
    highlightsSectionTitle: "Darauf legen Schwelmer Auftraggeber Wert",
    highlightsSectionLead:
      "Zuverlässigkeit, nachvollziehbare Angebote und die Bereitschaft, auch unbequeme Wahrheiten über den Bestand auszusprechen – bevor es teuer wird.",
    highlights: [
      "Schnelle Rückmeldung auf Anfragen und realistische Ersteinschätzung",
      "Erfahrung mit typischen Wohnungsgrundrissen und Häusern der Region",
      "Klare Prioritätenliste, wenn Budget und Wunschliste auseinanderlaufen",
      "Dokumentation für Verkauf, Vermietung oder Versicherung nach Absprache",
    ],
    localFacts: [
      {
        label: "Region",
        text: "Im Ennepe-Ruhr-Kreis verknüpft mit guter Anbindung Richtung Mettmann und Wuppertal – für uns planbar im Tagesgeschäft.",
      },
      {
        label: "Auftragsprofil",
        text: "Häufig Frischzüge, Badsanierungen und Schadensmaßnahmen; daneben langfristige Modernisierungsprojekte.",
      },
      {
        label: "Arbeitsweise",
        text: "Wir vermeiden Doppelarbeiten: Wer öffnet, schließt auch wieder fachgerecht – oder wir koordinieren das explizit.",
      },
    ],
    serviceFocus: {
      title: "Leistungen rund um Sanierung und Instandhaltung in Schwelm",
      intro:
        "Der Umfang reicht von punktuellen Arbeiten bis zur umfassenden Aufwertung. Entscheidend ist immer die Reihenfolge: Zuerst alles, was Feuchte, Sicherheit und Nutzbarkeit betrifft.",
      items: [
        "Badsanierung mit Fokus auf Dichtigkeit, Komfort und Reinigungsfreundlichkeit",
        "Malerarbeiten und Bodenverlegung nach sachgerechter Untergrundvorbereitung",
        "Trockenbau für Raumteilungen oder Ausgleich unebener Wände",
        "Koordination nach Wasserschaden: Trocknung, Austausch, Wiederherstellung",
        "Beratung zu sinnvollen Investitionen vor Immobilienverkauf",
      ],
    },
    sections: [
      {
        title: "Vor Verkauf oder Vermietung: wo sich Arbeit auszahlt",
        body:
          "Nicht jede Investition steigert den Preis gleichermaßen. Wir zeigen, welche sichtbaren und technischen Punkte Käufer und Mieter typischerweise wahrnehmen – und wo Sie mit kleinem Aufwand viel erreichen. Das ersetzt keine Maklerbewertung, verschafft aber Klarheit für Ihre Entscheidung.",
      },
      {
        title: "Transparenz bei Kosten und Änderungen",
        body:
          "Das Angebot basiert auf dem Besichtigungstermin. Wenn sich der Befund ändert, stoppen wir, informieren Sie und einigen uns auf die nächsten Schritte. So bleiben Sie souverän über Ihr Budget.",
      },
      {
        title: "Familien und Langzeitnutzer",
        body:
          "Wenn Sie lange bleiben möchten, lohnt sich oft die Kombination aus Komfort (Bad, Küche, Licht) und technischer Basis (Elektrik, Leitungen). Wir helfen, das sinnvoll zu staffeln.",
      },
    ],
    faqs: [
      {
        question: "Wie schnell bekomme ich in Schwelm einen Rückruf?",
        answer:
          "In der Regel innerhalb eines Werktags – bei dringenden Schäfen bitten wir um kurze Kennzeichnung in der Nachricht, damit wir priorisieren können.",
      },
      {
        question: "Übernehmen Sie auch Schadensanierung nach Leitungswasser?",
        answer:
          "Ja, in vielen Fällen: Befund, Austausch betroffener Bereiche, Trocknung nach Vorgabe und Wiederherstellung der Oberflächen. Umfang klären wir nach Sichtung.",
      },
      {
        question: "Kann ich Referenzen oder ähnliche Projekte erfragen?",
        answer:
          "Je nach Datenschutz und Verfügbarkeit können wir Beispiele nennen oder beschreiben. Fotos von fremden Objekten zeigen wir nur mit Einwilligung der Eigentümer.",
      },
      {
        question: "Arbeiten Sie nur privat oder auch für Firmen?",
        answer:
          "Schwerpunkt ist privates Wohnen; gewerbliche Kleinobjekte sind nach Absprache möglich. Sprechen Sie uns mit Ihrem konkreten Fall an.",
      },
    ],
    seoTitle: "Renovierung Schwelm | TATLI BAU – Bad, Sanierung, Ennepe-Ruhr",
    seoDescription:
      "Sanierung in Schwelm: Badsanierung, Malerarbeiten, Umbau. Schnelle Rückmeldung, transparente Kosten. Jetzt Erstberatung anfragen.",
    heroImage: "/standorte/schwelm.jpg",
    heroImageAlt:
      "Wohnen und Architektur – Sanierung und Handwerk in Schwelm mit TATLI BAU",
    regionTag: "Schwelm & Ennepe-Ruhr-Kreis",
  },
  {
    slug: "remscheid",
    name: "Remscheid",
    headline: "Sanierung in Remscheid & Lennep – Bergisch, höhenreich, vielseitig",
    subline: "Vom Lenneper Kirchplatz bis zu Hanglagen mit Weitblick",
    intro:
      "Remscheid ist durch Höhenunterschiede und die großen Stadtteile geprägt – etwa Lennep mit historischem Zentrum oder Lüttringhausen mit eigenem Charakter. Immobilien reichen von schmucken Altbauwohnungen bis zu Häusern aus späteren Jahrzehnten. Häufig spielen ältere Installationen, Feuchtebereiche und die Frage eine Rolle, wie weit man bei einer Modernisierung gehen sollte. Wir beraten pragmatisch: Was ist sicherheitstechnisch und nutzungsseitig nötig, was ist Wunsch, was kann später folgen? So entsteht ein Plan, der zu Ihrem Budget und Ihrer Nutzungsdauer passt – nicht ein Katalog, der jedes Zimmer gleich behandelt.",
    introHighlight:
      "Hanglagen können Auswirkungen auf Außenanlagen, Entwässerung und Zufahrten haben. Wir schauen bei der Planung über die Innenräume hinaus, wenn Arbeiten das berühren könnten.",
    highlightsSectionTitle: "Was Remscheid-Projekte handwerklich ausmacht",
    highlightsSectionLead:
      "Robuste Ausführung, klare Zuständigkeiten und die Bereitschaft, auch unübersichtliche Altbausituationen strukturiert zu lösen – statt schneller Provisorien.",
    highlights: [
      "Direkter Kontakt zum Inhaber – Entscheidungen ohne lange Eskalationsketten",
      "Priorisierung nach Sicherheit und Alltagstauglichkeit, nicht nach dem teuersten Katalog",
      "Koordination mehrerer Gewerke mit nachvollziehbaren Zwischenständen",
      "Erfahrung mit unterschiedlichen Hang- und Tal-Lagen im Stadtgebiet",
    ],
    localFacts: [
      {
        label: "Stadtteile",
        text: "Lennep, Lüttringhausen und weitere Ortsteile unterscheiden sich in Bausubstanz und Infrastruktur – wir gehen ortsspezifisch vor.",
      },
      {
        label: "Typische Themen",
        text: "Elektrik nachrüsten, Bäder erneuern, Feuchteschäden sanieren, Wohnungen für neue Mieter fit machen.",
      },
      {
        label: "Region",
        text: "Im Bergischen Land verwurzelt – kurze Wege zu Nachbarstädten und zu Baustellen in Remscheid.",
      },
    ],
    serviceFocus: {
      title: "Leistungen für Modernisierung und Instandsetzung in Remscheid",
      intro:
        "Je nach Gebäudealter kombinieren wir unterschiedliche Gewerke. Wichtig ist die richtige Reihenfolge: Erst statisch und leitungstechnisch klären, dann sichtbare Schönheit.",
      items: [
        "Kernsanierung von Bädern inklusive Rohinstallation und Oberflächen",
        "Trockenbau für neue Raumaufteilungen und technische Vorsätze",
        "Malerarbeiten und Bodenverlegung nach Untergrundprüfung",
        "Teilinstandsetzung nach Schäden mit Fokus auf Ursachenbeseitigung",
        "Beratung zu sinnvollen Investitionsstufen bei älterem Bestand",
      ],
    },
    sections: [
      {
        title: "Lennep und historischer Kern: Innenarbeiten mit Augenmaß",
        body:
          "Wo Gebäude unter Ensembleschutz oder mit sensibler Fassade stehen, bleiben äußere Merkmale oft unangetastet – innen können dennoch moderne Bäder und Technik entstehen. Wir klären mit Ihnen, welche Innenarbeiten unkritisch sind und wo Rücksprache sinnvoll ist.",
      },
      {
        title: "Elektrik und Leitungen im Bestand",
        body:
          "Viele Schäden entstehen durch veraltete Installationen oder fehlende Ableitung. Wir empfehlen keine vollständige Neuverkabelung „zur Sicherheit“, wenn der Befund das nicht erfordert – aber wir verschweigen auch keine Risiken, die wir sehen.",
      },
      {
        title: "Zeitmanagement bei Mieterwechsel",
        body:
          "Zwischen Auszug und Einzug ist oft wenig Zeit. Wir legen mit Ihnen einen straffen Plan fest und benennen Risiken, wenn Material Lieferzeiten hat oder Altbaubefunde Verzögerungen auslösen könnten.",
      },
    ],
    faqs: [
      {
        question: "Ist TATLI BAU in ganz Remscheid tätig?",
        answer:
          "Ja, einschließlich der großen Stadtteile und umliegender Wohnlagen. Entscheidend ist die Erreichbarkeit der Baustelle und die bauliche Situation – nicht allein die Postadresse.",
      },
      {
        question: "Wie gehen Sie mit unklarem Leitungsführung im Altbau um?",
        answer:
          "Wir arbeiten vorsichtig und klären kritische Bereiche vor dem Durchschlagen. Wo nötig, wird ortsfest gesucht oder kurz pausiert, bis eine sichere Entscheidung vorliegt.",
      },
      {
        question: "Können Sie bei der Priorisierung von Maßnahmen helfen?",
        answer:
          "Ja, das gehört zu unserem Alltag: Wir trennen in „sollte bald“, „kann zeitlich warten“ und „rein optisch“ – damit Sie investieren, wo es wirkt.",
      },
      {
        question: "Gibt es eine Garantie auf ausgeführte Arbeiten?",
        answer:
          "Ausgeführte Gewerke werden nach üblichen handwerklichen Standards und vertraglichen Vereinbarungen abgenommen. Details zu Gewährleistung besprechen wir transparent im Angebot.",
      },
    ],
    seoTitle: "Bau & Sanierung Remscheid & Lennep | TATLI BAU – Altbausanierung",
    seoDescription:
      "Renovierung in Remscheid: Badsanierung, Elektrik, Trockenbau. Erfahrung mit Hanglage und Altbau. Jetzt Besichtigung vereinbaren.",
    heroImage: "/standorte/remscheid.jpg",
    heroImageAlt:
      "Stadtansicht Remscheid – Sanierung, Modernisierung und Handwerk TATLI BAU",
    regionTag: "Remscheid & Bergisches Land",
  },
  {
    slug: "velbert",
    name: "Velbert",
    headline: "Innenausbau in Velbert – Neviges, Langenberg & Mitte",
    subline: "Doppelstadt mit unterschiedlichen Wohnungs- und Hausmustern",
    intro:
      "Velbert besteht aus mehreren großen Stadtteilen mit je eigenem Profil: woanders dominieren Einfamilienhäuser und Reihen, anderswo größere Wohnblöcke oder kleinteiligere Straßenzüge. Genau diese Mischung verlangt differenzierte Lösungen: Im einen Objekt zählt eine wetterfeste Außenhaustür und der Anschluss an die Terrasse, im anderen eine kompakte Badlösung in der Etagenwohnung. Wir hören zu, welches Gebäude Sie haben und wie Sie leben – und übersetzen das in Materialwahl, Zeitplan und Gewerkefolge. Vermieter schätzen oft robuste, pflegeleichte Oberflächen; Eigennutzer häufig Design und Lichtkonzepte.",
    introHighlight:
      "Wenn mehrere Gewerke parallel laufen sollen, ist Abstimmung entscheidend. Wir vermeiden klassische Stolpersteine – etwa wenn der Boden verlegt wird, bevor die Feuchtraumabdichtung geprüft ist.",
    highlightsSectionTitle: "Warum Velbert-Kunden mit TATLI BAU planen",
    highlightsSectionLead:
      "Weil Grundrisse, Baujahre und Nutzung sich von Straße zu Straße unterscheiden – und Standardlösungen dann selten passen.",
    highlights: [
      "Materialberatung mit Blick auf Nutzung: Vermietung vs. Eigennutzung",
      "Präzise Fliesen- und Anschlussarbeiten in Bädern und Küchen",
      "Lichtplanung zusammen mit Trockenbau für moderne Raumwirkung",
      "Termintreue durch realistische Planung statt überoptimistischer Versprechen",
    ],
    localFacts: [
      {
        label: "Stadtteile",
        text: "Neviges, Langenberg und Mitte unterscheiden sich in Verkehrsanbindung und Gebäudetypen – wir passen Logistik und Materialwahl an.",
      },
      {
        label: "Häufige Wünsche",
        text: "Offene Küchenbereiche, neue Bäder, mehr Stauraum, bessere Beleuchtung und aktuelle Oberflächen.",
      },
      {
        label: "Region",
        text: "Im Kreis Mettmann verwurzelt – kurze Wege zu Projekten in Velbert und Nachbarorten.",
      },
    ],
    serviceFocus: {
      title: "Schwerpunkte für Umbau und Sanierung in Velbert",
      intro:
        "Die Liste der möglichen Arbeiten ist lang – entscheidend ist die sinnvolle Kombination. Wir empfehlen nicht „alles auf einmal“, wenn es nicht nötig ist.",
      items: [
        "Komplette Badsanierung mit Dusche oder Wanne, je nach Grundriss und Zielgruppe",
        "Trockenbau für neue Raumzonen, Wände oder Vorsatzschalen",
        "Malerarbeiten inklusive Rissbeseitigung und Vorbereitung für feinere Anstriche",
        "Bodenverlegung mit Schallschutz- und Feuchteaspekten nach Bedarf",
        "Abstimmung mit Küchen- und Möbelmontagen nach zeitlichem Ablauf",
      ],
    },
    sections: [
      {
        title: "Bäder: Abdichtung zuerst, Optik danach",
        body:
          "Ein Bad wirkt nur dann dauerhaft gut, wenn die Ebene unter den Fliesen stimmt. Wir investieren Zeit in Abdichtung, Gefälle und Anschlüsse – bevor die sichtbare Fliese den Raum prägt. Das schützt vor Folgeschäden in Nachbarwohnungen und vor teuren Nachbesserungen.",
      },
      {
        title: "Licht und Raumgefühl",
        body:
          "Viele ältere Grundrisse wirken dunkel. Mit gezieltem Trockenbau, indirektem Licht und der richtigen Farbwahl lässt sich viel erreichen – ohne tragende Wände zu verändern. Wir zeigen Optionen, die zu Ihrer Installation und Ihrem Budget passen.",
      },
      {
        title: "Vermietete Einheiten vs. Eigenheim",
        body:
          "In vermieteten Wohnungen priorisieren wir robuste Oberflächen, einfache Reinigung und klare Übergaben. Im Eigenheim können individuellere Materialien und aufwendigere Details sinnvoll sein – wir beraten ohne Druck in eine Richtung.",
      },
    ],
    faqs: [
      {
        question: "Decken Sie alle Velbert Stadtteile ab?",
        answer:
          "Ja, wir arbeiten in Neviges, Langenberg, Mitte und den weiteren Ortsteilen. Für uns zählt die konkrete Baustelle und die Erreichbarkeit – nicht nur der Name auf dem Ortsschild.",
      },
      {
        question: "Wie vermeiden Sie Staub und Dreck in bewohnten Häusern?",
        answer:
          "Durch Absperrungen, Staubschutztüren, geregelte Entsorgung und saubere Arbeitsschritte. Bei größeren Arbeiten empfehlen wir manchmal, Möbel zu schützen oder Räume zeitweise leer zu räumen – das besprechen wir vorab.",
      },
      {
        question: "Können Sie nur das Bad machen, Rest später?",
        answer:
          "Ja, das ist häufig sinnvoll. Wir achten darauf, spätere Arbeiten nicht zu verbauen – etwa Leerrohre oder Anschlüsse vorausschauend zu setzen.",
      },
      {
        question: "Wie erfolgt die Abnahme?",
        answer:
          "Gemeinsamer Rundgang mit Checkliste, offene Punkte werden notiert und terminiert. So bleiben keine Fragen im Raum, wenn Sie den Raum wieder nutzen.",
      },
    ],
    seoTitle: "Sanierung Velbert | TATLI BAU – Bad, Trockenbau, Neviges & Langenberg",
    seoDescription:
      "Renovierung in Velbert: Badsanierung, Fliesen, Trockenbau, Malerarbeiten. Individuelle Beratung für Ihr Objekt. Jetzt anfragen.",
    heroImage: "/standorte/velbert.jpg",
    heroImageAlt:
      "Stadtansicht und Skyline – Innenausbau und Sanierung in Velbert mit TATLI BAU",
    regionTag: "Velbert & Kreis Mettmann",
  },
];

export const getStandortBySlug = (slug: string) =>
  STANDORTE.find((s) => s.slug === slug);
