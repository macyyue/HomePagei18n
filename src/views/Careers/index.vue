<script setup>
import CareersNav from '@/views/Careers/components/CareersNav.vue'
import CareersFooter from '@/views/Careers/components/CareersFooter.vue'
import CareersHome from '@/views/Careers/components/CareersHome.vue'
</script>
<template>
<div>
  <CareersNav />
  <RouterView />
  <CareersHome />
  <CareersFooter />
  <BackToTop />
</div>
</template>