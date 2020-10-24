<template>
  <div class="overflow-x-hidden w-full">
    <me></me>
    <history></history>
    <contact></contact>
  </div>
</template>

<script>
import Me from "@/components/content/Me";
import History from "@/components/content/History";
import Contact from "@/components/content/Contact";

export default {
  name: "Body",
  components: {
    Me,
    History,
    Contact
  },
}
</script>