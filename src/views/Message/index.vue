<script setup>
import MessageNav from '@/views/Message/components/MessageNav.vue'
import MessageFooter from '@/views/Message/components/MessageFooter.vue'
import MessageHome from '@/views/Message/components/MessageHome.vue'

</script>
<template>

<div>
  <MessageNav />
  <RouterView />
  <MessageHome />
  <MessageFooter />
  <BackToTop />
</div>
</template>
