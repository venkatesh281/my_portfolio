<script setup>
import { portfolioData } from '../data/portfolioData'

const { about, stats } = portfolioData
// Use only the 3 real stats from portfolioData.stats, dropping the 4th
const realStats = stats.slice(0, 3)
</script>

<template>
  <section id="about" class="py-24 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto bg-[#f6f4ee] text-[#121316]">
    <div class="w-full h-[1px] bg-[rgba(18,19,22,0.09)] mb-16"></div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      
      <!-- Left Column: Section Title & Mission Statement -->
      <div class="lg:col-span-5 space-y-6">
        <div class="text-xs font-mono font-semibold tracking-widest text-[#0038ff] uppercase flex items-center gap-2">
          <span class="w-2 h-[1px] bg-[#0038ff]"></span>
          <span>/01 About Venkateshwaran</span>
        </div>

        <h2 class="font-serif font-bold text-3xl sm:text-4xl text-[#121316] tracking-tight leading-snug">
          Architecting resilient backends, empowering developers.
        </h2>

        <p class="text-xs font-mono text-[#525866] leading-relaxed">
          Over 2 years of commercial software engineering in Chennai, specializing in asynchronous message queues, high-throughput microservices, and practical engineering education.
        </p>

        <!-- 3 Concrete Real Metrics Row (Type-Only with Hairlines, Zero Cards) -->
        <div class="pt-6 border-t border-[rgba(18,19,22,0.09)] space-y-4">
          <div
            v-for="(stat, idx) in realStats"
            :key="stat.label"
            class="flex items-baseline justify-between py-2 border-b border-[rgba(18,19,22,0.06)]"
          >
            <div>
              <span class="font-sans font-semibold text-xs text-[#121316]">{{ stat.label }}</span>
              <span class="block text-[11px] font-mono text-[#666d7e]">{{ stat.detail }}</span>
            </div>
            <div class="font-mono font-bold text-2xl text-[#0038ff] tabular-nums pl-4">
              {{ stat.value }}
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Narrative & 4 Architectural Principles (Hairline List, Zero Cards) -->
      <div class="lg:col-span-7 space-y-10">
        
        <!-- Verbatim Repository Summary -->
        <p class="text-base sm:text-lg text-[#525866] leading-relaxed font-sans font-normal">
          {{ about.summary }}
        </p>

        <!-- 4 Architectural Principles as a Numbered Hairline List (Zero Cards, Zero Dark Classes) -->
        <div class="space-y-0 border-t border-[rgba(18,19,22,0.09)]">
          <div
            v-for="(item, idx) in about.philosophy"
            :key="item.title"
            class="py-6 border-b border-[rgba(18,19,22,0.09)] transition-colors"
          >
            <div class="grid grid-cols-1 sm:grid-cols-12 gap-3 items-baseline">
              <div class="sm:col-span-2 text-xs font-mono font-semibold text-[#0038ff]">
                0{{ idx + 1 }} //
              </div>
              <div class="sm:col-span-10 space-y-1.5">
                <h3 class="font-serif font-bold text-lg text-[#121316]">
                  {{ item.title }}
                </h3>
                <p class="text-xs sm:text-sm text-[#525866] leading-relaxed font-sans">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>