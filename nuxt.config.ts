import { defineNuxtConfig } from 'nuxt/config';
import { businessJsonLd } from './shared/business';

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
      script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(businessJsonLd()) }],
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
      target: 'es2025',
      minify: 'oxc',
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: true,
    },
    {
      path: '~/components/ui',
      pathPrefix: false,
    },
  ],
  i18n: {
    defaultLocale: 'en',
    strategy: 'no_prefix',
    locales: ['en', 'de', 'fr'],
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
