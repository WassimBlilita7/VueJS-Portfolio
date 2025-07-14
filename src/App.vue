<template>
  <div>
    <AppBar />
    <SummarySection />
    <EducationSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </div>
</template>
<script setup>
import AppBar from './layout/AppBar.vue'
import SummarySection from './sections/SummarySection.vue'
import EducationSection from './sections/EducationSection.vue'
import SkillsSection from './sections/SkillsSection.vue'
import ProjectsSection from './sections/ProjectsSection.vue'
import ContactSection from './sections/ContactSection.vue'
</script>
