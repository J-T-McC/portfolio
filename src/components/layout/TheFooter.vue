<template>
  <footer class="w-full bg-gray-200 dark:bg-gray-900 overflow-hidden">
    <section-break
        gradient-from="from-purple-400"
        gradient-via="via-pink-400"
        gradient-to="to-blue-500"
        animation="animate-gradient-xy">
    </section-break>
    <div class="flex shadow-inner px-8 py-3">
      <div class="text-xs flex justify-between w-full dark:text-gray-300">
        <span>
          Made with
          <a target="_blank" rel="noopener" href="https://vuejs.org/">
            <img alt="VueJS" class="w-4 inline" src="@/assets/images/vuejs-logo.svg">
          </a>
          <a target="_blank" rel="noopener" href="https://tailwindcss.com/">
            <img alt="TailwindCSS" class="w-4 inline" src="@/assets/images/tailwindcss-logo.svg">
          </a>
        </span>
        <a target="_blank" rel="noopener" href="https://github.com/J-T-McC/profile">View on GitHub</a>
      </div>
    </div>
  </footer>
</template>
<script>

import SectionBreak from "@/components/reusable/SectionBreak";

export default {
  name: "Footer",
  components: {
    SectionBreak
  }
}
</script>