import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function GoldDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="flex justify-center py-2">
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
        initial={{ width: 0, opacity: 0 }}
        animate={isInView ? { width: "80%", opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </div>
  );
}
