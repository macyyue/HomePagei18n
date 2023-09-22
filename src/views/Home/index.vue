<script setup>
import { ref } from 'vue';
import HomeLogo from './components/HomeLogo.vue'
import HomeNav from './components/HomeNav.vue'
import HomeGoods from './components/HomeGoods.vue'
import HomeAboutus from './components/HomeAboutus.vue'
import HomeNews from './components/HomeNews.vue'
import HomeSlider from './components/HomeSlider.vue'
import HomeFooter from './components/HomeFooter.vue'
const showLogo = ref(true);
</script>

<template>

<HomeLogo v-if="showLogo" @logo-animation-end="showLogo = false" :_showLogo="showLogo" />
    <div v-show="!showLogo">
  <HomeNav />
  <RouterView />
  <HomeGoods />
  <HomeNews />
  <HomeAboutus />
  <HomeSlider />
  <HomeFooter />
  <BackToTop />
</div>
</template>
<style>
/* @media (max-width: 767px) {
  
  * {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }
} */
</style>