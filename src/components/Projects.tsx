import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  { src: project1, title: "Badsanierung", location: "Solingen", tall: true },
  { src: project2, title: "Wohnungsrenovierung", location: "Düsseldorf", tall: false },
  { src: project3, title: "Küchenumbau", location: "Wuppertal", tall: false },
  { src: project4, title: "Fassadensanierung", location: "Solingen", tall: true },
  { src: project5, title: "Trockenbau & Decken", location: "Düsseldorf", tall: false },
  { src: project6, title: "Gewerberenovierung", location: "Wuppertal", tall: false },
];

const Projects = () => {
  return (
    <section id="projekte" className="bg-background py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Referenzen
          </p>
          <h2 className="text-foreground">
            Unsere Arbeiten
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-lg ${
                p.tall ? "sm:row-span-2" : ""
              }`}
            >
              <img
                src={p.src}
                alt={`${p.title} Bau Solingen`}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  p.tall ? "h-full min-h-[400px]" : "h-64"
                }`}
                width={800}
                height={608}
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="p-6">
                  <p className="text-lg font-semibold text-primary-foreground">{p.title}</p>
                  <p className="text-sm text-accent">{p.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-lg text-muted-foreground">
            Ihre Immobilie könnte das nächste sein.
          </p>
          <a href="#kontakt">
            <Button variant="accent">Jetzt Projekt besprechen</Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
