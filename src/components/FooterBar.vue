<script setup>
const year = new Date().getFullYear()

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="border-t border-slate-800/80 bg-[#060910] py-12 px-6 md:px-10">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      
      <!-- Brand & Title with User Logo -->
      <div class="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="Venkateshwaran"
          class="w-8 h-8 rounded-xl object-contain shadow-sm"
        />
        <div>
          <div class="font-display font-bold text-sm text-white">
            Venkateshwaran
          </div>
          <div class="text-xs font-mono text-slate-400">
            Full Stack Developer • Chennai, India
          </div>
        </div>
      </div>

      <!-- Quick Nav Links (Clean Sentence Case) -->
      <div class="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
        <a href="#about" class="hover:text-white transition-colors">About</a>
        <a href="#skills" class="hover:text-white transition-colors">Skills</a>
        <a href="#experience" class="hover:text-white transition-colors">Experience</a>
        <a href="#mentorship" class="hover:text-white transition-colors">Mentorship</a>
        <a href="#projects" class="hover:text-white transition-colors">Projects</a>
        <a href="#contact" class="hover:text-white transition-colors">Contact</a>
      </div>

      <!-- Copyright & Back to Top -->
      <div class="flex items-center gap-4">
        <span class="text-xs font-mono text-slate-500 tabular-nums">
          © {{ year }} Venkateshwaran
        </span>
        <button
          @click="scrollToTop"
          class="btn-pill text-xs font-mono cursor-pointer"
          aria-label="Back to top"
        >
          <span>Top ↑</span>
        </button>
      </div>

    </div>
  </footer>
</template>
