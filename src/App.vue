<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import StatsBar from './components/StatsBar.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import MentorshipSection from './components/MentorshipSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ProblemSolvingSection from './components/ProblemSolvingSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'
import PhotoModal from './components/PhotoModal.vue'

const isDark = ref(true)
const activePhoto = ref(null)
const isPhotoModalOpen = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
    localStorage.setItem('theme', 'light')
  }
}

const openPhoto = (photo) => {
  activePhoto.value = photo
  isPhotoModalOpen.value = true
}

const closePhoto = () => {
  isPhotoModalOpen.value = false
  activePhoto.value = null
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light') {
    isDark.value = false
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
  } else {
    isDark.value = true
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
  }
})
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300 selection:bg-brand-500 selection:text-white">
    <!-- Sticky Glass Navigation -->
    <Navbar :isDark="isDark" :toggleTheme="toggleTheme" />

    <!-- Main Content Layout -->
    <main>
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <MentorshipSection @openPhoto="openPhoto" />
      <ProjectsSection />
      <ProblemSolvingSection />
      <ContactSection />
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Photo Lightbox Modal -->
    <PhotoModal
      :photo="activePhoto"
      :isOpen="isPhotoModalOpen"
      @close="closePhoto"
    />
  </div>
</template>
