import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import translations from '../app/translations/en.json' with { type: 'json' }; // Import JSON with assert

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const defaultTranslationsPath = path.resolve(__dirname, '..', 'app', 'translations/en.json');

const sortTranslations = () => {
  const sortedEntries = Object.entries(translations).sort(([keyA], [keyB]) => keyA.localeCompare(keyB));
  const sortedTranslations = Object.fromEntries(sortedEntries);
  const filesContent = JSON.stringify(sortedTranslations, null, 2);
  fs.writeFileSync(defaultTranslationsPath, filesContent);
  console.info('translations sorted');
};

async function main() {
  sortTranslations();
  console.info('translations fetched');
}

main(); // Call the main function
