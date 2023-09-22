<template>
    <a v-if="scrollPosition > 400" class="back-to-top" @click="scrollToTop" aria-label="上へ戻る"></a>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const scrollPosition = ref(0);
  
  const handleScroll = () => {
    scrollPosition.value = window.scrollY;
  };
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  </script>
  
  <style>
.back-to-top {
  position: fixed;
    right: 10px;
    bottom: 25px;
    z-index: 15;
    width: 48px;
    height: 48px;
    background: #dbdbdb;
    border-radius: 50%;
    border: 1px solid #dbdbdb;
    transform: rotate(-90deg);
    box-shadow: -2px 2px 2px 1px rgba(0,0,0,.06);
    
}
.back-to-top:hover {
    border: 1px solid #efefef;
}
a:hover {
    opacity: 1;
}
.back-to-top:hover:before {
    right: 8px;
    background-color: #585858;
}

.back-to-top:hover:after {
    right: 8px;
}

  .back-to-top::before {
    background-color: #333;
    width: 15px;
    height: 1px;
    margin-top: 0;
   
}
.back-to-top:after {
    width: 7px;
    height: 7px;
    margin-top: -3px;
    transform: rotate(45deg);
    border-top: 1px solid #333;
    border-right: 1px solid #333;
    display: inline-block;
    vertical-align: middle;
    
 

} 
.back-to-top:after, .back-to-top:before {
    position: absolute;
    top: 50%;
    right: 15px;
    content: "";
    transition: all .4s;
} 

</style>