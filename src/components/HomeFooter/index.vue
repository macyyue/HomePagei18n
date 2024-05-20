<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n();
</script>
<template>
    <div class="footer">
        <div class="wrapper">
            <div class="usFactory">
                <img class="logo" src="@/assets/image/HomePage/Uslogo-copyright01.svg" alt=""
                    style="height: 35px; width: 35px;">
                <span id="title-us"><strong>U's Factory</strong></span>
                <div class="bottom">
                    <p>
                        <a href="#">{{ t('HomeFooter.Website') }}</a> |
                        <a href="#">{{ t('HomeFooter.PersonalInformation') }}</a> |
                        <a href="#">{{ t('HomeFooter.SitePolicy') }}</a>
                    </p>
                    <div class="media">
                        <ul class="media-img">
                            <li><a title="クラッソーネ Youtubeページ " href="https://www.youtube.com/@yako9302674/featured">
                                    <img src="@/assets/image/HomePage/Youtube.svg" alt="">
                                </a></li>
                        </ul>
                        <ul class="media-img">
                            <li><a title="クラッソーネ Facebookページ " href="#">
                                    <img src="@/assets/image/HomePage/facebook.svg" alt="">
                                </a></li>
                        </ul>
                    </div>
                    <p>
                        <small class="copyright"> Copyright©2013-2024 U'sFactory All Rights Reserved.</small>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.footer {
    min-width: 1390px;
}

.wrapper {
    width: 100%;
    height: 200px;
    padding-top: 10px;
    background-color: #454545;
    color: #999;
}

.usFactory {
    text-align: center;
}

.usFactory .logo {
    position: relative;
    top: 3px;
}

.usFactory #title-us {
    display: inline-block;
    font-size: x-large;
    vertical-align: bottom;
    margin-left: 5px;
    margin-top: 5px;
}

.footer .bottom a {
    color: #999;
    text-decoration: none;
}

.copyright {
    padding-top: 20px;
    display: block;
    color: #999;
    text-align: center;
}

.media {
    padding-top: 15px;
    text-align: center;
}

.bottom {
    padding-top: 40px;

}

.media-img {
    display: inline-block;
    list-style: none;
    margin: 0 auto;
    float: none;
}
</style>
