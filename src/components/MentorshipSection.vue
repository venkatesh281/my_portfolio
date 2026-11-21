<script setup>
import { portfolioData } from '../data/portfolioData'

const emit = defineEmits(['openPhoto'])
const m = portfolioData.mentorship
</script>

<template>
  <section id="mentorship" class="py-24 px-6 md:px-10 max-w-7xl mx-auto">
    <hr class="section-divider mb-16" />

    <!-- Section Header -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
      <div class="lg:col-span-4 space-y-4">
        <div class="eyebrow">/04 Mentorship Spotlight</div>
        <div class="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500"></div>
        <h2 class="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
          Empowering the Next Generation
        </h2>
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono">
          <span>★ 85+ Students Trained & Certified</span>
        </div>
      </div>

      <div class="lg:col-span-8 space-y-4">
        <h3 class="font-display font-bold text-xl sm:text-2xl text-white">
          {{ m.headline }}
        </h3>
        <p class="text-sm sm:text-base text-slate-300 leading-relaxed">
          {{ m.description }}
        </p>
      </div>
    </div>

    <!-- Featured Guest Lecture & Certificate -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
      
      <!-- Certificate Feature Card -->
      <div
        @click="$emit('openPhoto', m.gallery[0])"
        class="lg:col-span-5 glass-panel rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer group shadow-xl flex flex-col justify-between"
      >
        <div class="relative overflow-hidden aspect-[16/10] bg-slate-900">
          <img
            :src="m.gallery[0].src"
            :alt="m.gallery[0].caption"
            class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#0d1321] via-transparent to-transparent"></div>
          <div class="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur border border-white/[0.1] text-xs font-mono text-cyan-300 flex items-center gap-1.5">
            <span>Click to Expand</span>
            <span>↗</span>
          </div>
        </div>

        <div class="p-6 space-y-2 bg-[#0d1321]">
          <span class="text-xs font-mono font-bold text-cyan-400">Award & Honor</span>
          <h4 class="font-display font-bold text-lg text-white">
            Certificate of Appreciation
          </h4>
          <p class="text-xs text-slate-300 leading-relaxed">
            {{ m.guestSpeaker.recognition }}
          </p>
        </div>
      </div>

      <!-- Curriculum & Topics Covered -->
      <div class="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
        <div>
          <span class="text-xs font-mono uppercase tracking-wider text-cyan-400">Guest Lecture Seminar</span>
          <h4 class="font-display font-bold text-lg text-white mt-1">
            "{{ m.guestSpeaker.topic }}"
          </h4>
          <p class="text-xs font-mono text-slate-400 mt-0.5">
            {{ m.guestSpeaker.department }}
          </p>
        </div>

        <div class="space-y-3">
          <div class="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
            Full-Stack Curriculum Delivered to 85+ Students:
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div
              v-for="(topic, idx) in m.topicsTaught"
              :key="topic.name"
              class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1 hover:border-cyan-500/30 transition-colors"
            >
              <div class="text-xs font-bold text-white flex items-center gap-2">
                <span class="text-cyan-400 font-mono">0{{ idx + 1 }}.</span>
                <span>{{ topic.name }}</span>
              </div>
              <div class="text-[11px] text-slate-400 pl-5">
                {{ topic.detail }}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Photo Sessions Gallery -->
    <div class="space-y-6">
      <div class="flex items-center justify-between border-b border-slate-800 pb-3">
        <h4 class="font-display font-bold text-lg text-white">
          On-Campus Training & Live Coding Labs
        </h4>
        <span class="text-xs font-mono text-cyan-400">Click any photo for lightbox preview</span>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          v-for="(photo, idx) in m.gallery.slice(1)"
          :key="idx"
          @click="$emit('openPhoto', photo)"
          class="glass-panel rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer group shadow-md"
        >
          <div class="aspect-[4/3] overflow-hidden bg-slate-900 relative">
            <img
              :src="photo.src"
              :alt="photo.caption"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span class="p-2 rounded-full bg-cyan-500 text-black font-bold text-xs">
                ↗
              </span>
            </div>
          </div>
          <div class="p-3">
            <span class="text-[10px] font-mono font-bold text-cyan-400 block mb-0.5">
              {{ photo.tag }}
            </span>
            <p class="text-xs text-slate-300 line-clamp-2 leading-snug">
              {{ photo.caption }}
            </p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>
