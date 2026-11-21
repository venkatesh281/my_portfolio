<script setup>
import { X, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const props = defineProps({
  photo: Object,
  isOpen: Boolean
})

const emit = defineEmits(['close'])
</script>

<template>
  <div
    v-if="isOpen && photo"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
    @click.self="emit('close')"
  >
    <div class="relative max-w-4xl w-full glass-panel rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
      <!-- Close Button -->
      <button
        @click="emit('close')"
        aria-label="Close Lightbox"
        class="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
      >
        <X class="w-5 h-5" />
      </button>

      <!-- Image Area -->
      <div class="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black/60">
        <img
          :src="photo.src"
          :alt="photo.caption"
          class="max-h-[75vh] w-auto max-w-full object-contain"
        />
      </div>

      <!-- Caption & Details -->
      <div class="p-6 bg-slate-900/90 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <span class="inline-block text-xs font-mono font-bold text-accent-cyan px-2.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/50 mb-1.5">
            {{ photo.tag }}
          </span>
          <p class="text-sm font-medium text-white leading-relaxed">
            {{ photo.caption }}
          </p>
        </div>
        <button
          @click="emit('close')"
          class="shrink-0 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
        >
          Back to Portfolio
        </button>
      </div>
    </div>
  </div>
</template>
