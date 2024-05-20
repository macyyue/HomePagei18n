<script>

</script>
<template>
  <div id="mainWrap">
    <!-- メイン__ガイド 主要__指南-->
    <div class="Main__guide">
      <ol class="main-breadcrumb">
        <li>
          <router-link to="/" style="text-decoration: none;color: #333;">
            <span class="main-breadcrumb__type--nolink">{{ $t('REW4DEX.HomeTitle') }}</span>
          </router-link>
        </li>
        <li>
          <router-link to="/RobotEyeWalker4DExample" class="override-link-style">
            <span class="main-breadcrumb__type--nolink">{{ $t('REW4DEX.REW4DEXTitle') }}</span>
          </router-link>
        </li>
      </ol>
      <!--/Main__guide-->
    </div>
    <div class="Main__body">
      <div class="Main__content">
        <div class="heading2">
          <div class="heading2__inner">
            <h2 class="heading2__title">{{ $t('REW4DEX.REW4DEXTitle') }}</h2>
          </div>
        </div>
        <p class="text">
          {{ $t('REW4DEX.REW4DEXContent1') }}<br><br>
          {{ $t('REW4DEX.REW4DEXContent2') }}
          <br> &nbsp;{{ $t('REW4DEX.REW4DEXContent3') }}
          <br> &nbsp;{{ $t('REW4DEX.REW4DEXContent4') }}
          <br> &nbsp;{{ $t('REW4DEX.REW4DEXContent5') }}
          <br>{{ $t('REW4DEX.REW4DEXContent6') }}
          <br> &nbsp;{{ $t('REW4DEX.REW4DEXContent7') }}
          <br> &nbsp;{{ $t('REW4DEX.REW4DEXContent8') }} <br>
          <br>{{ $t('REW4DEX.REW4DEXContent9') }}
          <br>{{ $t('REW4DEX.REW4DEXContent10') }}
        </p>
        <div class="column__item item__image01">
          <div class="image-wrap--center">
            <figure class="image">
              <div class="item-movie">
                <iframe width="584" height="390" src="https://www.youtube.com/embed/8EkItBfqnZI"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen="">
                </iframe>
              </div>
            </figure>
          </div>
        </div>
        <!-- 関連情報 -->
        <div class="heading2">
          <div class="heading2__inner">
            <h2 class="heading2__title">{{ $t('REW4DEX.REW4DEXIn') }}
            </h2>
          </div>
        </div>
        <p class="MessageTitle">{{ $t('REW4DEX.REW4DEXInTitle') }}
        </p>
        <h3 class="AboutText">
          <a href="https://www.soumu.go.jp/main_content/000352868.pdf" target="_blank" rel="noopener"
            class="util-link--blank">
            <span class="util-bold">{{ $t('REW4DEX.REW4DEXPdf') }}
            </span>
          </a>
        </h3>
        <h3 class="AboutText">
          <a href="https://www.soumu.go.jp/menu_seisaku/ictseisaku/ictriyou/geo-spatial_ict/g-city/index.html"
            target="_blank" rel="noopener" class="util-link--blank">
            <span class="util-bold"> {{ $t('REW4DEX.REW4DEXText1') }}
            </span>
          </a>
        </h3>
        <h3 class="AboutText">
          <a href="https://www.youtube.com/watch?v=Wa3adodJ77Q&list=PL7PI1l61-EVLofVHutnQBZ0IZbgfZGD-_" target="_blank"
            rel="noopener" class="util-link-Youtube--blank">
            <span class="util-bold">{{ $t('REW4DEX.REW4DEXText2') }}
            </span>
          </a>
        </h3>
        <div class="button-wrap" data-col-pc="1" data-col-sp="1">
          <div class="button-v2">
            <router-link to="/Info360">
              <a href="" class="button-v2__type">
                <span class="button-v2__label">{{ $t('REW4DEX.ListBack') }}
                </span>
              </a>
            </router-link>
          </div>
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

.mainWrap {
  min-width: 1390px;
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

.Main__guide li:last-child {
  margin-top: 1.2px;
}

.Main__guide .main-breadcrumb>li:last-child::after {
  content: none;
}

.Main__guide .main-breadcrumb>li>span {
  color: #333;
  font-weight: 700;
  text-decoration: none;
}

.Main__body {
  min-width: 1200px;
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
  margin: 10em 0 0;
  text-align: right;
}

.text,
.text--center,
.text--right {
  font-size: 1rem;
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
  width: calc((103% - 36px)/2 - .1px);
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
  font-size: 1rem;
}

.MessageTitle {
  margin: 2em 0;
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
  /* color: rgb(51, 51, 51); */
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

.image__caption {
  line-height: 1.6em;
  text-align: left;
  margin: 0.7em 0 0;
  font-size: 0.9rem;
}
</style>