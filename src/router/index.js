//createRouter 创建路由实例 
//createWebHistory 创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'
import Company from '@/views/Company/index.vue'
import Access from '@/views/Access/index.vue'
import Question from '@/views/Question/index.vue'
import Recruit from '@/views/Recruit/index.vue'
import Message from '@/views/Message/index.vue'
import Careers from '@/views/Careers/index.vue'
import Faq from '@/views/Faq/index.vue'
import AboutUs from '@/views/AboutUs/index.vue'
import Usfactory from '@/views/Usfactory/index.vue'
import LoginForm from '@/views/LoginForm/index.vue'
import BasicInfo from '@/views/BasicInfo/index.vue'
import ConfirmationPage from '@/views/ConfirmationPage/index.vue'
import News from '@/views/News/index.vue'
import Login from '@/views/Login/index.vue'
import News20230818 from '@/views/News20230818/index.vue'
import LoginNewMember from '@/views/LoginNewMember/index.vue'
import PwForgot from '@/views/PwForgot/index.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    // path和component对应关系的位置
    routes: [

        {
            path: '/',
            component: Home
        },

        {
            path: '/Company',
            component: Company
        },
        {
            path: '/Access',
            component: Access
        },
        {
            path: '/Question',
            component: Question
        },

        {
            path: '/Recruit',
            component: Recruit
        },

        {
            path: '/Message',
            component: Message
        },


        {
            path: '/Careers',
            component: Careers
        },


        {
            path: '/Faq',
            component: Faq
        },


        {
            path: '/AboutUs',
            component: AboutUs
        },
        {
            path: '/Usfactory',
            component: Usfactory
        },
        {
            path: '/LoginForm',
            component: LoginForm

        },
        {
            path: '/BasicInfo',
            component: BasicInfo,
            name: BasicInfo,
        },
        {
            path: '/ConfirmationPage',
            name: 'ConfirmationPage',
            component: ConfirmationPage
        },
        {
            path: '/News',
            name: 'News',
            component: News,

        },
        {
            path: '/news/:id',
            name: 'News20230818',
            component: News20230818,
            props: true,
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login
        },
        {
            path: '/LoginNewMember',
            name: 'LoginNewMember',
            component: LoginNewMember
        },
        {
            path: '/PwForgot',
            name: 'PwForgot',
            component: PwForgot
        },



    ],
    scrollBehavior() {
        return {
            top: 0
        }
    }


})

export default router