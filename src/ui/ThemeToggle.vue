<template>
  <button @click="toggleTheme" class="theme-toggle">
    <transition name="fade" mode="out-in">
      <Sun v-if="!isDark" :size="22" class="icon-sun" />
      <Moon v-else :size="22" class="icon-moon" />
    </transition>
  </button>
</template>
<script setup>
import useTheme from '../hooks/useTheme.js'
import { Sun, Moon } from 'lucide-vue-next'
const { isDark, toggleTheme } = useTheme()
</script>
<style scoped>
.theme-toggle {
  @apply p-2 rounded-full bg-slate-200/50 dark:bg-gray-700/50 shadow-md border border-white/20 dark:border-white/10 transition-all duration-300 flex items-center justify-center;
  width: 44px;
  height: 44px;
  outline: none;
}
.theme-toggle:hover {
  box-shadow: 0 0 0 4px #42b88333;
  transform: scale(1.1);
  background-color: #42b8831f;
}
.icon-moon, .icon-sun {
  transition: transform 0.4s cubic-bezier(.68,-0.55,.27,1.55), color 0.3s;
}
.theme-toggle:hover .icon-moon, .theme-toggle:hover .icon-sun {
  transform: scale(1.1);
}
.icon-moon {
  color: #f8b042;
}
.icon-sun {
  color: #f59e42;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style> 