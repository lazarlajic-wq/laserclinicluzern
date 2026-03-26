import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string; // e.g. "2'824+", "90%", "5.0 ★", "8+"
  className?: string;
}

function parseNumber(val: string): { num: number; prefix: string; suffix: string; decimals: number } {
  // Extract numeric part
  const match = val.match(/^([^\d]*?)([\d'.]+)(.*)$/);
  if (!match) return { num: 0, prefix: "", suffix: val, decimals: 0 };
  const prefix = match[1];
  const numStr = match[2].replace(/'/g, "");
  const suffix = match[3];
  const num = parseFloat(numStr);
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { num, prefix, suffix, decimals };
}

function formatNumber(n: number, decimals: number, original: string): string {
  if (decimals > 0) return n.toFixed(decimals);
  // Add Swiss formatting with apostrophe
  if (original.includes("'")) {
    return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
  }
  return Math.round(n).toString();
}

export default function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");
  const { num, prefix, suffix, decimals } = parseNumber(value);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * num;
      setDisplay(formatNumber(current, decimals, value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, num, decimals, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}
