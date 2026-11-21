<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

// All section components
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
  // ——— Lenis smooth scroll ———
  lenis = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)

  // ——— Custom cursor ———
  const cursor = document.getElementById('cursor')
  const trail  = document.getElementById('cursor-trail')
  if (cursor && trail) {
    let trailX = 0, trailY = 0

    window.addEventListener('mousemove', (e) => {
      gsap.to(cursor, {
        x: e.clientX, y: e.clientY,
        duration: 0.1, ease: 'none'
      })
      trailX += (e.clientX - trailX) * 0.14
      trailY += (e.clientY - trailY) * 0.14
      trail.style.left = trailX + 'px'
      trail.style.top  = trailY + 'px'
    })

    document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hovering'))
      el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'))
    })
  }

  // ——— Scroll-triggered section reveals ———
  gsap.utils.toArray('.reveal-wrap .inner').forEach((el) => {
    gsap.to(el, {
      y: 0,
      duration: 1.1,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: el.parentElement,
        start: 'top 88%',
        toggleActions: 'play none none none',
      }
    })
  })

  // ——— Fade-in elements ———
  gsap.utils.toArray('.fade-in').forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0, y: 24 },
      {
        opacity: 1, y: 0,
        duration: 1,
        ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 90%' }
      }
    )
  })

  // ——— Stagger children ———
  gsap.utils.toArray('.stagger-children').forEach((parent) => {
    const children = parent.children
    gsap.fromTo(children,
      { opacity: 0, y: 32 },
      {
        opacity: 1, y: 0,
        duration: 0.9,
        ease: 'expo.out',
        stagger: 0.08,
        scrollTrigger: { trigger: parent, start: 'top 88%' }
      }
    )
  })
})

onUnmounted(() => {
  lenis?.destroy()
  ScrollTrigger.getAll().forEach(t => t.kill())
})
</script>

<template>
  <!-- Grain Overlay -->
  <div class="grain-overlay"></div>

  <!-- Custom Cursor -->
  <div id="cursor"></div>
  <div id="cursor-trail"></div>

  <!-- Main App -->
  <div class="relative min-h-screen bg-[#0a0a0a] text-[#f0ece3] overflow-x-hidden selection:bg-[#c8ff00] selection:text-black">
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
