<script setup>

</script>
<template>
    <div class="MainContent">
        <div class="meassageMainArea delayed-image"><img src="@/assets/image/MessagePage/company01.jpg" alt=""
                style="width: 100%; height:100% ;">
            <div class="centeredText">
                <p>MESSAGE</p>
                <p>{{ $t('Message.MessageTit1') }}</p>
            </div>
        </div>
        <div class="messageWrapper">
            <article class="mainContents recruitWrap intWrap">
                <figure class="intTitle">
                    <figcaption>
                        <div class="imgName">
                            <img src="@/assets/image/MessagePage/int02.jpg" alt="">
                            <h3><span>{{ $t('Message.NameL1') }}</span><br />
                                {{ $t('Message.NameL2') }}</h3>
                        </div>
                        <p>{{ $t('Message.MessCon1') }}</p>
                    </figcaption>
                </figure>

                <section class="interviewWrap">
                    <div class="interviewBox">
                        <h2><i class="far fa-square"></i>{{ $t('Message.interviewTit') }}</h2>
                        <p><video muted playsinline controls src="@/assets/image/MessagePage/interview.mp4"></video></p>
                        <p>{{ $t('Message.interviewConL1') }}<br />
                           {{ $t('Message.interviewConL2') }}
                        </p>
                    </div>
                    <div class="interviewBox">
                        <h2><i class="far fa-square"></i>{{ $t('Message.MessTit1') }}</h2>
                        <p><img src="@/assets/image/MessagePage/company02.jpg" alt="" align="right">
                            {{ $t('Message.MessCon2L1') }}
                        </p>
                        <p>
                            {{ $t('Message.MessCon2L2') }}
                        </p>
                    </div>
                    <div class="interviewBox">
                        <h2><i class="far fa-square"></i>{{ $t('Message.MessTit2') }}</h2>
                        <p>
                            {{ $t('Message.MessCon3L1') }}
                        </p>
                        <p>
                            {{ $t('Message.MessCon3L2') }}
                        </p>
                    </div>
                </section>

            </article>
        </div>
    </div>
</template>

<style>
.MainContent {
    min-width: 1390px;
}

.meassageMainArea {
    width: 100%;
    height: 650px;
    background-size: cover;
    background-position: center;
    position: relative;
}

.centeredText {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    border-radius: .6rem;
    background-color: rgba(239, 236, 236, 0.8);
    width: 500px;
}

.centeredText p {
    position: relative;
    text-align: center;
    color: #000;
    margin: 0;
    padding: 0.5rem 0;
}

.meassageMainArea p:nth-of-type(1) {
    font-size: 7.5rem;
}

.meassageMainArea p:nth-of-type(2) {
    font-size: 1.5rem;

}

.mainContents {
    margin: auto;
    width: 960px;
}

figure.intTitle {
    position: relative;
    width: 100%;
}

.imgName>img {
    position: absolute;
    top: -180px;
    width: 120px;
    left: 20px;
    border: 3px solid #ffffff;
    border-radius: 10px;
}

.imgName h3 {
    padding-left: 20px;
    padding-top: 12px;
    font-size: 150%;
    color: #000000;
    font-weight: bold;
    border-bottom: none;
    margin: -90px 0 0;
    line-height: 1.2em;
}

figure.intTitle figcaption p {
    font-size: 100%;
    padding: 0 0 0 0;
    line-height: 1.8em;
    margin: 20px;
}

.mainContents p {
    font-size: 100%;
    line-height: 2.5em;
    vertical-align: baseline;
    padding: 0 0 20px;
}
.interviewWrap .interviewBox {
    border-top: 1px solid #696060;
    margin: 20px auto;
}

.interviewWrap .interviewBox p {
    margin: 0 auto 20px;
    width: 95%;
}

.interviewWrap .interviewBox img {
    top: 50%;
    left: 50%;
    transform: translate(10%, 7%);
}

.interviewWrap .interviewBox video {
    width: 100%;
    height: 100%;
    margin: 20px auto;
    display: block;
}

video {
    object-fit: contain;
    overflow-clip-margin: content-box;
    overflow: clip;
}

.interviewWrap .interviewBox h2 {
    font-size: 120%;
    font-weight: bold;
    background: none;
    color: #000000;
    text-indent: 0;
    margin: 20px auto 10px;
    width: 95%;
}
#ftEntry .Btn{
    text-align: center;
}
</style>