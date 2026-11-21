<script setup>
const props = defineProps({
  photo: Object,
  isOpen: Boolean
})

const emit = defineEmits(['close'])
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen && photo"
      class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
      @click.self="emit('close')"
    >
      <div class="relative max-w-4xl w-full bg-[#0d1321] border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl">
        
        <!-- Close Button -->
        <button
          @click="emit('close')"
          class="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 flex items-center justify-center transition-all"
          aria-label="Close Lightbox"
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
        <div class="p-6 border-t border-slate-800 bg-[#0d1321] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
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
            class="btn-pill text-xs font-mono shrink-0"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  </Teleport>
</template>
