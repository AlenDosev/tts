export const useCommon = () => {
  const getSelectedLanguage = (): string => {
    const storedLanguage = localStorage.getItem('tts_selectedLocale');
    if (storedLanguage) {
      return storedLanguage;
    }

    const locale = navigator.language;
    if (
      locale === 'de-DE' ||
      locale === 'de-AT' ||
      locale === 'de-CH' ||
      locale === 'de-LI' ||
      locale === 'de-LU'
    ) {
      return 'de';
    }

    if (
      locale === 'fr-FR' ||
      locale === 'fr-BE' ||
      locale === 'fr-CH' ||
      locale === 'fr-CA' ||
      locale === 'fr-LU'
    ) {
      return 'fr';
    }

    if (locale === 'nl-NL' || locale === 'nl-BE') {
      return 'nl';
    }

    if (locale.includes('en-')) {
      return 'en';
    }

    return locale;
  };

  return {
    getSelectedLanguage,
  };
};
