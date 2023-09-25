<script>

</script>
<template>
    
 <div class="news_list_con">
        <h3 > <span>NEWS</span> </h3>
      
        <ul>
            <li><a href="">「BI For Archicad」が国交省の建築BIM加速化事業で補助対象となるソフトウェアに認定されました</a><span>2023.02.14</span></li>
            <li><a href=""> 内装業者のための積算・発注業務革命とは</a><span>2022.12.28</span></li>
            <li><a href=""> 躍進企業応援マガジン COMPANYTANK(カンパニータンク) 2022年9月号にインタビューが掲載されました</a><span>2022.09.16</span></li>
            <li><a href=""> 3次元計測モデリングサービス『Info360®』が好調</a><span>2022.08.23</span></li>
            <li><a href=""> BI Structureが各社に必要とされる理由とは</a><span >2022.07.25</span></li>
            
        </ul>
       
        <div class="news-past">
            <router-link to="/News">
            <a href=""> 一覧へ&nbsp;&nbsp;</a> 
             </router-link>
        </div>
    </div>
    



</template>
<style>
* {
    margin: 0;
    padding: 0;
}

@media screen and (min-width: 641px) and (max-width: 1000px){
.news_list_con {
    width: 100%;
}
}
.news_list_con {
    display: block;
    height: 399px;
    background-color: #fff;
    margin: 36px 0 26px;
    padding-left: 20px;
    font-size: 18px;
    line-height: 18px;
    font-weight: 400;
}

.news_list_con h3 {
    height: 60px;
    border-bottom: 1px solid #ddd;
    text-align: center;
}

.news_list_con h3 span {
    height: 50px;
    line-height: 1.4;
    font-family: "Montserrat", YuGothic, "Noto Sans Japanese", "游ゴシック", Verdana, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, sans-serif;
    font-weight: 600;
    margin: 0 auto;
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.news_list_con ul {
    display: inline-block;
    margin: 0 30%;
    padding: 15px 0;
    list-style: none;
}

.news_list_con li {
    position: relative;
    height: 37px;
    line-height: 37px;
}

.news_list_con li a:before {
    content: "·";
}

.news_list_con li a {
    float: left;
    font: normal 14px/36px "";
    color: #524e4e;
    width: 690px;
}

.news_list_con li a:hover {
    color: #121117;
    box-shadow: 0 2px 10px #636363;
    width: 690px;
}

.news_list_con li span {
    margin-right: -30%;
    float: right;
    transform: translateX(-50%);
}

.news-past {
    text-align: center;
    margin-top: 20px;
}

.news-past a {
    display: inline-block;
    width: 100px;
    height: 30px;
    text-decoration: none;
    text-align: center;
    border-radius: .25rem;
    border: 1px solid rgb(100, 94, 94, .3);
    box-shadow: 1px 1px 1px 1px rgba(46, 45, 45, 0.1);
    line-height: 1.8;
    font-family: "Montserrat", YuGothic, "Noto Sans Japanese", "游ゴシック", Verdana, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, sans-serif;
    font-size: 1rem;
    color: black;
}

.news-past a img {
    display: inline-block;
    top: 0;
    transform: translateY(10%);
    width: 13px;
    height: 13px;
}

.news-past a:hover {
    background-color: rgba(90, 86, 86, 0.1);
}
</style>



