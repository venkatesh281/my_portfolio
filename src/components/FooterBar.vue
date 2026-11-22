<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const year = new Date().getFullYear()
const localTime = ref('')
let timer = null

const updateTime = () => {
  try {
    localTime.value = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(new Date())
  } catch {
    localTime.value = 'IST (UTC+5:30)'
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <footer class="border-t border-[rgba(18,19,22,0.09)] bg-[#f6f4ee] py-14 px-6 md:px-12 lg:px-16 text-[#121316]">
    <div class="max-w-7xl mx-auto space-y-10">
      
      <!-- Top Colophon Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
        
        <!-- Brand & Identity -->
        <div class="md:col-span-5 space-y-3">
          <div class="flex items-center gap-3">
            <span class="font-serif font-bold text-2xl text-[#121316]">V.</span>
            <div>
              <p class="font-sans font-bold text-sm text-[#121316]">Venkateshwaran</p>
              <p class="font-mono text-xs text-[#525866]">Full Stack Developer • Chennai, India</p>
            </div>
          </div>
          <p class="text-xs font-sans text-[#525866] max-w-sm leading-relaxed">
            Architecting decoupled asynchronous task queues, high-throughput microservices, and high-performance user interfaces.
          </p>
        </div>

        <!-- Quick Nav Links -->
        <div class="md:col-span-4 space-y-2">
          <span class="font-mono text-[10px] uppercase font-bold text-[#666d7e] tracking-wider block">
            Navigation Index
          </span>
          <div class="grid grid-cols-2 gap-2 text-xs font-sans">
            <a href="#about" class="text-[#525866] hover:text-[#0038ff] transition-colors">About Atelier</a>
            <a href="#skills" class="text-[#525866] hover:text-[#0038ff] transition-colors">Async Pipeline</a>
            <a href="#experience" class="text-[#525866] hover:text-[#0038ff] transition-colors">Experience</a>
            <a href="#mentorship" class="text-[#525866] hover:text-[#0038ff] transition-colors">Mentorship</a>
            <a href="#projects" class="text-[#525866] hover:text-[#0038ff] transition-colors">Projects</a>
            <a href="#education" class="text-[#525866] hover:text-[#0038ff] transition-colors">Credentials</a>
            <a href="#contact" class="text-[#525866] hover:text-[#0038ff] transition-colors">Direct Contact</a>
            <a href="/resume.pdf" download="Venkateshwaran_S_Resume.pdf" class="text-[#0038ff] font-semibold hover:underline">Resume (PDF) ↗</a>
          </div>
        </div>

        <!-- Local Time & Status -->
        <div class="md:col-span-3 space-y-2">
          <span class="font-mono text-[10px] uppercase font-bold text-[#666d7e] tracking-wider block">
            Local Operations
          </span>
          <div class="p-3 bg-white border border-[rgba(18,19,22,0.1)] rounded-xl space-y-1 shadow-[0_1px_3px_rgba(18,19,22,0.02)]">
            <div class="flex items-center gap-2 font-mono text-xs text-[#121316]">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
              </span>
              <span class="font-bold tabular-nums">{{ localTime }}</span>
            </div>
            <p class="font-mono text-[10px] text-[#525866]">Chennai, India (IST • UTC+5:30)</p>
          </div>
        </div>

      </div>

      <!-- Bottom Hairline Colophon Rule & Back to Top -->
      <div class="pt-6 border-t border-[rgba(18,19,22,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#666d7e]">
        <div>
          <span>Crafted in Vue 3, Vite, Tailwind CSS, GSAP, and plain Three.js.</span>
          <span class="block sm:inline sm:ml-2 text-[11px] text-[#525866]">© {{ year }} Venkateshwaran. All rights reserved.</span>
        </div>

        <button
          @click="scrollToTop"
          class="px-3.5 py-1.5 rounded-lg border border-[rgba(18,19,22,0.12)] bg-white hover:border-[#0038ff] text-[#121316] hover:text-[#0038ff] text-xs font-mono transition-colors cursor-pointer shrink-0 flex items-center gap-1.5 shadow-sm"
          aria-label="Back to top of page"
        >
          <span>Top</span>
          <span>↑</span>
        </button>
      </div>

    </div>
  </footer>
</template>
