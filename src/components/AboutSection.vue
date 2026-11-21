<script setup>
import { portfolioData } from '../data/portfolioData'
const { about } = portfolioData
</script>

<template>
  <section id="about" class="py-28 px-6 md:px-10 max-w-[1440px] mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      <div class="lg:col-span-3 space-y-6 fade-in">
        <div class="eyebrow">/02 About</div>
        <div class="w-8 h-px bg-[#c8ff00]"></div>
        <div class="eyebrow text-[#f0ece3]/30 leading-loose">A developer who codes<br>and also teaches.</div>
      </div>
      <div class="lg:col-span-9 space-y-16">
        <div class="reveal-wrap">
          <p class="inner font-display font-bold text-2xl sm:text-3xl md:text-4xl leading-[1.2] text-[#f0ece3] tracking-tight">
            I build backend systems that scale, front-ends that feel alive, and train the engineers who come next.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 stagger-children">
          <div class="space-y-4">
            <p class="text-sm text-[#6b6b6b] leading-relaxed">{{ about.summary }}</p>
          </div>
          <div class="space-y-5">
            <div v-for="item in about.philosophy" :key="item.title"
              class="border-b border-white/[0.05] pb-4 group">
              <div class="flex items-center justify-between mb-1">
                <span class="text-sm font-display font-semibold text-[#f0ece3] group-hover:text-[#c8ff00] transition-colors">{{ item.title }}</span>
                <span class="text-[#c8ff00] text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
              <p class="text-xs text-[#6b6b6b] leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 stagger-children">
          <div v-for="stat in portfolioData.stats" :key="stat.label"
            class="border border-white/[0.06] p-6 hover:border-[#c8ff00]/30 transition-colors duration-300">
            <div class="font-display font-bold text-4xl text-[#c8ff00] leading-none mb-2">{{ stat.value }}</div>
            <div class="text-xs text-[#6b6b6b] leading-snug">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { portfolioData } from '../data/portfolioData'
export default { setup() { return { portfolioData } } }
</script>
