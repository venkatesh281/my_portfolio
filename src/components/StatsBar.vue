<script setup>
import { portfolioData } from '../data/portfolioData'
import { Briefcase, Users, Code, Cpu } from 'lucide-vue-next'

const iconMap = {
  Briefcase,
  Users,
  Code,
  Cpu
}
</script>

<template>
  <section class="relative -mt-6 z-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="(item, idx) in portfolioData.stats"
          :key="idx"
          class="glass-card rounded-2xl p-5 border border-slate-800/80 shadow-xl flex items-center gap-4 hover:border-brand-500/40 hover:-translate-y-1 transition-all duration-300"
        >
          <div class="w-12 h-12 rounded-xl bg-brand-950/60 border border-brand-800/40 flex items-center justify-center text-brand-400 shrink-0">
            <component :is="iconMap[item.icon]" class="w-6 h-6" />
          </div>
          <div>
            <div class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {{ item.value }}
            </div>
            <div class="text-xs font-semibold text-slate-300">
              {{ item.label }}
            </div>
            <div class="text-[11px] text-slate-500">
              {{ item.detail }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
