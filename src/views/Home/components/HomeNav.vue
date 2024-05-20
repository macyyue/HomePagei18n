<script setup>
//国际化
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
const changeLang = (lang) => {
    console.log('lang: ' + lang);
    locale.value = lang;
    localStorage.setItem('lang', lang);
};
</script>
<template>
    <div class="navi">
        <div class="logo">
            <h1>
                <img src="@/assets/image/HomePage/UsLogo.svg" style="height: 35px; width: 35px;" alt="">
                <a href=""> U's Factory</a>
            </h1>
        </div>
        <div class="ask-language">
            <ul class="overlay-list">
                <li class="overlay">
                    <router-link to="/Question">{{ $t('HomeNav.Question') }}</router-link>
                </li>
                <li class="overlay">
                    <span id="earth-icon"></span>
                    <el-dropdown trigger="click" class="language">
                        {{ $t('HomeNav.Language') }}
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item @click="changeLang('jp')">
                                    日本語
                                </el-dropdown-item>
                                <el-dropdown-item @click="changeLang('en')">
                                    ENGLISH
                                </el-dropdown-item>
                                <el-dropdown-item @click="changeLang('zh')">
                                    简体中文
                                </el-dropdown-item>
                                <el-dropdown-item @click="changeLang('zhf')">
                                    繁體中文
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown> 
                </li>
                <li class="overlay">
                    <router-link to="/Login">{{ $t('HomeNav.Login') }}</router-link>
                </li>
            </ul>
            <div class="header-wrapper">
                <ul class="navList">
                    <li class="menuItem"><router-link to="/Company">{{ $t('HomeNav.Company') }}</router-link></li>
                </ul>
                <ul class="navList">
                    <li class="menuItem"><router-link to="/Access">{{ $t('HomeNav.Access') }}</router-link></li>
                </ul>
                <ul class="navList">
                    <li class="menuItem"><a href="#">{{ $t('HomeNav.Services') }}</a>
                        <ul class="dropList">
                            <router-link to="/Info360" class="override-link-style">INFO360</router-link>
                            <router-link to="/BiForArchiCad" class="override-link-style">BI for
                                ArchiCAD</router-link>
                        </ul>
                    </li>
                </ul>
                <ul class="navList">
                    <li class="menuItem"><router-link to="/ResultsMedia">{{ $t('HomeNav.ResultsMedia') }}</router-link></li>
                </ul>
                <ul class="navList">
                    <li class="menuItem"><router-link to="/News">{{ $t('HomeNav.News') }}</router-link></li>
                </ul>
                <ul class="navList">
                    <li class="menuItem"><router-link to="/Recruit" target="_blank">{{ $t('HomeNav.Recruit') }}</router-link></li>
                </ul>
            </div>
        </div>
    <div class="home-video">
        <div class="home-video-title">{{ $t('HomeNav.HomeVideoTitle') }}</div>
        <video id="video" src="@/assets/image/HomePage/みなとみらい_Twinmotion.mp4" playsinline muted loop style="width: 100%;">
            <!-- autoplay 自动播放 -->
        </video>
    </div>
</div>
</template>
<style scoped>
.navi {
    min-width: 1390px;
    height: 20%;
    background-color: #454545;
    transition: all 450ms cubic-bezier(.23, 1, .32, 1) 0s;

}
.clearfix::before,
.clearfix::after {
    content: '';
    display: table;
}

.clearfix::after {
    clear: both;
}

.header-wrapper {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.menuItem {
    position: relative;
    width: 100px;
    line-height: 40px;
    margin-right: 20px;
    text-align: center;
    list-style: none;
}
.navList a {
    color: #fff;
    display: block;
    text-decoration: none;
}
.navList a:hover {
    background: #666;
    border-radius: 3px;
}
.dropList {
    position: absolute;
    background: #454545;
    box-shadow: 0 1px 2px #666;
    display: none;
    border-radius: 3px;
    overflow: hidden;
    z-index: 1000;
    white-space: nowrap;
    text-align: left;
    width: 10rem;
    height: 7rem;
}
.menuItem:hover .dropList {
    display: block;
}

.override-link-style {
    margin: 15px 3px;
}

.overlay-list {
    float: right;
    margin: -70px 10px;
    list-style: none; 
}
.overlay {
    float: left;
    margin-left: 20px; 
}

.overlay a {
    color: #dcdcdc;
    text-decoration: none;
    font-size: 15px;
    font-weight: bold;
}
.language {
    color: #dcdcdc;
    text-decoration: none;
    top: 4px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;

}
#earth-icon {
    float: left;
    width: 20px;
    height: 20px;
    margin-bottom: 2px;
    background-image: url(@/assets/image/HomePage/earth.svg);
    vertical-align: middle;
}

.dropdown-menu {
    top: 100%;
    left: -7px;
    min-width: 5rem;
    padding: .5rem 0;
    margin: .125rem 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: .25rem;
}


.language-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-size: small;
}

.language-list li {
    padding: 3px;
    cursor: pointer;
}

.language-list li img {
    position: absolute;
    transform: translateY(5px);
    right: 4px;
    width: 10px;
    height: 10px;
}

h1 {
    float: left;
    font-size: 20px;
}

.logo {
    display: inline-block;
    white-space: nowrap;
    margin-top: 10px;
    margin-left: 25px;
    line-height: 80px;
    background: none;
}

h1 a {
    position: relative;
    top: -4px;
    color: #fff;
    text-decoration: none;
    font-size: xx-large;
}

nav {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
    z-index: 6;
}

nav .menu-item {
    position: static;
    padding: 0px 20px;
    line-height: 60px;
    border: 3px solid transparent;
    text-align: center;
    transition: 0.4s;
    border-radius: 10px;
    height: 80px;
}

nav .menu-item a.active,
nav .menu-item a:hover {
    width: 80px;
    background-color: rgba(216, 206, 206, 0.1);
}

nav .menu-item a {
    display: inline-block;
    width: 80px;
    height: 30px;
    line-height: 30px;
    border-radius: .2rem;
    color: #fff;
    text-decoration: none;
    white-space: nowrap;
}



/* .navDropdown-menu {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-67%, -249%);
    width: 150px;
    min-width: 5rem;
    padding: .5rem 0;
    margin: .125rem 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    background-color: transparent;
    background-clip: padding-box;
    z-index: 4;
} */

/* .navDropdown-meg {
    position: relative;
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 170px;
    border-radius: .25rem;
    background-color: #fff;
    color: black;
}
.navDropdown-meg li a {
    padding: 0 20px;
    cursor: pointer;
    color: black;
}
.navDropdown-meg li:hover {
    display: inline-block;
    width: 170px;
    height: 30px;
    line-height: 30px;
    text-decoration: none;
    white-space: nowrap;
    background-color: rgba(90, 86, 86, 0.1);
} */

.home-video {
    position: relative;
    height: 600px;
    background-color: transparent;
    object-fit: cover;
}

#video {
    position: absolute;
    height: 600px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
}

.home-video-title {
    position: absolute;
    display: flex;
    width: 300px;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: xx-large;
    color: #ffffff;
    text-shadow: 1px 1px 5px #262626;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    z-index: 2;
}
</style>