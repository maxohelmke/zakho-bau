import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full max-w-full overflow-x-hidden border-b border-border bg-white">
      <div className="container mx-auto container-pad flex min-w-0 items-center justify-between gap-3 py-2.5 sm:py-3">
        <Link to="/" className="flex min-w-0 shrink items-center">
          <img
            src={logo}
            alt="TATLI BAU Logo"
            className="h-14 w-auto max-w-full object-contain sm:h-16 lg:h-[4.5rem]"
          />
        </Link>

        <div className="hidden items-center gap-7 lg:flex xl:gap-8">
          {navLinks.map((link) =>
            link.href.startsWith("/") && !link.href.includes("#") ? (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            )
          )}
          <Link to="/anfragen">
            <Button variant="accent" size="sm">
              Kostenlos anfragen
            </Button>
          </Link>
        </div>

        <button
          className="text-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="max-h-[70vh] overflow-y-auto px-6 py-6">
            <div className="flex flex-col gap-4">
            {navLinks.map((link) =>
              link.href.startsWith("/") && !link.href.includes("#") ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-foreground/70 transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-foreground/70 transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              )
            )}
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
