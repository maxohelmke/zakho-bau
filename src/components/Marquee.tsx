const items = [
  "Renovierung",
  "Trockenbau",
  "Malerarbeiten",
  "Bodenbeläge",
  "Badsanierung",
  "Fassade",
  "Abriss & Entkernung",
  "Innenausbau",
];

const Sep = () => (
  <span className="mx-8 inline-block h-1 w-1 rounded-full bg-accent/70 sm:mx-10" aria-hidden />
);

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Marquee = () => {
  const row = [...items, ...items, ...items];
  return (
    <section
      aria-hidden
      className="relative flex overflow-hidden border-y border-white/8 bg-[#0f0f0f] py-4"
    >
      <div
        className="flex w-max shrink-0 items-center"
        style={{ animation: prefersReducedMotion ? "none" : "marquee 22s linear infinite" }}
      >
        {row.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="whitespace-nowrap font-heading text-sm font-bold uppercase tracking-[0.18em] text-white/35 sm:text-base">
              {item}
            </span>
            <Sep />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0f0f0f] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0f0f0f] to-transparent" />
    </section>
  );
};

export default Marquee;
