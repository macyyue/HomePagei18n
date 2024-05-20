import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BackToTop from '@/views/BackToTop/BackToTop.vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'viewerjs/dist/viewer.css'
import i18n from '@/Language/index'
// import logger from '@/logger/index'

const app = createApp(App)
const pinia = createPinia();

// app.use(logger)
app.component('BackToTop', BackToTop);
app.use(router)
app.mount('#app')
app.use(pinia)
app.use(i18n)
app.use(ElementPlus); // 使用 Element Plus 插件

