<template>
  <div class="project-card flex flex-col md:flex-row items-center gap-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl">
    <div class="relative flex-shrink-0 w-full md:w-64 h-48 md:h-64 rounded-xl overflow-hidden">
      <img :src="image" :alt="title" class="w-full h-full object-cover rounded-xl border-2 border-primary/20 dark:border-primary-dark/30 shadow" />
      <div class="absolute bottom-2 right-2 w-16 h-16 md:w-20 md:h-20 pointer-events-none">
        <LottiePlayer :src="lottie" />
      </div>
    </div>
    <div class="flex-1 flex flex-col gap-3">
      <h3 class="text-2xl font-bold text-primary dark:text-primary-dark">{{ title }}</h3>
      <p class="text-secondary dark:text-secondary-dark text-base md:text-lg">{{ description }}</p>
      <div class="flex flex-wrap gap-2 mt-2">
        <span v-for="tag in tags" :key="tag" class="tag-badge bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-dark">{{ tag }}</span>
      </div>
      <a v-if="link" :href="link" target="_blank" rel="noopener" class="mt-3 inline-block btn-main">View Project</a>
    </div>
  </div>
</template>
<script setup>
import LottiePlayer from './LottiePlayer.vue'
const props = defineProps({
  title: String,
  description: String,
  image: String,
  lottie: String,
  tags: Array,
  link: String
})
</script>
<style scoped>
.project-card {
  min-width: 320px;
  max-width: 100%;
}
.tag-badge {
  @apply px-4 py-1 rounded-full font-semibold text-xs shadow hover:scale-105 transition-all duration-200;
}
.btn-main {
  @apply px-6 py-2 rounded-full font-bold text-base bg-primary text-white shadow hover:scale-105 hover:bg-primary-dark transition-all duration-300;
}
</style> 