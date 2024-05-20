<template>
    <div id="menu__contents__wrap">
        <div id="contents__wrap">
            <div id="menu__area">
                <div id="contents__area__wrap">
                    <div id="contents__title__wrap">
                        <div id="main__contents" class="main__contents">
                            <div class="agree__textbox">
                                {{ $t('LoginForm.LoginFoConL1') }}<br>
                                {{ $t('LoginForm.LoginFoConL2') }}<b>{{ $t('LoginForm.LoginFoConL3') }}</b>。
                            </div>
                            <div class="agree__rule">
                                {{ $t('LoginForm.LoginFoTextL1') }}<br>
                                <br>
                                {{ $t('LoginForm.LoginFoTextL2') }}<br>
                                {{ $t('LoginForm.LoginFoTextL3') }}<br>
                                <br>
                                {{ $t('LoginForm.LoginFoTextL4') }}<br>
                                <br>
                                {{ $t('LoginForm.LoginFoTextL5') }}<br>
                                <br>
                                {{ $t('LoginForm.LoginFoTextL6') }}<br>
                                {{ $t('LoginForm.LoginFoTextL7') }}<br>
                                <br>
                                {{ $t('LoginForm.LoginFoTextL8') }}<br>
                                <br>
                                {{ $t('LoginForm.LoginFoTextL9') }}<br>
                                <br>
                                {{ $t('LoginForm.LoginFoTextL10') }}<br>
                                <br>
                                {{ $t('LoginForm.LoginFoTextL11') }}<br>
                                <br>
                                {{ $t('LoginForm.LoginFoTextL12') }}<br>
                                {{ $t('LoginForm.LoginFoTextL13') }}<br>
                                {{ $t('LoginForm.LoginFoTextL14') }}<br>
                                <br>
                                {{ $t('LoginForm.LoginFoTextL15') }}<br>
                                {{ $t('LoginForm.LoginFoTextL16') }}<br>
                                {{ $t('LoginForm.LoginFoTextL17') }}<br>
                                <br>
                                {{ $t('LoginForm.LoginFoTextL18') }}<br>
                                {{ $t('LoginForm.LoginFoTextL19') }}<br>
                                {{ $t('LoginForm.LoginFoTextL20') }}<br>
                                <br>
                                {{ $t('LoginForm.LoginFoTextL21') }}<br>
                                {{ $t('LoginForm.LoginFoTextL22') }}<br>
                                <br>
                            </div>
                            <form method="post" action="agreement" name="form1" autocomplete="off">
                                <input name="fb_csrf" value="@B_@ET_aFWjfqyxf3jcCVA7nYN_Li)c47ufG)ibhi)z(hEP+4Hc4#eSQC"
                                    type="hidden">
                                <div class="form_button">
                                    <router-link to="/Login">
                                        <input id="submit" class="btn__l btn__submit" name="submit"
                                            :value="$t('LoginForm.Agree')" type="submit">
                                    </router-link>
                                    <router-link to="/Careers">
                                        <input id="submit" class="btn__l btn__submit" name="submit"
                                            :value="$t('LoginForm.disagree')" type="submit">
                                    </router-link>
                                </div><!-- form_button end -->
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
#page__all div #menu__contents__wrap {
    background: #fff;
}

#menu__contents__wrap {
    flex: 1 0 auto;
    position: relative;
    width: 100%;
    height: auto;
}

#page__all div#contents__wrap {
    background: transparent;
}

#contents__wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 980px;
    height: 100%;
    margin: 90px auto;
}

#page__all div#menu__area {
    background: transparent;
}

.nomenu #menu__area {
    display: none;
}

div#page__all #contents__area__wrap {
    padding: 30px 0;
}

#contents__title__wrap {
    margin: 0 0 25px;
}

#contents__title__wrap #contents__title {
    width: 100%;
}

#contents__title {
    position: relative;
    border-bottom: 1px solid #dddcd6;
    box-sizing: border-box;
    width: auto;
    margin: 0 auto;
    padding: 0 12px 10px 15px;
}

#contents__title p {
    vertical-align: middle;
    font-size: 16px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #989582;
}

#main__contents {
    position: relative;
}

#main__contents {
    width: 940px;
    margin: 0 auto;
    /* line-height: 50px; */
    padding-left: 20px;
}

.agree__textbox {
    width: 100%;
    margin: 20px 0;
}

.agree__rule {
    box-shadow: 0 2px 6px -4px rgba(0, 0, 0, 0.2) inset, 0 2px 4px -4px rgba(0, 0, 0, 0.2) inset;
    border: 1px solid #ccc;
    box-sizing: border-box;
    width: calc(100% - 200px);
    height: 300px;
    margin: 15px auto 0;
    padding: 15px;
    overflow: auto;
    font-size: small;

}

.form__bottom__textbox {
    border-top: 1px solid #ccc;
    margin-top: 20px;
    padding: 20px 0 10px;
    text-align: center;
}

.form_button {
    text-align: center;
    margin: 15px 0 30px;
}

.btn__l.btn__submit {
    background-color: #9198A0;
    color: #fff;
    border-bottom: 3px solid #C8CCD0;
    border-radius: 5px;
}

.btn__l {
    min-width: 100px;
    margin: 0 10px;
    padding: 12px 15px;
    font-size: 14px;
}

.btn__l.btn__submit:hover {
    background-color: #C8CCD0;
}
</style>