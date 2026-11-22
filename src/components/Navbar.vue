<script setup>
import { ref, onMounted } from 'vue'

const menuOpen = ref(false)
const scrolled = ref(false)
const activeSection = ref('hero')

const navItems = [
  { name: 'About', id: '#about' },
  { name: 'Skills', id: '#skills' },
  { name: 'Experience', id: '#experience' },
  { name: 'Mentorship', id: '#mentorship' },
  { name: 'Projects', id: '#projects' }
]

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 20

    // Track active section for indicator
    const sections = ['#about', '#skills', '#experience', '#mentorship', '#projects']
    for (const sec of sections) {
      const el = document.querySelector(sec)
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 200 && rect.bottom >= 200) {
          activeSection.value = sec
          break
        }
      }
    }
  }, { passive: true })
})

const scrollTo = (id) => {
  menuOpen.value = false
  activeSection.value = id
  const el = document.querySelector(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-40 bg-[#f6f4ee] border-b border-[rgba(18,19,22,0.08)] transition-[box-shadow] duration-200"
    :class="scrolled ? 'shadow-[0_2px_12px_rgba(18,19,22,0.04)]' : ''"
  >
    <nav class="max-w-7xl mx-auto px-6 md:px-10 py-3.5 flex items-center justify-between">
      
      <!-- Brand Serif Monogram & Name -->
      <a
        href="#"
        class="text-[#121316] hover:text-[#0038ff] transition-colors flex items-center gap-2.5 group"
        aria-label="Venkateshwaran Portfolio Home"
      >
        <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg border border-[rgba(18,19,22,0.12)] bg-[#fdfcf9] font-serif font-bold text-base text-[#121316] leading-none shadow-[0_1px_2px_rgba(18,19,22,0.04)] group-hover:border-[#0038ff]/40 transition-colors">
          V<span class="text-[#0038ff]">.</span>
        </span>
        <span class="font-sans font-bold text-sm sm:text-base tracking-tight text-[#121316]">
          Venkateshwaran<span class="text-[#0038ff]">.</span>
        </span>
      </a>

      <!-- Desktop Nav Links (Plus Jakarta Sans, Sentence Case, Quiet) -->
      <div class="hidden md:flex items-center gap-7 font-sans text-xs font-medium">
        <button
          v-for="item in navItems"
          :key="item.name"
          @click="scrollTo(item.id)"
          class="relative py-1 transition-colors cursor-pointer"
          :class="activeSection === item.id ? 'text-[#121316] font-semibold' : 'text-[#525866] hover:text-[#121316]'"
        >
          <span>{{ item.name }}</span>
          <span
            v-if="activeSection === item.id"
            class="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#0038ff] rounded-full"
          ></span>
        </button>
      </div>

      <!-- Action Items: Resume Link + Secondary Contact Button -->
      <div class="hidden md:flex items-center gap-4">
        <a
          href="/resume.html"
          target="_blank"
          class="font-sans text-xs font-medium text-[#525866] hover:text-[#0038ff] px-2 py-1 transition-colors flex items-center gap-1"
        >
          <span>Resume</span>
          <span class="text-[11px]">↗</span>
        </a>

        <!-- Secondary Style: Does NOT compete with Hero primary cobalt CTA -->
        <button
          @click="scrollTo('#contact')"
          class="px-4 py-2 rounded-full border border-[rgba(18,19,22,0.18)] hover:border-[#121316] bg-transparent text-[#121316] hover:bg-[#121316] hover:text-white active:scale-[0.98] font-sans text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-1.5"
        >
          <span>Get in Touch</span>
          <span class="text-[11px]">↘</span>
        </button>
      </div>

      <!-- Mobile Hamburger -->
      <button
        class="md:hidden p-2 text-[#121316] hover:text-[#0038ff] transition-colors"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle Navigation Menu"
      >
        <svg v-if="!menuOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else class="w-5 h-5 text-[#0038ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

    </nav>

    <!-- Mobile Dropdown Menu (Full Solid Paper Drawer, 48px Touch Targets) -->
    <transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="menuOpen"
        class="md:hidden bg-[#f6f4ee] border-b border-[rgba(18,19,22,0.08)] px-6 py-5 space-y-1 font-sans text-sm shadow-lg"
      >
        <button
          v-for="item in [
            { name: 'About', id: '#about' },
            { name: 'Skills', id: '#skills' },
            { name: 'Experience', id: '#experience' },
            { name: 'Mentorship', id: '#mentorship' },
            { name: 'Projects', id: '#projects' },
            { name: 'Contact', id: '#contact' }
          ]"
          :key="item.name"
          @click="scrollTo(item.id)"
          class="block w-full text-left py-3 text-[#525866] hover:text-[#0038ff] border-b border-[rgba(18,19,22,0.05)] transition-colors"
        >
          {{ item.name }}
        </button>

        <div class="pt-4 flex flex-col gap-2.5">
          <a
            href="/resume.html"
            target="_blank"
            class="block w-full py-3 text-center rounded-xl bg-white border border-[rgba(18,19,22,0.12)] text-[#121316] text-xs font-semibold"
          >
            Download Resume (PDF) ↗
          </a>
          <button
            @click="scrollTo('#contact')"
            class="block w-full py-3 text-center rounded-xl border border-[rgba(18,19,22,0.2)] bg-[#121316] text-white text-xs font-semibold"
          >
            Get in Touch ↘
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>