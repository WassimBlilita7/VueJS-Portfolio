<template>
  <header :class="['appbar', { 'glassy-header': isScrolled }]">
    <div class="logo flex items-center gap-2 group cursor-pointer select-none" @click="refreshPage">
      <LucideCode :size="38" class="logo-icon transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-8deg]" />
      <span class="logo-text">Portfolio</span>
    </div>
    <nav class="flex items-center gap-4">
      <ul :class="['nav-list', { 'open': menuOpen }]">
        <li v-for="item in navItems" :key="item.name">
          <a :href="item.href" @click.prevent="scrollToSection(item.href)" class="nav-link" :class="{ 'active': activeSection === item.href }">{{ item.name }}</a>
        </li>
      </ul>
      <ThemeToggle class="theme-toggle" />
      <a href="#contact" @click.prevent="scrollToSection('#contact')" class="header-cta hidden md:inline-block ml-4">Contact</a>
      <button class="burger" @click="menuOpen = !menuOpen">
        <span :class="{ 'open': menuOpen }"></span>
        <span :class="{ 'open': menuOpen }"></span>
        <span :class="{ 'open': menuOpen }"></span>
      </button>
    </nav>
  </header>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import navItems from '../constants/navItems.js'
import ThemeToggle from '../ui/ThemeToggle.vue'
import { LucideCode } from 'lucide-vue-next'
const menuOpen = ref(false)
const activeSection = ref('')
const isScrolled = ref(false)

const scrollToSection = (selector) => {
  const element = document.querySelector(selector)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  menuOpen.value = false
}

const refreshPage = () => {
  window.location.reload()
}

const handleScroll = () => {
  const sections = navItems.map(item => document.querySelector(item.href))
  const scrollPosition = window.scrollY + 100 // offset

  for (const section of sections) {
    if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
      activeSection.value = `#${section.id}`
      break;
    }
  }

  isScrolled.value = window.scrollY > 20;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // set active section on initial load
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<style scoped>
.appbar {
  @apply w-full fixed top-0 left-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300;
}

.appbar.glassy-header {
  @apply border-b border-glass-border dark:border-glass-border-dark backdrop-blur-lg;
  background: rgba(255,255,255,0.75);
  box-shadow: 0 8px 32px 0 rgba(66,184,131,0.10), 0 2px 24px 0 #42b88333;
  border-bottom: 2px solid rgba(66,184,131,0.13);
  backdrop-filter: blur(16px) saturate(1.2);
}

.dark .appbar.glassy-header {
  background: rgba(24,24,32,0.82);
  box-shadow: 0 8px 32px 0 #00c89622, 0 2px 24px 0 #00c89633;
  border-bottom: 2px solid rgba(0,200,150,0.13);
}

.logo-text {
  @apply font-extrabold text-3xl text-primary dark:text-primary-dark tracking-tight transition-transform duration-300 drop-shadow-lg;
  letter-spacing: 0.04em;
  text-shadow: 0 2px 16px #42b88333, 0 1px 0 #fff;
}

.logo-icon {
  @apply text-primary dark:text-primary-dark drop-shadow-lg transition-all duration-300;
  filter: drop-shadow(0 0 8px #42b88355);
}

.logo:hover .logo-icon, .logo:hover .logo-text {
  transform: scale(1.08) rotate(-4deg);
  filter: brightness(1.2) drop-shadow(0 0 16px #42b88399);
}

.nav-list {
  @apply flex gap-10 items-center transition-all duration-500;
  font-size: 1.13rem;
}

.nav-link {
  @apply font-semibold text-lg text-secondary dark:text-secondary-dark px-4 py-1 rounded-lg transition-all duration-300 hover:bg-primary/10 dark:hover:bg-primary-dark/10 hover:text-primary dark:hover:text-primary-dark shadow-sm relative;
  overflow: hidden;
  letter-spacing: 0.02em;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #42b883 0%, #00c896 100%);
  border-radius: 2px;
  transition: width 0.3s cubic-bezier(.68,-0.55,.27,1.55), left 0.3s cubic-bezier(.68,-0.55,.27,1.55);
}

.nav-link:hover::after, .nav-link.active::after {
  width: 80%;
  left: 10%;
}

.nav-link.active {
  @apply bg-primary/20 dark:bg-primary-dark/20 text-primary dark:text-primary-dark;
  font-weight: 900;
  box-shadow: 0 2px 12px #42b88322;
}

.header-cta {
  @apply px-6 py-2 rounded-full font-bold text-base bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 text-white shadow-lg hover:scale-105 hover:from-green-500 hover:to-teal-500 transition-all duration-300 border-2 border-white/30;
  letter-spacing: 0.04em;
  box-shadow: 0 2px 16px #42b88333;
}

.header-cta:hover {
  filter: brightness(1.1) drop-shadow(0 0 8px #00c89699);
}

.burger {
  @apply flex flex-col justify-center items-center w-10 h-10 ml-4 md:hidden focus:outline-none;
  background: none;
  border: none;
  cursor: pointer;
}

.burger span {
  @apply block w-7 h-1 my-1 bg-secondary dark:bg-secondary-dark rounded transition-all duration-300;
}

.burger span.open:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.burger span.open:nth-child(2) {
  opacity: 0;
}

.burger span.open:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

@media (max-width: 768px) {
  .nav-list {
    @apply flex-col absolute top-20 right-0 bg-glass dark:bg-glass-dark w-56 rounded-xl shadow-xl p-6 gap-6 border border-glass-border dark:border-glass-border-dark transition-all duration-500;
    transform: translateX(120%);
    opacity: 0;
    pointer-events: none;
  }
  .nav-list.open {
    transform: translateX(0);
    opacity: 1;
    pointer-events: auto;
  }
}
</style> 