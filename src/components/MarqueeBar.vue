<script setup>
const items = [
  'Python', 'Django & DRF', 'Laravel', 'PHP', 'Vue.js 3',
  'Celery Workers', 'RabbitMQ', 'Redis Caching', 'MySQL Indexing',
  '85+ Students Mentored', 'Asynchronous Queues', 'Docker',
  'Chennai, India', 'RESTful APIs', 'Flower Monitoring'
]
const doubled = [...items, ...items]
</script>

<template>
  <div class="marquee-wrapper py-3.5 my-8">
    <div class="marquee-track">
      <span
        v-for="(item, i) in doubled"
        :key="i"
        class="inline-flex items-center gap-4 text-xs font-mono font-medium tracking-wider uppercase text-slate-400 shrink-0 hover:text-cyan-400 transition-colors"
      >
        <span>{{ item }}</span>
        <span class="text-cyan-400 text-sm font-bold">◆</span>
      </span>
    </div>
  </div>
</template>
