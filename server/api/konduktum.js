import { SOURCES } from '@/constants'
import format from 'date-fns/format'
import jsdom from 'jsdom'
import { join } from 'path'
import slugify from 'slugify'
const { JSDOM } = jsdom

export default defineEventHandler(async event => {
  const article = await fetch(
    'https://www.konduktum.com/k/knowledge-book'
  ).then(async d => {
    const dHTML = await d.text()
    const { document } = new JSDOM(dHTML).window

    const article = document.querySelectorAll('article')
    return article
  })

  const articles = Array.from(article).map(e => {
    const time = e.querySelector('time.text-brand-subtitle')
    const heading = e.querySelector('h2.text-2xl')
    const sourceLink = heading.querySelector('a')
    const articleContent = e.lastChild.innerHTML

    const dateOfPublish = format(
      new Date(time.getAttribute('datetime')),
      'dd/MM/yyyy'
    )
    const headingContent = heading.textContent
    const slug = slugify(headingContent)
    let urlPath = join('/', slug)
    urlPath = urlPath + `?source=${SOURCES.KONDUKTUM}`
    const content = articleContent

    return {
      date: dateOfPublish,
      title: headingContent,
      _source: SOURCES.KONDUKTUM,
      canonicalURL: sourceLink.getAttribute('href'),
      _type: 'markdown',
      content: content,
      slug: slug,
      _path: urlPath,
    }
  })

  return {
    articles: articles,
  }
})
