<script setup>
import parse from 'date-fns/parse'
let contentList = await queryContent().find()

const knowledgeBookList =
  (await $fetch("/api/konduktum").then(d => d.articles))


contentList = contentList.sort((x, y) => {
  const date = parse(x.date, 'dd/MM/yyyy', new Date())
  const dateNext = parse(y.date, 'dd/MM/yyyy', new Date())
  return dateNext.getTime() - date.getTime()
})
</script>

<template>
  <GlobalHeader />
  <div v-if="knowledgeBookList.length > 0">
    <h1 class="mb-10" id="knowledge-book">Knowledge Book</h1>
    <div>
      <div class="border-b">
        <header class="text-muted flex items-center">
          <span class="grow pl-2">title</span>
          <span class="w-20 h-9 text-right mr-2.5">date</span>
        </header>
      </div>
      <a class="block text-subtle px-4 py-5 border-b cursor-pointer hover:bg-overlay"
        v-for="article in knowledgeBookList" :href="article._path" :key="article._path">
        <div class="flex">
          <span class="flex grow">{{ article.title }}</span>
          <span class="w-20 text-right">{{ article.date || '-' }}</span>
        </div>
      </a>
    </div>
  </div>
  <h1 class="my-10" id="writing">Writing</h1>
  <div>
    <div class="border-b">
      <header class="text-muted flex items-center">
        <span class="grow pl-2">title</span>
        <span class="w-20 h-9 text-right mr-2.5">date</span>
      </header>
    </div>
    <a class="block text-subtle px-4 py-5 border-b cursor-pointer hover:bg-overlay" v-for="article in contentList"
      :href="article._path" :key="article._path">
      <div class="flex">
        <span class="flex grow">{{ article.title }}</span>
        <span class="w-20 text-right">{{ article.date || '-' }}</span>
      </div>
    </a>
  </div>
</template>
