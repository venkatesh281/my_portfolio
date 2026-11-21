<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { portfolioData } from '../data/portfolioData'
gsap.registerPlugin(ScrollTrigger)

const { projects, education } = portfolioData

onMounted(() => {
  const track = document.getElementById('projects-track')
  if (!track || window.innerWidth < 768) return
  const pinSection = document.getElementById('projects-pin')
  const totalWidth = track.scrollWidth - window.innerWidth
  gsap.to(track, {
    x: -totalWidth, ease: 'none',
    scrollTrigger: {
      trigger: pinSection, start: 'top top',
      end: `+=${totalWidth}`, pin: true, scrub: 1.2,
      anticipatePin: 1, invalidateOnRefresh: true,
    }
  })
})
</script>

<template>
  <section id="projects" class="py-28">
    <div class="px-6 md:px-10 max-w-[1440px] mx-auto mb-16">
      <hr class="section-divider mb-16 fade-in" />
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div class="lg:col-span-3 fade-in">
          <div class="eyebrow">/06 Projects</div>
          <div class="w-8 h-px bg-[#c8ff00] mt-6"></div>
        </div>
        <div class="lg:col-span-6">
          <div class="reveal-wrap">
            <p class="inner font-display font-bold text-3xl md:text-4xl leading-tight tracking-tight text-[#f0ece3]">Selected Enterprise Work</p>
          </div>
          <p class="text-sm text-[#6b6b6b] mt-4 leading-relaxed fade-in">Production systems engineered for real clients. Client confidential — no live demos, but architecture runs in the wild.</p>
        </div>
      </div>
    </div>

    <!-- Desktop horizontal scroll -->
    <div id="projects-pin" class="hidden md:block h-screen overflow-hidden">
      <div id="projects-track" class="flex gap-5 pl-10 pr-10 h-full items-center will-change-transform">
        <div v-for="(proj, idx) in projects" :key="proj.title"
          class="project-card min-w-[460px] max-w-[460px] h-[72vh] flex flex-col justify-between p-8 border border-white/[0.06] hover:border-[#c8ff00]/20 transition-all duration-500 group shrink-0"
          data-hover>
          <div class="flex items-center justify-between">
            <span class="project-index">0{{ idx + 1 }}</span>
            <span class="text-[10px] font-mono text-[#6b6b6b] border border-white/[0.06] px-2 py-0.5">{{ proj.category }}</span>
          </div>
          <div class="space-y-3 py-6">
            <h3 class="font-display font-bold text-3xl text-[#f0ece3] group-hover:text-[#c8ff00] transition-colors leading-tight">{{ proj.title }}</h3>
            <p class="text-xs text-[#6b6b6b] leading-relaxed">{{ proj.description }}</p>
          </div>
          <div class="space-y-2 border-t border-white/[0.05] pt-5">
            <div v-for="hl in proj.highlights" :key="hl" class="flex items-start gap-2 text-xs text-[#6b6b6b]">
              <span class="text-[#c8ff00] shrink-0 mt-0.5">↳</span><span>{{ hl }}</span>
            </div>
          </div>
          <div class="flex flex-wrap gap-1.5 mt-5 border-t border-white/[0.05] pt-5">
            <span v-for="t in proj.tech.slice(0,5)" :key="t" class="text-[10px] font-mono text-[#6b6b6b] border border-white/[0.06] px-2 py-0.5">{{ t }}</span>
            <a v-if="proj.github" :href="proj.github" target="_blank" class="ml-auto text-[10px] font-mono text-[#c8ff00] hover:underline" data-hover>→ GitHub</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile vertical stack -->
    <div class="md:hidden px-6 space-y-4">
      <div v-for="(proj, idx) in projects" :key="proj.title"
        class="project-card border border-white/[0.06] p-6 space-y-4 group fade-in">
        <div class="flex items-center justify-between">
          <span class="project-index">0{{ idx + 1 }}</span>
          <span class="text-[10px] font-mono text-[#6b6b6b]">{{ proj.category }}</span>
        </div>
        <h3 class="font-display font-bold text-xl text-[#f0ece3]">{{ proj.title }}</h3>
        <p class="text-xs text-[#6b6b6b] leading-relaxed">{{ proj.description }}</p>
        <div class="flex flex-wrap gap-1.5">
          <span v-for="t in proj.tech.slice(0,4)" :key="t" class="text-[10px] font-mono text-[#6b6b6b] border border-white/[0.06] px-2 py-0.5">{{ t }}</span>
        </div>
      </div>
    </div>

    <!-- Education + Problem Solving -->
    <div class="px-6 md:px-10 max-w-[1440px] mx-auto mt-24">
      <hr class="section-divider mb-16 fade-in" />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 stagger-children">
        <div class="border border-white/[0.06] p-8 hover:border-[#c8ff00]/20 transition-colors duration-300">
          <div class="eyebrow mb-4">HackerRank</div>
          <div class="font-display font-bold text-5xl text-[#c8ff00] leading-none mb-2">200+</div>
          <div class="text-sm text-[#f0ece3]/70 mb-4">Algorithm & Data Structure problems solved</div>
          <div class="font-mono text-xs text-[#6b6b6b]">Java · Python · DSA · OOP · SOLID</div>
        </div>
        <div class="border border-white/[0.06] p-8 hover:border-[#c8ff00]/20 transition-colors duration-300 space-y-5">
          <div class="eyebrow mb-4">Education</div>
          <div v-for="edu in education" :key="edu.degree" class="border-t border-white/[0.05] pt-4">
            <div class="text-sm font-semibold text-[#f0ece3]">{{ edu.degree }}</div>
            <div class="text-xs text-[#6b6b6b] mt-1">{{ edu.institution }} · {{ edu.period }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
