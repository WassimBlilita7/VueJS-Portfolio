<template>
  <div ref="container" class="lottie-player w-full h-full"></div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import lottie from 'lottie-web'
const props = defineProps({ src: String })
const container = ref(null)
let lottieInstance = null
watch(() => props.src, (newVal) => {
  if (lottieInstance) lottieInstance.destroy()
  if (newVal) {
    lottieInstance = lottie.loadAnimation({
      container: container.value,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: newVal
    })
  }
}, { immediate: true })
onBeforeUnmount(() => {
  if (lottieInstance) lottieInstance.destroy()
})
</script>
<style scoped>
.lottie-player {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style> 