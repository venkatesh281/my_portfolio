<script setup>
const items = [
  'Python', 'Django', 'Laravel', 'PHP', 'Vue.js 3',
  'Celery', 'RabbitMQ', 'Redis', 'MySQL', 'Full Stack Developer',
  'Technical Mentor', 'Backend APIs', 'REST', 'Async Architecture',
  'Chennai', 'India', '85+ Students', 'CodeIgniter',
]
const doubled = [...items, ...items]
</script>

<template>
  <div class="marquee-wrapper py-4 my-10">
    <div class="marquee-track gap-10">
      <span
        v-for="(item, i) in doubled"
        :key="i"
        class="inline-flex items-center gap-5 text-xs font-mono uppercase tracking-widest text-[#6b6b6b] shrink-0"
      >
        {{ item }}
        <span class="text-[#c8ff00] text-lg leading-none">×</span>
      </span>
    </div>
  </div>
</template>
