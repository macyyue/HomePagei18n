<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goToListPage = () => {
    router.push('/BiForArchiCad#BiForArchicadContentlist');
    setTimeout(() => {
        const targetElement = document.getElementById('BiForArchicadContentlist');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'auto' });
        }
    }, 0); 
}
</script>
<template>
    <div class="container" data-wide="false" data-sidebar="false">
        <div class="contents">
            <section>
                <div class="heading-lv2">
                    <div class="block">
                        <h2 class="heading_title">{{ $t('BiFArchiCon1.ConTitle1') }}</h2>
                    </div>
                </div>
                <ul class="list-bullet is-bullet_large">
                    <li>{{ $t('BiFArchiCon1.Content1L1') }}</li>
                    <li>{{ $t('BiFArchiCon1.Content1L2') }}</li>
                    <li>{{ $t('BiFArchiCon1.Content1L3') }}</li>
                    <li>{{ $t('BiFArchiCon1.Content1L4') }}</li>
                    <li>{{ $t('BiFArchiCon1.Content1L5') }}</li>
                </ul>
            </section>
            <section>
                <div class="heading-lv2">
                    <div class="block">
                        <h2 class="heading_title">{{ $t('BiFArchiCon1.ConTitle2') }}</h2>
                    </div>
                </div>
                <div class="column-media" data-layout-sp="col-reverse">
                    <div class="column_detail" data-wraparound="true">
                        <p>{{ $t('BiFArchiCon1.Content2') }}</p>
                        <dl class="list-description">
                            <dt>{{ $t('BiFArchiCon1.ConSmallTit1') }}</dt>
                            <dd>
                                <ul class="list-bullet">
                                    <li>{{ $t('BiFArchiCon1.SmallTit1Con1') }}</li>
                                    <li>{{ $t('BiFArchiCon1.SmallTit1Con2') }}</li>
                                </ul>
                            </dd>
                        </dl>
                    </div>
                </div>
                <div class="column-layout" data-row-pc="2" data-row-sp="1">
                    <div class="column_item gp-al-center">
                        <div class="image-set">
                            <figure class="image_inner">
                                <figcaption class="image_caption gp-al-center">{{ $t('BiFArchiCon1.ConSmallTit2') }}
                                </figcaption>
                                <img src="@/assets/image/BiForArchiCAD/biImg03.png" alt="">
                            </figure>
                        </div>
                    </div>
                    <div class="column_item gp-al-center">
                        <div class="image-set">
                            <figure class="image_inner">
                                <figcaption class="image_caption gp-al-center">{{ $t('BiFArchiCon1.ConSmallTit3') }}
                                </figcaption>
                                <img src="@/assets/image/BiForArchiCAD/biImg04.png" alt="">
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="heading-lv2">
                    <div class="block">
                        <h2 class="heading_title">{{ $t('BiFArchiCon1.ConTitle3') }}</h2>
                    </div>
                </div>
                <ul class="list-bullet">
                    <li class="list-case">
                        <a href="https://www.youtube.com/watch?v=eVzFSLdUh7I&t=1s&ab_channel=%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%EF%BC%B5%E2%80%99%EF%BD%93%EF%BC%A6%EF%BC%A1%EF%BC%A3%EF%BC%B4%EF%BC%AF%EF%BC%B2%EF%BC%B9"
                            target="_blank" rel="noopener" class="util-link--blank">
                            {{ $t('BiFArchiCon1.SmallTit3Con1') }}
                        </a>
                    </li>
                    <li class="list-case">
                        <a href="https://www.youtube.com/watch?v=wmqvkJztpnY&ab_channel=%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE%EF%BC%B5%E2%80%99%EF%BD%93%EF%BC%A6%EF%BC%A1%EF%BC%A3%EF%BC%B4%EF%BC%AF%EF%BC%B2%EF%BC%B9"
                            target="_blank" rel="noopener" class="util-link--blank">
                            {{ $t('BiFArchiCon1.SmallTit3Con2') }}
                        </a>
                    </li>
                </ul>
            </section>
            <div class="close-button-wrap">
                <ul class="list-button gp-al-center" data-row-pc="3">
                    <li class="link-button i-close" @click="goToListPage">
                        {{ $t('BiFArchiCon1.CloseButton') }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container {
    padding-bottom: 60px;
    width: 800px;
    margin: 0 auto;
    padding: 75px 0;
}

.contents>*:first-child,
.contents>section:first-child>*:first-child {
    margin-top: 0 !important;
}

.heading-lv2 {
    margin: 30px 0;
}

.heading-lv2 .block {
    position: relative;
    display: block;
    padding: 4px 0 3px 30px;
}

.heading-lv2 .heading_title {
    position: relative;
    font-size: 1.5rem;
    line-height: 1.5;
}

.heading-lv2 .block::before {
    background: #2e70db;
}

.heading-lv2 .block::before,
.heading-lv2 .block::after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    height: 100%;
    content: "";
}

.heading-lv2 .block::after {
    height: 15px;
    background: #da1818;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    content: "";
}

.list-bullet.is-bullet_large>li {
    font-size: 1.2rem;
    font-weight: bold;
}

.list-bullet>li {
    position: relative;
    padding-left: 20px;
}

.list-bullet>li.is-bullet_large::before,
.list-bullet.is-bullet_large>li::before {
    top: .35em;
    left: 0;
    width: 12px;
    height: 12px;
}

.list-bullet>li.is-bullet_large::before,
.list-bullet.is-bullet_large>li::before {
    top: .35em;
    left: 0;
    width: 12px;
    height: 12px;
}

.list-bullet>li::before {
    position: absolute;
    top: .45em;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #6f88b0;
    content: "";
}

.column-media>.column_detail>*:first-child {
    margin-top: 0 !important;
}

.list-description>dt {
    margin: 0 0 .2em;
    font-weight: bold;
}

.list-description {
    margin-top: 1em;
}

img {
    max-width: 100%;
    height: auto;
    vertical-align: top;
}

.image-set .image_caption {
    margin: 19px 0 .2em;
    font-weight: bold;
}

.close-button-wrap {
    margin-top: 35px;
}

.list-button[data-row-pc].gp-al-center {
    -webkit-justify-content: center;
    justify-content: center;
}

[data-row-pc]:not([data-row-pc="1"]) {
    -webkit-display: flex;
    display: flex;
    flex-flow: row wrap;
}

.list-button {
    margin-top: 20px;
}

/* .gp-al-center {
    text-align: center!important;
} */
ul,
ol {
    list-style: none;
}

.list-button[data-row-pc]>li {
    -webkit-display: flex;
    display: flex;
}

.list-button[data-row-pc]>li>a {
    -webkit-display: flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    width: 100%;
    min-width: 0;
}

.link-button {
    display: inline-block;
    position: relative;
    padding: 13px 30px 12px;
    padding-left: -18px;
    border: 1px solid #ddd;
    background-color: #fff;
    color: #333;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
}

.link-button .link_label {
    display: inline-block;
    line-height: 1.5;
}

.link-button.i-close::before,
.link-button.i-close::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 10px;
    width: 12px;
    height: 2px;
    margin-top: -1px;
    background: #888;
    transform: rotate(45deg);
    transform-origin: center;
}

.link-button.i-close::after {
    transform: rotate(-45deg);
}

.link-button.i-close::before {
    margin-top: -1px;
    margin-left: 3px;
    display: block;
}

.link-button.i-close::after {
    margin-top: -1px;
    margin-left: 3px;
    display: block;
}

.link-button:hover {
    color: #00a27c;
    background-color: #eff8f6;
    border-color: #d6efe9;
}

.list-case a {
    color: #333;
    /* text-decoration: none; */
}

/* .list-case a:hover{
    text-decoration-line: underline;
} */
.list-case ::after {
    position: relative;
    width: 14px;
    height: 14px;
    top: -2px;
    margin: 0 .5em;
    display: inline-block;
    vertical-align: middle;
    content: "";
    background: url(@/assets/image/NewsHome20230818/linkArrowBlack.svg) no-repeat 0 0;
    color: rgb(51, 51, 51);
}

.util-link--blank:after {
    position: relative;
    width: 20px;
    height: 20px;
    top: -2px;
    margin: 0 .5em;
    display: inline-block;
    vertical-align: middle;
    content: "";
}

.util-link--blank:after {
    background: url(@/assets/image/Info360/NewsYoutebe.svg) no-repeat 0 0;
    color: rgb(51, 51, 51);
}
</style>