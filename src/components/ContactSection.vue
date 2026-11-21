<script setup>
import { ref } from 'vue'
import { portfolioData } from '../data/portfolioData'
const p = portfolioData.personal
const copied = ref(null)
const copy = (text, type) => {
  navigator.clipboard.writeText(text)
  copied.value = type
  setTimeout(() => copied.value = null, 2200)
}
</script>

<template>
  <section id="contact" class="py-28 px-6 md:px-10 max-w-[1440px] mx-auto">
    <hr class="section-divider mb-16 fade-in" />
    <div class="mb-20">
      <div class="eyebrow mb-6 fade-in">/07 Get in Touch</div>
      <div class="reveal-wrap">
        <h2 class="inner contact-title">
          Let's Build<br>
          <span style="-webkit-text-stroke: 1px #f0ece3; color: transparent;">Something</span>
          <span class="text-[#c8ff00]"> Real.</span>
        </h2>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      <div class="lg:col-span-5 space-y-8 stagger-children">
        <div class="group flex items-start justify-between border-t border-white/[0.06] pt-5 hover:border-[#c8ff00]/30 transition-colors cursor-none" @click="copy(p.email,'email')" data-hover>
          <div>
            <div class="eyebrow mb-1">Email</div>
            <div class="text-sm text-[#f0ece3] font-mono">{{ p.email }}</div>
          </div>
          <span class="text-xs font-mono text-[#c8ff00] opacity-0 group-hover:opacity-100 transition-opacity mt-1">{{ copied === 'email' ? '✓ copied' : '↗ copy' }}</span>
        </div>
        <div class="group flex items-start justify-between border-t border-white/[0.06] pt-5 hover:border-[#c8ff00]/30 transition-colors cursor-none" @click="copy(p.phone,'phone')" data-hover>
          <div>
            <div class="eyebrow mb-1">Phone & WhatsApp</div>
            <div class="text-sm text-[#f0ece3] font-mono">{{ p.phone }}</div>
          </div>
          <span class="text-xs font-mono text-[#c8ff00] opacity-0 group-hover:opacity-100 transition-opacity mt-1">{{ copied === 'phone' ? '✓ copied' : '↗ copy' }}</span>
        </div>
        <div class="border-t border-white/[0.06] pt-5 flex flex-col gap-3">
          <div class="eyebrow mb-2">Profiles</div>
          <a :href="p.linkedin" target="_blank" rel="noopener" class="btn-pill inline-flex w-fit" data-hover>
            <span>LinkedIn — venkateshwaran28</span>
            <svg class="w-3 h-3" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </a>
          <a :href="p.github" target="_blank" rel="noopener" class="btn-pill inline-flex w-fit" data-hover>
            <span>GitHub — venkatesh281</span>
            <svg class="w-3 h-3" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </a>
          <a :href="p.whatsapp" target="_blank" rel="noopener" class="btn-pill solid inline-flex w-fit" data-hover>
            <span>Start a WhatsApp Chat</span>
          </a>
        </div>
      </div>
      <div class="lg:col-span-7 stagger-children">
        <form @submit.prevent class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="space-y-1.5">
              <label class="eyebrow">Your Name</label>
              <input type="text" placeholder="e.g. John Doe" class="w-full bg-transparent border-b border-white/[0.1] focus:border-[#c8ff00] outline-none py-2.5 text-sm text-[#f0ece3] placeholder-[#3a3a3a] transition-colors font-mono" />
            </div>
            <div class="space-y-1.5">
              <label class="eyebrow">Your Email</label>
              <input type="email" placeholder="you@example.com" class="w-full bg-transparent border-b border-white/[0.1] focus:border-[#c8ff00] outline-none py-2.5 text-sm text-[#f0ece3] placeholder-[#3a3a3a] transition-colors font-mono" />
            </div>
          </div>
          <div class="space-y-1.5">
            <label class="eyebrow">Subject</label>
            <input type="text" placeholder="Job Opportunity / Project / Mentorship" class="w-full bg-transparent border-b border-white/[0.1] focus:border-[#c8ff00] outline-none py-2.5 text-sm text-[#f0ece3] placeholder-[#3a3a3a] transition-colors font-mono" />
          </div>
          <div class="space-y-1.5">
            <label class="eyebrow">Message</label>
            <textarea rows="4" placeholder="Describe your project or opportunity..." class="w-full bg-transparent border-b border-white/[0.1] focus:border-[#c8ff00] outline-none py-2.5 text-sm text-[#f0ece3] placeholder-[#3a3a3a] transition-colors font-mono resize-none"></textarea>
          </div>
          <button type="submit" class="btn-pill solid text-sm" data-hover>
            <span>Send Message</span>
            <svg class="w-3 h-3" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
