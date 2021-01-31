<template>
  <div class="absolute bg-red-300 w-3 h-3 opacity-25 rounded-full transition-all ease-linear duration-200 z-20 text-white" :style="style"></div>
</template>

<script>
import {ref} from 'vue'

export default {
  name: 'SvgWeapon',
  props: {
    startX: String,
    startY: String,
    endX: String,
    endY: String,
  },
  setup(props) {
    const valid = ref(true)

    const style = ref({
      top: props.startY,
      left: props.startX,
    })

    setTimeout(() => {
      style.value = {
        top: props.endY,
        left: props.endX,
      }
    }, 0)

    return {
      style,
      valid,
    }
  }
}
</script>

<style scoped>

</style>