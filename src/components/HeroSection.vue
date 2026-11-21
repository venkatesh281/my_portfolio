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
  <section class="relative min-h-[85vh] flex flex-col justify-center pt-28 pb-14 px-6 md:px-10 overflow-hidden">
    
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
    <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      
      <!-- Left Column: Name & Value Proposition -->
      <div class="lg:col-span-7 space-y-5">
        
        <!-- Big Name - Reduced to clean, comfortable size without "S." and fits on one line -->
        <div class="space-y-1">
          <div class="text-xs font-mono font-semibold tracking-widest uppercase text-cyan-400">
            Full Stack Developer
          </div>
          <h1 class="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight text-white leading-tight">
            Venkateshwaran<span class="text-gradient-cyan">.</span>
          </h1>
        </div>

        <!-- Tagline Summary -->
        <p class="text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed">
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
        <div class="flex flex-wrap items-center gap-3 pt-2">
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

      <!-- Right Column: Profile Portrait Card -->
      <div class="lg:col-span-5 flex justify-center lg:justify-end">
        <div class="relative group">
          
          <!-- Outer Ambient Glow Frame -->
          <div class="absolute -inset-1 bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-emerald-500/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>

          <!-- Main Portrait Card -->
          <div class="relative rounded-3xl bg-[#0d1321] border border-slate-700/80 p-3 shadow-2xl overflow-hidden">
            <div class="relative rounded-2xl overflow-hidden aspect-[4/5] w-[270px] sm:w-[320px]">
              <img
                :src="p.avatar"
                :alt="p.name"
                class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <!-- Subtle vignette gradient -->
              <div class="absolute inset-0 bg-gradient-to-t from-[#080c14]/80 via-transparent to-transparent"></div>
            </div>

            <!-- Floating Experience Pill -->
            <div class="absolute bottom-6 left-6 right-6 glass-panel rounded-xl p-3 border border-white/[0.1] shadow-xl flex items-center justify-between">
              <div>
                <div class="text-xs font-bold text-white font-mono">Full Stack Engineer</div>
                <div class="text-[11px] text-slate-400">visu.ai • Geometriccae</div>
              </div>
              <div class="px-2.5 py-1 rounded bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-mono font-bold text-xs">
                2+ Yrs
              </div>
            </div>

            <!-- Top Corner Badge -->
            <div class="absolute top-6 right-6 glass-panel rounded-full px-3 py-1 border border-white/[0.1] text-[10px] font-mono text-cyan-300 flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Digisailor Mentor</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
