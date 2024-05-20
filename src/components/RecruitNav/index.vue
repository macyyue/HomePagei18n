<script setup>
//国際化
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
const changeLang = (lang) => {
    // console.log('lang: ' + lang);
    locale.value = lang;
    localStorage.setItem('lang', lang);
};
</script>
<template>
    <div class="header sp headerHomeBg">
        <div class="headerBox">
            <div class="titleLogo">
                <router-link to="/">
                    <img src="@/assets/image/RecruitPage/UsLogo.svg">
                </router-link>
            </div>
        </div>
        <div class="menuPanelBody">
            <div class="menuArea">
                <div class="menuBox">
                    <router-link to="/Message">
                        <p class="fNotoSansB">{{ $t('RecruitNav.Message') }}</p>
                    </router-link>
                </div>
                <div class="menuBox">
                    <router-link to="/Careers">
                        <p class="fNotoSansB">{{ $t('RecruitNav.Careers') }}</p>
                    </router-link>
                </div>
                <div class="menuBox">
                    <router-link to="/Usfactory">
                        <p class="fNotoSansB">{{ $t('RecruitNav.Usfactory') }}</p>
                    </router-link>
                </div>
                <div class="menuBox">
                    <router-link to="/LoginForm">
                        <p class="fNotoSansB">{{ $t('RecruitNav.LoginForm') }}</p>
                    </router-link>
                </div>
                <div class="menuBox">
                    <span id="earth-icon"></span>
                    <el-dropdown trigger="click" class="LangStyle">
                        {{ $t('RecruitNav.Language') }}
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
            </div>
        </div>
    </div>
</template>
<style>
.headerHomeBg {
    background-color: rgba(255, 255, 255, 0.5);
}

.header {
    min-width: 1390px;
    width: 100%;
    height: 4.5rem;
    z-index: 9998;
    position: fixed;
    top: 0;
}


.headerBox {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 0.6rem;
    margin: auto;
}

.menuArea {
    display: flex;
    justify-content: flex-end;
    margin-top: -55px;
    margin-right: 120px;
}

.menuBox {
    margin: 10px;

}

.LangStyle {
    margin-top: 4px;
    cursor: pointer;
    color: #000;

}

.menuBox a {
    display: block;
    text-decoration: none;
    color: #000;
}


.menuBox>a:hover {
    text-decoration-line: underline;
}

#earth-icon {
    float: left;
    width: 20px;
    height: 20px;
    margin-bottom: 2px;
    background-image: url(@/assets/image/RecruitPage/earth.svg);
    vertical-align: middle;
}
</style>
