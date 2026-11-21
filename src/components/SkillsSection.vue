<script setup>
import { portfolioData } from '../data/portfolioData'
const { skills } = portfolioData
</script>

<template>
  <section id="skills" class="py-28 px-6 md:px-10 max-w-[1440px] mx-auto">
    <hr class="section-divider mb-16 fade-in" />
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div class="lg:col-span-3 fade-in">
        <div class="eyebrow">/03 Technical Stack</div>
        <div class="w-8 h-px bg-[#c8ff00] mt-6 mb-8"></div>
        <p class="text-xs text-[#6b6b6b] leading-relaxed">Five years of building<br>production systems —<br>every tool listed is battle-tested.</p>
      </div>
      <div class="lg:col-span-9 space-y-10">
        <div v-for="cat in skills.categories" :key="cat.name" class="fade-in">
          <div class="flex items-center gap-4 mb-4">
            <span class="eyebrow text-[#f0ece3]/50">{{ cat.name }}</span>
            <div class="flex-1 h-px bg-white/[0.05]"></div>
          </div>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in cat.skills" :key="skill.name" class="skill-tag" data-hover>{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
