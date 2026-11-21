<script setup>
import { ref } from 'vue'
import { portfolioData } from '../data/portfolioData'
import confetti from 'canvas-confetti'

const p = portfolioData.personal

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isCopied = ref(null)
const isSubmitted = ref(false)

const triggerConfetti = () => {
  confetti({
    particleCount: 70,
    spread: 60,
    origin: { y: 0.7 }
  })
}

const copyToClipboard = (text, type) => {
  navigator.clipboard.writeText(text)
  isCopied.value = type
  triggerConfetti()
  setTimeout(() => {
    isCopied.value = null
  }, 2500)
}

const handleSubmit = () => {
  const mailtoLink = `mailto:${p.email}?subject=${encodeURIComponent(form.value.subject || 'Portfolio Inquiry from ' + form.value.name)}&body=${encodeURIComponent(
    `Name: ${form.value.name}\nEmail: ${form.value.email}\n\nMessage:\n${form.value.message}`
  )}`
  isSubmitted.value = true
  triggerConfetti()
  window.location.href = mailtoLink
}
</script>

<template>
  <section id="contact" class="py-24 px-6 md:px-10 max-w-7xl mx-auto">
    <hr class="section-divider mb-16" />

    <!-- Big Editorial Headline (Dennis Snellenberg Style) -->
    <div class="mb-16">
      <div class="eyebrow mb-3">/06 Direct Connection</div>
      <h2 class="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] max-w-4xl">
        Let's build something <span class="text-gradient-cyan">extraordinary</span> together.
      </h2>
      <p class="text-sm sm:text-base text-slate-300 mt-4 max-w-2xl leading-relaxed">
        Whether you are hiring for full-stack engineering roles, seeking backend architectural guidance, or planning a student workshop — let's connect.
      </p>
    </div>

    <!-- Contact Details & Form Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      <!-- Left Column: Quick Contact Cards -->
      <div class="lg:col-span-5 space-y-5">
        
        <!-- Email Copy Card -->
        <div
          @click="copyToClipboard(p.email, 'email')"
          class="glass-panel rounded-2xl p-5 border border-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer group flex items-center justify-between"
        >
          <div>
            <div class="text-[11px] font-mono uppercase tracking-wider text-slate-400">Email Address</div>
            <div class="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
              {{ p.email }}
            </div>
          </div>
          <span class="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-400">
            {{ isCopied === 'email' ? '✓ Copied!' : 'Click to Copy' }}
          </span>
        </div>

        <!-- Phone / WhatsApp Copy Card -->
        <div
          @click="copyToClipboard(p.phone, 'phone')"
          class="glass-panel rounded-2xl p-5 border border-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer group flex items-center justify-between"
        >
          <div>
            <div class="text-[11px] font-mono uppercase tracking-wider text-slate-400">Phone & WhatsApp</div>
            <div class="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
              {{ p.phone }}
            </div>
          </div>
          <span class="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-emerald-400">
            {{ isCopied === 'phone' ? '✓ Copied!' : 'Click to Copy' }}
          </span>
        </div>

        <!-- Direct WhatsApp Pill Button -->
        <a
          :href="p.whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full py-4 px-6 rounded-2xl font-bold text-sm text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800/60 flex items-center justify-center gap-2.5 transition-all shadow-lg"
        >
          <svg class="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/>
          </svg>
          <span>Chat on WhatsApp Directly ↗</span>
        </a>

        <!-- Professional Profiles -->
        <div class="pt-4 flex gap-3">
          <a
            :href="p.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 py-3 px-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-xs font-mono font-bold text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-all"
          >
            <span>LinkedIn Profile ↗</span>
          </a>
          <a
            :href="p.github"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 py-3 px-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-xs font-mono font-bold text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-all"
          >
            <span>GitHub Profile ↗</span>
          </a>
        </div>

      </div>

      <!-- Right Column: Interactive Note Dispatcher -->
      <div class="lg:col-span-7">
        <div class="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
          <div>
            <h3 class="font-display font-bold text-xl text-white">
              Send a Direct Note
            </h3>
            <p class="text-xs font-mono text-slate-400 mt-1">
              Dispatches directly to venkateshwaran2810@gmail.com
            </p>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="space-y-1">
                <label class="text-xs font-mono text-slate-300">Your Name *</label>
                <input
                  v-model="form.name"
                  required
                  type="text"
                  placeholder="e.g. Sukumar"
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono"
                />
              </div>
              <div class="space-y-1">
                <label class="text-xs font-mono text-slate-300">Your Email *</label>
                <input
                  v-model="form.email"
                  required
                  type="email"
                  placeholder="sukumar@example.com"
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono"
                />
              </div>
            </div>

            <div class="space-y-1">
              <label class="text-xs font-mono text-slate-300">Subject</label>
              <input
                v-model="form.subject"
                type="text"
                placeholder="Full Stack Engineering Opportunity / Mentorship"
                class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono"
              />
            </div>

            <div class="space-y-1">
              <label class="text-xs font-mono text-slate-300">Message *</label>
              <textarea
                v-model="form.message"
                required
                rows="4"
                placeholder="Share your requirements or thoughts..."
                class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full btn-pill solid py-3.5 text-sm font-mono font-bold"
            >
              <span>Dispatch Note to Venkatesh</span>
              <svg class="w-4 h-4" viewBox="0 0 12 12" fill="none">
                <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>

            <div v-if="isSubmitted" class="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-xs font-mono text-emerald-300 text-center">
              ✓ Message prepared! Your mail application will open to send it.
            </div>
          </form>
        </div>
      </div>

    </div>
  </section>
</template>
