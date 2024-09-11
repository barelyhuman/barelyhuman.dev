<script setup>
import { SOURCES } from '@/constants';

const route = useRoute()

const fileSlug = route.params?.slug?.length ? route.params?.slug[0] : ''
const slugSplits = route.fullPath.split("?")

let externalSource = false;
let _content
if (slugSplits.length === 1) {
  _content = await queryContent(slugSplits[0]).findOne()
} else {
  externalSource = true
  const search = new URLSearchParams(slugSplits[1])
  const postSource = search.get("source")
  if (postSource === SOURCES.KONDUKTUM) {
    _content = await $fetch("/api/konduktum").then(d => d.articles.find(x => x.slug == fileSlug))
  }
}


useHead({
  meta: [
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: route.fullPath,
    },
    {
      property: 'og:description',
      content: _content.description,
    },
    {
      property: 'og:image',
      content: `https://og.barelyhuman.xyz/generate?backgroundColor=181819fontSize=14&title=${_content.title}&fontSizeTwo=8&color=efefef`,
    },
  ],
  link: [
    {
      rel: "canonical",
      href: _content.canonicalURL
    }
  ]
})


</script>
<template>
  <main class="blog-post">
    <div v-if="externalSource">
      <GlobalHeader />
      <div class="mb-20 flex flex-wrap items-start justify-between">
        <h1 class="grow font-bold text-lg">{{ _content.title }}</h1>
        <div>
          <p>Canonical URL: <a :href="_content.canonicalURL">{{ _content._source }}</a></p>
        </div>
        <div class="w-1/2 gap-2 flex items-center justify-end flex-wrap">
          <a v-bind:href="'/tags/' + tag" v-for="tag in (_content.tags || '').split(',').filter(Boolean)">
            <span class="hover:cursor-pointer select-none bg-surface px-2 py-1 rounded-md">
              {{ tag }}
            </span>
          </a>
        </div>
      </div>
      <div v-html="_content.content" />
    </div>
    <ContentDoc v-else v-slot="{ doc }">
      <GlobalHeader />
      <div class="mb-20 flex flex-wrap items-start justify-between">
        <h1 class="grow font-bold text-lg">{{ doc.title }}</h1>
        <div class="w-1/2 gap-2 flex items-center justify-end flex-wrap">
          <a v-bind:href="'/tags/' + tag" v-for="tag in (doc.tags || '').split(',').filter(Boolean)">
            <span class="hover:cursor-pointer select-none bg-surface px-2 py-1 rounded-md">
              {{ tag }}
            </span>
          </a>
        </div>
      </div>
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </main>
</template>
