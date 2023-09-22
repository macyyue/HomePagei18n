import { createApp } from 'vue'
import { createPinia } from 'pinia'
import BackToTop from '@/views/BackToTop/BackToTop.vue'
import App from './App.vue'
import router from './router'
import stores from './stores/counter';
import ElementPlus from 'element-plus';


// 引入初始化样式文件
// import '@/styles/common.scss'


// 测试接口函数
// import { getCategory } from '@/apis/testApi'
// getCategory().then(res => {
//     console.log(res);
// })

const app = createApp(App)
app.component('BackToTop', BackToTop);
app.use(createPinia())
app.use(router)
app.mount('#app')
app.use(stores)
app.use(ElementPlus); // 使用 Element Plus 插件