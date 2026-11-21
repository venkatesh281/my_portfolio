<script setup>
import { portfolioData } from '../data/portfolioData'
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Layers } from 'lucide-vue-next'

const experiences = portfolioData.experience
</script>

<template>
  <section id="experience" class="py-20 md:py-28 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950/60 border border-brand-800/50 text-brand-400 text-xs font-semibold uppercase tracking-wider">
          Work Journey
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Professional Engineering Experience
        </h2>
        <p class="text-slate-400 text-base leading-relaxed">
          Demonstrated track record of designing high-reliability backends, automated task queues, and performant database architectures for client & SaaS applications.
        </p>
      </div>

      <!-- Experience Timeline -->
      <div class="relative max-w-4xl mx-auto">
        <!-- Vertical Line -->
        <div class="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-500 via-indigo-500 to-slate-800 -translate-x-1/2 hidden md:block"></div>

        <div class="space-y-12">
          <div
            v-for="(exp, idx) in experiences"
            :key="exp.company"
            class="relative flex flex-col md:flex-row gap-8 items-start group"
          >
            <!-- Center Node (Desktop) -->
            <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-9 h-9 rounded-full bg-slate-900 border-2 border-brand-500 items-center justify-center text-brand-400 shadow-lg shadow-brand-500/20 group-hover:scale-110 transition-transform z-10">
              <Briefcase class="w-4 h-4" />
            </div>

            <!-- Content Card (Alternating sides) -->
            <div
              class="w-full md:w-[calc(50%-2rem)]"
              :class="idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'"
            >
              <div class="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/80 hover:border-brand-500/50 transition-all duration-300 shadow-xl group-hover:shadow-brand-500/5">
                
                <!-- Period & Type -->
                <div class="flex flex-wrap items-center justify-between gap-2 text-xs mb-3">
                  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-950/60 border border-brand-800/60 text-brand-300 font-semibold font-mono">
                    <Calendar class="w-3 h-3" /> {{ exp.period }}
                  </span>
                  <span class="text-slate-500 flex items-center gap-1 font-medium">
                    <MapPin class="w-3 h-3 text-slate-400" /> {{ exp.location }}
                  </span>
                </div>

                <!-- Role & Company -->
                <h3 class="text-xl font-extrabold text-white tracking-tight group-hover:text-brand-400 transition-colors">
                  {{ exp.role }}
                </h3>
                <div class="text-sm font-semibold text-accent-cyan mb-4">
                  {{ exp.company }}
                </div>

                <p class="text-xs text-slate-400 mb-4 leading-relaxed">
                  {{ exp.description }}
                </p>

                <!-- Highlights List -->
                <div class="space-y-2.5 mb-6">
                  <div
                    v-for="(hl, hIdx) in exp.highlights"
                    :key="hIdx"
                    class="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed"
                  >
                    <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{{ hl }}</span>
                  </div>
                </div>

                <!-- Tech Tags -->
                <div class="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  <span
                    v-for="t in exp.technologies"
                    :key="t"
                    class="px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium bg-slate-950/80 text-slate-300 border border-slate-800/80"
                  >
                    {{ t }}
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>
