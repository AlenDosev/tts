import de from '../app/translations/de.json';
import en from '../app/translations/en.json';
import fr from '../app/translations/fr.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    de,
    en,
    fr,
  },
  detectBrowserLanguage: true,
  fallbackLocale: {
    'de-DE': ['de', 'en'],
    'de-AT': ['de', 'en'],
    'de-CH': ['de', 'en'],
    'de-LI': ['de', 'en'],
    'de-LU': ['de', 'en'],
    'fr-CH': ['fr', 'en'],
    'fr-BE': ['fr', 'en'],
  },
  defaultLocale: 'en',
}));
