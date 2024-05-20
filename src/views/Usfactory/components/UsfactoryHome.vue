<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const aboutSections = ref([]);
const router = useRouter();

onMounted(() => {

  aboutSections.value = document.querySelectorAll('.about__section');

  // 添加路由导航守卫
  router.beforeEach((to, from, next) => {
    if (from.name !== null) {
      // 如果是从其他页面跳转而来，则隐藏元素
      aboutSections.value.forEach((section) => {
        section.classList.remove('is-visible');
      });
    }
    next();
  });

  window.addEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  aboutSections.value.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.75) {

      section.classList.add('is-visible');
    }
  });
};
</script>
<template>
  <div class="mainContent">
    <div class="UsfactoryMainArea delayed-image"><img src="@/assets/image/UsfactoryPage/company01.jpg" alt=""
        style="width: 100%; height:100% ;">
      <div class="UsfactoryCenteredText">
        <p>{{$t('UsFactory.UsFaTit')}}</p>
        <p>U’S FACTORY</p>
      </div>
    </div>
    <div class="about">
      <div class="about__inner">
        <div class="about__content">
          <div class="about__intro">
            <picture>
              <img src="@/assets/image/UsfactoryPage/companyTitle3.svg" alt="ABOUT USFACTORY GROUP">
            </picture>
          </div>
          <div class="about__message">
            <section class="about__section about__section--01">
              <h2 class="about__heading is-inscreen"><img src="@/assets/image/UsfactoryPage/point01.svg" alt="">
                {{$t('UsFactory.UsFaSubTit1')}}
              </h2>
              <p class="about__text is-inscreen" data-inscreen="" data-inscreen-type="fadein-up">
                {{$t('UsFactory.UsFaCon1')}}

              </p>
              <div class="about__image is-inscreen" data-inscreen data-inscreen-type="fadein-up">
                <picture>
                  <img class="point01img" src="@/assets/image/UsfactoryPage/point01img1.svg" alt="">
                </picture>
              </div>
            </section>
            <section class="about__section about__section--02">
              <h2 class="about__heading is-inscreen">
                <img src="@/assets/image/UsfactoryPage/point02.svg" alt="">
                {{$t('UsFactory.UsFaSubTit2')}}
              </h2>
              <p class="about__text is-inscreen" data-inscreen="" data-inscreen-type="fadein-up">
                {{$t('UsFactory.UsFaCon2L1')}}
                <br><br>
                {{$t('UsFactory.UsFaCon2L2')}}
              </p>
            </section>
            <section class="about__section about__section--03">
              <h2 class="about__heading is-inscreen">
                <img src="@/assets/image/UsfactoryPage/point03.svg" alt="">
                {{$t('UsFactory.UsFaSubTit3')}}
              </h2>
              <p class="about__text is-inscreen" data-inscreen="" data-inscreen-type="fadein-up">
                {{$t('UsFactory.UsFaCon3L1')}}<br>
                {{$t('UsFactory.UsFaCon3L2')}}<br><br>
                {{$t('UsFactory.UsFaCon3L3')}}<br>
                {{$t('UsFactory.UsFaCon3L4')}}<br>
                {{$t('UsFactory.UsFaCon3L5')}}<br><br>
                {{$t('UsFactory.UsFaCon3L6')}}<br>
                {{$t('UsFactory.UsFaCon3L7')}}<br><br>
                {{$t('UsFactory.UsFaCon3L8')}}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.mianContent {
  min-width: 1390px;
}

.UsfactoryMainArea {
  width: 100%;
  height: 650px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.UsfactoryCenteredText {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border-radius: .6rem;
  background-color: rgba(239, 236, 236, 0.8);
  width: 600px;
  height: 208px;
}

.UsfactoryCenteredText p {
  position: relative;
  text-align: center;
  color: #000;
  margin: 0;
  padding: 0.5rem 0;
  /* font-family: "Montserrat", "Noto Sans Japanese", -apple-system, BlinkMacSystemFont, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, sans-serif; */
}

.UsfactoryMainArea p:nth-of-type(1) {
  font-size: 2.8rem;
  font-weight: bold;
}

.UsfactoryMainArea p:nth-of-type(2) {
  font-size: 1.5rem;
  margin-top: 68px;
}

.about {

  padding: 0 15px;
}

.about__inner {
  width: 81.25%;
  margin: auto;
  position: relative;
  background-repeat: no-repeat;
  background-position: center top 92px;
  padding-top: 40px;
  padding-bottom: 160px;
}

.about__inner::before {
  left: 0;
  width: 100%;
  height: 30px;
  content: "";
  position: absolute;
  bottom: calc(100% - 1px);
  width: calc(100% + 40px);
  left: -20px;
  height: 40px;
  background-color: #fff;
}

.about__content {
  display: flex;
  flex-direction: column;
  padding: 0 3.8%;
}

.about__intro {
  position: relative;
  height: auto;
}

.about__intro img {
  position: absolute;
  left: 50%;
  top: 0;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: auto;
  height: 95px;
}

.about__message {
  position: relative;
  margin-top: 50px;

}

.about__section {
  padding: 20px 0;
  position: relative;
  margin: 20px 16.7%;
}

.is-inscreen {

  font-family: "Montserrat", "Noto Sans Japanese", -apple-system, BlinkMacSystemFont, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, sans-serif;
}

.about__text {
  margin-top: 30px;
  text-align: justify;
  text-justify: inter-ideograph;
  text-justify: inter-character;
  font-size: 15px;
  letter-spacing: 0.6px;
  line-height: 2.1;
}

.about__heading {
  font-size: 28px;
  letter-spacing: 1.4px;
}

.about__heading img {
  content: "";
  display: inline-block;
  width: 160px;
  height: 142px;
  background-repeat: no-repeat;
  background-size: contain;
  vertical-align: middle;
  margin-right: 30px;
}

.about__section .point01img {
  width: 100%;
  height: auto;
  margin-top: 20px;
}

.about__section {
  opacity: 0;
  transition: opacity 1s ease;
}

.about__section.is-visible {
  opacity: 1;
}
</style>