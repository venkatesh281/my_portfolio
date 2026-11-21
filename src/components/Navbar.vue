<script setup>
import { ref, onMounted } from 'vue'

const menuOpen = ref(false)
const scrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 40
  }, { passive: true })
})

const scrollTo = (id) => {
  menuOpen.value = false
  const el = document.querySelector(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20' : 'bg-transparent'"
  >
    <nav class="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
      
      <!-- Brand Logo / Name with User Logo -->
      <a
        href="#"
        class="font-display font-extrabold text-base tracking-wider uppercase text-white hover:text-cyan-400 transition-colors flex items-center gap-2.5 group"
      >
        <img
          src="/logo.png"
          alt="Venkateshwaran"
          class="w-8 h-8 rounded-xl object-contain shadow-md shadow-purple-500/25 group-hover:scale-105 transition-transform"
        />
        <span>Venkateshwaran<span class="text-cyan-400">.</span></span>
      </a>

      <!-- Desktop Nav Links -->
      <div class="hidden md:flex items-center gap-6 text-xs font-mono tracking-wider uppercase">
        <button
          v-for="item in [
            { name: 'About', id: '#about' },
            { name: 'Skills', id: '#skills' },
            { name: 'Experience', id: '#experience' },
            { name: 'Mentorship ★', id: '#mentorship', isHighlight: true },
            { name: 'Projects', id: '#projects' }
          ]"
          :key="item.name"
          @click="scrollTo(item.id)"
          class="transition-colors font-medium py-1"
          :class="item.isHighlight ? 'text-cyan-400 hover:text-cyan-300' : 'text-slate-300 hover:text-white'"
        >
          {{ item.name }}
        </button>
      </div>

      <!-- Action Buttons (Resume + Contact) -->
      <div class="hidden md:flex items-center gap-3">
        <a
          href="/resume.html"
          target="_blank"
          class="btn-pill text-xs font-mono text-cyan-300 hover:text-white"
        >
          <svg class="w-3.5 h-3.5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <span>Resume / CV</span>
        </a>

        <button
          @click="scrollTo('#contact')"
          class="btn-pill solid text-xs font-mono"
        >
          <span>Say Hello</span>
          <svg class="w-3.5 h-3.5" viewBox="0 0 12 12" fill="none">
            <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Hamburger -->
      <button
        class="md:hidden p-2 text-slate-300 hover:text-white"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle Menu"
      >
        <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

    </nav>

    <!-- Mobile Dropdown Menu -->
    <div
      v-if="menuOpen"
      class="md:hidden bg-[#0d1321] border-b border-white/[0.1] px-6 py-6 space-y-4 text-sm font-mono uppercase"
    >
      <button
        v-for="item in [
          { name: 'About', id: '#about' },
          { name: 'Skills', id: '#skills' },
          { name: 'Experience', id: '#experience' },
          { name: 'Mentorship ★', id: '#mentorship', isHighlight: true },
          { name: 'Projects', id: '#projects' },
          { name: 'Contact', id: '#contact' }
        ]"
        :key="item.name"
        @click="scrollTo(item.id)"
        class="block w-full text-left py-2"
        :class="item.isHighlight ? 'text-cyan-400 font-bold' : 'text-slate-200'"
      >
        {{ item.name }}
      </button>

      <a
        href="/resume.html"
        target="_blank"
        class="block w-full py-2.5 text-center rounded-xl bg-cyan-950/60 border border-cyan-700/60 text-cyan-300 font-bold"
      >
        View / Download Resume (PDF) ↗
      </a>
    </div>
  </header>
</template>
