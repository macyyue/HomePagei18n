<script setup>
import { ref } from 'vue';
import HomeLogo from './components/HomeLogo.vue'
import HomeNav from './components/HomeNav.vue'
import HomeGoods from './components/HomeGoods.vue'
import HomeAboutus from './components/HomeAboutus.vue'
import HomeNews from './components/HomeNews.vue'
import HomeJoinUs from './components/HomeJoinUs.vue'
import HomeFooter from '@/components/HomeFooter/index.vue'

const showLogo = ref(true);

</script>
<template>
  <div>
  <HomeLogo v-if="showLogo" @logo-animation-end="showLogo = false" :_showLogo="showLogo" />
  <div v-show="!showLogo">
  <HomeNav />
  <RouterView />
  <HomeGoods />
  <HomeNews />
  <HomeAboutus />
  <HomeJoinUs />
  <HomeFooter />
  <BackToTop />
</div>
</div>
</template>
<style>
</style>