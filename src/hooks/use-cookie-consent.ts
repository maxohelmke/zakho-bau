import { useEffect, useMemo, useState } from "react";
import { readCookieConsent, type CookieConsent, writeCookieConsent } from "@/lib/cookie-consent";

export type ConsentState = CookieConsent | null;

export function useCookieConsent() {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setConsent(readCookieConsent());
    setHydrated(true);
  }, []);

  useEffect(() => {
    const handler = () => setConsent(readCookieConsent());
    window.addEventListener("storage", handler);
    window.addEventListener("zakho:cookie-consent", handler as EventListener);
    return () => {
      window.removeEventListener("storage", handler);
      window.removeEventListener("zakho:cookie-consent", handler as EventListener);
    };
  }, []);

  const api = useMemo(() => {
    return {
      hydrated,
      consent,
      hasExternalMedia: consent?.externalMedia === true,
      acceptNecessaryOnly: () => {
        writeCookieConsent({ necessary: true, externalMedia: false, analytics: false, marketing: false });
        window.dispatchEvent(new Event("zakho:cookie-consent"));
      },
      acceptAll: () => {
        writeCookieConsent({ necessary: true, externalMedia: true, analytics: true, marketing: true });
        window.dispatchEvent(new Event("zakho:cookie-consent"));
      },
      save: (next: { externalMedia: boolean; analytics: boolean; marketing: boolean }) => {
        writeCookieConsent({ necessary: true, ...next });
        window.dispatchEvent(new Event("zakho:cookie-consent"));
      },
    };
  }, [consent, hydrated]);

  return api;
}


