<script setup>

</script>
<template>
    <section class="bossImg">
      <div class="conctentBox">
        <h2 class="homeHeadline2">
        RESULTS/MEDIA
        </h2>
       <div class="contentMain" >
            <ul class="columnBox" >

                <li class="columnBox-items">
                    <a href="https://us-factory.jp/media/companytank202209/">
                        <div class="columnBox-img1">
                            <img  src="@/assets/boss-img01.jpg" width="730" height="400" alt="インタビュー記事が掲載されました">
                        </div>
                        <div class="columnBox-txtBox">
                            <p>インタビュー記事が掲載されました </p>
                        </div>
                    </a>
                </li>
                <li class="columnBox-items">
              
                    <a href="https://us-factory.jp/interview/">
                        <div class="columnBox-img2">
                            <img src="@/assets/boss-img02.jpg" width="730" height="400" alt="インタビュー記事が掲載されました">
                        </div>
                        <div class="columnBox-txtBox">
                            <p>インタビュー記事が掲載されました </p>
                        </div>
                    </a>
                </li>
            </ul>
       </div>
      </div>
    </section>
   <div class="bgImg" >
       
        <div class="bgImg-title">
          
            <div id="bgImg-title-us">
        <h2 class="bgImg-title-aboutus">ABOUT US</h2>
        <small >ユーズファクトリ企業情報</small>
        <div class="text-center">
        <p > <strong> ビジョンや会社概要など</strong>
            <br>
            <strong>私たちに関する情報はこちらからご覧ください。</strong>
        </p >
       
        <p class="adopt">
        <router-link to="/Company">
            <strong>企業情報はこちら</strong>
        </router-link>
        </p>
    </div>
        </div>
        
    </div>
   </div>

</template>
<style>
.about-us {
    max-width: 1100px;
    height: 500px;
    margin: 0 auto;
}

.homeHeadline2 {
    line-height: 1.4;
    font-family: "Montserrat", YuGothic, "Noto Sans Japanese", "游ゴシック", Verdana, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, sans-serif;
    font-weight: 600;
    margin-top: 1rem;
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 7rem;
}

.contentMain {
    padding: 0 10.25%;
    overflow: hidden;
    margin-bottom: 60px;
}

.columnBox {
    display: flex;
    flex-wrap: wrap;
}

ul {
    list-style: none;
}

.columnBox-txtBox {
    margin-bottom: 20px;
}

.columnBox-img2 {
    object-fit: cover;
    margin-left: 10px;
}

.columnBox-txtBox {
    margin-left: 10px;
}

.columnBox-txtBox p {
    color: #000;
    text-decoration: none;
}

.bgImg {
    
    height: 550px;
    background-image: url(@/assets/image/img12.jpg);
    background-size: 100% 100%;
}

.bgImg-title {
    margin: 0px auto;
    width: 550px;
}

.bgImg-title-aboutus {
    padding-top: 30px;
    position: relative;
    text-align: center;
    color: #fff;
}

#bgImg-title-us {
    position: relative;
    text-align: center;
    top: 150px;
    height: 390px;
    color: #fff;
    border-radius: .5rem;
    background-color: rgba(0, 0, 0, 0.3);
}

.text-center {
    position: relative;
    top: 33px;
    color: #fff;
}

.adopt a {
    position: relative;
    color: #fff;
    text-decoration: none;
    top: 35px;
    border: 1px solid #FFF;
    border-radius: 1000px;
    padding: 0.8rem 1rem;
}

.adopt a:hover {
    box-shadow: 0 2px 10px #636363;
}
</style>

