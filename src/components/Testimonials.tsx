import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// TODO: Replace with real customer reviews
const reviews = [
  {
    name: "Familie Schneider",
    location: "Wuppertal",
    text: "TATLI BAU hat unsere komplette Wohnung renoviert. Alles war termingerecht, sauber und in höchster Qualität. Absolut empfehlenswert!",
  },
  {
    name: "Thomas M.",
    location: "Wuppertal",
    text: "Vom ersten Beratungsgespräch bis zur Fertigstellung alles top. Besonders die transparente Preisgestaltung hat uns überzeugt.",
  },
  {
    name: "Aylin K.",
    location: "Bergisches Land",
    text: "Herr Tatli war immer persönlich erreichbar und hat sich um jedes Detail gekümmert. Unsere Badsanierung ist perfekt geworden.",
  },
  {
    name: "S. Berger",
    location: "Solingen",
    text: "Saubere Arbeit, klare Kommunikation und sehr ordentliche Baustelle. Das Ergebnis ist genau so geworden, wie wir es wollten.",
  },
  {
    name: "N. Demir",
    location: "Wuppertal",
    text: "Schnelle Rückmeldung, transparente Positionen im Angebot und termingerechte Umsetzung. Sehr zuverlässig.",
  },
  {
    name: "M. Klein",
    location: "Remscheid",
    text: "Badsanierung aus einer Hand – Planung, Ablauf und Qualität haben überzeugt. Würden wir jederzeit wieder beauftragen.",
  },
  {
    name: "Ladenlokal K.",
    location: "Düsseldorf",
    text: "Umbau einer Gewerbefläche: gutes Timing, saubere Übergabe und unkomplizierte Abstimmung. Top.",
  },
];

const Testimonials = () => {
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

  useEffect(() => {
    if (!api) return;
    const id = window.setInterval(() => {
      if (!api) return;
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, 4500);
    return () => window.clearInterval(id);
  }, [api]);

  return (
    <section className="bg-dark-section section-pad">
      <div className="container mx-auto container-pad">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center sm:mb-12 lg:mb-16"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Kundenstimmen
          </p>
          <h2 className="text-primary-foreground">
            Was unsere Kunden sagen
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="relative"
        >
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {reviews.map((r) => (
                <CarouselItem key={`${r.name}-${r.location}`} className="basis-[88%] sm:basis-[70%] md:basis-1/2 xl:basis-1/3">
                  <div className="h-full rounded-lg border border-primary-foreground/10 bg-dark-lighter p-6">
                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="mb-6 text-sm leading-relaxed text-primary-foreground/60">„{r.text}“</p>
                    <div>
                      <p className="font-semibold text-primary-foreground">{r.name}</p>
                      <p className="text-xs text-primary-foreground/40">{r.location}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>

          {/* Dots */}
          <div className="mt-6 flex w-full justify-center">
            <div
              className="flex min-h-9 max-w-full items-center justify-center gap-1.5 overflow-x-auto overflow-y-hidden px-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              role="tablist"
              aria-label="Kundenstimmen"
            >
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Bewertung ${i + 1} von ${reviews.length}`}
                  onClick={() => api?.scrollTo(i)}
                  className={cn(
                    "h-1.5 shrink-0 rounded-full transition-all duration-300",
                    i === current ? "w-6 bg-accent" : "w-1.5 bg-accent/25 hover:bg-accent/45",
                  )}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
