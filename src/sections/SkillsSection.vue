<template>
  <section id="skills" class="skills-section px-6 md:px-16 py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
    <div class="container mx-auto max-w-7xl">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div class="flex-1 flex items-center justify-center relative animate-profile order-last md:order-first">
          <img src="../assets/skills/skill.png" alt="Skills" class="w-full h-auto max-w-md rounded-lg shadow-lg object-cover">
        </div>
        <div class="flex-1 flex flex-col gap-6 items-start">
          <h2 class="text-4xl md:text-5xl font-extrabold text-primary dark:text-primary-dark animate-slide-in">
            <span class="text-accent dark:text-accent-dark">My</span> Skills
          </h2>
          <p class="text-lg text-secondary dark:text-secondary-dark mt-2 animate-fade-in delay-200">
            I focus on these technologies to build modern and performant applications.
          </p>
          <div class="w-full mt-4 animate-fade-in delay-400">
            <div v-for="(category, index) in skillCategories" :key="category.name" class="mb-6">
              <h3 class="text-xl font-bold text-primary dark:text-primary-dark mb-3 flex items-center gap-3">
                <i :class="category.icon" class="text-accent dark:text-accent-dark"></i>
                {{ category.name }}
              </h3>
              <div class="flex flex-wrap gap-3">
                <span v-for="skill in category.skills" :key="skill" class="skill-badge">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>


const skillCategories = [
  {
    name: 'Frontend',
    icon: 'fas fa-code',
    skills: ['JavaScript ', 'TypeScript', 'Vue.js', 'React', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    name: 'Backend',
    icon: 'fas fa-server',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST API', 'MySQL' , 'PostgreSQL' ,]
  },
  {
    name: 'Mobile',
    icon: 'fas fa-mobile-alt',
    skills: ['Flutter', 'Dart' , 'Provider', 'GetX', 'Firebase']
  },
  {
    name: 'Design',
    icon: 'fas fa-palette',
    skills: ['Figma', 'Illustrator', 'Photoshop']
  },
  {
    name: 'Tools & Methods',
    icon: 'fas fa-tools',
    skills: ['Git', 'Github', 'VPS', 'Postman', 'Render']
  }
];
</script>

<style scoped>
.skills-section {
  @apply w-full;
}

.skill-badge {
  @apply bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-dark px-4 py-2 rounded-lg font-medium text-sm shadow-sm
  transition-all duration-300 ease-in-out hover:bg-primary/20 hover:dark:bg-primary-dark/30 hover:scale-105;
  letter-spacing: 0.02em;
}

/* Animations */
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slide-in {
  from { transform: translateX(-30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.animate-slide-in {
  animation: slide-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.delay-200 { animation-delay: 0.2s; }
.delay-400 { animation-delay: 0.4s; }

.animate-profile {
  animation: fade-in 1s ease-out;
}
</style> 