<script setup>
import LoginFormHome from './components/LoginFormHome.vue'
import LoginFormNav from './components/LoginFormNav.vue'
import LoginFormFooter from './components/LoginFormFooter.vue'
</script>

<template>
    <div>
        <LoginFormNav />
        <LoginFormHome />
        <RouterView />
        <LoginFormFooter />
        <BackToTop />
    </div>
</template>