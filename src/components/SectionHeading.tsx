import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** @deprecated – wird nicht mehr angezeigt */
  index?: string;
  /** @deprecated – wird nicht mehr angezeigt */
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  dark?: boolean;
  className?: string;
}

const SectionHeading = ({ title, description, dark, className }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={cn("mb-10 sm:mb-12 lg:mb-16", className)}
    >
      <div
        className={cn(
          "flex flex-col gap-4 border-b pb-6 md:flex-row md:items-end md:justify-between md:gap-12",
          dark ? "border-white/15" : "border-foreground/12",
        )}
      >
        <h2 className={cn("leading-[1.05]", dark ? "text-white" : "text-foreground")}>
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "max-w-sm shrink-0 text-sm leading-relaxed md:text-right",
              dark ? "text-white/50" : "text-muted-foreground",
            )}
          >
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default SectionHeading;
