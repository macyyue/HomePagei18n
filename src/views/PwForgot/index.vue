<script setup>
import PwForgotHome from './components/PwForgotHome.vue'
import PwForgotNav from './components/PwForgotNav.vue'
import PwForgotFooter from '@/components/PwForgot/PwForgotFooter.vue';
// import PwForgotFooter from './components/PwForgotFooter.vue'

</script>

<template>
    <div>
        <PwForgotNav />
        <PwForgotHome />
        <RouterView />
        <PwForgotFooter />
        <BackToTop />
    </div>
</template>