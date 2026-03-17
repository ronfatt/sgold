"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { useSiteLanguage } from "@/components/language-provider";
import { getLocalizedFaqItems } from "@/lib/copy";

export function FaqAccordion() {
  const [open, setOpen] = useState(0);
  const { language } = useSiteLanguage();
  const faqItems = getLocalizedFaqItems(language);

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question} className="glass-panel overflow-hidden rounded-card border border-border card-hover">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left md:px-8"
            >
              <span className="font-[var(--font-inter)] text-lg font-medium text-primary">{item.question}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-gold transition ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <p className="px-6 pb-6 text-base leading-8 text-muted md:px-8">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
