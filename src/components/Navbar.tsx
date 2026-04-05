import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Projekte", href: "/projekte" },
  { label: "Über uns", href: "/#ueber-uns" },
  { label: "Kontakt", href: "/#kontakt" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 shadow-sm backdrop-blur-md"
          : "bg-background"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-2 lg:px-8">
        <a href="#" className="flex items-center">
          <img src={logo} alt="TATLI BAU Logo" className="h-14 w-auto" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a href="#kontakt">
            <Button variant="accent" size="sm">
              Kostenlos anfragen
            </Button>
          </a>
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a href="#kontakt" onClick={() => setMobileOpen(false)}>
              <Button variant="accent" className="w-full">
                Kostenlos anfragen
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
