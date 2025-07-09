<template>
  <section class="summary-section flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-16 py-16 md:py-24 bg-gradient-to-br from-blue-100 via-green-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500 rounded-3xl shadow-glass">
    <div class="flex-1 flex flex-col gap-6 items-start">
      <span class="hello text-lg font-medium text-primary dark:text-primary-dark animate-fade-in">— Hello There!</span>
      <h1 class="text-4xl md:text-6xl font-extrabold leading-tight animate-slide-in">
        I'm <span class="text-primary dark:text-primary-dark">Wassim</span>
      </h1>
      <p class="text-lg md:text-xl text-secondary dark:text-white animate-fade-in delay-200">Fullstack Developer based in Algeria</p>
      <div class="flex flex-wrap gap-3 mt-4 animate-fade-in delay-300">
        <span v-for="tag in tags" :key="tag" class="tag bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-dark">{{ tag }}</span>
      </div>
      <div class="flex gap-4 mt-6 animate-fade-in delay-400">
        <button class="btn-main">Portfolio</button>
        <button class="btn-secondary">Hire Me</button>
      </div>
      <div class="flex items-center gap-3 mt-6 animate-fade-in delay-500">
        <span class="text-primary dark:text-primary-dark font-bold text-lg">150+ Reviews <span class="text-xs">(4.9 of 5)</span></span>
        <span class="text-secondary dark:text-secondary-dark text-sm">Reviews from Valued Clients</span>
      </div>
    </div>
    <div class="flex-1 flex flex-col items-center justify-center relative animate-profile">
      <div class="profile-bg absolute rounded-full bg-primary/10 dark:bg-primary-dark/20 w-64 h-64 md:w-80 md:h-80 z-0 animate-pulse-slow"></div>
      <img class="profile-img relative z-10 rounded-full shadow-2xl border-4 border-white dark:border-gray-800 animate-pop-in" src="/src/assets/me.jpg" alt="Profile" />
      <div class="absolute top-2 right-2 bg-white dark:bg-primary-dark rounded-full px-3 py-1 shadow text-primary dark:text-white text-xs font-bold rotate-12 animate-bounce">Hire Me</div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
const tags = [
  'Website Design',
  'Dashboard',
  'Wireframe',
  'User Research',
  'Design System',
  'Mobile App Design',
]
</script>
<style scoped>
.summary-section {
  @apply w-full max-w-7xl mx-auto rounded-3xl shadow-glass;
}
.hello {
  letter-spacing: 0.1em;
}
.text-primary {
  color: #42b883;
}
.text-secondary {
  color: #22223b;
}
.text-primary-dark {
  color: #00c896;
}
.text-secondary-dark {
  color: #e0e1dd;
}
.bg-primary\/10 {
  background: rgba(66,184,131,0.08);
}
.bg-primary-dark\/20 {
  background: rgba(0,200,150,0.13);
}
.profile-img {
  width: 220px;
  height: 220px;
  object-fit: cover;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
  border-radius: 50%;
  border: 4px solid #fff;
  background: #fff;
}
.btn-main {
  @apply px-8 py-3 rounded-full font-bold text-lg bg-primary text-white shadow-lg hover:scale-105 hover:bg-primary-dark transition-all duration-300;
}
.btn-secondary {
  @apply px-8 py-3 rounded-full font-bold text-lg bg-white dark:bg-gray-900 text-primary border-2 border-primary shadow hover:scale-105 hover:bg-primary hover:text-white transition-all duration-300;
}
.tag {
  @apply px-4 py-1 rounded-full font-semibold text-sm shadow hover:scale-105 transition-all duration-200;
}
.profile-bg {
  filter: blur(0.5px);
  z-index: 0;
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
@keyframes pop-in {
  0% { transform: scale(0.7); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
@keyframes pulse-slow {
  0%, 100% { opacity: 0.7; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.08); }
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-fade-in { animation: fade-in 1.2s ease; }
.animate-slide-in { animation: slide-in 1s cubic-bezier(.68,-0.55,.27,1.55); }
.animate-pop-in { animation: pop-in 0.8s cubic-bezier(.68,-0.55,.27,1.55); }
.animate-pulse-slow { animation: pulse-slow 2.5s infinite alternate; }
.animate-bounce { animation: bounce 1.5s infinite alternate; }
</style> 