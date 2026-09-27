import { SITE_URL, serviceJsonLd } from '~~/shared/business';

interface PageSeoOptions {
  title: () => string;
  description: () => string;
  path: string;
}

export const usePageSeo = ({ title, description, path }: PageSeoOptions) => {
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  const service = serviceJsonLd(path);

  useSeoMeta({
    title,
    ogTitle: title,
    twitterTitle: title,
    description,
    ogDescription: description,
    twitterDescription: description,
    ogUrl: url,
  });

  useHead({
    link: [{ rel: 'canonical', href: url }],
    script: service ? [{ type: 'application/ld+json', innerHTML: JSON.stringify(service) }] : [],
  });
};
