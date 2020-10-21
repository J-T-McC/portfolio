<template>
  <footer class="w-full bg-gray-200 -mt-px overflow-hidden">
    <section-break
        gradient-from="from-purple-400"
        gradient-via="via-pink-400"
        gradient-to="to-blue-500"
        animation="animate-gradient-xy">
    </section-break>
    <div class="flex shadow-inner px-8 py-3 content-between items-center">
      <div class="w-1/2 font-semibold text-xs">Built with
        <a href="https://vuejs.org/">
          <img alt="VueJS" class="w-4 inline" src="@/assets/images/vuejs-logo.svg"> VueJS
        </a> and
        <a href="https://tailwindcss.com/">
          <img alt="TailwindCSS" class="w-4 inline" src="@/assets/images/tailwindcss-logo.svg"> TailwindCSS.
        </a>
        <a href="#">View on GitHub</a>
      </div>
      <small class="w-1/2"></small>
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

<style scoped>

</style>