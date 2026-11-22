<script setup>
import { portfolioData } from '../data/portfolioData'

const { experience } = portfolioData
</script>

<template>
  <section id="experience" class="py-24 px-6 md:px-10 max-w-7xl mx-auto">
    <hr class="section-divider mb-16" />

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
      
      <!-- Left Column -->
      <div class="lg:col-span-4 space-y-5">
        <div class="eyebrow">/03 Work History</div>
        <h2 class="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
          Commercial Experience
        </h2>
        <p class="text-sm font-mono text-slate-400 leading-relaxed">
          Building production backend pipelines, asynchronous worker systems, and data-driven dashboards across fast-growing engineering teams.
        </p>
      </div>

      <!-- Right Column: Experience Cards -->
      <div class="lg:col-span-8 space-y-6">
        <div
          v-for="(exp, idx) in experience"
          :key="exp.company"
          class="glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08] hover:border-cyan-500/35 transition-colors space-y-5"
        >
          <!-- Top Row: Role, Company, Period -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-slate-800/80 pb-4">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="text-xs font-mono font-bold text-cyan-400">0{{ idx + 1 }}</span>
                <h3 class="font-display font-bold text-xl text-white">
                  {{ exp.role }}
                </h3>
              </div>
              <div class="text-sm font-medium text-cyan-300">
                {{ exp.company }}
              </div>
            </div>
            
            <div class="flex flex-wrap sm:flex-col items-start sm:items-end gap-1 text-xs font-mono">
              <span class="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-200 tabular-nums">
                {{ exp.period }}
              </span>
              <span class="text-slate-400 text-[11px]">{{ exp.location }}</span>
            </div>
          </div>

          <!-- Description -->
          <p class="text-sm text-slate-300 leading-relaxed">
            {{ exp.description }}
          </p>

          <!-- Bullet Points Checklist -->
          <div class="space-y-2.5">
            <div
              v-for="hl in exp.highlights"
              :key="hl"
              class="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed"
            >
              <span class="text-cyan-400 shrink-0 mt-1">▸</span>
              <span>{{ hl }}</span>
            </div>
          </div>

          <!-- Technologies Tags (Clean Hairlines) -->
          <div class="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
            <span
              v-for="t in exp.technologies"
              :key="t"
              class="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
            >
              {{ t }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
