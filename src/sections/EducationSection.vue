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
            <div v-for="(item, index) in educationHistory" :key="index" class="mb-10 ml-8">
              <div class="absolute -left-4 mt-1.5 w-8 h-8 bg-primary dark:bg-primary-dark rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
                <component :is="item.icon" class="w-5 h-5 text-white" />
              </div>
              <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
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

// Define SVG components for icons
const GraduationCapIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.906 59.906 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l15.482 0m-15.482 0a25.053 25.053 0 01-1.072-4.243" /></svg>`
};
const BookOpenIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>`
};
const CertificateIcon = {
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9a9.75 9.75 0 100-13.5h9a9.75 9.75 0 100 13.5z" /><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75a9.75 9.75 0 00-9-13.5" /></svg>`
};


const educationHistory = shallowRef([
  {
    degree: 'Master in Computer Science',
    institution: 'University of Algiers',
    duration: '2021 - 2023',
    description: 'Specialized in advanced algorithms, artificial intelligence, and software architecture. Graduated with honors.',
    icon: GraduationCapIcon
  },
  {
    degree: 'Bachelor in Computer Science',
    institution: 'University of Algiers',
    duration: '2018 - 2021',
    description: 'Focused on core computer science principles, including data structures, database management, and web development. Ranked in the top 10% of the class.',
    icon: BookOpenIcon
  },
  {
    degree: 'Online Certifications',
    institution: 'Coursera, Udemy, etc.',
    duration: 'Ongoing',
    description: 'Continuously learning and staying updated with the latest technologies in web development, cloud computing, and machine learning.',
    icon: CertificateIcon
  }
]);
</script>

<style scoped>
/* Additional styles for the timeline line */
.container {
  max-width: 1200px;
}
</style>