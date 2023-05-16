<script setup>
const route = useRoute()
const tag = route.params.tag
const fromQueryContent = await queryContent()
  .where({
    tags: {
      $contains: tag,
    },
  })
  .sort({
    date: -1,
  })
  .find()
const contentList = fromQueryContent.filter(x => x._path !== '/')
</script>
<template>
  <GlobalHeader />
  <h1 class="font-bold mb-10">
    <span class="text-zinc-400 font-normal">Tag:</span> {{ tag }}
  </h1>
  <div>
    <div class="border-b">
      <header class="text-zinc-400 flex items-center">
        <span class="grow pl-2">title</span>
        <span class="w-20 h-9 text-right mr-2.5">date</span>
      </header>
    </div>
    <a
      :href="article._path"
      class="block text-zinc-500 px-4 py-5 border-b cursor-pointer hover:bg-zinc-100"
      v-for="article in contentList"
      :key="article._path"
    >
      <div class="flex">
        <span class="flex grow">{{ article.title }}</span>
        <span class="w-20 text-right">{{ article.date || '-' }}</span>
      </div>
    </a>
  </div>
</template>
