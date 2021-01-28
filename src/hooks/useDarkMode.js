import { ref, computed } from 'vue'

const mode = ref('light')

export default function useDarkMode() {

  const toggle = () => {
    mode.value = mode.value === 'dark' ? 'light' : 'dark'
  }

  const isDarkMode = computed(() => {
    return mode.value === 'dark'
  })

  return {
    toggle,
    isDarkMode,
  }
}