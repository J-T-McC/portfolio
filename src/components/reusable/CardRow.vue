<template>
  <div class="lg:flex card-row lg:mt-0 lg:mb-0" :class="{'flex-row-reverse' : reverse, '': mode.isDarkMode.value}">
    <div class="w-full lg:w-1/2 lg:py-12"></div>
    <animated-border :delay="delay"></animated-border>
    <div
        class="w-full lg:w-1/2 flex justify-center card-container relative lg:py-12"
        :class="{'lg:justify-end': reverse, 'lg:justify-start': !reverse}">
      <card v-bind="{...card}"></card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/reusable/Card";
import AnimatedBorder from "@/components/reusable/AnimatedBorder";
import useDarkMode from '@/hooks/useDarkMode'

export default {
  name: "CardRow",
  props: ['reverse', 'header', 'card', 'delay'],
  components: {
    Card,
    AnimatedBorder
  },
  setup() {
    return {
      mode: useDarkMode()
    }
  }
}
</script>