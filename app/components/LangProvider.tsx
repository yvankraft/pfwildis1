"use client";
import { createContext, useContext } from "react";
import type { Locale } from "@/i18n-config";
import type { Dictionary } from "@/lib/get-dictionary";

interface LangContextValue {
  lang: Locale;
  dict: Dictionary;
  href: (path: string) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({
  lang,
  dict,
  children,
}: {
  lang: Locale;
  dict: Dictionary;
  children: React.ReactNode;
}) {
  const href = (path: string) => (path === "/" ? `/${lang}` : `/${lang}${path}`);
  return (
    <LangContext.Provider value={{ lang, dict, href }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
