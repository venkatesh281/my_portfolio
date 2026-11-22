<script setup>
import { ref, computed, nextTick, onUnmounted } from 'vue'
import { portfolioData } from '../data/portfolioData'

const p = portfolioData.personal
const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY || ''

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
  botcheck: false
})

const lastSubmitted = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const statusType = ref('') // 'success' | 'error' | ''
const formError = ref('')
const cooldownRemaining = ref(0)
const statusBoxRef = ref(null)
const toastMessage = ref('')
const toastVisible = ref(false)

let cooldownTimer = null

const startCooldown = (seconds = 30) => {
  cooldownRemaining.value = seconds
  if (cooldownTimer) clearInterval(cooldownTimer)
  cooldownTimer = setInterval(() => {
    cooldownRemaining.value--
    if (cooldownRemaining.value <= 0) {
      clearInterval(cooldownTimer)
      cooldownTimer = null
    }
  }, 1000)
}

onUnmounted(() => {
  if (cooldownTimer) clearInterval(cooldownTimer)
})

const showToast = (msg) => {
  toastMessage.value = msg
  toastVisible.value = true
  setTimeout(() => {
    toastVisible.value = false
  }, 3000)
}

const copyToClipboard = async (text, label) => {
  try {
    await navigator.clipboard.writeText(text)
    showToast(`✓ Copied ${label} to clipboard!`)
  } catch {
    showToast(`Failed to copy ${label}`)
  }
}

const mailtoFallbackUrl = computed(() => {
  const subj = encodeURIComponent(lastSubmitted.value.subject || 'Portfolio contact')
  const body = encodeURIComponent(
    `Name: ${lastSubmitted.value.name}\nEmail: ${lastSubmitted.value.email}\n\nMessage:\n${lastSubmitted.value.message}`
  )
  return `mailto:${p.email}?subject=${subj}&body=${body}`
})

const handleSubmit = async () => {
  formError.value = ''
  statusType.value = ''

  // Honeypot spam check (silent drop)
  if (form.value.botcheck) {
    isSubmitting.value = true
    setTimeout(() => {
      isSubmitting.value = false
      statusType.value = 'success'
      form.value.name = ''
      form.value.email = ''
      form.value.subject = ''
      form.value.message = ''
      form.value.botcheck = false
    }, 400)
    return
  }

  // Cooldown check
  if (cooldownRemaining.value > 0) {
    formError.value = `Please wait ${cooldownRemaining.value}s before submitting another message.`
    return
  }

  // Field validation
  const trimmedName = form.value.name.trim()
  const trimmedEmail = form.value.email.trim()
  const trimmedMessage = form.value.message.trim()
  const trimmedSubject = form.value.subject.trim()

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    formError.value = 'Please fill out all required fields.'
    return
  }

  // Basic email pattern check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(trimmedEmail)) {
    formError.value = 'Please enter a valid email address.'
    return
  }

  // Cache submitted values for mailto fallback
  lastSubmitted.value = {
    name: trimmedName,
    email: trimmedEmail,
    subject: trimmedSubject,
    message: trimmedMessage
  }

  isSubmitting.value = true

  const payload = {
    access_key: web3FormsKey,
    name: trimmedName,
    email: trimmedEmail,
    subject: trimmedSubject || 'Portfolio contact',
    message: trimmedMessage,
    from_name: 'Portfolio Website'
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    })

    const data = await response.json()

    if (response.ok && data.success) {
      statusType.value = 'success'
      showToast('✓ Message sent successfully!')
      // Clear form on success
      form.value.name = ''
      form.value.email = ''
      form.value.subject = ''
      form.value.message = ''
      form.value.botcheck = false
      startCooldown(30)
    } else {
      statusType.value = 'error'
      showToast("Couldn't send message")
    }
  } catch {
    statusType.value = 'error'
    showToast('Network error: unable to send')
  } finally {
    isSubmitting.value = false
    await nextTick()
    if (statusBoxRef.value) {
      statusBoxRef.value.focus()
    }
  }
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

          <form @submit.prevent="handleSubmit" class="space-y-6" novalidate>
            <!-- Honeypot Bot Shield (Hidden from real users) -->
            <input
              v-model="form.botcheck"
              type="checkbox"
              name="botcheck"
              class="hidden"
              style="display: none !important;"
              tabindex="-1"
              autocomplete="off"
            />

            <!-- Name & Email Underlined Inputs -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="space-y-1">
                <label for="contact-name" class="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#666d7e]">
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  v-model="form.name"
                  required
                  maxlength="100"
                  type="text"
                  placeholder="e.g. Sukumar Radhakrishnan"
                  class="w-full py-2 bg-transparent border-b border-[rgba(18,19,22,0.2)] focus:border-[#0038ff] outline-none text-sm font-sans text-[#121316] placeholder-[rgba(18,19,22,0.3)] transition-colors"
                />
              </div>

              <div class="space-y-1">
                <label for="contact-email" class="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#666d7e]">
                  Your Email *
                </label>
                <input
                  id="contact-email"
                  v-model="form.email"
                  required
                  maxlength="150"
                  type="email"
                  placeholder="sukumar@example.com"
                  class="w-full py-2 bg-transparent border-b border-[rgba(18,19,22,0.2)] focus:border-[#0038ff] outline-none text-sm font-sans text-[#121316] placeholder-[rgba(18,19,22,0.3)] transition-colors"
                />
              </div>
            </div>

            <!-- Subject Underlined Input -->
            <div class="space-y-1">
              <label for="contact-subject" class="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#666d7e]">
                Subject / Purpose
              </label>
              <input
                id="contact-subject"
                v-model="form.subject"
                maxlength="200"
                type="text"
                placeholder="Full Stack Engineering / Asynchronous Architecture / Mentorship"
                class="w-full py-2 bg-transparent border-b border-[rgba(18,19,22,0.2)] focus:border-[#0038ff] outline-none text-sm font-sans text-[#121316] placeholder-[rgba(18,19,22,0.3)] transition-colors"
              />
            </div>

            <!-- Message Underlined Textarea -->
            <div class="space-y-1">
              <label for="contact-message" class="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#666d7e]">
                Message *
              </label>
              <textarea
                id="contact-message"
                v-model="form.message"
                required
                maxlength="3000"
                rows="4"
                placeholder="Share your requirements, engineering team specifications, or project context..."
                class="w-full py-2 bg-transparent border-b border-[rgba(18,19,22,0.2)] focus:border-[#0038ff] outline-none text-sm font-sans text-[#121316] placeholder-[rgba(18,19,22,0.3)] transition-colors resize-none"
              ></textarea>
            </div>

            <!-- Validation Error Warning -->
            <div
              v-if="formError"
              role="alert"
              aria-live="assertive"
              class="p-3 rounded-lg bg-red-50 border border-red-200 text-xs font-mono text-red-600"
            >
              {{ formError }}
            </div>

            <!-- Status Alert: Success -->
            <div
              v-if="statusType === 'success'"
              ref="statusBoxRef"
              tabindex="-1"
              role="status"
              aria-live="polite"
              class="p-4 rounded-xl bg-emerald-50/90 border border-emerald-300 text-xs font-mono text-emerald-800 outline-none flex items-start gap-2.5"
            >
              <span class="text-base leading-none text-emerald-600 font-bold">✓</span>
              <p class="leading-relaxed">
                Thanks, your message has been sent. I'll reply soon.
              </p>
            </div>

            <!-- Status Alert: Error with Mailto Fallback -->
            <div
              v-if="statusType === 'error'"
              ref="statusBoxRef"
              tabindex="-1"
              role="alert"
              aria-live="assertive"
              class="p-4 rounded-xl bg-red-50/90 border border-red-300 text-xs font-mono text-red-800 outline-none space-y-1.5"
            >
              <div class="flex items-start gap-2.5">
                <span class="text-base leading-none text-red-600 font-bold">✕</span>
                <p class="leading-relaxed">
                  Couldn't send. Please try again or email
                  <a
                    :href="mailtoFallbackUrl"
                    class="underline text-[#0038ff] font-bold hover:text-[#002ec7] focus:ring-1 focus:ring-[#0038ff] rounded"
                  >
                    {{ p.email }}
                  </a>.
                </p>
              </div>
            </div>

            <!-- Submit Button with Cooldown & Sending State -->
            <button
              type="submit"
              :disabled="isSubmitting || cooldownRemaining > 0"
              class="w-full py-3.5 px-6 rounded-xl font-mono text-xs font-bold text-white bg-[#0038ff] hover:bg-[#002ec7] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
            >
              <span v-if="isSubmitting">Sending...</span>
              <span v-else-if="cooldownRemaining > 0">Message Sent (Cooldown: {{ cooldownRemaining }}s)</span>
              <span v-else>Dispatch Note to Venkateshwaran ↘</span>
            </button>
          </form>
        </div>
      </div>

    </div>
  </section>
</template>
