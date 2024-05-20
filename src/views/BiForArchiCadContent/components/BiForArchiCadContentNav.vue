<script setup>
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
const changeLang = (lang) => {
    locale.value = lang;
    localStorage.setItem('lang', lang);
};
</script>
<template>
    <div id="header" class="clearfix" style="position:relative;">
        <div class="titleLogo">
            <router-link to="/"><img src="@/assets/image/BiForArchiCAD/RecruitQuestionImg.svg"></router-link>
        </div>
    </div>
    <div id="globals">
        <div class="content_title">
            <div class="LanguageCon">
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
        </div>
            <p>{{ $t('BiFArchiCon1.TitleL1') }}</p>
            <p>{{ $t('BiFArchiCon1.TitleL2') }}</p>
        </div>
    </div>
</template>

<style scoped>
#header {
    width: 960px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    margin-bottom: 20px;
    position: relative;
}

#globals {
    display: block;
    width: 100%;
    height: 101px;
    background-color: #C8CCD0;
}

.content_title {
    color: #FFF;
    background: #9198A0;
    width: 940px;
    margin: 0 auto;
    line-height: 50px;
    font-weight: normal;
    font-size: 150%;
}

.content_title p:last-child {
    border-top: 1px solid #FFF;
}

.LanguageCon {
    float: right;
    list-style: none;
}
.language {
    color: #FFF;
    text-decoration: none;
    top: 3px;
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
</style>
