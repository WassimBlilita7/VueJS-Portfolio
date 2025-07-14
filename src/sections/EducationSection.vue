<template>
  <section id="education" class="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
    <div class="container mx-auto px-6 md:px-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-5xl font-extrabold text-gray-800 dark:text-white">
          My <span class="text-primary dark:text-primary-dark">Education</span>
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mt-4">A summary of my academic and professional learning journey.</p>
      </div>
      <div class="flex flex-col md:flex-row justify-center items-start gap-12">
        <!-- Timeline -->
        <div class="w-full md:w-2/3">
          <div class="relative border-l-4 border-primary dark:border-primary-dark ml-4 md:ml-0">
            <div v-for="(item, index) in educationHistory" :key="index" class="mb-10 ml-8 timeline-item">
              <div class="absolute -left-4 mt-1.5 w-8 h-8 bg-primary dark:bg-primary-dark rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center timeline-icon">
                <component :is="item.icon" class="w-5 h-5 text-white" />
              </div>
              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div class="flex justify-between items-center mb-2">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ item.degree }}</h3>
                  <span class="bg-primary/10 text-primary dark:bg-primary-dark/20 dark:text-primary-dark text-sm font-semibold px-3 py-1 rounded-full">{{ item.duration }}</span>
                </div>
                <p class="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">{{ item.institution }}</p>
                <p class="text-gray-600 dark:text-gray-400">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { shallowRef } from 'vue';
import { GraduationCap, BookOpen } from 'lucide-vue-next';

const educationHistory = shallowRef([
  {
    degree: 'Master in Computer Science (Distributed Systems)',
    institution: 'University of Ferhat Abbes , Setif',
    duration: '2023 - 2025',
    description: 'Specialized in advanced algorithms, artificial intelligence, and software architecture. Ranked in the top 5% of the class.',
    icon: GraduationCap
  },
  {
    degree: 'Bachelor in Computer Science',
    institution: 'University of Ferhat Abbes , Setif',
    duration: '2020 - 2023',
    description: 'Focused on core computer science principles, including data structures, database management, and web development. Graduated with honors.',
    icon: BookOpen
  },

]);
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.timeline-item {
  transition: transform 0.3s ease-in-out;
}

.timeline-item:hover {
  transform: translateX(10px);
}

.timeline-icon {
  transition: transform 0.3s ease-in-out;
}

.timeline-item:hover .timeline-icon {
  transform: scale(1.2);
}
</style>