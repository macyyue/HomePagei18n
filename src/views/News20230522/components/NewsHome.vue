<script>
import Lightbox from '@/views/LightBox/LightBox.vue'

export default {
  components: {
    Lightbox,
  },
  data() {
    return {
      imageList: [
        'https://us-factory.jp/wp-content/uploads/2023/05/スライド1-1.png',
        'https://us-factory.jp/wp-content/uploads/2023/05/スライド2-1.png',
        'https://us-factory.jp/wp-content/uploads/2023/05/スライド3-1.png',
        'https://us-factory.jp/wp-content/uploads/2023/05/スライド4-1.png',
        'https://us-factory.jp/wp-content/uploads/2023/05/スライド15.png',
        'https://us-factory.jp/wp-content/uploads/2023/05/スライド5-1.png',
        'https://us-factory.jp/wp-content/uploads/2023/05/スライド8-1.png',
        'https://us-factory.jp/wp-content/uploads/2023/05/スライド9-1.png',
        'https://us-factory.jp/wp-content/uploads/2023/05/スライド10-1.png',
        'https://us-factory.jp/wp-content/uploads/2023/05/スライド11.png',
        'https://us-factory.jp/wp-content/uploads/2023/05/スライド12.png',
        'https://us-factory.jp/wp-content/uploads/2023/05/スライド13.png',
        'https://us-factory.jp/wp-content/uploads/2023/05/スライド14.png',
        'https://us-factory.jp/wp-content/uploads/2023/05/スライド15.png',
        'https://us-factory.jp/wp-content/uploads/2023/05/スライド16.png'
      ]
    }
  },
  methods: {
    openImage(src, index) {
      this.$refs.lightbox.openLightbox(src, index);
    },
  },
};
</script>
<template>
  <!-- メイン__ガイド 主要__指南-->
  <div class="Main__guide">
    <ol class="main-breadcrumb">
      <li>
        <router-link to="/" style="text-decoration: none;color: #333;">
          <span class="main-breadcrumb__type--nolink">{{ $t('News20230522.HomeTitle') }}</span>
        </router-link>
      </li>
      <li>
        <router-link to="/News" class="override-link-style">
          <span class="main-breadcrumb__type--nolink">{{ $t('News20230522.UpdateList') }}</span>
        </router-link>
      </li>
      <li class="last-item">
        <span class="main-breadcrumb__type--nolink">{{ $t('News20230522.NewsTitle') }}</span>
      </li>
    </ol>
    <!--/Main__guide-->
  </div>

  <div class="Main__body">
    <div class="Main__content">
      <div class="heading1-v2">
        <div class="heading1-v2__inner">
          <h1 class="heading1-v2__title">{{ $t('News20230522.NewsTitle') }}</h1>
        </div>
      </div>
      <p class="text--right">{{ $t('News20230522.Date') }}</p>
      <div class="heading2">
        <div class="heading2__inner">
          <h2 class="heading2__title">{{ $t('News20230522.NewsConTit') }}</h2>
        </div>
      </div>
      <p class="text">
        {{ $t('News20230522.NewsConL1') }}<br><br>
        {{ $t('News20230522.NewsConL2') }}
      </p>
      <div class="column generator-column" data-col-pc="2" data-col-sp="1" style="text-align: center;">
        <div class="column__item">
          <Lightbox ref="lightbox" :imageList="imageList" />
          <div class="image-wrap--center">
            <figure class="image">
              <!-- 図⑴ -->
              <div class="image__frame">
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2023/05/スライド1-1.png', 0)">
                  <img src="@/assets/image/News20230522/スライド1-1.png" alt="Web情報共有システム"
                    style="width: 300px; max-width: 100%;">
                </a>
              </div>
              <!-- <figcaption class="image__caption">Web情報共有システム</figcaption> -->
            </figure>
          </div>
        </div>
        <!-- 図⑵ -->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2023/05/スライド2-1.png', 1)">
                  <img src="@/assets/image/News20230522/スライド2-1.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
              <!-- <figcaption class="image__caption" >
              <a href="https://us-factory.jp/wp-content/uploads/2023/05/Info360%E3%83%8F%E3%82%9A%E3%83%B3%E3%83%95202308-22.pdf" rel="noopener" target="_blank" class="button__type" >
               <span class="button__label">Info360パンフレットはこちら</span> 
              </a>
            </figcaption> -->
            </figure>
          </div>
        </div>
        <!-- 図⑶ -->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2023/05/スライド3-1.png', 2)">
                  <img src="@/assets/image/News20230522/スライド3-1.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
            </figure>
          </div>
        </div>
        <!-- 図⑷ -->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2023/05/スライド4-1.png', 3)">
                  <img src="@/assets/image/News20230522/スライド4-1.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
            </figure>
          </div>
        </div>
        <div class="image-wrap--center"></div>
      </div>

      <!--複数のプロジェクトのご紹介 -->
      <div class="heading2">
        <div class="heading2__inner">
          <h2 class="heading2__title">{{ $t('News20230522.NewsConTit1') }}</h2>
        </div>
      </div>
      <p class="text">
        {{ $t('News20230522.NewsCon1') }}
      </p>
      <!-- 図⑴ -->
      <div class="column__item">
        <div class="image-wrap--center">
          <figure class="image">
            <div class="image__frame">
              <a @click="openImage('https://us-factory.jp/wp-content/uploads/2023/05/スライド15.png', 4)">
                <img src="@/assets/image/News20230522/スライド15.png" alt="" style="width: 300px; max-width: 100%;">
              </a>
            </div>
          </figure>
        </div>
      </div>
      <!-- 活用できる機能のご紹介 -->
      <div class="heading2">
        <div class="heading2__inner">
          <h2 class="heading2__title">{{ $t('News20230522.NewsConTit2') }}</h2>
        </div>
      </div>
      <p class="text">
        {{ $t('News20230522.NewsCon2') }}
      </p>
      <div class="column generator-column" data-col-pc="3" data-col-sp="4">
        <!-- 図⑴ -->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2023/05/スライド5-1.png', 5)">
                  <img src="@/assets/image/News20230522/スライド5-1.png" alt="Web情報共有システム"
                    style="width: 300px; max-width: 100%;">
                </a>
              </div>
              <!-- <figcaption class="image__caption">Web情報共有システム</figcaption> -->
            </figure>
          </div>
        </div>
        <!-- 図⑵ -->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2023/05/スライド8-1.png', 6)">
                  <img src="@/assets/image/News20230522/スライド8-1.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
            </figure>
          </div>
        </div>
        <!-- 図⑶ -->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2023/05/スライド9-1.png', 7)">
                  <img src="@/assets/image/News20230522/スライド9-1.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
            </figure>
          </div>
        </div>
        <!-- 図⑷ -->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2023/05/スライド10-1.png', 8)">
                  <img src="@/assets/image/News20230522/スライド10-1.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
            </figure>
          </div>
        </div>
        <!-- 図⑸ -->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2023/05/スライド11.png', 9)">
                  <img src="@/assets/image/News20230522/スライド11.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
            </figure>
          </div>
        </div>
        <!-- 図⑹ -->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2023/05/スライド12.png', 10)">
                  <img src="@/assets/image/News20230522/スライド12.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
            </figure>
          </div>
        </div>
        <!-- 図⑺-->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2023/05/スライド13.png', 11)">
                  <img src="@/assets/image/News20230522/スライド13.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
            </figure>
          </div>
        </div>
        <!-- 図⑻ -->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2023/05/スライド14.png', 12)">
                  <img src="@/assets/image/News20230522/スライド14.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
            </figure>
          </div>
        </div>
        <!-- 図⑼ -->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2023/05/スライド16.png', 13)">
                  <img src="@/assets/image/News20230522/スライド16.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
            </figure>
          </div>
        </div>

      </div>
      <!-- 展示関連情報 -->
      <div class="heading2">
        <div class="heading2__inner">
          <h2 class="heading2__title">{{ $t('News20230522.NewsIn') }}</h2>
        </div>
      </div>
      <h3 class="AboutText">
        <a href="https://www.youtube.com/watch?v=YQeaFC0zXXs&ab_channel=%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%EF%BC%B5%E2%80%99%EF%BD%93%EF%BC%A6%EF%BC%A1%EF%BC%A3%EF%BC%B4%EF%BC%AF%EF%BC%B2%EF%BC%B9"
          target="_blank" rel="noopener" class="util-link-Youtube--blank">
          <span class="util-bold">{{ $t('News20230522.NewsText1') }}</span>
        </a>
      </h3>
      <h3 class="AboutText">
        <a href="https://us-factory.jp/wp-content/uploads/2023/05/Info360%E3%83%8F%E3%82%9A%E3%83%B3%E3%83%95202308-22.pdf"
          target="_blank" rel="noopener" class="util-link--blank">
          <span class="util-bold"> {{ $t('News20230522.NewsText2') }}</span>
        </a>
      </h3>
      <div class="button-wrap" data-col-pc="1" data-col-sp="1">
        <div class="button-v2">
          <router-link to="/News">
            <a href="" class="button-v2__type">
              <span class="button-v2__label">{{ $t('News20230522.ListBack') }}</span>
            </a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
body *,
body :after,
body :before {
  box-sizing: border-box;

}

.Main__guide {
  min-width: 1264px;
}

.Main__guide .main-breadcrumb {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 13px 40px 11px;

}

.Main__guide .main-breadcrumb>li {
  font-size: 0.9rem;
}

.Main__guide li,
.Main__guide ol {
  margin: 0;
  padding: 0;
  list-style-type: none;

}

.override-link-style {
  color: #333;
  text-decoration: none;
}

.Main__guide .main-breadcrumb>li:after {
  margin: 0 10px;
  color: #666;
  content: "＞";
}

.Main__guide .main-breadcrumb>li.last-item:after {
  content: "";
}

.Main__guide .main-breadcrumb>li>span {
  color: #333;
  font-weight: 700;
  text-decoration: none;
}

.Main__body {
  min-width: 1390px;
}

.Main__content {
  max-width: 1264px;
  padding: 4em 30px 100px;
  margin: 0 auto;
}

.heading1-v2 {
  margin: 1.6em 0;
}

.heading1-v2__title {
  font-size: 2.05rem;
  line-height: 1.4em;
  margin: 0;
  font-family: 游明朝体, Yu Mincho, YuMincho, ヒラギノ明朝 Pro, Hiragino Mincho Pro, MS P明朝, MS PMincho, serif;
  font-weight: 500;
}

.text--right {
  margin: 6em 0 0;
  text-align: right;
}

.text,
.text--center,
.text--right {
  font-size: 1rem;
}

.text,
.text--center {

  margin: 1em 0 0;
}

[data-col-pc]:not([data-col-pc="1"]) {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
}

[data-col-pc="2"]>:nth-child(odd) {
  margin-left: 0 !important;
}

[data-col-pc="2"]>:nth-child(-n+2) {
  margin-top: 0 !important;
}

[data-col-pc="2"]>* {
  width: calc((100% - 70px)/2 - .1px);
}

.column {
  margin: 2em 0 0;
}

.image-wrap--center {
  justify-content: center;
}

.image-wrap,
.image-wrap--center {
  display: flex;
  margin: 2em 0 0;
}

.image {
  margin: 0;
}

.image-wrap--center>* {
  text-align: center;
}

.image__caption,
.image__caption--center,
.image__caption--right {
  line-height: 1.6em;
  text-align: left;
  margin: .6em 0 0;
  font-size: 0.9rem;
}

.image__caption a {
  color: #000;
}

.image__frame img {
  max-width: 100%;
  height: auto;
  vertical-align: top;
  border-style: none;
}

.image {
  margin: 0;
}

.image__frame,
.image a.image__frame,
.image a.image__frame--modal {
  display: inline-block;
  cursor: pointer;
}

[data-col-pc]:not([data-col-pc=auto])>* {
  margin-top: 1.25em;
  margin-left: 70px;
}

.heading2 {
  border-bottom: 2px solid;
  border-color: #333;
  margin: 0 0 1.6em;
  padding: 3.4em 0 1.4em;
}

.heading2__title {
  font-size: 2rem;
  line-height: 1.4em;
  font-weight: 700;
  margin: 0;
  font-family: 游明朝体, Yu Mincho, YuMincho, ヒラギノ明朝 Pro, Hiragino Mincho Pro, MS P明朝, MS PMincho, serif;
}

a.button__type {
  padding: 1em 20px 1em 20px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border: 1px solid #333;
  background-color: #333;
  color: #fff;
  line-height: 1.4em;
  text-decoration: none;
}

.button__label {
  display: inline-block;
}

a.button__type:hover {
  background-color: #fff;
  color: #333;
}

.AboutText {
  display: block;
  position: relative;
  margin-bottom: 1em;
  content: "";
}

.AboutText a {
  color: #333;
}

.util-bold {
  font-weight: 700 !important;

}

.util-link-Youtube--blank:after {
  position: relative;
  width: 20px;
  height: 20px;
  top: -2px;
  margin: 0 .5em;
  display: inline-block;
  vertical-align: middle;
  content: "";
}

.util-link-Youtube--blank:after {
  background: url(@/assets/image/Info360/NewsYoutebe.svg) no-repeat 0 0;
  color: rgb(51, 51, 51);
}

.util-link--blank:after {
  position: relative;
  width: 14px;
  height: 14px;
  top: -2px;
  margin: 0 .5em;
  display: inline-block;
  vertical-align: middle;
  content: "";
}

.util-link--blank:after {
  background: url(@/assets/image/NewsHome20230818/linkArrowBlack.svg) no-repeat 0 0;
  color: rgb(51, 51, 51);
}

.Main__content>:last-child {
  margin-bottom: 0 !important;
}

.button-wrap {
  margin: 1em 0 0;
}

.button-wrap,
.button-wrap--center {
  display: flex;
  flex-flow: row wrap;
  margin-left: -70px;

}

.button-v2 .button-v2__type {
  padding: .8em 25px .8em 20px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 0;
  background-color: #dbdbdb;
  line-height: 1.4em;
  text-align: center;
  color: #333;

}

.button-v2 a {
  display: inline-block;
  text-decoration: none;
}
</style>