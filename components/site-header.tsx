"use client";

import clsx from "clsx";
import { Globe2 } from "lucide-react";
import { useEffect, useState } from "react";

import { useSiteLanguage } from "@/components/language-provider";
import { copy, t } from "@/lib/copy";
import { languageOptions, navItems } from "@/lib/site-data";

export function SiteHeader() {
  const [active, setActive] = useState("hero");
  const { language, setLanguage } = useSiteLanguage();
  const labels = {
    hero: t(language, copy.nav.overview),
    "what-is": t(language, copy.nav.whatIs),
    "why-now": t(language, copy.nav.whyNow),
    architecture: t(language, copy.nav.architecture),
    revenue: t(language, copy.nav.revenue),
    faq: t(language, copy.nav.faq),
  };

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.2, 0.5, 0.8] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-4 z-50 mx-auto flex w-[calc(100%-1.5rem)] max-w-content items-center justify-between gap-4 rounded-full border border-white/10 bg-secondary/70 px-4 py-3 backdrop-blur-xl md:w-[calc(100%-2rem)] md:px-6">
      <a href="#hero" className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-highlight to-darkGold font-[var(--font-inter)] text-lg font-bold text-background">
          S
        </span>
        <div>
          <p className="font-[var(--font-inter)] text-sm font-semibold tracking-[0.24em] text-highlight">
            S-GOLD
          </p>
          <p className="text-xs text-muted">{t(language, copy.brandSubline)}</p>
        </div>
      </a>

      <nav className="hidden items-center gap-2 rounded-full border border-white/6 bg-white/[0.02] p-1 lg:flex">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={clsx(
              "rounded-full px-4 py-2 text-sm transition",
              active === item.id ? "bg-white/[0.06] text-primary" : "text-muted hover:text-secondaryText",
            )}
          >
            {labels[item.id as keyof typeof labels] ?? item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-3 py-2">
        <Globe2 className="h-4 w-4 text-gold" />
        <div className="flex items-center gap-1 text-sm text-muted">
          {languageOptions.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setLanguage(item === "中文" ? "zh" : "en")}
              className={clsx(
                "rounded-full px-2 py-1 transition",
                (item === "中文" && language === "zh") || (item === "EN" && language === "en")
                  ? "text-primary"
                  : "text-muted",
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
