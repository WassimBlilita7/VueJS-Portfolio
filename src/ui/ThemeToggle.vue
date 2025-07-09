<template>
  <button @click="toggleTheme" class="theme-toggle">
    <span v-if="isDark" class="icon-moon">🌙</span>
    <span v-else class="icon-sun">☀️</span>
  </button>
</template>
<script setup>
import useTheme from '../hooks/useTheme.js'
const { isDark, toggleTheme } = useTheme()
</script>
<style scoped>
.theme-toggle {
  @apply p-2 rounded-full bg-glass dark:bg-glass-dark shadow-lg border border-glass-border dark:border-glass-border-dark transition-all duration-300 flex items-center justify-center;
  font-size: var(--theme-toggle-size, 1.5rem);
  position: static;
  outline: none;
}
.theme-toggle:hover {
  box-shadow: 0 0 0 4px #42b88333;
  transform: scale(1.12) rotate(-8deg);
}
.icon-moon, .icon-sun {
  transition: transform 0.4s cubic-bezier(.68,-0.55,.27,1.55), filter 0.3s;
}
.theme-toggle:hover .icon-moon, .theme-toggle:hover .icon-sun {
  transform: scale(1.2) rotate(10deg);
  filter: brightness(1.2) drop-shadow(0 0 12px #facc15cc);
}
.icon-moon {
  color: #facc15;
  filter: drop-shadow(0 0 8px #facc15aa);
}
.icon-sun {
  color: #f59e42;
  filter: drop-shadow(0 0 8px #f59e4288);
}
</style> 