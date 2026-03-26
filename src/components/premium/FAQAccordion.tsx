import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((faq, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          className="glass-card border border-border/50 rounded-lg overflow-hidden hover:border-accent/20 transition-colors"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full px-6 py-4 text-left text-sm font-semibold flex items-center justify-between hover:text-accent transition-colors"
          >
            {faq.q}
            <motion.div
              animate={{ rotate: open === i ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </motion.div>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
