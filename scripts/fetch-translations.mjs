import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import translations from '../app/translations/en.json' with { type: 'json' }; // Import JSON with assert
import translationsDE from '../app/translations/de.json' with { type: 'json' }; // Import JSON with assert
import translationsFR from '../app/translations/fr.json' with { type: 'json' }; // Import JSON with assert

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const defaultTranslationsPath = path.resolve(__dirname, '..', 'app', 'translations/en.json');
const defaultTranslationsPathDe = path.resolve(__dirname, '..', 'app', 'translations/de.json');
const defaultTranslationsPathFr = path.resolve(__dirname, '..', 'app', 'translations/fr.json');

const sortTranslations = () => {
  const sortedEntries = Object.entries(translations).sort(([keyA], [keyB]) => keyA.localeCompare(keyB));
  const sortedTranslations = Object.fromEntries(sortedEntries);
  const filesContent = JSON.stringify(sortedTranslations, null, 2);
  fs.writeFileSync(defaultTranslationsPath, filesContent);

  const sortedEntriesDe = Object.entries(translationsDE).sort(([keyA], [keyB]) => keyA.localeCompare(keyB));
  const sortedTranslationsDe = Object.fromEntries(sortedEntriesDe);
  const filesContentDe = JSON.stringify(sortedTranslationsDe, null, 2);
  fs.writeFileSync(defaultTranslationsPathDe, filesContentDe);

  const sortedEntriesFr = Object.entries(translationsFR).sort(([keyA], [keyB]) => keyA.localeCompare(keyB));
  const sortedTranslationsFr = Object.fromEntries(sortedEntriesFr);
  const filesContentFr = JSON.stringify(sortedTranslationsFr, null, 2);
  fs.writeFileSync(defaultTranslationsPathFr, filesContentFr);
  console.info('translations sorted');
};

async function main() {
  sortTranslations();
  console.info('translations fetched');
}

main(); // Call the main function
