<script setup>

import CompanyHome from './components/CompanyHome.vue'
import CompanyNav from './components/CompanyNav.vue'
import CompanyFooter from './components/CompanyFooter.vue'

</script>

<template>
<div>
  <CompanyNav />
  <CompanyHome />
  <RouterView />
  <CompanyFooter />
  <BackToTop />

</div>

  

</template>