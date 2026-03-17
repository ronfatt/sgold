"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type SiteLanguage = "en" | "zh";

type LanguageContextValue = {
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<SiteLanguage>("zh");

  useEffect(() => {
    const saved = window.localStorage.getItem("sgold-language");
    if (saved === "en" || saved === "zh") {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("sgold-language", language);
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useSiteLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useSiteLanguage must be used within LanguageProvider");
  }

  return context;
}
