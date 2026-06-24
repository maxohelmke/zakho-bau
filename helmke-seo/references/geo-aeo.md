# GEO & AEO — AI-Sichtbarkeit 2026

> GEO = Generative Engine Optimization (ChatGPT, Perplexity, Google AI Overviews)
> AEO = Answer Engine Optimization (Featured Snippets, People Also Ask)
> Stand: Juni 2026

---

## Warum das jetzt wichtig ist

- Über 65% der Google-Suchen enden ohne Klick (AI Overviews, Featured Snippets)
- AI-Overviews sind seit März 2025 in Deutschland aktiv
- Gartner prognostiziert 25% Rückgang bei traditionellen Suchanfragen bis 2027
- Aber: Eine AI-Citation ist stärker als ein organisches Listing (implizite Empfehlung)

Das Ziel ist nicht mehr nur Platz 1 bei Google — sondern als Quelle in AI-Antworten zu erscheinen.

---

## Die CITE-Struktur (nach jeder H2 anwenden)

Quelle: Violetta Bonenkamp / Mean CEO Framework 2026

**C — Clear Answer Block**
Nach jeder H2: 40–60 Wörter die die Frage direkt beantworten.
Dieser Block ist das, was AI-Systeme extrahieren. Er muss allein stehen können.

**I — Include Primary Sources**
Keine vagen Claims. "KI wächst" → ignoriert.
"AI-gestützte Suchanfragen stiegen 2025 um 1.757% (Hashmeta Research)" → wird zitiert.
Jede Zahl braucht einen Link zur Primärquelle.

**T — Timestamp**
"Stand: Juni 2026" bei zeitkritischen Inhalten.
AI-Systeme bevorzugen frische Inhalte. Artikel ohne Datum verlieren gegen datierte.

**E — Entity Authority**
Echte Namen: "Dr. Dietmar Henkel, seit 1994 in Krefeld" > "unser erfahrener Arzt"
Echte Orte: "Rheinstraße 23, Krefeld" > "zentrale Lage"
Echte Zahlen: "800 Implantate/Jahr" > "viel Erfahrung"

---

## Content-Struktur für AI-Extraktion

### Seitenaufbau (Reihenfolge erzwingt AI-Sichtbarkeit)

```
1. TL;DR-Box (3–5 Bullets, oben auf der Seite)
   → AI-Systeme suchen nach schnell extrahierbaren Zusammenfassungen

2. Direkte Antwort in den ersten 200 Wörtern
   → Hauptfrage beantworten BEVOR Kontext/Story kommt

3. H2-Headings als vollständige Fragen formulieren
   → "Wie lange dauert eine Zahnimplantat-Behandlung?" statt "Behandlungsdauer"

4. 40-60 Wort Answer-Block nach jeder H2
   → Standalone verständlich, zitierbar

5. FAQ-Section am Ende (min. 10 Fragen)
   → FAQPage Schema, People Also Ask Coverage

6. Statistiken mit Quellenlink
   → Mindestens 2–3 pro Artikel mit externen Primärquellen
```

### Verboten (AI-Extraktion verhindert)

```
❌ Antworten am Ende des Artikels verstecken (Answer first!)
❌ Vage Formulierungen ohne Zahlen
❌ H2s die keine Fragen sind
❌ Keine TL;DR-Box
❌ Autor unbekannt oder anonymes "Team"
❌ AI-Crawler in robots.txt geblockt
```

---

## Technische GEO-Einstellungen

### robots.txt (AI-Crawler erlauben)

```
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /
```

### llms.txt Datei (unter /llms.txt)

```markdown
# [Unternehmensname]
> Kurze, faktische Beschreibung: Was das Unternehmen macht, für wen, wo.

## Autorisierte Seiten (für AI-Crawler)
- [Seite 1 Titel]: https://[domain]/[url]/
- [Seite 2 Titel]: https://[domain]/[url]/

## Fakten
- Gegründet: [Jahr]
- Standort: [Adresse]
- Kernleistungen: [Liste]
- Kontakt: [Telefon], [Email]
```

### Schema.org für GEO

Article Schema — immer mit Autor und Datum:
```json
{
  "@type": "Article",
  "datePublished": "2026-06-01",
  "dateModified": "2026-06-20",
  "author": {
    "@type": "Person",
    "name": "Max Helmke",
    "url": "https://www.helmke-digital.com/ueber-uns"
  }
}
```

Physician Schema (für Kredent):
```json
{
  "@type": "MedicalWebPage",
  "author": {
    "@type": "Physician",
    "name": "Dr. Dietmar Henkel",
    "medicalSpecialty": "Dentistry"
  }
}
```

---

## GEO-Tracking (kostenlos)

Einmal pro Woche: 5–10 relevante Test-Queries in Perplexity und ChatGPT eingeben.
Erscheint die Domain als Quelle? → Notieren.

Test-Queries für Helmke Digital:
- "Wer bietet KI Telefonassistenten für Handwerker in Deutschland an?"
- "Beste IT Beratung Düsseldorf"
- "n8n Agentur Düsseldorf Empfehlung"

Test-Queries für Kredent:
- "Bester Zahnarzt für Jochbeinimplantate Deutschland"
- "Zahnarzt Krefeld Empfehlung"
- "Implantologe NRW mit eigenem Labor"

---

## SEO vs. AEO vs. GEO — Unterschied

| Ziel | Optimierung für | Primäres Signal | Tool |
|---|---|---|---|
| SEO | Google blaue Links | Backlinks, Topical Authority | Search Console |
| AEO | Featured Snippets, PAA | Direkte Antwort-Struktur, Pagerank | Search Console (Rich Results) |
| GEO | ChatGPT / Perplexity Citations | Content-Struktur, Entity-Autorität | Manueller Test in AI-Tools |

In 2026: Alle drei gleichzeitig anstreben. Gute CITE-Struktur gewinnt bei allen dreien.
