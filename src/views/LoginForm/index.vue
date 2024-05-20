<script setup>
import LoginFormHome from './components/LoginFormHome.vue'
import LoginFormNav from './components/LoginFormNav.vue'
// import LoginFormFooter from './components/LoginFormFooter.vue'
import PwForgotFooter from '@/components/PwForgot/PwForgotFooter.vue';

</script>

<template>
    <div>
        <LoginFormNav />
        <LoginFormHome />
        <RouterView />
        <PwForgotFooter />
        <BackToTop />
    </div>
</template>