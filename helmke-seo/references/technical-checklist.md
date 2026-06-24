# Technisches SEO — Checkliste für alle Projekte

---

## PRE-LAUNCH Checkliste (vor Go-Live)

### Basics
- [ ] HTTPS aktiv, kein Mixed Content
- [ ] robots.txt vorhanden, korrekt konfiguriert (AI-Crawler NICHT geblockt)
- [ ] sitemap.xml vorhanden und in Google Search Console eingereicht
- [ ] Canonical-Tags auf ALLEN Seiten gesetzt (www vs. non-www einheitlich!)
- [ ] 301-Redirects für alle alten URLs (bei Relaunch/Migration)
- [ ] 404-Seite vorhanden und sinnvoll (mit Navigation)
- [ ] Google Search Console verifiziert
- [ ] Google Analytics 4 eingebunden

### Technische Performance
- [ ] LCP (Largest Contentful Paint) < 2.5 Sekunden
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] INP (Interaction to Next Paint) < 200ms
- [ ] Bilder: WebP-Format, unter 200KB, width + height Attribute gesetzt
- [ ] Lazy Loading für Bilder below the fold
- [ ] Keine Render-blocking Resources (kritische CSS inline, JS defer/async)

### robots.txt — Wichtig in 2026
```
User-agent: *
Disallow: /admin/
Disallow: /api/
Allow: /

# AI-Crawler explizit erlauben (NIEMALS blocken)
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /
```

### llms.txt (2026 Pflicht für AI-Sichtbarkeit)
Datei unter `/llms.txt` anlegen:
```
# [Unternehmensname]
> [Kurze Beschreibung des Unternehmens in 1–2 Sätzen]

## Wichtigste Seiten
- [Titel]: [URL]
- [Titel]: [URL]

## Über das Unternehmen
[2–3 Sätze mit wichtigsten Facts, Zahlen, Standort]
```

---

## SEO-Audit Checkliste (für bestehende Sites)

### Crawl & Index
- [ ] Google Search Console: Crawl-Fehler vorhanden? (404, 500, Redirect Loops)
- [ ] Search Console: Werden alle wichtigen Seiten indiziert?
- [ ] Noindex-Tags nur dort wo gewollt (Admin, Danke-Seiten, Duplikate)
- [ ] Canonical-Tags überall korrekt?
- [ ] Duplicate Content prüfen (via Siteliner.com oder Screaming Frog)

### On-Page SEO Audit
Für jede Hauptseite prüfen:
- [ ] H1 vorhanden (genau einmal)?
- [ ] H1 enthält Primär-Keyword?
- [ ] Title Tag < 60 Zeichen, Keyword am Anfang?
- [ ] Meta Description < 155 Zeichen, enthält CTA?
- [ ] URL: kurz, keyword-reich, kein Datum?
- [ ] Bilder haben Alt-Text?
- [ ] Interne Links vorhanden (min. 3 eingehend pro Hauptseite)?
- [ ] Externe Links zu Autoritätsquellen?

### Schema.org Audit
- [ ] LocalBusiness Schema auf Homepage und Kontaktseite
- [ ] FAQPage Schema bei FAQ-Sections
- [ ] Article/BlogPosting Schema auf Blog-Artikeln
- [ ] BreadcrumbList Schema vorhanden?
- [ ] Structured Data testen: https://search.google.com/test/rich-results

### Backlink & Authority
- [ ] Google Search Console: Manual Actions? (kein Spam)
- [ ] Wichtige Backlinks überprüfen (Google Search Console → Links)
- [ ] Broken Links nach außen prüfen (Screaming Frog)

---

## Redirect-Regeln bei Relaunches (KRITISCH)

Jede alte URL, die Rankings hat, MUSS per 301 auf neue URL zeigen.

```javascript
// Next.js: next.config.ts
const redirects = [
  { source: '/alte-url/', destination: '/neue-url/', permanent: true },
]

// Vercel: vercel.json
{
  "redirects": [
    { "source": "/alte-url/", "destination": "/neue-url/", "permanent": true }
  ]
}
```

**Vor Go-Live immer:**
1. Alle bestehenden Rankings exportieren (Search Console)
2. URL-Mapping erstellen: alt → neu
3. 301s implementieren und testen
4. Nach Go-Live: 48h Crawl-Fehler überwachen

---

## Tools (alle kostenlos)

| Tool | Zweck |
|---|---|
| Google Search Console | Rankings, Crawl-Fehler, Indizierung |
| Google Keyword Planner | Suchvolumen und Konkurrenz |
| PageSpeed Insights | Core Web Vitals prüfen |
| Rich Results Test | Schema.org validieren |
| Siteliner.com | Duplicate Content finden |
| ahrefs.com/free-seo-tools | Backlinks, Broken Links |
| https://answerthepublic.com | Fragen-Keywords finden |
