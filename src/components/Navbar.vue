<script setup>
import { ref } from 'vue'
import { Moon, Sun, Menu, X, Download, Sparkles, ArrowRight } from 'lucide-vue-next'

const props = defineProps({
  isDark: Boolean,
  toggleTheme: Function
})

const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Mentorship', href: '#mentorship', isHighlighted: true },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]

const scrollTo = (href) => {
  isMobileMenuOpen.value = false
  const el = document.querySelector(href)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      <nav class="glass-panel rounded-2xl px-5 py-3 flex items-center justify-between border border-slate-800/80 shadow-2xl">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-accent-cyan flex items-center justify-center text-white font-mono font-bold text-lg shadow-lg shadow-brand-500/25 group-hover:scale-105 transition-transform">
            V
          </div>
          <div>
            <div class="font-bold text-base tracking-tight text-slate-100 group-hover:text-brand-400 transition-colors">
              Venkateshwaran S
            </div>
            <div class="text-xs text-slate-400 flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Full Stack Developer</span>
            </div>
          </div>
        </a>

        <!-- Desktop Nav Links -->
        <div class="hidden md:flex items-center gap-1 bg-slate-950/40 p-1.5 rounded-xl border border-slate-800/60">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            @click.prevent="scrollTo(link.href)"
            class="px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200"
            :class="[
              link.isHighlighted
                ? 'text-accent-cyan bg-cyan-950/40 border border-cyan-800/40 hover:bg-cyan-900/50'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            ]"
          >
            <span v-if="link.isHighlighted" class="inline-block mr-1">★</span>
            {{ link.name }}
          </a>
        </div>

        <!-- Right Side Actions -->
        <div class="hidden sm:flex items-center gap-3">
          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            aria-label="Toggle Theme"
            class="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-brand-400 hover:border-brand-500/40 transition-all duration-200"
          >
            <Sun v-if="isDark" class="w-4 h-4 text-amber-400" />
            <Moon v-else class="w-4 h-4 text-indigo-400" />
          </button>

          <!-- Contact / Hire Button -->
          <a
            href="#contact"
            @click.prevent="scrollTo('#contact')"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-md shadow-brand-500/20 hover:shadow-brand-500/40 transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Let's Connect</span>
            <ArrowRight class="w-3.5 h-3.5" />
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center gap-2 sm:hidden">
          <button
            @click="toggleTheme"
            class="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
          >
            <Sun v-if="isDark" class="w-4 h-4 text-amber-400" />
            <Moon v-else class="w-4 h-4 text-indigo-400" />
          </button>
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          >
            <X v-if="isMobileMenuOpen" class="w-5 h-5" />
            <Menu v-else class="w-5 h-5" />
          </button>
        </div>
      </nav>

      <!-- Mobile Dropdown Menu -->
      <div
        v-if="isMobileMenuOpen"
        class="mt-2 sm:hidden glass-panel rounded-2xl p-4 border border-slate-800 shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-200"
      >
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          @click.prevent="scrollTo(link.href)"
          class="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
          :class="[
            link.isHighlighted
              ? 'text-accent-cyan bg-cyan-950/40 border border-cyan-800/40'
              : 'text-slate-200 hover:bg-slate-800/60'
          ]"
        >
          {{ link.name }}
        </a>
        <a
          href="#contact"
          @click.prevent="scrollTo('#contact')"
          class="mt-2 w-full text-center px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-brand-600 hover:bg-brand-500"
        >
          Get In Touch
        </a>
      </div>
    </div>
  </header>
</template>
