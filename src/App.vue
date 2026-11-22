<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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

gsap.registerPlugin(ScrollTrigger)

const activePhoto = ref(null)
const isPhotoModalOpen = ref(false)
const cursorEl = ref(null)
let lenis = null
let tickerCallback = null
let pointerMoveHandler = null

const openPhoto = (photo) => {
  activePhoto.value = photo
  isPhotoModalOpen.value = true
}

const closePhoto = () => {
  isPhotoModalOpen.value = false
  activePhoto.value = null
}

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!prefersReducedMotion) {
    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    tickerCallback = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tickerCallback)
    gsap.ticker.lagSmoothing(0)
  }

  // Fine-pointer custom cursor only (@media (hover: hover) and (pointer: fine))
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  if (isFinePointer && cursorEl.value) {
    const xTo = gsap.quickTo(cursorEl.value, 'x', { duration: 0.2, ease: 'power3.out' })
    const yTo = gsap.quickTo(cursorEl.value, 'y', { duration: 0.2, ease: 'power3.out' })

    pointerMoveHandler = (e) => {
      xTo(e.clientX)
      yTo(e.clientY)
    }
    window.addEventListener('pointermove', pointerMoveHandler, { passive: true })
  }
})

onUnmounted(() => {
  if (tickerCallback) {
    gsap.ticker.remove(tickerCallback)
  }
  if (pointerMoveHandler) {
    window.removeEventListener('pointermove', pointerMoveHandler)
  }
  lenis?.destroy()
})
</script>

<template>
  <div class="relative min-h-screen bg-[#f6f4ee] text-[#121316] font-sans antialiased selection:bg-[#0038ff] selection:text-white">
    <!-- Desktop Fine-Pointer Precision Cursor Ring -->
    <div
      ref="cursorEl"
      class="custom-cursor fixed top-0 left-0 w-5 h-5 rounded-full border border-[#0038ff]/40 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-150 ease-out hidden"
    ></div>

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

<style>
@media (hover: hover) and (pointer: fine) {
  .custom-cursor {
    display: block !important;
  }
}
</style>