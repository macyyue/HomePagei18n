<script setup>
import LoginNewMemberHome from './components/LoginNewMemberHome.vue'
import LoginNewMemberNav from './components/LoginNewMemberNav.vue'
import LoginNewMemberFooter from './components/LoginNewMemberFooter.vue'
</script>

<template>
    <div>
        <LoginNewMemberNav />
        <LoginNewMemberHome />
        <RouterView />
        <LoginNewMemberFooter />
        <BackToTop />
    </div>
</template>