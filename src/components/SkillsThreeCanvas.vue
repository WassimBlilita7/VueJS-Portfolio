<template>
  <div ref="lottieContainer" class="skills-lottie flex items-center justify-center w-full h-56 md:h-72"></div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import lottie from 'lottie-web'
const lottieContainer = ref(null)
const isDark = ref(false)
let lottieInstance = null
// Animation Lottie moderne "skills" (neutre, sans réseaux sociaux)
const lottieLight = 'https://assets7.lottiefiles.com/packages/lf20_kkflmtur.json' // Modern skills illustration (light, no social)
const lottieDark = 'https://assets7.lottiefiles.com/packages/lf20_kkflmtur.json' // Same for dark, or pick a dark variant
function loadLottie() {
  if (lottieInstance) lottieInstance.destroy()
  lottieInstance = lottie.loadAnimation({
    container: lottieContainer.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: isDark.value ? lottieDark : lottieLight
  })
}
onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
  loadLottie()
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    isDark.value = e.matches
    loadLottie()
  })
})
onBeforeUnmount(() => {
  if (lottieInstance) lottieInstance.destroy()
})
</script>
<style scoped>
.skills-lottie {
  background: transparent;
}
</style> 