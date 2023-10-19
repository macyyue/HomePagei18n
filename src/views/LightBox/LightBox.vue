
  
  <script>
  export default {
    data() {
      return {
        show: false,
        imageSrc: '',
      };
    },
    methods: {
      openLightbox(src) {
        this.imageSrc = src;
        this.show = true;
      },
      closeLightbox() {
        this.show = false;
      },
    },
  };
  </script>
  <template>
    <div v-if="show" class="lightbox">
      <div class="lightbox-content">
        <button @click="closeLightbox" class="close-button">CLOSE✖</button>
        <img :src="imageSrc" alt="图片">
      </div>
    </div>
  </template>
  
  <style scoped>
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
    background: #fff;
    padding: 20px;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  
  .close-button {
    position: fixed;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 23px;
    color: blue;
    margin: -27px -17px;
  }
  </style>
  