import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/main.scss'],
  devtools: { enabled: false },
  modules: ['@pinia/nuxt', '@nuxt/eslint', '@nuxt/image', '@nuxtjs/i18n', '@nuxt/scripts'],
  nitro: {
    compressPublicAssets: true,
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/avif', href: '/logo.avif' },
        { rel: 'manifest', href: '/manifest.json' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'TTS Renovation' },
        { property: 'og:image', content: 'https://defma1gvj98ta.cloudfront.net/contact.avif' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://defma1gvj98ta.cloudfront.net/contact.avif' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'TTS Renovation',
            url: 'https://tts-renovation.ch',
            telephone: '+41762804757',
            email: 'tts.renovation@outlook.com',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'CH',
            },
            openingHours: 'Mo-Fr 08:00-17:00',
            priceRange: '$$',
            sameAs: ['https://www.instagram.com/tts_renovation'],
          }),
        },
      ],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/styles/mixins" as *;',
        },
      },
    },
    build: {
      commonjsOptions: {
        include: [/node_modules/],
      },
      target: 'es2023',
      minify: 'esbuild',
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: true,
      global: true,
    },
    {
      path: '~/components/ui',
      pathPrefix: false,
      global: true,
    },
  ],
  i18n: {
    defaultLocale: 'en',
  },
  typescript: {
    typeCheck: true,
  },
  imports: {
    autoImport: true,
    dirs: ['types', 'stores'],
  },
  scripts: {
    registry: {
      googleTagManager: {
        id: 'GTM-P4JG9XGB',
      },
      googleAnalytics: {
        id: 'G-K36750VY6E',
      },
    },
  },
  features: {
    // Nuxt 4.4.5 drops <link> tags when styles are inlined, changing CSS cascade order
    inlineStyles: false,
  },
});
