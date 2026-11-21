<script setup>
import { ref } from 'vue'
import { portfolioData } from '../data/portfolioData'
import { 
  GraduationCap, 
  Award, 
  Users, 
  Presentation, 
  CheckCircle2, 
  ExternalLink,
  Sparkles,
  Maximize2
} from 'lucide-vue-next'

const emit = defineEmits(['openPhoto'])

const m = portfolioData.mentorship

const selectPhoto = (photo) => {
  emit('openPhoto', photo)
}
</script>

<template>
  <section id="mentorship" class="py-20 md:py-28 relative bg-slate-950/60 overflow-hidden">
    <!-- Ambient Neon Accents -->
    <div class="absolute -top-24 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-24 left-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-accent-cyan text-xs font-semibold uppercase tracking-wider">
          <Sparkles class="w-3.5 h-3.5 text-cyan-400" />
          Featured Impact & Leadership
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Mentorship & Developer Education
        </h2>
        <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
          {{ m.headline }}
        </p>
      </div>

      <!-- Hero Story Banner: Partnership & Guest Lecture -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        
        <!-- Left: Partnership & Internship Overview -->
        <div class="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-accent-cyan">
              <Users class="w-6 h-6" />
            </div>
            <div>
              <div class="text-xs font-bold uppercase tracking-wider text-accent-cyan">Industry Initiative</div>
              <div class="text-xl font-bold text-white">85+ Students Trained & Certified</div>
            </div>
          </div>

          <p class="text-sm text-slate-300 leading-relaxed">
            In partnership between <span class="text-white font-semibold">Geometriccae Engineering Services</span> and <span class="text-cyan-400 font-semibold underline underline-offset-4 decoration-cyan-500/40">Digisailor</span>, I designed and conducted intensive full-stack internship training. Students built real-world web applications from scratch, learned production database modeling, and earned internship completion certifications.
          </p>

          <!-- Topics Taught Checklist -->
          <div class="space-y-3 pt-2">
            <div class="text-xs font-bold uppercase tracking-wider text-slate-400">Curriculum & Topics Covered:</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                v-for="topic in m.topicsTaught"
                :key="topic.name"
                class="p-3 rounded-xl bg-slate-900/80 border border-slate-800/70 hover:border-cyan-500/30 transition-colors"
              >
                <div class="text-xs font-bold text-white flex items-center gap-2 mb-1">
                  <CheckCircle2 class="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                  <span>{{ topic.name }}</span>
                </div>
                <div class="text-[11px] text-slate-400 pl-5.5">
                  {{ topic.detail }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Invited Speaker & Certificate Feature -->
        <div class="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/50 border border-amber-800/50 text-amber-400 text-xs font-bold">
              <Award class="w-4 h-4" />
              <span>Honored Guest Lecturer</span>
            </div>

            <h3 class="text-lg font-bold text-white leading-snug">
              {{ m.guestSpeaker.department }}
            </h3>

            <div class="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
              <div class="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">Seminar Session</div>
              <div class="text-sm font-bold text-accent-cyan">"{{ m.guestSpeaker.topic }}"</div>
            </div>

            <p class="text-xs text-slate-300 leading-relaxed">
              {{ m.guestSpeaker.recognition }}
            </p>
          </div>

          <!-- Highlight Certificate Preview Card -->
          <div
            @click="selectPhoto(m.gallery[0])"
            class="group cursor-pointer relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-lg hover:border-amber-400/60 transition-all"
          >
            <img
              :src="m.gallery[0].src"
              alt="Certificate of Appreciation"
              class="w-full h-44 object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-4">
              <div class="flex items-center justify-between w-full">
                <span class="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                  View Certificate of Appreciation
                </span>
                <span class="p-1.5 rounded-lg bg-black/60 text-white group-hover:bg-amber-500 transition-colors">
                  <Maximize2 class="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Photo Gallery Grid with Real Sessions -->
      <div class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
          <div>
            <h3 class="text-xl font-bold text-white tracking-tight">
              On-Campus & Classroom Mentoring Sessions
            </h3>
            <p class="text-xs text-slate-400">
              Real-world documentation of workshops, seminars, and hands-on coding labs led by Venkateshwaran.
            </p>
          </div>
          <span class="text-xs font-mono text-accent-cyan">
            Click any photo to expand
          </span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="(photo, idx) in m.gallery"
            :key="idx"
            @click="selectPhoto(photo)"
            class="group cursor-pointer relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900 shadow-md hover:border-accent-cyan/60 hover:shadow-cyan-500/10 hover:shadow-xl transition-all duration-300"
          >
            <div class="aspect-[4/3] overflow-hidden">
              <img
                :src="photo.src"
                :alt="photo.caption"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            <div class="p-3.5 space-y-1">
              <span class="inline-block text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-800 text-cyan-300">
                {{ photo.tag }}
              </span>
              <p class="text-xs text-slate-300 line-clamp-2 leading-snug group-hover:text-white transition-colors">
                {{ photo.caption }}
              </p>
            </div>

            <!-- Hover overlay icon -->
            <div class="absolute top-2 right-2 p-1.5 rounded-lg bg-slate-950/70 backdrop-blur-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 class="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
