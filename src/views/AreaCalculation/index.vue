<script setup>
import AreaCalculationHome from './components/AreaCalculationHome.vue'
import AreaCalculationNav from './components/AreaCalculationNav.vue'
import BiForArchiFooter from '@/components/BiForArchiFooter/index.vue'

</script>

<template>
    <div>
        <AreaCalculationNav />
        <AreaCalculationHome />
        <RouterView />
        <BiForArchiFooter />
        <BackToTop />
    </div>
</template>