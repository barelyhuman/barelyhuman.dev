<template>
  <main class="blog-post">
    <ContentDoc v-slot="{ doc }">
      <GlobalHeader />
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </main>
</template>
