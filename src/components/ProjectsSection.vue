<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { portfolioData } from '../data/portfolioData'

gsap.registerPlugin(ScrollTrigger)

const { projects } = portfolioData
const sectionRef = ref(null)
const selectedFilter = ref('all')
let ctx = null

const filteredProjects = computed(() => {
  if (selectedFilter.value === 'client') {
    return projects.filter(p => p.isClientProject)
  }
  if (selectedFilter.value === 'opensource') {
    return projects.filter(p => !p.isClientProject)
  }
  return projects
})

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion || !sectionRef.value) return

  ctx = gsap.context(() => {
    gsap.fromTo(
      '.project-spread',
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )
  }, sectionRef.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <section
    id="projects"
    ref="sectionRef"
    class="py-14 sm:py-16 md:py-20 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto bg-[#f6f4ee] text-[#121316] select-text"
  >
    <!-- Section Top Rule -->
    <div class="w-full h-[1px] bg-[rgba(18,19,22,0.09)] mb-12"></div>

    <!-- Section Header (Editorial Style) -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
      <div class="space-y-3.5 max-w-2xl">
        <div class="text-xs font-mono font-semibold tracking-widest text-[#0038ff] uppercase flex items-center gap-2">
          <span class="w-2 h-[1px] bg-[#0038ff]"></span>
          <span>/05 Selected Work &amp; Case Studies</span>
        </div>

        <h2 class="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#121316] tracking-tight leading-tight">
          Architectural Spreads.
          <span class="block text-2xl sm:text-3xl font-normal text-[#525866] italic pt-1">
            Production systems, client platforms &amp; distributed prototypes.
          </span>
        </h2>

        <p class="text-sm sm:text-base text-[#525866] font-sans leading-relaxed pt-1">
          Detailed technical blueprints and architectural highlights for four core production systems.
        </p>
      </div>

      <!-- Filter Controls -->
      <div class="flex flex-wrap gap-2 shrink-0">
        <button
          @click="selectedFilter = 'all'"
          class="px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer"
          :class="selectedFilter === 'all' ? 'bg-[#0038ff] text-white font-bold' : 'bg-white border border-[rgba(18,19,22,0.12)] text-[#525866] hover:text-[#121316]'"
        >
          All ({{ projects.length }})
        </button>
        <button
          @click="selectedFilter = 'client'"
          class="px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer"
          :class="selectedFilter === 'client' ? 'bg-[#0038ff] text-white font-bold' : 'bg-white border border-[rgba(18,19,22,0.12)] text-[#525866] hover:text-[#121316]'"
        >
          Client Production
        </button>
        <button
          @click="selectedFilter = 'opensource'"
          class="px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer"
          :class="selectedFilter === 'opensource' ? 'bg-[#0038ff] text-white font-bold' : 'bg-white border border-[rgba(18,19,22,0.12)] text-[#525866] hover:text-[#121316]'"
        >
          Open Source &amp; Research
        </button>
      </div>
    </div>

    <!-- Alternating Architectural Spreads (Zero Generic Card Grids) -->
    <div class="space-y-12">
      <div
        v-for="(proj, idx) in filteredProjects"
        :key="proj.title"
        class="project-spread rounded-2xl overflow-hidden transition-all duration-300"
        :class="idx === 0 && selectedFilter === 'all'
          ? 'bg-[#121316] text-[#fbfbfb] p-8 md:p-10 shadow-2xl border border-[rgba(255,255,255,0.08)]'
          : 'bg-[#fdfcf9] text-[#121316] p-8 md:p-10 border border-[rgba(18,19,22,0.1)] shadow-[0_2px_12px_rgba(18,19,22,0.03)]'"
      >
        <div
          class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          :class="idx % 2 === 1 ? 'lg:flex-row-reverse' : ''"
        >
          <!-- Text Specifications Column -->
          <div
            class="space-y-6"
            :class="idx % 2 === 1 ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6'"
          >
            <!-- Eyebrow & Badges -->
            <div class="flex flex-wrap items-center justify-between gap-3">
              <span
                class="font-mono text-xs font-bold uppercase tracking-wider"
                :class="idx === 0 && selectedFilter === 'all' ? 'text-[#60a5fa]' : 'text-[#0038ff]'"
              >
                0{{ idx + 1 }} // {{ proj.category }}
              </span>
              <span
                class="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider font-semibold"
                :class="idx === 0 && selectedFilter === 'all'
                  ? 'bg-white/10 text-white border border-white/15'
                  : 'bg-[rgba(18,19,22,0.05)] text-[#525866] border border-[rgba(18,19,22,0.1)]'"
              >
                {{ proj.isClientProject ? 'Client Confidential' : 'Public Sandbox' }}
              </span>
            </div>

            <!-- Title & Client -->
            <div>
              <h3
                class="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight"
                :class="idx === 0 && selectedFilter === 'all' ? 'text-white' : 'text-[#121316]'"
              >
                {{ proj.title }}
              </h3>
              <p
                class="font-mono text-xs mt-1.5"
                :class="idx === 0 && selectedFilter === 'all' ? 'text-[#94a3b8]' : 'text-[#525866]'"
              >
                Client: <strong class="font-sans" :class="idx === 0 && selectedFilter === 'all' ? 'text-white' : 'text-[#121316]'">{{ proj.client }}</strong>
              </p>
            </div>

            <!-- Description -->
            <p
              class="text-sm font-sans leading-relaxed"
              :class="idx === 0 && selectedFilter === 'all' ? 'text-[#cbd5e1]' : 'text-[#525866]'"
            >
              {{ proj.description }}
            </p>

            <!-- Verbatim Highlights -->
            <ul class="space-y-2.5 text-xs sm:text-sm font-sans leading-relaxed">
              <li
                v-for="hl in proj.highlights"
                :key="hl"
                class="flex items-start gap-3"
              >
                <span
                  class="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                  :class="idx === 0 && selectedFilter === 'all' ? 'bg-[#60a5fa]' : 'bg-[#0038ff]'"
                ></span>
                <span :class="idx === 0 && selectedFilter === 'all' ? 'text-[#e2e8f0]' : 'text-[#121316]'">
                  {{ hl }}
                </span>
              </li>
            </ul>

            <!-- Tech Badges -->
            <div class="pt-4 border-t space-y-2" :class="idx === 0 && selectedFilter === 'all' ? 'border-white/10' : 'border-[rgba(18,19,22,0.08)]'">
              <span class="text-[10px] font-mono uppercase tracking-wider block font-semibold" :class="idx === 0 && selectedFilter === 'all' ? 'text-[#94a3b8]' : 'text-[#666d7e]'">
                Technology Coordinates
              </span>
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="t in proj.tech"
                  :key="t"
                  class="px-2.5 py-1 text-xs font-mono rounded"
                  :class="idx === 0 && selectedFilter === 'all'
                    ? 'bg-white/10 text-white border border-white/10'
                    : 'bg-white text-[#121316] border border-[rgba(18,19,22,0.1)] shadow-sm'"
                >
                  {{ t }}
                </span>
              </div>
            </div>

            <!-- Actions Row: GitHub & Inquire Architecture -->
            <div class="flex flex-wrap items-center gap-4 pt-2">
              <a
                v-if="proj.github"
                :href="proj.github"
                target="_blank"
                rel="noopener noreferrer"
                class="text-xs font-mono font-semibold flex items-center gap-1.5 hover:underline"
                :class="idx === 0 && selectedFilter === 'all' ? 'text-[#60a5fa]' : 'text-[#0038ff]'"
              >
                <span>GitHub Repository</span>
                <span>↗</span>
              </a>

              <a
                href="#contact"
                class="text-xs font-mono transition-colors ml-auto flex items-center gap-1"
                :class="idx === 0 && selectedFilter === 'all' ? 'text-[#94a3b8] hover:text-white' : 'text-[#666d7e] hover:text-[#121316]'"
              >
                <span>Inquire Architecture</span>
                <span>↘</span>
              </a>
            </div>
          </div>

          <!-- Architectural Diagram Column (Typographic & Vector Schema) -->
          <div
            class="lg:col-span-6 w-full"
            :class="idx % 2 === 1 ? 'lg:order-1' : ''"
          >
            <!-- Diagram 1: GES CRM (Lead State Machine & Schema) -->
            <div
              v-if="proj.title === 'GES CRM Platform'"
              class="p-6 rounded-xl border font-mono text-xs space-y-4"
              :class="idx === 0 && selectedFilter === 'all' ? 'bg-[#191b20] border-white/10 text-[#e2e8f0]' : 'bg-white border-[rgba(18,19,22,0.1)] text-[#121316]'"
            >
              <div class="flex items-center justify-between pb-3 border-b" :class="idx === 0 && selectedFilter === 'all' ? 'border-white/10 text-[#94a3b8]' : 'border-[rgba(18,19,22,0.08)] text-[#666d7e]'">
                <span class="font-bold text-[11px] text-[#60a5fa]">STATE MACHINE: LEAD &amp; DEAL PIPELINE</span>
                <span class="text-[10px]">MVC ARCHITECTURE</span>
              </div>
              <div class="space-y-3 font-sans text-xs">
                <div class="p-3 rounded-lg flex items-center justify-between border" :class="idx === 0 && selectedFilter === 'all' ? 'bg-white/5 border-white/10' : 'bg-[#fcfbf8] border-[rgba(18,19,22,0.08)]'">
                  <span class="font-mono text-[#60a5fa] font-bold">01</span>
                  <span class="font-semibold">Lead Capture</span>
                  <span class="text-[11px] text-[#94a3b8]">Inbound AJAX Entry</span>
                </div>
                <div class="flex justify-center text-xs opacity-60">↓ Role-Based Routing (Admin / Manager / Exec)</div>
                <div class="p-3 rounded-lg flex items-center justify-between border" :class="idx === 0 && selectedFilter === 'all' ? 'bg-white/5 border-white/10' : 'bg-[#fcfbf8] border-[rgba(18,19,22,0.08)]'">
                  <span class="font-mono text-[#60a5fa] font-bold">02</span>
                  <span class="font-semibold">Pipeline Qualification</span>
                  <span class="text-[11px] text-[#94a3b8]">Normalized Deal Stages</span>
                </div>
                <div class="flex justify-center text-xs opacity-60">↓ Server-Side Paginated Query</div>
                <div class="p-3 rounded-lg flex items-center justify-between border" :class="idx === 0 && selectedFilter === 'all' ? 'bg-white/5 border-white/10' : 'bg-[#fcfbf8] border-[rgba(18,19,22,0.08)]'">
                  <span class="font-mono text-[#60a5fa] font-bold">03</span>
                  <span class="font-semibold">Reporting &amp; CSV Engine</span>
                  <span class="text-[11px] text-[#94a3b8]">Real-time Export</span>
                </div>
              </div>
            </div>

            <!-- Diagram 2: Sonashi Ticket Management (Field Operations Dispatch) -->
            <div
              v-else-if="proj.title === 'Sonashi Service Ticket Management'"
              class="p-6 rounded-xl border bg-white border-[rgba(18,19,22,0.1)] text-[#121316] font-mono text-xs space-y-4 shadow-sm"
            >
              <div class="flex items-center justify-between pb-3 border-b border-[rgba(18,19,22,0.08)] text-[#666d7e]">
                <span class="font-bold text-[11px] text-[#0038ff]">FIELD WORKFLOW: REPAIR DISPATCH</span>
                <span class="text-[10px]">DUBAI / UAE SERVICE</span>
              </div>
              <div class="space-y-3 font-sans text-xs">
                <div class="p-3 rounded-lg flex items-center justify-between bg-[#fcfbf8] border border-[rgba(18,19,22,0.08)]">
                  <span class="font-mono text-[#0038ff] font-bold">STEP 1</span>
                  <span class="font-semibold">Customer Ticket Raised</span>
                  <span class="text-[11px] text-[#525866]">Status: Open</span>
                </div>
                <div class="flex justify-center text-xs text-[#666d7e]">↓ Technician Auto-Assignment</div>
                <div class="p-3 rounded-lg flex items-center justify-between bg-[#fcfbf8] border border-[rgba(18,19,22,0.08)]">
                  <span class="font-mono text-[#0038ff] font-bold">STEP 2</span>
                  <span class="font-semibold">Field Inspection &amp; Sign</span>
                  <span class="text-[11px] text-[#525866]">Camera &amp; Signature</span>
                </div>
                <div class="flex justify-center text-xs text-[#666d7e]">↓ Automated Invoicing</div>
                <div class="p-3 rounded-lg flex items-center justify-between bg-[#fcfbf8] border border-[rgba(18,19,22,0.08)]">
                  <span class="font-mono text-[#0038ff] font-bold">STEP 3</span>
                  <span class="font-semibold">PDF Receipt &amp; Closure</span>
                  <span class="text-[11px] text-[#525866]">Status: Resolved</span>
                </div>
              </div>
            </div>

            <!-- Diagram 3: Student-Teacher Spring MVC Portal -->
            <div
              v-else-if="proj.title === 'Student-Teacher Spring MVC Portal'"
              class="p-6 rounded-xl border bg-white border-[rgba(18,19,22,0.1)] text-[#121316] font-mono text-xs space-y-4 shadow-sm"
            >
              <div class="flex items-center justify-between pb-3 border-b border-[rgba(18,19,22,0.08)] text-[#666d7e]">
                <span class="font-bold text-[11px] text-[#0038ff]">MULTI-TIER ARCHITECTURE: SPRING MVC</span>
                <span class="text-[10px]">YADAVA COLLEGE</span>
              </div>
              <div class="space-y-2.5 font-sans text-xs">
                <div class="p-3 rounded-lg bg-[#fcfbf8] border border-[rgba(18,19,22,0.08)]">
                  <p class="font-mono text-[10px] text-[#0038ff] font-bold">PRESENTATION LAYER</p>
                  <p class="font-semibold text-xs mt-0.5">JSP Views &amp; Responsive Web UI</p>
                </div>
                <div class="p-3 rounded-lg bg-[#fcfbf8] border border-[rgba(18,19,22,0.08)]">
                  <p class="font-mono text-[10px] text-[#0038ff] font-bold">SECURITY FILTER CHAIN</p>
                  <p class="font-semibold text-xs mt-0.5">Spring Security (BCrypt Encryption + RBAC)</p>
                </div>
                <div class="p-3 rounded-lg bg-[#fcfbf8] border border-[rgba(18,19,22,0.08)]">
                  <p class="font-mono text-[10px] text-[#0038ff] font-bold">SERVICE &amp; PERSISTENCE LAYER</p>
                  <p class="font-semibold text-xs mt-0.5">Spring @Service Transactions + MySQL Connection Pool</p>
                </div>
              </div>
            </div>

            <!-- Diagram 4: Asynchronous Queue & Caching Sandbox -->
            <div
              v-else
              class="p-6 rounded-xl border bg-white border-[rgba(18,19,22,0.1)] text-[#121316] font-mono text-xs space-y-4 shadow-sm"
            >
              <div class="flex items-center justify-between pb-3 border-b border-[rgba(18,19,22,0.08)] text-[#666d7e]">
                <span class="font-bold text-[11px] text-[#0038ff]">TOPOLOGY: DECOUPLED ASYNC WORKERS</span>
                <span class="text-[10px]">DOCKER ENVIRONMENT</span>
              </div>
              <div class="space-y-3 font-sans text-xs">
                <div class="p-3 rounded-lg flex items-center justify-between bg-[#fcfbf8] border border-[rgba(18,19,22,0.08)]">
                  <span class="font-mono text-[#0038ff] font-bold">INGEST</span>
                  <span class="font-semibold">Django HTTP Endpoint</span>
                  <span class="text-[11px] text-[#525866]">Fast 202 Accepted</span>
                </div>
                <div class="flex justify-center text-xs text-[#666d7e]">↓ Decoupled Task Delivery</div>
                <div class="p-3 rounded-lg flex items-center justify-between bg-[#fcfbf8] border border-[rgba(18,19,22,0.08)]">
                  <span class="font-mono text-[#0038ff] font-bold">BROKER</span>
                  <span class="font-semibold">RabbitMQ Message Exchange</span>
                  <span class="text-[11px] text-[#525866]">Guaranteed Delivery</span>
                </div>
                <div class="flex justify-center text-xs text-[#666d7e]">↓ Concurrent Processing &amp; Caching</div>
                <div class="p-3 rounded-lg flex items-center justify-between bg-[#fcfbf8] border border-[rgba(18,19,22,0.08)]">
                  <span class="font-mono text-[#0038ff] font-bold">STORE</span>
                  <span class="font-semibold">Redis Sub-10ms Cache</span>
                  <span class="text-[11px] text-[#525866]">Worker Result State</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  </section>
</template>
