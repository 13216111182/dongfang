import type { Dictionary, Locale } from "./types";
import { zhDictionary } from "./dictionaries/zh";
import { enDictionary } from "./dictionaries/en";

const dictionaries: Record<Locale, Dictionary> = {
  zh: zhDictionary,
  en: enDictionary,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith("/en") ? "en" : "zh";
}

/** Prefix a path with locale segment when needed */
export function localizedHref(path: string, locale: Locale): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === "zh") {
    return normalized === "/en" ? "/" : normalized.replace(/^\/en/, "") || "/";
  }
  if (normalized.startsWith("/en")) return normalized;
  return normalized === "/" ? "/en" : `/en${normalized}`;
}

export function getCategoryBySlugFromDict(dict: Dictionary, slug: string) {
  return dict.categories.find((c) => c.slug === slug);
}

export function getNewsByIdFromDict(dict: Dictionary, id: string) {
  return dict.news.find((n) => n.id === id);
}

export type { Dictionary, Locale };
