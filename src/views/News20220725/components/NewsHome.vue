<script>
import Lightbox from '@/views/LightBox/LightBox.vue'

export default {
  components: {
    Lightbox,
  },
  data() {
    return {
      imageList: [
      'https://us-factory.jp/wp-content/uploads/2022/07/スライド1.png',
      'https://us-factory.jp/wp-content/uploads/2022/07/スライド2.png',
      'https://us-factory.jp/wp-content/uploads/2022/07/スライド3.png',
      'https://us-factory.jp/wp-content/uploads/2022/07/スライド4.png',
      'https://us-factory.jp/wp-content/uploads/2022/07/スライド5.png',
      'https://us-factory.jp/wp-content/uploads/2022/07/スライド6.png',
      'https://us-factory.jp/wp-content/uploads/2022/07/スライド7.png',
      'https://us-factory.jp/wp-content/uploads/2022/07/スライド8.png',
      'https://us-factory.jp/wp-content/uploads/2022/07/スライド9.png',
      'https://us-factory.jp/wp-content/uploads/2022/07/スライド10.png',
      'https://us-factory.jp/wp-content/uploads/2022/07/スライド11.png',
      'https://us-factory.jp/wp-content/uploads/2022/07/スライド13.png',
      'https://us-factory.jp/wp-content/uploads/2022/07/スライド14.png',
      'https://us-factory.jp/wp-content/uploads/2022/07/スライド15.png',
      'https://us-factory.jp/wp-content/uploads/2022/07/スライド16.png',
      'https://us-factory.jp/wp-content/uploads/2022/07/スライド17.png',
      'https://us-factory.jp/wp-content/uploads/2022/07/スライド18.png',
      'https://us-factory.jp/wp-content/uploads/2022/07/スライド19.png',
      'https://us-factory.jp/wp-content/uploads/2022/07/スライド21.png',
      'https://us-factory.jp/wp-content/uploads/2022/07/スライド22.png',
      'https://us-factory.jp/wp-content/uploads/2022/07/スライド23.png',
      'https://us-factory.jp/wp-content/uploads/2022/07/スライド24.png',
      'https://us-factory.jp/wp-content/uploads/2022/07/スライド25.png',
      'https://us-factory.jp/wp-content/uploads/2022/07/スライド26.png',
      'https://us-factory.jp/wp-content/uploads/2022/07/スライド27.png',
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
          <span class="main-breadcrumb__type--nolink">{{ $t('News20220725.HomeTitle') }}</span>
        </router-link>
      </li>
      <li>
        <router-link to="/News" class="override-link-style">
          <span class="main-breadcrumb__type--nolink">{{ $t('News20220725.UpdateList') }}</span>
        </router-link>
      </li>
      <li class="last-item">
        <span class="main-breadcrumb__type--nolink">{{ $t('News20220725.NewsTitle') }}</span>
      </li>
    </ol>
    <!--/Main__guide-->
  </div>

  <div class="Main__body">
    <div class="Main__content">
      <div class="heading1-v2">
        <div class="heading1-v2__inner">
          <h1 class="heading1-v2__title">{{ $t('News20220725.NewsTitle') }}</h1>
        </div>
      </div>
      <p class="text--right">{{ $t('News20220725.Date') }}</p>
      <div class="heading2">
        <div class="heading2__inner">
          <h2 class="heading2__title">{{ $t('News20220725.NewsConTit') }}</h2>
        </div>
      </div>
      <div class="column generator-column-v3" data-col-pc="2" data-col-sp="1">

        <div class="column__item item__text">
          <p class="text" style="padding-top: 30px;">
            {{ $t('News20220725.NewsCon1L1') }}<br>
            {{ $t('News20220725.NewsCon1L2') }}

          </p>
        </div>
        <div class="column__item item__image01">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="item-movie">
                <iframe width="584" height="390" src="https://www.youtube.com/embed/_D6q6--Xtug"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen="">
                </iframe>
              </div>
            </figure>
          </div>
        </div>
      </div>

      <!--プロジェクトのご紹介 -->
      <div class="heading2">
        <div class="heading2__inner">
          <h2 class="heading2__title">{{ $t('News20220725.NewsConTit1') }}</h2>
        </div>
      </div>
      <p class="text">
        {{ $t('News20220725.NewsCon2') }}
      </p>
      <div class="column generator-column" data-col-pc="2" data-col-sp="1">
        <!-- 図⑴ -->
        <div class="column__item">
          <Lightbox ref="lightbox" :imageList="imageList"/>
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド1.png', 0)">
                  <img src="@/assets/image/News20220725/スライド1.png" alt="Web情報共有システム"
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
                <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2022/07/スライド2.png', 1)">
                  <img src="@/assets/image/News20220725/スライド2.png" alt="" style="width: 300px; max-width: 100%;">
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
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド3.png', 2)">
                  <img src="@/assets/image/News20220725/スライド3.png" alt="" style="width: 300px; max-width: 100%;">
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
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド4.png', 3)">
                  <img src="@/assets/image/News20220725/スライド4.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
            </figure>
          </div>
        </div>
      </div>
      <div class="heading2">
        <div class="heading2__inner">
          <h2 class="heading2__title"></h2>
        </div>
      </div>
      <p class="text">
        {{ $t('News20220725.NewsCon2L1') }}<br>
        {{ $t('News20220725.NewsCon2L2') }}<br>
        {{ $t('News20220725.NewsCon2L3') }}
      </p>
      <div class="column generator-column" data-col-pc="2" data-col-sp="1">
        <!-- 図⑸ -->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2022/07/スライド5.png', 4)">
                  <img src="@/assets/image/News20220725/スライド5.png" alt="Web情報共有システム"
                    style="width: 300px; max-width: 100%;">
                </a>
              </div>
              <!-- <figcaption class="image__caption">Web情報共有システム</figcaption> -->
            </figure>
          </div>
        </div>
        <!-- 図⑹-->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2022/07/スライド6.png', 5)">
                  <img src="@/assets/image/News20220725/スライド6.png" alt="" style="width: 300px; max-width: 100%;">
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
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド7.png', 6)">
                  <img src="@/assets/image/News20220725/スライド7.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
            </figure>
          </div>
        </div>
        <!-- 図⑻-->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド8.png', 7)">
                  <img src="@/assets/image/News20220725/スライド8.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
            </figure>
          </div>
        </div>


      </div>
      <div class="heading2">
        <div class="heading2__inner">
          <h2 class="heading2__title"></h2>
        </div>
      </div>
      <p class="text">
        {{ $t('News20220725.NewsCon2L4') }}<br>
        {{ $t('News20220725.NewsCon2L5') }}
      </p>
      <div class="column generator-column" data-col-pc="2" data-col-sp="1">
        <!-- 図⑼ -->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2022/07/スライド9.png', 8)">
                  <img src="@/assets/image/News20220725/スライド9.png" alt="Web情報共有システム"
                    style="width: 300px; max-width: 100%;">
                </a>
              </div>
              <!-- <figcaption class="image__caption">Web情報共有システム</figcaption> -->
            </figure>
          </div>
        </div>
        <!-- 図⑽-->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2022/07/スライド10.png', 9)">
                  <img src="@/assets/image/News20220725/スライド10.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
            </figure>
          </div>
        </div>
        <!-- 図⑾-->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド11.png', 10)">
                  <img src="@/assets/image/News20220725/スライド11.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
            </figure>
          </div>
        </div>
        <!-- 図⑿-->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド13.png', 11)">
                  <img src="@/assets/image/News20220725/スライド12.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
            </figure>
          </div>
        </div>


      </div>
      <div class="heading2">
        <div class="heading2__inner">
          <h2 class="heading2__title"></h2>
        </div>
      </div>
      <p class="text">
        {{ $t('News20220725.NewsCon2L6') }}
        <br>{{ $t('News20220725.NewsCon2L7') }}
        <br>{{ $t('News20220725.NewsCon2L8') }}
        <br>{{ $t('News20220725.NewsCon2L9') }}
      </p>
      <div class="column generator-column" data-col-pc="3" data-col-sp="1" style="margin-left: 80px;">
        <!-- 図⒀ -->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2022/07/スライド14.png', 12)">
                  <img src="@/assets/image/News20220725/スライド13.png" alt="Web情報共有システム"
                    style="width: 300px; max-width: 100%;">
                </a>
              </div>
              <!-- <figcaption class="image__caption">Web情報共有システム</figcaption> -->
            </figure>
          </div>
        </div>
        <!-- 図⒁-->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2022/07/スライド15.png', 13)">
                  <img src="@/assets/image/News20220725/スライド14.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
            </figure>
          </div>
        </div>
        <!-- 図⒂-->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド16.png', 14)">
                  <img src="@/assets/image/News20220725/スライド15.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
            </figure>
          </div>
        </div>
      </div>
      <div class="heading2">
        <div class="heading2__inner">
          <h2 class="heading2__title"></h2>
        </div>
      </div>
      <p class="text">
        {{ $t('News20220725.NewsCon2L10') }}
      </p>
      <div class="column generator-column" data-col-pc="3" data-col-sp="1" style="margin-left: 80px;">
        <!-- 図⒃-->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2022/07/スライド17.png', 15)">
                  <img src="@/assets/image/News20220725/スライド16.png" alt="Web情報共有システム"
                    style="width: 300px; max-width: 100%;">
                </a>
              </div>
              <!-- <figcaption class="image__caption">Web情報共有システム</figcaption> -->
            </figure>
          </div>
        </div>
        <!-- 図⒄-->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2022/07/スライド18.png', 16)">
                  <img src="@/assets/image/News20220725/スライド17.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
            </figure>
          </div>
        </div>
        <!-- 図⒅-->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド19.png', 17)">
                  <img src="@/assets/image/News20220725/スライド18.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
            </figure>
          </div>
        </div>
      </div>
      <div class="heading2">
        <div class="heading2__inner">
          <h2 class="heading2__title"></h2>
        </div>
      </div>
      <p class="text">
        {{ $t('News20220725.NewsCon2L11') }}<br>
        {{ $t('News20220725.NewsCon2L12') }}
        <br>{{ $t('News20220725.NewsCon2L13') }}
      </p>
      <div class="column generator-column" data-col-pc="3" data-col-sp="1" style="margin-left: 80px;">
        <!-- 図⒆-->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2022/07/スライド21.png', 18)">
                  <img src="@/assets/image/News20220725/スライド19.png" alt="Web情報共有システム"
                    style="width: 300px; max-width: 100%;">
                </a>
              </div>
              <!-- <figcaption class="image__caption">Web情報共有システム</figcaption> -->
            </figure>
          </div>
        </div>
        <!-- 図⒇-->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage(' https://us-factory.jp/wp-content/uploads/2022/07/スライド22.png', 19)">
                  <img src="@/assets/image/News20220725/スライド20.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
            </figure>
          </div>
        </div>
        <!-- 図21-->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド23.png', 20)">
                  <img src="@/assets/image/News20220725/スライド21.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
            </figure>
          </div>
        </div>
        <!-- 図22-->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド24.png', 21)">
                  <img src="@/assets/image/News20220725/スライド22.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
            </figure>
          </div>
        </div>
        <!-- 図23-->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド25.png', 22)">
                  <img src="@/assets/image/News20220725/スライド23.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
            </figure>
          </div>
        </div>
        <!-- 図24-->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド26.png', 23)">
                  <img src="@/assets/image/News20220725/スライド24.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
            </figure>
          </div>
        </div>
        <!-- 図25-->
        <div class="column__item">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="image__frame">
                <a @click="openImage('https://us-factory.jp/wp-content/uploads/2022/07/スライド27.png', 24)">
                  <img src="@/assets/image/News20220725/スライド25.png" alt="" style="width: 300px; max-width: 100%;">
                </a>
              </div>
            </figure>
          </div>
        </div>
      </div>

      <!-- 展示関連情報 -->
      <div class="heading2">
        <div class="heading2__inner">
          <h2 class="heading2__title">{{ $t('News20220725.NewsIn') }}</h2>
        </div>
      </div>
      <div class="button-wrap" data-col-pc="1" data-col-sp="1">
        <div class="button-v2">
          <router-link to="/News">
            <a href="" class="button-v2__type">
              <span class="button-v2__label">{{ $t('News20220725.ListBack') }}</span>
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
  width: calc((100% - 36px)/2 - .1px);
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
  margin-left: 36px;
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
  margin-left: -36px;
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