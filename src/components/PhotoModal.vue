<script setup>
import { X } from 'lucide-vue-next'

const props = defineProps({ photo: Object, isOpen: Boolean })
const emit = defineEmits(['close'])
</script>

<template>
  <Teleport to="body">
    <transition
      enter-active-class="transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
      leave-active-class="transition-all duration-300 ease-in"
      enter-from-class="opacity-0 scale-95"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isOpen && photo"
        class="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 bg-black/92 backdrop-blur-sm"
        @click.self="emit('close')"
      >
        <div class="relative max-w-5xl w-full bg-[#0d0d0d] border border-white/[0.08]">

          <!-- Close -->
          <button
            @click="emit('close')"
            class="absolute top-4 right-4 z-10 w-9 h-9 border border-white/[0.1] flex items-center justify-center text-[#6b6b6b] hover:text-[#c8ff00] hover:border-[#c8ff00]/30 transition-colors"
            data-hover
            aria-label="Close"
          >
            <X class="w-4 h-4" />
          </button>

          <!-- Image -->
          <img
            :src="photo.src"
            :alt="photo.caption"
            class="w-full max-h-[75vh] object-contain"
          />

          <!-- Caption -->
          <div class="border-t border-white/[0.06] p-5 flex items-center justify-between gap-4">
            <div>
              <span class="mentor-badge mb-2 inline-flex">{{ photo.tag }}</span>
              <p class="text-xs text-[#6b6b6b] leading-relaxed">{{ photo.caption }}</p>
            </div>
            <button @click="emit('close')" class="btn-pill text-xs shrink-0" data-hover>
              <span>Close</span>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>
