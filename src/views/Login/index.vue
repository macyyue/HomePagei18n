<script setup>
import LoginHome from './components/LoginHome.vue'
import LoginNav from './components/LoginNav.vue'
import LoginFooter from './components/LoginFooter.vue'
</script>

<template>
    <div>
        <LoginNav />
        <LoginHome />
        <RouterView />
        <LoginFooter />
        <BackToTop />
    </div>
</template>