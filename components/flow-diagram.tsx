"use client";

import { motion } from "framer-motion";

type FlowDiagramProps = {
  steps: string[];
};

export function FlowDiagram({ steps }: FlowDiagramProps) {
  return (
    <div className="glass-panel overflow-hidden rounded-[28px] border border-border px-5 py-6 md:px-8 md:py-8">
      <div className="grid gap-4 lg:grid-cols-[repeat(9,minmax(0,1fr))] lg:items-center">
        {steps.map((step, index) => (
          <div key={step} className="contents">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="rounded-full border border-gold/20 bg-gold/5 px-4 py-4 text-center font-[var(--font-inter)] text-sm font-medium text-secondaryText lg:col-span-1"
            >
              {step}
            </motion.div>
            {index < steps.length - 1 ? (
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: index * 0.08 + 0.16, duration: 0.4 }}
                className="hidden h-px origin-left bg-gradient-to-r from-gold/15 via-gold to-gold/15 lg:block lg:col-span-1"
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
