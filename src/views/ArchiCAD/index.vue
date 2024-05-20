<script setup>
import ArchiCADHome from './components/ArchiCADHome.vue'
import ArchiCADNav from './components/ArchiCADNav.vue'
import BiForArchiFooter from '@/components/BiForArchiFooter/index.vue'

</script>

<template>
    <div>
        <ArchiCADNav />
        <ArchiCADHome />
        <RouterView />
        <BiForArchiFooter />
        <BackToTop />
    </div>
</template>