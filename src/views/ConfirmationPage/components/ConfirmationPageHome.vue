<template>
    <div>
      <h2>確認ページ</h2>
      
      <!-- 显示用户信息 -->
      <h2>漢字氏名：{{ userInfo.kanji_sei }}{{ userInfo.kanji_na }}</h2>

      <!-- 显示其他用户信息 -->
  
      <!-- 其他页面内容 -->
    </div>
  </template>
  
  <script>
import { onMounted, ref} from 'vue';

export default {
  setup() {
    const userInfo = ref({});

    onMounted(() => {
      const userInfoStr = this.$route.query.userInfo;
      if (userInfoStr) {
        userInfo.value = JSON.parse(userInfoStr);
      }
    });

    return {
      userInfo,
    };
  },
};
  </script>
  