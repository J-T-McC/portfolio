<template>
  <div
      class="hidden lg:block h-auto w-px flex bg-blue-400 relative flex items-center z-10"
      :class="{'animate-pulse-slow': animate}">
      <span class="flex absolute h-4 w-4 pulse-circle">
        <span
            class="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"
            :class="{'animate-ping-slow': animate}">
        </span>
        <span class="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
      </span>
  </div>
</template>

<script>
export default {
  name: "AniamtedBorder",
  data() {
    return {
      animate: false
    };
  },
  props: {
    delay: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    setTimeout(() => this.animate = true, this.delay * 500);
  }
}
</script>

<style scoped>
.pulse-circle {
  left: -.5rem;
  top: calc(50% - .5rem);
}
</style>