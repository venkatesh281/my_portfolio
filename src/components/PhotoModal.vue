<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { portfolioData } from '../data/portfolioData'

const props = defineProps({
  photo: Object,
  isOpen: Boolean
})

const emit = defineEmits(['close', 'navigate'])

const gallery = portfolioData.mentorship.gallery
const modalRef = ref(null)
const closeButtonRef = ref(null)
let previousActiveElement = null

// Current index
const currentIndex = computed(() => {
  if (!props.photo) return 0
  const idx = gallery.findIndex(p => p.src === props.photo.src)
  return idx >= 0 ? idx : 0
})

const currentPhoto = computed(() => gallery[currentIndex.value] || props.photo)

const goToPrev = () => {
  const nextIdx = (currentIndex.value - 1 + gallery.length) % gallery.length
  emit('navigate', gallery[nextIdx])
}

const goToNext = () => {
  const nextIdx = (currentIndex.value + 1) % gallery.length
  emit('navigate', gallery[nextIdx])
}

// Touch swipe variables
let touchStartX = 0
let touchStartY = 0

const onTouchStart = (e) => {
  touchStartX = e.touches[0].clientX
  touchStartY = e.touches[0].clientY
}

const onTouchEnd = (e) => {
  const deltaX = e.changedTouches[0].clientX - touchStartX
  const deltaY = e.changedTouches[0].clientY - touchStartY
  // Horizontal swipe must dominate vertical swipe
  if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
    if (deltaX < 0) goToNext()
    else goToPrev()
  }
}

// Keyboard navigation & Focus trap
const handleKeydown = (e) => {
  if (!props.isOpen) return

  if (e.key === 'Escape') {
    e.preventDefault()
    emit('close')
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault()
    goToPrev()
  } else if (e.key === 'ArrowRight') {
    e.preventDefault()
    goToNext()
  } else if (e.key === 'Tab' && modalRef.value) {
    // Focus Trap
    const focusableElements = modalRef.value.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusableElements.length === 0) return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus()
        e.preventDefault()
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus()
        e.preventDefault()
      }
    }
  }
}

watch(
  () => props.isOpen,
  async (open) => {
    if (open) {
      previousActiveElement = document.activeElement
      window.addEventListener('keydown', handleKeydown)
      document.body.style.overflow = 'hidden'
      await nextTick()
      closeButtonRef.value?.focus()
    } else {
      window.removeEventListener('keydown', handleKeydown)
      document.body.style.overflow = ''
      if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
        previousActiveElement.focus()
      }
    }
  }
)

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <transition
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen && currentPhoto"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-[#121316]/90 backdrop-blur-md"
        @click.self="emit('close')"
        role="dialog"
        aria-modal="true"
        :aria-label="currentPhoto.caption"
        @touchstart.passive="onTouchStart"
        @touchend.passive="onTouchEnd"
      >
        <div
          ref="modalRef"
          class="relative max-w-4xl w-full bg-[#fdfcf9] border border-[rgba(18,19,22,0.12)] rounded-2xl overflow-hidden shadow-2xl transition-all"
        >
          <!-- Lightbox Top Control Bar -->
          <div class="px-5 py-3 border-b border-[rgba(18,19,22,0.08)] bg-white flex items-center justify-between">
            <div class="flex items-center gap-2 text-xs font-mono">
              <span class="w-2 h-2 rounded-full bg-[#0038ff]"></span>
              <span class="font-bold text-[#121316]">
                ARCHIVE DOCUMENT 0{{ currentIndex + 1 }} / 0{{ gallery.length }}
              </span>
              <span class="hidden sm:inline text-[#666d7e]">
                • Use Arrow Keys or Swipe
              </span>
            </div>

            <!-- Close Button -->
            <button
              ref="closeButtonRef"
              @click="emit('close')"
              class="w-8 h-8 rounded-full bg-[#f6f4ee] border border-[rgba(18,19,22,0.12)] text-[#121316] hover:bg-[#0038ff] hover:text-white flex items-center justify-center transition-colors cursor-pointer text-sm font-bold"
              aria-label="Close Lightbox (Esc)"
            >
              ✕
            </button>
          </div>

          <!-- Main Image Canvas -->
          <div class="relative max-h-[64vh] overflow-hidden flex items-center justify-center bg-[#121316]">
            <img
              :src="currentPhoto.src"
              :alt="currentPhoto.caption"
              class="max-h-[64vh] w-auto max-w-full object-contain select-none"
            />

            <!-- Left Navigation Arrow Button -->
            <button
              @click="goToPrev"
              class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#121316] border border-[rgba(18,19,22,0.15)] shadow-lg flex items-center justify-center transition-colors cursor-pointer font-bold text-sm"
              aria-label="Previous Photo"
            >
              ←
            </button>

            <!-- Right Navigation Arrow Button -->
            <button
              @click="goToNext"
              class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#121316] border border-[rgba(18,19,22,0.15)] shadow-lg flex items-center justify-center transition-colors cursor-pointer font-bold text-sm"
              aria-label="Next Photo"
            >
              →
            </button>
          </div>

          <!-- Caption & Action Bar -->
          <div class="p-5 border-t border-[rgba(18,19,22,0.08)] bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div class="space-y-1">
              <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0038ff] px-2 py-0.5 rounded bg-[rgba(0,56,255,0.06)] border border-[rgba(0,56,255,0.15)] inline-block">
                {{ currentPhoto.tag }}
              </span>
              <p class="text-xs sm:text-sm text-[#121316] font-sans font-medium leading-relaxed">
                {{ currentPhoto.caption }}
              </p>
            </div>

            <div class="flex items-center gap-2 shrink-0">
              <button
                @click="goToPrev"
                class="px-3 py-1.5 rounded-lg border border-[rgba(18,19,22,0.15)] bg-[#f6f4ee] hover:bg-white text-xs font-mono font-semibold text-[#121316] cursor-pointer"
              >
                ← Prev
              </button>
              <button
                @click="goToNext"
                class="px-3 py-1.5 rounded-lg border border-[rgba(18,19,22,0.15)] bg-[#f6f4ee] hover:bg-white text-xs font-mono font-semibold text-[#121316] cursor-pointer"
              >
                Next →
              </button>
            </div>
          </div>

        </div>
      </div>
    </transition>
  </Teleport>
</template>
