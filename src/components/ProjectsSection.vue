<script setup>
import { portfolioData } from '../data/portfolioData'

const { projects, problemSolving, education } = portfolioData
</script>

<template>
  <section id="projects" class="py-24 px-6 md:px-10 max-w-7xl mx-auto">
    <hr class="section-divider mb-16" />

    <!-- Section Header -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
      <div class="lg:col-span-4 space-y-4">
        <div class="eyebrow">/05 Selected Work</div>
        <div class="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500"></div>
        <h2 class="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
          Enterprise Systems & Architectures
        </h2>
        <p class="text-sm font-mono text-slate-400 leading-relaxed">
          Production software engineered for operational reliability, role-based workflows, and asynchronous background execution.
        </p>
      </div>

      <div class="lg:col-span-8 flex flex-col justify-end">
        <p class="text-sm text-slate-300 leading-relaxed">
          Client confidential platforms built for scale. Architected with strict MVC/MVT patterns, relational database normalization, and asynchronous workers.
        </p>
      </div>
    </div>

    <!-- Projects Grid (Reza GHZ Inspired Cards) -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
      <div
        v-for="(proj, idx) in projects"
        :key="proj.title"
        class="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between group shadow-xl"
      >
        <div class="space-y-5">
          <!-- Top Row: Index & Category -->
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono font-bold text-cyan-400">0{{ idx + 1 }}.</span>
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-slate-900 border border-slate-700 text-slate-300">
                {{ proj.category }}
              </span>
              <span
                v-if="proj.isClientProject"
                class="px-2 py-0.5 rounded-full text-[10px] font-mono bg-amber-950/40 border border-amber-800/40 text-amber-300"
              >
                Client Confidential
              </span>
              <span
                v-else
                class="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950/40 border border-emerald-800/40 text-emerald-300"
              >
                Open Source
              </span>
            </div>
          </div>

          <!-- Title & Context -->
          <div>
            <h3 class="font-display font-bold text-2xl text-white group-hover:text-cyan-300 transition-colors">
              {{ proj.title }}
            </h3>
            <div class="text-xs font-mono text-slate-400 mt-1">
              {{ proj.client }}
            </div>
          </div>

          <!-- Description -->
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {{ proj.description }}
          </p>

          <!-- Key Deliverables -->
          <div class="space-y-2 pt-2">
            <div
              v-for="hl in proj.highlights"
              :key="hl"
              class="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed"
            >
              <span class="text-cyan-400 shrink-0 mt-0.5">▸</span>
              <span>{{ hl }}</span>
            </div>
          </div>
        </div>

        <!-- Bottom: Tech Stack & Repository Link -->
        <div class="pt-6 mt-6 border-t border-slate-800/80 space-y-4">
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="t in proj.tech"
              :key="t"
              class="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
            >
              {{ t }}
            </span>
          </div>

          <div class="flex items-center justify-between pt-1">
            <a
              v-if="proj.github"
              :href="proj.github"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>{{ proj.github.includes('sonasi') ? 'View Mobile App Repository ↗' : (proj.github.includes('Student') ? 'View Spring MVC Repository ↗' : 'GitHub Profile ↗') }}</span>
            </a>

            <a
              href="#contact"
              class="text-xs font-mono text-slate-400 hover:text-white transition-colors ml-auto"
            >
              Inquire Details ↗
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Problem Solving & Education Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
      
      <!-- Problem Solving Card -->
      <div class="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-cyan-500/30 transition-all space-y-5">
        <div class="flex items-center justify-between">
          <span class="eyebrow">Problem Solving</span>
          <span class="px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 font-mono font-bold text-xs">
            HackerRank Verified
          </span>
        </div>

        <div>
          <div class="font-display font-extrabold text-4xl sm:text-5xl text-emerald-400 leading-none mb-2">
            200+
          </div>
          <div class="text-sm font-bold text-white">
            Algorithms & Data Structure Problems Solved
          </div>
          <div class="text-xs font-mono text-slate-400 mt-1">
            Implemented in Java & Python
          </div>
        </div>

        <div class="space-y-2 pt-2">
          <div
            v-for="topic in problemSolving.topics"
            :key="topic"
            class="flex items-start gap-2 text-xs text-slate-300 leading-relaxed"
          >
            <span class="text-emerald-400 shrink-0">✓</span>
            <span>{{ topic }}</span>
          </div>
        </div>
      </div>

      <!-- Education Card -->
      <div class="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-cyan-500/30 transition-all space-y-5 flex flex-col justify-between">
        <div class="space-y-4">
          <div class="eyebrow">Academic Background</div>
          <h3 class="font-display font-bold text-xl text-white">
            Formal Degrees
          </h3>

          <div class="space-y-4 pt-1">
            <div
              v-for="edu in education"
              :key="edu.degree"
              class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1"
            >
              <div class="flex items-center justify-between text-xs font-mono text-cyan-400">
                <span>{{ edu.period }}</span>
                <span class="px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40 text-cyan-300">Score: {{ edu.score }}</span>
              </div>
              <div class="text-sm font-bold text-white">
                {{ edu.degree }}
              </div>
              <div class="text-xs text-slate-400">
                {{ edu.institution }} • {{ edu.location }}
              </div>
            </div>
          </div>
        </div>

        <div class="text-xs font-mono text-slate-400 pt-3 border-t border-slate-800">
          Strong theoretical foundations in Algorithms, Database Normalization, and Distributed Systems.
        </div>
      </div>

    </div>

  </section>
</template>
