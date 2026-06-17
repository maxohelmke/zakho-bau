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

const reviews = [
  {
    name: "Familie Schneider",
    location: "Gevelsberg",
    text: "Zakho Bau hat unsere komplette Wohnung renoviert. Alles war termingerecht, sauber und in höchster Qualität. Absolut empfehlenswert!",
  },
  {
    name: "Thomas M.",
    location: "Gevelsberg",
    text: "Vom ersten Beratungsgespräch bis zur Fertigstellung alles top. Besonders die transparente Preisgestaltung hat uns überzeugt.",
  },
  {
    name: "Aylin K.",
    location: "Ennepe-Ruhr-Kreis",
    text: "Der Inhaber war immer persönlich erreichbar und hat sich um jedes Detail gekümmert. Unsere Badsanierung ist perfekt geworden.",
  },
  {
    name: "S. Berger",
    location: "Schwelm",
    text: "Saubere Arbeit, klare Kommunikation und sehr ordentliche Baustelle. Das Ergebnis ist genau so geworden, wie wir es wollten.",
  },
  {
    name: "N. Demir",
    location: "Gevelsberg",
    text: "Schnelle Rückmeldung, transparente Positionen im Angebot und termingerechte Umsetzung. Sehr zuverlässig.",
  },
  {
    name: "M. Klein",
    location: "Ennepetal",
    text: "Badsanierung aus einer Hand — Planung, Ablauf und Qualität haben überzeugt. Würden wir jederzeit wieder beauftragen.",
  },
  {
    name: "Ladenlokal K.",
    location: "Hagen",
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
    <section className="relative overflow-hidden bg-[#F4F4F4] section-pad">
      <div className="container relative mx-auto container-pad">
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
          <h2 className="text-foreground">
            Was unsere Kunden sagen
          </h2>
          {/* Google-Bewertungs-Badge */}
          <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-border bg-white px-5 py-2.5 shadow-sm">
            <svg className="h-5 w-5" viewBox="0 0 24 24" aria-label="Google">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-sm font-semibold text-foreground">5,0</span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]" />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">Google Bewertungen</span>
          </div>
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
                  <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    {/* Roter Akzent-Strich oben beim Hover */}
                    <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 rounded-t-xl bg-accent transition-transform duration-400 group-hover:scale-x-100" />

                    {/* Header: Avatar + Name */}
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                        {r.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate font-semibold text-foreground">{r.name}</p>
                        <p className="text-xs text-muted-foreground">{r.location}</p>
                      </div>
                      {/* Google G rechts */}
                      <svg className="ml-auto h-5 w-5 shrink-0 opacity-60" viewBox="0 0 24 24" aria-hidden>
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>

                    {/* Goldene Sterne */}
                    <div className="mb-3 flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]" />
                      ))}
                    </div>

                    {/* Bewertungstext */}
                    <p className="text-sm leading-relaxed text-foreground/70">
                      &bdquo;{r.text}&ldquo;
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>

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
                    i === current ? "w-6 bg-accent" : "w-1.5 bg-foreground/20 hover:bg-foreground/40",
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
