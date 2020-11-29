<template>
  <div class="hidden lg:block flex items-center relative h-auto w-px bg-blue-400 z-10"
       :class="{'animate-pulse-slow': animate}">
      <span class="flex absolute h-4 w-4 pulse-circle">
        <span class="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"
              :class="{'animate-ping-slow': animate}">
        </span>
        <span class="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
      </span>
  </div>
</template>

<script>
import {ref, onMounted } from 'vue'

export default {
  name: "AnimatedBorder",
  setup(props) {
    const animate = ref(false);
    onMounted(() => {
      setTimeout(() => animate.value = true, props.delay * 1000);
    })
    return {
      animate
    };
  },
  props: {
    delay: {
      type: Number,
      default: 0
    }
  },
}
</script>

<style scoped>
.pulse-circle {
  left: -.5rem;
  top: calc(50% - .5rem);
}
</style>