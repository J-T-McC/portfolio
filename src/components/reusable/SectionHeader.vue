<template>
  <div class="flex justify-center pb-10">
    <h2 class="text-4xl tracking-tight leading-10 font-thi sm:text-3xl sm:leading-none md:text-3xl">
      <span class="text-white">
        <slot></slot>
      </span>
    </h2>
  </div>
</template>

<script>
export default {
  name: "SectionHeader",
}
</script>

<style scoped>

</style>