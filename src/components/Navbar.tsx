import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { STANDORTE } from "@/data/standorte";
import logo from "@/assets/zakho-bau-logo.svg";

const LEISTUNGEN_ITEMS = [
  { label: "Renovierung & Modernisierung", href: "/leistungen#renovierung" },
  { label: "Trockenbau & Innenausbau", href: "/leistungen#trockenbau" },
  { label: "Malerarbeiten & Tapezieren", href: "/leistungen#malerarbeiten" },
  { label: "Bodenbeläge & Fliesen", href: "/leistungen#bodenbelag" },
  { label: "Badsanierung", href: "/leistungen#sanierung" },
  { label: "Außenarbeiten & Fassade", href: "/leistungen#aussenarbeiten" },
] as const;

const navLinks = [
  { label: "Startseite", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Projekte", href: "/projekte" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/kontakt" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileStandorteOpen, setMobileStandorteOpen] = useState(false);
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full max-w-full border-b border-white/10 bg-[#0E0E0E]/95 backdrop-blur-md">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-accent" />
      <div className="container mx-auto container-pad flex min-w-0 items-center justify-between gap-3 py-2.5 sm:py-3">
        <Link to="/" className="flex min-w-0 shrink items-center">
          <div className="rounded-lg bg-white px-2 py-1 sm:px-3 sm:py-1.5">
            <img
              src={logo}
              alt="Zakho Bau Logo"
              className="h-9 w-auto max-w-[140px] object-contain sm:h-10 lg:h-11"
            />
          </div>
        </Link>

        <div className="hidden items-center gap-7 lg:flex xl:gap-8">
          <Link
            to="/"
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Startseite
          </Link>

          {/* Leistungen Dropdown */}
          <div className="group relative">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
              aria-haspopup="menu"
            >
              Leistungen
              <ChevronDown className="h-4 w-4 opacity-70 transition-transform group-hover:rotate-180" aria-hidden />
            </button>
            <div className="invisible absolute left-0 top-full z-50 mt-3 w-[340px] translate-y-1 rounded-xl border border-white/10 bg-[#161616] p-2 shadow-2xl opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link
                to="/leistungen"
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-white"
              >
                Alle Leistungen ansehen
                <span className="text-xs text-accent">→</span>
              </Link>
              <div className="my-2 h-px bg-white/10" />
              <div className="grid gap-1">
                {LEISTUNGEN_ITEMS.map((it) => (
                  <Link
                    key={it.href}
                    to={it.href}
                    className="rounded-lg px-3 py-2 text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {it.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/projekte"
            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Projekte
          </Link>

          {/* Einsatzgebiete (Standorte) */}
          <div className="group relative">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
              aria-haspopup="menu"
            >
              Einsatzgebiete
              <ChevronDown className="h-4 w-4 opacity-70 transition-transform group-hover:rotate-180" aria-hidden />
            </button>
            <div className="invisible absolute left-0 top-full z-50 mt-3 w-[320px] translate-y-1 rounded-xl border border-white/10 bg-[#161616] p-2 shadow-2xl opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                Standorte
              </div>
              <div className="grid gap-1">
                {STANDORTE.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/standort/${s.slug}`}
                    className="rounded-lg px-3 py-2 text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(3).map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link to="/anfragen">
            <Button variant="accent" size="sm">
              Kostenlos anfragen
            </Button>
          </Link>
        </div>

        <button
          className="text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#0E0E0E] lg:hidden">
          <div className="max-h-[70vh] overflow-y-auto px-4 py-5 sm:px-6 sm:py-6">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-white/70 transition-colors hover:text-white"
              >
                Startseite
              </Link>

              <button
                type="button"
                onClick={() => setMobileLeistungenOpen((v) => !v)}
                className="flex items-center justify-between rounded-lg border border-white/10 px-3 py-2.5 text-base font-medium text-white/80"
                aria-expanded={mobileLeistungenOpen}
              >
                Leistungen
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${mobileLeistungenOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
              {mobileLeistungenOpen && (
                <div className="ml-2 grid gap-1 border-l border-accent/40 pl-3">
                  <Link
                    to="/leistungen"
                    onClick={() => setMobileOpen(false)}
                    className="py-1.5 text-base font-semibold text-white/80 hover:text-white"
                  >
                    Alle Leistungen ansehen
                  </Link>
                  {LEISTUNGEN_ITEMS.map((it) => (
                    <Link
                      key={it.href}
                      to={it.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-1.5 text-base text-white/60 hover:text-white"
                    >
                      {it.label}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                to="/projekte"
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-white/70 transition-colors hover:text-white"
              >
                Projekte
              </Link>

              <button
                type="button"
                onClick={() => setMobileStandorteOpen((v) => !v)}
                className="flex items-center justify-between rounded-lg border border-white/10 px-3 py-2.5 text-base font-medium text-white/80"
                aria-expanded={mobileStandorteOpen}
              >
                Einsatzgebiete
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${mobileStandorteOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
              {mobileStandorteOpen && (
                <div className="ml-2 grid gap-1 border-l border-accent/40 pl-3">
                  {STANDORTE.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/standort/${s.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="py-1.5 text-base text-white/60 hover:text-white"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}

              {navLinks.slice(3).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            <Link to="/anfragen" onClick={() => setMobileOpen(false)}>
              <Button variant="accent" className="w-full">
                Kostenlos anfragen
              </Button>
            </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
