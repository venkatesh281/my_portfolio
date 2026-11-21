<script setup>
import { portfolioData } from '../data/portfolioData'
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Database, 
  Smartphone, 
  GraduationCap, 
  Cpu, 
  CheckCircle2, 
  ShieldCheck,
  Lock
} from 'lucide-vue-next'

const iconMap = {
  Database,
  Smartphone,
  GraduationCap,
  Cpu
}

const projects = portfolioData.projects
</script>

<template>
  <section id="projects" class="py-20 md:py-28 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-950/60 border border-brand-800/50 text-brand-400 text-xs font-semibold uppercase tracking-wider">
          Featured Engineering
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Enterprise Systems & Architectures
        </h2>
        <p class="text-slate-400 text-base leading-relaxed">
          Production systems engineered for operational scale, role-based workflows, and asynchronous background pipelines.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="proj in projects"
          :key="proj.title"
          class="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800/80 hover:border-brand-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between group"
        >
          <div class="space-y-5">
            <!-- Top Bar: Category & Confidentiality/Repo Tag -->
            <div class="flex items-center justify-between gap-2">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-950/70 border border-brand-800/60 text-brand-300">
                <component :is="iconMap[proj.icon] || FolderGit2" class="w-3.5 h-3.5" />
                {{ proj.category }}
              </span>

              <div class="flex items-center gap-2">
                <span
                  v-if="proj.isClientProject"
                  class="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400"
                >
                  <Lock class="w-3 h-3 text-amber-400" />
                  Client Confidential
                </span>
                <span
                  v-else
                  class="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-emerald-400"
                >
                  <ShieldCheck class="w-3 h-3" />
                  Open Source
                </span>
              </div>
            </div>

            <!-- Title & Client/Context -->
            <div>
              <h3 class="text-2xl font-bold text-white group-hover:text-brand-400 transition-colors">
                {{ proj.title }}
              </h3>
              <div class="text-xs font-mono text-accent-cyan mt-1">
                Context: {{ proj.client }}
              </div>
            </div>

            <!-- Description -->
            <p class="text-sm text-slate-400 leading-relaxed">
              {{ proj.description }}
            </p>

            <!-- Key Engineering Highlights -->
            <div class="space-y-2 pt-2">
              <div class="text-xs font-bold uppercase tracking-wider text-slate-500">Key Deliverables:</div>
              <div
                v-for="(hl, hIdx) in proj.highlights"
                :key="hIdx"
                class="flex items-start gap-2 text-xs text-slate-300 leading-relaxed"
              >
                <CheckCircle2 class="w-3.5 h-3.5 text-accent-cyan shrink-0 mt-0.5" />
                <span>{{ hl }}</span>
              </div>
            </div>
          </div>

          <!-- Bottom: Tech Stack & Actions -->
          <div class="pt-6 mt-6 border-t border-slate-800/80 space-y-4">
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="t in proj.tech"
                :key="t"
                class="px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium bg-slate-900 text-slate-300 border border-slate-800"
              >
                {{ t }}
              </span>
            </div>

            <div class="flex items-center justify-between pt-1">
              <a
                :href="proj.github"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-brand-400 transition-colors"
              >
                <Github class="w-4 h-4" />
                <span>{{ proj.isClientProject && !proj.github.includes('sonasi') ? 'View GitHub Profile' : 'Inspect Repository' }}</span>
                <ExternalLink class="w-3 h-3" />
              </a>

              <a
                href="#contact"
                class="text-xs font-semibold text-accent-cyan hover:underline"
              >
                Inquire Details &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>

      <!-- More on GitHub Callout -->
      <div class="mt-12 text-center">
        <a
          href="https://github.com/venkatesh281"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-200 hover:text-white hover:border-slate-700 hover:bg-slate-850 transition-all shadow-lg"
        >
          <Github class="w-4 h-4 text-brand-400" />
          <span>Explore All Repositories on GitHub (@venkatesh281)</span>
          <ExternalLink class="w-3.5 h-3.5 text-slate-400" />
        </a>
      </div>

    </div>
  </section>
</template>
