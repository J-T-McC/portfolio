<template>
  <div class="flex bg-white my-5 lg:my-0 lg:shadow-lg rounded-lg w-full max-w-full lg:max-w-md xl:max-w-2xl flex">
    <div class="flex px-4 py-6 w-full">
      <img class="w-12 h-12 rounded-full object-cover mr-4 shadow" src="@/assets/images/me.png" alt="avatar">
      <div class="w-full">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-semibold text-gray-900">{{ header }}</h2>
          <small class="text-sm text-gray-700">{{ date }}</small>
        </div>
        <p class="mt-3 text-gray-700 text-sm">
          {{ body }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ['reverse', 'header', 'date', 'body'],
}
</script>

<style scoped>

</style>