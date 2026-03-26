import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProgressRingProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  label: string;
  sublabel?: string;
  className?: string;
}

export default function ProgressRing({
  value,
  size = 120,
  strokeWidth = 5,
  label,
  sublabel,
  className = "",
}: ProgressRingProps) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg ref={ref} width={size} height={size} className="rotate-[-90deg]">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            style={{ filter: "drop-shadow(0 0 8px hsl(var(--accent) / 0.4))" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl md:text-3xl font-bold text-gradient-gold">{label}</span>
        </div>
      </div>
      {sublabel && (
        <p className="text-xs text-muted-foreground text-center">{sublabel}</p>
      )}
    </div>
  );
}
