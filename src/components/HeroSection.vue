<script setup>
import { portfolioData } from '../data/portfolioData'

const p = portfolioData.personal

const scrollTo = (id) => {
  const el = document.querySelector(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section class="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 px-6 md:px-10 overflow-hidden">
    
    <!-- Top Status Badge Row -->
    <div class="max-w-7xl mx-auto w-full mb-8 flex flex-wrap items-center justify-between gap-4">
      <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-xs font-mono text-slate-300 shadow-inner">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span class="text-white font-medium">{{ p.statusBadge }}</span>
        <span class="text-slate-600">•</span>
        <span class="text-cyan-400">{{ p.location }}</span>
      </div>

      <div class="hidden sm:flex items-center gap-3 text-xs font-mono text-slate-400">
        <span class="text-white font-medium">Associate Engineer @ visu.ai</span>
        <span class="text-slate-600">•</span>
        <span>2024 — Present</span>
      </div>
    </div>

    <!-- Main Hero Grid -->
    <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
      
      <!-- Left Column: Name & Value Proposition -->
      <div class="lg:col-span-7 space-y-6">
        
        <!-- Big Name - Proportional & Clean -->
        <div class="space-y-1.5">
          <div class="text-xs font-mono font-semibold tracking-widest uppercase text-cyan-400">
            Full Stack Developer
          </div>
          <h1 class="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] tracking-tight text-white leading-[1.08]">
            Venkateshwaran<span class="text-gradient-cyan">.</span>
          </h1>
        </div>

        <!-- Tagline Summary -->
        <p class="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
          Architecting high-throughput backend APIs with <span class="text-white font-semibold">Python (Django)</span> & <span class="text-white font-semibold">PHP (Laravel)</span>, scalable background task pipelines with <span class="text-cyan-300 font-semibold">Celery + RabbitMQ + Redis</span>, and responsive frontend applications with <span class="text-white font-semibold">Vue.js 3</span>.
        </p>

        <!-- Metrics Badges -->
        <div class="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-mono">
          <span class="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-slate-200 flex items-center gap-1.5 shadow-sm">
            <span class="text-cyan-400 font-bold">2+</span> Years Commercial Experience
          </span>
          <span class="px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-800/60 text-cyan-300 flex items-center gap-1.5 shadow-sm">
            <span class="font-bold">★ 85+</span> Students Mentored
          </span>
          <span class="px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 flex items-center gap-1.5 shadow-sm">
            <span class="font-bold">200+</span> HackerRank Solved
          </span>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-wrap items-center gap-3.5 pt-3">
          <button
            @click="scrollTo('#projects')"
            class="btn-pill solid text-xs sm:text-sm"
          >
            <span>Explore Selected Work</span>
            <svg class="w-3.5 h-3.5" viewBox="0 0 12 12" fill="none">
              <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </button>

          <a
            href="/resume.html"
            target="_blank"
            class="btn-pill text-xs sm:text-sm text-cyan-300 border-cyan-500/30 hover:border-cyan-400"
          >
            <svg class="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>Download Resume</span>
          </a>

          <button
            @click="scrollTo('#mentorship')"
            class="btn-pill text-xs sm:text-sm"
          >
            <span class="text-cyan-400">★</span>
            <span>Mentorship Story</span>
          </button>

          <a
            :href="p.whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-pill text-xs sm:text-sm text-emerald-400 hover:text-emerald-300 border-emerald-800/50"
          >
            <span>WhatsApp</span>
          </a>
        </div>

        <!-- Social Quick Links -->
        <div class="flex items-center gap-4 pt-1 text-xs font-mono text-slate-400">
          <span class="text-slate-500 uppercase tracking-wider">Connect:</span>
          <a :href="p.linkedin" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-400 transition-colors">
            LinkedIn ↗
          </a>
          <span class="text-slate-700">•</span>
          <a :href="p.github" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-400 transition-colors">
            GitHub ↗
          </a>
          <span class="text-slate-700">•</span>
          <a :href="'mailto:' + p.email" class="hover:text-cyan-400 transition-colors">
            {{ p.email }}
          </a>
        </div>

      </div>

      <!-- Right Column: Prominent Cutout Visual with Ambient Glow -->
      <div class="lg:col-span-5 flex justify-center lg:justify-end">
        <div class="relative w-full max-w-[340px] sm:max-w-[370px]">
          
          <!-- Outer Ambient Glows -->
          <div class="absolute -top-10 -left-10 w-64 h-64 bg-cyan-500/25 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          <div class="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-600/25 rounded-full blur-3xl -z-10 pointer-events-none"></div>

          <!-- The Pedestal Card (Rounded & Ambient) -->
          <div class="relative rounded-3xl bg-gradient-to-b from-[#131b2e] via-[#0d1424] to-[#080c14] border border-slate-700/80 p-2 shadow-2xl overflow-hidden group">
            
            <!-- Interior Glow Arc -->
            <div class="absolute -top-16 inset-x-0 h-40 bg-gradient-to-b from-cyan-500/20 to-transparent blur-xl pointer-events-none"></div>
            
            <!-- Cutout Frame -->
            <div class="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-b from-slate-900/60 via-slate-950/80 to-[#080c14] flex items-end justify-center">
              
              <!-- Subtle Background Light Disc behind Venkat -->
              <div class="absolute top-1/4 w-48 h-48 bg-gradient-to-tr from-cyan-400/20 via-indigo-500/20 to-transparent rounded-full blur-2xl pointer-events-none"></div>

              <!-- Venkateshwaran's Cutout Portrait - Bold, Clear, Prominent -->
              <img
                :src="p.avatar"
                :alt="p.name"
                class="relative z-10 w-full h-auto max-h-[96%] object-contain object-bottom group-hover:scale-105 transition-transform duration-700 drop-shadow-[0_20px_30px_rgba(0,0,0,0.85)]"
              />

              <!-- Subtle bottom fade for seamless blend -->
              <div class="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-[#080c14] to-transparent z-15 pointer-events-none"></div>
            </div>

            <!-- Bottom Experience Badge -->
            <div class="p-3 bg-[#0d1424]/90 border-t border-white/[0.06] flex items-center justify-between">
              <div>
                <div class="text-xs font-bold text-white font-mono">
                  Full Stack Engineer
                </div>
                <div class="text-[11px] text-slate-400 font-mono">
                  visu.ai • Geometriccae
                </div>
              </div>
              <div class="px-2.5 py-1 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-xs">
                2+ Yrs Exp
              </div>
            </div>

          </div>

          <!-- Floating Tech Badge 1 (Top Left) -->
          <div class="absolute -top-3.5 -left-4 glass-panel rounded-xl px-3 py-1.5 border border-white/[0.12] shadow-xl flex items-center gap-2 z-20">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span class="text-[11px] font-mono font-bold text-white">Python & Django</span>
          </div>

          <!-- Floating Tech Badge 2 (Right Side) -->
          <div class="absolute top-1/3 -right-4 glass-panel rounded-xl px-3 py-1.5 border border-white/[0.12] shadow-xl flex items-center gap-1.5 z-20">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span class="text-[11px] font-mono font-bold text-slate-200">Celery + Redis</span>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
