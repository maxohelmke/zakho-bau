import { Link } from "react-router-dom";
import { STANDORTE } from "@/data/standorte";
import helmkeLogo from "@/assets/HD_SMALL_MONO.png";
import logo from "@/assets/zakho-bau-logo.png";

const navLinks = [
  { to: "/leistungen", label: "Leistungen" },
  { to: "/projekte", label: "Projekte" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/kontakt", label: "Kontakt" },
  { to: "/anfragen", label: "Anfragen" },
  { to: "/faq", label: "FAQ" },
];

const Footer = () => (
  <footer className="relative w-full overflow-hidden bg-[#0f0f0f]">
    {/* Oberkante: roter Akzentstreifen */}
    <div className="h-px w-full bg-accent" />

    {/* Hauptbereich */}
    <div className="container mx-auto container-pad py-16 sm:py-20">
      <div className="grid gap-12 sm:gap-14 lg:grid-cols-[1fr_auto_auto_auto]">

        {/* Brand-Statement */}
        <div className="max-w-xs">
          <Link to="/" className="mb-5 inline-block" aria-label="Zakho Bau – Startseite">
            <img
              src={logo}
              alt="Zakho Bau Logo"
              className="h-14 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </Link>
          <p className="text-sm leading-relaxed text-white/40">
            Renovierung, Sanierung und Innenausbau in Gevelsberg und dem Ennepe-Ruhr-Kreis.
          </p>
          <div className="mt-6 flex flex-col gap-1.5">
            <a href="tel:+4923328439131" className="text-sm font-medium text-white/60 transition-colors hover:text-accent">
              02332 8439131
            </a>
            <a href="tel:+4915788888852" className="text-sm font-medium text-white/60 transition-colors hover:text-accent">
              0157 888 888 52
            </a>
            <a href="mailto:info@zakho-bau.de" className="text-sm font-medium text-white/60 transition-colors hover:text-accent">
              info@zakho-bau.de
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-white/30">
            Seiten
          </p>
          <nav className="flex flex-col">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="flex min-h-[40px] items-center text-sm text-white/55 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Standorte */}
        <div>
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-white/30">
            Standorte
          </p>
          <div className="flex flex-col">
            {STANDORTE.map((s) => (
              <Link
                key={s.slug}
                to={`/standort/${s.slug}`}
                className="flex min-h-[40px] items-center text-sm text-white/55 transition-colors hover:text-white"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Rechtliches */}
        <div>
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-white/30">
            Rechtliches
          </p>
          <div className="flex flex-col">
            <span className="mb-2 text-sm text-white/40">
              Hagener Str. 44<br />58285 Gevelsberg
            </span>
            <Link to="/impressum" className="flex min-h-[40px] items-center text-sm text-white/55 transition-colors hover:text-white">
              Impressum
            </Link>
            <Link to="/datenschutz" className="flex min-h-[40px] items-center text-sm text-white/55 transition-colors hover:text-white">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/8">
      <div className="relative container mx-auto flex flex-col items-center justify-center gap-3 container-pad py-5 sm:flex-row sm:justify-between">
        <p className="text-xs text-white/25">
          © 2026 Zakho Bau · Gevelsberg
        </p>
        <a
          href="https://www.helmke-digital.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-xs text-white/25 transition-colors hover:text-white/60 sm:absolute sm:left-1/2 sm:-translate-x-1/2"
          aria-label="Created by Helmke Digital"
        >
          <span>Made by</span>
          <img
            src={helmkeLogo}
            alt="Helmke Digital"
            className="h-8 w-auto object-contain opacity-25 brightness-0 invert transition-opacity group-hover:opacity-60"
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
