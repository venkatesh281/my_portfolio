<script setup>
import { portfolioData } from '../data/portfolioData'
import { 
  ArrowUpRight, 
  Download, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Sparkles, 
  CheckCircle2,
  ExternalLink,
  MessageSquare
} from 'lucide-vue-next'

const p = portfolioData.personal

const copyEmail = () => {
  navigator.clipboard.writeText(p.email)
  alert('Email copied to clipboard: ' + p.email)
}
</script>

<template>
  <section id="hero" class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-ambient-glow">
    <!-- Glow Gradients -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute top-1/3 right-10 w-72 h-72 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <!-- Left Column: Bio & Value Proposition -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          <!-- Status Pill -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 shadow-inner">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="font-medium">{{ p.statusBadge }}</span>
            <span class="text-slate-600">•</span>
            <span class="text-slate-400 flex items-center gap-1">
              <MapPin class="w-3 h-3 text-brand-400" /> {{ p.location }}
            </span>
          </div>

          <!-- Headline -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Hi, I'm <span class="text-gradient">{{ p.name }}</span>
            <br />
            <span class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-300">
              Full Stack Developer & Technical Mentor
            </span>
          </h1>

          <!-- Tagline -->
          <p class="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Specializing in high-performance backend APIs (<span class="text-slate-200 font-semibold">Python / Django</span> & <span class="text-slate-200 font-semibold">PHP / Laravel</span>), scalable background task pipelines (<span class="text-slate-200 font-semibold">Celery + RabbitMQ + Redis</span>), and responsive frontend dashboards with <span class="text-slate-200 font-semibold">Vue.js 3</span>.
          </p>

          <!-- Core Value Badges -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs">
            <span class="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 flex items-center gap-1.5">
              <CheckCircle2 class="w-3.5 h-3.5 text-brand-400" /> Asynchronous Architecture
            </span>
            <span class="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 flex items-center gap-1.5">
              <CheckCircle2 class="w-3.5 h-3.5 text-accent-cyan" /> 85+ Students Mentored
            </span>
            <span class="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 flex items-center gap-1.5">
              <CheckCircle2 class="w-3.5 h-3.5 text-accent-emerald" /> 200+ HackerRank Solved
            </span>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#projects"
              class="px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Explore Projects</span>
              <ArrowUpRight class="w-4 h-4" />
            </a>

            <a
              href="#mentorship"
              class="px-6 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex items-center gap-2"
            >
              <Sparkles class="w-4 h-4 text-accent-cyan" />
              <span>Mentorship Journey</span>
            </a>

            <a
              :href="p.whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-3 rounded-xl font-semibold text-sm text-emerald-400 bg-emerald-950/30 hover:bg-emerald-900/40 border border-emerald-800/40 transition-all duration-200 flex items-center gap-2"
            >
              <MessageSquare class="w-4 h-4" />
              <span>WhatsApp Me</span>
            </a>
          </div>

          <!-- Social Quick Links -->
          <div class="flex items-center justify-center lg:justify-start gap-3 pt-3 text-slate-400">
            <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Connect:</span>
            <a
              :href="p.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              class="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-300 hover:text-brand-400 hover:border-brand-500/50 hover:bg-slate-800 transition-all"
            >
              <Linkedin class="w-4 h-4" />
            </a>
            <a
              :href="p.github"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              class="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-300 hover:text-brand-400 hover:border-brand-500/50 hover:bg-slate-800 transition-all"
            >
              <Github class="w-4 h-4" />
            </a>
            <button
              @click="copyEmail"
              title="Click to copy email"
              class="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-300 hover:text-brand-400 hover:border-brand-500/50 hover:bg-slate-800 transition-all"
            >
              <Mail class="w-4 h-4" />
            </button>
          </div>
        </div>

        <!-- Right Column: Profile Visual Card -->
        <div class="lg:col-span-5 flex justify-center">
          <div class="relative group">
            
            <!-- Outer Glow Rings -->
            <div class="absolute -inset-1.5 bg-gradient-to-tr from-brand-600 via-indigo-500 to-accent-cyan rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>
            
            <!-- Card Wrapper -->
            <div class="relative rounded-3xl bg-slate-900 border border-slate-800 p-3 shadow-2xl">
              <!-- Portrait Image -->
              <div class="overflow-hidden rounded-2xl aspect-[4/5] max-w-xs sm:max-w-sm">
                <img
                  :src="p.avatar"
                  :alt="p.name"
                  class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <!-- Floating Experience Pill -->
              <div class="absolute -bottom-4 -left-4 glass-panel rounded-2xl p-3 border border-slate-700/80 shadow-2xl flex items-center gap-3 animate-float">
                <div class="w-10 h-10 rounded-xl bg-brand-500/20 border border-brand-500/40 flex items-center justify-center text-brand-400 font-extrabold text-sm">
                  2+
                </div>
                <div>
                  <div class="text-xs font-bold text-white">Years Experience</div>
                  <div class="text-[10px] text-slate-400">Full Stack Engineering</div>
                </div>
              </div>

              <!-- Floating Mentorship Pill -->
              <div class="absolute -top-3 -right-3 glass-panel rounded-2xl p-2.5 border border-slate-700/80 shadow-2xl flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-accent-cyan font-extrabold text-xs">
                  85+
                </div>
                <div>
                  <div class="text-[11px] font-bold text-white">Trained Interns</div>
                  <div class="text-[9px] text-slate-400">Digisailor & GES Partner</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>
