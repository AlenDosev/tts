export type SupportedLocale = 'en' | 'de' | 'fr';

const SUPPORTED_LOCALES: SupportedLocale[] = ['en', 'de', 'fr'];

const isSupportedLocale = (value: string | null): value is SupportedLocale => {
  return SUPPORTED_LOCALES.includes(value as SupportedLocale);
};

export const useCommon = () => {
  const getSelectedLanguage = (): SupportedLocale => {
    const storedLanguage = localStorage.getItem('tts_selectedLocale');
    if (isSupportedLocale(storedLanguage)) {
      return storedLanguage;
    }

    const browserLanguage = navigator.language.slice(0, 2).toLowerCase();
    if (isSupportedLocale(browserLanguage)) {
      return browserLanguage;
    }

    return 'en';
  };

  return {
    getSelectedLanguage,
  };
};
