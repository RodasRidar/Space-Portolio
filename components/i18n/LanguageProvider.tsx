"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { content, type Content, type Locale } from "@/constants";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  toggle: () => void;
  t: Content;
};

const STORAGE_KEY = "locale";
const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Server and first client render must agree, so we always start in "en"
  // and resolve the real locale in an effect to avoid hydration mismatch.
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) {
      setLocaleState(stored);
      return;
    }
    const detected: Locale = navigator.language
      .toLowerCase()
      .startsWith("es")
      ? "es"
      : "en";
    setLocaleState(detected);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage failures (private mode, disabled cookies).
    }
  }, []);

  const toggle = useCallback(() => {
    setLocale(locale === "en" ? "es" : "en");
  }, [locale, setLocale]);

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, toggle, t: content[locale] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
