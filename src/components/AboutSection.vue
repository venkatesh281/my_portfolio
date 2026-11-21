<script setup>
import { portfolioData } from '../data/portfolioData'

const { about, stats } = portfolioData
</script>

<template>
  <section id="about" class="py-24 px-6 md:px-10 max-w-7xl mx-auto">
    <hr class="section-divider mb-16" />

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      <!-- Left Column: Section Title & Mission -->
      <div class="lg:col-span-4 space-y-6">
        <div class="eyebrow">/01 About Venkatesh</div>
        <div class="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500"></div>
        <h2 class="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-snug">
          Architecting resilient backends, empowering developers.
        </h2>
        <p class="text-sm font-mono text-slate-400 leading-relaxed">
          Over 2 years of enterprise engineering in Chennai, focused on backend microservices, async message workers, and community education.
        </p>
      </div>

      <!-- Right Column: Narrative & Philosophy Pillars -->
      <div class="lg:col-span-8 space-y-12">
        
        <!-- Summary Paragraph -->
        <p class="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
          {{ about.summary }}
        </p>

        <!-- 4 Philosophy Pillars Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div
            v-for="(item, idx) in about.philosophy"
            :key="item.title"
            class="glass-card rounded-2xl p-6 border border-slate-800 space-y-3 group hover:border-cyan-500/40"
          >
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono font-bold text-cyan-400">0{{ idx + 1 }}</span>
              <span class="text-slate-500 group-hover:text-cyan-400 transition-colors">↗</span>
            </div>
            <h3 class="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
              {{ item.title }}
            </h3>
            <p class="text-xs text-slate-400 leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>

        <!-- Metrics Cards Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="glass-panel rounded-2xl p-5 border border-slate-800 hover:border-cyan-500/30 transition-colors"
          >
            <div class="font-display font-extrabold text-3xl sm:text-4xl text-cyan-400 mb-1">
              {{ stat.value }}
            </div>
            <div class="text-xs font-semibold text-white">
              {{ stat.label }}
            </div>
            <div class="text-[11px] font-mono text-slate-400 mt-0.5">
              {{ stat.detail }}
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
