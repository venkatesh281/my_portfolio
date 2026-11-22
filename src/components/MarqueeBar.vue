<script setup>
const items = [
  'DJANGO & DRF',
  'CELERY WORKERS',
  'RABBITMQ',
  'REDIS CACHING',
  'LARAVEL',
  'VUE.JS 3',
  'MYSQL INDEXING',
  'ASYNCHRONOUS QUEUES',
  'DOCKER',
  'FLOWER MONITORING',
  '85+ STUDENTS MENTORED',
  'RESTFUL APIS',
  'CHENNAI, INDIA'
]
const doubled = [...items, ...items]
</script>

<template>
  <div class="w-full bg-[#f6f4ee] border-y border-[rgba(18,19,22,0.09)] py-3 overflow-hidden select-none">
    <div class="marquee-track flex items-center whitespace-nowrap">
      <span
        v-for="(item, i) in doubled"
        :key="i"
        class="inline-flex items-center gap-4 text-xs font-mono font-medium tracking-wider uppercase text-[#525866] shrink-0 mx-4"
      >
        <span>{{ item }}</span>
        <span class="text-[#0038ff] text-xs">◆</span>
      </span>
    </div>
  </div>
</template>

<style scoped>
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 35s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}
</style>