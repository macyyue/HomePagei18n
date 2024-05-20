<script setup>

</script>
<template>
    <div class="footerArea">
        <div id="ftEntry">
            <img src="@/assets/image/RecruitPage/img16.jpg" alt="" class="ftEntryImg">
            <p class="tit yugothic">{{ $t('Message.MessageTit2') }}</p>
            <router-link to="/LoginForm">
                <p class="Btn"><span>{{ $t('Message.EntryButton') }}</span></p>
            </router-link>
        </div>
        <div class="footerMainTitle">
            <div>
                <p class="fNotoSansA">{{ $t('RecruitFooter.footerMainTit1') }}</p>
                <p class="fNotoSansC">{{ $t('RecruitFooter.footerMainTit2') }}</p>
            </div>
        </div>
        <div class="footerLogoArea">
            <div class="footerLogo"><a href=""><img src="@/assets/image/RecruitPage/Uslogo-copyright.svg" style="width: 35px;
        height: 35px;"></a></div>
        </div>

        <div class="RecruitFooter">
            <p>{{ $t('RecruitFooter.Copyright') }}</p>
        </div>
    </div>
</template>
<style>
.footerArea {
    min-width: 1390px;
}

#ftEntry {
    position: relative;
    z-index: 2;
}

#ftEntry .tit {
    z-index: 3;
    position: absolute;
    margin-bottom: 36px;
    font-size: 3rem;
    color: #000;
    font-weight: bold;
    letter-spacing: .1em;
    line-height: 1.2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -150%);
    white-space: nowrap;
}

.ftEntryImg {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 460px;
    overflow: hidden;
    text-align: center;
    z-index: 1;

}

#ftEntry .Btn {
    z-index: 3;
    position: absolute;
    width: 380px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 90%);
}

#ftEntry .Btn span {
    overflow: hidden;
    display: block;
    background: #82888E;
    color: #fff;
    padding: 20px 80px;
    margin: auto;
    text-decoration: none;
    font-size: 2.2rem;
    font-weight: 500;
    border-radius: 5px;
}

#ftEntry .Btn span:hover {
    background-color: #201e1ecc;
}

#ftEntry .Btn span {
    font-size: 1.5rem;
}

.RecruitFooter {
    width: 100%;
    height: 170px;
    background-color: #000;
    padding: 0.5rem 0 9rem 0;
    /* margin-top: 1rem; */
}

.RecruitFooter p {
    font-size: 0.75rem;
    line-height: 50%;
    color: #ffffff;
    text-align: center;
}

.fNotoSansA {
    font-size: 1.25rem;
    line-height: 150%;
    font-size: 50px;
    text-align: center;
    margin-top: 3rem;
}

.fNotoSansC {
    text-align: center;
    font-size: 1.25rem;
    line-height: 150%;
    margin-top: 3rem;

}

.footerLogo {
    text-align: center;
    margin-top: 3rem;

}
</style>
