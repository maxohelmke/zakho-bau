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
  Trash2,
  ClipboardList,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Renovierung",
    short: "Innenausbau",
    desc: "Wände, Böden, Decken und kompletter Innenausbau – wir verwandeln Ihre Räume.",
  },
  {
    icon: Wrench,
    title: "Sanierung",
    short: "Kern & Bad",
    desc: "Kernsanierung, Fassadensanierung und Badsanierung nach höchsten Standards.",
  },
  {
    icon: LayoutGrid,
    title: "Trockenbau",
    short: "Wände & Decken",
    desc: "Gipskarton, Zwischenwände und Deckenabhängungen – präzise und sauber.",
  },
  {
    icon: Paintbrush,
    title: "Malerarbeiten",
    short: "Innen & Außen",
    desc: "Professionelle Oberflächen für Innen und Außen – fachgerecht und langlebig.",
  },
  {
    icon: Layers,
    title: "Fliesenleger",
    short: "Bad & Küche",
    desc: "Bad, Küche, Terrasse und Außenbereiche – exakte Verlegung für perfekte Ergebnisse.",
  },
  {
    icon: Hammer,
    title: "Bodenverlegung",
    short: "Parkett & Vinyl",
    desc: "Parkett, Laminat, Vinyl und Estrich – für jeden Raum der richtige Boden.",
  },
  {
    icon: Trash2,
    title: "Abrissarbeiten",
    short: "Rückbau",
    desc: "Rückbau und Entkernung – schnell, sicher und fachgerecht durchgeführt.",
  },
  {
    icon: ClipboardList,
    title: "Komplettlösungen",
    short: "Alles aus einer Hand",
    desc: "Bauleitung und Generalunternehmer – alles aus einer Hand für Ihr Projekt.",
  },
];

type Service = (typeof services)[number];

const ServiceCard = ({ s }: { s: Service }) => {
  const Icon = s.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      className="group flex h-full flex-col rounded-xl border border-border bg-background p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10 sm:p-6"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="inline-flex rounded-md bg-accent/10 p-3">
          <Icon className="h-6 w-6 text-accent" />
        </div>
        <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
          {s.short}
        </span>
      </div>
      <h3 className="mb-2 text-xl text-foreground sm:text-2xl">{s.title}</h3>
      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
      <div className="mt-5 h-0.5 w-10 bg-accent transition-all duration-300 group-hover:w-full" />
    </motion.div>
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
        opts={{
          align: "center",
          loop: true,
          dragFree: false,
          containScroll: "trimSnaps",
        }}
        className="w-full max-w-full min-w-0"
      >
        <CarouselContent className="-ml-0">
          {services.map((s) => (
            <CarouselItem key={s.title} className="min-w-0 basis-full pl-0">
              <div className="px-1">
                <motion.div
                  initial={false}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25 }}
                >
                  <ServiceCard s={s} />
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Punkt-Navigation, zentriert (Wischen zum Wechseln) */}
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
              aria-label={`Leistung ${i + 1} von ${services.length}: ${services[i].title}`}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "h-1.5 shrink-0 rounded-full transition-all duration-300",
                i === current
                  ? "w-6 bg-accent"
                  : "w-1.5 bg-accent/25 hover:bg-accent/45"
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
    <section id="leistungen" className="bg-secondary section-pad">
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
        </motion.div>

        {/* Mobil: zentriertes Einzel-Karussell mit Dots */}
        <div className="md:hidden">
          <ServicesMobileCarousel />
        </div>

        {/* Tablet & Desktop: Raster */}
        <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <ServiceCard s={s} />
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
