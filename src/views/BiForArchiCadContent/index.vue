<script setup>
import BiForArchiCadContentHome from './components/BiForArchiCadContentHome.vue'
import BiForArchiCadContentNav from './components/BiForArchiCadContentNav.vue'
import BiForArchiFooter from '@/components/BiForArchiFooter/index.vue'
</script>

<template>
    <div>
        <BiForArchiCadContentNav />
        <BiForArchiCadContentHome />
        <RouterView />
        <BiForArchiFooter />
        <BackToTop />
    </div>
</template>