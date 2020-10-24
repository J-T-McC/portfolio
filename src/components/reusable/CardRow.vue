<template>
  <div class="lg:flex card-row mt-5 lg:mt-0" :class="{'flex-row-reverse' : reverse}">
    <div class="w-full lg:w-1/2 lg:py-12"></div>
    <animated-border :delay="index"></animated-border>
    <div
        class="w-full lg:w-1/2 flex justify-center card-container relative lg:py-12"
        :class="{'lg:justify-end': reverse, 'lg:justify-start': !reverse}">
      <card :header="header" :body="body" :date="date"></card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/reusable/Card";
import AnimatedBorder from "@/components/reusable/AnimatedBorder";

export default {
  name: "CardRow",
  props: ['reverse', 'header', 'date', 'body', 'index'],
  components: {
    Card,
    AnimatedBorder
  }
}
</script>