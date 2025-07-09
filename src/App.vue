<template>
  <div>
    <AppBar />
    <SummarySection />
    <EducationSection />
    <div class="flex flex-col items-center justify-center min-h-screen transition-colors duration-500 bg-gradient-to-br from-green-200 via-blue-100 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24">
      <ThemeToggle />
      <ThreeCanvas />
      <h1 class="text-4xl font-extrabold text-green-700 dark:text-green-400 mb-4 drop-shadow-lg animate-slide-in">Bienvenue sur mon portfolio Vue 3 !</h1>
      <p class="text-lg text-gray-700 dark:text-gray-200 mb-2 animate-fade-in">Découvrez une expérience interactive avec Vue 3 et Three.js.</p>
      <button class="px-6 py-2 bg-green-500 dark:bg-green-700 text-white rounded-full shadow hover:bg-green-600 dark:hover:bg-green-800 transition-all duration-300 animate-bounce">Contactez-moi</button>
    </div>
  </div>
</template>
<script setup>
import AppBar from './layout/AppBar.vue'
import SummarySection from './sections/SummarySection.vue'
import EducationSection from './sections/EducationSection.vue'
import ThreeCanvas from './components/ThreeCanvas.vue'
import ThemeToggle from './ui/ThemeToggle.vue'
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-in {
  from { transform: translateY(-40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.animate-fade-in {
  animation: fade-in 1.2s ease;
}

.animate-slide-in {
  animation: slide-in 1s cubic-bezier(.68,-0.55,.27,1.55);
}

.animate-bounce {
  animation: bounce 1.5s infinite alternate;
}

@keyframes bounce {
  from { transform: translateY(0); }
  to { transform: translateY(-12px); }
}
</style>