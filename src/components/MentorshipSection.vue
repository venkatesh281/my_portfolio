<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { portfolioData } from '../data/portfolioData'

gsap.registerPlugin(ScrollTrigger)

const emit = defineEmits(['openPhoto'])
const m = portfolioData.mentorship
const sectionRef = ref(null)
let ctx = null

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion || !sectionRef.value) return

  ctx = gsap.context(() => {
    gsap.fromTo(
      '.mentorship-fade',
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power2.out',
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
    id="mentorship"
    ref="sectionRef"
    class="py-14 sm:py-16 md:py-20 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto bg-[#f6f4ee] text-[#121316] select-text"
  >
    <!-- Section Top Rule -->
    <div class="w-full h-[1px] bg-[rgba(18,19,22,0.09)] mb-12"></div>

    <!-- Section Header (Editorial Style) -->
    <div class="space-y-3.5 max-w-3xl mb-14">
      <div class="text-xs font-mono font-semibold tracking-widest text-[#0038ff] uppercase flex items-center gap-2">
        <span class="w-2 h-[1px] bg-[#0038ff]"></span>
        <span>/04 Mentorship &amp; Engineering Education</span>
      </div>

      <h2 class="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#121316] tracking-tight leading-tight">
        Empowering 85+ Students.
        <span class="block text-2xl sm:text-3xl font-normal text-[#525866] italic pt-1">
          Structured full-stack training with Geometriccae &amp; Digisailor.
        </span>
      </h2>

      <p class="text-sm sm:text-base text-[#525866] font-sans leading-relaxed pt-1">
        {{ m.description }}
      </p>
    </div>

    <!-- Featured Guest Speaker Honor & Curriculum -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
      
      <!-- Left: Featured Certificate Card (Award Plaque) -->
      <article
        @click="$emit('openPhoto', 0)"
        class="mentorship-fade lg:col-span-5 bg-white border border-[rgba(18,19,22,0.1)] rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(18,19,22,0.04)] cursor-pointer group flex flex-col justify-between transition-all duration-200 hover:border-[#0038ff]/60"
        tabindex="0"
        @keydown.enter="$emit('openPhoto', 0)"
        aria-label="View Certificate of Appreciation in Lightbox"
      >
        <div class="relative overflow-hidden aspect-[16/11] bg-[#f0eee6]">
          <img
            :src="m.gallery[0].src"
            :alt="m.gallery[0].caption"
            width="640"
            height="440"
            class="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[rgba(18,19,22,0.4)] via-transparent to-transparent"></div>
          <div class="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur border border-[rgba(18,19,22,0.12)] text-[11px] font-mono font-bold text-[#0038ff] flex items-center gap-1.5 shadow-sm">
            <span>Expand Plaque</span>
            <span>↗</span>
          </div>
        </div>

        <div class="p-6 space-y-2 bg-white border-t border-[rgba(18,19,22,0.07)]">
          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#0038ff]"></span>
            <span class="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0038ff]">
              Award &amp; Departmental Honor
            </span>
          </div>
          <h3 class="font-serif font-bold text-xl text-[#121316]">
            Certificate of Appreciation
          </h3>
          <p class="text-xs text-[#525866] font-sans leading-relaxed">
            {{ m.guestSpeaker.recognition }}
          </p>
        </div>
      </article>

      <!-- Right: Seminar Focus & Curriculum Delivered -->
      <div class="mentorship-fade lg:col-span-7 bg-[#fcfbf8] border border-[rgba(18,19,22,0.09)] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
        <div>
          <span class="text-xs font-mono font-bold uppercase tracking-wider text-[#0038ff] block">
            Invited Guest Lecture &amp; Seminar
          </span>
          <h3 class="font-serif font-bold text-2xl text-[#121316] mt-1">
            "{{ m.guestSpeaker.topic }}"
          </h3>
          <p class="text-xs font-mono text-[#525866] mt-1">
            {{ m.guestSpeaker.department }}
          </p>
        </div>

        <!-- Curriculum Breakdown -->
        <div class="space-y-3">
          <span class="font-mono text-[10px] font-bold uppercase tracking-wider text-[#666d7e] block">
            Core Full-Stack Curriculum Delivered
          </span>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div
              v-for="(topic, idx) in m.topicsTaught"
              :key="topic.name"
              class="p-3.5 rounded-xl bg-white border border-[rgba(18,19,22,0.08)] space-y-1 shadow-[0_1px_3px_rgba(18,19,22,0.02)]"
            >
              <div class="text-xs font-bold font-sans text-[#121316] flex items-center gap-2">
                <span class="text-[#0038ff] font-mono font-bold">0{{ idx + 1 }}.</span>
                <span>{{ topic.name }}</span>
              </div>
              <p class="text-[11px] font-sans text-[#525866] pl-5 leading-snug">
                {{ topic.detail }}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Asymmetric On-Campus Training Lookbook Gallery -->
    <div class="space-y-6">
      <div class="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[rgba(18,19,22,0.12)]">
        <h3 class="font-serif font-bold text-xl sm:text-2xl text-[#121316]">
          On-Campus Training &amp; Live Coding Labs
        </h3>
        <span class="font-mono text-xs text-[#525866]">
          8 Verified Workshop Sessions • Click to inspect in lightbox
        </span>
      </div>

      <!-- 8-Photo Asymmetric Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <article
          v-for="(photo, idx) in m.gallery"
          :key="photo.src"
          @click="$emit('openPhoto', idx)"
          class="mentorship-fade bg-white border border-[rgba(18,19,22,0.09)] rounded-xl overflow-hidden shadow-[0_2px_6px_rgba(18,19,22,0.02)] cursor-pointer group flex flex-col justify-between transition-all duration-200 hover:border-[#0038ff]/60"
          tabindex="0"
          @keydown.enter="$emit('openPhoto', idx)"
          :aria-label="`Open photo: ${photo.caption}`"
        >
          <!-- Image Container with Fixed Aspect Ratio preventing CLS -->
          <div class="aspect-[4/3] overflow-hidden bg-[#ece9e0] relative">
            <img
              :src="photo.src"
              :alt="photo.caption"
              width="400"
              height="300"
              class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span class="w-8 h-8 rounded-full bg-white text-[#0038ff] font-bold text-xs flex items-center justify-center shadow-md">
                ↗
              </span>
            </div>
          </div>

          <!-- Caption & Meta -->
          <div class="p-3.5 space-y-1">
            <span class="text-[10px] font-mono font-bold text-[#0038ff] uppercase tracking-wider block">
              {{ photo.tag }}
            </span>
            <p class="text-xs font-sans text-[#121316] line-clamp-2 leading-snug">
              {{ photo.caption }}
            </p>
          </div>
        </article>
      </div>
    </div>

  </section>
</template>
