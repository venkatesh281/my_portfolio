<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import Lenis from 'lenis'

import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import MarqueeBar from './components/MarqueeBar.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import MentorshipSection from './components/MentorshipSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterBar from './components/FooterBar.vue'
import PhotoModal from './components/PhotoModal.vue'

const activePhoto = ref(null)
const isPhotoModalOpen = ref(false)
let lenis = null

const openPhoto = (photo) => {
  activePhoto.value = photo
  isPhotoModalOpen.value = true
}

const closePhoto = () => {
  isPhotoModalOpen.value = false
  activePhoto.value = null
}

onMounted(() => {
  // Initialize Lenis smooth inertial scrolling
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  // Ambient mouse light follower (subtle, non-intrusive glow that follows cursor)
  const glow = document.getElementById('ambient-glow')
  if (glow) {
    let mouseMoved = false
    window.addEventListener('mousemove', (e) => {
      if (!mouseMoved) {
        glow.style.opacity = '1'
        mouseMoved = true
      }
      glow.style.left = e.clientX + 'px'
      glow.style.top = e.clientY + 'px'
    }, { passive: true })

    window.addEventListener('mouseleave', () => {
      glow.style.opacity = '0'
      mouseMoved = false
    })
  }
})

onUnmounted(() => {
  lenis?.destroy()
})
</script>

<template>
  <!-- Ambient Cursor Glow Follower -->
  <div id="ambient-glow" aria-hidden="true"></div>

  <!-- Main Website Container -->
  <div class="relative min-h-screen bg-[#080c14] text-[#e2e8f0]">
    <NavBar />
    <main>
      <HeroSection />
      <MarqueeBar />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <MentorshipSection @openPhoto="openPhoto" />
      <ProjectsSection />
      <ContactSection />
    </main>
    <FooterBar />
    <PhotoModal :photo="activePhoto" :isOpen="isPhotoModalOpen" @close="closePhoto" />
  </div>
</template>
