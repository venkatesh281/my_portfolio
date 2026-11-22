<script setup>
import { ref } from 'vue'
import { portfolioData } from '../data/portfolioData'

const p = portfolioData.personal

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
  _hp: '' // Honeypot field
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const formError = ref('')
const toastMessage = ref('')
const toastVisible = ref(false)

const showToast = (msg) => {
  toastMessage.value = msg
  toastVisible.value = true
  setTimeout(() => {
    toastVisible.value = false
  }, 2800)
}

const copyToClipboard = async (text, label) => {
  try {
    await navigator.clipboard.writeText(text)
    showToast(`✓ Copied ${label} to clipboard!`)
  } catch {
    showToast(`Failed to copy ${label}`)
  }
}

const handleSubmit = () => {
  formError.value = ''

  // Honeypot bot check
  if (form.value._hp) {
    return
  }

  // Field validation
  if (!form.value.name.trim() || !form.value.email.trim() || !form.value.message.trim()) {
    formError.value = 'Please fill out all required fields.'
    return
  }

  // Basic email pattern check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.value.email.trim())) {
    formError.value = 'Please enter a valid email address.'
    return
  }

  isSubmitting.value = true

  const mailtoSubject = encodeURIComponent(
    form.value.subject || `Portfolio Architecture Inquiry from ${form.value.name}`
  )
  const mailtoBody = encodeURIComponent(
    `Name: ${form.value.name}\nEmail: ${form.value.email}\n\nMessage:\n${form.value.message}`
  )
  const mailtoLink = `mailto:${p.email}?subject=${mailtoSubject}&body=${mailtoBody}`

  setTimeout(() => {
    isSubmitting.value = false
    isSubmitted.value = true
    window.location.href = mailtoLink
    showToast('✓ Dispatching note via your email client...')
  }, 400)
}
</script>

<template>
  <section
    id="contact"
    class="py-14 sm:py-16 md:py-20 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto bg-[#f6f4ee] text-[#121316] select-text relative"
  >
    <!-- Section Top Rule -->
    <div class="w-full h-[1px] bg-[rgba(18,19,22,0.09)] mb-12"></div>

    <!-- Toast Notification Banner -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="toastVisible"
        class="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-[#121316] text-white font-mono text-xs shadow-2xl flex items-center gap-2 border border-white/10"
        role="status"
        aria-live="polite"
      >
        <span class="w-2 h-2 rounded-full bg-[#0038ff]"></span>
        <span>{{ toastMessage }}</span>
      </div>
    </transition>

    <!-- Header Section -->
    <div class="space-y-3.5 max-w-3xl mb-14">
      <div class="text-xs font-mono font-semibold tracking-widest text-[#0038ff] uppercase flex items-center gap-2">
        <span class="w-2 h-[1px] bg-[#0038ff]"></span>
        <span>/07 Direct Communication &amp; Letterhead</span>
      </div>

      <h2 class="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#121316] tracking-tight leading-tight">
        Initiate Dialogue.
        <span class="block text-2xl sm:text-3xl font-normal text-[#525866] italic pt-1">
          Full-stack engineering opportunities, architecture consulting &amp; student workshops.
        </span>
      </h2>

      <p class="text-sm sm:text-base text-[#525866] font-sans leading-relaxed pt-1">
        Whether you are discussing engineering roles, exploring asynchronous backend pipelines, or organizing student technical sessions — direct communication channels are open.
      </p>
    </div>

    <!-- Letterhead Stationery Card Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      
      <!-- Left Column: Direct Channels, Clipboard Triggers & Resume Download -->
      <div class="lg:col-span-5 space-y-4">
        <!-- Email Copy Pill -->
        <div
          @click="copyToClipboard(p.email, 'Email Address')"
          class="p-4 bg-white border border-[rgba(18,19,22,0.1)] rounded-xl cursor-pointer group flex items-center justify-between shadow-[0_1px_3px_rgba(18,19,22,0.02)] hover:border-[#0038ff]/60 transition-colors"
          tabindex="0"
          @keydown.enter="copyToClipboard(p.email, 'Email Address')"
          role="button"
          aria-label="Copy email address"
        >
          <div class="min-w-0 pr-3">
            <span class="text-[10px] font-mono uppercase text-[#666d7e] block">Primary Email</span>
            <span class="font-mono text-xs sm:text-sm font-bold text-[#121316] group-hover:text-[#0038ff] transition-colors truncate block">
              {{ p.email }}
            </span>
          </div>
          <span class="px-2.5 py-1 rounded bg-[#f6f4ee] border border-[rgba(18,19,22,0.1)] text-[11px] font-mono text-[#0038ff] font-semibold shrink-0">
            Copy ↗
          </span>
        </div>

        <!-- Phone / WhatsApp Copy Pill -->
        <div
          @click="copyToClipboard(p.phone, 'Phone Number')"
          class="p-4 bg-white border border-[rgba(18,19,22,0.1)] rounded-xl cursor-pointer group flex items-center justify-between shadow-[0_1px_3px_rgba(18,19,22,0.02)] hover:border-[#0038ff]/60 transition-colors"
          tabindex="0"
          @keydown.enter="copyToClipboard(p.phone, 'Phone Number')"
          role="button"
          aria-label="Copy phone number"
        >
          <div>
            <span class="text-[10px] font-mono uppercase text-[#666d7e] block">Phone &amp; Signal</span>
            <span class="font-mono text-xs sm:text-sm font-bold text-[#121316] group-hover:text-[#0038ff] transition-colors tabular-nums block">
              {{ p.phone }}
            </span>
          </div>
          <span class="px-2.5 py-1 rounded bg-[#f6f4ee] border border-[rgba(18,19,22,0.1)] text-[11px] font-mono text-[#0038ff] font-semibold shrink-0">
            Copy ↗
          </span>
        </div>

        <!-- Direct WhatsApp Channel -->
        <a
          :href="p.whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full p-4 bg-white border border-[rgba(18,19,22,0.1)] rounded-xl flex items-center justify-between shadow-[0_1px_3px_rgba(18,19,22,0.02)] hover:border-[#10b981] group transition-colors"
        >
          <div>
            <span class="text-[10px] font-mono uppercase text-[#666d7e] block">Direct Messaging</span>
            <span class="font-sans text-xs sm:text-sm font-bold text-[#121316] group-hover:text-[#10b981] transition-colors block">
              Chat on WhatsApp Directly
            </span>
          </div>
          <span class="font-mono text-xs font-bold text-[#10b981]">
            WhatsApp ↗
          </span>
        </a>

        <!-- Professional Profiles & Resume Download -->
        <div class="grid grid-cols-2 gap-3 pt-2">
          <a
            :href="p.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="p-3 bg-white border border-[rgba(18,19,22,0.1)] rounded-xl text-center text-xs font-mono font-semibold text-[#121316] hover:border-[#0038ff] hover:text-[#0038ff] transition-colors"
          >
            LinkedIn Profile ↗
          </a>
          <a
            :href="p.github"
            target="_blank"
            rel="noopener noreferrer"
            class="p-3 bg-white border border-[rgba(18,19,22,0.1)] rounded-xl text-center text-xs font-mono font-semibold text-[#121316] hover:border-[#0038ff] hover:text-[#0038ff] transition-colors"
          >
            GitHub Profile ↗
          </a>
        </div>

        <!-- Verified Resume PDF Download Button -->
        <div class="pt-2">
          <a
            href="/resume.pdf"
            download="Venkateshwaran_S_Resume.pdf"
            class="w-full py-3.5 px-6 rounded-xl font-mono text-xs font-bold text-white bg-[#121316] hover:bg-[#0038ff] flex items-center justify-center gap-2.5 transition-colors shadow-md"
          >
            <svg class="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
            </svg>
            <span>Download Official Resume (PDF)</span>
          </a>
        </div>
      </div>

      <!-- Right Column: Stationery Letterhead Form (Underlined Fields) -->
      <div class="lg:col-span-7">
        <div class="bg-white border border-[rgba(18,19,22,0.1)] rounded-2xl p-6 sm:p-9 shadow-[0_4px_20px_rgba(18,19,22,0.03)] space-y-6">
          <div class="border-b border-[rgba(18,19,22,0.08)] pb-4 flex items-center justify-between">
            <div>
              <h3 class="font-serif font-bold text-xl sm:text-2xl text-[#121316]">
                Stationery Letterhead Note
              </h3>
              <p class="text-xs font-mono text-[#525866] mt-0.5">
                Dispatches directly to {{ p.email }}
              </p>
            </div>
            <span class="font-mono text-xs text-[#0038ff] font-bold">
              FORM // 01
            </span>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Honeypot Bot Shield -->
            <input
              v-model="form._hp"
              type="text"
              name="_gotcha"
              class="hidden"
              tabindex="-1"
              autocomplete="off"
            />

            <!-- Name & Email Underlined Inputs -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="space-y-1">
                <label class="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#666d7e]">
                  Your Name *
                </label>
                <input
                  v-model="form.name"
                  required
                  type="text"
                  placeholder="e.g. Sukumar Radhakrishnan"
                  class="w-full py-2 bg-transparent border-b border-[rgba(18,19,22,0.2)] focus:border-[#0038ff] outline-none text-sm font-sans text-[#121316] placeholder-[rgba(18,19,22,0.3)] transition-colors"
                />
              </div>

              <div class="space-y-1">
                <label class="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#666d7e]">
                  Your Email *
                </label>
                <input
                  v-model="form.email"
                  required
                  type="email"
                  placeholder="sukumar@example.com"
                  class="w-full py-2 bg-transparent border-b border-[rgba(18,19,22,0.2)] focus:border-[#0038ff] outline-none text-sm font-sans text-[#121316] placeholder-[rgba(18,19,22,0.3)] transition-colors"
                />
              </div>
            </div>

            <!-- Subject Underlined Input -->
            <div class="space-y-1">
              <label class="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#666d7e]">
                Subject / Purpose
              </label>
              <input
                v-model="form.subject"
                type="text"
                placeholder="Full Stack Engineering / Asynchronous Architecture / Mentorship"
                class="w-full py-2 bg-transparent border-b border-[rgba(18,19,22,0.2)] focus:border-[#0038ff] outline-none text-sm font-sans text-[#121316] placeholder-[rgba(18,19,22,0.3)] transition-colors"
              />
            </div>

            <!-- Message Underlined Textarea -->
            <div class="space-y-1">
              <label class="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#666d7e]">
                Message *
              </label>
              <textarea
                v-model="form.message"
                required
                rows="4"
                placeholder="Share your requirements, engineering team specifications, or project context..."
                class="w-full py-2 bg-transparent border-b border-[rgba(18,19,22,0.2)] focus:border-[#0038ff] outline-none text-sm font-sans text-[#121316] placeholder-[rgba(18,19,22,0.3)] transition-colors resize-none"
              ></textarea>
            </div>

            <!-- Validation Error Warning -->
            <div v-if="formError" class="p-3 rounded-lg bg-red-50 border border-red-200 text-xs font-mono text-red-600">
              {{ formError }}
            </div>

            <!-- Submit Button with Double-Submit Prevention -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-3.5 px-6 rounded-xl font-mono text-xs font-bold text-white bg-[#0038ff] hover:bg-[#002ec7] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
            >
              <span v-if="isSubmitting">Preparing Email Client...</span>
              <span v-else>Dispatch Note to Venkateshwaran ↘</span>
            </button>

            <!-- Success Confirmation -->
            <div v-if="isSubmitted" class="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-700 text-center">
              ✓ Note formatted! Your mail client will open with all details populated.
            </div>
          </form>
        </div>
      </div>

    </div>
  </section>
</template>
