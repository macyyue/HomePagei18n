<script setup>
import ConfirmationPageHome from './components/ConfirmationPageHome.vue'
import ConfirmationPageNav from './components/ConfirmationPageNav.vue'
import ConfirmationPageFooter from './components/ConfirmationPageFooter.vue'
</script>

<template>
    <div>
        <ConfirmationPageNav />
        <ConfirmationPageHome />
        <RouterView />
        <ConfirmationPageFooter />
        <BackToTop />
    </div>
</template>