<template>
  <div class="
      z-10
      flex
      w-full
      hover:bg-white
      hover:bg-opacity-10
      my-5 lg:my-0
      shadow-sm lg:shadow-lg
      rounded
      max-w-full lg:max-w-md xl:max-w-2xl
      flex">
    <div class="flex px-4 py-6 w-full">
      <img
          class="w-12 h-12 rounded-full object-cover mr-4 shadow"
          src="https://res.cloudinary.com/ddaji66m6/image/upload/f_auto,w_65/portfolio/me_fpnxc2.png" alt="avatar">
      <div class="w-full">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-200">{{ header }}</h2>
          <small class="text-sm text-gray-700 dark:text-gray-300">{{ date }}</small>
        </div>

        <p class="mt-3 text-gray-700 text-sm dark:text-gray-300">
          {{ body }}
        </p>

        <a v-if="callToAction"
           target="_blank"
           :href="callToAction.url"
           rel="noopener"
           class="
            block
            bg-blue-600
            hover:bg-blue-500
            text-white text-center
            py-2 pt-2 mt-4
            rounded
          ">
          {{ callToAction.label }}
        </a>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    header: String,
    date: String,
    body: String,
    callToAction: {
      type: Object,
      required: false
    },
  },
}
</script>