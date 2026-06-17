import { Link } from "react-router-dom";
import { Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/hooks/use-cookie-consent";

export default function MobileStickyCta() {
  const { hydrated, consent } = useCookieConsent();
  const cookieBannerVisible = hydrated && !consent;

  return (
    <div
      className={[
        "fixed inset-x-0 z-[55] md:hidden",
        cookieBannerVisible ? "bottom-24" : "bottom-[max(0.75rem,env(safe-area-inset-bottom))]",
      ].join(" ")}
    >
      <div className="container mx-auto container-pad">
        <div className="flex items-center justify-between gap-2 rounded-2xl border border-border bg-background/95 p-2 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/90">
          <div className="hidden min-w-0 flex-1 items-center gap-2 md:flex">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10">
              <Sparkles className="h-4 w-4 text-accent" />
            </span>
            <p className="truncate text-sm font-semibold text-foreground">
              Kostenlos & unverbindlich anfragen
            </p>
          </div>

          <div className="grid w-full grid-cols-2 gap-2 md:w-auto md:flex md:gap-2">
            <a href="tel:+4915788888852" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full px-3">
                <Phone className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Anrufen</span>
              </Button>
            </a>
            <Link to="/anfragen" className="w-full sm:w-auto">
              <Button variant="accent" className="w-full px-3">
                <span className="sm:hidden">Anfrage</span>
                <span className="hidden sm:inline">Anfrage senden</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


