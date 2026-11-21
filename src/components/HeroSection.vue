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

      <!-- Right Column: Borderless Blend & Glassmorphic Hero Visual -->
      <div class="lg:col-span-5 flex flex-col items-center justify-center relative select-none">
        
        <!-- Ambient Glowing Aura (Behind Cutout, Soft Radial Studio Lighting) -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/25 to-indigo-600/20 rounded-full blur-[90px] pointer-events-none -z-10"></div>
        <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] bg-cyan-400/20 rounded-full blur-[65px] pointer-events-none -z-10"></div>

        <!-- The Portrait Cutout - 100% Borderless, Floating Directly on Canvas with Soft Gradient Fade -->
        <div class="relative w-full max-w-[340px] sm:max-w-[390px] lg:max-w-[420px] flex justify-center group">
          <img
            :src="p.avatar"
            :alt="p.name"
            class="relative z-10 w-full h-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            style="mask-image: linear-gradient(to bottom, black 72%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 72%, transparent 100%);"
          />
        </div>

        <!-- Frosted Glassmorphism Badge (Cleanly Positioned Beneath the Fade with ZERO Body Overlap) -->
        <div class="relative z-20 mt-2 w-full max-w-[320px] sm:max-w-[360px] rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10 p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex items-center justify-between hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all duration-300">
          <div class="flex items-center gap-3">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <div>
              <div class="text-xs font-bold text-white font-mono leading-tight">
                Full Stack Developer
              </div>
              <div class="text-[11px] text-slate-400 font-mono">
                visu.ai • Geometriccae
              </div>
            </div>
          </div>
          <div class="px-2.5 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono font-bold text-xs tracking-wide">
            2+ Yrs Exp
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
