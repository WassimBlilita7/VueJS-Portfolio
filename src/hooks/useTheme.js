import { ref, watchEffect } from 'vue'
const isDark = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)
const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}
watchEffect(() => {
  document.documentElement.classList.toggle('dark', isDark.value)
})
export default function useTheme() {
  return { isDark, toggleTheme }
} 