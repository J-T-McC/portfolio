<template>
  <div :class="{'dark': mode.isDarkMode.value}">
    <the-header></the-header>
    <the-body></the-body>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader'
import TheBody from '@/components/layout/TheBody'
import TheFooter from '@/components/layout/TheFooter'
import useDarkMode from '@/hooks/useDarkMode'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheBody,
    TheFooter
  },
  setup() {
    const mode = useDarkMode();

    return {
      mode
    }
  }
}
</script>