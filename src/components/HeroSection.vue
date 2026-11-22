<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { portfolioData } from '../data/portfolioData'
import HeroLanyard from './HeroLanyard.vue'

const p = portfolioData.personal
const heroContainer = ref(null)
let ctx = null

const scrollTo = (id) => {
  const el = document.querySelector(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  // GSAP Entrance Choreography (content is visible by default in CSS if JS fails)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!prefersReducedMotion && heroContainer.value) {
    ctx = gsap.context(() => {
      gsap.from('.hero-reveal', {
        y: 18,
        autoAlpha: 0,
        stagger: 0.06,
        duration: 0.75,
        ease: 'power2.out',
        clearProps: 'all',
      })
    }, heroContainer.value)
  }
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <section
    ref="heroContainer"
    class="relative min-h-[92vh] flex flex-col justify-center pt-24 sm:pt-28 pb-16 px-6 md:px-12 lg:px-16 overflow-hidden bg-[#f6f4ee] text-[#121316] select-text"
  >
    <!-- Architectural Watermark Display Type (Syne, Positioned Behind Badge for 2.5D Depth) -->
    <div
      class="absolute right-0 top-1/2 -translate-y-1/2 w-full select-none pointer-events-none overflow-hidden z-0 flex justify-end pr-2 sm:pr-8 opacity-[0.042]"
      aria-hidden="true"
    >
      <span class="font-watermark font-extrabold text-[clamp(4.5rem,14vw,14rem)] tracking-tighter text-[#121316] leading-none whitespace-nowrap">
        VENKATESHWARAN
      </span>
    </div>

    <!-- Top Status Bar & Current Tenure (Plain Text with Green Dot, Zero Enclosed Pills) -->
    <div class="max-w-7xl mx-auto w-full mb-8 flex flex-wrap items-center justify-between gap-4 relative z-10 hero-reveal">
      <div class="flex items-center gap-2 text-xs font-mono text-[#525866]">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
        <span class="text-[#121316] font-medium">{{ p.statusBadge }}</span>
        <span class="text-[rgba(18,19,22,0.25)]">•</span>
        <span class="text-[#525866]">{{ p.location }}</span>
      </div>

      <div class="hidden sm:flex items-center gap-2 text-xs font-mono text-[#525866]">
        <span class="text-[#121316] font-medium">Associate Engineer @ visu.ai</span>
        <span class="text-[rgba(18,19,22,0.25)]">•</span>
        <span>Feb 2026 — Present</span>
      </div>
    </div>

    <!-- Main Editorial Hero Grid -->
    <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
      
      <!-- Left Column: Name, Value Proposition & Actions (Z-20 ensures clickable UI) -->
      <div class="lg:col-span-7 space-y-6 relative z-20">
        
        <!-- Eyebrow & Headline -->
        <div class="space-y-2 hero-reveal">
          <div class="text-xs font-mono font-semibold tracking-wider text-[#0038ff] uppercase flex items-center gap-2">
            <span class="w-2 h-[1px] bg-[#0038ff]"></span>
            <span>Full Stack Developer &amp; Systems Engineer</span>
          </div>

          <h1 class="font-serif font-bold text-[clamp(2.4rem,5.2vw,4.25rem)] text-[#121316] leading-[1.06] tracking-tight">
            Venkateshwaran.
            <span class="block text-[clamp(1.75rem,3.8vw,3rem)] font-normal text-[#525866] italic pt-1">
              Architecting async backends &amp; reactive interfaces.
            </span>
          </h1>
        </div>

        <!-- Mobile Badge: High placement directly below headline so visitors immediately see and interact with it on mobile -->
        <div class="lg:hidden w-full flex justify-center my-2 hero-reveal">
          <HeroLanyard />
        </div>

        <!-- Descriptive Paragraph -->
        <p class="hero-reveal text-base sm:text-lg text-[#525866] max-w-xl leading-relaxed font-sans font-normal">
          Engineering high-throughput backend microservices with <strong class="text-[#121316] font-semibold">Python (Django)</strong> &amp; <strong class="text-[#121316] font-semibold">PHP (Laravel)</strong>, resilient asynchronous background worker pipelines with <strong class="text-[#0038ff] font-semibold">Celery + RabbitMQ + Redis</strong>, and reactive frontends with <strong class="text-[#121316] font-semibold">Vue.js 3</strong>.
        </p>

        <!-- Typographic Stats Row (Type-only with hairlines, zero pill cards) -->
        <div class="hero-reveal flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-xs font-mono text-[#525866]">
          <span class="flex items-center gap-1.5">
            <strong class="text-[#0038ff] font-bold tabular-nums text-sm">2+</strong> Years Commercial Exp.
          </span>
          <span class="text-[rgba(18,19,22,0.2)]">|</span>
          <span class="flex items-center gap-1.5">
            <strong class="text-[#0038ff] font-bold tabular-nums text-sm">85+</strong> Students Mentored
          </span>
          <span class="text-[rgba(18,19,22,0.2)]">|</span>
          <span class="flex items-center gap-1.5">
            <strong class="text-emerald-600 font-bold tabular-nums text-sm">200+</strong> HackerRank Solved
          </span>
        </div>

        <!-- Action Row: 1 Primary Cobalt Button with Neutral Soft Shadow + Understated Text Links -->
        <div class="hero-reveal flex flex-wrap items-center gap-4 pt-2">
          <button
            @click="scrollTo('#projects')"
            class="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0038ff] hover:bg-[#002ec7] active:scale-[0.98] text-white font-mono text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-[0_4px_12px_rgba(18,19,22,0.08)] hover:shadow-[0_6px_16px_rgba(18,19,22,0.12)] cursor-pointer"
          >
            <span>Explore Selected Work</span>
            <svg class="w-3.5 h-3.5" viewBox="0 0 12 12" fill="none">
              <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </button>

          <a
            href="/resume.html"
            target="_blank"
            class="inline-flex items-center gap-1.5 px-3 py-3 text-xs sm:text-sm font-mono font-medium text-[#121316] hover:text-[#0038ff] transition-colors border-b border-[rgba(18,19,22,0.18)] hover:border-[#0038ff]"
          >
            <span>Download Resume</span>
            <span>↗</span>
          </a>

          <button
            @click="scrollTo('#mentorship')"
            class="inline-flex items-center gap-1 px-3 py-2 text-xs font-mono text-[#666d7e] hover:text-[#121316] transition-colors cursor-pointer"
          >
            <span>Mentorship Story</span>
            <span>↗</span>
          </button>
        </div>

        <!-- Direct Contact Coordinates (High Contrast Editorial Style) -->
        <div class="hero-reveal flex flex-wrap items-center gap-4 pt-3 text-xs font-mono text-[#525866]">
          <a
            :href="p.whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-emerald-600 transition-colors flex items-center gap-1"
          >
            <span>WhatsApp</span> ↗
          </a>
          <span class="text-[rgba(18,19,22,0.2)]">•</span>
          <a
            :href="p.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-[#0038ff] transition-colors flex items-center gap-1"
          >
            <span>LinkedIn</span> ↗
          </a>
          <span class="text-[rgba(18,19,22,0.2)]">•</span>
          <a
            :href="p.github"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-[#121316] transition-colors flex items-center gap-1"
          >
            <span>GitHub</span> ↗
          </a>
          <span class="text-[rgba(18,19,22,0.2)]">•</span>
          <a
            :href="'mailto:' + p.email"
            class="hover:text-[#0038ff] transition-colors font-medium text-[#121316]"
          >
            {{ p.email }}
          </a>
        </div>

      </div>

      <!-- Right Column: Desktop Lanyard Badge (Hidden on mobile where it renders above) -->
      <div class="hidden lg:flex lg:col-span-5 justify-center items-center relative z-10 w-full">
        <HeroLanyard />
      </div>

    </div>
  </section>
</template>