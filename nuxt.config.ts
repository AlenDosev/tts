import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  nitro: {
    compressPublicAssets: true,
    minify: true,
  },
  modules: ['@nuxt/eslint', '@nuxt/image', '@pinia/nuxt', '@nuxtjs/i18n'],

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/jpeg', href: '/logo.jpeg' }],
    },
  },
  typescript: {
    typeCheck: true,
  },

  imports: {
    autoImport: true,
    dirs: ['types'],
  },

  i18n: {
    defaultLocale: 'en',
  },
});
