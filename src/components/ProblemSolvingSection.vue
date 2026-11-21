<script setup>
import { portfolioData } from '../data/portfolioData'
import { Award, Code2, Check, BookOpen, GraduationCap } from 'lucide-vue-next'

const ps = portfolioData.problemSolving
const education = portfolioData.education
</script>

<template>
  <section class="py-20 md:py-24 relative bg-slate-950/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <!-- Left Column: Problem Solving & Algorithms -->
        <div class="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800/80 shadow-xl space-y-6">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-xs font-bold">
              <Code2 class="w-4 h-4" />
              <span>HackerRank Verified</span>
            </div>
            <span class="text-xs font-mono text-slate-400">Java & Python</span>
          </div>

          <div>
            <h3 class="text-2xl font-extrabold text-white tracking-tight">
              {{ ps.title }}
            </h3>
            <p class="text-sm text-slate-400 mt-1">
              Solved <span class="text-emerald-400 font-bold font-mono">200+ algorithm and data structure challenges</span>, cultivating a disciplined engineering approach to time complexity, edge cases, and maintainable object-oriented systems.
            </p>
          </div>

          <!-- Topics List -->
          <div class="space-y-2.5">
            <div
              v-for="(topic, idx) in ps.topics"
              :key="idx"
              class="flex items-start gap-3 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60 text-xs text-slate-200"
            >
              <Check class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{{ topic }}</span>
            </div>
          </div>
        </div>

        <!-- Right Column: Formal Education -->
        <div class="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800/80 shadow-xl space-y-6 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950/60 border border-brand-800/60 text-brand-300 text-xs font-bold">
              <GraduationCap class="w-4 h-4" />
              <span>Academic Foundation</span>
            </div>

            <h3 class="text-2xl font-extrabold text-white tracking-tight">
              Education
            </h3>

            <div class="space-y-4 pt-2">
              <div
                v-for="edu in education"
                :key="edu.degree"
                class="p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 space-y-1.5"
              >
                <div class="flex items-center justify-between text-xs text-brand-400 font-mono font-semibold">
                  <span>{{ edu.period }}</span>
                  <span class="px-2 py-0.5 rounded bg-brand-950/80 border border-brand-800/40 text-brand-300">Score: {{ edu.score }}</span>
                </div>
                <div class="text-sm font-bold text-white">
                  {{ edu.degree }}
                </div>
                <div class="text-xs text-slate-400">
                  {{ edu.institution }}
                </div>
                <div class="text-[11px] text-slate-500">
                  {{ edu.location }}
                </div>
              </div>
            </div>
          </div>

          <div class="text-[11px] text-slate-500 text-center pt-2 border-t border-slate-800/80">
            Strong academic base combined with continuous production engineering practice.
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
