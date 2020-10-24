<template>
  <the-header></the-header>
  <the-body></the-body>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";
import TheBody from "@/components/layout/TheBody";
import TheFooter from "@/components/layout/TheFooter";

export default {
  name: 'App',
  components: {
    TheHeader,
    TheBody,
    TheFooter
  }
}
</script>