<script setup>
const tags = ref([])
const c = await queryContent().find()

const allTags = c
  .reduce((acc, item) => {
    return acc
      .concat((item.tags || '').split(',').map(x => x.trim()))
      .filter(Boolean)
  }, [])
  .map(x => ({
    url: `/tags/${x}`,
    label: x,
  }))
tags.value = allTags
</script>
<template>
  <GlobalHeader />
  <h1>Tags</h1>
  <template v-for="tag in tags">
    <a class="text-muted hover:text-text last:truncate hover:after:text-muted [&:not(:last-child)]:after:mr-[1ch] [&:not(:last-child)]:after:content-[',']"
      v-bind:href="tag.url">{{ tag.label }}</a>
  </template>
</template>
