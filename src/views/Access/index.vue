<script setup>
import AccessHome from './components/AccessHome.vue'
import AccessNav from './components/AccessNav.vue'
import AccessFooter from './components/AccessFooter.vue'




</script>

<template>


<div>
  <AccessNav />
  <AccessHome />
  <RouterView />
  <AccessFooter />
  <BackToTop />

</div>

  

</template>