<template>
  <section class="skills-section flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-16 py-16 md:py-24 bg-gradient-to-br from-blue-100 via-green-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500 rounded-3xl shadow-glass">
    <div class="flex-1 flex flex-col gap-8 items-start">
      <h2 class="text-3xl md:text-5xl font-extrabold text-primary dark:text-primary-dark animate-slide-in">🛠️ Skills</h2>
      <div class="flex flex-wrap gap-4 mt-4 animate-fade-in">
        <span v-for="skill in skills" :key="skill" class="skill-badge bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-dark">{{ skill }}</span>
      </div>
      <p class="text-lg text-secondary dark:text-secondary-dark mt-6 animate-fade-in delay-200">I love building modern web & mobile apps, and always learning new technologies!</p>
    </div>
    <div class="flex-1 flex flex-col items-center justify-center relative animate-profile">
      <SkillsThreeCanvas />
    </div>
  </section>
</template>
<script setup>
import SkillsThreeCanvas from '../components/SkillsThreeCanvas.vue'
const skills = [
  'JavaScript', 'TypeScript', 'Vue.js', 'React', 'Node.js', 'Express', 'MongoDB', 'Flutter', 'Dart', 'HTML5', 'CSS3', 'Tailwind', 'Three.js', 'Git', 'Figma', 'REST API', 'GraphQL', 'Docker', 'CI/CD', 'Agile', 'Jest', 'C++', 'Python'
]
</script>
<style scoped>
.skills-section {
  @apply w-full max-w-7xl mx-auto rounded-3xl shadow-glass;
}
.skill-badge {
  @apply px-5 py-2 rounded-full font-semibold text-base shadow hover:scale-110 transition-all duration-200 border border-primary dark:border-primary-dark bg-opacity-80;
  letter-spacing: 0.03em;
}
/* Animations */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes slide-in {
  from { transform: translateY(-40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-fade-in { animation: fade-in 1.2s ease; }
.animate-slide-in { animation: slide-in 1s cubic-bezier(.68,-0.55,.27,1.55); }
</style> 