import { DateTime } from 'luxon'

export default defineNitroPlugin(nitro => {
  nitro.hooks.hook('feed:generate', async ({ feed, options }) => {
    switch (options.path) {
      case '/feed.xml': {
        await createRSSFeed(feed)
        break
      }
    }
  })

  async function createRSSFeed(feed) {
    feed.options = {
      id: 'barelyhuman.dev',
      title: 'BarelyHuman.dev',
      description: 'For developers',
      copyright: 'BarelyHuman.dev',
      link: 'http://barelyhuman.dev/',
    }

    const data = await $fetch('/api/_content/query')
    data.forEach(post => {
      feed.addItem({
        title: post.title,
        id: post._path,
        link: post.slug,
        content: post.description,
        date: DateTime.fromFormat(post.date, 'dd/MM/yyyy').toJSDate(),
      })
    })
  }
})
