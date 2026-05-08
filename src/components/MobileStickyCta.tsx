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
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-background/95 p-2 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/90">
          <div className="hidden min-w-0 flex-1 items-center gap-2 sm:flex">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10">
              <Sparkles className="h-4 w-4 text-accent" />
            </span>
            <p className="truncate text-sm font-semibold text-foreground">
              Kostenlos & unverbindlich anfragen
            </p>
          </div>

          <div className="flex w-full gap-2 sm:w-auto">
            <a href="tel:+4915254090013" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full">
                <Phone className="mr-2 h-4 w-4" />
                Anrufen
              </Button>
            </a>
            <Link to="/anfragen" className="w-full sm:w-auto">
              <Button variant="accent" className="w-full">
                Anfrage
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

