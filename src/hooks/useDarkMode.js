import { ref, readonly, watchEffect } from 'vue'
import useLocalStore from '@/hooks/useLocalStore'
const preference = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const localStore = useLocalStore('theme');
if(!localStore.get('mode')) {
  localStore.set('mode', preference)
}
const mode = ref(localStore.get('mode'))
const readonlyMode = readonly(mode)

export default function useDarkMode() {

  const toggle = () => {
    mode.value = mode.value === 'dark' ? 'light' : 'dark'
  }

  watchEffect(() => {
    localStore.set('mode', mode.value)
  })

  return {
    toggle,
    mode: readonlyMode
  }
}