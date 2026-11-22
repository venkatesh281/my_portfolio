<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { portfolioData } from '../data/portfolioData'

gsap.registerPlugin(ScrollTrigger)

const { experience } = portfolioData
const sectionRef = ref(null)
let ctx = null

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion || !sectionRef.value) return

  ctx = gsap.context(() => {
    gsap.fromTo(
      '.ledger-entry',
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
    id="experience"
    ref="sectionRef"
    class="py-14 sm:py-16 md:py-20 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto bg-[#f6f4ee] text-[#121316] select-text"
  >
    <!-- Section Top Rule -->
    <div class="w-full h-[1px] bg-[rgba(18,19,22,0.09)] mb-12"></div>

    <!-- Section Header (Editorial Style) -->
    <div class="space-y-3.5 max-w-3xl mb-14">
      <div class="text-xs font-mono font-semibold tracking-widest text-[#0038ff] uppercase flex items-center gap-2">
        <span class="w-2 h-[1px] bg-[#0038ff]"></span>
        <span>/03 Commercial Experience &amp; Track Record</span>
      </div>

      <h2 class="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#121316] tracking-tight leading-tight">
        Professional Experience.
        <span class="block text-2xl sm:text-3xl font-normal text-[#525866] italic pt-1">
          Chronological ledger of engineering impact &amp; architectures.
        </span>
      </h2>

      <p class="text-sm sm:text-base text-[#525866] font-sans leading-relaxed pt-1">
        Engineering commercial microservices, asynchronous worker systems, and data-driven dashboards across production systems.
      </p>
    </div>

    <!-- Swiss Chronological Ledger -->
    <div class="relative space-y-16 lg:space-y-20">
      <article
        v-for="(exp, idx) in experience"
        :key="exp.company"
        class="ledger-entry relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-[rgba(18,19,22,0.09)] last:border-b-0"
      >
        <!-- Left Column: Sticky Date & Company Metadata (Swiss Margin) -->
        <div class="lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-3">
          <div class="flex items-center gap-2 font-mono text-xs font-bold text-[#0038ff]">
            <span>0{{ idx + 1 }} //</span>
            <span class="uppercase tracking-wider">{{ exp.period }}</span>
          </div>

          <div>
            <h3 class="font-serif font-bold text-2xl sm:text-3xl text-[#121316] tracking-tight">
              {{ exp.company }}
            </h3>
            <div class="flex flex-wrap items-center gap-2 mt-1.5 text-xs font-sans text-[#525866]">
              <span class="font-bold text-[#121316]">{{ exp.role }}</span>
              <span class="text-[rgba(18,19,22,0.25)]">•</span>
              <span>{{ exp.location }}</span>
              <span class="text-[rgba(18,19,22,0.25)]">•</span>
              <span class="font-mono text-[11px] px-2 py-0.5 rounded bg-[rgba(18,19,22,0.04)] border border-[rgba(18,19,22,0.08)]">
                {{ exp.type }}
              </span>
            </div>
          </div>

          <p class="text-xs sm:text-sm text-[#525866] font-sans leading-relaxed pt-2">
            {{ exp.description }}
          </p>
        </div>

        <!-- Right Column: Verbatim Highlights & Technologies -->
        <div class="lg:col-span-8 space-y-6">
          <!-- Verbatim Engineering Highlights (Typographic Bullets with Hairline Indicator) -->
          <ul class="space-y-4">
            <li
              v-for="hl in exp.highlights"
              :key="hl"
              class="flex items-start gap-3.5 text-sm sm:text-base text-[#121316] leading-relaxed group"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-[#0038ff] shrink-0 mt-2.5"></span>
              <span class="font-sans text-[#121316]">
                {{ hl }}
              </span>
            </li>
          </ul>

          <!-- Production Technologies Inventory -->
          <div class="pt-6 border-t border-[rgba(18,19,22,0.07)] space-y-2.5">
            <span class="font-mono text-[10px] uppercase tracking-wider text-[#666d7e] font-semibold block">
              Core Technologies Deployed
            </span>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="t in exp.technologies"
                :key="t"
                class="px-2.5 py-1 text-xs font-mono font-medium text-[#121316] bg-white border border-[rgba(18,19,22,0.1)] rounded-md shadow-[0_1px_2px_rgba(18,19,22,0.02)]"
              >
                {{ t }}
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>

  </section>
</template>
