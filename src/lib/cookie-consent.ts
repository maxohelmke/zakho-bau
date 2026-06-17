export type CookieConsent = {
  necessary: true;
  externalMedia: boolean;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string; // ISO
};

const STORAGE_KEY = "zakho_cookie_consent_v1";

export function readCookieConsent(): CookieConsent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CookieConsent>;
    if (parsed.necessary !== true) return null;
    if (typeof parsed.externalMedia !== "boolean") return null;
    if (typeof parsed.analytics !== "boolean") return null;
    if (typeof parsed.marketing !== "boolean") return null;
    if (typeof parsed.updatedAt !== "string") return null;
    return parsed as CookieConsent;
  } catch {
    return null;
  }
}

export function writeCookieConsent(next: Omit<CookieConsent, "updatedAt">): CookieConsent {
  const value: CookieConsent = { ...next, updatedAt: new Date().toISOString() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  return value;
}

export function clearCookieConsent() {
  localStorage.removeItem(STORAGE_KEY);
}

