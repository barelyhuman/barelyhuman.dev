// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-module-feed',
    '@nuxtjs/color-mode',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  routeRules: {
    '*': {
      ssr: true,
    },
  },
  content: {
    highlight: {
      theme: 'rose-pine-dawn',
      preload: ['js'],
    },
  },
  feed: {
    sources: [
      {
        path: '/feed.xml',
        type: 'rss2',
        cacheTime: 60 * 15,
      },
    ],
  },
})
