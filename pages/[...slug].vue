<template>
  <main class="blog-post">
    <ContentDoc v-slot="{ doc }">
      <GlobalHeader />
     <div class="mb-20 flex flex-wrap items-start justify-between">
      <h1 class="grow font-bold text-lg">{{doc.title}}</h1>
       <div class="w-1/2 gap-2 flex items-center justify-end flex-wrap">
          <a v-bind:href="'/tags/'+tag" v-for='tag in (doc.tags||"").split(",").filter(Boolean)'>
            <span class="hover:cursor-pointer select-none bg-surface px-2 py-1 rounded-md">
            {{tag}}
          </span>
          </a>
      </div>
     </div>

      <ContentRenderer :value="doc" />
    </ContentDoc>
  </main>
</template>
