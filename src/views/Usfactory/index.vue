<script setup>
import UsfactoryNav from '@/views/Usfactory/components/UsfactoryNav.vue'
import UsfactoryFooter from '@/views/Usfactory/components/UsfactoryFooter.vue'
import UsfactoryHome from '@/views/Usfactory/components/UsfactoryHome.vue'

</script>
<template>

<div>
  <UsfactoryNav />
  <RouterView />
  <UsfactoryHome />
  <UsfactoryFooter />
  <BackToTop />
</div>
</template>
