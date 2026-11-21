<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const menuOpen = ref(false)
const scrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => { scrolled.value = window.scrollY > 60 }, { passive: true })
  gsap.fromTo('.nav-entrance', { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 1.2, ease: 'expo.out', stagger: 0.06, delay: 0.5 })
})

const scrollTo = (id) => {
  menuOpen.value = false
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="scrolled ? 'bg-[rgba(10,10,10,0.9)] backdrop-blur-md border-b border-white/[0.05]' : ''">
    <nav class="max-w-[1440px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
      <a href="#" class="nav-entrance font-display font-bold text-sm tracking-wider uppercase text-[#f0ece3] hover:text-[#c8ff00] transition-colors duration-300" data-hover>
        Venkateshwaran<span class="text-[#c8ff00]">.</span>
      </a>
      <div class="hidden md:flex items-center gap-7">
        <button v-for="item in ['#about','#skills','#experience','#mentorship','#projects']" :key="item"
          @click="scrollTo(item)" class="nav-entrance nav-link" data-hover>
          {{ item.replace('#','') }}
        </button>
      </div>
      <div class="hidden md:flex items-center gap-4 nav-entrance">
        <button @click="scrollTo('#contact')" class="btn-pill text-xs" data-hover>
          <span>Say Hello</span>
          <svg class="w-3 h-3" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </button>
      </div>
      <button class="md:hidden p-2 relative z-50" @click="menuOpen = !menuOpen" data-hover aria-label="Toggle menu">
        <span class="block w-5 h-px bg-[#f0ece3] mb-1 transition-all duration-300" :class="menuOpen ? 'rotate-45 translate-y-1.5' : ''"></span>
        <span class="block w-5 h-px bg-[#f0ece3] transition-all duration-300" :class="menuOpen ? 'opacity-0' : ''"></span>
        <span class="block w-5 h-px bg-[#f0ece3] mt-1 transition-all duration-300" :class="menuOpen ? '-rotate-45 -translate-y-1.5' : ''"></span>
      </button>
    </nav>
    <transition enter-active-class="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      leave-active-class="transition-all duration-400 ease-in"
      enter-from-class="opacity-0 -translate-y-4" leave-to-class="opacity-0 -translate-y-4">
      <div v-if="menuOpen" class="fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col items-center justify-center gap-10">
        <button v-for="item in ['#about','#skills','#experience','#mentorship','#projects','#contact']" :key="item"
          @click="scrollTo(item)" class="font-display font-bold text-4xl uppercase text-[#f0ece3] hover:text-[#c8ff00] transition-colors">
          {{ item.replace('#','') }}
        </button>
      </div>
    </transition>
  </header>
</template>
