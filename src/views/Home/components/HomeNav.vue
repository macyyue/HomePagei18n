<script>
export default {    
    data(){
        return{
      
            languages: ['日本語', 'English', '简体中文'],
            selectedLanguage: '',
            isDropdownOpen: false,
            isNavOpen:false,
            isNavHidden: false
           }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeUnmount() { 
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods:{
            toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;

           },
            closeDropdown() {
           this.isDropdownOpen = false;
          },
          selectLanguage(language) {
          this.selectedLanguage = language;
          this.isDropdownOpen = false;
          },
          navDropdown(){
            this.isNavOpen = !this.isNavOpen;
          },
          handleScroll() {
      const currentScrollPosition = window.scrollY;

      // 检查滚动方向
      if (currentScrollPosition > this.lastScrollPosition) {
        // 向下滚动，隐藏导航栏
        this.isNavHidden = true;
       } else {
        // 向上滚动，显示导航栏
        this.isNavHidden = false;
       }

      this.lastScrollPosition = currentScrollPosition;
      },
  
      
     }
    }
</script>

<template>

 <div class="navi" :class="{'navi-hidden': isNavHidden}"> 
    <div class="logo"> 
            <h1>
                <img src="@/assets/UsLogo.svg" style="height: 35px; width: 35px;" alt="">
            <a href=""> U's Factory</a>
        </h1>
       </div>

<div class="ask-language">
        <div class="overlay1">
            <router-link to="/Question">お問い合わせ</router-link>
        </div>

        <div class="overlay2">
         
            <a href="#" id="language" @click="toggleDropdown">LANGUAGE</a>
            <a href="#" @click="toggleDropdown">
            <span id="earth-icon"></span>     
      </a>
      <div v-show="isDropdownOpen" @click="closeDropdown" class="dropdown-menu">
        <ul class="language-list">
          <li v-for="(language, index) in languages" :key="index" @click="selectLanguage(language)">
            {{ language }}
          </li>
        </ul>
         </div>
        </div>
        <div class="overlay3"> 
            <router-link to="/Login">ログイン</router-link>
        </div >
      
    <div class="header-wrapper">
    <nav>
        <div class="menu-item">
            <router-link to="/Company">会社概要</router-link></div>
        <div class="menu-item">
            <router-link to="/Access">アクセス</router-link></div> 
        <div class="menu-item dropdown" @mouseenter="isNavOpen = true" @mouseleave="isNavOpen = false">
        <a href="#">商品紹介</a>
        <div class="navDropdown-menu" v-show="isNavOpen">
            <ul class="navDropdown-meg">
            <li> 
                <router-link to="/Info360" class="override-link-style">INFO360</router-link>
            </li>
            <li><a href="">BI for ArchiCAD</a></li>
            </ul>
        </div>
        </div>
        <div class="menu-item"><a href="https://us-factory.jp/media/">実績掲載</a></div>
        <div class="menu-item"><router-link to="/News">ニュース</router-link></div>
        <div class="menu-item"><router-link to="/Recruit">採用情報</router-link></div>

    </nav>
    </div>
  </div>
</div>
<div class="home-video">
   
   <div class="home-video-title">建設業界の慣習を覆す</div>
   <video id="video" src="@/assets/みなとみらい_Twinmotion.mp4" playsinline  muted  loop style="width: 100%;" >
    <!-- autoplay 自动播放 -->
   </video>
</div>
</template>
<style scoped>
.navi {
    z-index: 3;
    top: 0;
    max-width: 100%;
    width: 100%;
    height: 100%;
    background-color: #454545;
    transition: all 450ms cubic-bezier(.23,1,.32,1) 0s;
}
.navi-hidden {
  transform: translateY(-100%);
  opacity: 0;
}

@media (max-width: 700px) {
    .navi {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        
    }
    .ask-language,
    .header-wrapper {
        display: none;
    }
    .logo {
        display: block;
        margin-top: 0;
        margin-left: 0;
    }
    .logo a {
        font-size: 20px;
        line-height: 80px;
    }
}

.clearfix::before,
.clearfix::after {
    content: '';
    display: table;
}

.clearfix::after {
    clear: both;
}

.overlay1 {
    display: inline-flex;
    position: absolute;
    top: 0%;
    right: 0%;
    transform: translate(-200%, 77%);
}

.overlay1 a {
    display: block;
    color: #dcdcdc;
    text-decoration: none;
    font-size: 15px;
    font-weight: bold;
}

.overlay2 {
    display: inline-flex;
    position: absolute;
    float: right;
    top: 0%;
    right: 0%;
    transform: translate(-15%, 70%);
}

.overlay2 a {
    display: block;
    color: #dcdcdc;
    text-decoration: none;
    font-size: 15px;
    font-weight: bold;

}
#language{
    transform: translate(-15%, 21%);
}

#earth-icon {
    float: right;
    width: 20px;
    height: 20px;
    margin-bottom: 2px;
    background-image: url(@/assets/earth.svg);
    vertical-align: middle;
    top: 0%;
    right: 0%;
    transform: translate(-550%, 10%);
}
.overlay3 {
    display: inline-flex;
    position: absolute;
    top: 0%;
    right: 0%;
    transform: translate(-510%, 77%);
}

.overlay3 a {
    display: block;
    color: #dcdcdc;
    text-decoration: none;
    font-size: 15px;
    font-weight: bold;
}
.dropdown-menu {
    position: absolute;
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

.dropdown {
    position: relative;
    z-index: 3;
}

.navDropdown-menu {
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
}

.navDropdown-meg {
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
}

.home-video {
   z-index: 2;
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