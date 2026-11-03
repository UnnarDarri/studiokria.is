/**
 * i18n Utility - Translation system for Studio Kria
 * Supports English (en) and Icelandic (is)
 */

import en from './en.json';
import is from './is.json';

export type Locale = 'en' | 'is';
export type TranslationKey = keyof typeof en;

const translations: Record<Locale, typeof en> = {
  en,
  is,
};

export const defaultLocale: Locale = 'en';
export const supportedLocales: Locale[] = ['en', 'is'];

export function getTranslation(locale: Locale): typeof en {
  return translations[locale] || translations[defaultLocale];
}

export function t(locale: Locale, key: string, params?: Record<string, string | number>): string {
  const translation = getTranslation(locale);
  const keys = key.split('.');
  let value: unknown = translation;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      // Fallback to English
      value = getTranslation(defaultLocale);
      for (const fk of keys) {
        if (value && typeof value === 'object' && fk in value) {
          value = (value as Record<string, unknown>)[fk];
        } else {
          return key; // Return key if not found
        }
      }
      break;
    }
  }

  let result = String(value);

  // Replace parameters
  if (params) {
    Object.entries(params).forEach(([paramKey, paramValue]) => {
      result = result.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), String(paramValue));
    });
  }

  return result;
}

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  if (supportedLocales.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }
  return defaultLocale;
}

export function getLocalizedPath(pathname: string, locale: Locale): string {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (supportedLocales.includes(firstSegment as Locale)) {
    // Replace existing locale
    segments[0] = locale;
  } else {
    // Add locale prefix
    segments.unshift(locale);
  }

  return '/' + segments.join('/');
}

export function removeLocaleFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (supportedLocales.includes(firstSegment as Locale)) {
    segments.shift();
  }

  return '/' + segments.join('/');
}

export function alternateLanguages(currentLocale: Locale, pathname: string): Array<{ lang: string; url: string }> {
  return supportedLocales.map(locale => ({
    lang: locale,
    url: getLocalizedPath(pathname, locale),
  }));
}