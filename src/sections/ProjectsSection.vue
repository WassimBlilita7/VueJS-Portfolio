<template>
  <section id="projects" class="projects-section flex flex-col items-center gap-12 px-6 md:px-16 py-16 md:py-24 bg-gradient-to-br from-blue-100 via-green-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500 rounded-3xl shadow-glass">
    <h2 class="text-3xl md:text-5xl font-extrabold text-primary dark:text-primary-dark animate-slide-in mb-8">🚀 Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :lottie="project.lottie"
        :tags="project.tags"
        :link="project.link"
      />
    </div>
  </section>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue'
import productImg from '../assets/projects/product.png'
import freelancerImg from '../assets/projects/freelancer.jpg'
import netflixImg from '../assets/projects/netflix.jpg'
import weatherImg from '../assets/projects/weather.png'

const projects = [
  {
    title: "Product Store",
    description: "E-commerce moderne (PERN stack) avec gestion produits, panier,  et dashboard admin.",
    image: productImg,
    lottie: "https://assets2.lottiefiles.com/packages/lf20_3rwasyjy.json",
    tags: ['+10 Themestyles', 'E-commerce', 'UI/UX', 'Stripe', 'Admin Panel'],
    link: "https://github.com/WassimBlilita7/Product-Store"
  },
  {
    title: "Wassit Freelancer DZ",
    description: "Plateforme MERN pour freelances algériens : profils, missions, messagerie, paiement sécurisé.",
    image: freelancerImg,
    lottie: "https://assets7.lottiefiles.com/packages/lf20_kkflmtur.json",
    tags: ['MERN', 'Freelance', 'Marketplace', 'Algérie', 'Realtime'],
    link: "https://github.com/WassimBlilita7/Wassit-Freelancer-DZ"
  },
  {
    title: "Netflix Clone",
    description: "Clone Netflix (MERN) avec authentification, streaming vidéo, recherche, favoris et responsive design.",
    image: netflixImg,
    lottie: "https://assets2.lottiefiles.com/packages/lf20_3rwasyjy.json",
    tags: ['MERN', 'Streaming', 'Auth', 'Responsive', 'UI/UX'],
    link: "https://github.com/WassimBlilita7/netflix"
  },
  {
    title: "Weather App",
    description: "Application météo moderne (React, API) avec géolocalisation, prévisions, animations et dark mode.",
    image: weatherImg,
    lottie: "https://assets7.lottiefiles.com/packages/lf20_kkflmtur.json",
    tags: ['React', 'API', 'Weather', 'Animations', 'Dark Mode'],
    link: "https://github.com/WassimBlilita7/Weather-App"
  }
]
</script>

<style scoped>
.projects-section {
  @apply w-full max-w-7xl mx-auto rounded-3xl shadow-glass;
}
/* Animations */
@keyframes slide-in {
  from { transform: translateY(-40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-slide-in { animation: slide-in 1s cubic-bezier(.68,-0.55,.27,1.55); }
</style>