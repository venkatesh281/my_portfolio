<script setup>
import { ref, computed } from 'vue'
import { portfolioData } from '../data/portfolioData'
import { 
  Code, 
  Server, 
  Zap, 
  Layers, 
  Clock, 
  Activity, 
  Repeat, 
  Layout, 
  FileCode, 
  Palette, 
  Grid, 
  RefreshCw, 
  Database, 
  Flame, 
  TrendingUp, 
  CheckCircle, 
  Terminal, 
  Sparkles, 
  GitBranch, 
  Box, 
  Send,
  Cpu,
  Globe
} from 'lucide-vue-next'

const iconMap = {
  Code,
  Server,
  Zap,
  Layers,
  Clock,
  Activity,
  Repeat,
  Layout,
  FileCode,
  Palette,
  Grid,
  RefreshCw,
  Database,
  Flame,
  TrendingUp,
  CheckCircle,
  Terminal,
  Sparkles,
  GitBranch,
  Box,
  Send,
  Cpu,
  Globe
}

const categories = portfolioData.skills.categories
const selectedCategory = ref('All')

const filteredCategories = computed(() => {
  if (selectedCategory.value === 'All') {
    return categories
  }
  return categories.filter(c => c.name === selectedCategory.value)
})
</script>

<template>
  <section id="skills" class="py-20 md:py-28 relative bg-slate-950/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-accent-cyan text-xs font-semibold uppercase tracking-wider">
          Technical Arsenal
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Tools, Frameworks & Core Capabilities
        </h2>
        <p class="text-slate-400 text-base leading-relaxed">
          Full stack proficiency across backend microservices, real-time message brokers, optimized relational databases, and modern component-driven frontends.
        </p>

        <!-- Category Filter Tabs -->
        <div class="flex flex-wrap items-center justify-center gap-2 pt-6">
          <button
            @click="selectedCategory = 'All'"
            class="px-4 py-2 rounded-xl text-xs font-bold transition-all"
            :class="[
              selectedCategory === 'All'
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/25'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
            ]"
          >
            All Skills
          </button>
          <button
            v-for="cat in categories"
            :key="cat.name"
            @click="selectedCategory = cat.name"
            class="px-4 py-2 rounded-xl text-xs font-semibold transition-all"
            :class="[
              selectedCategory === cat.name
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/25'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
            ]"
          >
            {{ cat.name }}
          </button>
        </div>
      </div>

      <!-- Skills Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="cat in filteredCategories"
          :key="cat.name"
          class="glass-panel rounded-2xl p-6 border border-slate-800/80 hover:border-brand-500/30 transition-all duration-300 space-y-5"
        >
          <div class="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <h3 class="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-brand-400"></span>
              {{ cat.name }}
            </h3>
            <span class="text-[11px] font-mono text-slate-500">{{ cat.skills.length }} technologies</span>
          </div>

          <div class="space-y-3">
            <div
              v-for="skill in cat.skills"
              :key="skill.name"
              class="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/50 hover:border-slate-700/80 hover:bg-slate-850 transition-all group"
            >
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-slate-300 group-hover:text-brand-400 group-hover:border-brand-500/40 transition-colors">
                  <component :is="iconMap[skill.icon] || Code" class="w-4 h-4" />
                </div>
                <span class="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                  {{ skill.name }}
                </span>
              </div>
              <span class="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 group-hover:text-brand-300 group-hover:bg-brand-950/60 border border-transparent group-hover:border-brand-800/50 transition-all">
                {{ skill.level }}
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
