<template>
  <header class="flex mb-10 items-center justify-between">
    <div>
      <a href="/">
        <h1>BarelyHuman</h1>
      </a>
      <small class="text-muted"> For developers </small>
    </div>
    <nav class="text-muted flex items-center gap-4 justify-end w-1/2">
      <a href="/feed.xml" class="hover:text-text">rss</a>
      <a href="/tags" class="hover:text-text">tags</a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/barelyhuman/barelyhuman.dev"
        class="hover:text-text"
        >source</a
      >
      <div>
        <select class="text-muted bg-base border-dashed hover:text-text px-3 pr-10 py-1 m-0 border-1 hover:bg-surface border-surface rounded-md font-xs" v-model="$colorMode.preference">
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </nav>
  </header>
</template>
