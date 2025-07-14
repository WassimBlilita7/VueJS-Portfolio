<template>
  <section id="summary" class="summary-section flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-16 py-16 md:py-24 bg-gradient-to-br from-blue-100 via-green-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500 rounded-3xl shadow-glass">
    <div class="flex-1 flex flex-col gap-6 items-start">
      <span class="hello text-lg font-medium text-primary dark:text-primary-dark animate-fade-in">— Hello There!</span>
      <h1 class="text-4xl md:text-6xl font-extrabold leading-tight animate-slide-in">
        I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500 dark:from-primary-dark dark:to-teal-400">Wassim</span>
      </h1>
      <p class="text-lg md:text-xl text-secondary dark:text-white animate-fade-in delay-200">MERN Stack and Flutter Developer based in Algeria</p>
      <div class="flex flex-wrap gap-3 mt-4 animate-fade-in delay-300">
        <span v-for="tag in tags" :key="tag.text" class="tag bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-dark flex items-center">
            <component :is="tag.icon" :size="16" class="mr-2" />
            {{ tag.text }}
        </span>
      </div>
      <div class="flex gap-4 mt-6 animate-fade-in delay-400">
        <a href="#projects" @click.prevent="scrollToSection('#projects')" class="btn-main">Portfolio</a>
        <a href="#contact" @click.prevent="scrollToSection('#contact')" class="btn-secondary">Hire Me</a>
      </div>
      <div class="flex items-center gap-4 mt-8 animate-fade-in delay-500">
        <a :href="contactInfo.github" target="_blank" class="social-icon">
          <Github :size="28" />
        </a>
        <a :href="contactInfo.linkedin" target="_blank" class="social-icon">
          <Linkedin :size="28" />
        </a>
      </div>
    </div>
    <div class="flex-1 flex flex-col items-center justify-center relative animate-profile">
        <div class="profile-blob absolute w-72 h-72 md:w-96 md:h-96">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="fill-current text-primary/20 dark:text-primary-dark/20">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M48.8,-58.2C63.4,-47.2,75.4,-30.7,79.1,-12.5C82.8,5.7,78.2,25.6,67.8,41.1C57.4,56.6,41.2,67.7,24.2,73.2C7.2,78.7,-10.6,78.6,-27.2,72.2C-43.8,65.8,-59.2,53.1,-67.8,37.1C-76.4,21.1,-78.2,1.8,-73.8,-15.3C-69.4,-32.4,-58.8,-47.3,-45.5,-58.1C-32.2,-68.9,-16.1,-75.6,0.8,-76.2C17.7,-76.8,35.5,-71.3,48.8,-58.2Z" transform="translate(100 100)" />
            </svg>
        </div>
      <img class="profile-img relative z-10 rounded-full shadow-2xl border-4 border-white dark:border-gray-800 animate-pop-in" src="/src/assets/me.jpg" alt="Profile" />
      <div class="absolute top-2 right-2 bg-white dark:bg-primary-dark rounded-full px-3 py-1 shadow text-primary dark:text-white text-xs font-bold rotate-12 animate-pulse-slow">Hire Me</div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import { contactInfo } from '../constants/contact'
import { Github, Linkedin, Code, Smartphone, BrainCircuit, Database } from 'lucide-vue-next'

const scrollToSection = (selector) => {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
};

const tags = [
  { text: 'Web Development', icon: Code },
  { text: 'Mobile Development', icon: Smartphone },
  { text: 'Problem Solving', icon: BrainCircuit },
  { text: 'Database Management', icon: Database },
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
.dark .text-primary {
  color: #00c896;
}
.text-secondary {
  color: #22223b;
}
.dark .text-secondary {
  color: #e0e1dd;
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
  transition: transform 0.3s ease-in-out;
}
.profile-img:hover {
    transform: scale(1.05);
}
.btn-main {
  @apply px-8 py-3 rounded-full font-bold text-lg bg-primary text-white shadow-lg hover:scale-105 hover:bg-primary-dark transition-all duration-300;
}
.btn-secondary {
  @apply px-8 py-3 rounded-full font-bold text-lg bg-white dark:bg-gray-900 text-primary border-2 border-primary shadow hover:scale-105 hover:bg-primary hover:text-white transition-all duration-300;
}
.tag {
  @apply px-4 py-2 rounded-full font-semibold text-sm shadow hover:scale-105 transition-all duration-200;
}
.social-icon {
  @apply text-secondary dark:text-secondary-dark hover:text-primary dark:hover:text-primary-dark transition-all duration-300 hover:scale-110;
}
.profile-blob {
  filter: blur(1px);
  z-index: 0;
  animation: pulse-slow 4s infinite alternate;
  transition: transform 0.5s ease-in-out;
}

.summary-section:hover .profile-blob {
    transform: scale(1.1) rotate(15deg);
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
 