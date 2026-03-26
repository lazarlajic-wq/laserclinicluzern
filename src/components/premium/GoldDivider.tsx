import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function GoldDivider({ symbol }: { symbol?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="flex items-center justify-center py-2 gap-4">
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-accent/60 to-accent/20"
        initial={{ width: 0, opacity: 0 }}
        animate={isInView ? { width: symbol ? "35%" : "80%", opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
      {symbol && (
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-accent/40 text-sm flex-shrink-0"
        >
          {symbol}
        </motion.span>
      )}
      {symbol && (
        <motion.div
          className="h-px bg-gradient-to-l from-transparent via-accent/60 to-accent/20"
          initial={{ width: 0, opacity: 0 }}
          animate={isInView ? { width: "35%", opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      )}
    </div>
  );
}
