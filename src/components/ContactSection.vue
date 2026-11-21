<script setup>
import { ref } from 'vue'
import { portfolioData } from '../data/portfolioData'
import confetti from 'canvas-confetti'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Check, 
  Copy, 
  MessageSquare,
  Sparkles
} from 'lucide-vue-next'

const p = portfolioData.personal

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const copiedType = ref(null)

const triggerConfetti = () => {
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 }
  })
}

const copyToClipboard = (text, type) => {
  navigator.clipboard.writeText(text)
  copiedType.value = type
  triggerConfetti()
  setTimeout(() => {
    copiedType.value = null
  }, 2500)
}

const handleSubmit = () => {
  isSubmitting.value = true

  // Generate mailto link as fallback or direct action
  const mailtoLink = `mailto:${p.email}?subject=${encodeURIComponent(form.value.subject || 'Portfolio Inquiry from ' + form.value.name)}&body=${encodeURIComponent(
    `Name: ${form.value.name}\nEmail: ${form.value.email}\n\nMessage:\n${form.value.message}`
  )}`

  setTimeout(() => {
    isSubmitting.value = false
    isSubmitted.value = true
    triggerConfetti()
    window.location.href = mailtoLink
  }, 800)
}
</script>

<template>
  <section id="contact" class="py-20 md:py-28 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950/60 border border-brand-800/50 text-brand-400 text-xs font-semibold uppercase tracking-wider">
          Let's Connect
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Get in Touch for Roles, Collaborations & Mentorship
        </h2>
        <p class="text-slate-400 text-base leading-relaxed">
          Open to full-time full stack software engineering opportunities, backend consulting, and developer mentorship sessions.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left: Contact Methods & Direct Actions -->
        <div class="lg:col-span-5 space-y-6">
          <div class="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800/80 shadow-xl space-y-6">
            <h3 class="text-xl font-bold text-white tracking-tight">
              Direct Contact Details
            </h3>

            <!-- Email Card with Copy Button -->
            <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 group">
              <div class="flex items-center gap-3 overflow-hidden">
                <div class="w-10 h-10 rounded-xl bg-brand-950 border border-brand-800/60 flex items-center justify-center text-brand-400 shrink-0">
                  <Mail class="w-5 h-5" />
                </div>
                <div class="overflow-hidden">
                  <div class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Email</div>
                  <a :href="'mailto:' + p.email" class="text-xs sm:text-sm font-bold text-white hover:text-brand-400 truncate block">
                    {{ p.email }}
                  </a>
                </div>
              </div>
              <button
                @click="copyToClipboard(p.email, 'email')"
                class="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors shrink-0"
                title="Copy Email"
              >
                <Check v-if="copiedType === 'email'" class="w-4 h-4 text-emerald-400" />
                <Copy v-else class="w-4 h-4" />
              </button>
            </div>

            <!-- Phone / WhatsApp Card with Copy Button -->
            <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 group">
              <div class="flex items-center gap-3 overflow-hidden">
                <div class="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone class="w-5 h-5" />
                </div>
                <div class="overflow-hidden">
                  <div class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Phone & WhatsApp</div>
                  <a :href="'tel:' + p.phone" class="text-xs sm:text-sm font-bold text-white hover:text-emerald-400 truncate block">
                    {{ p.phone }}
                  </a>
                </div>
              </div>
              <button
                @click="copyToClipboard(p.phone, 'phone')"
                class="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors shrink-0"
                title="Copy Phone"
              >
                <Check v-if="copiedType === 'phone'" class="w-4 h-4 text-emerald-400" />
                <Copy v-else class="w-4 h-4" />
              </button>
            </div>

            <!-- WhatsApp Direct Button -->
            <a
              :href="p.whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full py-3.5 px-4 rounded-2xl font-bold text-sm text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800/50 flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-950/30"
            >
              <MessageSquare class="w-4 h-4" />
              <span>Chat on WhatsApp Directly</span>
            </a>

            <!-- Social Links -->
            <div class="pt-4 border-t border-slate-800/80">
              <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Professional Networks
              </div>
              <div class="flex gap-3">
                <a
                  :href="p.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-brand-500/50 text-xs font-semibold text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-all"
                >
                  <Linkedin class="w-4 h-4 text-brand-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  :href="p.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-brand-500/50 text-xs font-semibold text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-all"
                >
                  <Github class="w-4 h-4 text-slate-400" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        <!-- Right: Interactive Message Form -->
        <div class="lg:col-span-7">
          <div class="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800/80 shadow-xl">
            <h3 class="text-xl font-bold text-white tracking-tight mb-2">
              Send a Direct Message
            </h3>
            <p class="text-xs text-slate-400 mb-6">
              Fill out the form below to initiate an email directly with Venkatesh.
            </p>

            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                  <label class="text-xs font-semibold text-slate-300">Your Name *</label>
                  <input
                    v-model="form.name"
                    required
                    type="text"
                    placeholder="e.g. John Doe"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>
                <div class="space-y-1.5">
                  <label class="text-xs font-semibold text-slate-300">Your Email *</label>
                  <input
                    v-model="form.email"
                    required
                    type="email"
                    placeholder="e.g. john@example.com"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>
              </div>

              <div class="space-y-1.5">
                <label class="text-xs font-semibold text-slate-300">Subject</label>
                <input
                  v-model="form.subject"
                  type="text"
                  placeholder="e.g. Full Stack Engineer Opportunity"
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
                />
              </div>

              <div class="space-y-1.5">
                <label class="text-xs font-semibold text-slate-300">Message *</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="4"
                  placeholder="Write your note or project requirements here..."
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 shadow-lg shadow-brand-500/25 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Send v-if="!isSubmitting" class="w-4 h-4" />
                <span>{{ isSubmitting ? 'Opening Mail Client...' : 'Dispatch Message' }}</span>
              </button>

              <div v-if="isSubmitted" class="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-xs text-emerald-300 text-center font-medium">
                Thank you! Your mail application has been prepared to send your message.
              </div>
            </form>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
