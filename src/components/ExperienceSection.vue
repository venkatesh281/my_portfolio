<script setup>
import { portfolioData } from '../data/portfolioData'
const { experience } = portfolioData
</script>

<template>
  <section id="experience" class="py-28 px-6 md:px-10 max-w-[1440px] mx-auto">
    <hr class="section-divider mb-16 fade-in" />
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div class="lg:col-span-3 fade-in">
        <div class="eyebrow">/04 Work History</div>
        <div class="w-8 h-px bg-[#c8ff00] mt-6"></div>
      </div>
      <div class="lg:col-span-9 space-y-0">
        <div v-for="(exp, idx) in experience" :key="exp.company"
          class="timeline-row group border-t border-white/[0.06] py-10 hover:border-[#c8ff00]/20 transition-colors duration-300 fade-in">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div class="md:col-span-2 flex items-center gap-3">
              <div class="timeline-dot"></div>
              <span class="font-mono text-xs text-[#6b6b6b]">0{{ idx + 1 }}</span>
            </div>
            <div class="md:col-span-3 space-y-1">
              <div class="font-display font-bold text-sm text-[#f0ece3] group-hover:text-[#c8ff00] transition-colors">{{ exp.company }}</div>
              <div class="font-mono text-xs text-[#6b6b6b]">{{ exp.period }}</div>
            </div>
            <div class="md:col-span-5 space-y-3">
              <div class="text-sm font-semibold text-[#f0ece3]/80">{{ exp.role }}</div>
              <ul class="space-y-1.5">
                <li v-for="hl in exp.highlights.slice(0,3)" :key="hl" class="text-xs text-[#6b6b6b] leading-relaxed flex gap-2">
                  <span class="text-[#c8ff00] mt-0.5 shrink-0">↳</span>
                  <span>{{ hl }}</span>
                </li>
              </ul>
            </div>
            <div class="md:col-span-2 flex flex-wrap gap-1 justify-start md:justify-end">
              <span v-for="t in exp.technologies.slice(0,4)" :key="t"
                class="text-[10px] font-mono text-[#6b6b6b] border border-white/[0.06] px-2 py-0.5">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
