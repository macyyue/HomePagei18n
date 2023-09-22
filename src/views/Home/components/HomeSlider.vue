<script>
/* @vite-ignore */
import slider01 from "@/assets/image/slider01.jpg";   
import slider02 from "@/assets/image/slider02.jpg";    
import slider03 from "@/assets/image/slider03.jpg"; 
import slider04 from "@/assets/image/slider04.jpg";
export default{
 data(){   

        return {
        
        sliderData : [
            {source:"slider01"},
            {source:"slider02"},
            {source:"slider03"},
            {source:"slider04"},
        ]
            }
  },
  methods:{ 
    getImageSource(value) {
      const imageVariables = [slider01, slider02, slider03, slider04];
      const index = value % imageVariables.length;
      return imageVariables[index];
    },  
    
    async ImgSource(value) {
        if (value >= 0 && value < this.sliderData.length) {
        try {
          const imagePath = await import(
            `@/assets/image/${this.sliderData[value].source}.jpg`
          );
          return imagePath.default;
        } catch (error) {
          console.error("未找到图片：", error);
          return ""; // 返回备用图片或处理错误
        }
      } else {
        console.error("无效的图片索引：", value);
        return ""; // 返回备用图片或处理错误
        }
      },  
    }
}

</script>

<template>
   
<div class="slider">
    <div class="slider-wrapper">      
        <div v-for="(item, index) in sliderData" :key="index" >
           <img :src=getImageSource(index) :alt="'slider ' + (index + 1)">
        </div>
   </div>
   <h3 class="homeHeadline1">
    JOIN US!
    <br>
    <small>ユーズファクトリで働きませんか？</small>
   </h3>
<div class="adopt">
  <router-link to="/Recruit">
        <strong>採用情報はこちら</strong>
  </router-link>
   
</div>

</div>
</template>


<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.slider {
    position: relative;
    width: 100%;
    height: 540px;
    background-color: #999;
    overflow: hidden;
}

.slider-wrapper img {
    display: block;
    transform: translate(5%);
    width: 450px;
    height: 300px;
    margin-top: 120px;
    float: left;
}

.homeHeadline1 {
    position: absolute;
    top: 40px;
    transform: translateX(310%);
    text-align: center;
    color: white;
    line-height: 1.4;
    font-family: "Montserrat", YuGothic, "Noto Sans Japanese", "游ゴシック", Verdana, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, sans-serif;
    font-weight: 600;
    margin-bottom: 1rem;
}
h3 {
    margin-top: -6px;
    margin-left: 30px;
}

.adopt {
    position: absolute;
    top: 51%;
    left: 50%;
    transform: translate(-56%, 750%);
}

.adopt a {
    color: white;
    text-align: center;
    text-decoration: none;
    background: transparent;
    border: 1px solid #FFF;
    border-radius: 1000px;
    padding: 0.8rem 1rem;
    top: 15px;
    left: 25px;
}

.adopt a:hover {
    color: white;
    box-shadow: 0 5px 10px #636363;
}
</style>
