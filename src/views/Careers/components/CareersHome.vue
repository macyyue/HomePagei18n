<script>
</script>
<template>
    <div class="mainContent">
        <div class="careersMainArea delayed-image"><img src="@/assets/image/CareesPage/img10.jpg" alt=""
                style="width: 100%; height:100% ;">
            <div class="line js-anim-elm is_active">
                <div class="item item01"></div>
                <div class="item item02"></div>
            </div>
            <div class="careersCenteredText">
                <p>CAREERS</p>
                <p>{{$t('Careers.MainTitle')}}</p>
            </div>
        </div>
        <article class="recruitWrap">
            <div class="infoTable">
                <table>
                    <tr>
                        <th><span>{{$t('Careers.CareTit1')}}</span></th>
                        <td>
                            <p>{{$t('Careers.CareCon1')}}
                            </p>
                            <br>
                            <p>{{$t('Careers.CareSubTit1')}}<br />
                                {{$t('Careers.CareCon2')}}  
                            </p>
                            <p>{{$t('Careers.CareSubTit2')}}<br />
                                {{$t('Careers.CareCon3')}}
                            </p>
                            <p>{{$t('Careers.CareSubTit3')}}<br />
                                {{$t('Careers.CareCon4')}}
                            </p>
                            <p>{{$t('Careers.CareCon5')}}</p>
                        </td>
                    </tr>
                    <tr>
                        <th><span>{{$t('Careers.CareTit2')}}</span></th>
                        <td>
                            <p>{{$t('Careers.CareCon6')}}
                                <br />
                                {{$t('Careers.CareCon7')}}<br />
                                {{$t('Careers.CareCon8')}}<br />
                                {{$t('Careers.CareCon9')}}
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <th><span>{{$t('Careers.CareTit3')}}</span></th>
                        <td>
                            <p>{{$t('Careers.CareSubTit4')}}
                                <br />
                                {{$t('Careers.CareCon10')}}<br />
                                {{$t('Careers.CareCon11')}}
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <th><span>{{$t('Careers.CareTit4')}}</span></th>
                        <td>
                            <p>{{$t('Careers.CareCon12')}}<br />
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <th><span>{{$t('Careers.CareTit5')}}</span></th>
                        <td>
                            <p>{{$t('Careers.CareCon13')}}</p>
                        </td>
                    </tr>
                    <tr>
                        <th><span>{{$t('Careers.CareTit6')}}</span></th>
                        <td>
                            <p>{{$t('Careers.CareCon14')}}<br />
                                {{$t('Careers.CareCon15')}}<br />
                                {{$t('Careers.CareCon16')}}</p>
                        </td>
                    </tr>
                    <tr>
                        <th><span>{{$t('Careers.CareTit7')}}</span></th>
                        <td>
                            <p>{{$t('Careers.CareCon17')}}<br />
                                {{$t('Careers.CareCon18')}}<br />

                            </p>
                        </td>
                    </tr>
                    <tr>
                        <th><span>{{$t('Careers.CareTit8')}}</span></th>
                        <td>
                            <p>{{$t('Careers.CareCon19')}}<br />
                                {{$t('Careers.CareCon20')}}<br /><br />
                                {{$t('Careers.CareTit9')}}<br />
                                {{$t('Careers.CareCon21')}}<br />
                                {{$t('Careers.CareCon22')}}<br />
                                {{$t('Careers.CareCon23')}}<br />
                                {{$t('Careers.CareCon24')}}</p>
                        </td>
                    </tr>
                    <tr>
                        <th><span>{{$t('Careers.CareTit10')}}</span></th>
                        <td>
                            <p>{{$t('Careers.CareCon25')}}
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <th><span>{{$t('Careers.CareTit11')}}</span></th>
                        <td>
                            <p>{{$t('Careers.CareCon26')}}<br />
                                {{$t('Careers.CareCon27')}}<br />
                                {{$t('Careers.CareCon28')}}<br />
                                {{$t('Careers.CareCon29')}}<br />
                                {{$t('Careers.CareCon30')}}<br />
                                {{$t('Careers.CareCon31')}}<br />
                                {{$t('Careers.CareCon32')}}<br />
                                {{$t('Careers.CareCon33')}}</p>
                        </td>
                    </tr>
                    <tr>
                        <th><span>{{$t('Careers.CareTit12')}}</span></th>
                        <td>
                            <p>{{$t('Careers.CareCon34')}}<br />
                                {{$t('Careers.CareCon35')}}<br />
                                {{$t('Careers.CareCon36')}}<br />
                                {{$t('Careers.CareCon37')}}<br />
                                {{$t('Careers.CareCon38')}}<br />
                                {{$t('Careers.CareCon39')}}<br />
                                {{$t('Careers.CareCon40')}}<br />
                                {{$t('Careers.CareCon41')}}</p>
                        </td>
                    </tr>
                    <tr>
                        <th><span>{{$t('Careers.CareTit13')}}</span></th>
                        <td>
                            <p>
                                {{$t('Careers.CareCon42')}}
                            </p>
                            <p><router-link to="/Info360" id="goods">{{$t('Careers.CareCon43')}}</router-link><br />
                                <router-link to="/BiForArchiCad" id="goods">{{$t('Careers.CareCon44')}}</router-link>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <th style="border-bottom: solid 1px #dadada;"><span>{{$t('Careers.CareTit14')}}</span></th>
                        <td style="border-bottom: solid 1px #dadada;">
                            <p>{{$t('Careers.CareCon45')}}
                            </p>
                        </td>
                    </tr>
                </table>
            </div>
        </article>
    </div>


</template>

<style>
.mianContent {
    min-width: 1390px;
}

* {
    padding: 0;
    margin: 0;
    border: 0;
    border-spacing: 0;
}

.careersMainArea {
    width: 100%;
    height: 650px;
    background-size: cover;
    background-position: center;
    position: relative;
}

.careersCenteredText {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    border-radius: .6rem;
    background-color: #efececcc;
    width: 500px;
}

.centeredText p {
    position: relative;
    text-align: center;
    color: #000;
    margin: 0;
    padding: 0.5rem 0;
}

.careersMainArea p:nth-of-type(1) {
    font-size: 7.5rem;
}

.careersMainArea p:nth-of-type(2) {
    font-size: 1.5rem;

}

.recruitWrap {
    width: 1160px;
    padding: 100px 0;
    margin: auto;
}

.recruitWrap table th {
    width: 12em;
    padding: 15px 0 15px 15px;
    line-height: 1.6em;
    background: #e7e9eb;
    font-weight: 700;
    color: #000;
    vertical-align: top;

}

.infoTable th,
.infoTable td {
    box-sizing: border-box;
    border-top: solid 1px #dadada;
}

.recruitWrap table th span {
    display: inline-block;
    vertical-align: middle;
    font-size: 1.3rem;
    padding: 15px 40px;
}

.infoTable p {
    font-size: 88.5%;
    line-height: 2.5em;
    vertical-align: baseline;
}

.infoTable td {
    padding: 25px 40px;
}

#goods {
    color: blue;
}

#goods:hover {
    text-decoration: none;
}
</style>