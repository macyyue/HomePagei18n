<script setup>
import QuestionHome from './components/QuestionHome.vue'
import QuestionNav from './components/QuestionNav.vue'
import QuestionFooter from './components/QuestionFooter.vue'
</script>

<template>
    <div>
        <QuestionNav />
        <QuestionHome />
        <RouterView />
        <QuestionFooter />
        <BackToTop />
    </div>
</template>