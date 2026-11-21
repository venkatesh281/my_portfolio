<script setup>
import { portfolioData } from '../data/portfolioData'
import { Zap, Layers, Database, GraduationCap, CheckCircle } from 'lucide-vue-next'

const iconMap = {
  Zap,
  Layers,
  Database,
  GraduationCap
}

const about = portfolioData.about
</script>

<template>
  <section id="about" class="py-20 md:py-28 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950/60 border border-brand-800/50 text-brand-400 text-xs font-semibold uppercase tracking-wider">
          About Me
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Engineering Resilient Systems & Fostering Talent
        </h2>
        <p class="text-slate-400 text-base sm:text-lg leading-relaxed">
          {{ about.summary }}
        </p>
      </div>

      <!-- Philosophy Pillars Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(item, idx) in about.philosophy"
          :key="idx"
          class="glass-card rounded-2xl p-6 border border-slate-800/70 hover:border-brand-500/50 hover:shadow-brand-500/10 hover:shadow-2xl transition-all duration-300 space-y-4 group"
        >
          <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-900/60 to-indigo-900/40 border border-brand-700/40 flex items-center justify-center text-brand-300 group-hover:scale-110 transition-transform">
            <component :is="iconMap[item.icon]" class="w-6 h-6" />
          </div>
          <h3 class="text-lg font-bold text-white group-hover:text-brand-400 transition-colors">
            {{ item.title }}
          </h3>
          <p class="text-sm text-slate-400 leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </div>

      <!-- Quick Facts Banner -->
      <div class="mt-12 glass-panel rounded-2xl p-6 md:p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-1 text-center md:text-left">
          <div class="text-base font-bold text-white">
            Looking for a Full Stack Engineer who delivers end-to-end?
          </div>
          <div class="text-sm text-slate-400">
            From database schemas & queue workers to responsive Vue 3 components and cloud deployment.
          </div>
        </div>
        <div class="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            class="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-brand-600 hover:bg-brand-500 transition-all shadow-md shadow-brand-500/20"
          >
            Start a Conversation
          </a>
          <a
            href="https://www.linkedin.com/in/venkateshwaran28"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2.5 rounded-xl font-semibold text-xs text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-all"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>

    </div>
  </section>
</template>
