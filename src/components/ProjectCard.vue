<template>
  <div class="project-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
    <div class="relative h-56 w-full">
      <img :src="image" :alt="title" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <a :href="link" target="_blank" rel="noopener noreferrer" class="btn-main">View on GitHub</a>
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-2xl font-bold text-primary dark:text-primary-dark mb-2">{{ title }}</h3>
      <p class="text-secondary dark:text-secondary-dark mb-4">{{ description }}</p>
      <div class="flex flex-wrap gap-2">
        <span v-for="tag in tags" :key="tag" class="tag-badge bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-dark">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  image: String,
  tags: Array,
  link: String
})
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
}
.tag-badge {
  @apply px-3 py-1 rounded-full font-semibold text-sm;
}
.btn-main {
  @apply px-6 py-3 rounded-full font-bold text-base bg-primary text-white shadow-lg hover:scale-105 hover:bg-primary-dark transition-all duration-300 transform;
}
</style> 