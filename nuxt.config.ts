// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],

  components: {
    dirs: [{ path: '~/components', pathPrefix: false}]
  },

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'always-multiline',
        braceStyle: '1tbs',
        semi: true,
      }
    }
  },

  i18n: {
    lazy: true,
    types: 'composition',
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    defaultLocale: 'fr',
    locales: [
      {
        code: 'en',
        files: [
          'en.json',
        ],
      },
      {
        code: 'fr',
        files: [
          'fr.json',
        ],
      },
    ]
  }
});
