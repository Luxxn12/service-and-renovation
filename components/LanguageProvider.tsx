'use client';

import { createContext, useContext, useMemo, useState } from "react";
import en from "@/locales/en.json";
import id from "@/locales/id.json";

const TRANSLATIONS = {
  en,
  id,
} as const;

export type SupportedLanguage = keyof typeof TRANSLATIONS;
export type Translations = (typeof TRANSLATIONS)[SupportedLanguage];

type LanguageContextValue = {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  toggleLanguage: () => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export function LanguageProvider({
  children,
  defaultLanguage = "id",
}: {
  children: React.ReactNode;
  defaultLanguage?: SupportedLanguage;
}) {
  const [language, setLanguage] = useState<SupportedLanguage>(defaultLanguage);

  const value = useMemo<LanguageContextValue>(() => {
    const toggleLanguage = () => {
      setLanguage((prev) => (prev === "en" ? "id" : "en"));
    };

    return {
      language,
      setLanguage,
      toggleLanguage,
      t: TRANSLATIONS[language],
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
