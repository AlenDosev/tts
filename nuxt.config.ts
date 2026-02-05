// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@pinia/nuxt', '@nuxt/eslint', '@nuxt/image', '@nuxtjs/i18n', '@pinia/nuxt', '@nuxt/scripts'],
  nitro: {
    compressPublicAssets: true,
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/avif', href: '/logo.avif' },
        {
          rel: 'manifest',
          href: '/manifest.json',
        },
      ],
    },
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        charset: 'utf-8',
      },
    ],
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
});
