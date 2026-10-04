export const i18n = {
  defaultLocale: "en",
  locales: ["en", "de", "fr", "es", "zh", "ar"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  zh: "中文",
  ar: "العربية",
};

export const rtlLocales: Locale[] = ["ar"];
