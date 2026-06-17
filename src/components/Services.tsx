import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import {
  Paintbrush,
  Hammer,
  LayoutGrid,
  Home,
  Wrench,
  Layers,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Renovierung",
    short: "& Modernisierung",
    desc: "Komplettrenovierungen und Wohnungssanierungen – termingerecht, sauber, zum Festpreis.",
    detail: "Von der Planung bis zur schlüsselfertigen Übergabe. Wir renovieren Wohnungen, Häuser und Gewerberäume professionell und termingerecht.",
    href: "/leistungen#renovierung",
    gradient: "from-[#CC1515]/20 via-[#CC1515]/5 to-transparent",
  },
  {
    icon: Layers,
    title: "Trockenbau",
    short: "& Innenausbau",
    desc: "Wände, Decken, Ständerwerk – professioneller Trockenbau für Privat- und Gewerbekunden.",
    detail: "Raumtrennung, Schallschutz, abgehängte Decken. Präzise Ausführung mit hochwertigen Materialien von führenden Herstellern.",
    href: "/leistungen#trockenbau",
    gradient: "from-[#CC1515]/20 via-[#CC1515]/5 to-transparent",
  },
  {
    icon: Paintbrush,
    title: "Malerarbeiten",
    short: "& Tapezieren",
    desc: "Innen- und Außenanstriche, Tapezierarbeiten und dekorative Wandgestaltung.",
    detail: "Frische Farben, neue Tapeten, dekorative Techniken. Wir gestalten Ihren Wohn- oder Gewerberaum nach Ihren Wünschen.",
    href: "/leistungen#malerarbeiten",
    gradient: "from-[#CC1515]/20 via-[#CC1515]/5 to-transparent",
  },
  {
    icon: LayoutGrid,
    title: "Bodenbeläge",
    short: "& Fliesen",
    desc: "Verlegen von Laminat, Parkett, Vinyl und Fliesen – sauber und fachgerecht.",
    detail: "Präzises Verlegen aller Bodenbelagsarten. Untergrundvorbereitung, Nivellierung und fachgerechte Verlegung inklusive.",
    href: "/leistungen#bodenbelag",
    gradient: "from-[#CC1515]/20 via-[#CC1515]/5 to-transparent",
  },
  {
    icon: Home,
    title: "Badsanierung",
    short: "Komplettsanierung",
    desc: "Komplettsanierung von Badezimmern – Fliesen, Sanitär, Trockenbau aus einer Hand.",
    detail: "Ihr Bad neu – von der Planung bis zur Übergabe. Fliesen, Sanitär, Trockenbau, Elektro – alles koordiniert aus einer Hand.",
    href: "/leistungen#sanierung",
    gradient: "from-[#CC1515]/20 via-[#CC1515]/5 to-transparent",
  },
  {
    icon: Wrench,
    title: "Außenarbeiten",
    short: "& Fassade",
    desc: "Fassadenarbeiten, Außenputz und kleinere Erdarbeiten rund ums Haus.",
    detail: "Wetterfeste Fassaden, Außenputz und Anstrich. Professionelle Ausführung für dauerhaften Schutz Ihres Gebäudes.",
    href: "/leistungen#aussenarbeiten",
    gradient: "from-[#CC1515]/20 via-[#CC1515]/5 to-transparent",
  },
];

type Service = (typeof services)[number];

const FlipServiceCard = ({ s }: { s: Service }) => {
  const Icon = s.icon;
  return (
    <div className="flip-card h-64 w-full cursor-pointer sm:h-72">
      <div className="flip-card-inner rounded-xl">
        {/* Front */}
        <div
          className={`flip-card-front flex flex-col rounded-xl border border-white/10 bg-gradient-to-br ${s.gradient} bg-[#161616] p-6 shadow-lg`}
        >
          <div className="mb-4 inline-flex w-fit rounded-lg bg-accent/15 p-3">
            <Icon className="h-6 w-6 text-accent" />
          </div>
          <h3 className="mb-1 text-xl font-bold text-white">{s.title}</h3>
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">
            {s.short}
          </p>
          <p className="flex-1 text-sm leading-relaxed text-white/55">{s.desc}</p>
          <div className="mt-4 flex items-center gap-1 text-xs font-medium text-accent/70">
            <span>Karte umdrehen</span>
            <ArrowRight className="h-3 w-3" />
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back flex flex-col rounded-xl border border-accent/30 bg-accent p-6 shadow-lg">
          <div className="mb-3 inline-flex w-fit rounded-lg bg-white/20 p-3">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="mb-3 text-xl font-bold text-white">{s.title}</h3>
          <p className="flex-1 text-sm leading-relaxed text-white/85">{s.detail}</p>
          <Link
            to={s.href}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/15 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/25"
          >
            Mehr erfahren <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ServicesMobileCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const sync = () => setCurrent(api.selectedScrollSnap());
    sync();
    api.on("select", sync);
    api.on("reInit", sync);
    return () => {
      api.off("select", sync);
      api.off("reInit", sync);
    };
  }, [api]);

  return (
    <div className="w-full min-w-0 max-w-full overflow-x-hidden">
      <Carousel
        setApi={setApi}
        opts={{ align: "center", loop: true, dragFree: false, containScroll: "trimSnaps" }}
        className="w-full max-w-full min-w-0"
      >
        <CarouselContent className="-ml-0">
          {services.map((s) => (
            <CarouselItem key={s.title} className="min-w-0 basis-full pl-0">
              <div className="px-1">
                <FlipServiceCard s={s} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mt-6 flex w-full justify-center">
        <div
          className="flex min-h-9 max-w-full items-center justify-center gap-1.5 overflow-x-auto overflow-y-hidden px-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Leistungen"
        >
          {services.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Leistung ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "h-1.5 shrink-0 rounded-full transition-all duration-300",
                i === current ? "w-6 bg-accent" : "w-1.5 bg-accent/30 hover:bg-accent/50",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="leistungen" className="bg-background section-pad">
      <div className="container mx-auto container-pad">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center sm:mb-12 lg:mb-16"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Unsere Leistungen
          </p>
          <h2 className="text-foreground">Was wir für Sie tun</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Hover über eine Karte für Details — alles aus einer Hand.
          </p>
        </motion.div>

        {/* Mobile */}
        <div className="md:hidden">
          <ServicesMobileCarousel />
        </div>

        {/* Desktop Grid */}
        <div className="hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <FlipServiceCard s={s} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link to="/leistungen">
            <Button variant="outline" size="lg">
              Alle Leistungen im Detail →
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
