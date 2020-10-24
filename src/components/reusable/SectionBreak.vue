<template>
  <hr class="w-screen bg-blue-400 h-px bg-gradient-to-r"
      :class="[gradientFrom, gradientVia, gradientTo, animation]">
</template>

<script>
export default {
  name: "SectionBreak",
  props: {
    gradientFrom: {
      default: 'from-gray-100'
    },
    gradientVia: {
      default: 'via-purple-200'
    },
    gradientTo: {
      default: 'to-blue-300'
    },
    animation: {
      default: 'animate-gradient-y'
    }
  }
}
</script>