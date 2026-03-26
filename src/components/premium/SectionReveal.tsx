import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function SectionReveal({ children, className, delay = 0 }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ clipPath: "inset(15% 0 0 0)", opacity: 0 }}
      animate={isInView ? { clipPath: "inset(0% 0 0 0)", opacity: 1 } : {}}
      transition={{ duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
