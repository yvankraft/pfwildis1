import type { Locale } from "@/i18n-config";

export type Localized = Record<Locale, string>;

export function t(value: Localized, lang: Locale): string {
  return value[lang] ?? value.en;
}
