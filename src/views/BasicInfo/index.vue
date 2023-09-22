<script setup>
import BasicInfoHome from './components/BasicInfoHome.vue'
import BasicInfoNav from './components/BasicInfoNav.vue'
import BasicInfoFooter from './components/BasicInfoFooter.vue'

</script>

<template>
    <div>

        <BasicInfoNav />
        <BasicInfoHome />
        <RouterView />
        <BasicInfoFooter />
        <BackToTop />
    </div>
</template>