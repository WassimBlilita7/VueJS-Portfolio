<template>
  <section id="services" class="py-16 md:py-24 bg-white dark:bg-gray-800/50">
    <div class="container mx-auto px-6 md:px-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-5xl font-extrabold text-gray-800 dark:text-white">
          What I <span class="text-primary dark:text-primary-dark">Do</span>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mt-4">I create beautiful and functional web and mobile applications.</p>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.title" class="service-card">
          <div class="p-6">
            <component :is="service.icon" class="w-12 h-12 text-primary dark:text-primary-dark mb-4" />
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ service.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { shallowRef } from 'vue'
import { Code, Smartphone, Layout } from 'lucide-vue-next'

const services = shallowRef([
  {
    title: 'Web Development',
    description: 'Building responsive and performant websites and web applications using modern technologies like Vue.js, React, and Node.js.',
    icon: Code
  },
  {
    title: 'Mobile Development',
    description: 'Creating cross-platform mobile applications for iOS and Android with Flutter, ensuring a native look and feel.',
    icon: Smartphone
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and engaging user interfaces. From wireframes to final design, I focus on creating a great user experience.',
    icon: Layout
  }
])
</script>

<style scoped>
.service-card {
  @apply bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2 text-center;
  border: 1px solid rgba(0,0,0,0.05);
}
.dark .service-card {
    border: 1px solid rgba(255,255,255,0.1);
}
.service-card .p-6 {
  @apply flex flex-col items-center;
}
</style> 