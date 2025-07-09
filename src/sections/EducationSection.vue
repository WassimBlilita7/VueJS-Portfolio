<template>
  <section class="education-section flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-16 py-16 md:py-24 bg-gradient-to-br from-blue-100 via-green-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500 rounded-3xl shadow-glass mt-12">
    <div class="flex-1 flex flex-col gap-8 items-start">
      <h2 class="text-3xl md:text-5xl font-extrabold text-primary dark:text-primary-dark animate-slide-in">🎓 My Education</h2>
      <ul class="timeline flex flex-col gap-8 mt-6">
        <li class="timeline-item animate-fade-in">
          <div class="flex items-center gap-4">
            <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=128&q=80" alt="Master" class="edu-img" />
            <div>
              <h3 class="font-bold text-xl text-primary dark:text-primary-dark">Master in Computer Science</h3>
              <p class="text-secondary dark:text-white">University of Algiers · 2021-2023</p>
              <span class="badge">With Honors</span>
            </div>
          </div>
        </li>
        <li class="timeline-item animate-fade-in delay-200">
          <div class="flex items-center gap-4">
            <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=facearea&w=128&q=80" alt="Licence" class="edu-img" />
            <div>
              <h3 class="font-bold text-xl text-primary dark:text-primary-dark">Bachelor in Computer Science</h3>
              <p class="text-secondary dark:text-white">University of Algiers · 2018-2021</p>
              <span class="badge">Top 10%</span>
            </div>
          </div>
        </li>
        <li class="timeline-item animate-fade-in delay-400">
          <div class="flex items-center gap-4">
            <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=facearea&w=128&q=80" alt="Extra" class="edu-img" />
            <div>
              <h3 class="font-bold text-xl text-primary dark:text-primary-dark">Online Certifications</h3>
              <p class="text-secondary dark:text-white">Coursera, Udemy, OpenClassrooms</p>
              <span class="badge">Continuous Learning</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="flex-1 flex flex-col items-center justify-center relative animate-profile">
      <img class="edu-main-img rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800 animate-pop-in" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="Education" />
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary dark:bg-primary-dark text-white px-6 py-2 rounded-full shadow-lg font-bold animate-bounce">Never Stop Learning 🚀</div>
    </div>
  </section>
</template>
<script setup>
// Pas de logique complexe ici, tout est statique pour l'instant
</script>
<style scoped>
.education-section {
  @apply w-full max-w-7xl mx-auto rounded-3xl shadow-glass;
}
.timeline-item {
  @apply bg-white dark:bg-gray-900 rounded-2xl shadow p-4 flex items-center gap-4 border-l-4 border-primary dark:border-primary-dark;
  min-width: 320px;
}
.edu-img {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.12);
  border: 2px solid #fff;
  background: #fff;
}
.edu-main-img {
  width: 340px;
  height: 260px;
  object-fit: cover;
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
  border: 4px solid #fff;
  background: #fff;
}
.badge {
  @apply inline-block bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-dark font-semibold px-3 py-1 rounded-full text-xs mt-2 shadow;
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
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-fade-in { animation: fade-in 1.2s ease; }
.animate-slide-in { animation: slide-in 1s cubic-bezier(.68,-0.55,.27,1.55); }
.animate-pop-in { animation: pop-in 0.8s cubic-bezier(.68,-0.55,.27,1.55); }
.animate-bounce { animation: bounce 1.5s infinite alternate; }
</style> 