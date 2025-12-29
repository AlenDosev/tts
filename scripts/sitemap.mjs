import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathVueComponentsRoot = path.resolve(__dirname, '..', 'app/pages/');
const sitemapEnPath = path.resolve(__dirname, '..', 'public/sitemap.xml');

function flatten(lists) {
  return lists.reduce((a, b) => a.concat(b), []);
}

function getDirectories(srcpath) {
  const directory = fs.readdirSync(srcpath).map(file => path.join(srcpath, file));
  return directory.filter(path => fs.statSync(path).isDirectory());
}

function getDirectoriesRecursive(srcpath) {
  return [srcpath, ...flatten(getDirectories(srcpath).map(getDirectoriesRecursive))];
}

const baseString = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

const generateBaseListOfFiles = () => {
  const listOfUrls = new Set();

  const listOfFiles = getDirectoriesRecursive(pathVueComponentsRoot);
  listOfFiles.forEach(file => {
    const url = file.split('/pages')[1];
    if (!url.includes('[id]')) {
      if (url === '') {
        listOfUrls.add('');
      } else {
        listOfUrls.add(url);
      }
    }
  });

  const result = [];
  Array.from(listOfUrls).forEach(file => {
    const filePath = pathVueComponentsRoot + file;
    const files = fs.readdirSync(filePath);
    if (files.includes('index.vue')) {
      result.push(file);
    }
  });
  return result;
};

const generateEnSitemap = listOfRoutes => {
  let result = baseString;
  listOfRoutes.forEach(route => {
    result += `\t<url>\n`;
    result += `\t\t<loc>https://tts-renovation.ch${route}</loc>\n`;
    result += `\t</url>\n`;
  });
  result += '</urlset>';
  return result;
};

function main() {
  const listOfRoutes = generateBaseListOfFiles();
  const enSitemap = generateEnSitemap(listOfRoutes);

  fs.writeFileSync(sitemapEnPath, enSitemap);

  console.info('sitemaps created');
}

main(); // Call the main function
