import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCookieConsent } from "@/hooks/use-cookie-consent";
import { Link } from "react-router-dom";

export default function CookieBanner() {
  const { hydrated, consent, acceptAll, acceptNecessaryOnly, save } = useCookieConsent();
  const [open, setOpen] = useState(false);
  const [externalMedia, setExternalMedia] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const shouldShow = hydrated && !consent;

  const defaults = useMemo(() => {
    return {
      externalMedia: consent?.externalMedia ?? false,
      analytics: consent?.analytics ?? false,
      marketing: consent?.marketing ?? false,
    };
  }, [consent]);

  if (!shouldShow) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] w-full border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="container mx-auto container-pad py-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground">Cookies & Einwilligung</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Wir nutzen notwendige Cookies für die Funktion der Website. Externe Inhalte (z. B. Google Maps) werden
              nur nach Einwilligung geladen. Details in der{" "}
              <Link to="/datenschutz" className="text-accent hover:underline">
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
            <Button variant="outline" onClick={() => setOpen((v) => !v)}>
              Einstellungen
            </Button>
            <Button variant="outline" onClick={acceptNecessaryOnly}>
              Nur notwendige
            </Button>
            <Button variant="accent" onClick={acceptAll}>
              Alle akzeptieren
            </Button>
          </div>
        </div>

        <div className={cn("mt-4 overflow-hidden rounded-xl border border-border bg-card p-4", open ? "block" : "hidden")}>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-background p-3">
              <p className="text-sm font-semibold text-foreground">Notwendig</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Erforderlich für grundlegende Funktionen (z. B. Formular, Sicherheit). Immer aktiv.
              </p>
              <div className="mt-3 inline-flex items-center rounded-full bg-muted px-2.5 py-1 text-xs font-semibold text-foreground">
                Aktiv
              </div>
            </div>

            <label className="rounded-lg border border-border bg-background p-3">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">Externe Inhalte</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    z. B. Google Maps (kann Cookies von Drittanbietern setzen).
                  </p>
                </div>
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-[hsl(var(--accent))]"
                  defaultChecked={defaults.externalMedia}
                  onChange={(e) => setExternalMedia(e.target.checked)}
                />
              </div>
            </label>

            <label className="rounded-lg border border-border bg-background p-3">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">Analytics / Marketing</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Aktuell setzen wir keine Tracking-Tools ein. Optional für spätere Nutzung.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 text-xs text-muted-foreground">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-[hsl(var(--accent))]"
                      defaultChecked={defaults.analytics}
                      onChange={(e) => setAnalytics(e.target.checked)}
                    />
                    Analytics
                  </label>
                  <label className="flex items-center gap-2 text-xs text-muted-foreground">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-[hsl(var(--accent))]"
                      defaultChecked={defaults.marketing}
                      onChange={(e) => setMarketing(e.target.checked)}
                    />
                    Marketing
                  </label>
                </div>
              </div>
            </label>
          </div>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-end">
            <Button
              variant="accent"
              onClick={() => {
                save({ externalMedia, analytics, marketing });
              }}
            >
              Auswahl speichern
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

