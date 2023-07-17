<script setup>
const route = useRoute()
const fileSlug = route.params?.slug?.length ? route.params?.slug[0] : ''
const _content = await queryContent(fileSlug).findOne()

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
      content: `https://og.barelyhuman.xyz/generate?fontSize=14&title=${_content.title}&subtitle=barelyhuman.dev&fontSizeTwo=8&color=%2323283d`,
    },
  ],
})

</script>
<template>
  <main class="blog-post">
    <ContentDoc v-slot="{ doc }">
      <GlobalHeader />
      <div class="mb-20 flex flex-wrap items-start justify-between">
        <h1 class="grow font-bold text-lg">{{ doc.title }}</h1>
        <div class="w-1/2 gap-2 flex items-center justify-end flex-wrap">
          <a
            v-bind:href="'/tags/' + tag"
            v-for="tag in (doc.tags || '').split(',').filter(Boolean)"
          >
            <span
              class="hover:cursor-pointer select-none bg-surface px-2 py-1 rounded-md"
            >
              {{ tag }}
            </span>
          </a>
        </div>
      </div>

      <ContentRenderer :value="doc" />
    </ContentDoc>
  </main>
</template>
