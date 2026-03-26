import { motion } from "framer-motion";

const items = [
  "SCHMERZARM",
  "DAUERHAFT",
  "KLINISCHE QUALITÄT",
  "300+ BEHANDLUNGEN",
  "5.0 GOOGLE",
  "SPEZIALISIERT AUF MÄNNER",
  "SCHWEIZER QUALITÄT",
  "DIODENLASER",
];

export default function Marquee() {
  const duplicated = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-5 md:py-6 border-y border-accent/10 bg-background/50">
      <motion.div
        className="flex whitespace-nowrap gap-8 md:gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, ease: "linear", repeat: Infinity }}
      >
        {duplicated.map((item, i) => (
          <span key={i} className="flex items-center gap-8 md:gap-12">
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-muted-foreground/60 hover:text-accent transition-colors duration-300">
              {item}
            </span>
            <span className="text-accent/40 text-lg">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
