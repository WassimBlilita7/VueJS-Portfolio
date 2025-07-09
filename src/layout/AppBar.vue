<template>
  <header class="appbar">
    <div class="logo flex items-center gap-2" @mouseenter="logoHover = true" @mouseleave="logoHover = false">
      <LucideCode :size="36" class="logo-icon" />
      <span :class="['logo-text', { 'logo-animate': logoHover }]" v-if="!menuOpen">Portfolio</span>
    </div>
    <nav class="flex items-center gap-4">
      <ul :class="['nav-list', { 'open': menuOpen }]">
        <li>
          <a href="#summary" class="nav-link">Summary</a>
        </li>
        <li>
          <a href="#education" class="nav-link">Education</a>
        </li>
        <li>
          <a href="#projects" class="nav-link">Projects</a>
        </li>
        <li>
          <a href="#skills" class="nav-link">Skills</a>
        </li>
        <li>
          <a href="#contacts" class="nav-link">Contacts</a>
        </li>
      </ul>
      <ThemeToggle class="ml-2 align-middle" style="--theme-toggle-size: 1.5rem;" />
      <button class="burger" @click="menuOpen = !menuOpen">
        <span :class="{ 'open': menuOpen }"></span>
        <span :class="{ 'open': menuOpen }"></span>
        <span :class="{ 'open': menuOpen }"></span>
      </button>
    </nav>
  </header>
</template>
<script setup>
import { ref } from 'vue'
import navItems from '../constants/navItems.js'
import ThemeToggle from '../ui/ThemeToggle.vue'
import { LucideCode, LucideChevronDown } from 'lucide-vue-next'
const menuOpen = ref(false)
const hovered = ref(null)
const logoHover = ref(false)
const creationsOpen = ref(false)
const creations = [
  { name: 'Projet 3D', href: '#creation-3d' },
  { name: 'App Mobile', href: '#creation-mobile' },
  { name: 'Landing Page', href: '#creation-landing' },
]
</script>
<style scoped>
.appbar {
  @apply w-full fixed top-0 left-0 z-50 flex items-center justify-between px-8 py-4 bg-glass dark:bg-glass-dark border-b border-glass-border dark:border-glass-border-dark shadow-lg transition-colors duration-500 backdrop-blur-lg;
}
.logo-text {
  @apply font-extrabold text-3xl text-primary dark:text-primary-dark tracking-tight transition-transform duration-300 drop-shadow-lg;
}
.logo-icon {
  @apply text-primary dark:text-primary-dark drop-shadow-lg transition-all duration-300;
}
.logo:hover .logo-icon, .logo:hover .logo-text {
  transform: scale(1.08) rotate(-4deg);
  filter: brightness(1.2) drop-shadow(0 0 16px #42b88399);
}
.logo-animate {
  transform: scale(1.08) rotate(-2deg);
  text-shadow: 0 4px 24px #42b88355;
}
.nav-list {
  @apply flex gap-10 items-center transition-all duration-500;
}
.nav-link {
  @apply font-semibold text-lg text-secondary dark:text-secondary-dark px-4 py-1 rounded-lg transition-all duration-300 hover:bg-primary/10 dark:hover:bg-primary-dark/10 hover:text-primary dark:hover:text-primary-dark shadow-sm relative;
  overflow: hidden;
}
.nav-link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #42b883 0%, #00c896 100%);
  transition: width 0.3s cubic-bezier(.68,-0.55,.27,1.55), left 0.3s cubic-bezier(.68,-0.55,.27,1.55);
}
.nav-link:hover::after, .nav-link.active::after {
  width: 80%;
  left: 10%;
}
.nav-link.active {
  @apply bg-primary/20 dark:bg-primary-dark/20 text-primary dark:text-primary-dark;
}
.creations-menu {
  animation: fade-in 0.3s;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
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