export type StandortTheme = "dark" | "slate" | "warm";

export type StandortData = {
  slug: string;
  name: string;
  theme: StandortTheme;
  headline: string;
  subline: string;
  intro: string;
  introHighlight: string;
  highlightsSectionTitle: string;
  highlightsSectionLead: string;
  highlights: string[];
  localFacts: { label: string; text: string }[];
  serviceFocus: {
    title: string;
    intro: string;
    items: string[];
  };
  sections: { title: string; body: string }[];
  faqs: { question: string; answer: string }[];
  seoTitle: string;
  seoDescription: string;
  heroImage: string;
  heroImageAlt: string;
  regionTag: string;
  stats?: { value: string; label: string }[];
};

export const STANDORTE: StandortData[] = [
  /* ══════════════════════════════════════════════════════════════════════
     GEVELSBERG – Heimatstandort, direkt vor Ort
  ══════════════════════════════════════════════════════════════════════ */
  {
    slug: "gevelsberg",
    name: "Gevelsberg",
    theme: "dark",
    headline: "Ihr Handwerksbetrieb direkt in Gevelsberg",
    subline: "Heimatstandort – persönlich, schnell, zuverlässig",
    intro:
      "Zakho Bau hat seinen Sitz an der Hagener Straße 44 in Gevelsberg – mitten in der Stadt, die wir kennen wie kaum eine andere. Wir kennen die Gebäude in Silschede und Vogelsang, die Altbauten entlang der Hagener Straße aus dem Jahr 1898 und die neueren Wohnquartiere in Gevelsberg-Mitte. Kurze Anfahrten, schnelle Reaktionszeiten und ein Inhaber, der persönlich vor Ort erscheint – das ist unser Angebot an Gevelsberger Auftraggeber.",
    introHighlight:
      "Als lokaler Betrieb mit Ladenlokal in Gevelsberg sind wir keine 24 Stunden nach Ihrer Anfrage vor Ort – für Besichtigungen, Schadensbewertungen und Angebotserstellung.",
    highlightsSectionTitle: "Warum Gevelsberger Auftraggeber uns wählen",
    highlightsSectionLead:
      "Kein Betrieb kennt Gevelsberg besser als wir. Das zeigt sich bei jedem Projekt – von Vogelsang bis Silschede.",
    highlights: [
      "Ladenlokal an der Hagener Str. 44 – persönlich erreichbar Mo–Fr 08–17 Uhr",
      "Heimatbetrieb: keine Anfahrtskosten, kurze Reaktionszeiten im gesamten Stadtgebiet",
      "Kenntnis der lokalen Bausubstanz: Altbauten ab 1898 bis zu Neubauprojekten in Silschede",
      "Festpreise möglich – transparentes Angebot nach Besichtigung",
    ],
    localFacts: [
      {
        label: "Stadtteile",
        text: "Gevelsberg-Mitte, Silschede, Vogelsang, Berge-Knapp – wir sind überall im Stadtgebiet unterwegs.",
      },
      {
        label: "Bausubstanz",
        text: "Altbauten ab ca. 1898 an der Hagener Straße, Nachkriegsbestand und neue Wohngebiete wie Ellinghauser Weg in Silschede.",
      },
      {
        label: "Reaktionszeit",
        text: "Als Heimatbetrieb vereinbaren wir Besichtigungstermine oft noch am selben oder nächsten Werktag.",
      },
    ],
    serviceFocus: {
      title: "Unsere Leistungsschwerpunkte in Gevelsberg",
      intro:
        "Von der kleinen Nachbesserung bis zur Komplettrenovierung – wir übernehmen alle Arbeiten rund um Ihr Gebäude in Gevelsberg.",
      items: [
        "Altbausanierung in Gevelsberg-Mitte und Vogelsang",
        "Badsanierung inkl. Fliesen, Trockenbau und Sanitäranschlüsse",
        "Wohnungsrenovierung vor Vermietung oder Eigeneinzug",
        "Trockenbau für neue Raumaufteilungen und Dachgeschossausbau",
        "Malerarbeiten, Tapezieren und Bodenverlegung (Parkett, Laminat, Vinyl)",
        "Fassadenanstrich und Außenarbeiten rund ums Haus",
      ],
    },
    sections: [
      {
        title: "Gevelsberg: Altbau und Neubau – beides kennen wir",
        body:
          "An der Hagener Straße stehen noch Gebäude aus dem Baujahr 1898. In Silschede entsteht gerade ein neues Wohnquartier am Ellinghauser Weg. Zakho Bau kennt beide Welten: Wir bewerten Altbausubstanz realistisch, zeigen Ihnen was sofort erledigt werden muss – und was warten kann. Bei Neubauten und modernen Wohnungen arbeiten wir präzise nach Plan.",
      },
      {
        title: "Stadtumbau Berge-Knapp und Vogelsang",
        body:
          "In Stadtumbaugebieten wie Berge-Knapp und Vogelsang sind Modernisierungen besonders gefragt. Wir kennen die typischen Grundrisse und die häufigsten Sanierungsbedarfe in diesen Quartieren – das spart Zeit bei der Planung und vermeidet unliebsame Überraschungen auf der Baustelle.",
      },
    ],
    faqs: [
      {
        question: "Haben Sie ein Ladenlokal in Gevelsberg?",
        answer:
          "Ja. Sie finden uns an der Hagener Straße 44 in 58285 Gevelsberg, Mo–Fr von 08 bis 17 Uhr. Ein kurzer Anruf vorab ist hilfreich, damit wir uns Zeit für Sie nehmen können.",
      },
      {
        question: "Arbeiten Sie auch in Silschede und Vogelsang?",
        answer:
          "Selbstverständlich – wir sind im gesamten Gevelsberger Stadtgebiet tätig, inklusive aller Ortsteile.",
      },
      {
        question: "Was kostet eine Badsanierung in Gevelsberg ungefähr?",
        answer:
          "Das hängt stark von Größe und Ausstattung ab. Nach einer kostenlosen Besichtigung erhalten Sie ein detailliertes Angebot. Festpreise sind möglich, wenn der Umfang klar ist.",
      },
      {
        question: "Können Sie auch kurzfristig einen Schaden beseitigen?",
        answer:
          "Als Heimatbetrieb reagieren wir schnell. Bei dringenden Schäden, z. B. nach einem Wasserschaden, melden wir uns in der Regel noch am selben Tag.",
      },
    ],
    seoTitle: "Handwerker Gevelsberg | Zakho Bau – Badsanierung, Renovierung, Trockenbau",
    seoDescription:
      "Zakho Bau – Ihr Handwerksbetrieb in Gevelsberg (Hagener Str. 44). Badsanierung, Renovierung, Trockenbau, Maler. Heimatbetrieb mit schnellen Reaktionszeiten. Jetzt anfragen!",
    heroImage: "/standorte/gevelsberg.jpg",
    heroImageAlt: "Gevelsberg – Handwerk und Sanierung mit Zakho Bau",
    regionTag: "Gevelsberg & Ennepe-Ruhr-Kreis",
    stats: [
      { value: "10+", label: "Jahre in Gevelsberg" },
      { value: "< 24h", label: "Rückmeldung" },
      { value: "1", label: "fester Ansprechpartner" },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════════
     ENNEPETAL – Historische Bausubstanz, Milspe & Voerde
  ══════════════════════════════════════════════════════════════════════ */
  {
    slug: "ennepetal",
    name: "Ennepetal",
    theme: "warm",
    headline: "Sanierung & Renovierung in Ennepetal – von Milspe bis Voerde",
    subline: "Erfahrung mit bergischer Bausubstanz und denkmalgeschützten Gebäuden",
    intro:
      "Ennepetal hat eine besondere Baugeschichte: In den Stadtteilen Milspe, Voerde und Altenvoerde stehen denkmalgeschützte Gründerzeit-Klinkerbauten, Jugendstilvil­len und die berühmte Genossenschaftssiedlung aus den Jahren 1912/13 an der Kettelerstraße. Diese bergische Bausubstanz stellt besondere Anforderungen – an Material, Technik und Fingerspitzengefühl. Zakho Bau kennt diese Anforderungen und führt Renovierungen und Sanierungen in Ennepetal mit dem nötigen Respekt vor der Bausubstanz durch.",
    introHighlight:
      "Ob historischer Klinkerbau an der Voerder Straße oder Nachkriegswohnanlage in Altenvoerde – wir besichtigen vor Ort und beraten Sie ehrlich zu Möglichkeiten und Kosten.",
    highlightsSectionTitle: "Was Ennepetaler Auftraggeber von uns erwarten dürfen",
    highlightsSectionLead:
      "Kenntnis der bergischen Bauweise, sorgfältige Ausführung an historischer Substanz und kurze Wege aus unserem Heimatstandort Gevelsberg.",
    highlights: [
      "Erfahrung mit Klinker-, Fachwerk- und Putzfassaden aus der Gründerzeit",
      "Kenntnis der denkmalgeschützten Gebäude in Milspe und Altenvoerde",
      "Kurze Anfahrt aus Gevelsberg – keine Mehrkosten für normale Projekte",
      "Persönlicher Ansprechpartner vom ersten Kontakt bis zur Abnahme",
    ],
    localFacts: [
      {
        label: "Stadtteile",
        text: "Milspe (Stadtmitte), Voerde, Altenvoerde, Rüggeberg – wir sind in ganz Ennepetal tätig.",
      },
      {
        label: "Bausubstanz",
        text: "Gründerzeit-Klinkerbauten (1887–1912), Jugendstilvillen, bergische Fachwerkhäuser und Nachkriegsgebäude.",
      },
      {
        label: "Besonderheit",
        text: "Mehrere denkmalgeschützte Ensembles (z. B. Siedlung Milspe, Voerder Str. 11) erfordern besondere Sorgfalt.",
      },
    ],
    serviceFocus: {
      title: "Leistungsschwerpunkte in Ennepetal",
      intro:
        "In Ennepetal führen wir alle Bauleistungen durch – mit besonderem Augenmerk auf historische und denkmalgeschützte Gebäude.",
      items: [
        "Instandsetzung und Renovierung von Gründerzeitbauten",
        "Fassadenanstrich und Putzarbeiten an historischen Gebäuden",
        "Badsanierung in Altbauwohnungen inkl. Feuchteabdichtung",
        "Trockenbau und Innenausbau für neue Raumaufteilungen",
        "Malerarbeiten und Tapezieren in Wohnungen aller Baualtersklassen",
        "Bodenverlegung: Parkett und Fliesen für historische und moderne Räume",
      ],
    },
    sections: [
      {
        title: "Milspe und die bergische Baukultur",
        body:
          "Die denkmalgeschützte Genossenschaftssiedlung an der Kettelerstraße, die historistischen Klinkerbauten an der Voerder Straße oder die Jugendstilvilla Ebbinghaus in Altenvoerde – Ennepetal hat eine außergewöhnlich dichte Konzentration historisch wertvoller Gebäude. Bei der Sanierung solcher Objekte kommt es auf Materialkenntnis an: Kalkmörtel statt Zement, atmungsaktive Farben und schonende Verfahren, die die Substanz erhalten.",
      },
      {
        title: "Wohnungssanierung vor Vermietung oder Verkauf",
        body:
          "Viele unserer Ennepetaler Auftraggeber vermieten ihre Wohnung neu oder bereiten einen Verkauf vor. Wir zeigen Ihnen, welche Maßnahmen wirklich den Unterschied machen – und welche Sie sich sparen können. Frische Wände, ein saniertes Bad und neuer Boden verändern den ersten Eindruck bei potenziellen Mietern erheblich.",
      },
    ],
    faqs: [
      {
        question: "Arbeiten Sie auch an denkmalgeschützten Gebäuden in Ennepetal?",
        answer:
          "Ja. Wir kennen die typischen Materialien und Verfahren für Gründerzeitbauten und stimmen uns bei Bedarf mit der zuständigen Denkmalbehörde ab.",
      },
      {
        question: "Wie weit ist Ennepetal von Ihrem Standort entfernt?",
        answer:
          "Ennepetal grenzt direkt an Gevelsberg – wir sind in wenigen Minuten vor Ort und berechnen keine Anfahrtskosten für Projekte normaler Größe.",
      },
      {
        question: "Können Sie Wohnungsrenovierungen in bewohntem Zustand durchführen?",
        answer:
          "Bei kleineren Maßnahmen ja. Wir stimmen den Ablauf so ab, dass Bewohner möglichst wenig beeinträchtigt werden – und klären das vorab offen mit Ihnen.",
      },
      {
        question: "Was umfasst eine typische Badsanierung?",
        answer:
          "Demontage der Altinstallation, Abdichtung (Dusch- und Nassbereiche), Fliesenverlegung, Trockenbauarbeiten, Sanitäranschlüsse und Endmontage. Alles aus einer Hand, ein Ansprechpartner.",
      },
    ],
    seoTitle: "Renovierung Ennepetal | Zakho Bau – Altbau, Badsanierung, Fliesen Milspe",
    seoDescription:
      "Zakho Bau in Ennepetal: Renovierung von Gründerzeitbauten, Badsanierung, Malerarbeiten und Trockenbau in Milspe, Voerde und Altenvoerde. Jetzt kostenloses Angebot anfragen!",
    heroImage: "/standorte/ennepetal.jpg",
    heroImageAlt: "Ennepetal – Renovierung historischer Bausubstanz mit Zakho Bau",
    regionTag: "Ennepetal & Ennepe-Ruhr-Kreis",
  },

  /* ══════════════════════════════════════════════════════════════════════
     SCHWELM – Kreisstadt, bergisches Fachwerk & Altstadt
  ══════════════════════════════════════════════════════════════════════ */
  {
    slug: "schwelm",
    name: "Schwelm",
    theme: "slate",
    headline: "Sanierung & Umbau in Schwelm – der Kreisstadt des Ennepe-Ruhr-Kreises",
    subline: "Bergisches Fachwerk, Gründerzeit-Villen und Nachkriegsbestand – alles aus einer Hand",
    intro:
      "Schwelm ist die Kreisstadt des Ennepe-Ruhr-Kreises und beherbergt eine bemerkenswerte Baugeschichte: verschieferte Fachwerkhäuser im bergischen Stil in der Altstadt, Gründerzeit-Villen nördlich der Fußgängerzone und dicht besiedelte Nachkriegsquartiere in Stadtteilen wie Möllenkotten, Oehde und Linderhausen. Das Mietpreisniveau lag 2026 bei rund 8,50 €/m² – ein Markt, in dem gut sanierte Wohnungen deutlich besser vermietet werden als unrenovierter Bestand.",
    introHighlight:
      "In Schwelm schauen wir bei der Besichtigung nicht nur, was schön wäre – sondern was wirklich nötig ist und den größten Effekt für Vermietbarkeit oder Wohnqualität hat.",
    highlightsSectionTitle: "Was Schwelmer Auftraggeber von uns erwarten",
    highlightsSectionLead:
      "Klare Prioritäten, ehrliche Kosten und ein Handwerk, das mit bergischer Bausubstanz umgehen kann.",
    highlights: [
      "Erfahrung mit verschieferten Fachwerkhäusern und Altbauten der Schwelmer Innenstadt",
      "Kenntnisse der Gründerzeit-Bauweise (Neorenaissance, Stuckfassaden, Holzböden)",
      "Realistisches Budget-Feedback: Wir sagen Ihnen, was sich lohnt und was nicht",
      "Dokumentation für Vermietung, Verkauf oder Versicherung nach Absprache",
    ],
    localFacts: [
      {
        label: "Stadtstruktur",
        text: "Kreisstadt mit ca. 28.800 Einwohnern. Altstadt mit Kirchstraße 5 (eines der ältesten Häuser, Stadtbrand 1722 überlebt), Gründerzeit-Villen und Fußgängerzone.",
      },
      {
        label: "Bausubstanz",
        text: "Denkmalgeschützte Fachwerkhäuser im bergischen Stil (schwarz-weiß-grün), Neorenaissance-Stuckfassaden, Nachkriegsbauten in Möllenkotten und Oehde.",
      },
      {
        label: "Mietmarkt",
        text: "Ø 8,50 €/m² für Wohnungen (2026). Gut sanierte Objekte erzielen spürbar höhere Mieten – ein Investment, das sich rechnet.",
      },
    ],
    serviceFocus: {
      title: "Leistungsschwerpunkte in Schwelm",
      intro:
        "In Schwelm konzentrieren wir uns besonders auf Innenrenovierungen, Badsanierungen und Arbeiten, die den Wert der Immobilie steigern.",
      items: [
        "Innenrenovierung für Vermieter und Eigentümer vor Neuvermietung",
        "Badsanierung mit Fokus auf Dichtigkeit, Komfort und moderne Optik",
        "Fachgerechte Putzarbeiten und Malerarbeiten an historischen Fassaden",
        "Trockenbau für neue Raumteilungen und abgehängte Decken",
        "Bodenverlegung: Laminat, Vinyl oder Fliesen je nach Nutzung",
        "Instandsetzung nach Wasserschäden inkl. Dokumentation",
      ],
    },
    sections: [
      {
        title: "Schwelmer Altbau: Was wir vor der Sanierung prüfen",
        body:
          "Fachwerkhäuser im Bergischen Land haben oft unebene Wände, unterschiedliche Deckenhöhen und Konstruktionen, die man nicht auf den ersten Blick erkennt. Bevor wir ein Angebot erstellen, klären wir bei der Besichtigung: Welche Wände sind tragend? Gibt es Feuchteschäden im Mauerwerk? Wie ist die Substanz der Böden und Decken? Das verhindert böse Überraschungen mitten in der Sanierung.",
      },
      {
        title: "Vor Vermietung oder Verkauf in Schwelm",
        body:
          "Der Schwelmer Wohnungsmarkt belohnt gepflegten Bestand. Wir zeigen Ihnen, welche Investitionen Mieter und Käufer tatsächlich wahrnehmen – neue Badezimmerfliesen, frische Wände und ein sauberer Bodenbelag machen oft den entscheidenden Unterschied. Für größere Maßnahmen erstellen wir eine priorisierte Liste, damit Sie wissen, was zuerst erledigt werden sollte.",
      },
    ],
    faqs: [
      {
        question: "Arbeiten Sie auch in Schwelm an denkmalgeschützten Fachwerkhäusern?",
        answer:
          "Ja. Wir kennen die bergische Bauweise und verwenden bei historischen Gebäuden geeignete Materialien – zum Beispiel Kalkputze und diffusionsoffene Farben, die die Fachwerkkonstruktion schützen.",
      },
      {
        question: "Können Sie auch nach einem Wasserschaden in Schwelm helfen?",
        answer:
          "Ja: Befund aufnehmen, betroffene Bereiche austauschen, Oberflächen wiederherstellen. Auf Wunsch erstellen wir eine Dokumentation für die Versicherung.",
      },
      {
        question: "Was ist der Vorteil eines Festpreisangebots?",
        answer:
          "Sie wissen von Anfang an, was Sie ausgeben. Wo der Umfang klar definiert ist – z. B. bei einer Badsanierung mit festgelegten Materialien – bieten wir Festpreise an. Wenn sich der Befund ändert, informieren wir sofort.",
      },
      {
        question: "Führen Sie auch nur einzelne Gewerke durch, z. B. nur Malerarbeiten?",
        answer:
          "Ja, je nach Kapazität auch Einzelleistungen. Sprechen Sie uns konkret an – wir sagen ehrlich, ob und wann wir den Auftrag übernehmen können.",
      },
    ],
    seoTitle: "Sanierung Schwelm | Zakho Bau – Altbau, Bad, Malerarbeiten Kreisstadt",
    seoDescription:
      "Zakho Bau in Schwelm: Badsanierung, Renovierung, Malerarbeiten und Instandsetzung. Erfahrung mit bergischem Altbau und Fachwerkhäusern. Jetzt kostenloses Angebot anfragen!",
    heroImage: "/standorte/schwelm.jpg",
    heroImageAlt: "Schwelm – Altbausanierung und Handwerk mit Zakho Bau",
    stats: [
      { value: "10+", label: "Jahre Erfahrung" },
      { value: "< 24h", label: "Rückmeldung" },
      { value: "1", label: "fester Ansprechpartner" },
    ],
    regionTag: "Schwelm & Ennepe-Ruhr-Kreis",
  },

  /* ══════════════════════════════════════════════════════════════════════
     HAGEN – Großstadt, Gründerzeit-Altbau Wehringhausen & Hohenlimburg
  ══════════════════════════════════════════════════════════════════════ */
  {
    slug: "hagen",
    name: "Hagen",
    theme: "dark",
    headline: "Altbau-Sanierung & Renovierung in Hagen",
    subline: "Gründerzeit, Hohenlimburg, Haspe & Wehringhausen – mit Fachkenntnis und Verlässlichkeit",
    intro:
      "Hagen ist mit rund 188.000 Einwohnern die größte Stadt in unserem Einsatzgebiet – und eine der baulich interessantesten. Wehringhausen hat mit fast 60 % einen der höchsten Altbauanteile von vor 1948 in ganz NRW. Hohenlimburg besticht durch seinen historischen Kern rund um Schloss Hohenlimburg. Haspe und Boele bieten günstigere Lagen mit hohem Aufwertungspotenzial. Zakho Bau übernimmt Sanierungs- und Innenausbauarbeiten in allen Hagener Stadtbezirken – mit Erfahrung, die in Gründerzeit-Altbauten den Unterschied macht.",
    introHighlight:
      "In Hagen kalkulieren wir Anfahrten und Materiallieferungen effizient in den Projektablauf ein – ohne versteckte Mehrkosten für Sie als Auftraggeber.",
    highlightsSectionTitle: "Warum Hagener Auftraggeber auf Zakho Bau setzen",
    highlightsSectionLead:
      "Erfahrung mit Altbau-Sanierungen, klare Kommunikation über Befunde und Kosten – und ein Handwerk, das die Gebäudestruktur in Hagen kennt.",
    highlights: [
      "Kenntnis der Hagener Baualtersstruktur: Gründerzeit in Wehringhausen, Historismus in Hohenlimburg",
      "Realistische Befundaufnahme bei Altbau: Feuchte, Schäden und Überraschungen früh erkennen",
      "Klare Angebote ohne versteckte Positionen – auch für größere Projekte",
      "Direkte Kommunikation: Der Inhaber bleibt Ihr persönlicher Ansprechpartner",
    ],
    localFacts: [
      {
        label: "Stadtbezirke",
        text: "Hagen-Mitte/Nord, Wehringhausen (sanierte Altbauten, Volme-Nähe), Hohenlimburg (historischer Kern, Schloss), Haspe, Eilpe-Dahl, Boele.",
      },
      {
        label: "Altbauanteil",
        text: "Wehringhausen-West: ca. 60 % der Wohngebäude aus der Zeit vor 1948 – einer der höchsten Werte in NRW.",
      },
      {
        label: "Immobilienpreise 2026",
        text: "Wehringhausen: 2.400–3.000 €/m² (sanierte Altbauten). Hohenlimburg: 2.200–2.800 €/m². Haspe: 1.400–1.800 €/m² (günstigstes Segment, hohes Aufwertungspotenzial).",
      },
    ],
    serviceFocus: {
      title: "Leistungsschwerpunkte in Hagen",
      intro:
        "In Hagen sind wir besonders auf Altbau-Sanierungen und Wohnungsrenovierungen in Gründerzeithäusern spezialisiert.",
      items: [
        "Gründerzeit-Altbau: Instandsetzung von Stuck, Holzböden und historischen Wandoberflächen",
        "Badsanierung in Altbauwohnungen – inkl. Abdichtung und Trockenbau",
        "Wohnungsrenovierung vor Vermietung oder Wiederverkauf in Wehringhausen und Hohenlimburg",
        "Trockenbau für neue Grundrisse in Mehrfamilienhäusern",
        "Malerarbeiten: Putzsanierung, Spachtelarbeiten und Neuanstrich",
        "Fassadenanstrich und kleinere Außenarbeiten auch in Haspe und Eilpe",
      ],
    },
    sections: [
      {
        title: "Gründerzeit-Altbau in Hagen: Besonderheiten und Risiken",
        body:
          "Wehringhausen und Hohenlimburg sind geprägt von massiver Vorkriegsbausubstanz. Typische Herausforderungen: Feuchtigkeit im Mauerwerk und in Kellern, marode Holzdielen, historische Wand- und Deckenkonstruktionen ohne Schallschutz und Stromleitungen, die nicht den heutigen Normen entsprechen. Wir nehmen bei der Besichtigung Zeit, um diese Punkte zu prüfen – so enthält Ihr Angebot realistische Positionen und keine Risiken.",
      },
      {
        title: "Haspe & Hohenlimburg: Sanieren lohnt sich",
        body:
          "In Haspe liegen Kaufpreise noch bei 1.400–1.800 €/m² – ein Markt, der gut sanierten Wohnraum belohnt. Hohenlimburg kombiniert historischen Charme mit naturnaher Lage am Lennetal. In beiden Stadtteilen haben wir Projekte durchgeführt und kennen die typischen Sanierungsbedarfe der dortigen Bestandsgebäude. Ein gut geplantes Renovierungsbudget zahlt sich hier schnell aus.",
      },
    ],
    faqs: [
      {
        question: "Arbeiten Sie in ganz Hagen – auch in Haspe und Hohenlimburg?",
        answer:
          "Ja, wir betreuen Projekte in allen Hagener Stadtbezirken: Mitte, Nord, Wehringhausen, Hohenlimburg, Haspe, Eilpe-Dahl und Boele.",
      },
      {
        question: "Gibt es Mehrkosten für die Anfahrt nach Hagen?",
        answer:
          "Bei größeren Projekten fällt die Anfahrt nicht ins Gewicht und wird im Angebot berücksichtigt. Für kleinere Einzelleistungen klären wir das transparent vorab.",
      },
      {
        question: "Wie gehen Sie mit verdeckten Schäden im Altbau um?",
        answer:
          "Wir stoppen die Arbeit, dokumentieren den Befund mit Fotos und sprechen sofort mit Ihnen. Dann besprechen wir gemeinsam Optionen mit klaren Kostenfolgen – ohne Überraschungen auf der Schlussrechnung.",
      },
      {
        question: "Führen Sie auch Gründerzeitbau-Sanierungen in Wehringhausen durch?",
        answer:
          "Ja. Altbau ist unser Alltag. Stuck, Holzdielen, Kalkputz – wir kennen die Materialien und Methoden, mit denen historische Bausubstanz langfristig erhalten wird.",
      },
    ],
    seoTitle: "Altbau-Sanierung Hagen | Zakho Bau – Wehringhausen, Hohenlimburg, Haspe",
    seoDescription:
      "Zakho Bau in Hagen: Altbau-Sanierung, Badsanierung, Trockenbau und Malerarbeiten in Wehringhausen, Hohenlimburg und Haspe. Erfahrung mit Gründerzeit-Gebäuden. Jetzt anfragen!",
    heroImage: "/standorte/hagen.jpg",
    heroImageAlt: "Hagen – Altbau-Sanierung und Renovierung mit Zakho Bau",
    regionTag: "Hagen & Umgebung",
  },

  /* ══════════════════════════════════════════════════════════════════════
     WUPPERTAL – Hanglagen, Gründerzeit, Schwebebahn-Stadt
  ══════════════════════════════════════════════════════════════════════ */
  {
    slug: "wuppertal",
    name: "Wuppertal",
    theme: "slate",
    headline: "Renovierung & Sanierung in Wuppertal – mit Hanglagen-Expertise",
    subline: "Elberfeld, Barmen & die bergischen Gründerzeithäuser – fachgerecht saniert",
    intro:
      "Wuppertal ist anders als andere Städte: Das Tal der Wupper, die steilen Hanglagen und die zwei historischen Stadtzentren Elberfeld und Barmen prägen jeden Bauauftrag. Gründerzeitliche Villenviertel wie Brill, Zoo und Toelleturm, Schieferfassaden im bergischen Stil und feuchtegefährdete Keller durch Hangwasser – wer hier saniert, braucht Erfahrung mit den spezifischen Anforderungen dieser Stadt. Zakho Bau bringt genau diese Erfahrung mit.",
    introHighlight:
      "Bei Sanierungen in Wuppertaler Hanglagen planen wir Materialtransport, Gerüstbau und Zugangswege gezielt ein – damit keine unnötigen Mehrkosten entstehen und der Zeitplan hält.",
    highlightsSectionTitle: "Warum Wuppertaler Auftraggeber Zakho Bau wählen",
    highlightsSectionLead:
      "Hanglagen-Kenntnis, Erfahrung mit bergischer Gründerzeitarchitektur und ein klares Wort zur Bausubstanz – ohne Schönfärberei.",
    highlights: [
      "Erfahrung mit Hanglagen: Logistik, Gerüst und Zugangswege werden mitgeplant",
      "Kenntnisse der bergischen Bautradition: Schieferfassaden, Fachwerkkonstruktionen, Kalkputze",
      "Feuchte Keller durch Hangwasser: wir erkennen die Ursachen und empfehlen wirksame Lösungen",
      "Transparente Angebote – auch wenn das Ergebnis der Befundaufnahme unbequem ist",
    ],
    localFacts: [
      {
        label: "Stadtteile",
        text: "Elberfeld, Barmen, Vohwinkel, Ronsdorf, Cronenberg, Beyenburg – wir arbeiten im gesamten Wuppertaler Stadtgebiet.",
      },
      {
        label: "Besondere Herausforderung",
        text: "Hanglagen mit erdberührten Kellerwänden, unterschiedliche Geschosshöhen und hohe Niederschlagsmengen erhöhen das Feuchtigkeitsrisiko in älteren Gebäuden.",
      },
      {
        label: "Bausubstanz",
        text: "Größte zusammenhängende Villenviertel der Gründerzeit in NRW (Brill, Zoo, Toelleturm), Schieferhäuser in Cronenberg und Beyenburg, Nachkriegsbauten in Vohwinkel.",
      },
    ],
    serviceFocus: {
      title: "Leistungsschwerpunkte in Wuppertal",
      intro:
        "In Wuppertal arbeiten wir besonders häufig an Gründerzeitgebäuden, Hanglagen und Objekten mit Feuchtigkeitsproblemen.",
      items: [
        "Altbausanierung in Elberfeld und Barmen: Putz, Böden, Trockenbau",
        "Badsanierung mit besonderer Abdichtung in feuchtigkeitsgefährdeten Altbauten",
        "Malerarbeiten in Villenhäusern der Gründerzeit inkl. Stuckrestaurierung",
        "Fassadenanstrich an Schieferhäusern in Cronenberg und Beyenburg",
        "Trockenbau für neue Raumaufteilungen in Mehrfamilienhäusern",
        "Bodenverlegung (Parkett, Vinyl, Fliesen) in Wohnungen aller Baualtersklassen",
      ],
    },
    sections: [
      {
        title: "Feuchte Keller in Wuppertaler Hanglagen",
        body:
          "Wuppertal zählt zu den regenreichsten Städten im Ruhrgebiet, und viele Häuser in Hanglagen kämpfen mit aufsteigender Feuchtigkeit oder Druckwasser an den Kellerwänden. Typische Anzeichen: Abplatzender Putz, Salzausblühungen, Schimmelflecken. Bevor wir hier sanieren, klären wir die Ursache: Fehlt eine Horizontalsperre? Ist die Drainage verstopft? Liegt das Gebäude im Bereich von Hangwasser? Je nach Befund empfehlen wir die passende Lösung – von Sanierputz bis zur Abdichtung von außen.",
      },
      {
        title: "Gründerzeit-Villen in Elberfeld und Barmen",
        body:
          "Die Villengebiete Brill, Zoo und Toelleturm sind architektonisch einzigartig und für Renovierungsprojekte eine besondere Aufgabe. Hohe Stuckdecken, Holzparkett aus der Jahrhundertwende, historische Holztüren und Treppenhäuser – all das verdient eine sorgfältige Bestandsaufnahme, bevor der erste Nagel gesetzt wird. Wir bewahren, was erhaltenswert ist, und sanieren das, was nicht mehr dem heutigen Standard entspricht.",
      },
    ],
    faqs: [
      {
        question: "Wie planen Sie Projekte in Wuppertaler Hanglagen?",
        answer:
          "Wir besichtigen das Objekt vor der Angebotserstellung und prüfen Zufahrten, Gerüstmöglichkeiten und Materialtransportwege. Das wird im Angebot berücksichtigt – keine Überraschungen beim Rechnungsbetrag.",
      },
      {
        question: "Was tun bei einem feuchten Keller in einem Altbau?",
        answer:
          "Zuerst die Ursache klären: aufsteigende Feuchtigkeit, Druckwasser oder undichte Leitungen verursachen unterschiedliche Schäden und erfordern verschiedene Lösungen. Wir besichtigen und beraten Sie ehrlich zu den Optionen.",
      },
      {
        question: "Arbeiten Sie auch in Cronenberg und Beyenburg?",
        answer:
          "Ja. Wir sind im gesamten Wuppertaler Stadtgebiet tätig – auch in den peripheren Stadtteilen mit bergischer Bausubstanz.",
      },
      {
        question: "Können Sie auch Modernisierungen für Vermieter mit mehreren Einheiten abwickeln?",
        answer:
          "Ja. Wir dokumentieren Fortschritt und Leistungsumfang nachvollziehbar und kommunizieren so, dass auch Eigentümer, die nicht vor Ort sind, jederzeit informiert sind.",
      },
    ],
    seoTitle: "Renovierung Wuppertal | Zakho Bau – Altbau Elberfeld, Barmen, Hanglagen",
    seoDescription:
      "Zakho Bau in Wuppertal: Altbau-Sanierung in Elberfeld und Barmen, Badsanierung, Trockenbau, Malerarbeiten. Erfahrung mit Hanglagen und Gründerzeitgebäuden. Jetzt anfragen!",
    heroImage: "/standorte/wuppertal.jpg",
    heroImageAlt: "Wuppertal – Altbau-Sanierung und Renovierung mit Zakho Bau",
    regionTag: "Wuppertal & Bergisches Land",
  },

  /* ══════════════════════════════════════════════════════════════════════
     WITTEN – Ruhrtal, Kemnader See, Stadterneuerung Heven
  ══════════════════════════════════════════════════════════════════════ */
  {
    slug: "witten",
    name: "Witten",
    theme: "warm",
    headline: "Renovierung & Fassadensanierung in Witten – Ruhrtal & Kemnader See",
    subline: "Von Heven bis Annen: Qualitätshandwerk für alle Wittener Stadtteile",
    intro:
      "Witten liegt zwischen dem Ruhrtaler Grün, dem Kemnader Stausee und dem bergbaugeprägten Stadtbild der Gründerzeit. Die Stadtteile unterscheiden sich stark: Heven ist Wittens teuerste Wohnlage und liegt direkt am Kemnader See – hier sind Objekte rar und Qualität entscheidend. Annen ist der zentrale, gut angebundene Stadtteil für Pendler. Stockum bietet ruhiges Wohnen im Grünen. Und im Stadterneuerungsgebiet Heven-Ost/Crengeldanz fördert die Stadt Witten aktuell Fassaden- und Hofsanierungen für Eigentümer. Zakho Bau ist in allen Wittener Stadtteilen für Sie tätig.",
    introHighlight:
      "Im Wittener Fassadenprogramm (Stadterneuerungsgebiet Heven-Ost/Crengeldanz) werden Außenanstriche und Fassadenarbeiten öffentlich gefördert – fragen Sie uns, ob Ihr Objekt förderfähig ist.",
    highlightsSectionTitle: "Was Wittener Auftraggeber von uns erwarten dürfen",
    highlightsSectionLead:
      "Zuverlässige Ausführung, Kenntnis der Wittener Wohnlagen und ein offener Hinweis, wenn Fördergelder für Ihre Maßnahme in Frage kommen.",
    highlights: [
      "Kenntnis der Wittener Stadtteile: Heven, Annen, Stockum, Herbede, Heven-Ost",
      "Hinweis auf Fördermöglichkeiten im Stadterneuerungsgebiet Heven-Ost/Crengeldanz",
      "Fassadensanierung, Außenanstrich und Bodenverlegung aus einer Hand",
      "Termintreue und transparente Kosten – auch im erweiterten Einsatzgebiet",
    ],
    localFacts: [
      {
        label: "Stadtteile",
        text: "Heven (Premium-Lage am Kemnader See), Annen (zentral, Pendler), Stockum (ruhig, familienfreundlich), Herbede, Crengeldanz, Heven-Ost.",
      },
      {
        label: "Immobilienpreise 2026",
        text: "Heven (Toplage): 2.500–3.800 €/m². Mittlere Lagen (Stockum, Annen, Herbede): 280.000–420.000 € für Häuser. Stabiler Markt mit Nachfrageüberschuss.",
      },
      {
        label: "Stadterneuerung",
        text: "Im Fördergebiet Heven-Ost/Crengeldanz unterstützt die Stadt Witten Fassadensanierungen und Hofsanierungen mit Zuschüssen. Wir beraten Sie bei der Antragstellung.",
      },
    ],
    serviceFocus: {
      title: "Leistungsschwerpunkte in Witten",
      intro:
        "In Witten führen wir vor allem Fassadenarbeiten, Innenrenovierungen und Badsanierungen durch – mit Blick auf die lokalen Förderkulissen.",
      items: [
        "Fassadenanstrich und Außenputz – auch im geförderten Bereich Heven-Ost",
        "Badsanierung in Altbau- und Nachkriegswohnungen in Annen und Herbede",
        "Wohnungsrenovierung vor Vermietung oder Eigennutzung in Heven und Stockum",
        "Trockenbau und Innenausbau in Mehrfamilienhäusern",
        "Bodenverlegung: Parkett für gehobene Lagen, Vinyl und Laminat für Mietwohnungen",
        "Malerarbeiten und Tapezieren für Privatpersonen und Vermieter",
      ],
    },
    sections: [
      {
        title: "Heven und der Kemnader See: Qualität, die bleibt",
        body:
          "In der Premium-Lage Heven sind Objekte selten und Auftraggeber anspruchsvoll – zu Recht. Wir arbeiten hier mit besonderem Augenmerk auf Details: saubere Übergänge beim Bodenbelag, exakte Fugenbilder im Bad, makellose Wandoberflächen nach dem Malerauftrag. In einer Wohnlage, in der Preise von 2.500 bis 3.800 €/m² erzielt werden, macht die Ausführungsqualität den Unterschied.",
      },
      {
        title: "Heven-Ost und Crengeldanz: Fördergelder für Fassadensanierung",
        body:
          "Die Stadt Witten fördert im Stadterneuerungsgebiet Heven-Ost/Crengeldanz Fassadensanierungen, Hofgestaltungen und Begrünungsmaßnahmen für private Eigentümer. Wir helfen Ihnen dabei, die Förderfähigkeit Ihrer Maßnahme zu klären und begleiten Sie bei der Umsetzung. Fragen Sie uns direkt – wir geben Ihnen eine realistische Einschätzung, bevor Sie den Antrag stellen.",
      },
    ],
    faqs: [
      {
        question: "Können Sie Fassadenarbeiten im Fördergebiet Heven-Ost/Crengeldanz übernehmen?",
        answer:
          "Ja. Wir kennen das Förderprogramm der Stadt Witten und führen Fassadenarbeiten durch, die für eine Förderung in Betracht kommen. Sprechen Sie uns an – wir helfen Ihnen bei der Einschätzung.",
      },
      {
        question: "Welche Arbeiten bieten Sie in Heven an?",
        answer:
          "In Heven führen wir hochwertige Renovierungen, Badsanierungen, Parkett- und Bodenverlegungen sowie Malerarbeiten durch. Wir richten uns nach dem Standard, den die Lage erfordert.",
      },
      {
        question: "Entstehen Mehrkosten für die Anfahrt nach Witten?",
        answer:
          "Das klären wir im Angebot. Bei größeren Projekten fallen Anfahrtskosten kaum ins Gewicht. Bei kleineren Einzelleistungen sprechen wir das transparent an.",
      },
      {
        question: "Wie schnell kann ich einen Besichtigungstermin in Witten bekommen?",
        answer:
          "Wir melden uns in der Regel innerhalb eines Werktags. Besichtigungstermine in Witten vereinbaren wir zeitnah – auch für Annen, Stockum und Herbede.",
      },
    ],
    seoTitle: "Renovierung Witten | Zakho Bau – Heven, Annen, Fassade, Badsanierung",
    seoDescription:
      "Zakho Bau in Witten: Fassadensanierung, Badsanierung, Malerarbeiten und Renovierung in Heven, Annen und Stockum. Hinweis auf Fördergelder im Stadterneuerungsgebiet. Jetzt anfragen!",
    heroImage: "/standorte/witten.jpg",
    heroImageAlt: "Witten – Renovierung und Fassadensanierung mit Zakho Bau",
    regionTag: "Witten & Ruhrtal",
  },
];

export const getStandortBySlug = (slug: string) =>
  STANDORTE.find((s) => s.slug === slug);
