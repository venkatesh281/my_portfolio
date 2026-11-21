<script setup>
import { portfolioData } from '../data/portfolioData'

const { skills } = portfolioData
</script>

<template>
  <section id="skills" class="py-24 px-6 md:px-10 max-w-7xl mx-auto">
    <hr class="section-divider mb-16" />

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
      
      <!-- Left Column -->
      <div class="lg:col-span-4 space-y-4">
        <div class="eyebrow">/02 Technical Arsenal</div>
        <div class="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500"></div>
        <h2 class="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
          Tools, Frameworks & Core Capabilities
        </h2>
        <p class="text-sm font-mono text-slate-400 leading-relaxed">
          Production-tested stack spanning asynchronous queues, scalable REST APIs, relational schema optimization, and responsive reactive interfaces.
        </p>
      </div>

      <!-- Right Column: Skills Categorized -->
      <div class="lg:col-span-8 space-y-8">
        <div
          v-for="cat in skills.categories"
          :key="cat.name"
          class="glass-panel rounded-2xl p-6 border border-slate-800/80 space-y-4 hover:border-cyan-500/30 transition-colors"
        >
          <!-- Category Header -->
          <div class="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 class="text-sm font-mono font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
              {{ cat.name }}
            </h3>
            <span class="text-xs font-mono text-slate-400">{{ cat.skills.length }} skills</span>
          </div>

          <!-- Skills Badges Grid -->
          <div class="flex flex-wrap gap-2.5">
            <div
              v-for="skill in cat.skills"
              :key="skill.name"
              class="px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/70 text-xs font-medium text-slate-200 hover:text-white hover:border-cyan-400 hover:bg-slate-800 transition-all flex items-center gap-2 shadow-sm"
            >
              <span>{{ skill.name }}</span>
              <span class="text-[10px] font-mono text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">
                {{ skill.level }}
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
