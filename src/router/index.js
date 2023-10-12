//createRouter 创建路由实例 
//createWebHistory 创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'
import Company from '@/views/Company/index.vue'
import Access from '@/views/Access/index.vue'
import Info360 from '@/views/Info360/index.vue'
import ModelingService from '@/views/ModelingService/index.vue'
import Info360Service from '@/views/Info360Service/index.vue'
import RobotEyeWalker4D from '@/views/RobotEyeWalker4D/index.vue'
import RobotEyeWalker4DExample from '@/views/RobotEyeWalker4DExample/index.vue'
import BiForArchiCad from '@/views/BiForArchiCad/index.vue'
import BiForArchiCadContent from '@/views/BiForArchiCadContent/index.vue'
import Question from '@/views/Question/index.vue'
import Recruit from '@/views/Recruit/index.vue'
import Message from '@/views/Message/index.vue'
import Careers from '@/views/Careers/index.vue'
import Usfactory from '@/views/Usfactory/index.vue'
import LoginForm from '@/views/LoginForm/index.vue'
import BasicInfo from '@/views/BasicInfo/index.vue'
import ConfirmationPage from '@/views/ConfirmationPage/index.vue'
import News from '@/views/News/index.vue'
import Login from '@/views/Login/index.vue'
import News20230611 from '@/views/News20230611/index.vue'
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
            path: '/News',
            name: 'News',
            component: News,

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
            path: '/Info360',
            component: Info360
        },
        {
            path: '/ModelingService',
            component: ModelingService
        },
        {
            path: '/Info360Service',
            component: Info360Service
        },
        {
            path: '/RobotEyeWalker4D',
            component: RobotEyeWalker4D
        },
        {
            path: '/RobotEyeWalker4DExample',
            component: RobotEyeWalker4DExample
        },
        {
            path: '/BiForArchiCad',
            component: BiForArchiCad,
            name: 'BiForArchiCad'
        },
        {
            path: '/BiForArchiCadContent',
            component: BiForArchiCadContent,
            name: 'BiForArchiCadContent'
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
            path: '/news/:id',
            name: 'News20230818',
            component: News20230818,
            props: true,
        },
        {
            path: '/news/:id',
            name: 'News20230611',
            component: News20230611,
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
    },




})

export default router