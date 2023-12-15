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
  },
  '/search-spare-parts/ref/[value]': {
    en: '/refferance_en',
    fr: '/recherche-pdmsparepart/referance/[value]'
  },
  '/search-spare-parts/immate/[value]': {
    en: '/immat_en',
    fr: '/recherche-pdmsparepart/immate/[value]'
  },
  '/search-spare-parts/vh/[value]': {
    en: '/vh_en',
    fr: '/recherche-pdmsparepart/vh/[value]'
  },
  '/search-spare-parts/[cat_id]/[v_id]': {
    en: '/vh_en',
    fr: '/recherche-pdmsparepart/[cat_id]/[v_id]'
  }
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;
