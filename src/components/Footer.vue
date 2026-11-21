<script setup>
import { ArrowUp, Heart, Github, Linkedin, Mail } from 'lucide-vue-next'
import { portfolioData } from '../data/portfolioData'

const p = portfolioData.personal

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="py-12 border-t border-slate-800/80 bg-slate-950/80 text-slate-400 text-xs">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
      
      <!-- Left info -->
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-600 to-accent-cyan flex items-center justify-center text-white font-mono font-bold text-xs">
          V
        </div>
        <div>
          <div class="font-bold text-white text-sm">Venkateshwaran S</div>
          <div class="text-[11px] text-slate-500">
            Full Stack Developer • Chennai, India
          </div>
        </div>
      </div>

      <!-- Center Links -->
      <div class="flex items-center gap-6">
        <a href="#about" class="hover:text-white transition-colors">About</a>
        <a href="#skills" class="hover:text-white transition-colors">Skills</a>
        <a href="#experience" class="hover:text-white transition-colors">Experience</a>
        <a href="#mentorship" class="text-accent-cyan hover:underline">Mentorship</a>
        <a href="#projects" class="hover:text-white transition-colors">Projects</a>
        <a href="#contact" class="hover:text-white transition-colors">Contact</a>
      </div>

      <!-- Right & Scroll to top -->
      <div class="flex items-center gap-4">
        <span>© {{ new Date().getFullYear() }} Venkateshwaran S</span>
        <button
          @click="scrollToTop"
          aria-label="Scroll to top"
          class="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <ArrowUp class="w-4 h-4" />
        </button>
      </div>

    </div>
  </footer>
</template>
