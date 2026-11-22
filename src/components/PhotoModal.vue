<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  photo: Object,
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const handleKeydown = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
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
        v-if="isOpen && photo"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md"
        @click.self="emit('close')"
      >
        <div
          class="relative max-w-4xl w-full bg-[#0d1321] border border-white/[0.1] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-200 ease-out"
        >
          
          <!-- Close Button -->
          <button
            @click="emit('close')"
            class="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Lightbox (Esc)"
          >
            ✕
          </button>

          <!-- Image Canvas -->
          <div class="max-h-[72vh] overflow-hidden flex items-center justify-center bg-black/60">
            <img
              :src="photo.src"
              :alt="photo.caption"
              class="max-h-[72vh] w-auto max-w-full object-contain"
            />
          </div>

          <!-- Caption Footer -->
          <div class="p-5 border-t border-slate-800 bg-[#0d1321] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40 inline-block mb-1.5">
                {{ photo.tag }}
              </span>
              <p class="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                {{ photo.caption }}
              </p>
            </div>

            <button
              @click="emit('close')"
              class="btn-pill text-xs font-mono shrink-0 cursor-pointer"
            >
              Close (Esc)
            </button>
          </div>

        </div>
      </div>
    </transition>
  </Teleport>
</template>
