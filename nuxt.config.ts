// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-module-feed',
    '@nuxtjs/color-mode',
    '@nuxthq/studio',
  ],
  hooks: {
    listen() {
      if (process.send) {
        process.send('ready')
      }
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },

    head: {
      link: [
        {
          rel: 'shortcut icon',
          href: 'data:,',
        },
      ],
    },
  },
  routeRules: {
    '*': {
      ssr: true,
    },
  },
  content: {
    highlight: {
      theme: {
        'default': 'rose-pine-dawn',
        'dark-mode': 'rose-pine',
      },
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
