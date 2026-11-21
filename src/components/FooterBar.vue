<script setup>
const year = new Date().getFullYear()
const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>

<template>
  <footer class="border-t border-white/[0.06] py-8 px-6 md:px-10">
    <div class="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="font-display font-bold text-sm uppercase tracking-wider text-[#f0ece3]/30">
        Venkateshwaran S <span class="text-[#c8ff00]">©</span> {{ year }}
      </div>

      <div class="flex items-center gap-6">
        <span class="eyebrow">Chennai, India</span>
        <span class="eyebrow">Full Stack Developer</span>
      </div>

      <button
        @click="scrollTop"
        class="btn-pill text-xs"
        data-hover
        aria-label="Back to top"
      >
        <span>Back to top</span>
        <svg class="w-3 h-3 rotate-180" viewBox="0 0 12 12" fill="none"><path d="M6 10V2M2 6l4-4 4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </div>
  </footer>
</template>
