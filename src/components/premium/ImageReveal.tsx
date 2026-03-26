import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
}

export default function ImageReveal({ children, className }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className || ""}`}>
      {children}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 z-10"
        initial={{ x: "0%" }}
        animate={isInView ? { x: "105%" } : {}}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
      />
      <motion.div
        className="absolute inset-0 bg-background z-[9]"
        initial={{ x: "0%" }}
        animate={isInView ? { x: "105%" } : {}}
        transition={{ duration: 0.9, delay: 0.05, ease: [0.65, 0, 0.35, 1] }}
      />
    </div>
  );
}
