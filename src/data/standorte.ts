export type StandortData = {
  slug: string;
  name: string;
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
  {
    slug: "gevelsberg",
    name: "Gevelsberg",
    headline: "Bau & Sanierung in Gevelsberg – Qualität aus Erfahrung",
    subline: "Unser Heimatstandort im Ennepe-Ruhr-Kreis",
    intro:
      "Gevelsberg ist unser Heimatstandort – hier kennen wir die Straßen, die Gebäude und die besonderen Anforderungen der Region. Ob Altbausanierung, Badsanierung oder komplette Renovierung: Zakho Bau ist Ihr verlässlicher Partner vor Ort. Kurze Reaktionszeiten und persönliche Betreuung sind für uns selbstverständlich.",
    introHighlight:
      "Als lokaler Fachbetrieb in Gevelsberg sind wir schnell vor Ort – egal ob dringende Schadensbeseitigung oder geplantes Renovierungsprojekt.",
    highlightsSectionTitle: "Warum Auftraggeber in Gevelsberg uns wählen",
    highlightsSectionLead:
      "Kurze Wege, direkter Kontakt zum Inhaber und echte Kenntnis der lokalen Bausubstanz – das macht den Unterschied.",
    highlights: [
      "Heimatstandort mit schnellen Reaktionszeiten im gesamten Stadtgebiet",
      "Direkte Beratung ohne Umwege – Inhaber persönlich erreichbar",
      "Erfahrung mit typischen Gebäuden im Ennepe-Ruhr-Kreis",
      "Transparente Angebote und verlässliche Terminplanung",
    ],
    localFacts: [
      {
        label: "Einsatzgebiet",
        text: "Gesamtes Stadtgebiet Gevelsberg inkl. aller Wohnlagen und Ortsteile.",
      },
      {
        label: "Reaktionszeit",
        text: "Als Heimatbetrieb sind wir schnell vor Ort – auch für kurzfristige Besichtigungen.",
      },
      {
        label: "Projektarten",
        text: "Von der Einzelmaßnahme bis zur Komplettsanierung – alles aus einer Hand.",
      },
    ],
    serviceFocus: {
      title: "Schwerpunkte in Gevelsberg",
      intro:
        "In Gevelsberg führen wir alle Bauleistungen durch – von der Renovierung bis zur Komplettsanierung.",
      items: [
        "Komplettrenovierung von Wohnungen und Häusern",
        "Badsanierung inklusive Fliesen, Sanitär und Trockenbau",
        "Trockenbau für neue Raumaufteilungen",
        "Malerarbeiten und Bodenverlegung",
        "Außenarbeiten und Fassadengestaltung",
      ],
    },
    sections: [
      {
        title: "Gevelsberg: Unser Zuhause, Ihr Vorteil",
        body:
          "Als in Gevelsberg ansässiger Betrieb kennen wir die lokalen Gegebenheiten genau. Das bedeutet für Sie: keine langen Anfahrtszeiten, schnelle Reaktion und ein Ansprechpartner, der die Region kennt.",
      },
      {
        title: "Altbau und Neubau",
        body:
          "Ob Bestandsimmobilie aus der Nachkriegszeit oder neueres Gebäude – wir passen unsere Arbeitsweise dem jeweiligen Objekt an und beraten Sie ehrlich zu Möglichkeiten und Kosten.",
      },
    ],
    faqs: [
      {
        question: "Sind Sie wirklich in ganz Gevelsberg tätig?",
        answer:
          "Ja, wir betreuen Projekte im gesamten Stadtgebiet – von der Innenstadt bis zu den Außenbezirken.",
      },
      {
        question: "Wie schnell können Sie eine Besichtigung anbieten?",
        answer:
          "In der Regel melden wir uns innerhalb eines Werktags und vereinbaren kurzfristig einen Termin.",
      },
      {
        question: "Führen Sie auch kleinere Arbeiten durch?",
        answer:
          "Ja, je nach Kapazität auch Einzelmaßnahmen – sprechen Sie uns einfach an.",
      },
      {
        question: "Bieten Sie Festpreise an?",
        answer:
          "Wo der Leistungsumfang klar ist, sind Festpreise möglich. Wir besprechen alles transparent im Angebot.",
      },
    ],
    seoTitle: "Bau & Sanierung Gevelsberg | Zakho Bau – Renovierung, Trockenbau, Bad",
    seoDescription:
      "Zakho Bau in Gevelsberg: Renovierung, Badsanierung, Trockenbau und Malerarbeiten. Schnelle Reaktionszeiten, persönliche Beratung. Jetzt anfragen!",
    heroImage: "/standorte/schwelm.jpg",
    heroImageAlt: "Gevelsberg – Bau & Sanierung mit Zakho Bau",
    regionTag: "Gevelsberg & Ennepe-Ruhr-Kreis",
  },
  {
    slug: "ennepetal",
    name: "Ennepetal",
    headline: "Renovierung & Sanierung in Ennepetal",
    subline: "Professioneller Innenausbau im Ennepe-Ruhr-Kreis",
    intro:
      "Ennepetal liegt direkt vor unserer Haustür – kurze Anfahrten und persönliche Betreuung sind daher für Ennepetaler Kunden selbstverständlich. Wir führen Renovierungen, Trockenbauarbeiten und Malerarbeiten in allen Ennepetaler Stadtteilen durch und kennen die lokale Bausubstanz gut.",
    introHighlight:
      "Ob Vorholz, Milspe oder Altenvoerde – wir sind in ganz Ennepetal schnell vor Ort und bieten verlässliche Handwerksleistungen.",
    highlightsSectionTitle: "Was Ennepetaler Kunden von uns erwarten dürfen",
    highlightsSectionLead:
      "Zuverlässige Ausführung, transparente Kommunikation und kurze Reaktionszeiten – weil Ennepetal für uns ein Nachbarstandort ist.",
    highlights: [
      "Kurze Anfahrtswege aus Gevelsberg",
      "Erfahrung mit Bestandsgebäuden im Ennepe-Ruhr-Kreis",
      "Transparente Angebote ohne versteckte Kosten",
      "Persönlicher Kontakt zum Inhaber",
    ],
    localFacts: [
      {
        label: "Lage",
        text: "Direkt angrenzend an Gevelsberg – kurze Wege für Besichtigungen und Abnahmen.",
      },
      {
        label: "Typische Aufträge",
        text: "Renovierungen vor Vermietung, Badsanierungen und Malerarbeiten.",
      },
      {
        label: "Besonderheit",
        text: "Mischung aus Wohnquartieren verschiedener Baualtersklassen – wir passen uns an.",
      },
    ],
    serviceFocus: {
      title: "Leistungen in Ennepetal",
      intro: "Wir führen alle gängigen Bauleistungen auch in Ennepetal durch.",
      items: [
        "Renovierung & Modernisierung von Wohnungen",
        "Trockenbau & Innenausbau",
        "Malerarbeiten & Tapezieren",
        "Bodenverlegung (Laminat, Parkett, Vinyl)",
        "Badsanierung aus einer Hand",
      ],
    },
    sections: [
      {
        title: "Ennepetal: Verlässlich und nah",
        body:
          "Die Nähe zu unserem Heimatstandort Gevelsberg ermöglicht es uns, schnell auf Anfragen zu reagieren und Projekte in Ennepetal ohne Mehrkosten für lange Anfahrten zu bearbeiten.",
      },
    ],
    faqs: [
      {
        question: "Arbeiten Sie in allen Ennepetaler Stadtteilen?",
        answer:
          "Ja, wir sind in ganz Ennepetal tätig – von Milspe bis Voerde.",
      },
      {
        question: "Wie schnell kann ich einen Termin bekommen?",
        answer:
          "Wir melden uns in der Regel innerhalb eines Werktags und vereinbaren zeitnah einen Besichtigungstermin.",
      },
      {
        question: "Übernehmen Sie auch kleinere Malerarbeiten?",
        answer:
          "Ja, je nach Kapazität auch Einzelgewerke. Rufen Sie uns einfach an.",
      },
      {
        question: "Gibt es Festpreise?",
        answer:
          "Wo der Umfang klar definiert ist, bieten wir gerne Festpreise an.",
      },
    ],
    seoTitle: "Renovierung Ennepetal | Zakho Bau – Trockenbau, Maler, Bad",
    seoDescription:
      "Zakho Bau in Ennepetal: Renovierung, Trockenbau, Malerarbeiten und Badsanierung. Persönliche Beratung, schnelle Rückmeldung. Jetzt anfragen!",
    heroImage: "/standorte/remscheid.jpg",
    heroImageAlt: "Ennepetal – Renovierung und Sanierung mit Zakho Bau",
    regionTag: "Ennepetal & Ennepe-Ruhr-Kreis",
  },
  {
    slug: "schwelm",
    name: "Schwelm",
    headline: "Bausanierungen & Innenausbau in Schwelm",
    subline: "Ennepe-Ruhr-Kreis: schnelle Anbindung, persönliche Betreuung",
    intro:
      "Schwelm profitiert von verkehrsgünstiger Lage und einer überschaubaren Stadtstruktur. Für uns ist Schwelm fest im Tourenplan: überschaubare Anfahrten, klare Kommunikation und die Möglichkeit, auch kurzfristig vorbeizuschauen. Wir übernehmen Modernisierungen, Badsanierungen und Innenausbauarbeiten in Schwelm.",
    introHighlight:
      "Wenn Sie unter Zeitdruck stehen – etwa für einen Übergabetermin oder Einzug – legen wir Prioritäten fest und zeigen, was sofort und was später erledigt werden kann.",
    highlightsSectionTitle: "Darauf legen Schwelmer Auftraggeber Wert",
    highlightsSectionLead:
      "Zuverlässigkeit, nachvollziehbare Angebote und die Bereitschaft, auch unbequeme Wahrheiten über den Bestand auszusprechen.",
    highlights: [
      "Schnelle Rückmeldung auf Anfragen",
      "Erfahrung mit typischen Wohnungsgrundrissen im Ennepe-Ruhr-Kreis",
      "Klare Prioritätenliste wenn Budget und Wunschliste auseinanderlaufen",
      "Dokumentation für Verkauf, Vermietung oder Versicherung nach Absprache",
    ],
    localFacts: [
      {
        label: "Region",
        text: "Im Ennepe-Ruhr-Kreis – gut erreichbar aus Gevelsberg.",
      },
      {
        label: "Auftragsprofil",
        text: "Häufig Frischzüge, Badsanierungen und Instandsetzungsarbeiten.",
      },
      {
        label: "Arbeitsweise",
        text: "Wir vermeiden Doppelarbeiten: Wer öffnet, schließt auch wieder fachgerecht.",
      },
    ],
    serviceFocus: {
      title: "Leistungen rund um Sanierung und Instandhaltung in Schwelm",
      intro: "Vom Einzelgewerk bis zur Komplettsanierung – immer in der richtigen Reihenfolge.",
      items: [
        "Badsanierung mit Fokus auf Dichtigkeit und Komfort",
        "Malerarbeiten und Bodenverlegung",
        "Trockenbau für Raumteilungen",
        "Instandsetzung nach Wasserschäden",
        "Beratung zu Investitionen vor Immobilienverkauf",
      ],
    },
    sections: [
      {
        title: "Vor Verkauf oder Vermietung in Schwelm",
        body:
          "Nicht jede Investition steigert den Preis gleichermaßen. Wir zeigen, welche Punkte Käufer und Mieter typischerweise wahrnehmen – und wo Sie mit kleinem Aufwand viel erreichen.",
      },
      {
        title: "Transparenz bei Kosten und Änderungen",
        body:
          "Das Angebot basiert auf dem Besichtigungstermin. Wenn sich der Befund ändert, informieren wir Sie sofort und besprechen gemeinsam die nächsten Schritte.",
      },
    ],
    faqs: [
      {
        question: "Wie schnell bekomme ich in Schwelm einen Rückruf?",
        answer:
          "In der Regel innerhalb eines Werktags – bei dringenden Schäden bitten wir um kurze Kennzeichnung in der Nachricht.",
      },
      {
        question: "Übernehmen Sie auch Schadensanierung nach Leitungswasser?",
        answer:
          "Ja: Befund, Austausch betroffener Bereiche und Wiederherstellung der Oberflächen.",
      },
      {
        question: "Führen Sie auch nur Malerarbeiten durch?",
        answer:
          "Ja, je nach Kapazität auch Einzelgewerke – sprechen Sie uns konkret an.",
      },
      {
        question: "Arbeiten Sie nur für Privatpersonen?",
        answer:
          "Schwerpunkt ist privates Wohnen; gewerbliche Kleinobjekte sind nach Absprache möglich.",
      },
    ],
    seoTitle: "Renovierung Schwelm | Zakho Bau – Bad, Sanierung, Ennepe-Ruhr",
    seoDescription:
      "Sanierung in Schwelm: Badsanierung, Malerarbeiten, Umbau. Schnelle Rückmeldung, transparente Kosten. Jetzt Erstberatung bei Zakho Bau anfragen.",
    heroImage: "/standorte/schwelm.jpg",
    heroImageAlt: "Schwelm – Sanierung und Handwerk mit Zakho Bau",
    regionTag: "Schwelm & Ennepe-Ruhr-Kreis",
  },
  {
    slug: "hagen",
    name: "Hagen",
    headline: "Komplettleistungen rund ums Bauen in Hagen",
    subline: "Renovierung, Sanierung und Innenausbau in der Ruhrgebietsstadt",
    intro:
      "Hagen als größere Stadt bietet vielfältige Immobilientypen – von Gründerzeitbauten über Nachkriegsbestand bis zu modernen Wohnanlagen. Zakho Bau übernimmt Sanierungs- und Innenausbauarbeiten in Hagen und bietet Ihnen die gewohnte Zuverlässigkeit aus dem Ennepe-Ruhr-Kreis.",
    introHighlight:
      "Bei Projekten in Hagen planen wir Anfahrten und Materiallieferungen effizient, damit keine unnötigen Mehrkosten entstehen.",
    highlightsSectionTitle: "Was Hagener Auftraggeber von uns erwarten dürfen",
    highlightsSectionLead:
      "Professionelle Ausführung, klare Kommunikation und verlässliche Terminplanung – auch über die Kreisgrenze hinaus.",
    highlights: [
      "Erfahrung mit verschiedenen Gebäudetypen und Baualtersklassen",
      "Klare Angebote ohne versteckte Positionen",
      "Pünktliche Fertigstellung durch realistische Planung",
      "Direkte Kommunikation mit dem Inhaber",
    ],
    localFacts: [
      {
        label: "Anfahrt",
        text: "Von Gevelsberg aus gut erreichbar – effiziente Tourenplanung für Hagener Projekte.",
      },
      {
        label: "Typische Aufträge",
        text: "Badsanierungen, Wohnungsrenovierungen und Trockenbauarbeiten.",
      },
      {
        label: "Gebäudetypen",
        text: "Gründerzeitbauten, Nachkriegsbestand und neuere Wohnanlagen.",
      },
    ],
    serviceFocus: {
      title: "Unsere Leistungen in Hagen",
      intro: "Wir führen alle gängigen Bauleistungen auch in Hagen aus.",
      items: [
        "Renovierung & Modernisierung von Wohnungen",
        "Badsanierung mit Trockenbau und Fliesen",
        "Malerarbeiten und Tapezieren",
        "Bodenverlegung (Laminat, Parkett, Vinyl)",
        "Außenarbeiten und Fassadengestaltung",
      ],
    },
    sections: [
      {
        title: "Hagen: Vielfältige Immobilien, ein Ansprechpartner",
        body:
          "Die Gebäudevielfalt in Hagen erfordert differenziertes Vorgehen. Wir bewerten jedes Objekt individuell und beraten Sie zu den sinnvollsten Maßnahmen für Ihre Situation.",
      },
    ],
    faqs: [
      {
        question: "Arbeiten Sie in ganz Hagen?",
        answer:
          "Ja, wir betreuen Projekte im gesamten Hagener Stadtgebiet.",
      },
      {
        question: "Gibt es Mehrkosten für die Anfahrt nach Hagen?",
        answer:
          "Das klären wir individuell im Angebot – bei größeren Projekten fällt die Anfahrt nicht ins Gewicht.",
      },
      {
        question: "Wie schnell kann ich ein Angebot erhalten?",
        answer:
          "Nach einer Besichtigung erstellen wir Ihnen in der Regel binnen weniger Tage ein Angebot.",
      },
      {
        question: "Führen Sie auch Gründerzeitbau-Sanierungen durch?",
        answer:
          "Ja, Altbau ist unser Alltag – wir kennen die typischen Herausforderungen und gehen pragmatisch vor.",
      },
    ],
    seoTitle: "Renovierung Hagen | Zakho Bau – Bad, Innenausbau, Sanierung",
    seoDescription:
      "Zakho Bau in Hagen: Renovierung, Badsanierung, Trockenbau und Malerarbeiten. Persönliche Beratung, verlässliche Ausführung. Jetzt anfragen!",
    heroImage: "/standorte/wuppertal.jpg",
    heroImageAlt: "Hagen – Bau & Sanierung mit Zakho Bau",
    regionTag: "Hagen & Umgebung",
  },
  {
    slug: "wuppertal",
    name: "Wuppertal",
    headline: "Renovierung & Sanierung in Wuppertal",
    subline: "Bau- und Innenausbauarbeiten in der Bergischen Metropole",
    intro:
      "Wuppertal ist mit seiner vielfältigen Bausubstanz – von Gründerzeitbauten bis zu modernen Wohnanlagen – ein wichtiger Bestandteil unseres Einsatzgebiets. Zakho Bau übernimmt Renovierungen und Sanierungen in Wuppertal und bringt die gewohnte Qualität aus Gevelsberg mit.",
    introHighlight:
      "In Wuppertal planen wir Projekte mit Blick auf die besonderen Anforderungen der Hanglagen und dicht besiedelten Stadtteile.",
    highlightsSectionTitle: "Warum Wuppertaler Kunden Zakho Bau wählen",
    highlightsSectionLead:
      "Verlässliche Handwerksleistung, transparente Kommunikation und Erfahrung mit der vielschichtigen Wuppertaler Bausubstanz.",
    highlights: [
      "Erfahrung mit Hanglagen und Altbausubstanz",
      "Klare Ansprechpartner, keine langen Kommunikationsketten",
      "Transparente Angebote mit nachvollziehbaren Positionen",
      "Termintreue durch realistische Planung",
    ],
    localFacts: [
      {
        label: "Stadtteile",
        text: "Wir betreuen Projekte im gesamten Wuppertaler Stadtgebiet.",
      },
      {
        label: "Gebäudetypen",
        text: "Gründerzeit, Nachkriegsbestand und modernisierte Mehrfamilienhäuser.",
      },
      {
        label: "Besonderheit",
        text: "Hanglagen erfordern besondere Logistik – wir planen entsprechend.",
      },
    ],
    serviceFocus: {
      title: "Leistungen in Wuppertal",
      intro: "Alle gängigen Bauleistungen – auch in Wuppertal.",
      items: [
        "Badsanierung inklusive Abdichtung, Fliesen und Anschlüssen",
        "Trockenbau für neue Raumaufteilungen",
        "Malerarbeiten und Bodenverlegung",
        "Renovierung vor Neuvermietung oder Verkauf",
        "Außenarbeiten und Fassadenrenovierung",
      ],
    },
    sections: [
      {
        title: "Altbau in Wuppertal: Was wir prüfen",
        body:
          "Bei Bestandsgebäuden klären wir früh, welche Wände tragend sind, wo Leitungen liegen und ob Feuchte oder Schäden auf eine Ursache hindeuten. Das verhindert teure Überraschungen mitten in der Sanierung.",
      },
    ],
    faqs: [
      {
        question: "Sind Sie in allen Wuppertaler Stadtteilen tätig?",
        answer:
          "Ja, wir betreuen Projekte im gesamten Stadtgebiet – von Elberfeld bis Cronenberg.",
      },
      {
        question: "Wie gehen Sie mit Hanglagen um?",
        answer:
          "Wir planen Materialtransport und Arbeitsschritte so, dass Hanglagen keine unnötigen Mehrkosten verursachen.",
      },
      {
        question: "Können Sie Modernisierungen für Vermieter abwickeln?",
        answer:
          "Ja – wir dokumentieren den Fortschritt nachvollziehbar für Eigentümer und Verwaltungen.",
      },
      {
        question: "Was passiert bei unerwarteten Schäden im Altbau?",
        answer:
          "Wir stoppen, zeigen Ihnen den Befund und besprechen Optionen mit klaren Kostenfolgen – keine Überraschungen.",
      },
    ],
    seoTitle: "Bau & Sanierung Wuppertal | Zakho Bau – Altbau, Bad, Trockenbau",
    seoDescription:
      "Renovierung und Sanierung in Wuppertal: Badsanierung, Trockenbau, Malerarbeiten. Persönliche Beratung, feste Ansprechpartner. Zakho Bau – Jetzt anfragen.",
    heroImage: "/standorte/wuppertal.jpg",
    heroImageAlt: "Wuppertal – Sanierung und Renovierung mit Zakho Bau",
    regionTag: "Wuppertal & Bergisches Land",
  },
  {
    slug: "witten",
    name: "Witten & Umgebung",
    headline: "Trockenbau, Malerarbeiten & Bodenbeläge in Witten",
    subline: "Qualitätshandwerk aus Gevelsberg auch in Witten",
    intro:
      "Witten und seine Umgebung gehören zu unserem erweiterten Einsatzgebiet. Wir führen Innenausbauarbeiten, Malerarbeiten und Bodenverlegungen in Witten durch und bringen die bewährte Qualität von Zakho Bau auch dorthin.",
    introHighlight:
      "Für Wittener Projekte planen wir Anfahrten und Materiallieferungen effizient, damit Ihr Vorhaben reibungslos abläuft.",
    highlightsSectionTitle: "Was Wittener Kunden von uns erwarten dürfen",
    highlightsSectionLead:
      "Die gleiche Verlässlichkeit und Qualität wie am Heimatstandort – auch in Witten.",
    highlights: [
      "Zuverlässige Ausführung auch im erweiterten Einsatzgebiet",
      "Klare Kommunikation und transparente Angebote",
      "Erfahrung mit verschiedenen Gebäudetypen",
      "Persönlicher Ansprechpartner vom Inhaber",
    ],
    localFacts: [
      {
        label: "Erreichbarkeit",
        text: "Von Gevelsberg aus über gut ausgebaute Verbindungen erreichbar.",
      },
      {
        label: "Typische Aufträge",
        text: "Trockenbau, Malerarbeiten, Bodenbeläge und Badsanierungen.",
      },
      {
        label: "Besonderheit",
        text: "Mischung aus Bergbau-Erbschaft und modernen Wohnquartieren.",
      },
    ],
    serviceFocus: {
      title: "Unsere Leistungen in Witten",
      intro: "Wir übernehmen auch in Witten alle gängigen Bauleistungen.",
      items: [
        "Trockenbau für Raumteilungen und Innenausbau",
        "Malerarbeiten und Tapezieren",
        "Bodenverlegung (Laminat, Parkett, Fliesen)",
        "Badsanierung aus einer Hand",
        "Renovierung vor Vermietung oder Verkauf",
      ],
    },
    sections: [
      {
        title: "Witten: Qualität ohne Abstriche",
        body:
          "Auch in Witten gilt unser Anspruch: saubere Ausführung, ehrliche Kommunikation und pünktliche Fertigstellung. Die Entfernung ändert nichts an unseren Standards.",
      },
    ],
    faqs: [
      {
        question: "Führen Sie auch in Witten Arbeiten durch?",
        answer:
          "Ja, Witten gehört zu unserem Einsatzgebiet. Kontaktieren Sie uns für eine Besichtigung.",
      },
      {
        question: "Entstehen Mehrkosten für die Anfahrt?",
        answer:
          "Das klären wir individuell im Angebot – bei größeren Projekten fallen Anfahrtskosten kaum ins Gewicht.",
      },
      {
        question: "Welche Leistungen bieten Sie in Witten an?",
        answer:
          "Alle gängigen Bauleistungen: Renovierung, Trockenbau, Maler, Boden und Badsanierung.",
      },
      {
        question: "Wie schnell kann ich ein Angebot erhalten?",
        answer:
          "Nach einer Besichtigung in der Regel binnen weniger Tage.",
      },
    ],
    seoTitle: "Renovierung Witten | Zakho Bau – Trockenbau, Maler, Bodenbeläge",
    seoDescription:
      "Zakho Bau in Witten: Trockenbau, Malerarbeiten, Bodenbeläge und Badsanierung. Qualität aus Gevelsberg. Jetzt anfragen!",
    heroImage: "/standorte/velbert.jpg",
    heroImageAlt: "Witten – Bau & Sanierung mit Zakho Bau",
    regionTag: "Witten & Umgebung",
  },
];

export const getStandortBySlug = (slug: string) =>
  STANDORTE.find((s) => s.slug === slug);
