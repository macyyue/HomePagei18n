<script setup>
    import RecruitNav from '@/views/Recruit/components/RecruitNav.vue'
    import RecruitFooter from '@/views/Recruit/components/RecruitFooter.vue'
    import RecruitHome from '@/views/Recruit/components/RecruitHome.vue'
</script>
<template>
<div>
  <RecruitNav />
  <RouterView />
  <RecruitHome />
  <RecruitFooter />
  <BackToTop />
</div>
</template>