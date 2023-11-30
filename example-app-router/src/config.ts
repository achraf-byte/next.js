import {Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'fr'] as const;

export const pathnames = {
  '/': '/',
  '/home': {
    en: '/home',
    fr: '/home-fr'
  },
  '/search-spare-parts': {
    en: '/search-spearparts',
    fr: '/recherche-pdmsparepart'
  },
  '/search-tyres': {
    en: '/search-styres',
    fr: '/recherche-pneux'
  },
  '/login': {
    en: '/login',
    fr: '/connection'
  }
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;
