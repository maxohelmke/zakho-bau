import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 200, suffix: "+", label: "Projekte abgeschlossen" },
  { value: 10,  suffix: "+", label: "Jahre Erfahrung" },
  { value: 100, suffix: "%", label: "Zufriedenheitsgarantie" },
  { value: 6,   suffix: "",  label: "Regionen in NRW" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

const StatsStrip = () => (
  <section className="bg-[#0f0f0f] py-16 sm:py-20 lg:py-24">
    <div className="container mx-auto container-pad">
      <div className="grid grid-cols-2 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between bg-[#0f0f0f] px-5 py-8 sm:px-8 sm:py-10 lg:px-12"
          >
            {/* Roter Strich */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
              className="mb-5 h-px w-8 origin-left bg-accent sm:mb-8 sm:w-10"
            />
            {/* Zahl */}
            <div className="font-heading text-[clamp(2.5rem,6vw,6rem)] font-black leading-none tracking-tight text-white">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            {/* Label */}
            <p className="mt-3 text-xs font-medium text-white/40 sm:mt-5 sm:text-sm">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsStrip;
