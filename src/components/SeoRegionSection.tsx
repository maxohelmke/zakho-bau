import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

type Highlight = { value: string; label: string };

type SeoRegionSectionProps = {
  title: string;
  paragraphs: string[];
  className?: string;
  variant?: "default" | "editorial";
  eyebrow?: string;
  highlights?: Highlight[];
  regions?: string[];
  services?: string[];
};

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

const DefaultLayout = ({ title, paragraphs }: Pick<SeoRegionSectionProps, "title" | "paragraphs">) => (
  <div className="mx-auto max-w-3xl">
    <h2 className="mb-6 text-foreground">{title}</h2>
    <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
      {paragraphs.map((text) => (
        <p key={text.slice(0, 48)}>{text}</p>
      ))}
    </div>
  </div>
);

const EditorialLayout = ({
  title,
  paragraphs,
  eyebrow = "Regional verwurzelt in NRW",
  highlights = [
    { value: "2014", label: "Seit" },
    { value: "1", label: "Ansprechpartner" },
    { value: "< 24h", label: "Rückmeldung" },
    { value: "100%", label: "Aus einer Hand" },
  ],
  regions = ["Gevelsberg", "Ennepetal", "Hagen", "Schwelm", "Wuppertal", "Witten"],
  services = ["Renovierung", "Badsanierung", "Trockenbau", "Malerarbeiten", "Innenausbau", "Fassade"],
}: Required<Pick<SeoRegionSectionProps, "title" | "paragraphs">> &
  Pick<SeoRegionSectionProps, "eyebrow" | "highlights" | "regions" | "services">) => (
  <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.45fr)] lg:gap-16 xl:gap-20">
    {/* Linke Spalte: Headline + Meta */}
    <motion.div {...fadeUp} className="lg:sticky lg:top-28 lg:self-start">
      <div className="mb-6 h-px w-14 origin-left bg-accent" />
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
      <h2 className="mb-8 max-w-md text-foreground">{title}</h2>

      <div className="mb-8 grid grid-cols-2 gap-3">
        {highlights.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="rounded-xl border border-foreground/8 bg-background/80 p-4 shadow-sm backdrop-blur-sm"
          >
            <p className="font-heading text-2xl font-black text-foreground">{item.value}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mb-6">
        <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-accent" />
          Einsatzgebiet
        </p>
        <div className="flex flex-wrap gap-2">
          {regions.map((city) => (
            <span
              key={city}
              className="rounded-full border border-foreground/10 bg-background px-3 py-1.5 text-xs font-medium text-foreground/75"
            >
              {city}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Leistungen
        </p>
        <div className="flex flex-wrap gap-2">
          {services.map((service) => (
            <span
              key={service}
              className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent"
            >
              <Sparkles className="h-3 w-3" />
              {service}
            </span>
          ))}
        </div>
      </div>
    </motion.div>

    {/* Rechte Spalte: Fließtext + CTA */}
    <div>
      <div className="space-y-6 border-l border-foreground/10 pl-6 sm:pl-8 lg:pl-10">
        {paragraphs.map((text, i) => (
          <motion.p
            key={text.slice(0, 48)}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-base leading-relaxed text-muted-foreground sm:text-[1.05rem] sm:leading-8"
          >
            {text}
          </motion.p>
        ))}
      </div>

      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.2 }}
        className="mt-10 flex flex-col gap-3 rounded-2xl border border-foreground/10 bg-background/90 p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <p className="font-heading text-lg font-bold text-foreground">Projekt geplant?</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Kostenlose Besichtigung · Festpreisangebot · unverbindlich
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/anfragen" className="w-full sm:w-auto">
            <Button variant="accent" className="w-full gap-2 sm:w-auto">
              Anfrage stellen <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <a href="tel:+4923328439131" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full gap-2 sm:w-auto">
              <Phone className="h-4 w-4" />
              02332 8439131
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  </div>
);

/** Sichtbarer Fließtext für lokale Keywords – hilft Crawlern und Nutzern gleichermaßen. */
const SeoRegionSection = ({
  title,
  paragraphs,
  className = "",
  variant = "default",
  eyebrow,
  highlights,
  regions,
  services,
}: SeoRegionSectionProps) => (
  <section
    className={`relative overflow-hidden section-pad ${
      variant === "editorial"
        ? "bg-[#f7f7f7]"
        : "bg-muted/40"
    } ${className}`}
    aria-label="Regionale Informationen"
  >
    {variant === "editorial" && (
      <>
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-foreground/[0.03] blur-3xl" />
      </>
    )}

    <div className="container relative z-10 mx-auto container-pad">
      {variant === "editorial" ? (
        <EditorialLayout
          title={title}
          paragraphs={paragraphs}
          eyebrow={eyebrow}
          highlights={highlights}
          regions={regions}
          services={services}
        />
      ) : (
        <DefaultLayout title={title} paragraphs={paragraphs} />
      )}
    </div>
  </section>
);

export default SeoRegionSection;
