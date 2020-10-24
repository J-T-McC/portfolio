<template>
  <div class="flex justify-center pb-10">
    <h2 class="tracking-tight leading-10 font-thin text-3xl sm:leading-none lg:text-4xl">
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
