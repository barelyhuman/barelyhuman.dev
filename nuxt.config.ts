// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-module-feed'],
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
