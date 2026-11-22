<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { portfolioData } from '../data/portfolioData'

gsap.registerPlugin(ScrollTrigger)

const { education, problemSolving } = portfolioData
const sectionRef = ref(null)
let ctx = null

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion || !sectionRef.value) return

  ctx = gsap.context(() => {
    gsap.fromTo(
      '.edu-card',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    )
  }, sectionRef.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <section
    id="education"
    ref="sectionRef"
    class="py-14 sm:py-16 md:py-20 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto bg-[#f6f4ee] text-[#121316] select-text"
  >
    <!-- Section Top Rule -->
    <div class="w-full h-[1px] bg-[rgba(18,19,22,0.09)] mb-12"></div>

    <!-- Section Header (Editorial Style) -->
    <div class="space-y-3.5 max-w-3xl mb-14">
      <div class="text-xs font-mono font-semibold tracking-widest text-[#0038ff] uppercase flex items-center gap-2">
        <span class="w-2 h-[1px] bg-[#0038ff]"></span>
        <span>/06 Academic Foundations &amp; Algorithmic Verification</span>
      </div>

      <h2 class="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#121316] tracking-tight leading-tight">
        Credentials &amp; Problem Solving.
        <span class="block text-2xl sm:text-3xl font-normal text-[#525866] italic pt-1">
          Formal computer science degrees &amp; 200+ verified algorithms.
        </span>
      </h2>

      <p class="text-sm sm:text-base text-[#525866] font-sans leading-relaxed pt-1">
        Rigorous academic grounding in computer science principles coupled with disciplined algorithmic problem solving in Java and Python.
      </p>
    </div>

    <!-- Dual Credential Plaque Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      
      <!-- Left Column: Problem Solving Plaque -->
      <div class="edu-card lg:col-span-6 bg-white border border-[rgba(18,19,22,0.1)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-[0_2px_8px_rgba(18,19,22,0.02)]">
        <div>
          <div class="flex items-center justify-between pb-3 border-b border-[rgba(18,19,22,0.08)]">
            <span class="text-xs font-mono font-bold uppercase tracking-wider text-[#0038ff]">
              Algorithmic Problem Solving
            </span>
            <span class="font-mono text-[11px] px-2.5 py-0.5 rounded bg-[rgba(0,56,255,0.06)] border border-[rgba(0,56,255,0.15)] text-[#0038ff] font-semibold">
              HackerRank Verified
            </span>
          </div>

          <div class="pt-5 pb-4">
            <div class="font-serif font-bold text-4xl sm:text-5xl text-[#121316] tracking-tight tabular-nums">
              200+
            </div>
            <p class="font-sans font-bold text-base text-[#121316] mt-1">
              {{ problemSolving.badge }}
            </p>
            <p class="font-mono text-xs text-[#525866] mt-0.5">
              Implemented &amp; tested across {{ problemSolving.languages.join(' & ') }}
            </p>
          </div>

          <!-- Verified Topics Checklist -->
          <div class="space-y-2.5 pt-2">
            <div
              v-for="topic in problemSolving.topics"
              :key="topic"
              class="flex items-start gap-2.5 text-xs font-sans text-[#121316] leading-relaxed"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-[#0038ff] shrink-0 mt-2"></span>
              <span>{{ topic }}</span>
            </div>
          </div>
        </div>

        <div class="pt-4 border-t border-[rgba(18,19,22,0.07)] text-[11px] font-mono text-[#666d7e]">
          Demonstrated mastery in space/time complexity analysis and memory optimization.
        </div>
      </div>

      <!-- Right Column: Formal Academic Degrees Plaque -->
      <div class="edu-card lg:col-span-6 bg-white border border-[rgba(18,19,22,0.1)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-[0_2px_8px_rgba(18,19,22,0.02)]">
        <div>
          <div class="flex items-center justify-between pb-3 border-b border-[rgba(18,19,22,0.08)]">
            <span class="text-xs font-mono font-bold uppercase tracking-wider text-[#0038ff]">
              Academic Background
            </span>
            <span class="font-mono text-[11px] text-[#525866]">
              2 Formal Degrees
            </span>
          </div>

          <div class="space-y-6 pt-5">
            <div
              v-for="edu in education"
              :key="edu.degree"
              class="pb-5 border-b border-[rgba(18,19,22,0.06)] last:border-b-0 space-y-1.5"
            >
              <div class="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span class="text-[#0038ff] font-bold">{{ edu.period }}</span>
                <span class="px-2 py-0.5 rounded bg-[rgba(18,19,22,0.05)] border border-[rgba(18,19,22,0.1)] text-[#121316] font-semibold">
                  Score: {{ edu.score }}
                </span>
              </div>
              <h3 class="font-serif font-bold text-lg text-[#121316]">
                {{ edu.degree }}
              </h3>
              <p class="font-sans text-xs text-[#525866]">
                {{ edu.institution }} • {{ edu.location }}
              </p>
            </div>
          </div>
        </div>

        <div class="pt-4 border-t border-[rgba(18,19,22,0.07)] text-[11px] font-mono text-[#666d7e]">
          Theoretical rigor in Relational DBMS, Distributed Computing, and Software Architecture.
        </div>
      </div>

    </div>

  </section>
</template>
