<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { portfolioData } from '../data/portfolioData'

const p = portfolioData.personal

onMounted(() => {
  gsap.fromTo('.hero-word', { y: '110%', opacity: 0 },
    { y: '0%', opacity: 1, duration: 1.2, ease: 'expo.out', stagger: 0.08, delay: 0.1 })
  gsap.fromTo('.hero-sub', { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, ease: 'expo.out', stagger: 0.07, delay: 0.9 })
  gsap.fromTo('.hero-actions', { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1, ease: 'expo.out', delay: 1.15 })
  gsap.fromTo('.hero-photo-wrap', { opacity: 0, scale: 0.95, x: 40 },
    { opacity: 1, scale: 1, x: 0, duration: 1.4, ease: 'expo.out', delay: 0.4 })
  gsap.fromTo('.hero-floats > *', { opacity: 0, y: 12 },
    { opacity: 1, y: 0, duration: 1, ease: 'expo.out', stagger: 0.12, delay: 1.3 })
})
</script>

<template>
  <section class="relative min-h-screen flex flex-col justify-end pb-16 pt-32 px-6 md:px-10 overflow-hidden">
    <!-- Status bar top -->
    <div class="absolute top-28 left-6 md:left-10 flex items-center gap-2 z-10 hero-sub">
      <span class="w-1.5 h-1.5 rounded-full bg-[#c8ff00] animate-pulse"></span>
      <span class="eyebrow">Available for opportunities</span>
      <span class="text-[#2a2a2a] mx-1">·</span>
      <span class="eyebrow">Chennai, India</span>
    </div>
    <div class="absolute top-28 right-6 md:right-10 text-right z-10 hero-sub">
      <div class="eyebrow">Full Stack Developer</div>
      <div class="eyebrow">2024 — Present</div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 items-end gap-8 max-w-[1440px] mx-auto w-full">
      <!-- Left: Title -->
      <div class="lg:col-span-7 space-y-6 pb-4">
        <div class="hero-title">
          <div class="reveal-wrap"><span class="inner hero-word block">VENKAT</span></div>
          <div class="reveal-wrap"><span class="inner hero-word block">ESHWARAN<span class="acid">.</span></span></div>
        </div>
        <div class="flex flex-wrap items-center gap-3 hero-sub">
          <span class="eyebrow">/01</span>
          <span class="eyebrow text-[#f0ece3]/60">Full Stack & Async Systems Engineer</span>
          <span class="mentor-badge">
            <svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4"/></svg>
            85+ Students Mentored
          </span>
        </div>
        <p class="text-[#6b6b6b] text-sm leading-relaxed max-w-sm hero-sub">
          Architecting high-throughput backend APIs, Celery + RabbitMQ queue pipelines, and responsive Vue.js 3 frontends — with a parallel passion for training the next generation of engineers.
        </p>
        <div class="flex flex-wrap items-center gap-3 hero-actions">
          <button class="btn-pill solid text-sm" data-hover onclick="document.querySelector('#projects').scrollIntoView({behavior:'smooth'})">
            <span>View Work</span>
            <svg class="w-3 h-3" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </button>
          <a :href="p.whatsapp" target="_blank" rel="noopener noreferrer" class="btn-pill text-sm" data-hover>
            <span>WhatsApp Me</span>
          </a>
          <a :href="p.linkedin" target="_blank" rel="noopener noreferrer" class="btn-pill text-sm" data-hover>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <!-- Right: Photo -->
      <div class="lg:col-span-5 flex items-end justify-center lg:justify-end">
        <div class="hero-photo-wrap relative">
          <div class="relative w-[280px] sm:w-[360px] h-[380px] sm:h-[460px] overflow-hidden">
            <div class="absolute inset-0 border border-white/[0.08] z-10 pointer-events-none"></div>
            <img :src="p.avatar" :alt="p.name"
              class="w-full h-full object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-700 scale-[1.02] hover:scale-100" />
            <div class="absolute inset-0 mix-blend-overlay opacity-30"
              style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E'); background-size: 120px;">
            </div>
          </div>
          <div class="hero-floats absolute -bottom-6 -left-8 flex flex-col gap-2">
            <div class="flex items-center gap-2 bg-[#111] border border-white/[0.08] px-3 py-2 text-xs font-mono backdrop-blur">
              <span class="text-[#c8ff00] font-bold">2+</span>
              <span class="text-[#6b6b6b]">yrs engineering</span>
            </div>
            <div class="flex items-center gap-2 bg-[#111] border border-white/[0.08] px-3 py-2 text-xs font-mono backdrop-blur">
              <span class="text-[#c8ff00] font-bold">200+</span>
              <span class="text-[#6b6b6b]">problems solved</span>
            </div>
          </div>
          <div class="absolute -top-3 right-0 flex items-center gap-1.5 hero-floats">
            <span class="eyebrow">Digisailor × GES</span>
            <span class="w-1 h-1 rounded-full bg-[#c8ff00]"></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll cue -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hero-sub opacity-40">
      <div class="w-px h-10 bg-gradient-to-b from-[#f0ece3] to-transparent animate-bounce"></div>
      <span class="eyebrow">scroll</span>
    </div>
  </section>
</template>
