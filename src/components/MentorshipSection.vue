<script setup>
import { portfolioData } from '../data/portfolioData'
const emit = defineEmits(['openPhoto'])
const m = portfolioData.mentorship
</script>

<template>
  <section id="mentorship" class="py-28 px-6 md:px-10 max-w-[1440px] mx-auto">
    <hr class="section-divider mb-16 fade-in" />
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
      <div class="lg:col-span-3 fade-in">
        <div class="eyebrow">/05 Mentorship</div>
        <div class="w-8 h-px bg-[#c8ff00] mt-6"></div>
      </div>
      <div class="lg:col-span-9">
        <div class="reveal-wrap">
          <p class="inner font-display font-bold text-3xl md:text-5xl leading-tight tracking-tight text-[#f0ece3]">{{ m.headline }}</p>
        </div>
        <p class="text-sm text-[#6b6b6b] leading-relaxed mt-6 max-w-2xl fade-in">{{ m.description }}</p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
      <div class="md:col-span-5 relative overflow-hidden border border-white/[0.06] hover:border-[#c8ff00]/30 transition-all duration-500 fade-in group cursor-none" @click="$emit('openPhoto', m.gallery[0])" data-hover>
        <img :src="m.gallery[0].src" alt="Certificate" class="w-full h-72 object-cover object-top grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 scale-[1.02] group-hover:scale-100" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent flex flex-col justify-end p-6">
          <div class="mentor-badge mb-3">★ Certificate of Appreciation</div>
          <p class="text-xs text-[#f0ece3]/70 leading-relaxed">{{ m.guestSpeaker.recognition }}</p>
        </div>
      </div>
      <div class="md:col-span-7 space-y-0 stagger-children">
        <div v-for="(topic, idx) in m.topicsTaught" :key="topic.name"
          class="border-t border-white/[0.06] py-5 flex items-start gap-4 group hover:border-[#c8ff00]/20 transition-colors"
          :class="{'border-b': idx === m.topicsTaught.length - 1}">
          <span class="font-mono text-xs text-[#c8ff00] mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity">0{{ idx + 1 }}</span>
          <div>
            <div class="text-sm font-semibold text-[#f0ece3] group-hover:text-[#c8ff00] transition-colors">{{ topic.name }}</div>
            <div class="text-xs text-[#6b6b6b] mt-0.5">{{ topic.detail }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-3 fade-in">
      <div class="eyebrow mb-4">Session Gallery — Click to expand</div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div v-for="(photo, idx) in m.gallery.slice(1)" :key="idx"
          @click="$emit('openPhoto', photo)"
          class="relative overflow-hidden group cursor-none" data-hover
          :class="idx === 1 ? 'md:col-span-2' : ''">
          <div class="aspect-square overflow-hidden bg-[#111]">
            <img :src="photo.src" :alt="photo.caption"
              class="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" loading="lazy" />
          </div>
          <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
            <span class="text-[10px] font-mono text-[#c8ff00] uppercase tracking-widest">{{ photo.tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
