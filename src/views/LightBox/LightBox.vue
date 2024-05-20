<script>
export default {
  props: {
    imageList: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      show: false,
      imageSrc: '',
      currentIndex: 0,
    };
  },
  methods: {
    openLightbox(src, index) {
      this.imageSrc = src;
      this.currentIndex = index;
      this.show = true;
    },
    closeLightbox() {
      this.show = false;
    },
    prevImage() {
      if (this.imageList && this.imageList.length > 0) {
        this.currentIndex = (this.currentIndex - 1 + this.imageList.length) % this.imageList.length;
        this.imageSrc = this.imageList[this.currentIndex];
      }
    },
    nextImage() {
      if (this.imageList && this.imageList.length > 0) {
        this.currentIndex = (this.currentIndex + 1) % this.imageList.length;
        this.imageSrc = this.imageList[this.currentIndex];
      }
    }
  },
};
</script>
<template>
  <div v-if="show" class="lightbox">
    <div class="lightbox-content fade-in" >
      <button @click="closeLightbox" class="close-button">CLOSE✖</button>
      <button @click="prevImage" class="prev-button">&lt;</button>
      <img :src="imageSrc" alt="图片" class="responsive-image">
      <button @click="nextImage" class="next-button">&gt;</button>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeInFromTop {
  0%{
    opacity: 0;
    transform: translateY(-50px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
  
}
.fade-in{
  animation: fadeInFromTop 0.7s ease-out;
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.lightbox-content {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 70px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 90%;
  max-height: 90%;
}

.responsive-image {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
}

.close-button {
  position: absolute;
  top: 5px;
  left: 5px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 23px;
  color: #000;
}

.prev-button,
.next-button {
  width: 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #000;
  background: #dbdbdb;
  border-radius: 3px;
}

</style>